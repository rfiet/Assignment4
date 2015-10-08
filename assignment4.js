// Steo 1 Create a namespace called Animal. Then, define two sub classes from the namespace, one called Cat and another 
// called Dog.  

//var Animal = Animal || {};
//Animal.Cat = function() {
    
//}
//Animal.Dog = function() {
    
//}

// Steo 2	Abandon the use of namespaces and start over. Now, create two classes, one called Cat 
// and another called Dog. The Cat class should be created using literal notation and the Dog class 
// should be created using constructor notation.


//var Cat = {
//    sex: "Female",
 //   breed: "Main Coon",
//    color: "gray"
//};

//function Dog() {
//    this.sex = "Male";
//    this.breed = "Dobermin";
 //   this.color = "Black-Brown";
//};
//var myDog = new Dog();


// Step 3 Create a new instance of the Cat class. Directly underneath, create a new instance
// of the Dog class.

// cannot create an instance of an object literal (Cat)
// object constructor
//var myDog2 = new Dog();


// Step 4	
// Start over and now create a new class using constructor notation called Animal. 
// When a new instance of the Animal class is created, the message “The Animal has been created” 
// should be displayed in the console window.

//function Animal() {
//    console.log("The Animal has been created");
//};
//var myAnimal = new Animal();


// Step 5
// 	Now, change the above code so that it uses constructor notation instead. The class should 
//  accept a parameter and that value is what should be displayed in the console window. The 
// message should be passed as an argument into the constructor at the moment that the Animal 
// class is instantiated.

//function Animal(param1) {
//    console.log(param1);
//};
//var msg = "The Animal has been created";
//var myAnimal = new Animal(msg);


// Step 6
// Start over and now create a new class using constructor notation called Animal. 
// Define five properties within your class including type, breed, color, height, and length. 
// These properties will be set in the constructor so you’ll need to pass in parameters into 
// the function’s constructor, set the properties, and then pass in the actual arguments during 
// the object’s instantiation. 

// function Animal(type, breed, color, height, length) {

//    this.type = type;
//    this.breed = breed;
//    this.color = color; 
//    this.height = height; 
//    this.length = length; 
//};
//var animalType = "Cat";
//var animalBreed= "Calico Mix";
//var animalColor= "gray-brown";
//var animalHeight= "6 in";
//var animalLength= "13 in";

//var myAnimal = new Animal(animalType, animalBreed, animalColor, animalHeight, animalLength);

// Step 7  Use a for-in loop to loop through and display all of the properties in the Animal class. 
// You should see a total of 5 properties displayed in a list within the console window.
//

//for(x in myAnimal){
//    console.log(x + " = " + myAnimal[x]);
//}


// Step 8
// Now, create a public method called speak. Within the speak method you will use a conditional 
// to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” 
// If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal 
// class has been instantiated.

//Animal.prototype.speak = function(){
    
//    if(this.type == "Dog"){
        
//        return "The " + this.color + " dog is barking";   
 //   }
 //   else if(this.type == "Cat"){
        
//         return "The " + this.color + " cat is meowing"; 
//    }
//}

//var myAnimal = new Animal(animalType, animalBreed, animalColor, animalHeight, animalLength);
//console.log(myAnimal.speak());


// Step 9
// Now, convert all of your properties to private properties. Then, create a private method 
// called checkType(). In this method you will check to see what the type is. If it’s dog, return 
// dog, otherwise, return cat. Then, create a public method called speak that returns the value 
// of the checkType() method. The console window should now display “The <animal type> has made a noise!”

//var Animal = function(type, breed, color, height, length) {

//    var type = type;
 //   var breed = breed;
//    var color = color; 
//    var height = height; 
//    var length = length; 
    
//    var checkType = function(){
        
//         if(type == "Dog"){
//            return "Dog";
 //       }
//        else{
//            return "Cat";
//        }             
//    }
    
//    this.animalType = checkType();
//}

//Animal.prototype.speak = function() {

//    return "The " + this.animalType + " has made a noise";
//}

//var myAnimal = new Animal("Cat", "Tiger", "Spotted Orange","36 in","6 ft");

//console.log(myAnimal.speak());

// Step 10 	
// Create your own String method called findWords() that inherits from the native String Object. 
// This method should find all instances of a specific word within a provided paragraph of text. 
// It should then alert out to the user the number of times that word was found in the paragraph.

//String.prototype.findWords = function(theWord) {
    
//    var regEx = eval("/" + theWord + "/ig");
 //   var matches = this.match(regEx);
 //   var numTimes =  matches.length;
//   alert("'" + theWord + "' appears " + numTimes + " time(s) ");
//}

//var paragraph = "It is plain indeed that in spite of later estrangement Hobbits are relatives of ours: far nearer to us than Elves, or even than Dwarves. Of old they spoke the languages of Men, after their own fashion, and liked and disliked much the same things as Men did. But what exactly our relationship is can no longer be discovered. - Tolkien";
//paragraph.findWords("and");


// Step 11
// Create an abstract base class called Vehicle that accepts four parameters including make (string), 
// model (string), total miles (number), and the mileage for the last oil change (number).

//var Vehicle = function(make, model, totalMiles, lastOilChange) {	}

// Step 12
// Within the Vehicle class, create 6 public properties named make, model, totalMiles, drivenMiles, type, 
// and lastOilChange. Initialize the make, model, totalMiles, and lastOilChange properties with their 
// respective arguments. The drivenMiles property should be initialized to 0 and the type property should 
// be initialized to an empty string.

//var Vehicle = function(make, model, totalMiles, lastOilChange) {	
 //   this.make = make;
