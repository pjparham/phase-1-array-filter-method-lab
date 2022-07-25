function findMatching(drivers, names){
    const result = drivers.filter(name => name.toLowerCase() === names.toLowerCase())
    return result
}

function fuzzyMatch(drivers, letters){
    const result = drivers.filter(object => object.slice(0, letters.length) === letters)
    return result
}

function matchName(drivers, string){
  const result = drivers.filter(object => object.name === string)
  return result  
}