import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // const access_token = request.cookies.has('access_token');
  // console.log(request.url);

  // // Fix the condition to check if the request URL is exactly '/auth'
  // if (!access_token && request.url !== '/auth') {
  //   return NextResponse.redirect(new URL('/auth/login', request.url).toString());
  // }

  // // Continue processing if the conditions are not met
  // return NextResponse.next();
}