//    this.model = model;
//    this.totalMiles = totalMiles;
//    this.lastOilChange = lastOilChange;
//    this.drivenMiles = 0;   // miles since lst oil change
//    this.type = "";
//}

// Step 13 
// Now create a public method called drive() that accepts a parameter (perhaps miles). Increment and 
// set the public drivenMiles property to the miles argument. Return the method (return this).

//Vehicle.prototype.drive = function(miles){
//    this.drivenMiles += miles;
//    return this;
//}

// Step 14 
// Now create a public method called checkOil(). Within this method, check to see if the total miles 
// minus the last oil change plus the driven miles are less than or equal to 3000. If they are, return 
// a message to the user that they need an oil change. Otherwise, return the method (return this).

//Vehicle.prototype.checkOil = function(){
//    if(( this.drivenMiles) > 3000){
//        alert("You need an oil change");
//    }
//    else{     
//        return this;
//    }
//}

// Step 15
// Now create a new sub class called Car that accepts one parameter for the amount of doors that the car has. 
// and ..
// Step 16 
// Within the new Car class, initialize a public property called doorCount and set it equal to the argument.

 //function Car (numDoors) {
 //   this.doorCount = numDoors; 
 //}


// Step 17 
// Within the Car class use a conditional to check and see if the door count is greater than 2. If it is, 
// set the type property to Sedan. Otherwise, set it to coupe.

//Vehicle.prototype.carStyle = function(){
    
//    if(this.doorCount > 2){
        
//        this.type = "Sedan";
//    }
//    else{
//        this.type = "Coupe";
//    }
//}


// Step 18
// Now, make sure that the Car class inherits from the Vehicle base class. Use this opportunity to pass 
// in the make, model, total miles, and last oil change values into the Vehicle’s constructor. 

//Car.prototype = new Vehicle("Aston Martin", "DB5", 60000,55000);

// Step 19 
// Then, create a new instance of the Car class and pass in the number of doors that the car has into 
// the Car’s constructor.

//var myCar = new Car(4);

// Step 20 
// Finally, using method chaining, call the drive() method of the car object, passing in a numeric value
// as a parameter. At the same time, call the checkOil() method. Display the results in the console window.
// You will either get a message indicating your car needs an oil change or you will get the object hierarchy.

//var results = myCar.drive(4000).checkOil();
//myCar.carStyle();
//console.log(" my car is a " + myCar.type);


//The Recipe Card (10 points)	
//Create an object to hold information on your favorite recipe. It should have properties for title (a string), 
// servings (a number), and ingredients (an array of strings). Your object should have a publically available 
// method that when called, will log out the recipe within the console so that the recipe information looks like 
//this:
//Guacamole
//Serves: 4
//Ingredients: 
//- 3 Avocados
//- 1 Lime
//- 1 Teaspoon Salt
//- 1/2 Cup Onion
//- 3 Tablespoons Cilantro
//- 2 Diced Tomatoes
//- 1 Teaspoon Garlic
//- 1 Pinch Ground Pepper

//var RecipeCard = function(title, servings, ingredients) {
    
//    this.title = title;
//    this.servings = servings;
//    this.ingredients = ingredients; 
//}

//RecipeCard.prototype.showRecipe = function(){
    
//    console.log(this.title);
//    console.log("Serves: " + this.servings);
//    console.log("Ingredients:");
//    for(var i in this.ingredients){
        
//        console.log("- " + this.ingredients[i]);
//    }
//}

//var guacIngredients = ["3 Avocados","1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 Pinch Ground Pepper"]
//var myRecipe = new RecipeCard("Guacamole",4,guacIngredients);
//myRecipe.showRecipe();


//The Reading List (10 points)
// Keep track of which books you read and which books you want to read! Create an array of objects, where 
// each object describes a book and has properties for the title (a string), author (a string), and alreadyRead 
// (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book 
// title and book author like so: "The Hobbit by J.R.R. Tolkien". Then, use a conditional to change the output
// depending on whether you read it yet or not. If you read it, log a string like 'You already read 
// "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" 
// by J.R.R. Tolkien.' Make sure your object contains at least 5 books.

//var  Book = function(title, author, alreadyRead){
    
//    this.title = title;
//    this.author = author;
//    this.alreadyRead = alreadyRead;
//}

//var book1 =  new Book("The Hobbit", "J.R.R. Tolkien", true);
//var book2 =  new Book("When Gadgets Betray Us", "Robert Vamosi", false);
//var book3 =  new Book("The War that Ended Peace: The Road to 1914", "Margaret MacMillan", false);
//var book4 =  new Book("The forgotton man", "amity schlades", true);
//var book5 =  new Book("Micro", "Michael Crighton", true);


//var books = Array(book1,book2, book3, book4);

//for(var i in books){
    
//    console.log(books[i].title + " by " + books[i].author);
//    if(books[i].alreadyRead == true){
//         console.log("You already read " + books[i].title + " by " + books[i].author);
//    } 
//    else{
//        console.log("You still need to read " + books[i].title + " by " + books[i].author);
//    }  
//}


//Fill in the Blanks (10 points)
//Fill in the blanks to make this program work.

//(function() {
//    var person = {
        // add code here
  //      buy: function(obj){
//            console.log("I'm rich");
//        }
//    };

//    var car = {
        // add code here
//        price: 100001,
//        drive: function(){
//            console.log("vroom vroom");
//        }
//    };

    // print vroom vroom
//    car.drive();

    // print 'I'm rich'
//    if (car.price > 100000) {
//        person.buy(car);
//    }
//}());

