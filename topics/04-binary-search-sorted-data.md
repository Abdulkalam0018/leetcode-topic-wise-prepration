# Topic 4: Binary Search on Sorted Data

> **Pattern Overview:** Logarithmic time search on monotonically sorted or rotated arrays by systematically halving the search space.

## 🧠 Algorithmic Blueprint / Mental Model

```python
left, right = 0, len(nums) - 1
while left <= right:
    mid = left + (right - left) // 2
    if nums[mid] == target:
        return mid
    elif nums[mid] < target:
        left = mid + 1
    else:
        right = mid - 1
return -1
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 33 | [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | **Medium** | `O(log N)` | `O(1)` | At least one half is always sorted. Check if target lies within the sorted half to decide which side to search. |
| [ ] | 34 | [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | **Medium** | `O(log N)` | `O(1)` | Run binary search twice: once finding first occurrence (target == nums[mid] search left), once finding last (search right). |
| [ ] | 35 | [Search Insert Position](https://leetcode.com/problems/search-insert-position/) | **Easy** | `O(log N)` | `O(1)` | Standard lower_bound binary search. Return left pointer where target belongs. |
| [ ] | 153 | [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | **Medium** | `O(log N)` | `O(1)` | Compare nums[mid] with nums[right]. If nums[mid] > nums[right], min is in right half; else in left half. |
| [ ] | 162 | [Find Peak Element](https://leetcode.com/problems/find-peak-element/) | **Medium** | `O(log N)` | `O(1)` | Compare nums[mid] with nums[mid + 1]. If ascending, a peak must lie on the right; otherwise on the left. |
| [ ] | 704 | [Binary Search](https://leetcode.com/problems/binary-search/) | **Easy** | `O(log N)` | `O(1)` | Classic binary search template. Maintain left <= right, check nums[mid] against target. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 33: [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(log N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** At least one half is always sorted. Check if target lies within the sorted half to decide which side to search.

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
# Solution template for LC 33 - Search in Rotated Sorted Array
# Time: O(log N), Space: O(1)

```

---

### LeetCode 34: [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(log N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Run binary search twice: once finding first occurrence (target == nums[mid] search left), once finding last (search right).

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
# Solution template for LC 34 - Find First and Last Position of Element in Sorted Array
# Time: O(log N), Space: O(1)

```

---

### LeetCode 35: [Search Insert Position](https://leetcode.com/problems/search-insert-position/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(log N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Standard lower_bound binary search. Return left pointer where target belongs.

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
# Solution template for LC 35 - Search Insert Position
# Time: O(log N), Space: O(1)

```

---

### LeetCode 153: [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(log N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Compare nums[mid] with nums[right]. If nums[mid] > nums[right], min is in right half; else in left half.

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
# Solution template for LC 153 - Find Minimum in Rotated Sorted Array
# Time: O(log N), Space: O(1)

```

---

### LeetCode 162: [Find Peak Element](https://leetcode.com/problems/find-peak-element/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(log N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Compare nums[mid] with nums[mid + 1]. If ascending, a peak must lie on the right; otherwise on the left.

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
# Solution template for LC 162 - Find Peak Element
# Time: O(log N), Space: O(1)

```

---

### LeetCode 704: [Binary Search](https://leetcode.com/problems/binary-search/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(log N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Classic binary search template. Maintain left <= right, check nums[mid] against target.

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
# Solution template for LC 704 - Binary Search
# Time: O(log N), Space: O(1)

```

---

[← Back to Master README](../README.md)
