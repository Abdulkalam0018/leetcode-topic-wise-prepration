# Topic 8: Difference Array / Range Updates

> **Pattern Overview:** Applying O(1) range updates [start, end, val] by recording +val at start and -val at end+1, recovering results via prefix sum.

## 🧠 Algorithmic Blueprint / Mental Model

```python
diff = [0] * (n + 1)
for start, end, val in updates:
    diff[start] += val
    diff[end + 1] -= val
# Prefix sum to restore original array
res = [0] * n
curr = 0
for i in range(n):
    curr += diff[i]
    res[i] = curr
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 370 | [Range Addition](https://leetcode.com/problems/range-addition/) *(Premium - [Free Alt](https://www.lintcode.com/problem/903/))* | **Medium** | `O(N + Q)` | `O(N)` | For each update [start, end, val], diff[start] += val and diff[end + 1] -= val. Prefix sum of diff gives final array. |
| [ ] | 1094 | [Car Pooling](https://leetcode.com/problems/car-pooling/) | **Medium** | `O(N + max_stop)` | `O(max_stop)` | Difference array on timeline: diff[from] += passengers, diff[to] -= passengers. Check running capacity <= capacity. |
| [ ] | 1109 | [Corporate Flight Bookings](https://leetcode.com/problems/corporate-flight-bookings/) | **Medium** | `O(N + bookings)` | `O(N)` | Difference array: diff[first - 1] += seats, diff[last] -= seats. Accumulate running sum to produce result. |
| [ ] | 1893 | [Check if All the Integers in a Range Are Covered](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/) | **Easy** | `O(N + Range)` | `O(1)` | Use difference array of size 52 to mark covered ranges, then prefix sum to verify every integer in [left, right] >= 1. |
| [ ] | 1943 | [Describe the Painting](https://leetcode.com/problems/describe-the-painting/) | **Medium** | `O(N log N)` | `O(N)` | Track color weight changes at endpoints using map / difference events. Sweep left to right accumulating non-zero sums. |
| [ ] | 2381 | [Shifting Letters II](https://leetcode.com/problems/shifting-letters-ii/) | **Medium** | `O(N + shifts)` | `O(N)` | Difference array for net shifts. Forward adds +1, backward adds -1. Compute prefix sums modulo 26 to shift characters. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 370: [Range Addition](https://leetcode.com/problems/range-addition/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N + Q)`
- **Target Space Complexity:** `O(N)`
- **LeetCode Premium Note:** Premium problem. [Free LintCode Mirror](https://www.lintcode.com/problem/903/)
- **Core Intuition:** For each update [start, end, val], diff[start] += val and diff[end + 1] -= val. Prefix sum of diff gives final array.

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
# Solution template for LC 370 - Range Addition
# Time: O(N + Q), Space: O(N)

```

---

### LeetCode 1094: [Car Pooling](https://leetcode.com/problems/car-pooling/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N + max_stop)`
- **Target Space Complexity:** `O(max_stop)`
- **Core Intuition:** Difference array on timeline: diff[from] += passengers, diff[to] -= passengers. Check running capacity <= capacity.

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
# Solution template for LC 1094 - Car Pooling
# Time: O(N + max_stop), Space: O(max_stop)

```

---

### LeetCode 1109: [Corporate Flight Bookings](https://leetcode.com/problems/corporate-flight-bookings/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N + bookings)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Difference array: diff[first - 1] += seats, diff[last] -= seats. Accumulate running sum to produce result.

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
# Solution template for LC 1109 - Corporate Flight Bookings
# Time: O(N + bookings), Space: O(N)

```

---

### LeetCode 1893: [Check if All the Integers in a Range Are Covered](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N + Range)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Use difference array of size 52 to mark covered ranges, then prefix sum to verify every integer in [left, right] >= 1.

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
# Solution template for LC 1893 - Check if All the Integers in a Range Are Covered
# Time: O(N + Range), Space: O(1)

```

---

### LeetCode 1943: [Describe the Painting](https://leetcode.com/problems/describe-the-painting/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N log N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Track color weight changes at endpoints using map / difference events. Sweep left to right accumulating non-zero sums.

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
# Solution template for LC 1943 - Describe the Painting
# Time: O(N log N), Space: O(N)

```

---

### LeetCode 2381: [Shifting Letters II](https://leetcode.com/problems/shifting-letters-ii/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N + shifts)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Difference array for net shifts. Forward adds +1, backward adds -1. Compute prefix sums modulo 26 to shift characters.

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
# Solution template for LC 2381 - Shifting Letters II
# Time: O(N + shifts), Space: O(N)

```

---

[← Back to Master README](../README.md)
