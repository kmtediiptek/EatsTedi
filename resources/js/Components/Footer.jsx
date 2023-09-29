import ApplicationLogo from '@/Components/ApplicationLogo';
import Container from '@/Components/Container';
import React from 'react';

export default function Footer() {
    return (
        <div className="border-t border-purple-800 bg-purple-500 py-10 mt-8 md:mt-16">
            <Container>
                <div className="max-w-2xl mx-auto text-center">
                    <ApplicationLogo className="fill-white text-center w-16 h-16 mx-auto" />
                    <p className="mt-5 text-gray-300">
                    Thank you for choosing QR Cafe as your place to enjoy delicious dishes and an unforgettable cafe experience. We really appreciate your support and our commitment is to provide the best quality and invaluable customer satisfaction. We hope you enjoy your precious time here, and are always ready to welcome you with a smile and friendliness. Thank you for your trust and we hope QR Cafe becomes your favorite destination to enjoy food, drinks and special moments.
                    </p>
                    <p className="font-mono text-sm text-slate-200 mt-10 max-w-lg mx-auto">
                        Designed and built with all the love in the world by the{' '}
                        <strong className="font-semibold text-white">
                            {import.meta.env.VITE_APP_NAME}
                        </strong>{' '}
                        team with the help of our author.
                    </p>

                    <p className='mt-8 text-slate-200 font-mono text-xs'>Copyright {new Date().getFullYear()} All right reserved.</p>
                </div>
            </Container>
        </div>
    );
}
