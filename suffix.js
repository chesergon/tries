class SuffixTrieNode {
    constructor() {
        this.children = {};
        this.indexes = [];
    }
}

class SuffixTrie {
    constructor() {
        this.root = new SuffixTrieNode();
    }

    insertSuffix(suffix, index) {
        let currentNode = this.root;
        for (let char of suffix) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new SuffixTrieNode();
            }
            currentNode = currentNode.children[char];
            currentNode.indexes.push(index);
        }
    }

    buildTrie(text) {
        for (let i = 0; i < text.length; i++) {
            this.insertSuffix(text.substring(i), i);
        }
    }

    search(pattern) {
        let currentNode = this.root;
        for (let char of pattern) {
            if (!currentNode.children[char]) {
                return [];
            }
            currentNode = currentNode.children[char];
        }
        return currentNode.indexes;
    }
}

// Example Usage
let text = "banana";
let trie = new SuffixTrie();
trie.buildTrie(text);

console.log("Suffix Trie built for text:", text);

let pattern = "ana";
let result = trie.search(pattern);
if (result.length > 0) {
    console.log(`Pattern "${pattern}" found at positions:`, result);
} else {
    console.log(`Pattern "${pattern}" not found.`);
}
