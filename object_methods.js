let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };

  //assign makes a shallow copy of the original object, object references are copied. so both the values changes
const copied = Object.assign({}, users)
copied.Alan.age = 28;

//console.log("original " +  users.Alan.age ); //28
//console.log("copied" + copied.Alan.age ); //28

//hasOwnProperty()  returns bool value
const checkProp= users.hasOwnProperty('salary');
//console.log(checkProp); //false

const getValues = Object.values(users);
//console.log(getValues);   [{ age: 28, online: true },{ age: 32, online: true },{ age: 48, online: true },{ age: 19, online: true }]

const getKeys = Object.keys(users);
// console.log(getKeys); [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]


const getEntries = Object.entries(users);
console.log(getEntries.length); //can be used to get the count 

//console.log(getEntries ); [[ 'Alan', { age: 28, online: true } ],[ 'Jeff', { age: 32, online: true } ],[ 'Sarah', { age: 48, online: true } ],[ 'Ryan', { age: 19, online: true } ]]
