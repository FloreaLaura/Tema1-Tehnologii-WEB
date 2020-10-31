function removeOrderItem(orderInfo, position){
    //a)
   if(Array.isArray(orderInfo.items)==false){
    throw "Items should be an array"
}

//b)
orderInfo.items.forEach(elem=>{
 if(!elem.price&&!elem.quantity)
 throw "Malformed item"
});

//c)
if ( position<0 || position > orderInfo.items.length -1  ) {
 throw 'Invalid position'
}

//d)
 orderInfo.items.splice(position, 1);

//e) 
 orderInfo.total = 0
 orderInfo.items.forEach((elem) => {
     orderInfo.total += (elem.price * elem.quantity)
 })

 return orderInfo
}

const app = {
    removeOrderItem
};

module.exports = app;