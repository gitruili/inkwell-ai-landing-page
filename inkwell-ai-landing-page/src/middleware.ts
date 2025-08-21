// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AB_TEST_COOKIE = 'ab_test_variant';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const cookieValue = req.cookies.get(AB_TEST_COOKIE)?.value;
  const forced = url.searchParams.get('variant');
  const forcedLang = url.searchParams.get('lang');
  const currentLang = req.cookies.get('lang')?.value;

  // Detect lang from path segment if present at root (we only match root-level paths)
  const path = url.pathname;
  const pathLang = path === '/en' || path === '/en/' ? 'en' : path === '/zh' || path === '/zh/' ? 'zh' : undefined;

  let variant: 'A' | 'B';

  if (forced === 'A' || forced === 'B') {
    variant = forced;
  } else if (cookieValue === 'A' || cookieValue === 'B') {
    variant = cookieValue as 'A' | 'B';
  } else {
    variant = Math.random() < 0.5 ? 'A' : 'B';
  }

  // Clean up query params so they don't propagate to the variant pages
  url.searchParams.delete('variant');
  url.searchParams.delete('lang');

  // Determine target lang: forced > pathLang > cookie > default 'en'
  const targetLang = (forcedLang === 'en' || forcedLang === 'zh')
    ? forcedLang
    : (pathLang ?? (currentLang === 'en' || currentLang === 'zh' ? currentLang : 'en'));

  url.pathname = variant === 'A' ? `/${targetLang}/variants/page-a` : `/${targetLang}/variants/page-b`;

  // If user visited a language root (e.g., /en or /zh), do a 302 redirect
  const isLangRoot = path === '/en' || path === '/en/' || path === '/zh' || path === '/zh/';
  const res = isLangRoot ? NextResponse.redirect(url) : NextResponse.rewrite(url);

  // Refresh or set the cookie when missing or when overriding via query
  if (cookieValue !== variant) {
    res.cookies.set(AB_TEST_COOKIE, variant, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
  }

  // Handle locale cookie: set/refresh to targetLang
  if (currentLang !== targetLang) {
    res.cookies.set('lang', targetLang, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });
  }

  return res;
}

export const config = {
  matcher: ['/', '/en', '/zh'],
};
