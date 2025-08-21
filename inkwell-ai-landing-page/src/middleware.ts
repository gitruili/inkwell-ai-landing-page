// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AB_TEST_COOKIE = 'ab_test_variant';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const cookieValue = req.cookies.get(AB_TEST_COOKIE)?.value;
  const forced = url.searchParams.get('variant');

  let variant: 'A' | 'B';

  if (forced === 'A' || forced === 'B') {
    variant = forced;
  } else if (cookieValue === 'A' || cookieValue === 'B') {
    variant = cookieValue as 'A' | 'B';
  } else {
    variant = Math.random() < 0.5 ? 'A' : 'B';
  }

  // Clean up the query param so it doesn't propagate to the variant pages
  url.searchParams.delete('variant');
  url.pathname = variant === 'A' ? '/variants/page-a' : '/variants/page-b';

  const res = NextResponse.rewrite(url);

  // Refresh or set the cookie when missing or when overriding via query
  if (cookieValue !== variant) {
    res.cookies.set(AB_TEST_COOKIE, variant, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
  }

  return res;
}

export const config = {
  matcher: ['/'],
};
