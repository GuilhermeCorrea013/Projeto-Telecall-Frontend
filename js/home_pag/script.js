function logOut(){
    localStorage.removeItem("name");
    localStorage.removeItem("login");
    window.location.href="login.html"

}