// Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

var hashes = [ 
  {firstName: 'steve', lastName: 'balmer'}, 
  {firstName: 'roj', lastName: 'gamesh'}, 
  {firstName: 'Chris', lastName: 'stevenson'}
]

console.log(hashes[0]);

// all of their last names

newHash = hashes.map((hash) => hash.lastName );
console.log(newHash)