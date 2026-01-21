import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-01-27.acacia',
});

export async function POST(request: NextRequest) {
    try {
        const { origin } = new URL(request.url);

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Toyota RAV4 2026 - Pre-order Reservation',
                            description: 'Reserve your Nepal Adventure Edition RAV4. Fully refundable deposit.',
                            images: [`${origin}/og-image.jpg`],
                        },
                        unit_amount: 50000, // $500.00 in cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/cancel`,
            metadata: {
                product: 'RAV4 2026 Nepal Adventure Edition',
                type: 'pre-order',
            },
        });

        return NextResponse.json({ sessionId: session.id, url: session.url });
    } catch (error) {
        console.error('Stripe checkout error:', error);
        return NextResponse.json(
            { error: 'Failed to create checkout session' },
            { status: 500 }
        );
    }
}
