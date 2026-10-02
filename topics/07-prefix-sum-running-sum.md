# Topic 7: Prefix Sum / Running Sum

> **Pattern Overview:** Precomputing cumulative sums to answer range sum queries in O(1) or pairing with hash maps to find subarrays matching sum conditions.

## 🧠 Algorithmic Blueprint / Mental Model

```python
prefix_counts = {0: 1}
curr_sum = 0
ans = 0
for x in nums:
    curr_sum += x
    if curr_sum - k in prefix_counts:
        ans += prefix_counts[curr_sum - k]
    prefix_counts[curr_sum] = prefix_counts.get(curr_sum, 0) + 1
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 303 | [Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/) | **Easy** | `O(1) query` | `O(N)` | Precompute prefix sum array where prefix[i] = sum(nums[0..i-1]). Range sum [left, right] = prefix[right+1] - prefix[left]. |
| [ ] | 560 | [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) | **Medium** | `O(N)` | `O(N)` | Track running prefix sum and store count of prefix sums in hash map. Check map[current_sum - k]. |
| [ ] | 724 | [Find Pivot Index](https://leetcode.com/problems/find-pivot-index/) | **Easy** | `O(N)` | `O(1)` | Compute total sum. Iterate keeping left_sum; right_sum = total - left_sum - nums[i]. Check left_sum == right_sum. |
| [ ] | 930 | [Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/) | **Medium** | `O(N)` | `O(N)` | Count subarrays with exact sum goal: atMost(goal) - atMost(goal - 1) via sliding window, or prefix sum count map. |
| [ ] | 974 | [Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/) | **Medium** | `O(N)` | `O(K)` | Subarray divisible by k: track prefix_sum % k. Normalize negative modulo ((rem % k) + k) % k. Count pairs with same remainder. |
| [ ] | 523 | [Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/) | **Medium** | `O(N)` | `O(min(N, K))` | Store earliest index for each prefix_sum % k in hash map initialized with {0: -1}. If remainder seen at index < i - 1, return true. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 303: [Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(1) query`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Precompute prefix sum array where prefix[i] = sum(nums[0..i-1]). Range sum [left, right] = prefix[right+1] - prefix[left].

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
# Solution template for LC 303 - Range Sum Query - Immutable
# Time: O(1) query, Space: O(N)

```

---

### LeetCode 560: [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Track running prefix sum and store count of prefix sums in hash map. Check map[current_sum - k].

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
# Solution template for LC 560 - Subarray Sum Equals K
# Time: O(N), Space: O(N)

```

---

### LeetCode 724: [Find Pivot Index](https://leetcode.com/problems/find-pivot-index/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Compute total sum. Iterate keeping left_sum; right_sum = total - left_sum - nums[i]. Check left_sum == right_sum.

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
# Solution template for LC 724 - Find Pivot Index
# Time: O(N), Space: O(1)

```

---

### LeetCode 930: [Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Count subarrays with exact sum goal: atMost(goal) - atMost(goal - 1) via sliding window, or prefix sum count map.

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
# Solution template for LC 930 - Binary Subarrays With Sum
# Time: O(N), Space: O(N)

```

---

### LeetCode 974: [Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(K)`
- **Core Intuition:** Subarray divisible by k: track prefix_sum % k. Normalize negative modulo ((rem % k) + k) % k. Count pairs with same remainder.

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
# Solution template for LC 974 - Subarray Sums Divisible by K
# Time: O(N), Space: O(K)

```

---

### LeetCode 523: [Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(min(N, K))`
- **Core Intuition:** Store earliest index for each prefix_sum % k in hash map initialized with {0: -1}. If remainder seen at index < i - 1, return true.

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
# Solution template for LC 523 - Continuous Subarray Sum
# Time: O(N), Space: O(min(N, K))

```

---

[← Back to Master README](../README.md)
