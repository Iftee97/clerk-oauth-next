import { withClerkMiddleware } from "@clerk/nextjs/server"
const { NextResponse } = require("next/server")

export default withClerkMiddleware((req) => {
  return NextResponse.next()
})

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - static (static files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!static|.*\\..*|_next|favicon.ico).*)",
    "/",
  ],
}
