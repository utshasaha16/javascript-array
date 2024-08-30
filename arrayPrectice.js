// task-1
const fruits = ['apple', 'banana', 'mango', 'orange'];
console.log(fruits[3]);


fruits[2] = 'jambura';
console.log(fruits);



// task-2
const place = ['dhaka', 'chittagong', 'rajshahi',];
place.push('cumilla');
console.log(place);

place.push('sundarbon', 'rangamati');
console.log(place);

place.pop('rangamati');
console.log(place);

// task-3
const books = ['moby dick', 'javascript', 'bangla', 'english', 'mathmatice'];
if(books.includes('javascript')){
    console.log('the array contains a javascript book');
}
else{
    console.log('the array does not contain a javascript book');
}

// task-4
const foods = ['apple', 'banana', 'mango'];

const age = 15;

const nums = [1, 2, 3, 4, 5];

const friends = ['abul', 'babul', 'kashem'];

console.log(Array.isArray(foods));
console.log(Array.isArray(age));
console.log(Array.isArray(nums));
console.log(Array.isArray(friends));

// task-5
const person = ['abul', 'babul', 'kashem'];

const fol = ['apple', 'banana', 'mango'];

console.log('parson'.concat('fol'));
