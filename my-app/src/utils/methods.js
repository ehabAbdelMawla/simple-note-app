export const getData = () => {
    return JSON.parse(localStorage.getItem("items"))||[];
}

export const updateLocalStorageData = (dataList) => {
     localStorage.setItem("items",JSON.stringify(dataList));
}


export const addItem = (item) => {
   let data = getData();
   data.push(item)
   updateLocalStorageData(data)
}


export const deleteItem =(id)=>{
    let data = getData();
    data=data.filter(item => item.id!==id)
    updateLocalStorageData(data)
}