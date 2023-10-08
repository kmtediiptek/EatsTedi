<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\SendEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SendEmailController extends Controller
{
    public function index(Request $request)
    {
        $data_email = [
            'subject' => 'RANDA',
            'sender_name' => 'rachelardanaputraginting@example.com',
            'isi' => $this->generateEmailContent($request->all()), // Generate email content from the data
        ];

        Mail::to($request->email)->send(new SendEmail($data_email));
        return to_route('admin.transaction');
    }

    private function generateEmailContent($data) {
        $content = '<div style="text-align: center;">';
        $content .= '<h3 style="margin-bottom: 0px; padding-bottom: 4px;"><b>RANDA</b></h3>';
        $content .= '<p style="margin-bottom: 18px">Randa is a point of sales application that is flexible in ordering. Randa itself has sales statistical data. Randa can record finances, orders and even print sales results. The following are promotional materials that can be used for marketing</p>';
        $content .= '<b>Hello, ' . $data['name'] . '</b><br>';
        $content .= '<p>Order Details</p>';
        $content .= '</div>';

        $content .= '<table style="width: 100%; border-collapse: collapse;">';
        $content .= '<thead>';
        $content .= '<tr>';
        $content .= '<th style="padding: 10px; background-color: #f2f2f2; text-align: left;">Menu</th>';
        $content .= '<th style="padding: 10px; background-color: #f2f2f2; text-align: right;">Qty</th>';
        $content .= '<th style="padding: 10px; background-color: #f2f2f2; text-align: right;">Price</th>';
        $content .= '</tr>';
        $content .= '</thead>';
        $content .= '<tbody>';

        foreach ($data['carts'] as $cart) {
            $content .= '<tr>';
            $content .= '<td style="padding: 10px;">' . $cart['product_name'] . '</td>';
            $content .= '<td style="padding: 10px; text-align: right;">' . $cart['quantity'] . '</td>';
            $content .= '<td style="padding: 10px; text-align: right;">Rp. ' . number_format($cart['price'], 0, ',', '.') . '</td>';
            $content .= '</tr>';
        }

        // Informasi Total Price, Charge, dan Change
        $content .= '<tr>';
        $content .= '<td colspan="2" style="text-align: right; padding: 10px;"><b>Total Price:</b></td>';
        $content .= '<td style="text-align: right; padding: 10px;">Rp. ' . number_format($data['total_price'], 0, ',', '.') . '</td>';
        $content .= '</tr>';
        $content .= '<tr>';
        $content .= '<td colspan="2" style="text-align: right; padding: 10px;"><b>Charge:</b></td>';
        $content .= '<td style="text-align: right; padding: 10px;">Rp. ' . number_format($data['charge'], 0, ',', '.') . '</td>';
        $content .= '</tr>';
        $content .= '<tr>';
        $content .= '<td colspan="2" style="text-align: right; padding: 10px;"><b>Change:</b></td>';
        $content .= '<td style="text-align: right; padding: 10px;">Rp. ' . number_format(($data['charge'] - $data['total_price']), 0, ',', '.') . '</td>';
        $content .= '</tr>';

        $content .= '</tbody>';
        $content .= '</table>';

        $content .= '<div style="text-align: center; margin-top:12px;">';
        $content .= 'Thank you for choosing RANDA as your place to enjoy delicious dishes and an unforgettable cafe experience. We really appreciate your support and our commitment is to provide the best quality and invaluable customer satisfaction.<br>';
        $content .= '<b>~ RANDA ~<b><br>';
        $content .= '</div>';

        return $content;
    }

}
