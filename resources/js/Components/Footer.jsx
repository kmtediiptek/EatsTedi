import ApplicationLogo from '@/Components/ApplicationLogo';
import Container from '@/Components/Container';
import React from 'react';

export default function Footer() {
    return (
        <div className="border-t border-purple-800 bg-purple-500 py-10 mt-8 md:mt-16">
            <Container>
                <div className="max-w-2xl mx-auto text-center">
                <img src={`/app/Logo.png`} alt="" width="80" className='mx-auto' />
                    <p className="mt-5 text-gray-300">
                    Thank you for choosing RANDA as your place to enjoy delicious dishes and an unforgettable cafe experience. We really appreciate your support and our commitment is to provide the best quality and invaluable customer satisfaction.
                    </p>
                    <p className='mt-8 text-slate-200 font-mono text-xs'>Copyright {new Date().getFullYear()} All right reserved.</p>
                </div>
            </Container>
        </div>
    );
}
