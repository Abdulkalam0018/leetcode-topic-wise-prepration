# Topic 21: Topological Sort / DAG

> **Pattern Overview:** Linear ordering of vertices in Directed Acyclic Graphs (DAGs) using Kahn's in-degree queue or DFS post-order cycle detection.

## 🧠 Algorithmic Blueprint / Mental Model

```python
indegree = [0] * n
for u, v in edges: indegree[v] += 1
q = deque([i for i in range(n) if indegree[i] == 0])
order = []
while q:
    u = q.popleft()
    order.append(u)
    for v in adj[u]:
        indegree[v] -= 1
        if indegree[v] == 0:
            q.append(v)
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 207 | [Course Schedule](https://leetcode.com/problems/course-schedule/) | **Medium** | `O(V + E)` | `O(V + E)` | Kahn's algorithm (indegree array + queue) or DFS 3-state cycle detection (unvisited, visiting, visited). |
| [ ] | 210 | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | **Medium** | `O(V + E)` | `O(V + E)` | Kahn's BFS: append nodes with 0 indegree to order; if order size == numCourses return order, else empty. |
| [ ] | 802 | [Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/) | **Medium** | `O(V + E)` | `O(V + E)` | Nodes that do not lead to a cycle are safe. Reverse edges and run Kahn's, or 3-state DFS cycle detection. |
| [ ] | 1462 | [Course Schedule IV](https://leetcode.com/problems/course-schedule-iv/) | **Medium** | `O(V^3 + Q)` | `O(V^2)` | Floyd-Warshall transitive closure matrix reachable[u][v] or BFS/DFS per query/prerequisite. |
| [ ] | 1203 | [Sort Items by Groups Respecting Dependencies](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/) | **Hard** | `O(V + E)` | `O(V + E)` | Double topological sort: first sort groups DAG, then sort items within each group DAG. |
| [ ] | 2115 | [Find All Possible Recipes from Given Supplies](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/) | **Medium** | `O(V + E)` | `O(V + E)` | Topological sort: treat recipes and ingredients as nodes. Initialize queue with available supplies. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 207: [Course Schedule](https://leetcode.com/problems/course-schedule/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(V + E)`
- **Target Space Complexity:** `O(V + E)`
- **Core Intuition:** Kahn's algorithm (indegree array + queue) or DFS 3-state cycle detection (unvisited, visiting, visited).

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
# Solution template for LC 207 - Course Schedule
# Time: O(V + E), Space: O(V + E)

```

---

### LeetCode 210: [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(V + E)`
- **Target Space Complexity:** `O(V + E)`
- **Core Intuition:** Kahn's BFS: append nodes with 0 indegree to order; if order size == numCourses return order, else empty.

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
# Solution template for LC 210 - Course Schedule II
# Time: O(V + E), Space: O(V + E)

```

---

### LeetCode 802: [Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(V + E)`
- **Target Space Complexity:** `O(V + E)`
- **Core Intuition:** Nodes that do not lead to a cycle are safe. Reverse edges and run Kahn's, or 3-state DFS cycle detection.

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
# Solution template for LC 802 - Find Eventual Safe States
# Time: O(V + E), Space: O(V + E)

```

---

### LeetCode 1462: [Course Schedule IV](https://leetcode.com/problems/course-schedule-iv/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(V^3 + Q)`
- **Target Space Complexity:** `O(V^2)`
- **Core Intuition:** Floyd-Warshall transitive closure matrix reachable[u][v] or BFS/DFS per query/prerequisite.

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
# Solution template for LC 1462 - Course Schedule IV
# Time: O(V^3 + Q), Space: O(V^2)

```

---

### LeetCode 1203: [Sort Items by Groups Respecting Dependencies](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(V + E)`
- **Target Space Complexity:** `O(V + E)`
- **Core Intuition:** Double topological sort: first sort groups DAG, then sort items within each group DAG.

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
# Solution template for LC 1203 - Sort Items by Groups Respecting Dependencies
# Time: O(V + E), Space: O(V + E)

```

---

### LeetCode 2115: [Find All Possible Recipes from Given Supplies](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(V + E)`
- **Target Space Complexity:** `O(V + E)`
- **Core Intuition:** Topological sort: treat recipes and ingredients as nodes. Initialize queue with available supplies.

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
# Solution template for LC 2115 - Find All Possible Recipes from Given Supplies
# Time: O(V + E), Space: O(V + E)

```

---

[← Back to Master README](../README.md)
