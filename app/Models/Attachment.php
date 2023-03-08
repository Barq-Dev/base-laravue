<?php

namespace App\Models;

use Barqdev\Autocrud\AutoModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Attachment extends AutoModel
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'type',
        'status',
        'tags',
        'attachable_type',
        'attachable_id'
    ];

    protected $casts = [
        'tags'=>'array'
    ];

    public function attachable()
    {
        return $this->morphTo();
    }
}
