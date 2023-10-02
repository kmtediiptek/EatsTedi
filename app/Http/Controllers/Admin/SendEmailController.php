<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\SendEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SendEmailController extends Controller
{
    public function index(Request $request) {
        $data_email = [
            'subject' => 'RANDA',
            'sender_name' => 'rachelardanaputraginting@example.com',
            'isi' => $this->generateEmailContent($request->all()), // Generate email content from the data
        ];

        Mail::to($request->email)->send(new SendEmail($data_email));
        return to_route('admin.transaction');
    }

    private function generateEmailContent($data) {
        $content = '<b>Hello, ' . $data['name'] . '</b><br>';
        $content .= '<p>Order Details:</p>';

        foreach ($data['carts'] as $cart) {
            $content .= '<b>Menu:</b> ' . $cart['product_name'] . '<br>';
            $content .= '<b>Qty:</b> ' . $cart['quantity'] . '<br>';
            $content .= '<b>Price:</b> ' . ' Rp. ' . $cart['price'] . '<br><br>';
        }

        $content .= '<b>Total Price:</b> ' . ' Rp. ' . $data['total_price'] . '<br>';
        $content .= '<b>Charge:</b> ' . ' Rp. ' . $data['charge'] . '<br>';
        $content .= '<b>Change:</b> ' . ' Rp. ' . $data['charge'] - $data['total_price'] . '<br><br>';

        $content .= 'Thankyou' . '<br>';
        $content .= '<b>' . '~ RANDA ~' . '<br>';

        return $content;
    }
}
