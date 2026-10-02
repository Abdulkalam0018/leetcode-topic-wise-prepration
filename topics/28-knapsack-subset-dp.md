# Topic 28: Knapsack / Subset DP

> **Pattern Overview:** 0/1 Knapsack (reverse iteration), Unbounded Knapsack (forward iteration), and Subset Sum decision formulations.

## 🧠 Algorithmic Blueprint / Mental Model

```python
# 0/1 Knapsack boolean reachable sum
dp = [False] * (target + 1)
dp[0] = True
for num in nums:
    for j in range(target, num - 1, -1):
        dp[j] = dp[j] or dp[j - num]
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 416 | [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) | **Medium** | `O(N * target)` | `O(target)` | 0/1 Knapsack: target = sum // 2. If sum odd return false. 1D boolean array dp[j] |= dp[j - num] backwards. |
| [ ] | 494 | [Target Sum](https://leetcode.com/problems/target-sum/) | **Medium** | `O(N * target)` | `O(target)` | Transform to subset sum: (total + target) // 2. 0/1 Knapsack counting ways to form subset sum. |
| [ ] | 518 | [Coin Change II](https://leetcode.com/problems/coin-change-ii/) | **Medium** | `O(amount * coins)` | `O(amount)` | Unbounded knapsack combinations: loop coin then amount: dp[a] += dp[a - coin]. |
| [ ] | 474 | [Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/) | **Medium** | `O(L * M * N)` | `O(M * N)` | 2D 0/1 knapsack: dp[i][j] = max strings with at most i zeros and j ones. Iterate backwards. |
| [ ] | 1049 | [Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/) | **Medium** | `O(N * sum)` | `O(sum)` | Partition into two subsets with minimal difference: find subset sum closest to sum // 2 via 0/1 knapsack. |
| [ ] | 879 | [Profitable Schemes](https://leetcode.com/problems/profitable-schemes/) | **Hard** | `O(G * P * N)` | `O(G * P)` | 3D/2D DP: dp[k][p] = schemes using k members with profit p. Accumulate profit up to minProfit. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 416: [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N * target)`
- **Target Space Complexity:** `O(target)`
- **Core Intuition:** 0/1 Knapsack: target = sum // 2. If sum odd return false. 1D boolean array dp[j] |= dp[j - num] backwards.

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
# Solution template for LC 416 - Partition Equal Subset Sum
# Time: O(N * target), Space: O(target)

```

---

### LeetCode 494: [Target Sum](https://leetcode.com/problems/target-sum/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N * target)`
- **Target Space Complexity:** `O(target)`
- **Core Intuition:** Transform to subset sum: (total + target) // 2. 0/1 Knapsack counting ways to form subset sum.

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
# Solution template for LC 494 - Target Sum
# Time: O(N * target), Space: O(target)

```

---

### LeetCode 518: [Coin Change II](https://leetcode.com/problems/coin-change-ii/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(amount * coins)`
- **Target Space Complexity:** `O(amount)`
- **Core Intuition:** Unbounded knapsack combinations: loop coin then amount: dp[a] += dp[a - coin].

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
# Solution template for LC 518 - Coin Change II
# Time: O(amount * coins), Space: O(amount)

```

---

### LeetCode 474: [Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(L * M * N)`
- **Target Space Complexity:** `O(M * N)`
- **Core Intuition:** 2D 0/1 knapsack: dp[i][j] = max strings with at most i zeros and j ones. Iterate backwards.

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
# Solution template for LC 474 - Ones and Zeroes
# Time: O(L * M * N), Space: O(M * N)

```

---

### LeetCode 1049: [Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N * sum)`
- **Target Space Complexity:** `O(sum)`
- **Core Intuition:** Partition into two subsets with minimal difference: find subset sum closest to sum // 2 via 0/1 knapsack.

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
# Solution template for LC 1049 - Last Stone Weight II
# Time: O(N * sum), Space: O(sum)

```

---

### LeetCode 879: [Profitable Schemes](https://leetcode.com/problems/profitable-schemes/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(G * P * N)`
- **Target Space Complexity:** `O(G * P)`
- **Core Intuition:** 3D/2D DP: dp[k][p] = schemes using k members with profit p. Accumulate profit up to minProfit.

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
# Solution template for LC 879 - Profitable Schemes
# Time: O(G * P * N), Space: O(G * P)

```

---

[← Back to Master README](../README.md)
