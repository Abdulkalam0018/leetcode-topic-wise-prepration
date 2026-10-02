# Topic 10: Monotonic Queue / Deque

> **Pattern Overview:** Double-ended queue maintaining monotonic ordering across a sliding window, providing O(1) sliding window min/max lookups.

## 🧠 Algorithmic Blueprint / Mental Model

```python
from collections import deque
q = deque() # stores indices
for i, num in enumerate(nums):
    # Remove elements outside current window [i - k + 1, i]
    while q and q[0] <= i - k:
        q.popleft()
    # Maintain decreasing order
    while q and nums[q[-1]] <= num:
        q.pop()
    q.append(i)
    if i >= k - 1:
        res.append(nums[q[0]])
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 239 | [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) | **Hard** | `O(N)` | `O(K)` | Deque storing indices in decreasing order of values. Pop indices outside window [i-k+1, i]; front is always max. |
| [ ] | 862 | [Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) | **Hard** | `O(N)` | `O(N)` | Prefix sums with monotonic increasing deque of indices. Pop from front while P[i] - P[deque.front] >= k. |
| [ ] | 1425 | [Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/) | **Hard** | `O(N)` | `O(N)` | DP with max sliding window deque: dp[i] = nums[i] + max(0, dp[deque.front()]). Maintain deque decreasing. |
| [ ] | 1438 | [Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/) | **Medium** | `O(N)` | `O(N)` | Two deques for sliding window min and max. Expand right; while max_dq.front - min_dq.front > limit, advance left. |
| [ ] | 1499 | [Max Value of Equation](https://leetcode.com/problems/max-value-of-equation/) | **Hard** | `O(N)` | `O(N)` | Maximize (yi + yj + |xi - xj|) = (yj + xj) + (yi - xi) with xj - xi <= k. Maintain deque decreasing in (yi - xi). |
| [ ] | 1696 | [Jump Game VI](https://leetcode.com/problems/jump-game-vi/) | **Medium** | `O(N)` | `O(K)` | DP dp[i] = nums[i] + max(dp[i-k..i-1]). Deque stores indices of best dp values in sliding window of size k. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 239: [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(K)`
- **Core Intuition:** Deque storing indices in decreasing order of values. Pop indices outside window [i-k+1, i]; front is always max.

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
# Solution template for LC 239 - Sliding Window Maximum
# Time: O(N), Space: O(K)

```

---

### LeetCode 862: [Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Prefix sums with monotonic increasing deque of indices. Pop from front while P[i] - P[deque.front] >= k.

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
# Solution template for LC 862 - Shortest Subarray with Sum at Least K
# Time: O(N), Space: O(N)

```

---

### LeetCode 1425: [Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** DP with max sliding window deque: dp[i] = nums[i] + max(0, dp[deque.front()]). Maintain deque decreasing.

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
# Solution template for LC 1425 - Constrained Subsequence Sum
# Time: O(N), Space: O(N)

```

---

### LeetCode 1438: [Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Two deques for sliding window min and max. Expand right; while max_dq.front - min_dq.front > limit, advance left.

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
# Solution template for LC 1438 - Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
# Time: O(N), Space: O(N)

```

---

### LeetCode 1499: [Max Value of Equation](https://leetcode.com/problems/max-value-of-equation/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Maximize (yi + yj + |xi - xj|) = (yj + xj) + (yi - xi) with xj - xi <= k. Maintain deque decreasing in (yi - xi).

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
# Solution template for LC 1499 - Max Value of Equation
# Time: O(N), Space: O(N)

```

---

### LeetCode 1696: [Jump Game VI](https://leetcode.com/problems/jump-game-vi/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(K)`
- **Core Intuition:** DP dp[i] = nums[i] + max(dp[i-k..i-1]). Deque stores indices of best dp values in sliding window of size k.

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
# Solution template for LC 1696 - Jump Game VI
# Time: O(N), Space: O(K)

```

---

[← Back to Master README](../README.md)
