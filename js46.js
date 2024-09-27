// Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

hash = {
  title: 'zathura',
  author: 'steve',
  pages: 432
}

console.log(hash);

Object.keys(hash).forEach((key) => { 
  console.log(`${key}: ${hash[key]}`);
})

console.log(hash.author)
console.log(hash.title)
console.log(hash.pages)
