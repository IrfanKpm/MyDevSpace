
function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
}

/**
 * Returns the full name of the person.
 * returns {string} The full name in the format "firstName lastName".
 */
Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
};

// Create a new Person instance and log the full name
let person1 = new Person("Bruce", "Wayne");
console.log(person1.getFullName()); // Outputs: Bruce Wayne

/**
 * Represents a superhero, inheriting from Person.
 * constructor
 * param {string} fName - The first name of the superhero.
 * param {string} lName - The last name of the superhero.
 */
function SuperHero(fName, lName) {
    // Call the Person constructor with the current context
    Person.call(this, fName, lName);
    this.isSuperHero = true;
}

/**
 * Makes the superhero fight crime.
 */
SuperHero.prototype.fightCrime = function() {
    console.log("FightCrime");
};

// Set up inheritance from Person
SuperHero.prototype = Object.create(Person.prototype);
SuperHero.prototype.constructor = SuperHero; // Restore the constructor property

// Create a new SuperHero instance, and log the full name
const batman = new SuperHero("John", "Wayne");
console.log(batman.getFullName()); // Outputs: John Wayne
