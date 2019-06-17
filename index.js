function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}
function increaseRankBy(n){
  const rls = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < rls.length; i++) {
    rls[i] = parseInt(rls[i]) + n
  }
}
