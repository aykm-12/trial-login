<?php

namespace Database\Seeders;

use App\Models\Intern;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InternSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Intern::create(['name' => 'インターン1', 'attendance_count' => 2]);
        Intern::create(['name' => 'インターン2', 'attendance_count' => 4]);
        Intern::create(['name' => 'インターン3', 'attendance_count' => 9]);
    }
}
