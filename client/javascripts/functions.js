// jshint esversion: 6

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};

//helper function
let revWord = x => {
  let answer = "";

  for (let i = (x.length - 1); i >= 0; i--) {
    answer = answer + x[i]; }

  return answer; };



//Req. 3a
let revWords1 = s => {
  let answer = "";
  let array = [];
  x = s.split(" "); //Array of each word split by the space
  length = x.length;

  for (let i = 0; i < length; i++) {

    let word = x[i];
    nword = revWord(word);

  array.push(nword);

  }
  for (let i = 0; i < array.length; i++){ //Putting array into string format

    if (i == array.length - 1) { //No space at the end of string if its the last word
      answer = answer + array[i]; }
    else { //If not last word, add a space to the end of the string
    answer = answer + array[i] + " ";}

  }

  return answer;
};
