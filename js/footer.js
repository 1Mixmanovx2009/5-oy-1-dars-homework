let elFooter = document.querySelector(".site-footer")

let elContainer2 = document.createElement("div") //container
let elFooterInner = document.createElement("div") // footer
let elFooterTitlesWrapper = document.createElement("div")//footer__titles-wrapper
let elFooterLeftText = document.createElement("p")//footer__left-text
let elFooterCenterLeftText = document.createElement("p")//footer__center-left-text
let elFooterCenterRightText = document.createElement("p")//footer__center-right-text
let elFooterimages = document.createElement("div")//footer__images-wrapper  
let elTwiterLink = document.createElement("a")//footer__twiter-link
let elFacebookLink = document.createElement("a")//footer__facebook-link
let elGithubLink = document.createElement("a")//footer__github-link
let elTwiter = document.createElement("img")//footer__twiter-img
let elFacebook = document.createElement("img")//footer__facebook-img
let elGithub = document.createElement("img")//footer__github-img

elContainer2.classList.add("container")
elFooterInner.classList.add("footer")
elFooterTitlesWrapper.classList.add("footer__titles-wrapper")
elFooterLeftText.classList.add("footer__left-text")
elFooterCenterLeftText.classList.add("footer__center-left-text")
elFooterCenterRightText.classList.add("footer__center-right-text")
elFooterimages.classList.add("footer__images-wrapper")
elTwiterLink.classList.add("footer__twiter-link")
elFacebookLink.classList.add("footer__facebook-link")
elGithubLink.classList.add("footer__github-link")
elTwiter.classList.add("footer__twiter-img")
elFacebook.classList.add("footer__facebook-img")
elGithub.classList.add("footer__github-img")

elFooterLeftText.textContent = "formcarry. all rights reserved"
elFooterCenterLeftText.textContent = "Terms of Service"
elFooterCenterRightText.textContent = "Privacy Policy"
elTwiter.href = "/"
elFacebook.href = "/"
elGithub.href = "/"
elTwiter.src ="./images/twiter.svg"
elFacebook.src ="./images/facebook.svg"
elGithub.src ="./images/github.svg"

elTwiter.width = "32"
elTwiter.height = "32"
elFacebook.width = "32"
elFacebook.height = "32"
elGithub.width = "32"
elGithub.heigh = "32"

elFooter.appendChild(elContainer2)
elContainer2.appendChild(elFooterInner)
elFooterInner.appendChild(elFooterTitlesWrapper)
elFooterTitlesWrapper.append(elFooterLeftText, elFooterCenterLeftText, elFooterCenterRightText, elFooterimages)
elFooterimages.append(elTwiterLink, elFacebookLink, elGithubLink)
elTwiterLink.appendChild(elTwiter)
elFacebookLink.appendChild(elFacebook)
elGithubLink.appendChild(elGithub)