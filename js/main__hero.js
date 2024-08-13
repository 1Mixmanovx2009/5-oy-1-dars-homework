let elHero = document.querySelector(".main")

let elContainer1 = document.createElement("div") //container
let elHeroInner = document.createElement("div") // hero
let elHeroTitleWrapper = document.createElement("div")//hero__title-wrapper
let elHeroTopText = document.createElement("p")//hero__text-top
let elHeroTitle = document.createElement("h1")//hero__title
let elHeroBottomText = document.createElement("p")//hero__text-bottom
let elHeroButton = document.createElement("button")//hero__button

elContainer1.classList.add("container")
elHeroInner.classList.add("hero")
elHeroTitleWrapper.classList.add("hero__title-wrapper")
elHeroTopText.classList.add("hero__text-top")
elHeroTitle.classList.add("hero__title")
elHeroBottomText.classList.add("hero__text-bottom")
elHeroButton.classList.add("hero__button")

elHeroTopText.textContent = "COLLECT FORM SUBMISSIONS"
elHeroTitle.textContent = "Get emails and messages from your HTML form"
elHeroBottomText.textContent = "Code your own HTML form and style it, then point your form to formcarry to get email notifications, upload files, block spam and integrate with other apps."
elHeroButton.textContent = "Get Started"

elHero.appendChild(elContainer1)
elContainer1.appendChild(elHeroInner)
elHeroInner.appendChild(elHeroTitleWrapper)
elHeroTitleWrapper.append(elHeroTopText, elHeroTitle, elHeroBottomText, elHeroButton)