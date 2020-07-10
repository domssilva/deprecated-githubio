import Data from './pageTranslation.data.js'

let changeLanguageBtn = document.getElementById('change-language')
let languageFlag = changeLanguageBtn.querySelector('img')

const translatePage = () => {
  let data

	const intro = document.getElementById('intro')
  const introText = intro.querySelector('.about-me')
  
  const project0Container = document.getElementById('project-one')
  const project1Container = document.getElementById('project-two')

  const contactSection = document.getElementById('three')
  const contactTitle = contactSection.querySelector('h2')
  const contactText = contactSection.querySelector('#contactme-text')
  const contactBtn = contactSection.querySelector('.button')

	if (localStorage.lan === 'it' || localStorage.length === 0) {
    data = { ...Data['it'] }
    translateInnerHtml('it', data)
	}

	if (localStorage.lan === 'en') {
    data = { ...Data['en'] }
    translateInnerHtml('en', data)
  }
  
  function translateInnerHtml(lang, data) {

    // translating about section
    introText.innerHTML = data.aboutMe

    const firstProject = {
      title: project0Container.querySelector('.project-title'),
      description: project0Container.querySelector('.project-description'),
    }
    
    const secondProject = {
      title: project1Container.querySelector('.project-title'),
      description: project1Container.querySelector('.project-description'),
    }
    
    // translating projects section
    firstProject.title.innerHTML = data.projects[0].title
    firstProject.description.innerHTML = data.projects[0].description
    
    secondProject.title.innerHTML = data.projects[1].title
    secondProject.description.innerHTML = data.projects[1].description

    // translate contact me
    contactTitle.innerHTML = data.contactme.title
    contactText.innerHTML = data.contactme.text
    contactBtn.value = data.contactme.btn

    if (lang === 'it') {
      // english language button
      languageFlag.src = './images/uk_flag.svg'
      languageFlag.alt = 'uk flag'
      changeLanguageBtn.title = 'change to english'

    } else if (lang === 'en') {
      // italian language button
      languageFlag.src = './images/it_flag.svg'
      languageFlag.alt = 'it flag'
      changeLanguageBtn.title = 'cambia lingua'
    }
  }
}

const checkPageLanguage = () => {
  if (localStorage.lan === 'en' || localStorage.length === 0) {
    translatePage()
	} else if (localStorage.lan === 'it') {
    translatePage()
	}
}

window.onload = () => {
  checkPageLanguage()
}

changeLanguageBtn.addEventListener('click', () => {
  if (localStorage.lan === 'en' || localStorage.length === 0) {
		localStorage.setItem('lan', 'it')
		translatePage()
	} else if (localStorage.lan === 'it') {
		localStorage.setItem('lan', 'en')
		translatePage()
	}
})