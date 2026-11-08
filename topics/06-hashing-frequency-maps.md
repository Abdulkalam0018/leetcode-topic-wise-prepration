# Topic 6: Hashing / Frequency Maps

> **Pattern Overview:** Harnessing O(1) average lookup, insertion, and frequency counting to transform multi-pass nested loops into single-pass solutions.

## 🧠 Algorithmic Blueprint / Mental Model

```python
seen = {}
for i, num in enumerate(nums):
    diff = target - num
    if diff in seen:
        return [seen[diff], i]
    seen[num] = i
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | **Easy** | `O(N)` | `O(N)` | Store {value: index} in hash map. For current num, check if (target - num) exists in map. |
| [ ] | 49 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | **Medium** | `O(N * K log K)` | `O(N * K)` | Group strings by sorted character tuple or 26-char frequency count tuple as dictionary key. |
| [ ] | 128 | [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) | **Medium** | `O(N)` | `O(N)` | Insert all numbers into hash set. Only check streak for numbers that are sequence starts (num - 1 not in set). |
| [ ] | 217 | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | **Easy** | `O(N)` | `O(N)` | Use a hash set to detect duplicate elements in a single pass. |
| [ ] | 242 | [Valid Anagram](https://leetcode.com/problems/valid-anagram/) | **Easy** | `O(N)` | `O(1)` | Compare character counts between two strings using an array of size 26 or hash map. |
| [ ] | 347 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | **Medium** | `O(N)` | `O(N)` | Count frequencies with hash map. Bucket sort by frequency or use min-heap of size k to extract top k elements. |
| [ ] | 41 | [First Missing Positive](https://leetcode.com/problems/first-missing-positive/) | **Hard** | `O(N)` | `O(1)` | In-place cyclic sort/hashing: place each positive integer x in 1..n at index x - 1 using swaps. First index where nums[i] != i + 1 is the missing positive. |
| [ ] | 273 | [Integer to English Words](https://leetcode.com/problems/integer-to-english-words/) | **Hard** | `O(1)` | `O(1)` | Break integer into 3-digit chunks (Billion, Million, Thousand, Units). Use lookup tables for units (1-19) and tens (20-90) and process recursively. |
| [ ] | 432 | [All O`one Data Structure](https://leetcode.com/problems/all-oone-data-structure/) | **Hard** | `O(1) all ops` | `O(N)` | Doubly Linked List of frequency buckets + hash map of key to bucket node. Move keys between adjacent count buckets on inc and dec; head/tail give min and max in O(1). |
| [ ] | 460 | [LFU Cache](https://leetcode.com/problems/lfu-cache/) | **Hard** | `O(1) get & put` | `O(capacity)` | Hash map key -> (value, freq) + hash map freq -> DoublyLinkedList of keys (ordered by recency), tracking min_freq. Evict LRU from min_freq list. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 1: [Two Sum](https://leetcode.com/problems/two-sum/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Store {value: index} in hash map. For current num, check if (target - num) exists in map.

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
# Solution template for LC 1 - Two Sum
# Time: O(N), Space: O(N)

```

---

### LeetCode 49: [Group Anagrams](https://leetcode.com/problems/group-anagrams/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N * K log K)`
- **Target Space Complexity:** `O(N * K)`
- **Core Intuition:** Group strings by sorted character tuple or 26-char frequency count tuple as dictionary key.

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
# Solution template for LC 49 - Group Anagrams
# Time: O(N * K log K), Space: O(N * K)

```

---

### LeetCode 128: [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Insert all numbers into hash set. Only check streak for numbers that are sequence starts (num - 1 not in set).

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
# Solution template for LC 128 - Longest Consecutive Sequence
# Time: O(N), Space: O(N)

```

---

### LeetCode 217: [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Use a hash set to detect duplicate elements in a single pass.

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
# Solution template for LC 217 - Contains Duplicate
# Time: O(N), Space: O(N)

```

---

### LeetCode 242: [Valid Anagram](https://leetcode.com/problems/valid-anagram/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Compare character counts between two strings using an array of size 26 or hash map.

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
# Solution template for LC 242 - Valid Anagram
# Time: O(N), Space: O(1)

```

---

### LeetCode 347: [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Count frequencies with hash map. Bucket sort by frequency or use min-heap of size k to extract top k elements.

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
# Solution template for LC 347 - Top K Frequent Elements
# Time: O(N), Space: O(N)

```

---

### LeetCode 41: [First Missing Positive](https://leetcode.com/problems/first-missing-positive/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** In-place cyclic sort/hashing: place each positive integer x in 1..n at index x - 1 using swaps. First index where nums[i] != i + 1 is the missing positive.

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
# Solution template for LC 41 - First Missing Positive
# Time: O(N), Space: O(1)

```

---

### LeetCode 273: [Integer to English Words](https://leetcode.com/problems/integer-to-english-words/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(1)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Break integer into 3-digit chunks (Billion, Million, Thousand, Units). Use lookup tables for units (1-19) and tens (20-90) and process recursively.

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
# Solution template for LC 273 - Integer to English Words
# Time: O(1), Space: O(1)

```

---

### LeetCode 432: [All O`one Data Structure](https://leetcode.com/problems/all-oone-data-structure/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(1) all ops`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Doubly Linked List of frequency buckets + hash map of key to bucket node. Move keys between adjacent count buckets on inc and dec; head/tail give min and max in O(1).

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
# Solution template for LC 432 - All O`one Data Structure
# Time: O(1) all ops, Space: O(N)

```

---

### LeetCode 460: [LFU Cache](https://leetcode.com/problems/lfu-cache/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(1) get & put`
- **Target Space Complexity:** `O(capacity)`
- **Core Intuition:** Hash map key -> (value, freq) + hash map freq -> DoublyLinkedList of keys (ordered by recency), tracking min_freq. Evict LRU from min_freq list.

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
# Solution template for LC 460 - LFU Cache
# Time: O(1) get & put, Space: O(capacity)

```

---

[← Back to Master README](../README.md)
