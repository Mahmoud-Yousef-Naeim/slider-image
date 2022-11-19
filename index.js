let next = document.querySelector(".fa-angle-right");
let prev = document.querySelector(".fa-angle-left");
let img = document.querySelector(".img")

let imgElementOne = document.querySelector(".img img")




let count = 1
next.addEventListener("click",()=> {
    count++
    updateImag()
})

prev.addEventListener("click",()=> {
    count--
    updateImag()
})


function updateImag() {
    if(count > 2 ) {
        count = 3
        next.style = "visibility: hidden;"
        prev.style = `visibility:visible;`
    }else if (count <= 1) {
        count = 1
        next.style = "visibility:visible;"
        prev.style = `visibility: hidden;`
    }
    img.style.transform = `translateX(-${count * (imgElementOne.clientWidth + 10)}px)`
}