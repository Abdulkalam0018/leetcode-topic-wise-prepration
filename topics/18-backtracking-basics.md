# Topic 18: Backtracking Basics

> **Pattern Overview:** Exhaustive depth-first combinatorial search (permutations, combinations, subsets) using choose, explore, and unchoose.

## 🧠 Algorithmic Blueprint / Mental Model

```python
def backtrack(start, path):
    res.append(path[:])
    for i in range(start, len(nums)):
        if i > start and nums[i] == nums[i-1]:
            continue # skip duplicates
        path.append(nums[i])
        backtrack(i + 1, path)
        path.pop() # unchoose
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 46 | [Permutations](https://leetcode.com/problems/permutations/) | **Medium** | `O(N * N!)` | `O(N)` | Generate all permutations by maintaining visited boolean array or in-place swapping elements in array. |
| [ ] | 47 | [Permutations II](https://leetcode.com/problems/permutations-ii/) | **Medium** | `O(N * N!)` | `O(N)` | Sort array. Backtracking with visited array: skip duplicate nums[i] == nums[i-1] if !visited[i-1]. |
| [ ] | 77 | [Combinations](https://leetcode.com/problems/combinations/) | **Medium** | `O(C(N, K))` | `O(K)` | Combinations of k from 1..n: backtrack from start index. Prune loop if remaining elements cannot fill k. |
| [ ] | 78 | [Subsets](https://leetcode.com/problems/subsets/) | **Medium** | `O(N * 2^N)` | `O(N)` | Power set: at each index, choose to include nums[i] or explore choices i..n. Append snapshot of path at every step. |
| [ ] | 90 | [Subsets II](https://leetcode.com/problems/subsets-ii/) | **Medium** | `O(N * 2^N)` | `O(N)` | Sort array with duplicates. In loop for i in start..n, skip if i > start and nums[i] == nums[i-1]. |
| [ ] | 39 | [Combination Sum](https://leetcode.com/problems/combination-sum/) | **Medium** | `O(N^(T/M))` | `O(T/M)` | Sort candidates. Backtrack allowing same element reuse: recurse with same start index i, decrease target. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 46: [Permutations](https://leetcode.com/problems/permutations/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N * N!)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Generate all permutations by maintaining visited boolean array or in-place swapping elements in array.

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
# Solution template for LC 46 - Permutations
# Time: O(N * N!), Space: O(N)

```

---

### LeetCode 47: [Permutations II](https://leetcode.com/problems/permutations-ii/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N * N!)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Sort array. Backtracking with visited array: skip duplicate nums[i] == nums[i-1] if !visited[i-1].

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
# Solution template for LC 47 - Permutations II
# Time: O(N * N!), Space: O(N)

```

---

### LeetCode 77: [Combinations](https://leetcode.com/problems/combinations/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(C(N, K))`
- **Target Space Complexity:** `O(K)`
- **Core Intuition:** Combinations of k from 1..n: backtrack from start index. Prune loop if remaining elements cannot fill k.

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
# Solution template for LC 77 - Combinations
# Time: O(C(N, K)), Space: O(K)

```

---

### LeetCode 78: [Subsets](https://leetcode.com/problems/subsets/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N * 2^N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Power set: at each index, choose to include nums[i] or explore choices i..n. Append snapshot of path at every step.

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
# Solution template for LC 78 - Subsets
# Time: O(N * 2^N), Space: O(N)

```

---

### LeetCode 90: [Subsets II](https://leetcode.com/problems/subsets-ii/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N * 2^N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Sort array with duplicates. In loop for i in start..n, skip if i > start and nums[i] == nums[i-1].

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
# Solution template for LC 90 - Subsets II
# Time: O(N * 2^N), Space: O(N)

```

---

### LeetCode 39: [Combination Sum](https://leetcode.com/problems/combination-sum/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N^(T/M))`
- **Target Space Complexity:** `O(T/M)`
- **Core Intuition:** Sort candidates. Backtrack allowing same element reuse: recurse with same start index i, decrease target.

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
# Solution template for LC 39 - Combination Sum
# Time: O(N^(T/M)), Space: O(T/M)

```

---

[← Back to Master README](../README.md)
