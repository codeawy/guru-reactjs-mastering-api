import Cookies, { CookieSetOptions } from "universal-cookie";

export default class CookiesService {
  private cookies: Cookies;

  constructor() {
    this.cookies = new Cookies();
  }

  set(cookieName: string, data: unknown, options?: CookieSetOptions) {
    this.cookies.set(cookieName, data, options);
  }

  get(cookieName: string) {
    return this.cookies.get(cookieName);
  }
}
