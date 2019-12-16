function permute(str) {
  let chars = str.split("");
  let results = [[chars.shift()]];
  while (chars.length) {
    const currChar = chars.shift();
    let tmpResultsArr = [];
    results.forEach(result => {
      let index = 0;
      while (index <= result.length) {
        const tmp = [...result];
        tmp.splice(index, 0, currChar);
        tmpResultsArr.push(tmp);
        index++;
      }
    });
    results = tmpResultsArr;
  }
  return results
    .map(result => result.join(""))
    .filter((el, index, self) => self.indexOf(el) === index)
    .sort();
}

module.exports = permute;
