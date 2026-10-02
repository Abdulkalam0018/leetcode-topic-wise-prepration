# Topic 12: Intervals

> **Pattern Overview:** Sorting by start or end time to merge overlapping intervals, schedule non-conflicting events, and optimize resource allocation.

## 🧠 Algorithmic Blueprint / Mental Model

```python
intervals.sort(key=lambda x: x[0])
merged = [intervals[0]]
for start, end in intervals[1:]:
    if start <= merged[-1][1]:
        merged[-1][1] = max(merged[-1][1], end)
    else:
        merged.append([start, end])
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 56 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | **Medium** | `O(N log N)` | `O(N)` | Sort intervals by start time. Merge overlapping interval if curr.start <= prev.end by extending prev.end = max(prev.end, curr.end). |
| [ ] | 57 | [Insert Interval](https://leetcode.com/problems/insert-interval/) | **Medium** | `O(N)` | `O(N)` | Add all intervals ending before newInterval starts, merge overlapping intervals with newInterval, then append rest. |
| [ ] | 252 | [Meeting Rooms](https://leetcode.com/problems/meeting-rooms/) *(Premium - [Free Alt](https://www.lintcode.com/problem/920/))* | **Easy** | `O(N log N)` | `O(1)` | Sort by start time. Check if intervals[i].start < intervals[i-1].end for any adjacent pair. |
| [ ] | 253 | [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/) *(Premium - [Free Alt](https://www.lintcode.com/problem/919/))* | **Medium** | `O(N log N)` | `O(N)` | Sort intervals by start time. Min-heap of end times. If start >= earliest end, pop heap; always push end time. Heap size is rooms needed. |
| [ ] | 435 | [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) | **Medium** | `O(N log N)` | `O(1)` | Interval scheduling greedy: sort by end time. Always keep interval with earliest end time; count overlaps removed. |
| [ ] | 452 | [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) | **Medium** | `O(N log N)` | `O(1)` | Sort balloons by end point. Greedily shoot arrow at current end point; skip balloons that start before or at arrow position. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 56: [Merge Intervals](https://leetcode.com/problems/merge-intervals/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N log N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Sort intervals by start time. Merge overlapping interval if curr.start <= prev.end by extending prev.end = max(prev.end, curr.end).

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
# Solution template for LC 56 - Merge Intervals
# Time: O(N log N), Space: O(N)

```

---

### LeetCode 57: [Insert Interval](https://leetcode.com/problems/insert-interval/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Add all intervals ending before newInterval starts, merge overlapping intervals with newInterval, then append rest.

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
# Solution template for LC 57 - Insert Interval
# Time: O(N), Space: O(N)

```

---

### LeetCode 252: [Meeting Rooms](https://leetcode.com/problems/meeting-rooms/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N log N)`
- **Target Space Complexity:** `O(1)`
- **LeetCode Premium Note:** Premium problem. [Free LintCode Mirror](https://www.lintcode.com/problem/920/)
- **Core Intuition:** Sort by start time. Check if intervals[i].start < intervals[i-1].end for any adjacent pair.

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
# Solution template for LC 252 - Meeting Rooms
# Time: O(N log N), Space: O(1)

```

---

### LeetCode 253: [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N log N)`
- **Target Space Complexity:** `O(N)`
- **LeetCode Premium Note:** Premium problem. [Free LintCode Mirror](https://www.lintcode.com/problem/919/)
- **Core Intuition:** Sort intervals by start time. Min-heap of end times. If start >= earliest end, pop heap; always push end time. Heap size is rooms needed.

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
# Solution template for LC 253 - Meeting Rooms II
# Time: O(N log N), Space: O(N)

```

---

### LeetCode 435: [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N log N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Interval scheduling greedy: sort by end time. Always keep interval with earliest end time; count overlaps removed.

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
# Solution template for LC 435 - Non-overlapping Intervals
# Time: O(N log N), Space: O(1)

```

---

### LeetCode 452: [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N log N)`
- **Target Space Complexity:** `O(1)`
- **Core Intuition:** Sort balloons by end point. Greedily shoot arrow at current end point; skip balloons that start before or at arrow position.

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
# Solution template for LC 452 - Minimum Number of Arrows to Burst Balloons
# Time: O(N log N), Space: O(1)

```

---

[← Back to Master README](../README.md)
