# 🚀 LeetCode Topic-Wise Preparation & Revision Tracker

[![Problems](https://img.shields.io/badge/Problems-181-blue.svg)](#problems-matrix) 
[![Topics](https://img.shields.io/badge/Topics-30-orange.svg)](#topic-breakdown) 
[![Interactive Tracker](https://img.shields.io/badge/Interactive_App-index.html-brightgreen.svg)](./index.html) 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

A complete, structured curriculum of **181 high-yield LeetCode problems** categorized across **30 essential DSA patterns**.

This repository is equipped with both a **comprehensive Markdown revision guide** and an **interactive Web Revision Dashboard** (`index.html`) featuring real-time progress tracking, mark-as-done toggles, revision bookmarks, and local note-taking capabilities.

## 🌟 Interactive Revision Tracker (Web App)

This repository includes a modern, zero-dependency **Revision Dashboard (`index.html`)** that you can open locally in any browser or deploy seamlessly to **GitHub Pages**.

### ✨ Key Features of the Tracker:

- **Mark as Done & Revision Star:** Toggle questions as `Solved`, `In Progress`, or `Needs Review`.

- **In-App Personal Notes:** Write, format, and save custom notes, edge cases, and code templates for each problem. Notes are auto-saved to `localStorage`.

- **Live Analytics & Progress Bars:** Visual breakdown of Easy / Medium / Hard completion and per-topic progress bars.

- **Smart Filters & Instant Search:** Filter by topic, status, difficulty, or search by problem title/number.

- **Export & Import Backup:** Download your progress and notes as JSON or Markdown to ensure your notes are never lost.

- **Pre-loaded Cheat Sheets & Hints:** Every question contains instant intuition hints, time/space targets, and canonical pattern templates.

- **Dark & Light Mode:** Sleek modern interface with automatic theme persistence.


### 💻 How to Run the Interactive Tracker Locally:

Simply open `index.html` in your favorite web browser:

```bash
# macOS
open index.html

# Or run a local lightweight server:
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### 🌐 Deploying to GitHub Pages (1-Click):

1. Go to your repository settings on GitHub (`https://github.com/Abdulkalam0018/leetcode-topic-wise-prepration/settings/pages`).

2. Under **Build and deployment > Source**, select **Deploy from a branch**.

3. Select branch: `main` and folder: `/ (root)`.

4. Click **Save**. Your tracker will be live at `https://abdulkalam0018.github.io/leetcode-topic-wise-prepration/`!


## 📊 Curriculum Overview & Difficulty Matrix

| Total Topics | Total Problems | Easy Problems 🟢 | Medium Problems 🟡 | Hard Problems 🔴 |
|:------------:|:--------------:|:----------------:|:------------------:|:----------------:|
| **30** | **181** | **30** | **126** | **25** |

## 📚 30 DSA Topics Index

| # | Topic Name | Problems | Study Guide Link |
|:--:|:-----------|:--------:|:-----------------|
| 1 | **Sliding Window** | 6 | [Open Topic Guide & Notes 📖](topics/01-sliding-window.md) |
| 2 | **Two Pointers** | 6 | [Open Topic Guide & Notes 📖](topics/02-two-pointers.md) |
| 3 | **Fast/Slow Pointers (Linked List)** | 6 | [Open Topic Guide & Notes 📖](topics/03-fast-slow-pointers.md) |
| 4 | **Binary Search on Sorted Data** | 6 | [Open Topic Guide & Notes 📖](topics/04-binary-search-sorted-data.md) |
| 5 | **Binary Search on Answer** | 6 | [Open Topic Guide & Notes 📖](topics/05-binary-search-on-answer.md) |
| 6 | **Hashing / Frequency Maps** | 6 | [Open Topic Guide & Notes 📖](topics/06-hashing-frequency-maps.md) |
| 7 | **Prefix Sum / Running Sum** | 6 | [Open Topic Guide & Notes 📖](topics/07-prefix-sum-running-sum.md) |
| 8 | **Difference Array / Range Updates** | 6 | [Open Topic Guide & Notes 📖](topics/08-difference-array-range-updates.md) |
| 9 | **Monotonic Stack** | 6 | [Open Topic Guide & Notes 📖](topics/09-monotonic-stack.md) |
| 10 | **Monotonic Queue / Deque** | 6 | [Open Topic Guide & Notes 📖](topics/10-monotonic-queue-deque.md) |
| 11 | **Heap / Top K** | 6 | [Open Topic Guide & Notes 📖](topics/11-heap-top-k.md) |
| 12 | **Intervals** | 7 | [Open Topic Guide & Notes 📖](topics/12-intervals.md) |
| 13 | **Greedy Scheduling / Sorting** | 6 | [Open Topic Guide & Notes 📖](topics/13-greedy-scheduling-sorting.md) |
| 14 | **Linked List Manipulation** | 6 | [Open Topic Guide & Notes 📖](topics/14-linked-list-manipulation.md) |
| 15 | **Tree DFS** | 6 | [Open Topic Guide & Notes 📖](topics/15-tree-dfs.md) |
| 16 | **Tree BFS / Level Order** | 6 | [Open Topic Guide & Notes 📖](topics/16-tree-bfs-level-order.md) |
| 17 | **BST Problems** | 6 | [Open Topic Guide & Notes 📖](topics/17-bst-problems.md) |
| 18 | **Backtracking Basics** | 6 | [Open Topic Guide & Notes 📖](topics/18-backtracking-basics.md) |
| 19 | **Backtracking with Constraints** | 6 | [Open Topic Guide & Notes 📖](topics/19-backtracking-with-constraints.md) |
| 20 | **Graph BFS / DFS** | 6 | [Open Topic Guide & Notes 📖](topics/20-graph-bfs-dfs.md) |
| 21 | **Topological Sort / DAG** | 6 | [Open Topic Guide & Notes 📖](topics/21-topological-sort-dag.md) |
| 22 | **Union Find / DSU** | 6 | [Open Topic Guide & Notes 📖](topics/22-union-find-dsu.md) |
| 23 | **Shortest Path** | 6 | [Open Topic Guide & Notes 📖](topics/23-shortest-path.md) |
| 24 | **MST / Graph Greedy** | 6 | [Open Topic Guide & Notes 📖](topics/24-mst-graph-greedy.md) |
| 25 | **Trie** | 6 | [Open Topic Guide & Notes 📖](topics/25-trie.md) |
| 26 | **Bit Manipulation** | 6 | [Open Topic Guide & Notes 📖](topics/26-bit-manipulation.md) |
| 27 | **1D DP Basics** | 6 | [Open Topic Guide & Notes 📖](topics/27-1d-dp-basics.md) |
| 28 | **Knapsack / Subset DP** | 6 | [Open Topic Guide & Notes 📖](topics/28-knapsack-subset-dp.md) |
| 29 | **Grid DP** | 6 | [Open Topic Guide & Notes 📖](topics/29-grid-dp.md) |
| 30 | **String DP / Sequence DP** | 6 | [Open Topic Guide & Notes 📖](topics/30-string-dp-sequence-dp.md) |

---

## 📑 Complete 181 Problem Roadmap

### 1. [Sliding Window](topics/01-sliding-window.md)

> *Technique for maintaining a dynamic or fixed-length contiguous subarray/substring that expands and contracts to satisfy constraints.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 3 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | **Medium** | `O(N)` | `O(min(N, M))` | Use a hash set or last-seen index map with left/right pointers to expand and contract window when duplicate appears. | [Notes 📝](topics/01-sliding-window.md#leetcode-3-longest-substring-without-repeating-characters) |
| [ ] | 76 | [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) | **Hard** | `O(N + M)` | `O(M)` | Maintain target char counts and formed distinct count in window. Expand right until valid, contract left to minimize window. | [Notes 📝](topics/01-sliding-window.md#leetcode-76-minimum-window-substring) |
| [ ] | 209 | [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) | **Medium** | `O(N)` | `O(1)` | Expand right adding nums[right] to running sum. While sum >= target, update min length and shrink from left. | [Notes 📝](topics/01-sliding-window.md#leetcode-209-minimum-size-subarray-sum) |
| [ ] | 424 | [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) | **Medium** | `O(N)` | `O(26)` | Track max frequency of any single char in current window. If (window_length - max_freq) > k, shift left pointer. | [Notes 📝](topics/01-sliding-window.md#leetcode-424-longest-repeating-character-replacement) |
| [ ] | 567 | [Permutation in String](https://leetcode.com/problems/permutation-in-string/) | **Medium** | `O(N)` | `O(26)` | Fixed-size window equal to len(s1). Track character frequency difference or match count. | [Notes 📝](topics/01-sliding-window.md#leetcode-567-permutation-in-string) |
| [ ] | 904 | [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/) | **Medium** | `O(N)` | `O(1)` | Longest subarray with at most 2 distinct elements. Use hash map of basket counts; shrink left when map size > 2. | [Notes 📝](topics/01-sliding-window.md#leetcode-904-fruit-into-baskets) |

### 2. [Two Pointers](topics/02-two-pointers.md)

> *Using two references (converging from opposite ends or moving in tandem) to avoid quadratic brute-force searches on sorted or structured data.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 11 | [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | **Medium** | `O(N)` | `O(1)` | Start with widest pointers at 0 and n-1. Calculate area; move the pointer with the smaller height inward. | [Notes 📝](topics/02-two-pointers.md#leetcode-11-container-with-most-water) |
| [ ] | 15 | [3Sum](https://leetcode.com/problems/3sum/) | **Medium** | `O(N^2)` | `O(1) or O(N)` | Sort array. Fix first element nums[i], then use two pointers left=i+1, right=n-1. Skip duplicates to avoid duplicate triplets. | [Notes 📝](topics/02-two-pointers.md#leetcode-15-3sum) |
| [ ] | 16 | [3Sum Closest](https://leetcode.com/problems/3sum-closest/) | **Medium** | `O(N^2)` | `O(1)` | Sort array. Iterate i, use two pointers left/right to find sum closest to target; track minimal absolute diff. | [Notes 📝](topics/02-two-pointers.md#leetcode-16-3sum-closest) |
| [ ] | 18 | [4Sum](https://leetcode.com/problems/4sum/) | **Medium** | `O(N^3)` | `O(1)` | Sort array. Double loop for first two numbers, then two pointers for remaining two. Skip duplicate values at every level. | [Notes 📝](topics/02-two-pointers.md#leetcode-18-4sum) |
| [ ] | 42 | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | **Hard** | `O(N)` | `O(1)` | Two pointers from ends tracking left_max and right_max. Move smaller max inward, trapping max(0, curr_max - height). | [Notes 📝](topics/02-two-pointers.md#leetcode-42-trapping-rain-water) |
| [ ] | 167 | [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | **Medium** | `O(N)` | `O(1)` | Array is sorted. Left=0, Right=n-1. If sum < target, left++; if sum > target, right--; return 1-based indices. | [Notes 📝](topics/02-two-pointers.md#leetcode-167-two-sum-ii-input-array-is-sorted) |

### 3. [Fast/Slow Pointers (Linked List)](topics/03-fast-slow-pointers.md)

> *Floyd's Cycle-Finding Algorithm (Tortoise and Hare) and pointer gap techniques for cycle detection, midpoint discovery, and nth-from-end lookups.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 141 | [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) | **Easy** | `O(N)` | `O(1)` | Floyd's cycle detection. Slow moves 1 step, fast moves 2 steps. If they meet, cycle exists. | [Notes 📝](topics/03-fast-slow-pointers.md#leetcode-141-linked-list-cycle) |
| [ ] | 142 | [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) | **Medium** | `O(N)` | `O(1)` | Detect collision with slow/fast. Reset one pointer to head; move both 1 step at a time until they meet at cycle entry. | [Notes 📝](topics/03-fast-slow-pointers.md#leetcode-142-linked-list-cycle-ii) |
| [ ] | 19 | [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | **Medium** | `O(N)` | `O(1)` | Move fast pointer n steps ahead. Then advance slow and fast together until fast reaches end. Slow is right before target. | [Notes 📝](topics/03-fast-slow-pointers.md#leetcode-19-remove-nth-node-from-end-of-list) |
| [ ] | 876 | [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) | **Easy** | `O(N)` | `O(1)` | Slow moves 1 step, fast moves 2 steps. When fast reaches end, slow is at the middle node. | [Notes 📝](topics/03-fast-slow-pointers.md#leetcode-876-middle-of-the-linked-list) |
| [ ] | 160 | [Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/) | **Easy** | `O(N + M)` | `O(1)` | Traverse list A then B, and list B then A. Pointers will align and meet at intersection node (or null) after at most 2 passes. | [Notes 📝](topics/03-fast-slow-pointers.md#leetcode-160-intersection-of-two-linked-lists) |
| [ ] | 234 | [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) | **Easy** | `O(N)` | `O(1)` | Find middle with slow/fast, reverse the second half in-place, then compare values node by node from both ends. | [Notes 📝](topics/03-fast-slow-pointers.md#leetcode-234-palindrome-linked-list) |

### 4. [Binary Search on Sorted Data](topics/04-binary-search-sorted-data.md)

> *Logarithmic time search on monotonically sorted or rotated arrays by systematically halving the search space.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 33 | [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | **Medium** | `O(log N)` | `O(1)` | At least one half is always sorted. Check if target lies within the sorted half to decide which side to search. | [Notes 📝](topics/04-binary-search-sorted-data.md#leetcode-33-search-in-rotated-sorted-array) |
| [ ] | 34 | [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | **Medium** | `O(log N)` | `O(1)` | Run binary search twice: once finding first occurrence (target == nums[mid] search left), once finding last (search right). | [Notes 📝](topics/04-binary-search-sorted-data.md#leetcode-34-find-first-and-last-position-of-element-in-sorted-array) |
| [ ] | 35 | [Search Insert Position](https://leetcode.com/problems/search-insert-position/) | **Easy** | `O(log N)` | `O(1)` | Standard lower_bound binary search. Return left pointer where target belongs. | [Notes 📝](topics/04-binary-search-sorted-data.md#leetcode-35-search-insert-position) |
| [ ] | 153 | [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | **Medium** | `O(log N)` | `O(1)` | Compare nums[mid] with nums[right]. If nums[mid] > nums[right], min is in right half; else in left half. | [Notes 📝](topics/04-binary-search-sorted-data.md#leetcode-153-find-minimum-in-rotated-sorted-array) |
| [ ] | 162 | [Find Peak Element](https://leetcode.com/problems/find-peak-element/) | **Medium** | `O(log N)` | `O(1)` | Compare nums[mid] with nums[mid + 1]. If ascending, a peak must lie on the right; otherwise on the left. | [Notes 📝](topics/04-binary-search-sorted-data.md#leetcode-162-find-peak-element) |
| [ ] | 704 | [Binary Search](https://leetcode.com/problems/binary-search/) | **Easy** | `O(log N)` | `O(1)` | Classic binary search template. Maintain left <= right, check nums[mid] against target. | [Notes 📝](topics/04-binary-search-sorted-data.md#leetcode-704-binary-search) |

### 5. [Binary Search on Answer](topics/05-binary-search-on-answer.md)

> *Searching over the answer space [min_possible, max_possible] using a monotonic feasibility check (predicate function).*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 875 | [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | **Medium** | `O(N log(max(P)))` | `O(1)` | Binary search eating speed k from 1 to max(piles). Predicate: can finish within h hours = sum(ceil(p / k)) <= h. | [Notes 📝](topics/05-binary-search-on-answer.md#leetcode-875-koko-eating-bananas) |
| [ ] | 1011 | [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) | **Medium** | `O(N log(sum - max))` | `O(1)` | Binary search capacity from max(weights) to sum(weights). Check if feasible to ship within given days. | [Notes 📝](topics/05-binary-search-on-answer.md#leetcode-1011-capacity-to-ship-packages-within-d-days) |
| [ ] | 410 | [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) | **Hard** | `O(N log(sum))` | `O(1)` | Binary search largest split sum between max(nums) and sum(nums). Greedily count required subarrays. | [Notes 📝](topics/05-binary-search-on-answer.md#leetcode-410-split-array-largest-sum) |
| [ ] | 774 | [Minimize Max Distance to Gas Station](https://leetcode.com/problems/minimize-max-distance-to-gas-station/) *(Premium - [Free Alt](https://www.lintcode.com/problem/1009/))* | **Hard** | `O(N log(Range/eps))` | `O(1)` | Binary search possible max distance D with floating point precision. Count stations needed: sum(floor(diff / D)) <= k. | [Notes 📝](topics/05-binary-search-on-answer.md#leetcode-774-minimize-max-distance-to-gas-station) |
| [ ] | 1283 | [Find the Smallest Divisor Given a Threshold](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/) | **Medium** | `O(N log(max))` | `O(1)` | Binary search divisor from 1 to max(nums). Check sum of ceil(num / divisor) <= threshold. | [Notes 📝](topics/05-binary-search-on-answer.md#leetcode-1283-find-the-smallest-divisor-given-a-threshold) |
| [ ] | 1482 | [Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/) | **Medium** | `O(N log(max))` | `O(1)` | Binary search days from 1 to max(bloomDay). Check if k adjacent flowers can form m bouquets. | [Notes 📝](topics/05-binary-search-on-answer.md#leetcode-1482-minimum-number-of-days-to-make-m-bouquets) |

### 6. [Hashing / Frequency Maps](topics/06-hashing-frequency-maps.md)

> *Harnessing O(1) average lookup, insertion, and frequency counting to transform multi-pass nested loops into single-pass solutions.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | **Easy** | `O(N)` | `O(N)` | Store {value: index} in hash map. For current num, check if (target - num) exists in map. | [Notes 📝](topics/06-hashing-frequency-maps.md#leetcode-1-two-sum) |
| [ ] | 49 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | **Medium** | `O(N * K log K)` | `O(N * K)` | Group strings by sorted character tuple or 26-char frequency count tuple as dictionary key. | [Notes 📝](topics/06-hashing-frequency-maps.md#leetcode-49-group-anagrams) |
| [ ] | 128 | [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) | **Medium** | `O(N)` | `O(N)` | Insert all numbers into hash set. Only check streak for numbers that are sequence starts (num - 1 not in set). | [Notes 📝](topics/06-hashing-frequency-maps.md#leetcode-128-longest-consecutive-sequence) |
| [ ] | 217 | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | **Easy** | `O(N)` | `O(N)` | Use a hash set to detect duplicate elements in a single pass. | [Notes 📝](topics/06-hashing-frequency-maps.md#leetcode-217-contains-duplicate) |
| [ ] | 242 | [Valid Anagram](https://leetcode.com/problems/valid-anagram/) | **Easy** | `O(N)` | `O(1)` | Compare character counts between two strings using an array of size 26 or hash map. | [Notes 📝](topics/06-hashing-frequency-maps.md#leetcode-242-valid-anagram) |
| [ ] | 347 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | **Medium** | `O(N)` | `O(N)` | Count frequencies with hash map. Bucket sort by frequency or use min-heap of size k to extract top k elements. | [Notes 📝](topics/06-hashing-frequency-maps.md#leetcode-347-top-k-frequent-elements) |

### 7. [Prefix Sum / Running Sum](topics/07-prefix-sum-running-sum.md)

> *Precomputing cumulative sums to answer range sum queries in O(1) or pairing with hash maps to find subarrays matching sum conditions.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 303 | [Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/) | **Easy** | `O(1) query` | `O(N)` | Precompute prefix sum array where prefix[i] = sum(nums[0..i-1]). Range sum [left, right] = prefix[right+1] - prefix[left]. | [Notes 📝](topics/07-prefix-sum-running-sum.md#leetcode-303-range-sum-query-immutable) |
| [ ] | 560 | [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) | **Medium** | `O(N)` | `O(N)` | Track running prefix sum and store count of prefix sums in hash map. Check map[current_sum - k]. | [Notes 📝](topics/07-prefix-sum-running-sum.md#leetcode-560-subarray-sum-equals-k) |
| [ ] | 724 | [Find Pivot Index](https://leetcode.com/problems/find-pivot-index/) | **Easy** | `O(N)` | `O(1)` | Compute total sum. Iterate keeping left_sum; right_sum = total - left_sum - nums[i]. Check left_sum == right_sum. | [Notes 📝](topics/07-prefix-sum-running-sum.md#leetcode-724-find-pivot-index) |
| [ ] | 930 | [Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/) | **Medium** | `O(N)` | `O(N)` | Count subarrays with exact sum goal: atMost(goal) - atMost(goal - 1) via sliding window, or prefix sum count map. | [Notes 📝](topics/07-prefix-sum-running-sum.md#leetcode-930-binary-subarrays-with-sum) |
| [ ] | 974 | [Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/) | **Medium** | `O(N)` | `O(K)` | Subarray divisible by k: track prefix_sum % k. Normalize negative modulo ((rem % k) + k) % k. Count pairs with same remainder. | [Notes 📝](topics/07-prefix-sum-running-sum.md#leetcode-974-subarray-sums-divisible-by-k) |
| [ ] | 523 | [Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/) | **Medium** | `O(N)` | `O(min(N, K))` | Store earliest index for each prefix_sum % k in hash map initialized with {0: -1}. If remainder seen at index < i - 1, return true. | [Notes 📝](topics/07-prefix-sum-running-sum.md#leetcode-523-continuous-subarray-sum) |

### 8. [Difference Array / Range Updates](topics/08-difference-array-range-updates.md)

> *Applying O(1) range updates [start, end, val] by recording +val at start and -val at end+1, recovering results via prefix sum.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 370 | [Range Addition](https://leetcode.com/problems/range-addition/) *(Premium - [Free Alt](https://www.lintcode.com/problem/903/))* | **Medium** | `O(N + Q)` | `O(N)` | For each update [start, end, val], diff[start] += val and diff[end + 1] -= val. Prefix sum of diff gives final array. | [Notes 📝](topics/08-difference-array-range-updates.md#leetcode-370-range-addition) |
| [ ] | 1094 | [Car Pooling](https://leetcode.com/problems/car-pooling/) | **Medium** | `O(N + max_stop)` | `O(max_stop)` | Difference array on timeline: diff[from] += passengers, diff[to] -= passengers. Check running capacity <= capacity. | [Notes 📝](topics/08-difference-array-range-updates.md#leetcode-1094-car-pooling) |
| [ ] | 1109 | [Corporate Flight Bookings](https://leetcode.com/problems/corporate-flight-bookings/) | **Medium** | `O(N + bookings)` | `O(N)` | Difference array: diff[first - 1] += seats, diff[last] -= seats. Accumulate running sum to produce result. | [Notes 📝](topics/08-difference-array-range-updates.md#leetcode-1109-corporate-flight-bookings) |
| [ ] | 1893 | [Check if All the Integers in a Range Are Covered](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/) | **Easy** | `O(N + Range)` | `O(1)` | Use difference array of size 52 to mark covered ranges, then prefix sum to verify every integer in [left, right] >= 1. | [Notes 📝](topics/08-difference-array-range-updates.md#leetcode-1893-check-if-all-the-integers-in-a-range-are-covered) |
| [ ] | 1943 | [Describe the Painting](https://leetcode.com/problems/describe-the-painting/) | **Medium** | `O(N log N)` | `O(N)` | Track color weight changes at endpoints using map / difference events. Sweep left to right accumulating non-zero sums. | [Notes 📝](topics/08-difference-array-range-updates.md#leetcode-1943-describe-the-painting) |
| [ ] | 2381 | [Shifting Letters II](https://leetcode.com/problems/shifting-letters-ii/) | **Medium** | `O(N + shifts)` | `O(N)` | Difference array for net shifts. Forward adds +1, backward adds -1. Compute prefix sums modulo 26 to shift characters. | [Notes 📝](topics/08-difference-array-range-updates.md#leetcode-2381-shifting-letters-ii) |

### 9. [Monotonic Stack](topics/09-monotonic-stack.md)

> *Stack preserving elements in strictly increasing or decreasing order to locate Next Greater/Smaller Elements in O(N) total time.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 739 | [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | **Medium** | `O(N)` | `O(N)` | Decreasing monotonic stack storing indices. Pop while current temperature > stack top; distance = i - stack.pop(). | [Notes 📝](topics/09-monotonic-stack.md#leetcode-739-daily-temperatures) |
| [ ] | 496 | [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/) | **Easy** | `O(N + M)` | `O(N)` | Monotonic decreasing stack on nums2 to map each element to its next greater element in a hash map. | [Notes 📝](topics/09-monotonic-stack.md#leetcode-496-next-greater-element-i) |
| [ ] | 503 | [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/) | **Medium** | `O(N)` | `O(N)` | Iterate through array twice (2*n with i % n). Monotonic decreasing stack of indices. | [Notes 📝](topics/09-monotonic-stack.md#leetcode-503-next-greater-element-ii) |
| [ ] | 84 | [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) | **Hard** | `O(N)` | `O(N)` | Monotonic increasing stack of indices. When popping height h, width = (current_idx - 1) - stack_top. Sentinel 0 at ends. | [Notes 📝](topics/09-monotonic-stack.md#leetcode-84-largest-rectangle-in-histogram) |
| [ ] | 85 | [Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/) | **Hard** | `O(R * C)` | `O(C)` | Convert 2D matrix into cumulative histogram heights row by row. Run largest rectangle in histogram (LC 84) on each row. | [Notes 📝](topics/09-monotonic-stack.md#leetcode-85-maximal-rectangle) |
| [ ] | 901 | [Online Stock Span](https://leetcode.com/problems/online-stock-span/) | **Medium** | `O(1) amortized` | `O(N)` | Monotonic decreasing stack of pairs (price, span). While price >= stack top, accumulate spans. | [Notes 📝](topics/09-monotonic-stack.md#leetcode-901-online-stock-span) |

### 10. [Monotonic Queue / Deque](topics/10-monotonic-queue-deque.md)

> *Double-ended queue maintaining monotonic ordering across a sliding window, providing O(1) sliding window min/max lookups.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 239 | [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) | **Hard** | `O(N)` | `O(K)` | Deque storing indices in decreasing order of values. Pop indices outside window [i-k+1, i]; front is always max. | [Notes 📝](topics/10-monotonic-queue-deque.md#leetcode-239-sliding-window-maximum) |
| [ ] | 862 | [Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) | **Hard** | `O(N)` | `O(N)` | Prefix sums with monotonic increasing deque of indices. Pop from front while P[i] - P[deque.front] >= k. | [Notes 📝](topics/10-monotonic-queue-deque.md#leetcode-862-shortest-subarray-with-sum-at-least-k) |
| [ ] | 1425 | [Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/) | **Hard** | `O(N)` | `O(N)` | DP with max sliding window deque: dp[i] = nums[i] + max(0, dp[deque.front()]). Maintain deque decreasing. | [Notes 📝](topics/10-monotonic-queue-deque.md#leetcode-1425-constrained-subsequence-sum) |
| [ ] | 1438 | [Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/) | **Medium** | `O(N)` | `O(N)` | Two deques for sliding window min and max. Expand right; while max_dq.front - min_dq.front > limit, advance left. | [Notes 📝](topics/10-monotonic-queue-deque.md#leetcode-1438-longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit) |
| [ ] | 1499 | [Max Value of Equation](https://leetcode.com/problems/max-value-of-equation/) | **Hard** | `O(N)` | `O(N)` | Maximize (yi + yj + |xi - xj|) = (yj + xj) + (yi - xi) with xj - xi <= k. Maintain deque decreasing in (yi - xi). | [Notes 📝](topics/10-monotonic-queue-deque.md#leetcode-1499-max-value-of-equation) |
| [ ] | 1696 | [Jump Game VI](https://leetcode.com/problems/jump-game-vi/) | **Medium** | `O(N)` | `O(K)` | DP dp[i] = nums[i] + max(dp[i-k..i-1]). Deque stores indices of best dp values in sliding window of size k. | [Notes 📝](topics/10-monotonic-queue-deque.md#leetcode-1696-jump-game-vi) |

### 11. [Heap / Top K](topics/11-heap-top-k.md)

> *Priority queues (min-heap / max-heap) for real-time tracking of top K elements, streaming medians, and greedy selections.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 215 | [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | **Medium** | `O(N log K)` | `O(K)` | Min-heap of size k: push each element, pop when size > k. Heap root will be the kth largest. Or QuickSelect for O(N). | [Notes 📝](topics/11-heap-top-k.md#leetcode-215-kth-largest-element-in-an-array) |
| [ ] | 347 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | **Medium** | `O(N)` | `O(N)` | Count frequencies with hash map. Bucket sort by frequency or use min-heap of size k to extract top k elements. | [Notes 📝](topics/11-heap-top-k.md#leetcode-347-top-k-frequent-elements) |
| [ ] | 692 | [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/) | **Medium** | `O(N log K)` | `O(N)` | Frequency map then min-heap of size k ordered by (count asc, word desc). Reverse results at the end. | [Notes 📝](topics/11-heap-top-k.md#leetcode-692-top-k-frequent-words) |
| [ ] | 703 | [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/) | **Easy** | `O(log K) per add` | `O(K)` | Maintain min-heap of size k storing largest elements seen so far. Root is always the kth largest. | [Notes 📝](topics/11-heap-top-k.md#leetcode-703-kth-largest-element-in-a-stream) |
| [ ] | 973 | [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) | **Medium** | `O(N log K)` | `O(K)` | Max-heap of size k by Euclidean distance x^2 + y^2, or QuickSelect to partition k closest points. | [Notes 📝](topics/11-heap-top-k.md#leetcode-973-k-closest-points-to-origin) |
| [ ] | 1046 | [Last Stone Weight](https://leetcode.com/problems/last-stone-weight/) | **Easy** | `O(N log N)` | `O(N)` | Max-heap (negate values in Python). Pop top two stones, push difference if not zero. | [Notes 📝](topics/11-heap-top-k.md#leetcode-1046-last-stone-weight) |

### 12. [Intervals](topics/12-intervals.md)

> *Sorting by start or end time to merge overlapping intervals, schedule non-conflicting events, and optimize resource allocation.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 56 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | **Medium** | `O(N log N)` | `O(N)` | Sort intervals by start time. Merge overlapping interval if curr.start <= prev.end by extending prev.end = max(prev.end, curr.end). | [Notes 📝](topics/12-intervals.md#leetcode-56-merge-intervals) |
| [ ] | 57 | [Insert Interval](https://leetcode.com/problems/insert-interval/) | **Medium** | `O(N)` | `O(N)` | Add all intervals ending before newInterval starts, merge overlapping intervals with newInterval, then append rest. | [Notes 📝](topics/12-intervals.md#leetcode-57-insert-interval) |
| [ ] | 252 | [Meeting Rooms](https://leetcode.com/problems/meeting-rooms/) *(Premium - [Free Alt](https://www.lintcode.com/problem/920/))* | **Easy** | `O(N log N)` | `O(1)` | Sort by start time. Check if intervals[i].start < intervals[i-1].end for any adjacent pair. | [Notes 📝](topics/12-intervals.md#leetcode-252-meeting-rooms) |
| [ ] | 253 | [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/) *(Premium - [Free Alt](https://www.lintcode.com/problem/919/))* | **Medium** | `O(N log N)` | `O(N)` | Sort intervals by start time. Min-heap of end times. If start >= earliest end, pop heap; always push end time. Heap size is rooms needed. | [Notes 📝](topics/12-intervals.md#leetcode-253-meeting-rooms-ii) |
| [ ] | 435 | [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) | **Medium** | `O(N log N)` | `O(1)` | Interval scheduling greedy: sort by end time. Always keep interval with earliest end time; count overlaps removed. | [Notes 📝](topics/12-intervals.md#leetcode-435-non-overlapping-intervals) |
| [ ] | 452 | [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) | **Medium** | `O(N log N)` | `O(1)` | Sort balloons by end point. Greedily shoot arrow at current end point; skip balloons that start before or at arrow position. | [Notes 📝](topics/12-intervals.md#leetcode-452-minimum-number-of-arrows-to-burst-balloons) |
| [ ] | 1235 | [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/) | **Hard** | `O(N log N)` | `O(N)` | Weighted Interval Scheduling: Sort jobs by end time. DP with binary search (bisect_right) to find latest non-overlapping job. Either skip job or take profit + dp[prev]. | [Notes 📝](topics/12-intervals.md#leetcode-1235-maximum-profit-in-job-scheduling) |

### 13. [Greedy Scheduling / Sorting](topics/13-greedy-scheduling-sorting.md)

> *Making locally optimal choices at each decision point that provably lead to a globally optimal solution.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 45 | [Jump Game II](https://leetcode.com/problems/jump-game-ii/) | **Medium** | `O(N)` | `O(1)` | Track current jump boundary and farthest reachable index. When reaching current boundary, increment jump and update boundary. | [Notes 📝](topics/13-greedy-scheduling-sorting.md#leetcode-45-jump-game-ii) |
| [ ] | 55 | [Jump Game](https://leetcode.com/problems/jump-game/) | **Medium** | `O(N)` | `O(1)` | Track max reachable index so far. If i > max_reach, return false. Update max_reach = max(max_reach, i + nums[i]). | [Notes 📝](topics/13-greedy-scheduling-sorting.md#leetcode-55-jump-game) |
| [ ] | 406 | [Queue Reconstruction by Height](https://leetcode.com/problems/queue-reconstruction-by-height/) | **Medium** | `O(N^2)` | `O(N)` | Sort people descending by height; if same height, ascending by k. Insert each person into list at index k. | [Notes 📝](topics/13-greedy-scheduling-sorting.md#leetcode-406-queue-reconstruction-by-height) |
| [ ] | 621 | [Task Scheduler](https://leetcode.com/problems/task-scheduler/) | **Medium** | `O(N)` | `O(26)` | Greedy formula: find max task frequency M and number of tasks with count M. Minimum time is max(len(tasks), (M - 1)*(n + 1) + count_max). | [Notes 📝](topics/13-greedy-scheduling-sorting.md#leetcode-621-task-scheduler) |
| [ ] | 763 | [Partition Labels](https://leetcode.com/problems/partition-labels/) | **Medium** | `O(N)` | `O(26)` | Record last occurrence index of each character. Greedily extend partition end to max(last_idx); partition when i reaches end. | [Notes 📝](topics/13-greedy-scheduling-sorting.md#leetcode-763-partition-labels) |
| [ ] | 134 | [Gas Station](https://leetcode.com/problems/gas-station/) | **Medium** | `O(N)` | `O(1)` | If sum(gas) < sum(cost), impossible. Otherwise, track running tank; if tank < 0, reset tank = 0 and candidate start = i + 1. | [Notes 📝](topics/13-greedy-scheduling-sorting.md#leetcode-134-gas-station) |

### 14. [Linked List Manipulation](topics/14-linked-list-manipulation.md)

> *In-place pointer rewiring, sentinel dummy head patterns, reversal of subsegments, and interleaved cloning.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 21 | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | **Easy** | `O(N + M)` | `O(1)` | Dummy head node. Compare l1.val and l2.val, advance pointer of smaller node until one is exhausted, then append remainder. | [Notes 📝](topics/14-linked-list-manipulation.md#leetcode-21-merge-two-sorted-lists) |
| [ ] | 23 | [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | **Hard** | `O(N log K)` | `O(K)` | Min-heap of (node.val, i, node) for k list heads, or divide-and-conquer pairwise merge (like merge sort). | [Notes 📝](topics/14-linked-list-manipulation.md#leetcode-23-merge-k-sorted-lists) |
| [ ] | 24 | [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) | **Medium** | `O(N)` | `O(1)` | Dummy node. For pair (first, second), rewire prev.next = second, first.next = second.next, second.next = first. | [Notes 📝](topics/14-linked-list-manipulation.md#leetcode-24-swap-nodes-in-pairs) |
| [ ] | 25 | [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) | **Hard** | `O(N)` | `O(1)` | Check if k nodes exist. If so, reverse k nodes and recursively or iteratively connect with next reversed group. | [Notes 📝](topics/14-linked-list-manipulation.md#leetcode-25-reverse-nodes-in-k-group) |
| [ ] | 92 | [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) | **Medium** | `O(N)` | `O(1)` | Reach node before left. Reverse sublist of length (right - left + 1) by repeatedly moving next node to sublist head. | [Notes 📝](topics/14-linked-list-manipulation.md#leetcode-92-reverse-linked-list-ii) |
| [ ] | 138 | [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) | **Medium** | `O(N)` | `O(1)` | Interleave cloned nodes: A -> A' -> B -> B'. Assign random pointers A'.random = A.random.next. Detach original and cloned lists. | [Notes 📝](topics/14-linked-list-manipulation.md#leetcode-138-copy-list-with-random-pointer) |

### 15. [Tree DFS](topics/15-tree-dfs.md)

> *Recursive pre-order, in-order, and post-order depth-first traversals calculating path sums, heights, and subtree properties.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 104 | [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | **Easy** | `O(N)` | `O(H)` | Recursive DFS: max_depth(root) = 1 + max(max_depth(root.left), max_depth(root.right)). Base case root is null returns 0. | [Notes 📝](topics/15-tree-dfs.md#leetcode-104-maximum-depth-of-binary-tree) |
| [ ] | 112 | [Path Sum](https://leetcode.com/problems/path-sum/) | **Easy** | `O(N)` | `O(H)` | Subtract root.val from targetSum. If leaf node, return targetSum == 0; otherwise recurse on left and right children. | [Notes 📝](topics/15-tree-dfs.md#leetcode-112-path-sum) |
| [ ] | 113 | [Path Sum II](https://leetcode.com/problems/path-sum-ii/) | **Medium** | `O(N)` | `O(H)` | DFS with backtracking path list. Add root.val to path, recurse. If leaf and sum matches, record copy of path. Pop on return. | [Notes 📝](topics/15-tree-dfs.md#leetcode-113-path-sum-ii) |
| [ ] | 543 | [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) | **Easy** | `O(N)` | `O(H)` | Post-order DFS returning height. Update global max diameter = max(diameter, left_height + right_height) at each node. | [Notes 📝](topics/15-tree-dfs.md#leetcode-543-diameter-of-binary-tree) |
| [ ] | 124 | [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | **Hard** | `O(N)` | `O(H)` | Post-order DFS returning max single-branch gain max(0, branch). Global max path sum = max(res, root.val + left_gain + right_gain). | [Notes 📝](topics/15-tree-dfs.md#leetcode-124-binary-tree-maximum-path-sum) |
| [ ] | 226 | [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) | **Easy** | `O(N)` | `O(H)` | Swap root.left and root.right recursively for left and right subtrees. | [Notes 📝](topics/15-tree-dfs.md#leetcode-226-invert-binary-tree) |

### 16. [Tree BFS / Level Order](topics/16-tree-bfs-level-order.md)

> *Queue-driven breadth-first traversal visiting trees level by level to compute tree views, widths, and level aggregations.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 102 | [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) | **Medium** | `O(N)` | `O(W)` | Queue for BFS. Process level by level using queue length at start of each iteration. | [Notes 📝](topics/16-tree-bfs-level-order.md#leetcode-102-binary-tree-level-order-traversal) |
| [ ] | 103 | [Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) | **Medium** | `O(N)` | `O(W)` | Standard BFS level order. Reverse current level's list or use deque when depth is odd. | [Notes 📝](topics/16-tree-bfs-level-order.md#leetcode-103-binary-tree-zigzag-level-order-traversal) |
| [ ] | 199 | [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) | **Medium** | `O(N)` | `O(W)` | Level order BFS: take the last element of each level, or reverse pre-order DFS (visit right child first) recording first at each depth. | [Notes 📝](topics/16-tree-bfs-level-order.md#leetcode-199-binary-tree-right-side-view) |
| [ ] | 515 | [Find Largest Value in Each Tree Row](https://leetcode.com/problems/find-largest-value-in-each-tree-row/) | **Medium** | `O(N)` | `O(W)` | BFS level order tracking max value encountered across each level queue snapshot. | [Notes 📝](topics/16-tree-bfs-level-order.md#leetcode-515-find-largest-value-in-each-tree-row) |
| [ ] | 637 | [Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/) | **Easy** | `O(N)` | `O(W)` | BFS level order summing values at each level and dividing by level size. | [Notes 📝](topics/16-tree-bfs-level-order.md#leetcode-637-average-of-levels-in-binary-tree) |
| [ ] | 116 | [Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/) | **Medium** | `O(N)` | `O(1)` | Connect next pointers level by level. Use node.next established in parent level to link across subtrees without queue. | [Notes 📝](topics/16-tree-bfs-level-order.md#leetcode-116-populating-next-right-pointers-in-each-node) |

### 17. [BST Problems](topics/17-bst-problems.md)

> *Binary Search Tree properties where left < root < right; utilizing sorted in-order traversal and logarithmic lookup.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 98 | [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) | **Medium** | `O(N)` | `O(H)` | DFS passing valid range (min_val, max_val). Check min_val < root.val < max_val. Or verify inorder traversal is strictly increasing. | [Notes 📝](topics/17-bst-problems.md#leetcode-98-validate-binary-search-tree) |
| [ ] | 99 | [Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/) | **Medium** | `O(N)` | `O(H)` | Inorder traversal to find two swapped nodes (where prev.val > curr.val), then swap their values back. | [Notes 📝](topics/17-bst-problems.md#leetcode-99-recover-binary-search-tree) |
| [ ] | 230 | [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) | **Medium** | `O(H + K)` | `O(H)` | Inorder traversal of BST visits nodes in ascending order. Decrement k at each step; return when k reaches 0. | [Notes 📝](topics/17-bst-problems.md#leetcode-230-kth-smallest-element-in-a-bst) |
| [ ] | 235 | [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | **Medium** | `O(H)` | `O(1)` | If both p and q are smaller than root, go left. If both are greater, go right. Otherwise, root is the LCA. | [Notes 📝](topics/17-bst-problems.md#leetcode-235-lowest-common-ancestor-of-a-binary-search-tree) |
| [ ] | 450 | [Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/) | **Medium** | `O(H)` | `O(H)` | Search key in BST. If found: leaf -> delete; 1 child -> replace with child; 2 children -> replace with inorder successor then delete successor. | [Notes 📝](topics/17-bst-problems.md#leetcode-450-delete-node-in-a-bst) |
| [ ] | 700 | [Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/) | **Easy** | `O(H)` | `O(1)` | If val < root.val go left; if val > root.val go right; if equal return root; if null return null. | [Notes 📝](topics/17-bst-problems.md#leetcode-700-search-in-a-binary-search-tree) |

### 18. [Backtracking Basics](topics/18-backtracking-basics.md)

> *Exhaustive depth-first combinatorial search (permutations, combinations, subsets) using choose, explore, and unchoose.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 46 | [Permutations](https://leetcode.com/problems/permutations/) | **Medium** | `O(N * N!)` | `O(N)` | Generate all permutations by maintaining visited boolean array or in-place swapping elements in array. | [Notes 📝](topics/18-backtracking-basics.md#leetcode-46-permutations) |
| [ ] | 47 | [Permutations II](https://leetcode.com/problems/permutations-ii/) | **Medium** | `O(N * N!)` | `O(N)` | Sort array. Backtracking with visited array: skip duplicate nums[i] == nums[i-1] if !visited[i-1]. | [Notes 📝](topics/18-backtracking-basics.md#leetcode-47-permutations-ii) |
| [ ] | 77 | [Combinations](https://leetcode.com/problems/combinations/) | **Medium** | `O(C(N, K))` | `O(K)` | Combinations of k from 1..n: backtrack from start index. Prune loop if remaining elements cannot fill k. | [Notes 📝](topics/18-backtracking-basics.md#leetcode-77-combinations) |
| [ ] | 78 | [Subsets](https://leetcode.com/problems/subsets/) | **Medium** | `O(N * 2^N)` | `O(N)` | Power set: at each index, choose to include nums[i] or explore choices i..n. Append snapshot of path at every step. | [Notes 📝](topics/18-backtracking-basics.md#leetcode-78-subsets) |
| [ ] | 90 | [Subsets II](https://leetcode.com/problems/subsets-ii/) | **Medium** | `O(N * 2^N)` | `O(N)` | Sort array with duplicates. In loop for i in start..n, skip if i > start and nums[i] == nums[i-1]. | [Notes 📝](topics/18-backtracking-basics.md#leetcode-90-subsets-ii) |
| [ ] | 39 | [Combination Sum](https://leetcode.com/problems/combination-sum/) | **Medium** | `O(N^(T/M))` | `O(T/M)` | Sort candidates. Backtrack allowing same element reuse: recurse with same start index i, decrease target. | [Notes 📝](topics/18-backtracking-basics.md#leetcode-39-combination-sum) |

### 19. [Backtracking with Constraints](topics/19-backtracking-with-constraints.md)

> *Combinatorial search with state pruning, grid path-finding, diagonal conflict detection, and palindrome constraints.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 40 | [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/) | **Medium** | `O(2^N)` | `O(N)` | Sort candidates. Skip duplicates at same recursion depth (i > start and nums[i] == nums[i-1]). Each number used once. | [Notes 📝](topics/19-backtracking-with-constraints.md#leetcode-40-combination-sum-ii) |
| [ ] | 17 | [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | **Medium** | `O(4^N)` | `O(N)` | Map phone digits to character sets. Backtrack by expanding each possible letter at index digit_idx. | [Notes 📝](topics/19-backtracking-with-constraints.md#leetcode-17-letter-combinations-of-a-phone-number) |
| [ ] | 79 | [Word Search](https://leetcode.com/problems/word-search/) | **Medium** | `O(M * N * 3^L)` | `O(L)` | Grid DFS backtracking in 4 directions. Mark visited cell in-place with '#' and restore on backtrack. | [Notes 📝](topics/19-backtracking-with-constraints.md#leetcode-79-word-search) |
| [ ] | 131 | [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) | **Medium** | `O(N * 2^N)` | `O(N)` | Partition palindrome: check if s[start..i] is palindrome. If yes, add substring to path and recurse on i + 1. | [Notes 📝](topics/19-backtracking-with-constraints.md#leetcode-131-palindrome-partitioning) |
| [ ] | 51 | [N-Queens](https://leetcode.com/problems/n-queens/) | **Hard** | `O(N!)` | `O(N)` | N-Queens: track occupied columns, positive diagonals (r + c), and negative diagonals (r - c) with sets. | [Notes 📝](topics/19-backtracking-with-constraints.md#leetcode-51-n-queens) |
| [ ] | 52 | [N-Queens II](https://leetcode.com/problems/n-queens-ii/) | **Hard** | `O(N!)` | `O(N)` | Same as N-Queens (51) but only count valid board configurations instead of building strings. | [Notes 📝](topics/19-backtracking-with-constraints.md#leetcode-52-n-queens-ii) |

### 20. [Graph BFS / DFS](topics/20-graph-bfs-dfs.md)

> *Traversing connected components, shortest steps in unweighted grids, flood fills, and multi-source queue propagations.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 200 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | **Medium** | `O(M * N)` | `O(M * N)` | Iterate cells. When '1' found, increment count and DFS/BFS to sink entire connected island to '0'. | [Notes 📝](topics/20-graph-bfs-dfs.md#leetcode-200-number-of-islands) |
| [ ] | 695 | [Max Area of Island](https://leetcode.com/problems/max-area-of-island/) | **Medium** | `O(M * N)` | `O(M * N)` | DFS/BFS from each unvisited island cell calculating area. Return maximum area found. | [Notes 📝](topics/20-graph-bfs-dfs.md#leetcode-695-max-area-of-island) |
| [ ] | 733 | [Flood Fill](https://leetcode.com/problems/flood-fill/) | **Easy** | `O(M * N)` | `O(M * N)` | Flood fill: starting from (sr, sc), DFS/BFS to replace matching original color with new color. | [Notes 📝](topics/20-graph-bfs-dfs.md#leetcode-733-flood-fill) |
| [ ] | 994 | [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) | **Medium** | `O(M * N)` | `O(M * N)` | Multi-source BFS from all rotten oranges simultaneously. Track minutes until queue empty; check fresh count == 0. | [Notes 📝](topics/20-graph-bfs-dfs.md#leetcode-994-rotting-oranges) |
| [ ] | 1091 | [Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/) | **Medium** | `O(N^2)` | `O(N^2)` | BFS in 8 directions from (0,0) to (n-1, n-1) tracking path length. Return -1 if blocked. | [Notes 📝](topics/20-graph-bfs-dfs.md#leetcode-1091-shortest-path-in-binary-matrix) |
| [ ] | 1254 | [Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/) | **Medium** | `O(M * N)` | `O(M * N)` | Flood fill from boundaries to eliminate open islands, then count remaining unvisited 0-components. | [Notes 📝](topics/20-graph-bfs-dfs.md#leetcode-1254-number-of-closed-islands) |

### 21. [Topological Sort / DAG](topics/21-topological-sort-dag.md)

> *Linear ordering of vertices in Directed Acyclic Graphs (DAGs) using Kahn's in-degree queue or DFS post-order cycle detection.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 207 | [Course Schedule](https://leetcode.com/problems/course-schedule/) | **Medium** | `O(V + E)` | `O(V + E)` | Kahn's algorithm (indegree array + queue) or DFS 3-state cycle detection (unvisited, visiting, visited). | [Notes 📝](topics/21-topological-sort-dag.md#leetcode-207-course-schedule) |
| [ ] | 210 | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | **Medium** | `O(V + E)` | `O(V + E)` | Kahn's BFS: append nodes with 0 indegree to order; if order size == numCourses return order, else empty. | [Notes 📝](topics/21-topological-sort-dag.md#leetcode-210-course-schedule-ii) |
| [ ] | 802 | [Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/) | **Medium** | `O(V + E)` | `O(V + E)` | Nodes that do not lead to a cycle are safe. Reverse edges and run Kahn's, or 3-state DFS cycle detection. | [Notes 📝](topics/21-topological-sort-dag.md#leetcode-802-find-eventual-safe-states) |
| [ ] | 1462 | [Course Schedule IV](https://leetcode.com/problems/course-schedule-iv/) | **Medium** | `O(V^3 + Q)` | `O(V^2)` | Floyd-Warshall transitive closure matrix reachable[u][v] or BFS/DFS per query/prerequisite. | [Notes 📝](topics/21-topological-sort-dag.md#leetcode-1462-course-schedule-iv) |
| [ ] | 1203 | [Sort Items by Groups Respecting Dependencies](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/) | **Hard** | `O(V + E)` | `O(V + E)` | Double topological sort: first sort groups DAG, then sort items within each group DAG. | [Notes 📝](topics/21-topological-sort-dag.md#leetcode-1203-sort-items-by-groups-respecting-dependencies) |
| [ ] | 2115 | [Find All Possible Recipes from Given Supplies](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/) | **Medium** | `O(V + E)` | `O(V + E)` | Topological sort: treat recipes and ingredients as nodes. Initialize queue with available supplies. | [Notes 📝](topics/21-topological-sort-dag.md#leetcode-2115-find-all-possible-recipes-from-given-supplies) |

### 22. [Union Find / DSU](topics/22-union-find-dsu.md)

> *Disjoint Set Union with Path Compression and Union by Rank for near O(1) dynamic connectivity, cycle detection, and component tracking.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 547 | [Number of Provinces](https://leetcode.com/problems/number-of-provinces/) | **Medium** | `O(N^2 * alpha(N))` | `O(N)` | DSU with rank and path compression or DFS component count. Total provinces = distinct root parents. | [Notes 📝](topics/22-union-find-dsu.md#leetcode-547-number-of-provinces) |
| [ ] | 684 | [Redundant Connection](https://leetcode.com/problems/redundant-connection/) | **Medium** | `O(N * alpha(N))` | `O(N)` | Process edges sequentially in DSU. The first edge whose vertices already share the same root creates the cycle. | [Notes 📝](topics/22-union-find-dsu.md#leetcode-684-redundant-connection) |
| [ ] | 1319 | [Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/) | **Medium** | `O(N + E)` | `O(N)` | Need at least n - 1 cables. Use DSU to count connected components C. Answer is C - 1 cables to reconnect. | [Notes 📝](topics/22-union-find-dsu.md#leetcode-1319-number-of-operations-to-make-network-connected) |
| [ ] | 1579 | [Remove Max Number of Edges to Keep Graph Fully Traversable](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/) | **Hard** | `O(E * alpha(N))` | `O(N)` | Process Type 3 (shared) edges first in both Alice and Bob DSUs, then Type 1 and Type 2. Count redundant edges. | [Notes 📝](topics/22-union-find-dsu.md#leetcode-1579-remove-max-number-of-edges-to-keep-graph-fully-traversable) |
| [ ] | 990 | [Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/) | **Medium** | `O(N * alpha(26))` | `O(1)` | Union variables with '==' equations first. Then check if any '!=' equation has both variables with same root. | [Notes 📝](topics/22-union-find-dsu.md#leetcode-990-satisfiability-of-equality-equations) |
| [ ] | 1202 | [Smallest String With Swaps](https://leetcode.com/problems/smallest-string-with-swaps/) | **Medium** | `O(N log N)` | `O(N)` | Union connected indices. Group characters by connected component root, sort characters, and place back in order. | [Notes 📝](topics/22-union-find-dsu.md#leetcode-1202-smallest-string-with-swaps) |

### 23. [Shortest Path](topics/23-shortest-path.md)

> *Single-source and all-pairs shortest paths using Dijkstra's algorithm (min-heap), Bellman-Ford, and Floyd-Warshall.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 743 | [Network Delay Time](https://leetcode.com/problems/network-delay-time/) | **Medium** | `O(E log V)` | `O(V + E)` | Dijkstra's algorithm with min-heap from source k. Answer is max distance to all reachable nodes. | [Notes 📝](topics/23-shortest-path.md#leetcode-743-network-delay-time) |
| [ ] | 787 | [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) | **Medium** | `O(K * E)` | `O(V)` | Bellman-Ford / BFS with at most k + 1 edge relaxations, or modified Dijkstra tracking steps taken. | [Notes 📝](topics/23-shortest-path.md#leetcode-787-cheapest-flights-within-k-stops) |
| [ ] | 1514 | [Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/) | **Medium** | `O(E log V)` | `O(V + E)` | Modified Dijkstra: max-heap tracking maximum path probability. Probability multiplies along path. | [Notes 📝](topics/23-shortest-path.md#leetcode-1514-path-with-maximum-probability) |
| [ ] | 1631 | [Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/) | **Medium** | `O(R * C log(R * C))` | `O(R * C)` | Dijkstra on 2D grid where edge weight is abs(height[r2][c2] - height[r1][c1]), minimizing max effort. | [Notes 📝](topics/23-shortest-path.md#leetcode-1631-path-with-minimum-effort) |
| [ ] | 1334 | [Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/) | **Medium** | `O(N^3)` | `O(N^2)` | Floyd-Warshall all-pairs shortest paths. For each city, count reachable neighbors within distance threshold. | [Notes 📝](topics/23-shortest-path.md#leetcode-1334-find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance) |
| [ ] | 1976 | [Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/) | **Medium** | `O(E log V)` | `O(V + E)` | Dijkstra keeping dist[] and ways[] modulo 10^9+7. If shorter path found, update ways; if equal, add ways. | [Notes 📝](topics/23-shortest-path.md#leetcode-1976-number-of-ways-to-arrive-at-destination) |

### 24. [MST / Graph Greedy](topics/24-mst-graph-greedy.md)

> *Minimum Spanning Tree algorithms (Kruskal's using DSU, Prim's using min-heap) and minimax / maximin bottleneck path searches.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 1584 | [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) | **Medium** | `O(V^2)` | `O(V)` | Prim's or Kruskal's algorithm on complete Manhattan distance graph. Prim's with min-heap takes O(V^2). | [Notes 📝](topics/24-mst-graph-greedy.md#leetcode-1584-min-cost-to-connect-all-points) |
| [ ] | 1135 | [Connecting Cities With Minimum Cost](https://leetcode.com/problems/connecting-cities-with-minimum-cost/) *(Premium - [Free Alt](https://www.lintcode.com/problem/1459/))* | **Medium** | `O(E log E)` | `O(V)` | Kruskal's algorithm: sort edges by cost, union vertices. If tree connects all n nodes, return total cost. | [Notes 📝](topics/24-mst-graph-greedy.md#leetcode-1135-connecting-cities-with-minimum-cost) |
| [ ] | 1168 | [Optimize Water Distribution in a Village](https://leetcode.com/problems/optimize-water-distribution-in-a-village/) *(Premium - [Free Alt](https://www.lintcode.com/problem/1876/))* | **Hard** | `O((V + E) log V)` | `O(V + E)` | Virtual node 0 for building a well. Connect node 0 to house i with well cost. Run Kruskal's/Prim's MST on n+1 nodes. | [Notes 📝](topics/24-mst-graph-greedy.md#leetcode-1168-optimize-water-distribution-in-a-village) |
| [ ] | 1489 | [Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/) | **Hard** | `O(E^2 * alpha(V))` | `O(V + E)` | Find standard MST weight. Critical edge: MST weight increases if removed. Pseudo-critical: belongs to some MST. | [Notes 📝](topics/24-mst-graph-greedy.md#leetcode-1489-find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree) |
| [ ] | 778 | [Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/) | **Hard** | `O(N^2 log N)` | `O(N^2)` | Dijkstra or binary search + BFS: find path from (0,0) to (n-1, n-1) minimizing maximum elevation encountered. | [Notes 📝](topics/24-mst-graph-greedy.md#leetcode-778-swim-in-rising-water) |
| [ ] | 1102 | [Path With Maximum Minimum Value](https://leetcode.com/problems/path-with-maximum-minimum-value/) *(Premium - [Free Alt](https://www.lintcode.com/problem/1391/))* | **Medium** | `O(R * C log(R * C))` | `O(R * C)` | Max-heap Dijkstra or DSU sorted cells descending: find path with maximum bottleneck value from start to finish. | [Notes 📝](topics/24-mst-graph-greedy.md#leetcode-1102-path-with-maximum-minimum-value) |

### 25. [Trie](topics/25-trie.md)

> *Prefix tree data structure for efficient string insertion, prefix matching, auto-completion, and grid word searches.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 208 | [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) | **Medium** | `O(L) per op` | `O(Total Chars)` | Trie node with 26 children array/dict and is_end boolean. Implement insert, search, and startsWith. | [Notes 📝](topics/25-trie.md#leetcode-208-implement-trie-prefix-tree) |
| [ ] | 211 | [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | **Medium** | `O(26^D) worst` | `O(Total Chars)` | Trie search with wildcard '.': when '.' encountered, recursively try all 26 existing child branches. | [Notes 📝](topics/25-trie.md#leetcode-211-design-add-and-search-words-data-structure) |
| [ ] | 212 | [Word Search II](https://leetcode.com/problems/word-search-ii/) | **Hard** | `O(M * N * 4^L)` | `O(Total Chars)` | Insert word list into Trie. DFS on 2D grid matching Trie prefixes. Prune Trie nodes on word discovery. | [Notes 📝](topics/25-trie.md#leetcode-212-word-search-ii) |
| [ ] | 648 | [Replace Words](https://leetcode.com/problems/replace-words/) | **Medium** | `O(N * L)` | `O(Dict Chars)` | Store dictionary root words in Trie. For each sentence word, walk Trie to find shortest matching prefix. | [Notes 📝](topics/25-trie.md#leetcode-648-replace-words) |
| [ ] | 677 | [Map Sum Pairs](https://leetcode.com/problems/map-sum-pairs/) | **Medium** | `O(L) per op` | `O(Total Chars)` | Trie storing value at word end and sum of subtree values, or compute sum by traversing subtree from prefix node. | [Notes 📝](topics/25-trie.md#leetcode-677-map-sum-pairs) |
| [ ] | 1268 | [Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/) | **Medium** | `O(N log N + L)` | `O(Total Chars)` | Trie where each node stores up to 3 lexicographically smallest words, or sort products and use binary search per prefix. | [Notes 📝](topics/25-trie.md#leetcode-1268-search-suggestions-system) |

### 26. [Bit Manipulation](topics/26-bit-manipulation.md)

> *Harnessing binary bitwise operators (XOR, AND, OR, NOT, Shifts) and tricks like Brian Kernighan's (n & (n-1)) for O(1) space tricks.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 136 | [Single Number](https://leetcode.com/problems/single-number/) | **Easy** | `O(N)` | `O(1)` | XOR all numbers together: x ^ x = 0 and x ^ 0 = x. Duplicate numbers cancel out leaving the single number. | [Notes 📝](topics/26-bit-manipulation.md#leetcode-136-single-number) |
| [ ] | 137 | [Single Number II](https://leetcode.com/problems/single-number-ii/) | **Medium** | `O(N)` | `O(1)` | Count bits at each of 32 bit positions modulo 3, or use two bitmasks (ones, twos) with boolean logic. | [Notes 📝](topics/26-bit-manipulation.md#leetcode-137-single-number-ii) |
| [ ] | 191 | [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/) | **Easy** | `O(set bits)` | `O(1)` | Brian Kernighan's trick: n &= (n - 1) removes the lowest set bit in each iteration. | [Notes 📝](topics/26-bit-manipulation.md#leetcode-191-number-of-1-bits) |
| [ ] | 338 | [Counting Bits](https://leetcode.com/problems/counting-bits/) | **Easy** | `O(N)` | `O(N)` | DP with bit shifting: dp[i] = dp[i >> 1] + (i & 1). Lowest bit determines even/odd count. | [Notes 📝](topics/26-bit-manipulation.md#leetcode-338-counting-bits) |
| [ ] | 268 | [Missing Number](https://leetcode.com/problems/missing-number/) | **Easy** | `O(N)` | `O(1)` | XOR all numbers 0..n and all array elements, or Gauss sum n*(n+1)//2 - sum(nums). | [Notes 📝](topics/26-bit-manipulation.md#leetcode-268-missing-number) |
| [ ] | 190 | [Reverse Bits](https://leetcode.com/problems/reverse-bits/) | **Easy** | `O(1)` | `O(1)` | Iterate 32 times: shift result left, add lowest bit of n (n & 1), and shift n right. | [Notes 📝](topics/26-bit-manipulation.md#leetcode-190-reverse-bits) |

### 27. [1D DP Basics](topics/27-1d-dp-basics.md)

> *Fundamental linear dynamic programming, transition state relations, optimal substructure, and space optimization down to variables.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 70 | [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) | **Easy** | `O(N)` | `O(1)` | Fibonacci recurrence: dp[i] = dp[i - 1] + dp[i - 2]. Optimize space to two variables. | [Notes 📝](topics/27-1d-dp-basics.md#leetcode-70-climbing-stairs) |
| [ ] | 198 | [House Robber](https://leetcode.com/problems/house-robber/) | **Medium** | `O(N)` | `O(1)` | Rob or skip: dp[i] = max(dp[i - 1], dp[i - 2] + nums[i]). Maintain two previous values. | [Notes 📝](topics/27-1d-dp-basics.md#leetcode-198-house-robber) |
| [ ] | 213 | [House Robber II](https://leetcode.com/problems/house-robber-ii/) | **Medium** | `O(N)` | `O(1)` | House Robber on circular array: max(rob(nums[1:]), rob(nums[:-1])). Two linear passes. | [Notes 📝](topics/27-1d-dp-basics.md#leetcode-213-house-robber-ii) |
| [ ] | 322 | [Coin Change](https://leetcode.com/problems/coin-change/) | **Medium** | `O(amount * coins)` | `O(amount)` | Unbounded knapsack: dp[a] = min(dp[a], 1 + dp[a - coin]) initialized to infinity with dp[0] = 0. | [Notes 📝](topics/27-1d-dp-basics.md#leetcode-322-coin-change) |
| [ ] | 279 | [Perfect Squares](https://leetcode.com/problems/perfect-squares/) | **Medium** | `O(N * sqrt(N))` | `O(N)` | dp[i] = 1 + min(dp[i - j*j]) for j*j <= i, or Lagrange's four-square theorem in O(sqrt(N)). | [Notes 📝](topics/27-1d-dp-basics.md#leetcode-279-perfect-squares) |
| [ ] | 300 | [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) | **Medium** | `O(N log N)` | `O(N)` | Patience sorting / binary search: maintain tails array of smallest tail of all increasing subsequences. | [Notes 📝](topics/27-1d-dp-basics.md#leetcode-300-longest-increasing-subsequence) |

### 28. [Knapsack / Subset DP](topics/28-knapsack-subset-dp.md)

> *0/1 Knapsack (reverse iteration), Unbounded Knapsack (forward iteration), and Subset Sum decision formulations.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 416 | [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) | **Medium** | `O(N * target)` | `O(target)` | 0/1 Knapsack: target = sum // 2. If sum odd return false. 1D boolean array dp[j] |= dp[j - num] backwards. | [Notes 📝](topics/28-knapsack-subset-dp.md#leetcode-416-partition-equal-subset-sum) |
| [ ] | 494 | [Target Sum](https://leetcode.com/problems/target-sum/) | **Medium** | `O(N * target)` | `O(target)` | Transform to subset sum: (total + target) // 2. 0/1 Knapsack counting ways to form subset sum. | [Notes 📝](topics/28-knapsack-subset-dp.md#leetcode-494-target-sum) |
| [ ] | 518 | [Coin Change II](https://leetcode.com/problems/coin-change-ii/) | **Medium** | `O(amount * coins)` | `O(amount)` | Unbounded knapsack combinations: loop coin then amount: dp[a] += dp[a - coin]. | [Notes 📝](topics/28-knapsack-subset-dp.md#leetcode-518-coin-change-ii) |
| [ ] | 474 | [Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/) | **Medium** | `O(L * M * N)` | `O(M * N)` | 2D 0/1 knapsack: dp[i][j] = max strings with at most i zeros and j ones. Iterate backwards. | [Notes 📝](topics/28-knapsack-subset-dp.md#leetcode-474-ones-and-zeroes) |
| [ ] | 1049 | [Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/) | **Medium** | `O(N * sum)` | `O(sum)` | Partition into two subsets with minimal difference: find subset sum closest to sum // 2 via 0/1 knapsack. | [Notes 📝](topics/28-knapsack-subset-dp.md#leetcode-1049-last-stone-weight-ii) |
| [ ] | 879 | [Profitable Schemes](https://leetcode.com/problems/profitable-schemes/) | **Hard** | `O(G * P * N)` | `O(G * P)` | 3D/2D DP: dp[k][p] = schemes using k members with profit p. Accumulate profit up to minProfit. | [Notes 📝](topics/28-knapsack-subset-dp.md#leetcode-879-profitable-schemes) |

### 29. [Grid DP](topics/29-grid-dp.md)

> *2D state dynamic programming over matrices, calculating unique paths, minimum cost traversals, and maximal square submatrices.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 62 | [Unique Paths](https://leetcode.com/problems/unique-paths/) | **Medium** | `O(M * N)` | `O(N)` | dp[r][c] = dp[r-1][c] + dp[r][c-1]. Compress to 1D row array or use combinations formula C(m+n-2, m-1). | [Notes 📝](topics/29-grid-dp.md#leetcode-62-unique-paths) |
| [ ] | 63 | [Unique Paths II](https://leetcode.com/problems/unique-paths-ii/) | **Medium** | `O(M * N)` | `O(N)` | Same as Unique Paths, but if grid[r][c] == 1, set dp[r][c] = 0. | [Notes 📝](topics/29-grid-dp.md#leetcode-63-unique-paths-ii) |
| [ ] | 64 | [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/) | **Medium** | `O(M * N)` | `O(1) in-place` | dp[r][c] = grid[r][c] + min(dp[r-1][c], dp[r][c-1]). Update grid in-place or 1D row. | [Notes 📝](topics/29-grid-dp.md#leetcode-64-minimum-path-sum) |
| [ ] | 221 | [Maximal Square](https://leetcode.com/problems/maximal-square/) | **Medium** | `O(M * N)` | `O(N)` | dp[r][c] = 1 + min(dp[r-1][c], dp[r][c-1], dp[r-1][c-1]) when cell is '1'. Track max side length. | [Notes 📝](topics/29-grid-dp.md#leetcode-221-maximal-square) |
| [ ] | 931 | [Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/) | **Medium** | `O(N^2)` | `O(N)` | Falling path: dp[r][c] = matrix[r][c] + min(dp[r-1][c-1], dp[r-1][c], dp[r-1][c+1]). Update row by row. | [Notes 📝](topics/29-grid-dp.md#leetcode-931-minimum-falling-path-sum) |
| [ ] | 120 | [Triangle](https://leetcode.com/problems/triangle/) | **Medium** | `O(N^2)` | `O(1) in-place` | Bottom-up triangle DP: start from second to last row, triangle[r][c] += min(triangle[r+1][c], triangle[r+1][c+1]). | [Notes 📝](topics/29-grid-dp.md#leetcode-120-triangle) |

### 30. [String DP / Sequence DP](topics/30-string-dp-sequence-dp.md)

> *Dynamic programming on string pairs for Longest Common Subsequence (LCS), Edit Distance, Distinct Subsequences, and Palindromic partitions.*

| Mark | # | Title | Difficulty | Time | Space | Core Intuition | Guide |
|:----:|:---:|:------|:----------:|:----:|:-----:|:---------------|:-----:|
| [ ] | 1143 | [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) | **Medium** | `O(M * N)` | `O(N)` | LCS: if text1[i] == text2[j], dp[i][j] = 1 + dp[i-1][j-1]; else max(dp[i-1][j], dp[i][j-1]). | [Notes 📝](topics/30-string-dp-sequence-dp.md#leetcode-1143-longest-common-subsequence) |
| [ ] | 72 | [Edit Distance](https://leetcode.com/problems/edit-distance/) | **Medium** | `O(M * N)` | `O(N)` | Edit Distance: if s1[i]==s2[j] dp[i][j]=dp[i-1][j-1]; else 1 + min(insert, delete, replace). | [Notes 📝](topics/30-string-dp-sequence-dp.md#leetcode-72-edit-distance) |
| [ ] | 115 | [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) | **Hard** | `O(M * N)` | `O(N)` | Distinct Subsequences: if s[i]==t[j] dp[i][j] = dp[i-1][j-1] + dp[i-1][j]; else dp[i-1][j]. | [Notes 📝](topics/30-string-dp-sequence-dp.md#leetcode-115-distinct-subsequences) |
| [ ] | 583 | [Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/) | **Medium** | `O(M * N)` | `O(N)` | Delete distance = len(s1) + len(s2) - 2 * LCS(s1, s2). | [Notes 📝](topics/30-string-dp-sequence-dp.md#leetcode-583-delete-operation-for-two-strings) |
| [ ] | 97 | [Interleaving String](https://leetcode.com/problems/interleaving-string/) | **Medium** | `O(M * N)` | `O(N)` | Interleaving String: dp[i][j] is true if s3 matches s1[..i] and s2[..j]. 2D boolean grid. | [Notes 📝](topics/30-string-dp-sequence-dp.md#leetcode-97-interleaving-string) |
| [ ] | 1312 | [Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/) | **Hard** | `O(N^2)` | `O(N)` | Min insertions to make palindrome = len(s) - Longest Palindromic Subsequence(s). LPS is LCS(s, reverse(s)). | [Notes 📝](topics/30-string-dp-sequence-dp.md#leetcode-1312-minimum-insertion-steps-to-make-a-string-palindrome) |

## 🧠 Revision Framework (The 1-3-7-30 Rule)

To ensure long-term retention of patterns and problem-solving muscle memory, follow this revision cycle:

1. **Day 1 (Solve & Document):** Solve the problem, code it cleanly, and record key insights & edge cases in the Notes modal.

2. **Day 3 (Mental Walkthrough):** Open the problem without looking at your solution. Explain the state variables and transitions aloud.

3. **Day 7 (Speed Solve):** Re-code the problem from scratch within 15-20 minutes.

4. **Day 30 (Pattern Test):** Review flagged revision problems to test long-term retention.


## 🤝 Contributing & Personal Customization

- Feel free to clone or fork this repository.

- Export your personal notes anytime using the **Export JSON / Markdown** button in the web app.

- Commit your topic notes directly to git to maintain version-controlled revision history.
