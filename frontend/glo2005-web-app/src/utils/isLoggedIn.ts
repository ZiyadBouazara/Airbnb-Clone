import Cookies from "js-cookie"

export const isLoggedIn = () => {
    return (Cookies.get("userId") !== undefined)
}