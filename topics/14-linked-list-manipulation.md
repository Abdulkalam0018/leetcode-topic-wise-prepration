# Topic 14: Linked List Manipulation

> **Pattern Overview:** In-place pointer rewiring, sentinel dummy head patterns, reversal of subsegments, and interleaved cloning.

## 🧠 Algorithmic Blueprint / Mental Model

```python
dummy = ListNode(0)
dummy.next = head
prev, curr = dummy, head
while curr and curr.next:
    # rewire nodes
    nxt = curr.next
    curr.next = nxt.next
    nxt.next = curr
    prev.next = nxt
    prev = curr
    curr = curr.next
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 21 | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | **Easy** | `O(N + M)` | `O(1)` | Dummy head node. Compare l1.val and l2.val, advance pointer of smaller node until one is exhausted, then append remainder. |
| [ ] | 23 | [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | **Hard** | `O(N log K)` | `O(K)` | Min-heap of (node.val, i, node) for k list heads, or divide-and-conquer pairwise merge (like merge sort). |
| [ ] | 24 | [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) | **Medium** | `O(N)` | `O(1)` | Dummy node. For pair (first, second), rewire prev.next = second, first.next = second.next, second.next = first. |
| [ ] | 25 | [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) | **Hard** | `O(N)` | `O(1)` | Check if k nodes exist. If so, reverse k nodes and recursively or iteratively connect with next reversed group. |
| [ ] | 92 | [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) | **Medium** | `O(N)` | `O(1)` | Reach node before left. Reverse sublist of length (right - left + 1) by repeatedly moving next node to sublist head. |
| [ ] | 138 | [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) | **Medium** | `O(N)` | `O(1)` | Interleave cloned nodes: A -> A' -> B -> B'. Assign random pointers A'.random = A.random.next. Detach original and cloned lists. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 21: [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N + M)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Dummy head node. Compare l1.val and l2.val, advance pointer of smaller node until one is exhausted, then append remainder.

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
# Solution template for LC 21 - Merge Two Sorted Lists
# Time: O(N + M), Space: O(1)

```

---

### LeetCode 23: [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N log K)`
- **Target Space Complexity:** `O(K)`
- **Core Intuition:** Min-heap of (node.val, i, node) for k list heads, or divide-and-conquer pairwise merge (like merge sort).

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
# Solution template for LC 23 - Merge k Sorted Lists
# Time: O(N log K), Space: O(K)

```

---

### LeetCode 24: [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Dummy node. For pair (first, second), rewire prev.next = second, first.next = second.next, second.next = first.

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
# Solution template for LC 24 - Swap Nodes in Pairs
# Time: O(N), Space: O(1)

```

---

### LeetCode 25: [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Check if k nodes exist. If so, reverse k nodes and recursively or iteratively connect with next reversed group.

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
# Solution template for LC 25 - Reverse Nodes in k-Group
# Time: O(N), Space: O(1)

```

---

### LeetCode 92: [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Reach node before left. Reverse sublist of length (right - left + 1) by repeatedly moving next node to sublist head.

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
# Solution template for LC 92 - Reverse Linked List II
# Time: O(N), Space: O(1)

```

---

### LeetCode 138: [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Interleave cloned nodes: A -> A' -> B -> B'. Assign random pointers A'.random = A.random.next. Detach original and cloned lists.

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
# Solution template for LC 138 - Copy List with Random Pointer
# Time: O(N), Space: O(1)

```

---

[← Back to Master README](../README.md)
