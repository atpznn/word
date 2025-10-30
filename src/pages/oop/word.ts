export class WordGame {
  private BASE_CASE = 1;
  private EMPTY_STRING = 0;
  private NOT_FOUND = -1;
  private NEXT_INDEX = 1;
  private FIRST_INDEX = 0;
  private randomWord: string;
  private word: string;
  constructor(word: string) {
    this.word = word;
    this.randomWord = this.randomString();
  }
  getWord() {
    return this.word;
  }
  getRandomWord() {
    return this.randomWord;
  }
  isCorrect(answer: string) {
    return this.word == answer;
  }
  private removeStringAtIndex(word: string, index: number) {
    return (
      word.substring(this.FIRST_INDEX, index) +
      word.substring(index + this.NEXT_INDEX)
    );
  }
  private removeHasTyping(answer: string, word: string): string {
    if (this.isEmpty(answer)) return word;
    const firstCharAnswer = answer[0];
    const answerDeleted = this.removeStringAtIndex(answer, this.FIRST_INDEX);
    const indexNeedToRemove = word.indexOf(firstCharAnswer);
    if (this.isNotFound(indexNeedToRemove))
      return this.removeHasTyping(answerDeleted, word);
    const wordDeleted = this.removeStringAtIndex(word, indexNeedToRemove);
    return this.removeHasTyping(answerDeleted, wordDeleted);
  }
  private randomStringHelper(word: string): string {
    if (this.isBaseCase(word)) return this.getFirstCharacter(word);
    const listIndex = this.getListIndex(word);
    const index = this.getRandomIndex(listIndex);
    const selectedValue = word[index];
    const remain = this.removeStringAtIndex(word, index);
    return selectedValue + this.randomStringHelper(remain);
  }
  remainWord(answer: string) {
    return this.removeHasTyping(answer, this.randomWord);
  }
  canBeCheck(answer: string) {
    return this.word.length == answer.length;
  }

  private getRandomIndex(listItem: unknown[]) {
    const randomIndex = Math.floor(Math.random() * listItem.length);
    return randomIndex;
  }
  private isNotFound(index: number) {
    return index == this.NOT_FOUND;
  }
  private isBaseCase(word: string) {
    return word.length == this.BASE_CASE || this.isEmpty(word);
  }
  private getFirstCharacter(word: string) {
    return word[0];
  }
  private getListIndex(word: string) {
    return word.split("").map((_, index) => index);
  }
  private isEmpty(word: string) {
    return word.length == this.EMPTY_STRING;
  }

  private randomString() {
    return this.randomStringHelper(this.word);
  }
}
