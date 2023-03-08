<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Tahanan;
use Illuminate\Console\Command;
use App\Notifications\UserNotification;

class NotifyUsers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'users:notify';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->reminderMasaPenahanan();

        $this->autoRenewalPenahanan();

        return 0;
    }

    public function autoRenewalPenahanan()
    {
        $dateSP = Carbon::now()->subDay(20)->format('Y-m-d');
        $dateSPP1 = Carbon::now()->subDay(40)->format('Y-m-d');
        $dateSPP23 = Carbon::now()->subDay(30)->format('Y-m-d');

        $tahanans = Tahanan::whereDate('tgl_sprin_penahanan', $dateSP)
            ->orWhereDate('tgl_perpanjangan_penahanan', $dateSPP1)
            ->orWhereDate('tgl_perpanjangan_penahanan_dua', $dateSPP23)
            ->get();

        foreach ($tahanans as $tahanan) {
            if ($tahanan->tgl_sprin_penahanan == $dateSP)
                $tahanan->update(['tgl_perpanjangan_penahanan' => date('Y-m-d')]);
            else if ($tahanan->tgl_perpanjangan_penahanan == $dateSPP1)
                $tahanan->update(['tgl_perpanjangan_penahanan_dua' => date('Y-m-d')]);
            else if ($tahanan->tgl_perpanjangan_penahanan_dua == $dateSPP23)
                $tahanan->update(['tgl_perpanjangan_penahanan_tiga' => date('Y-m-d')]);
        }
    }

    public function reminderMasaPenahanan()
    {
        foreach (range(1, 5) as $day) {

            $dateSP = Carbon::now()->subDay(19 - $day)->format('Y-m-d');
            $dateSPP1 = Carbon::now()->subDay(39 - $day)->format('Y-m-d');
            $dateSPP23 = Carbon::now()->subDay(29 - $day)->format('Y-m-d');


            $tahanans = Tahanan::whereDate('tgl_sprin_penahanan', $dateSP)
                ->orWhereDate('tgl_perpanjangan_penahanan', $dateSPP1)
                ->orWhereDate('tgl_perpanjangan_penahanan_dua', $dateSPP23)
                ->orWhereDate('tgl_perpanjangan_penahanan_tiga', $dateSPP23)
                ->get();

            foreach ($tahanans as $tahanan) {

                $type = null;

                if ($tahanan->tgl_sprin_penahanan == $dateSP)
                    $type = 'Penahanan';
                else if ($tahanan->tgl_perpanjangan_penahanan == $dateSPP1)
                    $type = 'Perpanjangan Penahanan';
                else if ($tahanan->tgl_perpanjangan_penahanan_dua == $dateSPP23)
                    $type = 'Perpanjangan Penahanan Dua';
                else if ($tahanan->tgl_perpanjangan_penahanan_tiga == $dateSPP23)
                    $type = 'Perpanjangan Penahanan Tiga';

                $users = User::whereId($tahanan->created_by)
                    // ->orWhereHasRole('Polda')
                    // ->orWhereHasRole('Admin')
                    ->get();

                foreach ($users as $user) {
                    $notif = [
                        'title' => "Masa Penahanan Berakhir",
                        'icon' => 'mdi-bell',
                        'category' => 'primary',
                        'message' => "H-$day Masa $type $tahanan->nama akan berakhir",
                        'link' => "/tahanan?id=$tahanan->id"
                    ];
                    $user->notify(new UserNotification($notif));
                }
            }
        }
    }
}
