// add solution here
function theBeatlesPlay(musicians, instruments) {
  var new_array = []
  for (var i = 0; i < musicians.length - 1; i += 1) {
    new_array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return new_array
}
