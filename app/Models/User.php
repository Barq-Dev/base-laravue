<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Barqdev\Autocrud\Partials\UserTrait;
use Illuminate\Notifications\Notifiable;
use Spatie\Activitylog\Traits\LogsActivity;
use Barqdev\Autocrud\Partials\LocalScopeTrait;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, UserTrait, LocalScopeTrait, HasRoles;
    use Notifiable;
    // use LogsActivity;
    protected $appends = ['all_permissions', 'avatar_link', 'role', 'role_list'];
    // protected static $logAttributes = ['name', 'email'];

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'username',
        'name',
        'email',
        'password',
        'avatar',
        'userable_type',
        'userable_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'meta' => 'array',
    ];

    public function validasi()
    {
        return $this->hasOne(Validasi::class);
    }

    public function userable()
    {
        return $this->morphTo();
    }
    public function validator()
    {
        return $this->hasOne(Validator::class);
    }
    public function article()
    {
        return $this->hasMany(Article::class);
    }

    public function ptk()
    {
        return $this->hasOne(PendidikTenagaKependidikan::class);
    }
    public function pesertaDidik()
    {
        return $this->hasOne(PesertaDidik::class);
    }

    public function getRoleListAttribute()
    {
        return $this->roles->pluck('name');
    }
}
