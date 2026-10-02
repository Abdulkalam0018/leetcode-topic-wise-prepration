# Topic 29: Grid DP

> **Pattern Overview:** 2D state dynamic programming over matrices, calculating unique paths, minimum cost traversals, and maximal square submatrices.

## 🧠 Algorithmic Blueprint / Mental Model

```python
dp = [0] * n
dp[0] = 1
for r in range(m):
    for c in range(n):
        if grid[r][c] == 1:
            dp[c] = 0
        elif c > 0:
            dp[c] += dp[c - 1]
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 62 | [Unique Paths](https://leetcode.com/problems/unique-paths/) | **Medium** | `O(M * N)` | `O(N)` | dp[r][c] = dp[r-1][c] + dp[r][c-1]. Compress to 1D row array or use combinations formula C(m+n-2, m-1). |
| [ ] | 63 | [Unique Paths II](https://leetcode.com/problems/unique-paths-ii/) | **Medium** | `O(M * N)` | `O(N)` | Same as Unique Paths, but if grid[r][c] == 1, set dp[r][c] = 0. |
| [ ] | 64 | [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/) | **Medium** | `O(M * N)` | `O(1) in-place` | dp[r][c] = grid[r][c] + min(dp[r-1][c], dp[r][c-1]). Update grid in-place or 1D row. |
| [ ] | 221 | [Maximal Square](https://leetcode.com/problems/maximal-square/) | **Medium** | `O(M * N)` | `O(N)` | dp[r][c] = 1 + min(dp[r-1][c], dp[r][c-1], dp[r-1][c-1]) when cell is '1'. Track max side length. |
| [ ] | 931 | [Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/) | **Medium** | `O(N^2)` | `O(N)` | Falling path: dp[r][c] = matrix[r][c] + min(dp[r-1][c-1], dp[r-1][c], dp[r-1][c+1]). Update row by row. |
| [ ] | 120 | [Triangle](https://leetcode.com/problems/triangle/) | **Medium** | `O(N^2)` | `O(1) in-place` | Bottom-up triangle DP: start from second to last row, triangle[r][c] += min(triangle[r+1][c], triangle[r+1][c+1]). |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 62: [Unique Paths](https://leetcode.com/problems/unique-paths/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(M * N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** dp[r][c] = dp[r-1][c] + dp[r][c-1]. Compress to 1D row array or use combinations formula C(m+n-2, m-1).

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
# Solution template for LC 62 - Unique Paths
# Time: O(M * N), Space: O(N)

```

---

### LeetCode 63: [Unique Paths II](https://leetcode.com/problems/unique-paths-ii/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(M * N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Same as Unique Paths, but if grid[r][c] == 1, set dp[r][c] = 0.

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
# Solution template for LC 63 - Unique Paths II
# Time: O(M * N), Space: O(N)

```

---

### LeetCode 64: [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(M * N)`
- **Target Space Complexity:** `O(1) in-place`
- **Core Intuition:** dp[r][c] = grid[r][c] + min(dp[r-1][c], dp[r][c-1]). Update grid in-place or 1D row.

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
# Solution template for LC 64 - Minimum Path Sum
# Time: O(M * N), Space: O(1) in-place

```

---

### LeetCode 221: [Maximal Square](https://leetcode.com/problems/maximal-square/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(M * N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** dp[r][c] = 1 + min(dp[r-1][c], dp[r][c-1], dp[r-1][c-1]) when cell is '1'. Track max side length.

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
# Solution template for LC 221 - Maximal Square
# Time: O(M * N), Space: O(N)

```

---

### LeetCode 931: [Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N^2)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Falling path: dp[r][c] = matrix[r][c] + min(dp[r-1][c-1], dp[r-1][c], dp[r-1][c+1]). Update row by row.

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
# Solution template for LC 931 - Minimum Falling Path Sum
# Time: O(N^2), Space: O(N)

```

---

### LeetCode 120: [Triangle](https://leetcode.com/problems/triangle/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N^2)`
- **Target Space Complexity:** `O(1) in-place`
- **Core Intuition:** Bottom-up triangle DP: start from second to last row, triangle[r][c] += min(triangle[r+1][c], triangle[r+1][c+1]).

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
# Solution template for LC 120 - Triangle
# Time: O(N^2), Space: O(1) in-place

```

---

[← Back to Master README](../README.md)
