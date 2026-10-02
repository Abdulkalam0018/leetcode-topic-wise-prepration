# Topic 15: Tree DFS

> **Pattern Overview:** Recursive pre-order, in-order, and post-order depth-first traversals calculating path sums, heights, and subtree properties.

## 🧠 Algorithmic Blueprint / Mental Model

```python
def dfs(node):
    if not node:
        return 0
    left = dfs(node.left)
    right = dfs(node.right)
    # Compute global metric
    nonlocal max_val
    max_val = max(max_val, left + right)
    return 1 + max(left, right)
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 104 | [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | **Easy** | `O(N)` | `O(H)` | Recursive DFS: max_depth(root) = 1 + max(max_depth(root.left), max_depth(root.right)). Base case root is null returns 0. |
| [ ] | 112 | [Path Sum](https://leetcode.com/problems/path-sum/) | **Easy** | `O(N)` | `O(H)` | Subtract root.val from targetSum. If leaf node, return targetSum == 0; otherwise recurse on left and right children. |
| [ ] | 113 | [Path Sum II](https://leetcode.com/problems/path-sum-ii/) | **Medium** | `O(N)` | `O(H)` | DFS with backtracking path list. Add root.val to path, recurse. If leaf and sum matches, record copy of path. Pop on return. |
| [ ] | 543 | [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) | **Easy** | `O(N)` | `O(H)` | Post-order DFS returning height. Update global max diameter = max(diameter, left_height + right_height) at each node. |
| [ ] | 124 | [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | **Hard** | `O(N)` | `O(H)` | Post-order DFS returning max single-branch gain max(0, branch). Global max path sum = max(res, root.val + left_gain + right_gain). |
| [ ] | 226 | [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) | **Easy** | `O(N)` | `O(H)` | Swap root.left and root.right recursively for left and right subtrees. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 104: [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(H)`
- **Core Intuition:** Recursive DFS: max_depth(root) = 1 + max(max_depth(root.left), max_depth(root.right)). Base case root is null returns 0.

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
# Solution template for LC 104 - Maximum Depth of Binary Tree
# Time: O(N), Space: O(H)

```

---

### LeetCode 112: [Path Sum](https://leetcode.com/problems/path-sum/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(H)`
- **Core Intuition:** Subtract root.val from targetSum. If leaf node, return targetSum == 0; otherwise recurse on left and right children.

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
# Solution template for LC 112 - Path Sum
# Time: O(N), Space: O(H)

```

---

### LeetCode 113: [Path Sum II](https://leetcode.com/problems/path-sum-ii/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(H)`
- **Core Intuition:** DFS with backtracking path list. Add root.val to path, recurse. If leaf and sum matches, record copy of path. Pop on return.

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
# Solution template for LC 113 - Path Sum II
# Time: O(N), Space: O(H)

```

---

### LeetCode 543: [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(H)`
- **Core Intuition:** Post-order DFS returning height. Update global max diameter = max(diameter, left_height + right_height) at each node.

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
# Solution template for LC 543 - Diameter of Binary Tree
# Time: O(N), Space: O(H)

```

---

### LeetCode 124: [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(H)`
- **Core Intuition:** Post-order DFS returning max single-branch gain max(0, branch). Global max path sum = max(res, root.val + left_gain + right_gain).

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
# Solution template for LC 124 - Binary Tree Maximum Path Sum
# Time: O(N), Space: O(H)

```

---

### LeetCode 226: [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(H)`
- **Core Intuition:** Swap root.left and root.right recursively for left and right subtrees.

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
# Solution template for LC 226 - Invert Binary Tree
# Time: O(N), Space: O(H)

```

---

[← Back to Master README](../README.md)
