// code your solution here

// Quiz 1

function saturdayFun(defaultActivity = "roller-skate") {
  // Activity planned for Saturday (optional argument)
  return `This Saturday, I want to ${defaultActivity}!`;
}

// Quiz 2
const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};
// Quiz 3

function wrapAdjective(flair = "*") {
  return function (adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
