//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
let moreAboutHome = (address,distanceFromTown,hasNeighbours) => {
    let datatype = typeof address + typeof distanceFromTown + typeof hasNeighbours;
    return datatype;
}

//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
let moreAboutKaren = (parents,noOfSiblings,isNuclearFamily) => {
    return typeof parents == "string" &&
            typeof noOfSiblings == "number" &&
              typeof isNuclearFamily == "boolean";  
}

//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
let doesFriendExist = (ageInText,ageInNumber) => {
    if(isNaN(ageInText)) {
        return ageInText;
    }
    else if(isNaN(ageInNumber)) {
        return ageInNumber;
    }
}

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?
let sweetTooth = (totalNoOfSweets,
    sweetsConsumedByKaren,
    sweetsConsumedInNMeters,
    metersToTravel) => {
        if(
            typeof sweetsConsumedByKaren != "number" ||
            typeof sweetsConsumedInNMeters != "number" ||
            typeof metersToTravel != "number" ||
            typeof totalNoOfSweets != "number")  {
        return `No sweets for Karen's friend`;
    }
    let remaining = (totalNoOfSweets -
        (sweetsConsumedByKaren + sweetsConsumedInNMeters * metersToTravel)) / 2;
    return remaining;
}
//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
let convertToCelsius = (fahrenheit) => {
    let celsius = (fahrenheit - 32) * 5 /9;
        if(typeof fahrenheit == "number") {
            return celsius;
        }
        else {
            return `Technical Error!`;
        }
}

//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
let aDifficultChoice = (strategies) => {
    if(strategies == -1) {
        return `Break down and give up all hope`;
    }
    else if(strategies == 1) {
        return `Take her daughter to a doctor`;
    }
    else if(typeof strategies == "undefined") {
        return `Wasn't able to decide`;
    }
    else {
        return `Refused to do anything for Karen`;
    }
}

//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy