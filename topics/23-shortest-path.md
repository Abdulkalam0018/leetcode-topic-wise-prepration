# Topic 23: Shortest Path

> **Pattern Overview:** Single-source and all-pairs shortest paths using Dijkstra's algorithm (min-heap), Bellman-Ford, and Floyd-Warshall.

## 🧠 Algorithmic Blueprint / Mental Model

```python
import heapq
dist = {src: 0}
pq = [(0, src)]
while pq:
    d, u = heapq.heappop(pq)
    if d > dist.get(u, float('inf')): continue
    for v, weight in adj[u]:
        if d + weight < dist.get(v, float('inf')):
            dist[v] = d + weight
            heapq.heappush(pq, (d + weight, v))
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 743 | [Network Delay Time](https://leetcode.com/problems/network-delay-time/) | **Medium** | `O(E log V)` | `O(V + E)` | Dijkstra's algorithm with min-heap from source k. Answer is max distance to all reachable nodes. |
| [ ] | 787 | [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) | **Medium** | `O(K * E)` | `O(V)` | Bellman-Ford / BFS with at most k + 1 edge relaxations, or modified Dijkstra tracking steps taken. |
| [ ] | 1514 | [Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/) | **Medium** | `O(E log V)` | `O(V + E)` | Modified Dijkstra: max-heap tracking maximum path probability. Probability multiplies along path. |
| [ ] | 1631 | [Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/) | **Medium** | `O(R * C log(R * C))` | `O(R * C)` | Dijkstra on 2D grid where edge weight is abs(height[r2][c2] - height[r1][c1]), minimizing max effort. |
| [ ] | 1334 | [Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/) | **Medium** | `O(N^3)` | `O(N^2)` | Floyd-Warshall all-pairs shortest paths. For each city, count reachable neighbors within distance threshold. |
| [ ] | 1976 | [Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/) | **Medium** | `O(E log V)` | `O(V + E)` | Dijkstra keeping dist[] and ways[] modulo 10^9+7. If shorter path found, update ways; if equal, add ways. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 743: [Network Delay Time](https://leetcode.com/problems/network-delay-time/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(E log V)`
- **Target Space Complexity:** `O(V + E)`
- **Core Intuition:** Dijkstra's algorithm with min-heap from source k. Answer is max distance to all reachable nodes.

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
# Solution template for LC 743 - Network Delay Time
# Time: O(E log V), Space: O(V + E)

```

---

### LeetCode 787: [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(K * E)`
- **Target Space Complexity:** `O(V)`
- **Core Intuition:** Bellman-Ford / BFS with at most k + 1 edge relaxations, or modified Dijkstra tracking steps taken.

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
# Solution template for LC 787 - Cheapest Flights Within K Stops
# Time: O(K * E), Space: O(V)

```

---

### LeetCode 1514: [Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(E log V)`
- **Target Space Complexity:** `O(V + E)`
- **Core Intuition:** Modified Dijkstra: max-heap tracking maximum path probability. Probability multiplies along path.

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
# Solution template for LC 1514 - Path with Maximum Probability
# Time: O(E log V), Space: O(V + E)

```

---

### LeetCode 1631: [Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(R * C log(R * C))`
- **Target Space Complexity:** `O(R * C)`
- **Core Intuition:** Dijkstra on 2D grid where edge weight is abs(height[r2][c2] - height[r1][c1]), minimizing max effort.

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
# Solution template for LC 1631 - Path With Minimum Effort
# Time: O(R * C log(R * C)), Space: O(R * C)

```

---

### LeetCode 1334: [Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N^3)`
- **Target Space Complexity:** `O(N^2)`
- **Core Intuition:** Floyd-Warshall all-pairs shortest paths. For each city, count reachable neighbors within distance threshold.

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
# Solution template for LC 1334 - Find the City With the Smallest Number of Neighbors at a Threshold Distance
# Time: O(N^3), Space: O(N^2)

```

---

### LeetCode 1976: [Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(E log V)`
- **Target Space Complexity:** `O(V + E)`
- **Core Intuition:** Dijkstra keeping dist[] and ways[] modulo 10^9+7. If shorter path found, update ways; if equal, add ways.

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
# Solution template for LC 1976 - Number of Ways to Arrive at Destination
# Time: O(E log V), Space: O(V + E)

```

---

[← Back to Master README](../README.md)
