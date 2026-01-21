import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Mail } from "lucide-react";

export const metadata: Metadata = {
    title: "Reservation Confirmed",
    description: "Your Toyota RAV4 2026 Nepal Adventure Edition pre-order has been confirmed.",
};

export default function SuccessPage() {
    return (
        <main className="min-h-screen bg-abyss flex items-center justify-center p-4">
            <div className="max-w-2xl w-full text-center">
                {/* Success Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center">
                        <CheckCircle className="w-12 h-12 text-green-500" />
                    </div>
                </div>

                {/* Heading */}
                <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
                    <span className="text-gradient">Reservation</span>
                    <br />
                    <span className="text-green-500">Confirmed!</span>
                </h1>

                {/* Subtext */}
                <p className="text-lg md:text-xl text-white/70 mb-8 max-w-lg mx-auto">
                    Your $500 pre-order deposit for the Toyota RAV4 2026 Nepal Adventure Edition has been successfully processed.
                </p>

                {/* Confirmation Details Card */}
                <div className="glass rounded-2xl p-6 md:p-8 mb-8 text-left">
                    <h2 className="font-headline font-semibold text-xl mb-4 text-toyota-red">What Happens Next?</h2>
                    <ul className="space-y-4 text-white/70">
                        <li className="flex items-start gap-3">
                            <Mail className="w-5 h-5 mt-0.5 text-toyota-red flex-shrink-0" />
                            <span>You&apos;ll receive a confirmation email with your reservation details within 24 hours.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 mt-0.5 text-toyota-red flex-shrink-0" />
                            <span>Our team will contact you when your RAV4 is ready for final customization and delivery scheduling.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 mt-0.5 text-toyota-red flex-shrink-0" />
                            <span>Your deposit is fully refundable if you change your mind before production begins.</span>
                        </li>
                    </ul>
                </div>

                {/* CTA */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-toyota-red hover:bg-toyota-red-dark text-white font-headline font-semibold text-lg uppercase tracking-wider rounded-full transition-all duration-300"
                >
                    Return Home
                    <ArrowRight className="w-5 h-5" />
                </Link>

                {/* Footer Note */}
                <p className="mt-8 text-sm text-white/40 font-mono">
                    Order Reference: #RAV4-{new Date().getFullYear()}-XXXXX
                </p>
            </div>
        </main>
    );
}
