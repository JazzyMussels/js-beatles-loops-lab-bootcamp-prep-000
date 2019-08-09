// add solution here
function theBeatlesPlay(musicians, instruments) {
  var new_array = []
  for (var i = 0; i < musicians.length; i += 1) {
    new_array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return new_array
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts.push(`${facts[i]} + '!!!')
    i += 1
  }
  return facts
}