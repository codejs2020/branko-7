/* eslint-disable no-console */
// Lako
const latinica = 'a,b,c,č,ć,d,dž,đ,e,f,g,h,i,j,k,lj,l,m,n,nj,o,p,r,s,š,t,u,v,z,ž'.split(',')
const cirilica = 'а,б,ц,ч,ћ,д,џ,ђ,е,ф,г,х,и,ј,к,љ,л,м,н,њ,о,п,р,с,ш,т,у,в,з,ж'.split(',')

// ljiljana ljilja ljulja ljuljanje
function konverzija (rec) {
  let rezultat = ''
  for (let i = 0; i < rec.length; i++) {
    // latinica.includes('a')
    if (!latinica.includes(rec[i])) {
      rezultat += rec[i]
    } else if (rec[i] === 'l' && rec[i + 1] === 'j') {
      rezultat += 'љ'
      i++
    } else {
      const indeks = vratiIndeks(rec[i])
      rezultat += cirilica[indeks]
    }
  }
  return rezultat
}

function vratiIndeks (slovo) {
  for (let i = 0; i < latinica.length; i++) {
    if (latinica[i] === slovo) {
      return i
    }
  }
}

function kon2 (tekst) {
  for (let i = 0; i < latinica.length; i++) {
    // tekst=tekst.replace(latinica[i],cirilica[i])
    tekst = tekst.replace(new RegExp(latinica[i], 'ig'), cirilica[i])
  }
  return tekst
}

console.log(konverzija('nadživeti'))
console.log(konverzija('ljiljana'))
console.log(konverzija('ljuljanje'))
console.log(konverzija(',ljuljanje....'))
console.log(konverzija('pera i laza'))

console.log(kon2('nadživeti'))
console.log(kon2('ljiljana'))
console.log(kon2('ljuljanje'))
console.log(kon2(',ljuljanje....'))
console.log(kon2('pera i lazabb'))

document.getElementById('rec').addEventListener('keyup', function (event) {
  console.log(event.target.value)
})

document.getElementById('rec').addEventListener('keyup', unosTeksta)
function unosTeksta (event) {
  console.log(event.target.value)
}
