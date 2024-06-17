# tries# Trie Data Structure in JavaScript

This repository provides an implementation of the Trie data structure in JavaScript. Tries, also known as prefix trees, are tree-like data structures commonly used for efficient string storage and retrieval. They are often used in tasks like autocomplete, spell checking, and word search.

## How to Use

1. Clone the repository to your local machine.
2. Include the `trie.js` file in your project.
3. Create a new instance of the Trie class:

   ```javascript
   const trie = new Trie();
   ```

4. Insert words into the trie using the `insert` method:

   ```javascript
   trie.insert("apple");
   trie.insert("banana");
   ```

5. Search for a word in the trie using the `search` method:

   ```javascript
   console.log(trie.search("apple")); // true
   console.log(trie.search("grape")); // false
   ```

6. Check if there are any words in the trie that start with a given prefix using the `startsWith` method:

   ```javascript
   console.log(trie.startsWith("app")); // true
   console.log(trie.startsWith("ora")); // false
   ```

## Contributing

Contributions to this repository are welcome! If you have any suggestions, bug fixes, or new features to add, feel free to open a pull request.

