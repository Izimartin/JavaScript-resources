// A cookie is a piece of data stored on your computer to be accessed by your browser. 
// You also might have enjoyed the benefits of cookies knowingly or unknowingly. 
// Have you ever saved your Facebook password so that you do not have to type it
// every time you try to login? If yes, then you are using cookies. 
// Cookies are saved as key/value pairs.

// Javascript Set-Cookie:

// You can create cookies using document. cookie property like this.

document.cookie = "cookiename=cookievalue"
// You can even add an expiry date to your Cookie to remove the particular Cookie from the 
// computer on the specified date. The expiry date should be set in the UTC/GMT format. 
// If you do not set the expiry date, the cookie will be removed when the user closes the browser.
document.cookie = "cookiename=cookievalue; expires= Thu, 21 Aug 2014 20:00:00 UTC"
// You can also set the domain and path to specify which domain and to which directories in the specific domain the Cookie belongs to. By default, a cookie belongs to the page that sets the Cookie.
document.cookie = "cookiename=cookievalue; expires= Thu, 21 Aug 2014 20:00:00 UTC; path=/	
//create a cookie with a domain to the current page and a path to the entire domain.
var x =  document.cookie

