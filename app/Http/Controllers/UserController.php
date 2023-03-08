<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\TahunAjaran;
use App\Models\Notification;
use Illuminate\Http\Request;
use Barqdev\Autocrud\AutoBase;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Hash;
use Barqdev\Autocrud\Models\AutoRole;
use App\Notifications\UserNotification;

class UserController extends Controller
{
    use AutoBase;

    public function __construct()
    {
        $this->model = new User;
        $this->searchFields = ['name', 'email', 'roles.name']; //Fill with searchable column
        $this->request = new UserRequest;
    }

    public function customRequestData($request)
    {
        if ($request->login) {
            $user = $this->model->whereEmail($request->email)->orWhere('username', $request->email)->first();

            if (!$user || !Hash::check($request->password, $user->password))
                throw new \Exception('Wrong email or password');
            else
                $request['id'] = $user->id;
        }
        if (!$request->role && $request->register)
            $request['role'] = AutoRole::firstOrCreate(['name' => 'guest'])->name;

        if ($request->has('file'))
            $request['avatar'] = $this->upload('files', $request->file);
        if ($request->password)
            $request['password'] = bcrypt($request->password);

        return $request;
    }

    public function callbackAfterStoreOrUpdate($data, $request)
    {
        if ($request['role'] ?? null)
            $data->syncRoles($request['role']);

        // if ($data->hasRole('Validator') && request()->sekolah) {
        //     $data->update([
        //         'userable_type' => 'App\Models\Sekolah',
        //         'userable_id' => $request['sekolah']
        //     ]);
        //     // $data->validasi()->firstOrCreate(['sekolah_id'=>$request['sekolah']]);
        // }

        $data['token'] = $data->createToken('wearebarqun')->plainTextToken;
        // $user->currentAccessToken()->delete()
        return $data;
    }
    public function isAuth()
    {
        # code...
        $user = auth()->user();

        $data = $user->toArray();
        if ($user->hasRole('pendidik')) {
            $data['ptk'] = $user->ptk;
        }

        $data['notifications'] = [
            'all' => $user->notifications,
            'unRead' => $user->unReadNotifications,
            'read' => $user->readNotifications
        ];
        return response($data);
    }

    public function notify($id)
    {
        $user = User::find($id);
        $user->notify(new UserNotification([
            'title' => 'Tahanan Expired',
            'icon' => 'mdi-bell',
            'category' => 'primary',
            'message' => 'Masa Tahanan akan berakhir',
            'link' => '/'
        ]));
        return response()->json('OK');
    }
    public function notifications()
    {
        $data['all'] = auth()->user()->notifications;
        $data['read'] = auth()->user()->readNotifications;
        $data['unRead'] = auth()->user()->unReadNotifications;
        return response()->json($data);
    }
    public function markAsRead($id = null)
    {
        // Notifikasi
        if ($id) {
            $notif = Notification::find($id);
            if (is_null($notif->read_at))
                $notif->update(['read_at' => now()]);
            return response()->json($notif);
            // return redirect($notif->data['link']);
        } else {
            auth()->user()->unReadNotifications->markAsRead();
            return response()->json('OK');
        }
    }
}
