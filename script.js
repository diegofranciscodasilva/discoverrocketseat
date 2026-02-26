function toggleMode() {
    const html = document.documentElement

    //html.classList.toggle("light") // forma mais simples de fazer a mesma coisa, mas vamos fazer na mão para entender melhor o que acontece !

    if (html.classList.contains("light")) {
        html.classList.remove("light")
    } else {
        html.classList.add("light")
    }

    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")) {
        img.setAttribute("src", "./images/dog2.jpg")
    } else {
        img.setAttribute("src", "./images/dog.jpg")
    }
}
