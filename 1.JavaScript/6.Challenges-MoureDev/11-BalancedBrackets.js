let isBalanced = (input) => {

    let brackets = "[]{}()<>"
    let stack = []
  
    for(let bracket of input) {
      let bracketsIndex = brackets.indexOf(bracket)
      console.log(`The current element is ${bracket}, which has an index in input of ${input.indexOf(bracket)}, and matches the bracket with index ${bracketsIndex} in brackets`)
  
      if(bracketsIndex % 2 === 0) {
        stack.push(bracketsIndex + 1)
        console.log(`this is an opening bracket. The address of its matching closing bracket in brackets is ${bracketsIndex + 1}. Adding that index to the stack makes the stack ${stack}`)
      } else {
        console.log(`this is a closing bracket, so ${stack.pop()} is being popped off the stack`)
        // Last element different than first ocurrence
        if(stack.pop() !== bracketsIndex) {
          return false;
        }
      }
    }
    return stack.length === 0
  }

  console.log(isBalanced("[(])"));
  console.log(isBalanced("[()]{}{[()()]()}"));