<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\AdminActivityResource;
use App\Models\Activity;
use Illuminate\Http\Request;

class AdminActivityController extends Controller
{
    public function index(Request $request)
    {

        $oneMonthAgo = now()->subMonth();
        Activity::where('created_at', '<', $oneMonthAgo)->delete();

        $total_activities = Activity::get()->count();


        $search_activities = $request->input('search');

        if ($search_activities) {
            $activities = Activity::query()
                ->where('activity', 'LIKE', "%$search_activities%")
                ->select('id', 'activity', 'created_at')
                ->latest()
                ->fastPaginate(10)->withQueryString();
        } else {
            $activities = Activity::query()
                ->select('id', 'activity', 'created_at')
                ->latest()
                ->fastPaginate(10);
        }

        return inertia('Admin/Log/Index', [
            "activities" => AdminActivityResource::collection($activities),
            "total_activities" => $total_activities
        ]);
    }
}
