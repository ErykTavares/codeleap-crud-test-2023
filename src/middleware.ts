import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
	const profile = JSON.parse(req.cookies.get('profile')?.value || '');

	if (!profile?.userName) {
		if (req.nextUrl.pathname.startsWith('/')) {
			return NextResponse.redirect(new URL('/login', req.url));
		}
	}
}

export const config = {
	matcher: ['/', '/profile']
};
