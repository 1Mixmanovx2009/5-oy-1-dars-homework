

let navbarItems = ["FAQ", "Docs", "Integrations", "Pricing"]

let elHeader = document.querySelector(".site-header")

let elContainer = document.createElement("div") //container
let elHeaderInner = document.createElement("div") // haeder
let elHeaderLNBW = document.createElement("div")//header__logo-navbar-btn-wrapper
let elLogoLink = document.createElement("a") //header__logo-link
let elLogoImg = document.createElement("img") //header__logo-img
let elHeaderList = document.createElement("ul") //navbar__list
let elNavbarLink = document.createElement("a")//navbar__link
let elBtnWrapper = document.createElement("div")//navbar__btn-wrapper
let elLoginBtn = document.createElement("a") //navbar__Login-btn
let elNavbarBtn = document.createElement("button") //navbar__btn

elContainer.classList.add("container")
elHeaderInner.classList.add("header")
elHeaderLNBW.classList.add("header__logo-navbar-btn-wrapper")
elLogoLink.classList.add("header__logo-link")
elLogoImg.classList.add("header__logo-img")
elHeaderList.classList.add("navbar__list")

elBtnWrapper.classList.add("navbar__btn-wrapper")
elLoginBtn.classList.add("navbar__login-btn")
elNavbarBtn.classList.add("navbar__btn")

elLogoLink.href = "/"
elNavbarLink.href = "/"
elLoginBtn.href = "/"

elLogoLink.alt = ""
elNavbarLink.alt = ""
elLoginBtn.alt = ""

elLoginBtn.textContent = "Login"
elNavbarBtn.textContent = "Sign up"

elLogoImg.src = "./images/formcarry.@3x.svg"
elLogoImg.width = "157"
elLogoImg.height = "24"

navbarItems.forEach(item => {
    let elNavbarLink = document.createElement("a")
    let elNavbarItem = document.createElement("li")
    
    

    elNavbarLink.textContent = item

    elNavbarItem.classList.add("navbar__item")
    elNavbarLink.classList.add("navbar__link")
    
    elHeaderList.appendChild(elNavbarItem)
    elNavbarItem.appendChild(elNavbarLink)
})

elHeader.appendChild(elContainer)
elContainer.appendChild(elHeaderInner)
elHeaderInner.appendChild(elHeaderLNBW)
elHeaderLNBW.append(elLogoLink, elHeaderList, elBtnWrapper)
elBtnWrapper.append(elLoginBtn, elNavbarBtn)
elLogoLink.appendChild(elLogoImg)
elHeaderList.appendChild(elNavbarItem)