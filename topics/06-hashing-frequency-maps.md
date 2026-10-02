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

[← Back to Master README](../README.md)
