// const anime = require("./anime.min.js")

let header_btn = document.querySelector(".header_btn")

header_btn.addEventListener("click", function(){
    console.log('rhrh')
    // anime({
    //     targets: "header",
    //     translateY: "-100vh",
    //     duration: 00,
    //     easing: "linear"
    // })

    window.scrollBy({
        top: "-100vh",
        behavior: "smooth"
    })
})