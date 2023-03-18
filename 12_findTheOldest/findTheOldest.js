const findTheOldest = function(people) {
    const date = new Date();
    let persons = [];
    let ages = [];
    let inc = 0;
    for(let person of people){
        persons[inc] = person;
        var age = person.yearOfDeath != null ? person.yearOfDeath - person.yearOfBirth : date.getFullYear() - person.yearOfBirth;
        ages[inc] = age;

        inc++;
    }
    let oldest = Math.max(...ages)
    return persons[ages.indexOf(Math.max(oldest))];
};

// Do not edit below this line
module.exports = findTheOldest;
