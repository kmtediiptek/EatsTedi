<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\AdminActivityResource;
use App\Models\Activity;

class AdminActivityController extends Controller
{
    public function index()
    {

        $total_activities = Activity::get()->count();
        $activities = Activity::query()
            ->select('id', 'activity', 'created_at')
            ->latest()
            ->fastPaginate(10);

        return inertia('Admin/Log/Index', [
            "activities" => AdminActivityResource::collection($activities),
            "total_activities" => $total_activities
        ]);
    }
}
