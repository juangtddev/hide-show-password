const btn = document.getElementById("btn")
const password = document.getElementById("password")

btn.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
        btn.firstChild.src = "assets/images/eye-close.png"
    } else {
        password.type = "password";
        btn.firstChild.src = "assets/images/eye-open.png"
    }

}