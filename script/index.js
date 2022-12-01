//// Change button icon with javascript

// const boutonContact = document.getElementById('btn-contact')
// const boutonCV = document.getElementById('btn-cv')

// if (window.screen.width < 1000) {
//     boutonContact.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16"><path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/></svg>'
//     boutonCV.innerText = "CV"
// }

const experienceGraph2015 = document.getElementsByClassName('row-experience-2015-graph')
const experienceGraph2018 = document.getElementsByClassName('row-experience-2018-graph')
const valuePorgressBars = new Map()
const valuePorgressBars2 = new Map()

valuePorgressBars.set("Windows", "90%")
valuePorgressBars.set("Linux", "85%")
valuePorgressBars.set("Python", "80%")
valuePorgressBars.set("JavaScript", "40%")
valuePorgressBars.set("Php", "30%")
valuePorgressBars.set("HTML", "60%")
valuePorgressBars.set("Suricata", "90%")
valuePorgressBars.set("Wireshark", "90%")

valuePorgressBars2.set("Linux", "90%")
valuePorgressBars2.set("C", "85%")
valuePorgressBars2.set("JIRA", "70%")
valuePorgressBars2.set("GIT/Gitlab", "55%")
valuePorgressBars2.set("Docker", "65%")
valuePorgressBars2.set("Wireshark", "70%")
valuePorgressBars2.set("Suricata", "80%")

const generateStat = (key, value) => {
  return `<div class=\"row col-12\">
  <div class=\"col-4 text-end\">${key}</div>
  <div class=\"progress col-8 pt-1\">
  <div
  class=\"progress-bar rounded-pill\"
  role=\"progressbar\"
  style=\"width: ${value}\"
  aria-valuenow=\"25\"
  aria-valuemin=\"0\"
  aria-valuemax=\"100\"
  ></div>
  </div>
  </div>`;
}



valuePorgressBars.forEach((value,key) => {
  experienceGraph2015[0].innerHTML +=  generateStat(key,value)
})

valuePorgressBars2.forEach((value,key) => {
  experienceGraph2018[0].innerHTML += generateStat(key,value)
})

const progressBars = document.getElementsByClassName('progress-bar')


Object.values(progressBars).forEach(element => {
  let value = element.getAttribute('style').substring(7,9)
  element.setAttribute('style', `width: 0%`)
  let count = 0
  let progressAnimation = setInterval(() => {
    count ++
    element.setAttribute('style', `width: ${count}%`)
    if (count >= value) {
      clearInterval(progressAnimation)
    }
  },10)
})