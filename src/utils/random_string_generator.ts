// Array of sample words
const words = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed',
    'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua'
  ];
  
  // Function to generate a random word
  function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }
  
  // Function to generate a random sentence with a given number of words
  function getRandomSentence(wordCount:number) {
    let sentence = '';
    for (let i = 0; i < wordCount; i++) {
      sentence += getRandomWord() + ' ';
    }
    return sentence.trim() + '.';
  }
  
  // Function to generate a random paragraph with a given number of sentences
  function getRandomParagraph(sentenceCount:number, wordsPerSentence:number) {
    let paragraph = '';
    for (let i = 0; i < sentenceCount; i++) {
      paragraph += getRandomSentence(wordsPerSentence) + ' ';
    }
    return paragraph.trim();
  }
  
  // Function to generate multiple paragraphs
  export function getRandomParagraphs(paragraphCount:number, sentenceCount:number, wordsPerSentence:number): string[] {
    let paragraphs = [];
    for (let i = 0; i < paragraphCount; i++) {
      paragraphs.push(getRandomParagraph(sentenceCount, wordsPerSentence) + '\n\n');
    }
    return paragraphs;
  }
  
 
  
  
  