# Topic 24: MST / Graph Greedy

> **Pattern Overview:** Minimum Spanning Tree algorithms (Kruskal's using DSU, Prim's using min-heap) and minimax / maximin bottleneck path searches.

## 🧠 Algorithmic Blueprint / Mental Model

```python
# Kruskal's Algorithm
edges.sort(key=lambda x: x[2]) # sort by weight
mst_cost, edges_count = 0, 0
for u, v, weight in edges:
    if union(u, v):
        mst_cost += weight
        edges_count += 1
        if edges_count == n - 1: break
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 1584 | [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) | **Medium** | `O(V^2)` | `O(V)` | Prim's or Kruskal's algorithm on complete Manhattan distance graph. Prim's with min-heap takes O(V^2). |
| [ ] | 1135 | [Connecting Cities With Minimum Cost](https://leetcode.com/problems/connecting-cities-with-minimum-cost/) *(Premium - [Free Alt](https://www.lintcode.com/problem/1459/))* | **Medium** | `O(E log E)` | `O(V)` | Kruskal's algorithm: sort edges by cost, union vertices. If tree connects all n nodes, return total cost. |
| [ ] | 1168 | [Optimize Water Distribution in a Village](https://leetcode.com/problems/optimize-water-distribution-in-a-village/) *(Premium - [Free Alt](https://www.lintcode.com/problem/1876/))* | **Hard** | `O((V + E) log V)` | `O(V + E)` | Virtual node 0 for building a well. Connect node 0 to house i with well cost. Run Kruskal's/Prim's MST on n+1 nodes. |
| [ ] | 1489 | [Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/) | **Hard** | `O(E^2 * alpha(V))` | `O(V + E)` | Find standard MST weight. Critical edge: MST weight increases if removed. Pseudo-critical: belongs to some MST. |
| [ ] | 778 | [Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/) | **Hard** | `O(N^2 log N)` | `O(N^2)` | Dijkstra or binary search + BFS: find path from (0,0) to (n-1, n-1) minimizing maximum elevation encountered. |
| [ ] | 1102 | [Path With Maximum Minimum Value](https://leetcode.com/problems/path-with-maximum-minimum-value/) *(Premium - [Free Alt](https://www.lintcode.com/problem/1391/))* | **Medium** | `O(R * C log(R * C))` | `O(R * C)` | Max-heap Dijkstra or DSU sorted cells descending: find path with maximum bottleneck value from start to finish. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 1584: [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(V^2)`
- **Target Space Complexity:** `O(V)`
- **Core Intuition:** Prim's or Kruskal's algorithm on complete Manhattan distance graph. Prim's with min-heap takes O(V^2).

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
# Solution template for LC 1584 - Min Cost to Connect All Points
# Time: O(V^2), Space: O(V)

```

---

### LeetCode 1135: [Connecting Cities With Minimum Cost](https://leetcode.com/problems/connecting-cities-with-minimum-cost/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(E log E)`
- **Target Space Complexity:** `O(V)`
- **LeetCode Premium Note:** Premium problem. [Free LintCode Mirror](https://www.lintcode.com/problem/1459/)
- **Core Intuition:** Kruskal's algorithm: sort edges by cost, union vertices. If tree connects all n nodes, return total cost.

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
# Solution template for LC 1135 - Connecting Cities With Minimum Cost
# Time: O(E log E), Space: O(V)

```

---

### LeetCode 1168: [Optimize Water Distribution in a Village](https://leetcode.com/problems/optimize-water-distribution-in-a-village/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O((V + E) log V)`
- **Target Space Complexity:** `O(V + E)`
- **LeetCode Premium Note:** Premium problem. [Free LintCode Mirror](https://www.lintcode.com/problem/1876/)
- **Core Intuition:** Virtual node 0 for building a well. Connect node 0 to house i with well cost. Run Kruskal's/Prim's MST on n+1 nodes.

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
# Solution template for LC 1168 - Optimize Water Distribution in a Village
# Time: O((V + E) log V), Space: O(V + E)

```

---

### LeetCode 1489: [Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(E^2 * alpha(V))`
- **Target Space Complexity:** `O(V + E)`
- **Core Intuition:** Find standard MST weight. Critical edge: MST weight increases if removed. Pseudo-critical: belongs to some MST.

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
# Solution template for LC 1489 - Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree
# Time: O(E^2 * alpha(V)), Space: O(V + E)

```

---

### LeetCode 778: [Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N^2 log N)`
- **Target Space Complexity:** `O(N^2)`
- **Core Intuition:** Dijkstra or binary search + BFS: find path from (0,0) to (n-1, n-1) minimizing maximum elevation encountered.

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
# Solution template for LC 778 - Swim in Rising Water
# Time: O(N^2 log N), Space: O(N^2)

```

---

### LeetCode 1102: [Path With Maximum Minimum Value](https://leetcode.com/problems/path-with-maximum-minimum-value/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(R * C log(R * C))`
- **Target Space Complexity:** `O(R * C)`
- **LeetCode Premium Note:** Premium problem. [Free LintCode Mirror](https://www.lintcode.com/problem/1391/)
- **Core Intuition:** Max-heap Dijkstra or DSU sorted cells descending: find path with maximum bottleneck value from start to finish.

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
# Solution template for LC 1102 - Path With Maximum Minimum Value
# Time: O(R * C log(R * C)), Space: O(R * C)

```

---

[← Back to Master README](../README.md)
