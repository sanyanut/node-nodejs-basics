const parseArgs = () => {
  const argsList = process.argv;
  let argsArr = [];
  let result = '';

  for(let i = 2; i < argsList.length; i+=2) {
    argsArr.push(`${argsList[i]} is ${argsList[i+1]}`)
  }
  argsArr.forEach(item => {
    result = result + ` ${item},`
  })
  result = result.slice(0, -1);

  console.log(result)
};

parseArgs();