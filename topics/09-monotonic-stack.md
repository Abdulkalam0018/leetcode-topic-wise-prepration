# Topic 9: Monotonic Stack

> **Pattern Overview:** Stack preserving elements in strictly increasing or decreasing order to locate Next Greater/Smaller Elements in O(N) total time.

## 🧠 Algorithmic Blueprint / Mental Model

```python
stack = [] # stores indices
res = [-1] * len(nums)
for i, num in enumerate(nums):
    while stack and nums[stack[-1]] < num:
        idx = stack.pop()
        res[idx] = num
    stack.append(i)
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 739 | [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | **Medium** | `O(N)` | `O(N)` | Decreasing monotonic stack storing indices. Pop while current temperature > stack top; distance = i - stack.pop(). |
| [ ] | 496 | [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/) | **Easy** | `O(N + M)` | `O(N)` | Monotonic decreasing stack on nums2 to map each element to its next greater element in a hash map. |
| [ ] | 503 | [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/) | **Medium** | `O(N)` | `O(N)` | Iterate through array twice (2*n with i % n). Monotonic decreasing stack of indices. |
| [ ] | 84 | [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) | **Hard** | `O(N)` | `O(N)` | Monotonic increasing stack of indices. When popping height h, width = (current_idx - 1) - stack_top. Sentinel 0 at ends. |
| [ ] | 85 | [Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/) | **Hard** | `O(R * C)` | `O(C)` | Convert 2D matrix into cumulative histogram heights row by row. Run largest rectangle in histogram (LC 84) on each row. |
| [ ] | 901 | [Online Stock Span](https://leetcode.com/problems/online-stock-span/) | **Medium** | `O(1) amortized` | `O(N)` | Monotonic decreasing stack of pairs (price, span). While price >= stack top, accumulate spans. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 739: [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Decreasing monotonic stack storing indices. Pop while current temperature > stack top; distance = i - stack.pop().

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
# Solution template for LC 739 - Daily Temperatures
# Time: O(N), Space: O(N)

```

---

### LeetCode 496: [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N + M)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Monotonic decreasing stack on nums2 to map each element to its next greater element in a hash map.

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
# Solution template for LC 496 - Next Greater Element I
# Time: O(N + M), Space: O(N)

```

---

### LeetCode 503: [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Iterate through array twice (2*n with i % n). Monotonic decreasing stack of indices.

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
# Solution template for LC 503 - Next Greater Element II
# Time: O(N), Space: O(N)

```

---

### LeetCode 84: [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Monotonic increasing stack of indices. When popping height h, width = (current_idx - 1) - stack_top. Sentinel 0 at ends.

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
# Solution template for LC 84 - Largest Rectangle in Histogram
# Time: O(N), Space: O(N)

```

---

### LeetCode 85: [Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(R * C)`
- **Target Space Complexity:** `O(C)`
- **Core Intuition:** Convert 2D matrix into cumulative histogram heights row by row. Run largest rectangle in histogram (LC 84) on each row.

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
# Solution template for LC 85 - Maximal Rectangle
# Time: O(R * C), Space: O(C)

```

---

### LeetCode 901: [Online Stock Span](https://leetcode.com/problems/online-stock-span/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(1) amortized`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Monotonic decreasing stack of pairs (price, span). While price >= stack top, accumulate spans.

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
# Solution template for LC 901 - Online Stock Span
# Time: O(1) amortized, Space: O(N)

```

---

[← Back to Master README](../README.md)
