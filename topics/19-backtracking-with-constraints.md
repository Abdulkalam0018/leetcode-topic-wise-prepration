# Topic 19: Backtracking with Constraints

> **Pattern Overview:** Combinatorial search with state pruning, grid path-finding, diagonal conflict detection, and palindrome constraints.

## 🧠 Algorithmic Blueprint / Mental Model

```python
def dfs(r, c, word_idx):
    if word_idx == len(word): return True
    if not (0 <= r < R and 0 <= c < C) or board[r][c] != word[word_idx]:
        return False
    temp, board[r][c] = board[r][c], '#'
    found = any(dfs(r + dr, c + dc, word_idx + 1) for dr, dc in directions)
    board[r][c] = temp
    return found
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 40 | [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/) | **Medium** | `O(2^N)` | `O(N)` | Sort candidates. Skip duplicates at same recursion depth (i > start and nums[i] == nums[i-1]). Each number used once. |
| [ ] | 17 | [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | **Medium** | `O(4^N)` | `O(N)` | Map phone digits to character sets. Backtrack by expanding each possible letter at index digit_idx. |
| [ ] | 79 | [Word Search](https://leetcode.com/problems/word-search/) | **Medium** | `O(M * N * 3^L)` | `O(L)` | Grid DFS backtracking in 4 directions. Mark visited cell in-place with '#' and restore on backtrack. |
| [ ] | 131 | [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) | **Medium** | `O(N * 2^N)` | `O(N)` | Partition palindrome: check if s[start..i] is palindrome. If yes, add substring to path and recurse on i + 1. |
| [ ] | 51 | [N-Queens](https://leetcode.com/problems/n-queens/) | **Hard** | `O(N!)` | `O(N)` | N-Queens: track occupied columns, positive diagonals (r + c), and negative diagonals (r - c) with sets. |
| [ ] | 52 | [N-Queens II](https://leetcode.com/problems/n-queens-ii/) | **Hard** | `O(N!)` | `O(N)` | Same as N-Queens (51) but only count valid board configurations instead of building strings. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 40: [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(2^N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Sort candidates. Skip duplicates at same recursion depth (i > start and nums[i] == nums[i-1]). Each number used once.

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
# Solution template for LC 40 - Combination Sum II
# Time: O(2^N), Space: O(N)

```

---

### LeetCode 17: [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(4^N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Map phone digits to character sets. Backtrack by expanding each possible letter at index digit_idx.

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
# Solution template for LC 17 - Letter Combinations of a Phone Number
# Time: O(4^N), Space: O(N)

```

---

### LeetCode 79: [Word Search](https://leetcode.com/problems/word-search/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(M * N * 3^L)`
- **Target Space Complexity:** `O(L)`
- **Core Intuition:** Grid DFS backtracking in 4 directions. Mark visited cell in-place with '#' and restore on backtrack.

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
# Solution template for LC 79 - Word Search
# Time: O(M * N * 3^L), Space: O(L)

```

---

### LeetCode 131: [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N * 2^N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Partition palindrome: check if s[start..i] is palindrome. If yes, add substring to path and recurse on i + 1.

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
# Solution template for LC 131 - Palindrome Partitioning
# Time: O(N * 2^N), Space: O(N)

```

---

### LeetCode 51: [N-Queens](https://leetcode.com/problems/n-queens/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N!)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** N-Queens: track occupied columns, positive diagonals (r + c), and negative diagonals (r - c) with sets.

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
# Solution template for LC 51 - N-Queens
# Time: O(N!), Space: O(N)

```

---

### LeetCode 52: [N-Queens II](https://leetcode.com/problems/n-queens-ii/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N!)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Same as N-Queens (51) but only count valid board configurations instead of building strings.

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
# Solution template for LC 52 - N-Queens II
# Time: O(N!), Space: O(N)

```

---

[← Back to Master README](../README.md)
