# Topic 25: Trie

> **Pattern Overview:** Prefix tree data structure for efficient string insertion, prefix matching, auto-completion, and grid word searches.

## 🧠 Algorithmic Blueprint / Mental Model

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def insert(self, word):
        curr = self.root
        for ch in word:
            curr = curr.children.setdefault(ch, TrieNode())
        curr.is_end = True
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 208 | [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) | **Medium** | `O(L) per op` | `O(Total Chars)` | Trie node with 26 children array/dict and is_end boolean. Implement insert, search, and startsWith. |
| [ ] | 211 | [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | **Medium** | `O(26^D) worst` | `O(Total Chars)` | Trie search with wildcard '.': when '.' encountered, recursively try all 26 existing child branches. |
| [ ] | 212 | [Word Search II](https://leetcode.com/problems/word-search-ii/) | **Hard** | `O(M * N * 4^L)` | `O(Total Chars)` | Insert word list into Trie. DFS on 2D grid matching Trie prefixes. Prune Trie nodes on word discovery. |
| [ ] | 648 | [Replace Words](https://leetcode.com/problems/replace-words/) | **Medium** | `O(N * L)` | `O(Dict Chars)` | Store dictionary root words in Trie. For each sentence word, walk Trie to find shortest matching prefix. |
| [ ] | 677 | [Map Sum Pairs](https://leetcode.com/problems/map-sum-pairs/) | **Medium** | `O(L) per op` | `O(Total Chars)` | Trie storing value at word end and sum of subtree values, or compute sum by traversing subtree from prefix node. |
| [ ] | 1268 | [Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/) | **Medium** | `O(N log N + L)` | `O(Total Chars)` | Trie where each node stores up to 3 lexicographically smallest words, or sort products and use binary search per prefix. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 208: [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(L) per op`
- **Target Space Complexity:** `O(Total Chars)`
- **Core Intuition:** Trie node with 26 children array/dict and is_end boolean. Implement insert, search, and startsWith.

#### Approach Breakdown
1. **State / Pointers:** Identify key invariants and boundaries.
2. **Transitions:** Update running state as the window/pointers/data structure evolves.
3. **Termination:** Ensure edge cases (empty inputs, single elements, boundary bounds) are guarded.

#### 📝 My Personal Revision Notes
> *Write your personal notes, edge cases you missed, or reflections below:*
- **Tricky Edge Cases:** 
- **Alternative Approaches:** 
- **Key Takeaway / Pattern Trigger:** 

```python
# Solution template for LC 208 - Implement Trie (Prefix Tree)
# Time: O(L) per op, Space: O(Total Chars)

```

---

### LeetCode 211: [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(26^D) worst`
- **Target Space Complexity:** `O(Total Chars)`
- **Core Intuition:** Trie search with wildcard '.': when '.' encountered, recursively try all 26 existing child branches.

#### Approach Breakdown
1. **State / Pointers:** Identify key invariants and boundaries.
2. **Transitions:** Update running state as the window/pointers/data structure evolves.
3. **Termination:** Ensure edge cases (empty inputs, single elements, boundary bounds) are guarded.

#### 📝 My Personal Revision Notes
> *Write your personal notes, edge cases you missed, or reflections below:*
- **Tricky Edge Cases:** 
- **Alternative Approaches:** 
- **Key Takeaway / Pattern Trigger:** 

```python
# Solution template for LC 211 - Design Add and Search Words Data Structure
# Time: O(26^D) worst, Space: O(Total Chars)

```

---

### LeetCode 212: [Word Search II](https://leetcode.com/problems/word-search-ii/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(M * N * 4^L)`
- **Target Space Complexity:** `O(Total Chars)`
- **Core Intuition:** Insert word list into Trie. DFS on 2D grid matching Trie prefixes. Prune Trie nodes on word discovery.

#### Approach Breakdown
1. **State / Pointers:** Identify key invariants and boundaries.
2. **Transitions:** Update running state as the window/pointers/data structure evolves.
3. **Termination:** Ensure edge cases (empty inputs, single elements, boundary bounds) are guarded.

#### 📝 My Personal Revision Notes
> *Write your personal notes, edge cases you missed, or reflections below:*
- **Tricky Edge Cases:** 
- **Alternative Approaches:** 
- **Key Takeaway / Pattern Trigger:** 

```python
# Solution template for LC 212 - Word Search II
# Time: O(M * N * 4^L), Space: O(Total Chars)

```

---

### LeetCode 648: [Replace Words](https://leetcode.com/problems/replace-words/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N * L)`
- **Target Space Complexity:** `O(Dict Chars)`
- **Core Intuition:** Store dictionary root words in Trie. For each sentence word, walk Trie to find shortest matching prefix.

#### Approach Breakdown
1. **State / Pointers:** Identify key invariants and boundaries.
2. **Transitions:** Update running state as the window/pointers/data structure evolves.
3. **Termination:** Ensure edge cases (empty inputs, single elements, boundary bounds) are guarded.

#### 📝 My Personal Revision Notes
> *Write your personal notes, edge cases you missed, or reflections below:*
- **Tricky Edge Cases:** 
- **Alternative Approaches:** 
- **Key Takeaway / Pattern Trigger:** 

```python
# Solution template for LC 648 - Replace Words
# Time: O(N * L), Space: O(Dict Chars)

```

---

### LeetCode 677: [Map Sum Pairs](https://leetcode.com/problems/map-sum-pairs/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(L) per op`
- **Target Space Complexity:** `O(Total Chars)`
- **Core Intuition:** Trie storing value at word end and sum of subtree values, or compute sum by traversing subtree from prefix node.

#### Approach Breakdown
1. **State / Pointers:** Identify key invariants and boundaries.
2. **Transitions:** Update running state as the window/pointers/data structure evolves.
3. **Termination:** Ensure edge cases (empty inputs, single elements, boundary bounds) are guarded.

#### 📝 My Personal Revision Notes
> *Write your personal notes, edge cases you missed, or reflections below:*
- **Tricky Edge Cases:** 
- **Alternative Approaches:** 
- **Key Takeaway / Pattern Trigger:** 

```python
# Solution template for LC 677 - Map Sum Pairs
# Time: O(L) per op, Space: O(Total Chars)

```

---

### LeetCode 1268: [Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N log N + L)`
- **Target Space Complexity:** `O(Total Chars)`
- **Core Intuition:** Trie where each node stores up to 3 lexicographically smallest words, or sort products and use binary search per prefix.

#### Approach Breakdown
1. **State / Pointers:** Identify key invariants and boundaries.
2. **Transitions:** Update running state as the window/pointers/data structure evolves.
3. **Termination:** Ensure edge cases (empty inputs, single elements, boundary bounds) are guarded.

#### 📝 My Personal Revision Notes
> *Write your personal notes, edge cases you missed, or reflections below:*
- **Tricky Edge Cases:** 
- **Alternative Approaches:** 
- **Key Takeaway / Pattern Trigger:** 

```python
# Solution template for LC 1268 - Search Suggestions System
# Time: O(N log N + L), Space: O(Total Chars)

```

---

[← Back to Master README](../README.md)
