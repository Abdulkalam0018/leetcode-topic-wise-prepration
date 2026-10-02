# Topic 1: Sliding Window

> **Pattern Overview:** Technique for maintaining a dynamic or fixed-length contiguous subarray/substring that expands and contracts to satisfy constraints.

## 🧠 Algorithmic Blueprint / Mental Model

```python
left = 0
for right in range(len(nums)):
    # 1. Expand: include nums[right] in window state
    update_window_state(nums[right])
    
    # 2. Contract: shrink from left while window invalid
    while window_is_invalid():
        remove_from_window_state(nums[left])
        left += 1
        
    # 3. Record result for valid window
    result = max(result, right - left + 1)
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 3 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | **Medium** | `O(N)` | `O(min(N, M))` | Use a hash set or last-seen index map with left/right pointers to expand and contract window when duplicate appears. |
| [ ] | 76 | [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) | **Hard** | `O(N + M)` | `O(M)` | Maintain target char counts and formed distinct count in window. Expand right until valid, contract left to minimize window. |
| [ ] | 209 | [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) | **Medium** | `O(N)` | `O(1)` | Expand right adding nums[right] to running sum. While sum >= target, update min length and shrink from left. |
| [ ] | 424 | [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) | **Medium** | `O(N)` | `O(26)` | Track max frequency of any single char in current window. If (window_length - max_freq) > k, shift left pointer. |
| [ ] | 567 | [Permutation in String](https://leetcode.com/problems/permutation-in-string/) | **Medium** | `O(N)` | `O(26)` | Fixed-size window equal to len(s1). Track character frequency difference or match count. |
| [ ] | 904 | [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/) | **Medium** | `O(N)` | `O(1)` | Longest subarray with at most 2 distinct elements. Use hash map of basket counts; shrink left when map size > 2. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 3: [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(min(N, M))`
- **Core Intuition:** Use a hash set or last-seen index map with left/right pointers to expand and contract window when duplicate appears.

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
# Solution template for LC 3 - Longest Substring Without Repeating Characters
# Time: O(N), Space: O(min(N, M))

```

---

### LeetCode 76: [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N + M)`
- **Target Space Complexity:** `O(M)`
- **Core Intuition:** Maintain target char counts and formed distinct count in window. Expand right until valid, contract left to minimize window.

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
# Solution template for LC 76 - Minimum Window Substring
# Time: O(N + M), Space: O(M)

```

---

### LeetCode 209: [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Expand right adding nums[right] to running sum. While sum >= target, update min length and shrink from left.

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
# Solution template for LC 209 - Minimum Size Subarray Sum
# Time: O(N), Space: O(1)

```

---

### LeetCode 424: [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(26)`
- **Core Intuition:** Track max frequency of any single char in current window. If (window_length - max_freq) > k, shift left pointer.

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
# Solution template for LC 424 - Longest Repeating Character Replacement
# Time: O(N), Space: O(26)

```

---

### LeetCode 567: [Permutation in String](https://leetcode.com/problems/permutation-in-string/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(26)`
- **Core Intuition:** Fixed-size window equal to len(s1). Track character frequency difference or match count.

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
# Solution template for LC 567 - Permutation in String
# Time: O(N), Space: O(26)

```

---

### LeetCode 904: [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Longest subarray with at most 2 distinct elements. Use hash map of basket counts; shrink left when map size > 2.

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
# Solution template for LC 904 - Fruit Into Baskets
# Time: O(N), Space: O(1)

```

---

[← Back to Master README](../README.md)
