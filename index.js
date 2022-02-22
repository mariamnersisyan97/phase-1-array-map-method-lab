const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

  function newTitle(string){
  let words = string.split(' ');
  for (let i=0; i <words.length; i++){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  const newArr = words.join(' ');
  return newArr;
}
const titleCased = () => {
  const updatedTutorials = tutorials.map(newTitle);
  return updatedTutorials;

}



// function titleCase(str) {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ');
// }
// titleCase("I'm a little tea pot");

