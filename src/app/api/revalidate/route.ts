import { NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

// e.g a webhook to `your-website.com/api/revalidate?tag=collection&secret=<token>`
// e.g a webhook to `http://localhost:3000/api/revalidate?path=/&secret=<token>`
export async function GET(request: NextRequest, res: NextApiResponse) {
    // Check for secret to confirm this is a valid request
    if (
        request.nextUrl.searchParams.get('secret') !== process.env.MY_SECRET_TOKEN
    ) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    const path = request.nextUrl.searchParams.get('path')
    path && revalidatePath(path)
    // console.log("revalidate");
    return NextResponse.json({ revalidated: true, now: Date.now() })
}