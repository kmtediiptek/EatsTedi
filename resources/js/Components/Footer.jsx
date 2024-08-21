import ApplicationLogo from "@/Components/ApplicationLogo";
import Container from "@/Components/Container";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Footer() {
    return (
        <div className="border-t border-violet-800 bg-red-600 py-10 mt-8 md:mt-16">
            <Container>
                <div className="max-w-2xl mx-auto text-center">
                    <Link href="/" className="text-3xl font-bold text-white">
                        <h3>
                            Eat's <span className="font-light">TEDI</span>
                        </h3>
                    </Link>
                    {/* <img
                        src={`/app/Logo.png`}
                        alt=""
                        width="80"
                        className="mx-auto"
                    /> */}
                    <p className="mt-5 text-white">
                        Thank you for choosing Eat's TEDI as your place to enjoy
                        delicious dishes and an unforgettable cafe experience.
                        We really appreciate your support and our commitment is
                        to provide the best quality and invaluable customer
                        satisfaction.
                    </p>
                    <p className="mt-8 text-white font-mono text-xs">
                        Copyright {new Date().getFullYear()}. Developed by Rachel Ardan Putra Ginting with <a target={"_blank"} className={"text-blue-500 underline"} href={'https://nafhan.site'}> Ghifari Nafhan</a>. All right reserved.
                    </p>
                </div>
            </Container>
        </div>
    );
}
