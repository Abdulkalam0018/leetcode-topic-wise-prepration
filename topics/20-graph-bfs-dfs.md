# Topic 20: Graph BFS / DFS

> **Pattern Overview:** Traversing connected components, shortest steps in unweighted grids, flood fills, and multi-source queue propagations.

## 🧠 Algorithmic Blueprint / Mental Model

```python
def numIslands(grid):
    count = 0
    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c] == '1':
                count += 1
                dfs(grid, r, c)
    return count
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 200 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | **Medium** | `O(M * N)` | `O(M * N)` | Iterate cells. When '1' found, increment count and DFS/BFS to sink entire connected island to '0'. |
| [ ] | 695 | [Max Area of Island](https://leetcode.com/problems/max-area-of-island/) | **Medium** | `O(M * N)` | `O(M * N)` | DFS/BFS from each unvisited island cell calculating area. Return maximum area found. |
| [ ] | 733 | [Flood Fill](https://leetcode.com/problems/flood-fill/) | **Easy** | `O(M * N)` | `O(M * N)` | Flood fill: starting from (sr, sc), DFS/BFS to replace matching original color with new color. |
| [ ] | 994 | [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) | **Medium** | `O(M * N)` | `O(M * N)` | Multi-source BFS from all rotten oranges simultaneously. Track minutes until queue empty; check fresh count == 0. |
| [ ] | 1091 | [Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/) | **Medium** | `O(N^2)` | `O(N^2)` | BFS in 8 directions from (0,0) to (n-1, n-1) tracking path length. Return -1 if blocked. |
| [ ] | 1254 | [Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/) | **Medium** | `O(M * N)` | `O(M * N)` | Flood fill from boundaries to eliminate open islands, then count remaining unvisited 0-components. |
| [ ] | 126 | [Word Ladder II](https://leetcode.com/problems/word-ladder-ii/) | **Hard** | `O(N * 26 * L)` | `O(N * L)` | Two-phase: 1) BFS from beginWord to build shortest-path DAG of predecessors level-by-level; 2) DFS backtracking from endWord back to beginWord to construct all shortest ladders. |
| [ ] | 317 | [Shortest Distance from All Buildings](https://leetcode.com/problems/shortest-distance-from-all-buildings/) *(Premium - [Free Alt](https://www.lintcode.com/problem/573/))* | **Hard** | `O(B * M * N)` | `O(M * N)` | BFS from each building, accumulating path distances to empty land cells and incrementing reachable building count. Answer is min total distance for land reaching all buildings. |
| [ ] | 329 | [Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) | **Hard** | `O(M * N)` | `O(M * N)` | DFS with memoization: `memo[r][c] = 1 + max(dfs(nr, nc))` for strictly increasing neighbors. Matrix forms a DAG so cycles are impossible. |
| [ ] | 827 | [Making A Large Island](https://leetcode.com/problems/making-a-large-island/) | **Hard** | `O(N^2)` | `O(N^2)` | DFS to color each connected island with a unique ID (starting from 2) and record {island_id: area}. Then check each '0': potential area = 1 + sum of distinct neighbor island areas. |
| [ ] | 1192 | [Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/) | **Hard** | `O(V + E)` | `O(V + E)` | Tarjan's Bridge-Finding Algorithm: track discovery time rank[] and lowest reachable rank low[]. Edge (u, v) is critical if low[v] > rank[u]. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 200: [Number of Islands](https://leetcode.com/problems/number-of-islands/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(M * N)`
- **Target Space Complexity:** `O(M * N)`
- **Core Intuition:** Iterate cells. When '1' found, increment count and DFS/BFS to sink entire connected island to '0'.

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
# Solution template for LC 200 - Number of Islands
# Time: O(M * N), Space: O(M * N)

```

---

### LeetCode 695: [Max Area of Island](https://leetcode.com/problems/max-area-of-island/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(M * N)`
- **Target Space Complexity:** `O(M * N)`
- **Core Intuition:** DFS/BFS from each unvisited island cell calculating area. Return maximum area found.

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
# Solution template for LC 695 - Max Area of Island
# Time: O(M * N), Space: O(M * N)

