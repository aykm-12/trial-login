<?php
namespace App\Services\UseCases;

use App\Models\Intern;

class TrackAttendanceUseCase
{
    public function execute(int $internId): array
    {
        $intern = Intern::findOrFail($internId);
        $intern->increment('attendance_count');

        $isCelebration = in_array($intern->attendance_count, [3, 5, 10, 50, 100]);

        return [
            'intern' => $intern,
            'is_celebration' => $isCelebration,
        ];
    }
}
