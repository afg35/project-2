// jshint esversion: 6

//helper functions (not required)
let revWord = x => { //reverse the order of a indvidual word
  let answer = "";

  for (let i = (x.length - 1); i >= 0; i--) {
    answer = answer + x[i]; }

  return answer; };



let arraytostring = x => { //converts array's to strings Ex: ["a", "b"] -> "a b"
  let answer = "";
  for (i = 0; i < x.length; i++) {
    if (i == x.length - 1) {
      answer = answer + x[i]; }
    else {
    answer = answer + x[i] + " ";}
  }
  return answer;
};



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
  answer = arraytostring(array);

  return answer;
};


//Req 3b
let revWords2 = s => {
  let answer = "";
  let array = [];
  x = s.split(" "); //Array of each word split by the space
  length = x.length;

  x.forEach((elem) => {

    let nword = revWord(elem);

  array.push(nword);
});

  answer = arraytostring(array);

  return answer;
};


//Req 3c
let revWords3 = s => {
  let answer = "";
  let array = [];
  x = s.split(" "); //Array of each word split by the space
  length = x.length;

  for (let elem of x){

    let nword = revWord(elem);

    array.push(nword);
}

  answer = arraytostring(array);

  return answer;
};
