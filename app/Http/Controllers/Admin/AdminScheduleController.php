<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminScheduleRequest;
use App\Http\Resources\Admin\AdminScheduleResource;
use App\Models\Activity;
use App\Models\Schedule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class AdminScheduleController extends Controller
{
    public function index(Request $request)
    {

        $total_schedule = Schedule::get()->count();

        $search_schedules = $request->input('search');
        if ($search_schedules) {
            $schedules = Schedule::query()
                ->where('day', 'LIKE', "%$search_schedules%")
                ->select('id', 'day', 'open', 'close')
                ->latest()
                ->fastPaginate(10)->withQueryString();
        } else {
            $schedules = Schedule::query()
                ->where('day', 'LIKE', "%$search_schedules%")
                ->select('id', 'day', 'open', 'close')
                ->latest()
                ->fastPaginate(10);
        }

        return inertia('Admin/Schedule/Index', [
            "schedules" => AdminScheduleResource::collection($schedules),
            "total_payments" => $total_schedule
        ]);
    }

    public function store(AdminScheduleRequest $request)
    {
        Schedule::create([
            "day" => $request->day,
            "open" => $request->close,
            "close" => $request->close,
        ]);

        Activity::create([
            "activity" => Auth::user()->day . " Created Schedule " . $request->day
        ]);

        return back();
    }


    public function update(AdminScheduleRequest $request, Schedule $schedule)
    {
        $schedule->update([
            "day" => $request->day ? $request->day : $schedule->day,
            "open" => $request->open ?: $schedule->open,
            "close" => $request->close ?: $schedule->close,
        ]);

        Activity::create([
            "activity" => Auth::user()->day . " Updated Schedule " . $request->day ?: $schedule->day
        ]);

        return back();
    }

    public function destroy(Schedule $schedule)
    {
        if ($schedule->picture) {
            Storage::delete($schedule->picture);
        }


        Activity::create([
            "activity" => Auth::user()->day . " Deleted Schedule " . $schedule->day
        ]);

        $schedule->delete();
        return back();
    }
}
