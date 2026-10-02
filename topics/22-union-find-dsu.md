# Topic 22: Union Find / DSU

> **Pattern Overview:** Disjoint Set Union with Path Compression and Union by Rank for near O(1) dynamic connectivity, cycle detection, and component tracking.

## 🧠 Algorithmic Blueprint / Mental Model

```python
parent = list(range(n))
def find(i):
    if parent[i] != i:
        parent[i] = find(parent[i])
    return parent[i]
def union(i, j):
    root_i, root_j = find(i), find(j)
    if root_i != root_j:
        parent[root_i] = root_j
        return True
    return False
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 547 | [Number of Provinces](https://leetcode.com/problems/number-of-provinces/) | **Medium** | `O(N^2 * alpha(N))` | `O(N)` | DSU with rank and path compression or DFS component count. Total provinces = distinct root parents. |
| [ ] | 684 | [Redundant Connection](https://leetcode.com/problems/redundant-connection/) | **Medium** | `O(N * alpha(N))` | `O(N)` | Process edges sequentially in DSU. The first edge whose vertices already share the same root creates the cycle. |
| [ ] | 1319 | [Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/) | **Medium** | `O(N + E)` | `O(N)` | Need at least n - 1 cables. Use DSU to count connected components C. Answer is C - 1 cables to reconnect. |
| [ ] | 1579 | [Remove Max Number of Edges to Keep Graph Fully Traversable](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/) | **Hard** | `O(E * alpha(N))` | `O(N)` | Process Type 3 (shared) edges first in both Alice and Bob DSUs, then Type 1 and Type 2. Count redundant edges. |
| [ ] | 990 | [Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/) | **Medium** | `O(N * alpha(26))` | `O(1)` | Union variables with '==' equations first. Then check if any '!=' equation has both variables with same root. |
| [ ] | 1202 | [Smallest String With Swaps](https://leetcode.com/problems/smallest-string-with-swaps/) | **Medium** | `O(N log N)` | `O(N)` | Union connected indices. Group characters by connected component root, sort characters, and place back in order. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 547: [Number of Provinces](https://leetcode.com/problems/number-of-provinces/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N^2 * alpha(N))`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** DSU with rank and path compression or DFS component count. Total provinces = distinct root parents.

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
# Solution template for LC 547 - Number of Provinces
# Time: O(N^2 * alpha(N)), Space: O(N)

```

---

### LeetCode 684: [Redundant Connection](https://leetcode.com/problems/redundant-connection/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N * alpha(N))`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Process edges sequentially in DSU. The first edge whose vertices already share the same root creates the cycle.

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
# Solution template for LC 684 - Redundant Connection
# Time: O(N * alpha(N)), Space: O(N)

```

---

### LeetCode 1319: [Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N + E)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Need at least n - 1 cables. Use DSU to count connected components C. Answer is C - 1 cables to reconnect.

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
# Solution template for LC 1319 - Number of Operations to Make Network Connected
# Time: O(N + E), Space: O(N)

```

---

### LeetCode 1579: [Remove Max Number of Edges to Keep Graph Fully Traversable](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(E * alpha(N))`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Process Type 3 (shared) edges first in both Alice and Bob DSUs, then Type 1 and Type 2. Count redundant edges.

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
# Solution template for LC 1579 - Remove Max Number of Edges to Keep Graph Fully Traversable
# Time: O(E * alpha(N)), Space: O(N)

```

---

### LeetCode 990: [Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N * alpha(26))`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Union variables with '==' equations first. Then check if any '!=' equation has both variables with same root.

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
# Solution template for LC 990 - Satisfiability of Equality Equations
# Time: O(N * alpha(26)), Space: O(1)

```

---

### LeetCode 1202: [Smallest String With Swaps](https://leetcode.com/problems/smallest-string-with-swaps/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N log N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Union connected indices. Group characters by connected component root, sort characters, and place back in order.

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
# Solution template for LC 1202 - Smallest String With Swaps
# Time: O(N log N), Space: O(N)

```

---

[← Back to Master README](../README.md)
