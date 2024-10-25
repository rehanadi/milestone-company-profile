'use strict'

// Toggle mobile navigation menu
const nav = document.querySelector('.header__nav')
const navLink = document.querySelector('.header__nav--link')
const burger = document.querySelector('.hamburger')
const burgerLine1 = document.querySelector('.hamburger__line:first-child')
const burgerLine2 = document.querySelector('.hamburger__line:nth-child(2)')
const burgerLine3 = document.querySelector('.hamburger__line:last-child')

const toggleNav = () => {
  burger.classList.toggle('hamburger__close')
  burgerLine1.classList.toggle('hamburger__line-1')
  burgerLine2.classList.toggle('hamburger__line-2')
  burgerLine3.classList.toggle('hamburger__line-3')
  nav.classList.toggle('show__nav')
}

burger.addEventListener('click', toggleNav)

// Create download section element
const download = document.createElement('section')
download.classList.add('download')

const downloadClose = document.createElement('i')
downloadClose.classList.add('fa-solid', 'fa-xmark', 'fa-lg', 'download__close')
download.append(downloadClose)

const downloadInfo = document.createElement('span')
downloadInfo.classList.add('download__info')
downloadInfo.innerText = 'Download Aplikasi Havana Juice'
download.append(downloadInfo)

const downloadLinks = document.createElement('div')
downloadLinks.classList.add('download__links')
download.append(downloadLinks)

const appStoreLink = document.createElement('a')
appStoreLink.setAttribute('href', 'https://www.apple.com/id/app-store')
appStoreLink.setAttribute('target', '_blank')
appStoreLink.classList.add('download__links--link')
downloadLinks.append(appStoreLink)

const appStoreFigure = document.createElement('figure')
appStoreFigure.classList.add('download__links--link__img')
appStoreLink.append(appStoreFigure)

const appStoreImage = document.createElement('img')
appStoreImage.setAttribute('loading', 'lazy')
appStoreImage.setAttribute('src', './images/app-store.svg')
appStoreImage.setAttribute('alt', 'App Store')
appStoreFigure.append(appStoreImage)

const appStoreTitle = document.createElement('span')
appStoreTitle.classList.add('download__links--link__title')
appStoreTitle.innerText = 'App Store'
appStoreLink.append(appStoreTitle)

const googlePlayLink = document.createElement('a')
googlePlayLink.setAttribute('href', 'https://play.google.com')
googlePlayLink.setAttribute('target', '_blank')
googlePlayLink.classList.add('download__links--link')
downloadLinks.append(googlePlayLink)

const googlePlayFigure = document.createElement('figure')
googlePlayFigure.classList.add('download__links--link__img')
googlePlayLink.append(googlePlayFigure)

const googlePlayImage = document.createElement('img')
googlePlayImage.setAttribute('loading', 'lazy')
googlePlayImage.setAttribute('src', './images/google-play.svg')
googlePlayImage.setAttribute('alt', 'Google Play')
googlePlayFigure.append(googlePlayImage)

const googlePlayTitle = document.createElement('span')
googlePlayTitle.classList.add('download__links--link__title')
googlePlayTitle.innerText = 'Google Play'
googlePlayLink.append(googlePlayTitle)

// Hide download section when click close icon
downloadClose.addEventListener('click', () => {
  download.classList.toggle('hide__download')
  localStorage.setItem('hide-download', 'true')
})

// Append download section if not closed
const hideDownload = localStorage.getItem('hide-download')
if (!hideDownload) document.body.insertBefore(download, document.body.firstChild)

// Toggle dark/light theme
const themeIcon = document.querySelector('.header__theme i')

const setLightTheme = () => {
  themeIcon.classList.remove('fa-sun')
  themeIcon.classList.add('fa-moon')

  const root = document.querySelector(':root')
  root.style.setProperty('--color-theme-d-1', '#ffffff')
  root.style.setProperty('--color-theme-d-3', '#12452c')
  root.style.setProperty('--color-theme-d-4', '#2f8d03')
  root.style.setProperty('--color-theme-d-7', '#fdf9ee')
  root.style.setProperty('--color-theme-d-8', '#eaf8d7')
  root.style.setProperty('--color-theme-d-9', '#db885a')
  root.style.setProperty('--color-type-d-1', '#ffffff')
  root.style.setProperty('--color-type-d-2', '#000000')
  root.style.setProperty('--color-type-d-4', '#2f8d03')
  root.style.setProperty('--color-type-d-5', '#872e47')
  root.style.setProperty('--color-type-d-6', '#05140D')
  root.style.setProperty('--color-type-d-7', '#FFDFA1')
  
  localStorage.setItem('theme', 'light')
}

const setDarkTheme = () => {
  themeIcon.classList.remove('fa-moon')
  themeIcon.classList.add('fa-sun')

  const root = document.querySelector(':root')
  root.style.setProperty('--color-theme-d-1', '#12452c')
  root.style.setProperty('--color-theme-d-3', '#eaf8d7')
  root.style.setProperty('--color-theme-d-4', '#FFDFA1')
  root.style.setProperty('--color-theme-d-7', '#effdee')
  root.style.setProperty('--color-theme-d-8', '#db885a')
  root.style.setProperty('--color-theme-d-9', '#eaf8d7')
  root.style.setProperty('--color-type-d-1', '#000000')
  root.style.setProperty('--color-type-d-2', '#ffffff')
  root.style.setProperty('--color-type-d-4', '#FFDFA1')
  root.style.setProperty('--color-type-d-5', '#db885a')
  root.style.setProperty('--color-type-d-6', '#fdf9ee')
  root.style.setProperty('--color-type-d-7', '#2f8d03')

  localStorage.setItem('theme', 'dark')
}

const toggleTheme = () => {
  const theme = localStorage.getItem('theme')

  if (theme === 'dark') {
    setLightTheme()
  } else {
    setDarkTheme()
  }
}

themeIcon.addEventListener('click', toggleTheme)

const setCurrentTheme = () => {
  const theme = localStorage.getItem('theme')

  if (theme === 'dark') {
    setDarkTheme()
  } else {
    setLightTheme()
  }
}

setCurrentTheme()
