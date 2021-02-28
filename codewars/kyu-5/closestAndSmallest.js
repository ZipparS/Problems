function  closest(strng) {
    if(!strng.length) return []
    let splittedString = strng.split(' ')
    
    let weight = new Array(splittedString.length)
    
    for(let i = 0, value = 0; i < splittedString.length; i++, value = 0) {
      for(let char of splittedString[i]) value += Number(char)
      weight[i] = {value, i}
    }
  
    // sort weight array
    let sorted = false
    while(!sorted) {
      sorted = true
      for(let i = 1; i < weight.length; i++) {
        let buffer
        if(weight[i - 1].value > weight[i].value) {
          buffer = weight[i]
          weight[i] = weight[i - 1]
          weight[i - 1] = buffer
        } 
        
      }
      
      for(let index = 1; index < weight.length; index++) {
        if(weight[index].value < weight[index - 1].value) {sorted = false; break}
      }
      
    }

    let result = [null, null]
    

    let difference = Number.MAX_VALUE
    for(let j = 0; j < weight.length; j++) {
      for(let h = j; h < weight.length; h++) {
        if(h === j) continue
        
        if(Math.abs(weight[j].value - weight[h].value) < difference) {
          difference = Math.abs(weight[j].value - weight[h].value)
          result[0] = [weight[j].value, weight[j].i, Number(splittedString[weight[j].i])]
          result[1] = [weight[h].value, weight[h].i, Number(splittedString[weight[h].i])]
        }
      }
    }
  
  return result
  
}