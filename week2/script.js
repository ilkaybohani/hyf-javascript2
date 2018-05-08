"use strict";
/*
let numbers = [1, 2, 3, 4];
var number = [];
var index;
let newNumbers = numbers.filter((number) => number % 2 !== 0).map(number => { return (number * 2) });

console.log("The doubled numbers are", newNumbers);
*/

//2.1
 //Filters out even numbers. 
 let numbers = [1, 2, 3, 4];

 let newNumbers = numbers.filter((number) => number % 2 !== 0);

 //Times outcome by 2. 
 
 newNumbers = newNumbers.map((number) => number * 2);
 console.log(newNumbers);

//2.2
const monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

const tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

const tasks = monday.concat(tuesday);
// changing durations to hours      
const tasksByHours = tasks.map((val) => {
    return {
        name: (val.name),
        duration: (val.duration / 60),
    };
});
console.log(tasksByHours);

// filtering to two hours or more
const tasksHoursTwOrMore = tasksByHours.filter((val) => val.duration >= 2);
console.log(tasksHoursTwOrMore);

//making an array of fees with map
const tasksFeesArray = tasksHoursTwOrMore.map((val) => val.duration * 50);
console.log(tasksFeesArray);

//getting the total using reduce    
const fees = tasksFeesArray.reduce((acc, val) => { return acc + val; });

// this is for getting this format 11.11
function financial(x) {
    return Number(x).toFixed(2);
}
console.log("Total to pay: € " + financial(fees));



  