# Topic 16: Tree BFS / Level Order

> **Pattern Overview:** Queue-driven breadth-first traversal visiting trees level by level to compute tree views, widths, and level aggregations.

## 🧠 Algorithmic Blueprint / Mental Model

```python
from collections import deque
q = deque([root])
while q:
    level_size = len(q)
    level = []
    for _ in range(level_size):
        node = q.popleft()
        level.append(node.val)
        if node.left: q.append(node.left)
        if node.right: q.append(node.right)
    res.append(level)
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 102 | [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) | **Medium** | `O(N)` | `O(W)` | Queue for BFS. Process level by level using queue length at start of each iteration. |
| [ ] | 103 | [Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) | **Medium** | `O(N)` | `O(W)` | Standard BFS level order. Reverse current level's list or use deque when depth is odd. |
| [ ] | 199 | [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) | **Medium** | `O(N)` | `O(W)` | Level order BFS: take the last element of each level, or reverse pre-order DFS (visit right child first) recording first at each depth. |
| [ ] | 515 | [Find Largest Value in Each Tree Row](https://leetcode.com/problems/find-largest-value-in-each-tree-row/) | **Medium** | `O(N)` | `O(W)` | BFS level order tracking max value encountered across each level queue snapshot. |
| [ ] | 637 | [Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/) | **Easy** | `O(N)` | `O(W)` | BFS level order summing values at each level and dividing by level size. |
| [ ] | 116 | [Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/) | **Medium** | `O(N)` | `O(1)` | Connect next pointers level by level. Use node.next established in parent level to link across subtrees without queue. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 102: [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(W)`
- **Core Intuition:** Queue for BFS. Process level by level using queue length at start of each iteration.

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
# Solution template for LC 102 - Binary Tree Level Order Traversal
# Time: O(N), Space: O(W)

```

---

### LeetCode 103: [Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(W)`
- **Core Intuition:** Standard BFS level order. Reverse current level's list or use deque when depth is odd.

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
# Solution template for LC 103 - Binary Tree Zigzag Level Order Traversal
# Time: O(N), Space: O(W)

```

---

### LeetCode 199: [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(W)`
- **Core Intuition:** Level order BFS: take the last element of each level, or reverse pre-order DFS (visit right child first) recording first at each depth.

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
# Solution template for LC 199 - Binary Tree Right Side View
# Time: O(N), Space: O(W)

```

---

### LeetCode 515: [Find Largest Value in Each Tree Row](https://leetcode.com/problems/find-largest-value-in-each-tree-row/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(W)`
- **Core Intuition:** BFS level order tracking max value encountered across each level queue snapshot.

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
# Solution template for LC 515 - Find Largest Value in Each Tree Row
# Time: O(N), Space: O(W)

```

---

### LeetCode 637: [Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(W)`
- **Core Intuition:** BFS level order summing values at each level and dividing by level size.

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
# Solution template for LC 637 - Average of Levels in Binary Tree
# Time: O(N), Space: O(W)

```

---

### LeetCode 116: [Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Connect next pointers level by level. Use node.next established in parent level to link across subtrees without queue.

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
# Solution template for LC 116 - Populating Next Right Pointers in Each Node
# Time: O(N), Space: O(1)

```

---

[← Back to Master README](../README.md)
