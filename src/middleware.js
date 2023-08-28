import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log("Middleware executed 1");

    const token = request.cookies.get('authToken')?.value;
    console.log("Middleware token : ", token);

    const loggedInUserNotAccessPath = request.nextUrl.pathname === "/login" || request.nextUrl.pathname==="/signup" ;

    if(request.nextUrl.pathname === "/api/login" || request.nextUrl.pathname === "/api/users")
    {
      return;
    }

    if(loggedInUserNotAccessPath)
    {
      if(token)
      {
        console.log("middleware execute 2");
        return NextResponse.redirect(new URL('/profile/users', request.url));
      }
    }
    else{
      if(!token)
      {
        if(request.nextUrl.pathname.startsWith("/api"))
        {
          return NextResponse.json({
            message : "Access Denied!",
            success : false,
          },
          {
            status : 401
          })
        }
        return NextResponse.redirect(new URL('/login', request.url));
      }
      else
      {
        //verify is token is correct or tempered.
      }
    }
  
    // console.log("middleware executed 2");
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/','/add-task','/login','/signup', '/show-task', '/profile/:path*', '/api/:path*']
}