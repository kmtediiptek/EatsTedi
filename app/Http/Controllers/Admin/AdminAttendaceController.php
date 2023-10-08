<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\AdminPresenceResource;
use App\Models\Presence;
use Illuminate\Http\Request;

class AdminAttendaceController extends Controller
{
    public function index(Request $request)
    {
        $search_users = $request->input('search');

        if ($search_users) {
            $attendaces = Presence::query()
                ->with('user')
                ->whereHas('user', function ($query) use ($search_users) {
                    $query->where('name', 'LIKE', "%$search_users%");
                })
                ->select('id', 'user_id', 'presence_date', 'is_presence', 'created_at')
                ->fastPaginate(10)
                ->withQueryString();
        } else {
            $attendaces = Presence::query()
                ->with('user')
                ->select('id', 'user_id', 'presence_date', 'is_presence', 'created_at')
                ->fastPaginate(10);
        }

        $total_attendace = Presence::get()->count();

        return inertia('Admin/Attendace/Index', [
            "attendaces" => AdminPresenceResource::collection($attendaces),
            "total_attendace" => $total_attendace,
        ]);
    }
}
