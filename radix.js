// Node class for the radix trie
class RadixTrieNode {
    constructor() {
        this.children = {};  // Mapping of character to RadixTrieNode
        this.isEndOfWord = false;  // Flag to indicate end of a word
    }
}

// Radix Trie class
class RadixTrie {
    constructor() {
        this.root = new RadixTrieNode();
    }

    // Insert a word into the radix trie
    insert(word) {
        let currentNode = this.root;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            // Create a new node if the path doesn't exist
            if (!currentNode.children[char]) {
                currentNode.children[char] = new RadixTrieNode();
            }

            // Move to the next node
            currentNode = currentNode.children[char];
        }

        // Mark the end of the word
        currentNode.isEndOfWord = true;
    }

    // Search for a word in the radix trie
    search(word) {
        let currentNode = this.root;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            // If the path doesn't exist, the word is not in the trie
            if (!currentNode.children[char]) {
                return false;
            }

            // Move to the next node
            currentNode = currentNode.children[char];
        }

        // Check if the end of the word is reached
        return currentNode.isEndOfWord;
    }

    // Check if there are words with the given prefix
    startsWith(prefix) {
        let currentNode = this.root;

        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];

            // If the path doesn't exist, no words start with the prefix
            if (!currentNode.children[char]) {
                return false;
            }

            // Move to the next node
            currentNode = currentNode.children[char];
        }

        // There are words that start with the given prefix
        return true;
    }
}

// Example usage:
const trie = new RadixTrie();

trie.insert("apple");
trie.insert("app");
trie.insert("banana");

console.log(trie.search("apple"));  // Output: true
console.log(trie.search("banana")); // Output: true
console.log(trie.search("orange")); // Output: false

console.log(trie.startsWith("app")); // Output: true
console.log(trie.startsWith("ora")); // Output: false