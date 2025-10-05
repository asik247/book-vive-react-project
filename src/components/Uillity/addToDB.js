const getStroedBook = ()=>{
  const stroedDataSTR = localStorage.getItem('readList');
  if(stroedDataSTR){
    const stroedDataPars = JSON.parse(stroedDataSTR);
    return stroedDataPars
  }
  else{
    return [];
  }
}


const addToStoredDB = (id)=>{
    const stroedDataPars = getStroedBook()

    if(stroedDataPars.includes(id)){
        alert("id already exist");
    }
    else{
        stroedDataPars.push(id)
        const data = JSON.stringify(stroedDataPars);
        localStorage.setItem('readList',data)
    }
}
export {addToStoredDB,getStroedBook};