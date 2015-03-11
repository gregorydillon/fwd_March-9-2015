/*while (true){
  alert('Welcome to my worest website')
}
*/

/*DataType*/
/*Numbers
Strings
Booleans
Functions
*/


// alert("get started");

/*Arrays*/

/*branch4*/

/*[1,2,3,4,5];
["Hello", "Goodbye","Get bent"];
[1,true,"no",function(){}];


var numbers = [1,2,3,4,5];
var greetings = ["Hello", "Goodbye","Get bent"];
var dataType = [1,true,"no",function(){}];

Run this.
In the browser, get to console with ctrl-shft-J
at > numbers
at > greetings
at > dataType
*/

// ["hello"][0]  ** Confusing example

// and
// ["hello"][0][0]

/*end branch4*/

/*branch 5 explore for statements
*/

/*for (var i = 0; i < 10; i+=1) {
  alert(i);
}
*/
/*end of branch5
*/

/*branch6
*/

/*var numbers = [1,2,3,4,5];
var greetings = ["Hello", "Goodbye","Get bent"];
var dataType = [1,true,"no",function(){}];


for (var i = 0; i < greetings.length; i+=1) {
  alert(greetings[i]);
}
for (var i = 0; i < numbers.length; i+=1) {
  alert(numbers[i]);
}
*/
/*end of branch6
*/


// numbers.push(8);

// start of branch 7
// another data type

// object

// {name:"gregory",age:58,location:"san francisco"}
// or more readabile
/*{
  name:"gregory",
  age: 58,
  location:"san francisco",
  siblings:"Chris","Tommy",
}
*/
// And to do stuff with it, assign it a var

/*var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
*/
var greg = {name:"Gregory",age:58,location:"San Francisco",siblings:["Tommy","Chris"]};


/*var greg =
  {
  name:"Gregory",
  age:58,
  location:"San Francisco",
  siblings:["Chris","Tommy"]
  };*/

/*Try this next stuff in the console

gregory["name"]
gregory["age"]
gregory[siblings]
gregory[siblings][0]



gregory.name
gregory.age
gregory.siblings
gregory.siblings[0]
*/

greg.favorite_foods = ["BBQ","Italian"]

// greg;


end of branch7
// ------

/*Creating functions


/*var sayHello = function(){
  alert('hello!!@!@')
}

sayHello();
*/