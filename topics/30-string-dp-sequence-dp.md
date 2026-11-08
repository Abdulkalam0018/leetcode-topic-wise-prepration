# Topic 30: String DP / Sequence DP

> **Pattern Overview:** Dynamic programming on string pairs for Longest Common Subsequence (LCS), Edit Distance, Distinct Subsequences, and Palindromic partitions.

## 🧠 Algorithmic Blueprint / Mental Model

```python
dp = [[0] * (n + 1) for _ in range(m + 1)]
for i in range(1, m + 1):
    for j in range(1, n + 1):
        if s1[i-1] == s2[j-1]:
            dp[i][j] = 1 + dp[i-1][j-1]
        else:
            dp[i][j] = max(dp[i-1][j], dp[i][j-1])
```

## 📋 Problem Set

| Status | # | Problem Title | Difficulty | Time | Space | Key Insight |
|:------:|:--:|:--------------|:----------:|:----:|:-----:|:------------|
| [ ] | 1143 | [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) | **Medium** | `O(M * N)` | `O(N)` | LCS: if text1[i] == text2[j], dp[i][j] = 1 + dp[i-1][j-1]; else max(dp[i-1][j], dp[i][j-1]). |
| [ ] | 72 | [Edit Distance](https://leetcode.com/problems/edit-distance/) | **Medium** | `O(M * N)` | `O(N)` | Edit Distance: if s1[i]==s2[j] dp[i][j]=dp[i-1][j-1]; else 1 + min(insert, delete, replace). |
| [ ] | 115 | [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) | **Hard** | `O(M * N)` | `O(N)` | Distinct Subsequences: if s[i]==t[j] dp[i][j] = dp[i-1][j-1] + dp[i-1][j]; else dp[i-1][j]. |
| [ ] | 583 | [Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/) | **Medium** | `O(M * N)` | `O(N)` | Delete distance = len(s1) + len(s2) - 2 * LCS(s1, s2). |
| [ ] | 97 | [Interleaving String](https://leetcode.com/problems/interleaving-string/) | **Medium** | `O(M * N)` | `O(N)` | Interleaving String: dp[i][j] is true if s3 matches s1[..i] and s2[..j]. 2D boolean grid. |
| [ ] | 1312 | [Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/) | **Hard** | `O(N^2)` | `O(N)` | Min insertions to make palindrome = len(s) - Longest Palindromic Subsequence(s). LPS is LCS(s, reverse(s)). |
| [ ] | 10 | [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/) | **Hard** | `O(M * N)` | `O(M * N)` | 2D DP `dp[i][j]` matching s[0..i] with p[0..j]. If p[j-1] == '*', match 0 occurrences (dp[i][j-2]) or 1+ occurrences (dp[i-1][j] if chars match). |
| [ ] | 44 | [Wildcard Matching](https://leetcode.com/problems/wildcard-matching/) | **Hard** | `O(M * N)` | `O(N)` | 2D DP: if p[j-1] == '*', dp[i][j] = dp[i-1][j] (match 1+ char) or dp[i][j-1] (match 0 char). Or two pointers with backtrack on last '*' position in O(M*N). |
| [ ] | 214 | [Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/) | **Hard** | `O(N)` | `O(N)` | Find the longest palindrome prefix: construct `temp = s + '#' + s[::-1]` and run KMP table / rolling hash to find the longest common prefix-suffix length l. Prepend s[l:][::-1]. |
| [ ] | 312 | [Burst Balloons](https://leetcode.com/problems/burst-balloons/) | **Hard** | `O(N^3)` | `O(N^2)` | Interval DP: pad with 1s at ends. For sub-range (i, j), pick last balloon k to burst: `dp[i][j] = max(dp[i][j], nums[i]*nums[k]*nums[j] + dp[i][k] + dp[k][j])`. |

---

## 🔍 Deep Dive & Revision Notes

### LeetCode 1143: [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(M * N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** LCS: if text1[i] == text2[j], dp[i][j] = 1 + dp[i-1][j-1]; else max(dp[i-1][j], dp[i][j-1]).

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
# Solution template for LC 1143 - Longest Common Subsequence
# Time: O(M * N), Space: O(N)

```

---

### LeetCode 72: [Edit Distance](https://leetcode.com/problems/edit-distance/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(M * N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Edit Distance: if s1[i]==s2[j] dp[i][j]=dp[i-1][j-1]; else 1 + min(insert, delete, replace).

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
# Solution template for LC 72 - Edit Distance
# Time: O(M * N), Space: O(N)

```

---

### LeetCode 115: [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(M * N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Distinct Subsequences: if s[i]==t[j] dp[i][j] = dp[i-1][j-1] + dp[i-1][j]; else dp[i-1][j].

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
# Solution template for LC 115 - Distinct Subsequences
# Time: O(M * N), Space: O(N)

```

---

### LeetCode 583: [Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(M * N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Delete distance = len(s1) + len(s2) - 2 * LCS(s1, s2).

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
# Solution template for LC 583 - Delete Operation for Two Strings
# Time: O(M * N), Space: O(N)

```

---

### LeetCode 97: [Interleaving String](https://leetcode.com/problems/interleaving-string/)

- **Difficulty:** Medium
- **Target Time Complexity:** `O(M * N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Interleaving String: dp[i][j] is true if s3 matches s1[..i] and s2[..j]. 2D boolean grid.

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
# Solution template for LC 97 - Interleaving String
# Time: O(M * N), Space: O(N)

```

---

### LeetCode 1312: [Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N^2)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Min insertions to make palindrome = len(s) - Longest Palindromic Subsequence(s). LPS is LCS(s, reverse(s)).

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
# Solution template for LC 1312 - Minimum Insertion Steps to Make a String Palindrome
# Time: O(N^2), Space: O(N)

```

---

### LeetCode 10: [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(M * N)`
- **Target Space Complexity:** `O(M * N)`
- **Core Intuition:** 2D DP `dp[i][j]` matching s[0..i] with p[0..j]. If p[j-1] == '*', match 0 occurrences (dp[i][j-2]) or 1+ occurrences (dp[i-1][j] if chars match).

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
# Solution template for LC 10 - Regular Expression Matching
# Time: O(M * N), Space: O(M * N)

```

---

### LeetCode 44: [Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(M * N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** 2D DP: if p[j-1] == '*', dp[i][j] = dp[i-1][j] (match 1+ char) or dp[i][j-1] (match 0 char). Or two pointers with backtrack on last '*' position in O(M*N).

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
# Solution template for LC 44 - Wildcard Matching
# Time: O(M * N), Space: O(N)

```

---

### LeetCode 214: [Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N)`
- **Target Space Complexity:** `O(N)`
- **Core Intuition:** Find the longest palindrome prefix: construct `temp = s + '#' + s[::-1]` and run KMP table / rolling hash to find the longest common prefix-suffix length l. Prepend s[l:][::-1].

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
# Solution template for LC 214 - Shortest Palindrome
# Time: O(N), Space: O(N)

```

---

### LeetCode 312: [Burst Balloons](https://leetcode.com/problems/burst-balloons/)

- **Difficulty:** Hard
- **Target Time Complexity:** `O(N^3)`
- **Target Space Complexity:** `O(N^2)`
- **Core Intuition:** Interval DP: pad with 1s at ends. For sub-range (i, j), pick last balloon k to burst: `dp[i][j] = max(dp[i][j], nums[i]*nums[k]*nums[j] + dp[i][k] + dp[k][j])`.

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
# Solution template for LC 312 - Burst Balloons
# Time: O(N^3), Space: O(N^2)

```

---

[← Back to Master README](../README.md)
