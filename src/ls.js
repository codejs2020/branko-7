/* eslint-disable no-console */
document.getElementById('forma').addEventListener('submit', slanjeForme)

const nizIzLS = localStorage.getItem('niz')
let niz
if (nizIzLS === null) {
  niz = []
} else {
  niz = JSON.parse(nizIzLS)
  document.getElementById('ispis').innerHTML = niz.join('<br>') + '<br>'
}
console.log(niz)

function slanjeForme (event) {
  event.preventDefault()
  document.getElementById('ispis').innerHTML += document.getElementById('tekst').value + '<br>'
  document.getElementById('tekst').value = ''

  const nizReci = document.getElementById('ispis').innerHTML.split('<br>')
  localStorage.setItem('niz', JSON.stringify(nizReci))
}
