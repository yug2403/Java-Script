// Bracket Notation
var mystr = "";
var lastname = "lovelace";
mystr = lastname[1];  // To Get Nth Letter just Add the Number 3 rd needed write 2 (as computer starts frome zero)
console.log(mystr)

//String immutable
var Mystr = "Jello World";
 // Mystr[0] = "H";  Trying to make Helo World but will not work 
Mystr = "Hello World";
console.log(Mystr)

// Arrays
//var ourArray = ["John", 23];
//var myArray = ["",   , ,  ];

// Nested Arrays 
//var ourArray = ["John", 23], ["",   , ,  ];  We can multiple Arrays
//var myArray = ["",   , ,  ];

//Access
var myArray = [50,60,79];
var ourData = myArray[2];
//console.log(ourData)
myArray[3] = 35;  // We can replace the data and add more using brackets
myArray[0] = 69;
console.log(myArray)

//Multi Ka bhi Multi
var MyArray = [[1,1,1], [2,2,2], [0,[0,1,2],0]];
var MyOutput = MyArray [1];
console.log(MyOutput)



// MAke shopping list from Nested Arrays

var Myshopping = [["DogFood",10], ["Cupcakes", 25], ["Flowers", 3]];


