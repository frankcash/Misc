module.exports =  {
  // Load Mock Product Data Into localStorage

  init: function(){
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: "0011001",
        name : 'Scotch',
        image : 'scotch.png',
        description : 'Best scotch around',
        variants : [
          { sku: '12345',
            type : '40oz',
            price: 4.99,
            inventory: 1
          },
          {
            sku: '122222',
            type: '30oz',
            price: 3.99,
            inventory: 5
          },
          {
            sku: '123333',
            type: '20oz',
            price : 3.99,
            inventory: 20
          }
        ]
      }
    ]));
  }
};
