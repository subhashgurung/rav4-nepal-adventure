import { Metadata } from "next";
import Link from "next/link";
import { XCircle, ArrowLeft, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
    title: "Reservation Cancelled",
    description: "Your Toyota RAV4 2026 reservation was cancelled.",
};

export default function CancelPage() {
    return (
        <main className="min-h-screen bg-abyss flex items-center justify-center p-4">
            <div className="max-w-2xl w-full text-center">
                {/* Cancel Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center">
                        <XCircle className="w-12 h-12 text-white/50" />
                    </div>
                </div>

                {/* Heading */}
                <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
                    <span className="text-gradient">Reservation</span>
                    <br />
                    <span className="text-white/50">Cancelled</span>
                </h1>

                {/* Subtext */}
                <p className="text-lg md:text-xl text-white/70 mb-8 max-w-lg mx-auto">
                    Your pre-order was not completed. No charges have been made to your payment method.
                </p>

                {/* Info Card */}
                <div className="glass rounded-2xl p-6 md:p-8 mb-8 text-left">
                    <h2 className="font-headline font-semibold text-xl mb-4 text-white/90">Changed Your Mind?</h2>
                    <p className="text-white/70 mb-4">
                        No worries! The Toyota RAV4 2026 Nepal Adventure Edition will still be here when you&apos;re ready.
                        Your $500 deposit is fully refundable and secures your place in the production queue.
                    </p>
                    <p className="text-white/50 text-sm">
                        If you experienced any issues during checkout, please try again or contact our support team.
                    </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/#footer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-toyota-red hover:bg-toyota-red-dark text-white font-headline font-semibold text-lg uppercase tracking-wider rounded-full transition-all duration-300"
                    >
                        <RefreshCw className="w-5 h-5" />
                        Try Again
                    </Link>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 glass hover:bg-white/10 text-white font-headline font-semibold text-lg uppercase tracking-wider rounded-full transition-all duration-300"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Return Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
