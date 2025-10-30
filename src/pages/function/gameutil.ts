export function UtilGameWord() {
  function randomIndex(listItem: unknown[]) {
    const randomIndex = Math.floor(Math.random() * listItem.length);
    return randomIndex;
  }
  function randomString(word: string) {
    const listIndex = word.split("").map((_, index) => index);
    let result = "";
    word.split("").forEach(() => {
      const index = randomIndex(listIndex);
      const selectedValue = listIndex[index];
      listIndex.splice(index, 1);
      result += word[selectedValue];
    });
    return result;
  }
  function isCorrect(typing: string, compare: string) {
    return typing == compare;
  }
  function canBeCheck(typeing: string, word: string) {
    return typeing.length == word.length;
  }
  function displayRemain(source: string, typeing: string) {
    const _source = source.split("");
    const _typeing = typeing.split("");
    let result = "";
    _source.forEach((x) => {
      const indexToDelete = _typeing.findIndex((f) => f == x);
      if (indexToDelete > -1) {
        _typeing.splice(indexToDelete, 1);
      } else {
        result += x;
      }
    });
    return result;
  }
  return {
    displayRemain,
    canBeCheck,
    isCorrect,
    randomIndex,
    randomString,
  };
}
