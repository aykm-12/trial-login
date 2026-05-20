<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests\CheckInRequest;
use App\Http\Resources\InternResource;
use App\Services\UseCases\GetInternListUseCase;
use App\Services\UseCases\TrackAttendanceUseCase;
use Illuminate\Http\JsonResponse;

class AttendanceController extends Controller
{
    public function index(GetInternListUseCase $useCase): JsonResponse
    {
        $interns = $useCase->execute();
        return response()->json(InternResource::collection($interns));
    }

    public function checkIn(CheckInRequest $request, TrackAttendanceUseCase $useCase): JsonResponse
    {
        $result = $useCase->execute($request->validated()['intern_id']);

        return response()->json([
            'success' => true,
            'intern' => new InternResource($result['intern']),
            'is_celebration' => $result['is_celebration'],
            'message' => "{$result['intern']->name} さん、ナイス出社！",
        ]);
    }
}
