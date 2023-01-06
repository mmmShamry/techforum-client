import Cookies from "js-cookie";

export const setCookie = (cookieName, cookieValue) =>
  Cookies.set(cookieName, cookieValue, {
    path: '/',
    sameSite: 'strict',
  });

export const getCookie = (cookieName) => Cookies.get(cookieName);

export const removeCookie = (cookieName) => Cookies.remove(cookieName);
