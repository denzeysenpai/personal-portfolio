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
  ProjectsThreePage = "00022",
}

const RouteAction: Map<Routes, string> = new Map();

const cookieKey: string = "current_pageRoute_portfolio";

function SetCookie(key: string, value: Routes, hours: number) {
  const date = new Date();
  date.setTime(date.getTime() + hours * 60 * 60 * 1000); // Convert hours to milliseconds
  const expires = "expires=" + date.toUTCString();
  const encodedValue = encodeURIComponent(value);
  document.cookie = key + "=" + encodedValue + ";" + expires + ";path=/"; // Setting value to true for simplicity. Adjust as needed.
}

function DeleteCookie(key: string) {
  document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function GetCookie(key: string): string | Routes {
  const name = key + "=";
  const decodedCookie = decodeURIComponent(document.cookie); // Decode to handle special characters
  const cookieArray = decodedCookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1); // Remove leading spaces
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return ""; // Return empty string if cookie is not found
}

function Navigation() {
  let currentRoute: Routes | null = $state<Routes | null>(null);
  let isMoving : boolean = $state<boolean>(false)
  const key: string = "mark solante's portfolio key";
  const prefix: string = "/?page-view=";
  RouteAction.set(Routes.WelcomePage, "wp");
  RouteAction.set(Routes.MyProfilePage, "mpp");
  RouteAction.set(Routes.ProjectsOnePage, "pop");
  RouteAction.set(Routes.IntroductionPage, "ip");
  RouteAction.set(Routes.MainPage, "mp");
  RouteAction.set(Routes.ProjectsTwoPage, "ptp");
  RouteAction.set(Routes.OthersPage, "op");
  RouteAction.set(Routes.ContactFormPage, "cfp");
  RouteAction.set(Routes.ProjectsThreePage, "ptp2");

  return {
    // Sets the new route
    FlyTo(route: Routes) {
      goto(prefix + route + "#" + btoa(key + route));
      SetCookie(cookieKey, route, 2);
      currentRoute = route;
      isMoving = true
    },

    // This might not get implemented, but I'll leave it here.
    DeleteRouteCookie() {
      DeleteCookie(cookieKey);
    },

    StopMoving() {
      isMoving = false
    },

    get isMoving() {
      return isMoving
    },

    CheckForHistory() {
      let foundCurrent: Routes;
      const getRoute = (route: string) => {
        switch (route) {
          case "00000":
            foundCurrent = Routes.WelcomePage;
            currentRoute = foundCurrent;
            return
          case "00010":
            foundCurrent = Routes.MyProfilePage;
            currentRoute = foundCurrent;
            return
          case "00012":
            foundCurrent = Routes.ContactFormPage;
            currentRoute = foundCurrent;
            return
          case "00001":
            foundCurrent = Routes.IntroductionPage;
            currentRoute = foundCurrent;
            return
          case "00002":
            foundCurrent = Routes.OthersPage;
            currentRoute = foundCurrent;
            return
          case "00020":
            foundCurrent = Routes.ProjectsOnePage;
            currentRoute = foundCurrent;
            return
          case "00021":
            foundCurrent = Routes.ProjectsTwoPage;
            currentRoute = foundCurrent;
            return
          case "00022":
            foundCurrent = Routes.ProjectsThreePage;
            currentRoute = foundCurrent;
            return
          case "00011":
            foundCurrent = Routes.MainPage;
            currentRoute = foundCurrent;
            return
          }
      };
      if (currentRoute == null) {
        const href = window.location.href;
        if (href && href.includes(prefix)) {
          const inView: string = href.split(prefix)[1].split("#")[0];
          getRoute(inView);
        } else {
          const route = GetCookie(cookieKey);
          if (route) getRoute(route);
        }
      }
    },

    // Returns the current route
    get Current(): Routes | null {
      if (currentRoute == null || currentRoute == undefined) this.CheckForHistory();
      return currentRoute;
    },

    get Key() {
      return key;
    },

    PositionViewTo(route: Routes): string {
      return RouteAction.get(route) ?? "";
    },
  };
}

export const Route = Navigation();
