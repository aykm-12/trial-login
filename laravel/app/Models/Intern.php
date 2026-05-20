<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Intern extends Model
{
    protected $fillable = [
        'name',
        'attendance_count',
    ];

    protected $casts = [
        'attendance_count' => 'integer',
    ];
}