```

---

### LeetCode 733: [Flood Fill](https://leetcode.com/problems/flood-fill/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(M * N)`
- **Target Space Complexity:** `O(M * N)`
- **Core Intuition:** Flood fill: starting from (sr, sc), DFS/BFS to replace matching original color with new color.

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
# Solution template for LC 733 - Flood Fill
# Time: O(M * N), Space: O(M * N)

```

---

### LeetCode 994: [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(M * N)`
- **Target Space Complexity:** `O(M * N)`
- **Core Intuition:** Multi-source BFS from all rotten oranges simultaneously. Track minutes until queue empty; check fresh count == 0.

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
# Solution template for LC 994 - Rotting Oranges
# Time: O(M * N), Space: O(M * N)

```

---

### LeetCode 1091: [Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N^2)`
- **Target Space Complexity:** `O(N^2)`
- **Core Intuition:** BFS in 8 directions from (0,0) to (n-1, n-1) tracking path length. Return -1 if blocked.

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
# Solution template for LC 1091 - Shortest Path in Binary Matrix
# Time: O(N^2), Space: O(N^2)

```

---

### LeetCode 1254: [Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(M * N)`
- **Target Space Complexity:** `O(M * N)`
- **Core Intuition:** Flood fill from boundaries to eliminate open islands, then count remaining unvisited 0-components.

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
# Solution template for LC 1254 - Number of Closed Islands
# Time: O(M * N), Space: O(M * N)

```

---

### LeetCode 126: [Word Ladder II](https://leetcode.com/problems/word-ladder-ii/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N * 26 * L)`
- **Target Space Complexity:** `O(N * L)`
- **Core Intuition:** Two-phase: 1) BFS from beginWord to build shortest-path DAG of predecessors level-by-level; 2) DFS backtracking from endWord back to beginWord to construct all shortest ladders.

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
# Solution template for LC 126 - Word Ladder II
# Time: O(N * 26 * L), Space: O(N * L)

```

---

### LeetCode 317: [Shortest Distance from All Buildings](https://leetcode.com/problems/shortest-distance-from-all-buildings/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(B * M * N)`
- **Target Space Complexity:** `O(M * N)`
- **LeetCode Premium Note:** Premium problem. [Free LintCode Mirror](https://www.lintcode.com/problem/573/)
- **Core Intuition:** BFS from each building, accumulating path distances to empty land cells and incrementing reachable building count. Answer is min total distance for land reaching all buildings.

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
# Solution template for LC 317 - Shortest Distance from All Buildings
# Time: O(B * M * N), Space: O(M * N)

```

---

### LeetCode 329: [Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(M * N)`
- **Target Space Complexity:** `O(M * N)`
- **Core Intuition:** DFS with memoization: `memo[r][c] = 1 + max(dfs(nr, nc))` for strictly increasing neighbors. Matrix forms a DAG so cycles are impossible.

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
# Solution template for LC 329 - Longest Increasing Path in a Matrix
# Time: O(M * N), Space: O(M * N)

```

---

### LeetCode 827: [Making A Large Island](https://leetcode.com/problems/making-a-large-island/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N^2)`
- **Target Space Complexity:** `O(N^2)`
- **Core Intuition:** DFS to color each connected island with a unique ID (starting from 2) and record {island_id: area}. Then check each '0': potential area = 1 + sum of distinct neighbor island areas.

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
# Solution template for LC 827 - Making A Large Island
# Time: O(N^2), Space: O(N^2)

```

---

### LeetCode 1192: [Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(V + E)`
- **Target Space Complexity:** `O(V + E)`
- **Core Intuition:** Tarjan's Bridge-Finding Algorithm: track discovery time rank[] and lowest reachable rank low[]. Edge (u, v) is critical if low[v] > rank[u].

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
# Solution template for LC 1192 - Critical Connections in a Network
# Time: O(V + E), Space: O(V + E)

```

---

[← Back to Master README](../README.md)
