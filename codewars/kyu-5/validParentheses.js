// https://www.codewars.com/kata/reviews/52774a314c2333f0a700068b/groups/603ccc0d41914c0001b366ee

function validParentheses(parens){
  
  let current = parens
  let filtered = parens.replace('()', '')
  while(current !== filtered) {
    current = filtered
    filtered = filtered.replace('()', '')
  }

  return !!!current
}