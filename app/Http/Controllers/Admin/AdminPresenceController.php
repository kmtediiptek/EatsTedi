<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\AdminPresenceResource;
use App\Models\Presence;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use SimpleSoftwareIO\QrCode\Facades\QrCode; // Import kelas QrCode



class AdminPresenceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // Data presensi
        $presensi = [
            "date" => Carbon::now(),
        ];

        // Konversi data presensi ke JSON
        $presensiJson = json_encode($presensi);

        // Generate QR code menggunakan simple/qrcode
        $qr = QrCode::size(400); // Sesuaikan ukuran sesuai kebutuhan
        $qrCodes = $qr->generate($presensiJson)->toHtml();


        $total_presences = Presence::get()->count();

        $search_activities = $request->input('search');

        if ($search_activities) {
            $presences = Presence::query()
                ->where('activity', 'LIKE', "%$search_activities%")
                ->with('user')
                ->select('id', 'user_id', 'presence_date', 'is_presence', 'created_at')
                ->latest()
                ->fastPaginate(10)->withQueryString();
        } else {
            $presences = Presence::query()
                ->with('user')
                ->select('id', 'user_id', 'presence_date', 'is_presence', 'created_at')
                ->latest()
                ->fastPaginate(10);
        }

        return inertia('Admin/Presence/Index', [
            "presences" => AdminPresenceResource::collection($presences),
            "total_presences" => $total_presences,
            'qrCodes' => $qrCodes
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $json = $request->decodedText;
        $decodedArray = json_decode($json, true);

        $date = $decodedArray['date'];

        // Membuat objek Carbon dari string tanggal
        $carbonDate = Carbon::parse($date);

        // Format tanggal sesuai dengan 'Y:M:D'
        $formattedDate = $carbonDate->format('Y:m:d');
        Presence::create([
            "user_id" => $user = $request->user_id,
            "presence_date" => $formattedDate,
            "is_presence" => $user ? 1 : 0,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Presence  $presence
     * @return \Illuminate\Http\Response
     */
    public function show(Presence $presence)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Presence  $presence
     * @return \Illuminate\Http\Response
     */
    public function edit(Presence $presence)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Presence  $presence
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Presence $presence)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Presence  $presence
     * @return \Illuminate\Http\Response
     */
    public function destroy(Presence $presence)
    {
        //
    }
}
