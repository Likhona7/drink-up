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

  var min = Infinity;
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
  console.log(person1, "min")

  return person1;
}
/////////////////////////////////////////////////////////////////////////////

exports.most = function(day, maxDrink) {
  var max = -Infinity;
  var person = " ";
  var person1 = {};
  day.forEach(function(m) {

    if (m[maxDrink] > max) {
      max = m[maxDrink];
      person = m["person"];
    }

  })

  person1.name = person
  person1.drink = max
  console.log(person1, "max");

  return person1;
}
///////////////////////////////////////////////////////////////////////////////
