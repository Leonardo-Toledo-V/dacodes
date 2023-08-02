import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest){
    const token = req.cookies.get('dacodes-auth')?.value;

    if(token === undefined){
        return NextResponse.redirect(new URL("/login", req.url));
      }
    try {
        NextResponse.redirect(new URL("/", req.url));
        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect(new URL("/login", req.url));
    }
}


export const config = {
    matcher: ["/" , "/now-playing", "/popular", "/top-rated", "/upcoming"]
}