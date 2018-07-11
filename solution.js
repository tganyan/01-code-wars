function abbrevName(name){
    let nameArr = name.split(' ');
    let initialsArr = [];
    
    for (let i = 0; i < nameArr.length; i++) {
      initialsArr.push(nameArr[i].charAt(0))
    }
    
    return `${initialsArr[0].toUpperCase()}.${initialsArr[1].toUpperCase()}`
  
  }