  
// module.exports = function check(str, bracketsConfig) {
// };

// function check(str, bracketsConfig) {

// }


let isBalanced = (input, config) => {

    let brackets = "[]{}()<>||";
    let stack = [];
  
    for (let bracket of input) {
      let bracketsIndex = brackets.indexOf(bracket);
  
      if (bracketsIndex % 2 === 0) {
        stack.push(bracketsIndex + 1);
        console.log(`bracketsIndex: ${bracketsIndex}`);
        console.log(`stack: ${stack}`);
      } else {
  
        if (stack.pop() !== bracketsIndex) {
          console.log(false);
          return false;
        }
      }
    }
  console.log(stack.length === 0);
    return stack.length === 0;
  };
  
  isBalanced('||');
  
  let array = [
    ['(', ')'],
    ['[', ']']
  ];
  let object = {};
  
  // for (let item of array) {
  //   object[item[0]] = item[1];
  // }
  
  object = array.reduce((acc, item) => {
    acc[item[0]] = item[1];
    return acc;
  }, {});
  
  console.log(object);
