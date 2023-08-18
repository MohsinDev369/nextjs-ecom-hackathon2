import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
    apiVersion: "2023-08-16"
});

export async function POST(req: NextRequest) {
    const body: any = await req.json();
    // console.log(body.cartItems);
    try {
        if (body.cartItems.length > 0) {
            const session = await stripe.checkout.sessions.create({
                submit_type: "pay",
                mode: "payment",
                payment_method_types: ["card"],
                billing_address_collection: "auto",
                shipping_options: [
                    { shipping_rate: "shr_1NgYPgGczF5IBcMi80MFseta" },
                ],
                invoice_creation: {
                    enabled: true,
                },
                line_items: body.cartItems.map((item: any) => {
                    return {
                        price_data: {
                            currency: "pkr",
                            product_data: {
                                name: item.name,
                            },
                            unit_amount: item.price * 100,
                        },
                        quantity: item.quantity,
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1,
                            maximum: 10,
                        },
                    };
                }),
                phone_number_collection: {
                    enabled: true,
                },
                success_url: `${req.headers.get("origin")}/success`,
                cancel_url: `${req.headers.get("origin")}/?canceled=true`,
            });
            return NextResponse.json({ session });
        } else {
            return NextResponse.json({ message: "No Data Found" });
        }
    } catch (err: any) {
        console.log(err);
        return NextResponse.json(err.message);
    }
    return NextResponse.json(200);
}