function getsortedData(data, name) {
  for (const element in data) {
    if(data[element].nameBlock === name) {
      return(data[element].sectionBlocks)
    }
  }
}

function getsortedCards(data, name) {
  const personDatas = []
   for (const element in data) {
      if(data[element].nameBlock === name) {
        personDatas.push(data[element])  
      }
  }
  return personDatas
} 


export {getsortedData, getsortedCards }