# Topic 11: Heap / Top K

> **Pattern Overview:** Priority queues (min-heap / max-heap) for real-time tracking of top K elements, streaming medians, and greedy selections.

## 🧠 Algorithmic Blueprint / Mental Model

```python
import heapq
heap = []
for x in nums:
    heapq.heappush(heap, x)
    if len(heap) > k:
        heapq.heappop(heap)
# heap[0] is the kth largest element
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 215 | [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | **Medium** | `O(N log K)` | `O(K)` | Min-heap of size k: push each element, pop when size > k. Heap root will be the kth largest. Or QuickSelect for O(N). |
| [ ] | 347 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | **Medium** | `O(N)` | `O(N)` | Count frequencies with hash map. Bucket sort by frequency or use min-heap of size k to extract top k elements. |
| [ ] | 692 | [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/) | **Medium** | `O(N log K)` | `O(N)` | Frequency map then min-heap of size k ordered by (count asc, word desc). Reverse results at the end. |
| [ ] | 703 | [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/) | **Easy** | `O(log K) per add` | `O(K)` | Maintain min-heap of size k storing largest elements seen so far. Root is always the kth largest. |
| [ ] | 973 | [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) | **Medium** | `O(N log K)` | `O(K)` | Max-heap of size k by Euclidean distance x^2 + y^2, or QuickSelect to partition k closest points. |
| [ ] | 1046 | [Last Stone Weight](https://leetcode.com/problems/last-stone-weight/) | **Easy** | `O(N log N)` | `O(N)` | Max-heap (negate values in Python). Pop top two stones, push difference if not zero. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 215: [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N log K)`
- **Target Space Complexity:** `O(K)`
- **Core Intuition:** Min-heap of size k: push each element, pop when size > k. Heap root will be the kth largest. Or QuickSelect for O(N).

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
# Solution template for LC 215 - Kth Largest Element in an Array
# Time: O(N log K), Space: O(K)

```

---

### LeetCode 347: [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Count frequencies with hash map. Bucket sort by frequency or use min-heap of size k to extract top k elements.

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
# Solution template for LC 347 - Top K Frequent Elements
# Time: O(N), Space: O(N)

```

---

### LeetCode 692: [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N log K)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Frequency map then min-heap of size k ordered by (count asc, word desc). Reverse results at the end.

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
# Solution template for LC 692 - Top K Frequent Words
# Time: O(N log K), Space: O(N)

```

---

### LeetCode 703: [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(log K) per add`
- **Target Space Complexity:** `O(K)`
- **Core Intuition:** Maintain min-heap of size k storing largest elements seen so far. Root is always the kth largest.

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
# Solution template for LC 703 - Kth Largest Element in a Stream
# Time: O(log K) per add, Space: O(K)

```

---

### LeetCode 973: [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(N log K)`
- **Target Space Complexity:** `O(K)`
- **Core Intuition:** Max-heap of size k by Euclidean distance x^2 + y^2, or QuickSelect to partition k closest points.

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
# Solution template for LC 973 - K Closest Points to Origin
# Time: O(N log K), Space: O(K)

```

---

### LeetCode 1046: [Last Stone Weight](https://leetcode.com/problems/last-stone-weight/)

- **Difficulty:** Easy
- **Target Time Complexity:** `O(N log N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Max-heap (negate values in Python). Pop top two stones, push difference if not zero.

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
# Solution template for LC 1046 - Last Stone Weight
# Time: O(N log N), Space: O(N)

```

---

[← Back to Master README](../README.md)
