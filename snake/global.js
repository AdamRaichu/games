userColorBg = localStorage.getItem("userColorBg")
document.body.style.backgroundColor = userColorBg
userColorHd = localStorage.getItem("userColorHd")
document.getElementsByClassName("site-header")[0].setAttribute("style", "background-color: " + userColorHd)
userPlayBurp = localStorage.getItem("userPlayBurp")
