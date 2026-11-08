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
| [ ] | 188 | [Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/) | **Hard** | `O(K * N)` | `O(K)` | State machine DP maintaining buy[j] and sell[j] for j in 1..k: buy[j] = max(buy[j], sell[j-1] - price) and sell[j] = max(sell[j], buy[j] + price). |
| [ ] | 354 | [Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/) | **Hard** | `O(N log N)` | `O(N)` | Sort envelopes by width ascending, and height descending for ties. Find Longest Increasing Subsequence (LIS) on heights using binary search patience sorting. |
| [ ] | 403 | [Frog Jump](https://leetcode.com/problems/frog-jump/) | **Hard** | `O(N^2)` | `O(N^2)` | DP map {stone_position: set_of_valid_jump_units}. For stone position and jump k, add k-1, k, k+1 to reachable stone if position + jump in stones. |
| [ ] | 887 | [Super Egg Drop](https://leetcode.com/problems/super-egg-drop/) | **Hard** | `O(K log N)` | `O(K)` | Invert problem: `dp[m][k]` is max floors testable with m moves and k eggs. Recurrence: dp[m][k] = 1 + dp[m-1][k-1] + dp[m-1][k]. Stop when dp[m][k] >= n. |

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

### LeetCode 188: [Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(K * N)`
- **Target Space Complexity:** `O(K)`
- **Core Intuition:** State machine DP maintaining buy[j] and sell[j] for j in 1..k: buy[j] = max(buy[j], sell[j-1] - price) and sell[j] = max(sell[j], buy[j] + price).

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
# Solution template for LC 188 - Best Time to Buy and Sell Stock IV
# Time: O(K * N), Space: O(K)

```

---

### LeetCode 354: [Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N log N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Sort envelopes by width ascending, and height descending for ties. Find Longest Increasing Subsequence (LIS) on heights using binary search patience sorting.

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
# Solution template for LC 354 - Russian Doll Envelopes
# Time: O(N log N), Space: O(N)

```

---

### LeetCode 403: [Frog Jump](https://leetcode.com/problems/frog-jump/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N^2)`
- **Target Space Complexity:** `O(N^2)`
- **Core Intuition:** DP map {stone_position: set_of_valid_jump_units}. For stone position and jump k, add k-1, k, k+1 to reachable stone if position + jump in stones.

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
# Solution template for LC 403 - Frog Jump
# Time: O(N^2), Space: O(N^2)

```

---

### LeetCode 887: [Super Egg Drop](https://leetcode.com/problems/super-egg-drop/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(K log N)`
- **Target Space Complexity:** `O(K)`
- **Core Intuition:** Invert problem: `dp[m][k]` is max floors testable with m moves and k eggs. Recurrence: dp[m][k] = 1 + dp[m-1][k-1] + dp[m-1][k]. Stop when dp[m][k] >= n.

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
# Solution template for LC 887 - Super Egg Drop
# Time: O(K log N), Space: O(K)

```

---

[← Back to Master README](../README.md)
