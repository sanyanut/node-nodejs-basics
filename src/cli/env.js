const parseEnv = () => {
  let result = ''
  const envObj = process.env;

  for(let key in envObj) {
    if(key.startsWith('RSS_')){
      result = result + `${key}=${envObj[key]};`;
    }
  }
  result = result.slice(0, -1);
  console.log(result)
};

parseEnv();