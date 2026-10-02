# Topic 26: Bit Manipulation

> **Pattern Overview:** Harnessing binary bitwise operators (XOR, AND, OR, NOT, Shifts) and tricks like Brian Kernighan's (n & (n-1)) for O(1) space tricks.

## 🧠 Algorithmic Blueprint / Mental Model

```python
# XOR cancels matching pairs: x ^ x = 0
single = 0
for x in nums:
    single ^= x
return single

# Count set bits: n &= (n - 1)
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 136 | [Single Number](https://leetcode.com/problems/single-number/) | **Easy** | `O(N)` | `O(1)` | XOR all numbers together: x ^ x = 0 and x ^ 0 = x. Duplicate numbers cancel out leaving the single number. |
| [ ] | 137 | [Single Number II](https://leetcode.com/problems/single-number-ii/) | **Medium** | `O(N)` | `O(1)` | Count bits at each of 32 bit positions modulo 3, or use two bitmasks (ones, twos) with boolean logic. |
| [ ] | 191 | [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/) | **Easy** | `O(set bits)` | `O(1)` | Brian Kernighan's trick: n &= (n - 1) removes the lowest set bit in each iteration. |
| [ ] | 338 | [Counting Bits](https://leetcode.com/problems/counting-bits/) | **Easy** | `O(N)` | `O(N)` | DP with bit shifting: dp[i] = dp[i >> 1] + (i & 1). Lowest bit determines even/odd count. |
| [ ] | 268 | [Missing Number](https://leetcode.com/problems/missing-number/) | **Easy** | `O(N)` | `O(1)` | XOR all numbers 0..n and all array elements, or Gauss sum n*(n+1)//2 - sum(nums). |
| [ ] | 190 | [Reverse Bits](https://leetcode.com/problems/reverse-bits/) | **Easy** | `O(1)` | `O(1)` | Iterate 32 times: shift result left, add lowest bit of n (n & 1), and shift n right. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 136: [Single Number](https://leetcode.com/problems/single-number/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** XOR all numbers together: x ^ x = 0 and x ^ 0 = x. Duplicate numbers cancel out leaving the single number.

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
# Solution template for LC 136 - Single Number
# Time: O(N), Space: O(1)

```

---

### LeetCode 137: [Single Number II](https://leetcode.com/problems/single-number-ii/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Count bits at each of 32 bit positions modulo 3, or use two bitmasks (ones, twos) with boolean logic.

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
# Solution template for LC 137 - Single Number II
# Time: O(N), Space: O(1)

```

---

### LeetCode 191: [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(set bits)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Brian Kernighan's trick: n &= (n - 1) removes the lowest set bit in each iteration.

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
# Solution template for LC 191 - Number of 1 Bits
# Time: O(set bits), Space: O(1)

```

---

### LeetCode 338: [Counting Bits](https://leetcode.com/problems/counting-bits/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** DP with bit shifting: dp[i] = dp[i >> 1] + (i & 1). Lowest bit determines even/odd count.

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
# Solution template for LC 338 - Counting Bits
# Time: O(N), Space: O(N)

```

---

### LeetCode 268: [Missing Number](https://leetcode.com/problems/missing-number/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** XOR all numbers 0..n and all array elements, or Gauss sum n*(n+1)//2 - sum(nums).

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
# Solution template for LC 268 - Missing Number
# Time: O(N), Space: O(1)

```

---

### LeetCode 190: [Reverse Bits](https://leetcode.com/problems/reverse-bits/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(1)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Iterate 32 times: shift result left, add lowest bit of n (n & 1), and shift n right.

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
# Solution template for LC 190 - Reverse Bits
# Time: O(1), Space: O(1)

```

---

[← Back to Master README](../README.md)
