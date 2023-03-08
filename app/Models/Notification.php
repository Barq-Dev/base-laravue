<?php

namespace App\Models;

use Barqdev\Autocrud\Partials\LocalScopeTrait;
use Illuminate\Notifications\DatabaseNotification;

class Notification extends DatabaseNotification
{
    use LocalScopeTrait;

    public function scopeFilter($query, $request)
    {
        return $query->whereNotifiableId(auth()->user()->id)->orderBy('created_at','desc');
    }
    
}
