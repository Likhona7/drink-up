exports.howMany = function(day, drink) {


    var total = 0;

    day.forEach(function(m) {

      total += Number(m[drink]);

    })

    console.log(total)
    return total;

  }
  ///////////////////////////////////////////////////////////////////////


exports.least = function(day, minDrink) {

  var min = 1000;
  var person = " ";
    var person1 = {};
  day.forEach(function(m) {
    if (m[minDrink] < min) {

      min = m[minDrink];
      person = m["person"];



    }
  })
  person1.name = person
  person1.drink = min
  console.log(person1)


  return person1;



}
