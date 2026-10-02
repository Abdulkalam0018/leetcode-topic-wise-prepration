# Topic 2: Two Pointers

> **Pattern Overview:** Using two references (converging from opposite ends or moving in tandem) to avoid quadratic brute-force searches on sorted or structured data.

## 🧠 Algorithmic Blueprint / Mental Model

```python
left, right = 0, len(nums) - 1
while left < right:
    curr_sum = nums[left] + nums[right]
    if curr_sum == target:
        return [left, right]
    elif curr_sum < target:
        left += 1
    else:
        right -= 1
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 11 | [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | **Medium** | `O(N)` | `O(1)` | Start with widest pointers at 0 and n-1. Calculate area; move the pointer with the smaller height inward. |
| [ ] | 15 | [3Sum](https://leetcode.com/problems/3sum/) | **Medium** | `O(N^2)` | `O(1) or O(N)` | Sort array. Fix first element nums[i], then use two pointers left=i+1, right=n-1. Skip duplicates to avoid duplicate triplets. |
| [ ] | 16 | [3Sum Closest](https://leetcode.com/problems/3sum-closest/) | **Medium** | `O(N^2)` | `O(1)` | Sort array. Iterate i, use two pointers left/right to find sum closest to target; track minimal absolute diff. |
| [ ] | 18 | [4Sum](https://leetcode.com/problems/4sum/) | **Medium** | `O(N^3)` | `O(1)` | Sort array. Double loop for first two numbers, then two pointers for remaining two. Skip duplicate values at every level. |
| [ ] | 42 | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | **Hard** | `O(N)` | `O(1)` | Two pointers from ends tracking left_max and right_max. Move smaller max inward, trapping max(0, curr_max - height). |
| [ ] | 167 | [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | **Medium** | `O(N)` | `O(1)` | Array is sorted. Left=0, Right=n-1. If sum < target, left++; if sum > target, right--; return 1-based indices. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 11: [Container With Most Water](https://leetcode.com/problems/container-with-most-water/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Start with widest pointers at 0 and n-1. Calculate area; move the pointer with the smaller height inward.

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
# Solution template for LC 11 - Container With Most Water
# Time: O(N), Space: O(1)

```

---

### LeetCode 15: [3Sum](https://leetcode.com/problems/3sum/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N^2)`
- **Target Space Complexity:** `O(1) or O(N)`
- **Core Intuition:** Sort array. Fix first element nums[i], then use two pointers left=i+1, right=n-1. Skip duplicates to avoid duplicate triplets.

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
# Solution template for LC 15 - 3Sum
# Time: O(N^2), Space: O(1) or O(N)

```

---

### LeetCode 16: [3Sum Closest](https://leetcode.com/problems/3sum-closest/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N^2)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Sort array. Iterate i, use two pointers left/right to find sum closest to target; track minimal absolute diff.

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
# Solution template for LC 16 - 3Sum Closest
# Time: O(N^2), Space: O(1)

```

---

### LeetCode 18: [4Sum](https://leetcode.com/problems/4sum/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N^3)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Sort array. Double loop for first two numbers, then two pointers for remaining two. Skip duplicate values at every level.

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
# Solution template for LC 18 - 4Sum
# Time: O(N^3), Space: O(1)

```

---

### LeetCode 42: [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Two pointers from ends tracking left_max and right_max. Move smaller max inward, trapping max(0, curr_max - height).

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
# Solution template for LC 42 - Trapping Rain Water
# Time: O(N), Space: O(1)

```

---

### LeetCode 167: [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Array is sorted. Left=0, Right=n-1. If sum < target, left++; if sum > target, right--; return 1-based indices.

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
# Solution template for LC 167 - Two Sum II - Input Array Is Sorted
# Time: O(N), Space: O(1)

```

---

[← Back to Master README](../README.md)
