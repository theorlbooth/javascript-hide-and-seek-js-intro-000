
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById("nested").querySelector("div.target")
}

function increaseRankBy(n) {
var a_b = document.querySelectorAll("ul.ranked-list li")
    for (let i = 0; i < a_b.length; i += 1) {
        a_b[i].textContent = parseInt(a_b[i].textContent,10) + n
    }
}

function deepestChild()  {

}
