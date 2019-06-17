function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}
function increaseRankBy(n){
  const rls = document.querySelectorAll(".ranked-list")
  l = rls.length
  for (let i = 0; i < limit; i++) {
    rls[i] = parseInt(rls[i]) + n
  }
}
