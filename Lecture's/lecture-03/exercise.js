// Q-1 Create a variable of string type and try to add a number to it.

let a = "Harry"
let b = 6
console.log(a + b)

// Q-2 Use typeof operator to find the datatype of the string in last question.

console.log(typeof (a + b))

// Q-3 Create a const object in javascript. can you change it to hold a number later?

const x = {
    name: "Harry",
    section: 1,
    isPrincipal: false
}
x = 54  //not possible

// Q-4 Try to add a new key to the const object in problem 3. were you able to do it?

const y = {
    name: "Harry",
    section: 1,
    isPrincipal: false
}

y[ 'friend' ] = "jay"
y[ 'name' ] = "deep"
console.log(y)

// Q-5 Write a JS program to create a word-meaning dictionary of 5 words.

const dix = {
    subtle: "not very noticeable; not very strong or bright",
    adverb: "a word that adds more information about place",
    fickle: "always changing your mind or your feelings so you cannot be trusted",
}

console.log(dix.subtle)
console.log(dix[ 'subtle' ])