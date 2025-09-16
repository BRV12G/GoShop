import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
const unauthorizedRoutes = ["/auth/login", "/auth/signUp"];
export function middleware(request: NextRequest) {
    const auth = request.cookies.get("Authentication")?.value;
    if (!auth && !unauthorizedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
}
