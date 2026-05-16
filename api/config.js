// Vercel Serverless Function: /api/config
// This file serves your Supabase credentials securely via environment variables.
//
// ============================================================
// HOW TO CONFIGURE ON VERCEL:
// 1. Go to your Vercel project dashboard
// 2. Settings → Environment Variables
// 3. Add these two variables:
//    Name:  SUPABASE_URL
//    Value: https://YOUR_PROJECT_ID.supabase.co
//
//    Name:  SUPABASE_ANON_KEY
//    Value: eyJhbGci...your full anon key
// ============================================================

export default function handler(req, res) {
    const supabaseUrl     = process.env.SUPABASE_URL;
    const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
        return res.status(500).json({
            error: "Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables on Vercel."
        });
    }

    // Allow the browser to cache this for 60 seconds
    res.setHeader("Cache-Control", "public, max-age=60, stale-while-revalidate=300");

    return res.status(200).json({
        supabaseUrl,
        supabaseAnonKey
    });
}
