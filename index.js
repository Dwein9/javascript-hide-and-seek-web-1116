function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}


function increaseRankBy(n) {
  const hi = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < hi.length; i++) {
    hi[i].innerHTML = ( parseInt(hi[i].innerHTML) + n ).toString()
  }
}

function deepestChild() {
  return document.getElementById('grand-node').querySelector('div div div div div')
}
