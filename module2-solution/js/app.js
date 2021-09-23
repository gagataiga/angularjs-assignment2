
(function (module) {
  'use strict';

  module.controller("toBuyCtrl", toBuyController)
    .controller("alreadyBoughtCtrl", alreadyBoughtController)
    .service("boughtService", ShoppingListCheckOffService);
  
  toBuyController.$inject = ["boughtService"];
  alreadyBoughtController.$inject = ["boughtService"];

  // buy
  function toBuyController(boughtService){ 
      // アイテム
    let toBuy = this;
    toBuy.items = [{
    name: "banana", quantity: 4
    },{
    name: "apple", quantity: 11
    },{
    name: "pineapple", quantity: 5
    },{
    name: "Tomato", quantity: 3
    },{
    name: "Mango", quantity: 1
    },{
    name: "cucumber", quantity: 7
    },{
    name: "strawberry", quantity: 9
   } 
    ];  

    toBuy.removeItem = function (itemIndex) { 
      // ShoppingListCheckOffService.removeItem(itemIndex, toBuy.items);
      // setItems
      console.log(toBuy.items);
      console.log("index:", itemIndex);
      console.log("Name:",toBuy.items[itemIndex].name);
      console.log("quantity:", this.items[itemIndex].quantity);
  
      boughtService.setItems(toBuy.items[itemIndex].name,toBuy.items[itemIndex].quantity)
      boughtService.removeItem(itemIndex, toBuy.items);   
    }

  }

  function alreadyBoughtController(boughtService) { 
    let alredyBought = this;
    alredyBought.items = boughtService.getItem();
  }


  // alredy bought
  function ShoppingListCheckOffService() { 
    let service = this;

    let items = [];
    
    // buy items
    service.setItems = function (name,quantity) { 
      let item = { 
        name: name,
        quantity: quantity
      }
      items.push(item);
    }

    service.removeItem = function (itemIndex, items) {  
    items.splice(itemIndex, 1);
   }

    service.getItem = function () { 
      console.log(items);
      return items;
    }
     
  }
  
})(angular.module("myCheckOffApp", []));