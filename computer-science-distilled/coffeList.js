let coffeList = ["latte", "svart", "soja"];
let orderList = ["svart", "latte", "soja"];


if (orderList.length > 0) {
  for (let i = 0; i < coffeList.length; i++) {
    for (let j = 0; j < orderList.length; j++) {
      if (coffeList[i].id === orderList[j]) {
        console.log(orderList[j]);
      }
    }
  }
}
