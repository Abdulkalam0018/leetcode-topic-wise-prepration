# Topic 17: BST Problems

> **Pattern Overview:** Binary Search Tree properties where left < root < right; utilizing sorted in-order traversal and logarithmic lookup.

## 🧠 Algorithmic Blueprint / Mental Model

```python
def validate(node, low=-float('inf'), high=float('inf')):
    if not node: return True
    if not (low < node.val < high): return False
    return validate(node.left, low, node.val) and validate(node.right, node.val, high)
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 98 | [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) | **Medium** | `O(N)` | `O(H)` | DFS passing valid range (min_val, max_val). Check min_val < root.val < max_val. Or verify inorder traversal is strictly increasing. |
| [ ] | 99 | [Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/) | **Medium** | `O(N)` | `O(H)` | Inorder traversal to find two swapped nodes (where prev.val > curr.val), then swap their values back. |
| [ ] | 230 | [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) | **Medium** | `O(H + K)` | `O(H)` | Inorder traversal of BST visits nodes in ascending order. Decrement k at each step; return when k reaches 0. |
| [ ] | 235 | [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | **Medium** | `O(H)` | `O(1)` | If both p and q are smaller than root, go left. If both are greater, go right. Otherwise, root is the LCA. |
| [ ] | 450 | [Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/) | **Medium** | `O(H)` | `O(H)` | Search key in BST. If found: leaf -> delete; 1 child -> replace with child; 2 children -> replace with inorder successor then delete successor. |
| [ ] | 700 | [Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/) | **Easy** | `O(H)` | `O(1)` | If val < root.val go left; if val > root.val go right; if equal return root; if null return null. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 98: [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(H)`
- **Core Intuition:** DFS passing valid range (min_val, max_val). Check min_val < root.val < max_val. Or verify inorder traversal is strictly increasing.

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
# Solution template for LC 98 - Validate Binary Search Tree
# Time: O(N), Space: O(H)

```

---

### LeetCode 99: [Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(H)`
- **Core Intuition:** Inorder traversal to find two swapped nodes (where prev.val > curr.val), then swap their values back.

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
# Solution template for LC 99 - Recover Binary Search Tree
# Time: O(N), Space: O(H)

```

---

### LeetCode 230: [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(H + K)`
- **Target Space Complexity:** `O(H)`
- **Core Intuition:** Inorder traversal of BST visits nodes in ascending order. Decrement k at each step; return when k reaches 0.

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
# Solution template for LC 230 - Kth Smallest Element in a BST
# Time: O(H + K), Space: O(H)

```

---

### LeetCode 235: [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(H)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** If both p and q are smaller than root, go left. If both are greater, go right. Otherwise, root is the LCA.

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
# Solution template for LC 235 - Lowest Common Ancestor of a Binary Search Tree
# Time: O(H), Space: O(1)

```

---

### LeetCode 450: [Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(H)`
- **Target Space Complexity:** `O(H)`
- **Core Intuition:** Search key in BST. If found: leaf -> delete; 1 child -> replace with child; 2 children -> replace with inorder successor then delete successor.

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
# Solution template for LC 450 - Delete Node in a BST
# Time: O(H), Space: O(H)

```

---

### LeetCode 700: [Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(H)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** If val < root.val go left; if val > root.val go right; if equal return root; if null return null.

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
# Solution template for LC 700 - Search in a Binary Search Tree
# Time: O(H), Space: O(1)

```

---

[← Back to Master README](../README.md)
