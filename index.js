function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}
function increaseRankBy(n){
  const rls = document.querySelectorAll(".ranked-list")
  for (let i = 0,l = rls.length ; i < l; i++) {
    let children = rls[i].children

    for (let j = 0, k = children.length; i < k; i++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}
function deepestChild(){
  let node = document.querySelector('div#grand-node')
  let currentNode = node
  while (currentNode) {
    currentNode = node.firstElementChild
    }
  return currentNode
  }
}
