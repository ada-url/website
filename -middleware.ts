import i18nConfig from './i18n.config.mjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = i18nConfig.locales

function getLocale(request: NextRequest) {
  const localeFromHeader = request.headers.get('Accept-Language')
  const locale = localeFromHeader ? localeFromHeader.split(',')[0] : i18nConfig.defaultLocale
  return locales.includes(locale) ? locale : i18nConfig.defaultLocale
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
  }
}

export const config = {
  matcher: ['/((?!_next).*)'],
}
