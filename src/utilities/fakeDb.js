const setLocalStorage = (breakTime) =>{
   localStorage.setItem("breakTime", breakTime)
}

const getLocalStorage = () =>{
      const saveBreak = localStorage.getItem('breakTime');  
      const savedItem = JSON.parse(saveBreak);
      return savedItem; 
}

export {setLocalStorage, getLocalStorage}; 