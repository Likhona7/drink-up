var drink_up = require("../drink_up");
var assert = require("assert");

var Monday = [{
  "person": "Mdu",
  "coffee": 5,
  "tea": 0,
  "water": 3
}, {
  "person": "Brenda",
  "coffee": 1,
  "tea": 3,
  "water": 1
}, {
  "person": "Lesego",
  "coffee": 0,
  "tea": 4,
  "water": 2
}];
var Tuesday = [{
  "person": "Lesego",
  "tea": 3,
  "water": 1,
  "coffee": 1
}, {
  "person": "Mdu",
  "tea": 0,
  "water": 5,
  "coffee": 7
}, {
  "person": "Brenda",
  "tea": 4,
  "water": 0,
  "coffee": 2
}];
var Wednesday = [{
  "person": "Brenda",
  "water": 4,
  "coffee": 3,
  "tea": 2
}, {
  "person": "Lesego",
  "water": 4,
  "coffee": 0,
  "tea": 3
}, {
  "person": "Mdu",
  "water": 9,
  "coffee": 8,
  "tea": 2
}];
var Thursday = [
  {
      "person": "Mdu",
      "tea": 0,
      "coffee": 5,
      "water": 3
  },
  {
      "person": "Brenda",
      "coffee": 1,
      "water": 1,
      "tea": 3
  },
  {
      "person": "Lesego",
      "water": 2,
      "coffee": 0,
      "tea": 4
  }
];

describe("Write one function that answers these three questions.", function() {

  it("How many coffees were drunk on Monday", function() {

    var result = drink_up.howMany(Monday,"coffee");
    assert.equal(result, 6)

  })

  it("How many teas were drunk on Tuesday", function() {
      var result = drink_up.howMany(Tuesday,"tea");
      assert.equal(result, 7)
    })

  it("How many waters were drunk on Wednesday", function() {
    var result = drink_up.howMany(Wednesday,"water");
    assert.equal(result, 17)

  })
  it("How many coffee were drunk on Thursday", function() {
    var result = drink_up.howMany(Thursday,"coffee");
    assert.equal(result, 6)

  })
  it("How many tea were drunk on Thursday", function() {
    var result = drink_up.howMany(Thursday,"tea");
    assert.equal(result, 7)

  })
  it("How many waters were drunk on Thursday", function() {
    var result = drink_up.howMany(Thursday,"water");
    assert.equal(result, 6)

  })
})

describe("", function(){

  it("Who drank the least coffee on Monday", function() {
  var vee =  { name: 'Lesego', drink: 0 };

      var result = drink_up.least(Monday,"coffee");
    assert.deepEqual(result, vee)
  })

  // it("Who drank the most tea on Tuesday ", function(){
  //   var vee = {
  //     "person": "Brenda",
  //     "tea": 4,
  //     "water": 0,
  //     "coffee": 2
  //   }
  //     var result = drink_up.Maximum(Tuesday,"tea");
  //      assert.equal(result, vee)
  // })
  it("Who drank the least water on Wednesday", function() {
  vee = { name: 'Brenda', drink: 4 };

  var result = drink_up.least(Wednesday,"water");
  assert.deepEqual(result,vee )
})
it("Who drank the least coffee on Thursday",function(){
  vee =   {name: "Lesego", drink: 0};
  var result = drink_up.least(Thursday,"coffee");
  assert.deepEqual(result, vee)
})
it("Who drank the least water on Thursday", function(){
vee = {name: "Brenda", drink:1};
var result = drink_up.least(Thursday,"water");
assert.deepEqual(result, vee)
})
})
