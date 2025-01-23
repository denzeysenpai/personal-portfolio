import { goto } from "$app/navigation";


export enum Routes {
    WelcomePage = "00000",
    MyProfilePage = "00010",
    ProjectsOnePage = "00020",
    IntroductionPage = "00001",
    MainPage = "00011",
    ProjectsTwoPage = "00021",
    OthersPage = "00002",
    ContactFormPage = "00012",
    ProjectsThreePage = "00022"
}

const cookieKey : string = "current_pageRoute_portfolio"

function SetCookie(key : string, value: Routes, hours : number) {
  const date = new Date();
  date.setTime(date.getTime() + (hours * 60 * 60 * 1000)); // Convert hours to milliseconds
  const expires = "expires=" + date.toUTCString();
  const encodedValue = encodeURIComponent(value);
  document.cookie = key + "="+encodedValue+";" + expires + ";path=/"; // Setting value to true for simplicity. Adjust as needed.
}

function DeleteCookie(key : string) {
  document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function GetCookie(key : string) {
  const name = key + "=";
  const decodedCookie = decodeURIComponent(document.cookie); // Decode to handle special characters
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1); // Remove leading spaces
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return ""; // Return empty string if cookie is not found
}

function Navigation() {
    let currentRoute : Routes | null = $state<Routes | null>(null)
    const key : string = "mark solante's portfolio key"
    return {

        // Sets the new route
        FlyTo(route : Routes) {
            goto("/?page-view="+route+"#"+btoa(key+route))
            SetCookie(cookieKey, route, 2)
            currentRoute = route
        },

        // This might not get implemented, but I'll leave it here.
        DeleteRouteCookie() {
            DeleteCookie(cookieKey)
        },

        // Returns the current route
        get Current() : Routes | null {
            return currentRoute
        },

        get Key() {
            return key
        }
    }
}

export const Route = Navigation();