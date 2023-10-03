export function setupPractice (element) {
  // följande funktioner körs i ordning
  // se output i console.log()
  // du ska i varje del arbeta med att visa vad du lärt dig
  // i slutändan ska projektet köras och inte innehålla fel och
  // du ska kunna förklara vad, hur varför PM

  // Samtliga delar finns förklarade/beskrivna https://webbutveckling.jensa.dev/tekniker/javascript/
  varsAndTypes(element)
  operators(element)
  controlStructures(element)
  arraysAndObjects(element)
  domAndEvents(element)
  domManipulation(element)
}

// du kan använda kontrollstrukturer och variabler etc. i 
// andra moment än där funktionen heter så såklart
function varsAndTypes(element) {
  // kod för att visa vad du lärt dig om variabler och typer
  let varsAndTypes = element
  console.log(varsAndTypes)
  let x = 50
  let y = 50
  console.log(x, y)
}

function operators(element) {
  // kod för att visa vad du lärt dig om operatorer
  console.log('operators === ', 1 === 1)
  console.log('element id === #app =', element.id === 'app')
}

function controlStructures(element) {
  // kod för att visa vad du lärt dig om kontrollstrukturer
  // if och loopar
  let controlStructures = 'controlStructures'
  console.log(controlStructures, controlStructures ? 'if' : 'loopar')
  let a = 0
  for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i)
      a++
    }
  }
  console.log('antal jämna tal mellan 0 och 50 = ', a)
}

function arraysAndObjects (element) {
  // kod för att visa vad du lärt dig om arrays och objekt
  let a = []
  for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
      a.push(i)
    }
  }
  console.log('jämna tal mellan 0 och 50 = ', a.length)
  console.log('talen mellan 0 och 50 som är jämna', a)
}

function domAndEvents (element) {
  // kod för att visa vad du lärt dig om DOM och events
  // använd med html och listeners
  console.log(element, 'lyssna efter event för att ändra element')
  let clickCount = 0
  element.addEventListener('click', () => {
    let p = document.createElement('p')
    p.textContent = `du har klickat ${++clickCount} gånger`
    domManipulation(p)
    element.appendChild(p)
  })
}

function domManipulation (element) {
  // kod för att visa vad du lärt dig om DOM-manipulation
  // skapa element och lägga till och ta bort
  if (element.tagName === 'P') {
    let click = 0
    element.addEventListener('click', () => {
      element.textContent = `du har klickat ${++click} gånger på det här p-elementet`
    })
  } else element.innerHTML = 'dom manipulation, ändra och lägg till element'

}