# Topic 3: Fast/Slow Pointers (Linked List)

> **Pattern Overview:** Floyd's Cycle-Finding Algorithm (Tortoise and Hare) and pointer gap techniques for cycle detection, midpoint discovery, and nth-from-end lookups.

## 🧠 Algorithmic Blueprint / Mental Model

```python
slow = fast = head
while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
    if slow == fast:
        # Cycle detected
        break
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 141 | [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) | **Easy** | `O(N)` | `O(1)` | Floyd's cycle detection. Slow moves 1 step, fast moves 2 steps. If they meet, cycle exists. |
| [ ] | 142 | [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) | **Medium** | `O(N)` | `O(1)` | Detect collision with slow/fast. Reset one pointer to head; move both 1 step at a time until they meet at cycle entry. |
| [ ] | 19 | [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | **Medium** | `O(N)` | `O(1)` | Move fast pointer n steps ahead. Then advance slow and fast together until fast reaches end. Slow is right before target. |
| [ ] | 876 | [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) | **Easy** | `O(N)` | `O(1)` | Slow moves 1 step, fast moves 2 steps. When fast reaches end, slow is at the middle node. |
| [ ] | 160 | [Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/) | **Easy** | `O(N + M)` | `O(1)` | Traverse list A then B, and list B then A. Pointers will align and meet at intersection node (or null) after at most 2 passes. |
| [ ] | 234 | [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) | **Easy** | `O(N)` | `O(1)` | Find middle with slow/fast, reverse the second half in-place, then compare values node by node from both ends. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 141: [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Floyd's cycle detection. Slow moves 1 step, fast moves 2 steps. If they meet, cycle exists.

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
# Solution template for LC 141 - Linked List Cycle
# Time: O(N), Space: O(1)

```

---

### LeetCode 142: [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Detect collision with slow/fast. Reset one pointer to head; move both 1 step at a time until they meet at cycle entry.

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
# Solution template for LC 142 - Linked List Cycle II
# Time: O(N), Space: O(1)

```

---

### LeetCode 19: [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Move fast pointer n steps ahead. Then advance slow and fast together until fast reaches end. Slow is right before target.

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
# Solution template for LC 19 - Remove Nth Node From End of List
# Time: O(N), Space: O(1)

```

---

### LeetCode 876: [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Slow moves 1 step, fast moves 2 steps. When fast reaches end, slow is at the middle node.

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
# Solution template for LC 876 - Middle of the Linked List
# Time: O(N), Space: O(1)

```

---

### LeetCode 160: [Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N + M)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Traverse list A then B, and list B then A. Pointers will align and meet at intersection node (or null) after at most 2 passes.

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
# Solution template for LC 160 - Intersection of Two Linked Lists
# Time: O(N + M), Space: O(1)

```

---

### LeetCode 234: [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Find middle with slow/fast, reverse the second half in-place, then compare values node by node from both ends.

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
# Solution template for LC 234 - Palindrome Linked List
# Time: O(N), Space: O(1)

```

---

[← Back to Master README](../README.md)
