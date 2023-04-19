import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
	const profile = req.cookies.get('profile');

	if (!profile?.value) {
		if (req.nextUrl.pathname.startsWith('/')) {
			return NextResponse.redirect(new URL('/login', req.url));
		}
	}
}

export const config = {
	matcher: ['/']
};
