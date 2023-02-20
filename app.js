console.log("hrell");
const brand = document.getElementById("brand")
const product = document.getElementById("product")
const text_1 = document.getElementById("para")
const text_2 = document.getElementById("para1")
const dash = document.getElementById("dash")
const logo = document.getElementById("logo")
const logo1 = document.getElementById("logo1")
const img = document.getElementsByClassName("productImage")

setInterval(() => { brand.classList.toggle("second-text") }, 6000)
setInterval(() => { product.classList.toggle("second-text") }, 6000)
setInterval(() => { text_1.classList.toggle("behindText") }, 6000)
setInterval(() => { text_2.classList.toggle("behindText") }, 6000)
setInterval(() => { dash.classList.toggle("rotate30") }, 6000)
setInterval(() => { dash.classList.toggle("rotate60") }, 6000)
setInterval(() => { logo.classList.toggle("comeUp") }, 6000)
setInterval(() => { logo1.classList.toggle("comeUp") }, 6000)


for (let i = 0; i <= img.length; i++) {
    setInterval(() => { img[i].className = "productImage rotate60" }, 6000)
}
for (let i = 0; i <= img.length; i++) {
    setInterval(() => { img[i].className = "productImage rotate120" }, 12000)
}
for (let i = 0; i <= img.length; i++) {
    setInterval(() => { img[i].className = "productImage rotate0" }, 18000)
}


