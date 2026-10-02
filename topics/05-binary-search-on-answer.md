# Topic 5: Binary Search on Answer

> **Pattern Overview:** Searching over the answer space [min_possible, max_possible] using a monotonic feasibility check (predicate function).

## 🧠 Algorithmic Blueprint / Mental Model

```python
def feasible(val):
    # Return True if condition holds for 'val'
    ...

left, right = min_val, max_val
ans = right
while left <= right:
    mid = left + (right - left) // 2
    if feasible(mid):
        ans = mid
        right = mid - 1  # Minimize answer
    else:
        left = mid + 1
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 875 | [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | **Medium** | `O(N log(max(P)))` | `O(1)` | Binary search eating speed k from 1 to max(piles). Predicate: can finish within h hours = sum(ceil(p / k)) <= h. |
| [ ] | 1011 | [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) | **Medium** | `O(N log(sum - max))` | `O(1)` | Binary search capacity from max(weights) to sum(weights). Check if feasible to ship within given days. |
| [ ] | 410 | [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) | **Hard** | `O(N log(sum))` | `O(1)` | Binary search largest split sum between max(nums) and sum(nums). Greedily count required subarrays. |
| [ ] | 774 | [Minimize Max Distance to Gas Station](https://leetcode.com/problems/minimize-max-distance-to-gas-station/) *(Premium - [Free Alt](https://www.lintcode.com/problem/1009/))* | **Hard** | `O(N log(Range/eps))` | `O(1)` | Binary search possible max distance D with floating point precision. Count stations needed: sum(floor(diff / D)) <= k. |
| [ ] | 1283 | [Find the Smallest Divisor Given a Threshold](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/) | **Medium** | `O(N log(max))` | `O(1)` | Binary search divisor from 1 to max(nums). Check sum of ceil(num / divisor) <= threshold. |
| [ ] | 1482 | [Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/) | **Medium** | `O(N log(max))` | `O(1)` | Binary search days from 1 to max(bloomDay). Check if k adjacent flowers can form m bouquets. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 875: [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N log(max(P)))`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Binary search eating speed k from 1 to max(piles). Predicate: can finish within h hours = sum(ceil(p / k)) <= h.

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
# Solution template for LC 875 - Koko Eating Bananas
# Time: O(N log(max(P))), Space: O(1)

```

---

### LeetCode 1011: [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N log(sum - max))`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Binary search capacity from max(weights) to sum(weights). Check if feasible to ship within given days.

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
# Solution template for LC 1011 - Capacity To Ship Packages Within D Days
# Time: O(N log(sum - max)), Space: O(1)

```

---

### LeetCode 410: [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N log(sum))`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Binary search largest split sum between max(nums) and sum(nums). Greedily count required subarrays.

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
# Solution template for LC 410 - Split Array Largest Sum
# Time: O(N log(sum)), Space: O(1)

```

---

### LeetCode 774: [Minimize Max Distance to Gas Station](https://leetcode.com/problems/minimize-max-distance-to-gas-station/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N log(Range/eps))`
- **Target Space Complexity:** `O(1)`
- **LeetCode Premium Note:** Premium problem. [Free LintCode Mirror](https://www.lintcode.com/problem/1009/)
- **Core Intuition:** Binary search possible max distance D with floating point precision. Count stations needed: sum(floor(diff / D)) <= k.

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
# Solution template for LC 774 - Minimize Max Distance to Gas Station
# Time: O(N log(Range/eps)), Space: O(1)

```

---

### LeetCode 1283: [Find the Smallest Divisor Given a Threshold](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N log(max))`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Binary search divisor from 1 to max(nums). Check sum of ceil(num / divisor) <= threshold.

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
# Solution template for LC 1283 - Find the Smallest Divisor Given a Threshold
# Time: O(N log(max)), Space: O(1)

```

---

### LeetCode 1482: [Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N log(max))`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Binary search days from 1 to max(bloomDay). Check if k adjacent flowers can form m bouquets.

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
# Solution template for LC 1482 - Minimum Number of Days to Make m Bouquets
# Time: O(N log(max)), Space: O(1)

```

---

[← Back to Master README](../README.md)
