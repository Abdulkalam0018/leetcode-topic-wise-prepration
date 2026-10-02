# Topic 13: Greedy Scheduling / Sorting

> **Pattern Overview:** Making locally optimal choices at each decision point that provably lead to a globally optimal solution.

## 🧠 Algorithmic Blueprint / Mental Model

```python
max_reach = 0
for i, jump in enumerate(nums):
    if i > max_reach:
        return False
    max_reach = max(max_reach, i + jump)
return True
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 45 | [Jump Game II](https://leetcode.com/problems/jump-game-ii/) | **Medium** | `O(N)` | `O(1)` | Track current jump boundary and farthest reachable index. When reaching current boundary, increment jump and update boundary. |
| [ ] | 55 | [Jump Game](https://leetcode.com/problems/jump-game/) | **Medium** | `O(N)` | `O(1)` | Track max reachable index so far. If i > max_reach, return false. Update max_reach = max(max_reach, i + nums[i]). |
| [ ] | 406 | [Queue Reconstruction by Height](https://leetcode.com/problems/queue-reconstruction-by-height/) | **Medium** | `O(N^2)` | `O(N)` | Sort people descending by height; if same height, ascending by k. Insert each person into list at index k. |
| [ ] | 621 | [Task Scheduler](https://leetcode.com/problems/task-scheduler/) | **Medium** | `O(N)` | `O(26)` | Greedy formula: find max task frequency M and number of tasks with count M. Minimum time is max(len(tasks), (M - 1)*(n + 1) + count_max). |
| [ ] | 763 | [Partition Labels](https://leetcode.com/problems/partition-labels/) | **Medium** | `O(N)` | `O(26)` | Record last occurrence index of each character. Greedily extend partition end to max(last_idx); partition when i reaches end. |
| [ ] | 134 | [Gas Station](https://leetcode.com/problems/gas-station/) | **Medium** | `O(N)` | `O(1)` | If sum(gas) < sum(cost), impossible. Otherwise, track running tank; if tank < 0, reset tank = 0 and candidate start = i + 1. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 45: [Jump Game II](https://leetcode.com/problems/jump-game-ii/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Track current jump boundary and farthest reachable index. When reaching current boundary, increment jump and update boundary.

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
# Solution template for LC 45 - Jump Game II
# Time: O(N), Space: O(1)

```

---

### LeetCode 55: [Jump Game](https://leetcode.com/problems/jump-game/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Track max reachable index so far. If i > max_reach, return false. Update max_reach = max(max_reach, i + nums[i]).

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
# Solution template for LC 55 - Jump Game
# Time: O(N), Space: O(1)

```

---

### LeetCode 406: [Queue Reconstruction by Height](https://leetcode.com/problems/queue-reconstruction-by-height/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N^2)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Sort people descending by height; if same height, ascending by k. Insert each person into list at index k.

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
# Solution template for LC 406 - Queue Reconstruction by Height
# Time: O(N^2), Space: O(N)

```

---

### LeetCode 621: [Task Scheduler](https://leetcode.com/problems/task-scheduler/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(26)`
- **Core Intuition:** Greedy formula: find max task frequency M and number of tasks with count M. Minimum time is max(len(tasks), (M - 1)*(n + 1) + count_max).

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
# Solution template for LC 621 - Task Scheduler
# Time: O(N), Space: O(26)

```

---

### LeetCode 763: [Partition Labels](https://leetcode.com/problems/partition-labels/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(26)`
- **Core Intuition:** Record last occurrence index of each character. Greedily extend partition end to max(last_idx); partition when i reaches end.

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
# Solution template for LC 763 - Partition Labels
# Time: O(N), Space: O(26)

```

---

### LeetCode 134: [Gas Station](https://leetcode.com/problems/gas-station/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** If sum(gas) < sum(cost), impossible. Otherwise, track running tank; if tank < 0, reset tank = 0 and candidate start = i + 1.

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
# Solution template for LC 134 - Gas Station
# Time: O(N), Space: O(1)

```

---

[← Back to Master README](../README.md)
