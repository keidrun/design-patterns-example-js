// Objects
class Order {
  constructor() {}
  addOrder(order) {}
  amount() {}
}

class Item extends Order {
  constructor(price) {
    super();
    this._price = price;
  }
  amount() {
    return this._price;
  }
}

class CompositeOrder extends Order {
  constructor() {
    super();
    this._orders = [];
  }
  addOrder(order) {
    this._orders.push(order);
  }
  amount() {
    let total = 0;
    this._orders.forEach(order => {
      total += order.amount();
    });
    return total;
  }
}

// Test
const item1 = new Item(1000);
const item2 = new Item(100);
const item3 = new Item(333.33);
const order1 = new CompositeOrder();
order1.addOrder(item1);
order1.addOrder(item2);
order1.addOrder(item3);
console.log('item1 : $' + item1.amount());
console.log('item2 : $' + item2.amount());
console.log('item3 : $' + item3.amount());
console.log('total : $' + order1.amount());
