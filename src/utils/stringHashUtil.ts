const stringToHash = (string: string) => {
    var hash = 0;
      
    if (string.length == 0) return hash;
      
    for (let i = 0; i < string.length; i++) {
       let char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
      
    return hash.toString();
}

const getUniqueHash = (favObject: any) =>{
    //console.log(favObject);
    if(!favObject) return;
    
    let first35charecters = favObject.definition.substring(0, 35),
        definitionLength = favObject.definition? favObject.definition.length.toString() : "",
        exampleLength = favObject.example? favObject.example.length.toString() : "0",
        word = favObject.word.toString(),
        wordType = favObject.type.toString();
    let fullString = definitionLength+"_"+first35charecters+"_"+word+"_"+wordType+"_"+exampleLength;
    //console.log(fullString);
    return stringToHash(fullString);
}


export {getUniqueHash}