# Topic 27: 1D DP Basics

> **Pattern Overview:** Fundamental linear dynamic programming, transition state relations, optimal substructure, and space optimization down to variables.

## 🧠 Algorithmic Blueprint / Mental Model

```python
dp = [float('inf')] * (amount + 1)
dp[0] = 0
for a in range(1, amount + 1):
    for coin in coins:
        if a - coin >= 0:
            dp[a] = min(dp[a], 1 + dp[a - coin])
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 70 | [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) | **Easy** | `O(N)` | `O(1)` | Fibonacci recurrence: dp[i] = dp[i - 1] + dp[i - 2]. Optimize space to two variables. |
| [ ] | 198 | [House Robber](https://leetcode.com/problems/house-robber/) | **Medium** | `O(N)` | `O(1)` | Rob or skip: dp[i] = max(dp[i - 1], dp[i - 2] + nums[i]). Maintain two previous values. |
| [ ] | 213 | [House Robber II](https://leetcode.com/problems/house-robber-ii/) | **Medium** | `O(N)` | `O(1)` | House Robber on circular array: max(rob(nums[1:]), rob(nums[:-1])). Two linear passes. |
| [ ] | 322 | [Coin Change](https://leetcode.com/problems/coin-change/) | **Medium** | `O(amount * coins)` | `O(amount)` | Unbounded knapsack: dp[a] = min(dp[a], 1 + dp[a - coin]) initialized to infinity with dp[0] = 0. |
| [ ] | 279 | [Perfect Squares](https://leetcode.com/problems/perfect-squares/) | **Medium** | `O(N * sqrt(N))` | `O(N)` | dp[i] = 1 + min(dp[i - j*j]) for j*j <= i, or Lagrange's four-square theorem in O(sqrt(N)). |
| [ ] | 300 | [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) | **Medium** | `O(N log N)` | `O(N)` | Patience sorting / binary search: maintain tails array of smallest tail of all increasing subsequences. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 70: [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Fibonacci recurrence: dp[i] = dp[i - 1] + dp[i - 2]. Optimize space to two variables.

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
# Solution template for LC 70 - Climbing Stairs
# Time: O(N), Space: O(1)

```

---

### LeetCode 198: [House Robber](https://leetcode.com/problems/house-robber/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Rob or skip: dp[i] = max(dp[i - 1], dp[i - 2] + nums[i]). Maintain two previous values.

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
# Solution template for LC 198 - House Robber
# Time: O(N), Space: O(1)

```

---

### LeetCode 213: [House Robber II](https://leetcode.com/problems/house-robber-ii/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** House Robber on circular array: max(rob(nums[1:]), rob(nums[:-1])). Two linear passes.

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
# Solution template for LC 213 - House Robber II
# Time: O(N), Space: O(1)

```

---

### LeetCode 322: [Coin Change](https://leetcode.com/problems/coin-change/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(amount * coins)`
- **Target Space Complexity:** `O(amount)`
- **Core Intuition:** Unbounded knapsack: dp[a] = min(dp[a], 1 + dp[a - coin]) initialized to infinity with dp[0] = 0.

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
# Solution template for LC 322 - Coin Change
# Time: O(amount * coins), Space: O(amount)

```

---

### LeetCode 279: [Perfect Squares](https://leetcode.com/problems/perfect-squares/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N * sqrt(N))`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** dp[i] = 1 + min(dp[i - j*j]) for j*j <= i, or Lagrange's four-square theorem in O(sqrt(N)).

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
# Solution template for LC 279 - Perfect Squares
# Time: O(N * sqrt(N)), Space: O(N)

```

---

### LeetCode 300: [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N log N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Patience sorting / binary search: maintain tails array of smallest tail of all increasing subsequences.

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
# Solution template for LC 300 - Longest Increasing Subsequence
# Time: O(N log N), Space: O(N)

```

---

[← Back to Master README](../README.md)
