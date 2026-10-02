/**
 * LeetCode Topic-Wise Preparation & Revision Tracker
 * Interactive Application Controller
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'leetcode_tracker_data_v1';
  const THEME_KEY = 'leetcode_tracker_theme';

  // State
  let trackerState = {
    problems: {}, // { [pid]: { solved: boolean, starred: boolean, notes: string, updatedAt: number } }
    collapsedTopics: {} // { [topicId]: boolean }
  };

  let activeFilters = {
    search: '',
    topic: 'all',
    status: 'all',
    diff: 'all'
  };

  let currentModalProblem = null;
  let autoSaveTimeout = null;

  // DOM Elements
  const topicsContainer = document.getElementById('topicsContainer');
  const searchInput = document.getElementById('searchInput');
  const topicSelect = document.getElementById('topicSelect');
  const statusPillsGroup = document.getElementById('statusPillsGroup');
  const diffPillsGroup = document.getElementById('diffPillsGroup');
  const toggleAllAccordionBtn = document.getElementById('toggleAllAccordionBtn');
  const randomBtn = document.getElementById('randomBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const exportJsonBtn = document.getElementById('exportJsonBtn');
  const exportMdBtn = document.getElementById('exportMdBtn');
  const importJsonBtn = document.getElementById('importJsonBtn');
  const importFileInput = document.getElementById('importFileInput');
  const toast = document.getElementById('toast');

  // Stats Elements
  const totalSolvedCount = document.getElementById('totalSolvedCount');
  const totalProgressBar = document.getElementById('totalProgressBar');
  const totalPercentBadge = document.getElementById('totalPercentBadge');
  const easySolvedCount = document.getElementById('easySolvedCount');
  const easyTotalCount = document.getElementById('easyTotalCount');
  const easyProgressBar = document.getElementById('easyProgressBar');
  const easyPercentBadge = document.getElementById('easyPercentBadge');
  const mediumSolvedCount = document.getElementById('mediumSolvedCount');
  const mediumTotalCount = document.getElementById('mediumTotalCount');
  const mediumProgressBar = document.getElementById('mediumProgressBar');
  const mediumPercentBadge = document.getElementById('mediumPercentBadge');
  const hardSolvedCount = document.getElementById('hardSolvedCount');
  const hardTotalCount = document.getElementById('hardTotalCount');
  const hardProgressBar = document.getElementById('hardProgressBar');
  const hardPercentBadge = document.getElementById('hardPercentBadge');
  const starredCount = document.getElementById('starredCount');
  const starredProgressBar = document.getElementById('starredProgressBar');

  // Notes Modal Elements
  const notesModal = document.getElementById('notesModal');
  const closeNotesModalBtn = document.getElementById('closeNotesModalBtn');
  const modalProblemId = document.getElementById('modalProblemId');
  const modalProblemTitle = document.getElementById('modalProblemTitle');
  const modalProblemDiff = document.getElementById('modalProblemDiff');
  const modalProblemTopic = document.getElementById('modalProblemTopic');
  const modalProblemComplexity = document.getElementById('modalProblemComplexity');
  const modalProblemLink = document.getElementById('modalProblemLink');
  const modalProblemHint = document.getElementById('modalProblemHint');
  const modalSolvedCheckbox = document.getElementById('modalSolvedCheckbox');
  const modalStarredCheckbox = document.getElementById('modalStarredCheckbox');
  const modalNotesTextarea = document.getElementById('modalNotesTextarea');
  const autoSaveStatus = document.getElementById('autoSaveStatus');
  const saveNoteBtn = document.getElementById('saveNoteBtn');
  const copyNoteBtn = document.getElementById('copyNoteBtn');
  const clearNoteBtn = document.getElementById('clearNoteBtn');

  // Cheat Sheet Modal Elements
  const cheatSheetModal = document.getElementById('cheatSheetModal');
  const closeCheatSheetBtn = document.getElementById('closeCheatSheetBtn');
  const cheatSheetTopicTitle = document.getElementById('cheatSheetTopicTitle');
  const cheatSheetDescription = document.getElementById('cheatSheetDescription');
  const cheatSheetCode = document.getElementById('cheatSheetCode');

  // Initialize
  function init() {
    loadState();
    initTheme();
    populateTopicSelect();
    renderAll();
    setupEventListeners();
  }

  // Load from LocalStorage
  function loadState() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = jsonParse(stored);
        if (parsed && parsed.problems) {
          trackerState.problems = parsed.problems;
        }
        if (parsed && parsed.collapsedTopics) {
          trackerState.collapsedTopics = parsed.collapsedTopics;
        }
      }
    } catch (e) {
      console.error('Error loading state from localStorage:', e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(trackerState));
      updateStats();
    } catch (e) {
      console.error('Error saving state to localStorage:', e);
    }
  }

  function jsonParse(str) {
    try {
      return JSON.parse(str);
    } catch (e) {
      return null;
    }
  }

  // Theme Management
  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
    updateThemeIcon(nextTheme);
    showToast(`Switched to ${nextTheme} mode`);
  }

  function updateThemeIcon(theme) {
    const icon = document.getElementById('themeIcon');
    if (theme === 'dark') {
      icon.innerHTML = '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>';
    } else {
      icon.innerHTML = '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>';
    }
  }

  // Populate Topic Dropdown
  function populateTopicSelect() {
    if (!window.LEETCODE_TOPICS_DATA) return;
    topicSelect.innerHTML = '<option value="all">All 30 Topics</option>';
    window.LEETCODE_TOPICS_DATA.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.id;
      opt.textContent = `${t.id}. ${t.name}`;
      topicSelect.appendChild(opt);
    });
  }

  // Render Everything
  function renderAll() {
    renderTopics();
    updateStats();
  }

  // Render Topic Cards & Problem Tables
  function renderTopics() {
    if (!window.LEETCODE_TOPICS_DATA) return;
    topicsContainer.innerHTML = '';

    const searchTerm = activeFilters.search.toLowerCase().trim();
    const filterTopic = activeFilters.topic;
    const filterStatus = activeFilters.status;
    const filterDiff = activeFilters.diff;

    let visibleTopicsCount = 0;

    window.LEETCODE_TOPICS_DATA.forEach(topic => {
      // Check if topic matches topic filter
      if (filterTopic !== 'all' && String(topic.id) !== String(filterTopic)) {
        return;
      }

      // Filter problems inside topic
      const filteredProblems = topic.problems.filter(p => {
        const pState = trackerState.problems[p.id] || { solved: false, starred: false, notes: '' };
        
        // Search filter
        if (searchTerm) {
          const matchId = String(p.id) === searchTerm || String(p.id).includes(searchTerm);
          const matchTitle = p.title.toLowerCase().includes(searchTerm);
          const matchHint = p.hint.toLowerCase().includes(searchTerm);
          const matchTopic = topic.name.toLowerCase().includes(searchTerm);
          if (!matchId && !matchTitle && !matchHint && !matchTopic) return false;
        }

        // Status filter
        if (filterStatus === 'solved' && !pState.solved) return false;
        if (filterStatus === 'starred' && !pState.starred) return false;
        if (filterStatus === 'unsolved' && pState.solved) return false;

        // Difficulty filter
        if (filterDiff !== 'all' && p.difficulty !== filterDiff) return false;

        return true;
      });

      // If filtering and no problems match, hide topic
      if (filteredProblems.length === 0 && (searchTerm || filterStatus !== 'all' || filterDiff !== 'all')) {
        return;
      }

      visibleTopicsCount++;

      // Compute topic completion stats
      let topicSolved = 0;
      topic.problems.forEach(p => {
        if (trackerState.problems[p.id]?.solved) topicSolved++;
      });
      const topicTotal = topic.problems.length;
      const isCompleted = topicSolved === topicTotal;
      const isCollapsed = Boolean(trackerState.collapsedTopics[topic.id]);

      // Create topic card element
      const card = document.createElement('div');
      card.className = `topic-card ${isCollapsed ? 'collapsed' : ''}`;
      card.id = `topic-card-${topic.id}`;

      // Header HTML
      const headerHTML = `
        <div class="topic-header" data-topic-id="${topic.id}">
          <div class="topic-title-area">
            <span class="topic-number">${topic.id}</span>
            <span class="topic-name">${topic.name}</span>
          </div>
          <div class="topic-meta">
            <button class="btn btn-sm cheat-sheet-btn" data-cheat-topic="${topic.id}" title="View Topic Cheat Sheet & Template">
              💡 Cheat Sheet
            </button>
            <span class="topic-progress-badge ${isCompleted ? 'completed' : ''}">
              ${topicSolved} / ${topicTotal} Solved
            </span>
            <svg class="topic-toggle-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      `;

      // Body HTML
      let rowsHTML = '';
      filteredProblems.forEach(p => {
        const pState = trackerState.problems[p.id] || { solved: false, starred: false, notes: '' };
        const hasNotes = Boolean(pState.notes && pState.notes.trim().length > 0);

        let diffBadgeClass = 'badge-medium';
        if (p.difficulty === 'Easy') diffBadgeClass = 'badge-easy';
        if (p.difficulty === 'Hard') diffBadgeClass = 'badge-hard';

        rowsHTML += `
          <tr class="problem-row ${pState.solved ? 'is-solved' : ''}" id="problem-row-${p.id}">
            <!-- Solved Checkbox -->
            <td style="width: 40px; text-align: center;">
              <button class="check-btn ${pState.solved ? 'checked' : ''}" data-action="toggle-solved" data-problem-id="${p.id}" title="${pState.solved ? 'Mark as Unsolved' : 'Mark as Solved'}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </button>
            </td>

            <!-- Star Revision Flag -->
            <td style="width: 36px; text-align: center;">
              <button class="star-btn ${pState.starred ? 'starred' : ''}" data-action="toggle-starred" data-problem-id="${p.id}" title="${pState.starred ? 'Remove Star' : 'Mark for Revision'}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="${pState.starred ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </button>
            </td>

            <!-- Problem Title & Link -->
            <td>
              <span class="problem-id">#${p.id}</span>
              <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="problem-link">
                ${p.title}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.6;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
              ${p.paid_only ? `<a href="${p.alt_url || '#'}" target="_blank" class="badge badge-premium" title="Free LintCode mirror for Premium problem">Free Alt</a>` : ''}
            </td>

            <!-- Difficulty -->
            <td style="width: 100px;">
              <span class="badge ${diffBadgeClass}">${p.difficulty}</span>
            </td>

            <!-- Complexity -->
            <td style="width: 140px;">
              <span class="complexity-tag">${p.time}</span>
            </td>

            <!-- Intuition / Pattern Hint -->
            <td>
              <span class="hint-chip" title="${p.hint}">💡 ${p.hint}</span>
            </td>

            <!-- Revision Notes Action -->
            <td style="width: 110px; text-align: right;">
              <button class="notes-btn ${hasNotes ? 'has-notes' : ''}" data-action="open-notes" data-problem-id="${p.id}">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                ${hasNotes ? 'Notes ✓' : 'Note +'}
              </button>
            </td>
          </tr>
        `;
      });

      const bodyHTML = `
        <div class="topic-body">
          <table class="problems-table">
            <thead>
              <tr>
                <th style="width: 40px; text-align: center;">Done</th>
                <th style="width: 36px; text-align: center;">Rev</th>
                <th>Problem Title</th>
                <th style="width: 100px;">Diff</th>
                <th style="width: 140px;">Time Target</th>
                <th>Core Intuition</th>
                <th style="width: 110px; text-align: right;">Notes</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHTML}
            </tbody>
          </table>
        </div>
      `;

      card.innerHTML = headerHTML + bodyHTML;
      topicsContainer.appendChild(card);
    });

    if (visibleTopicsCount === 0) {
      topicsContainer.innerHTML = `
        <div style="text-align: center; padding: 4rem 1rem; color: var(--text-muted); background: var(--bg-secondary); border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
          <p style="font-size: 1.1rem; font-weight: 500;">No problems match your current search/filters.</p>
          <button id="resetFiltersBtn" class="btn btn-primary" style="margin-top: 1rem;">Reset Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          activeFilters.search = '';
          activeFilters.topic = 'all';
          activeFilters.status = 'all';
          activeFilters.diff = 'all';
          searchInput.value = '';
          topicSelect.value = 'all';
          document.querySelectorAll('.filter-pill').forEach(p => {
            if (p.getAttribute('data-value') === 'all') p.classList.add('active');
            else p.classList.remove('active');
          });
          renderAll();
        });
      }
    }
  }

  // Update Global Dashboard Metrics
  function updateStats() {
    if (!window.LEETCODE_TOPICS_DATA) return;

    let total = 0;
    let solved = 0;
    let easyTotal = 0, easySolved = 0;
    let mediumTotal = 0, mediumSolved = 0;
    let hardTotal = 0, hardSolved = 0;
    let starred = 0;

    window.LEETCODE_TOPICS_DATA.forEach(topic => {
      topic.problems.forEach(p => {
        total++;
        const pState = trackerState.problems[p.id] || { solved: false, starred: false };
        if (pState.solved) solved++;
        if (pState.starred) starred++;

        if (p.difficulty === 'Easy') {
          easyTotal++;
          if (pState.solved) easySolved++;
        } else if (p.difficulty === 'Medium') {
          mediumTotal++;
          if (pState.solved) mediumSolved++;
        } else if (p.difficulty === 'Hard') {
          hardTotal++;
          if (pState.solved) hardSolved++;
        }
      });
    });

    const totalPct = total > 0 ? Math.round((solved / total) * 100) : 0;
    const easyPct = easyTotal > 0 ? Math.round((easySolved / easyTotal) * 100) : 0;
    const mediumPct = mediumTotal > 0 ? Math.round((mediumSolved / mediumTotal) * 100) : 0;
    const hardPct = hardTotal > 0 ? Math.round((hardSolved / hardTotal) * 100) : 0;

    totalSolvedCount.textContent = solved;
    totalPercentBadge.textContent = `${totalPct}%`;
    totalProgressBar.style.width = `${totalPct}%`;

    easySolvedCount.textContent = easySolved;
    easyTotalCount.textContent = `/ ${easyTotal}`;
    easyPercentBadge.textContent = `${easyPct}%`;
    easyProgressBar.style.width = `${easyPct}%`;

    mediumSolvedCount.textContent = mediumSolved;
    mediumTotalCount.textContent = `/ ${mediumTotal}`;
    mediumPercentBadge.textContent = `${mediumPct}%`;
    mediumProgressBar.style.width = `${mediumPct}%`;

    hardSolvedCount.textContent = hardSolved;
    hardTotalCount.textContent = `/ ${hardTotal}`;
    hardPercentBadge.textContent = `${hardPct}%`;
    hardProgressBar.style.width = `${hardPct}%`;

    starredCount.textContent = starred;
    starredProgressBar.style.width = `${total > 0 ? Math.min(100, Math.round((starred / total) * 100)) : 0}%`;
  }

  // Find problem metadata across topics
  function findProblemMeta(pid) {
    if (!window.LEETCODE_TOPICS_DATA) return null;
    const numId = Number(pid);
    for (const t of window.LEETCODE_TOPICS_DATA) {
      for (const p of t.problems) {
        if (p.id === numId) {
          return { ...p, topicName: t.name };
        }
      }
    }
    return null;
  }

  // Notes Modal Logic
  function openNotesModal(pid) {
    const meta = findProblemMeta(pid);
    if (!meta) return;

    currentModalProblem = meta;
    const pState = trackerState.problems[meta.id] || { solved: false, starred: false, notes: '' };

    modalProblemId.textContent = `#${meta.id}`;
    modalProblemTitle.textContent = meta.title;
    modalProblemDiff.textContent = meta.difficulty;
    modalProblemDiff.className = `badge badge-${meta.difficulty.toLowerCase()}`;
    modalProblemTopic.textContent = meta.topicName;
    modalProblemComplexity.textContent = `${meta.time} | ${meta.space}`;
    modalProblemLink.href = meta.url;
    modalProblemHint.textContent = meta.hint;

    modalSolvedCheckbox.checked = Boolean(pState.solved);
    modalStarredCheckbox.checked = Boolean(pState.starred);
    modalNotesTextarea.value = pState.notes || '';

    autoSaveStatus.textContent = pState.updatedAt ? `Last saved: ${new Date(pState.updatedAt).toLocaleTimeString()}` : 'Ready to write';
    notesModal.classList.add('active');
    modalNotesTextarea.focus();
  }

  function closeNotesModal() {
    saveCurrentModalNote();
    notesModal.classList.remove('active');
    currentModalProblem = null;
  }

  function saveCurrentModalNote() {
    if (!currentModalProblem) return;
    const pid = currentModalProblem.id;

    if (!trackerState.problems[pid]) {
      trackerState.problems[pid] = { solved: false, starred: false, notes: '' };
    }

    trackerState.problems[pid].solved = modalSolvedCheckbox.checked;
    trackerState.problems[pid].starred = modalStarredCheckbox.checked;
    trackerState.problems[pid].notes = modalNotesTextarea.value;
    trackerState.problems[pid].updatedAt = Date.now();

    saveState();
    autoSaveStatus.textContent = `Saved at ${new Date().toLocaleTimeString()}`;
    renderTopics(); // Update table badges & row styling
  }

  // Cheat Sheet Modal Logic
  function openCheatSheetModal(topicId) {
    if (!window.LEETCODE_TOPICS_DATA) return;
    const topic = window.LEETCODE_TOPICS_DATA.find(t => String(t.id) === String(topicId));
    if (!topic) return;

    cheatSheetTopicTitle.textContent = `${topic.id}. ${topic.name} Blueprint`;
    cheatSheetDescription.textContent = topic.description;
    cheatSheetCode.textContent = topic.template;
    cheatSheetModal.classList.add('active');
  }

  function closeCheatSheetModal() {
    cheatSheetModal.classList.remove('active');
  }

  // Quick Template Insertion
  function insertTemplate(type) {
    if (!currentModalProblem) return;
    let snippet = '';
    if (type === 'intuition') {
      snippet = `\n### 💡 Key Intuition:\n- ${currentModalProblem.hint}\n`;
    } else if (type === 'complexity') {
      snippet = `\n### ⏱ Complexity:\n- Time: ${currentModalProblem.time}\n- Space: ${currentModalProblem.space}\n`;
    } else if (type === 'edgecases') {
      snippet = `\n### ⚠️ Edge Cases:\n1. Empty input / null checks\n2. Single element or boundary limits\n3. Negative numbers / zeros / duplicates\n`;
    } else if (type === 'code') {
      snippet = `\n\`\`\`python\n# Solution for LC ${currentModalProblem.id}: ${currentModalProblem.title}\ndef solve():\n    pass\n\`\`\`\n`;
    }

    const cursorPos = modalNotesTextarea.selectionStart;
    const textBefore = modalNotesTextarea.value.substring(0, cursorPos);
    const textAfter = modalNotesTextarea.value.substring(cursorPos);
    modalNotesTextarea.value = textBefore + snippet + textAfter;
    modalNotesTextarea.focus();
    triggerAutoSave();
  }

  function triggerAutoSave() {
    autoSaveStatus.textContent = 'Saving...';
    clearTimeout(autoSaveTimeout);
    autoSaveTimeout = setTimeout(() => {
      saveCurrentModalNote();
    }, 600);
  }

  // Toast Notification
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Export JSON Backup
  function exportJson() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(trackerState, null, 2));
    const dlAnchor = document.createElement('a');
    const dateStr = new Date().toISOString().split('T')[0];
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `leetcode_revision_backup_${dateStr}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
    showToast("Progress and notes backup exported to JSON!");
  }

  // Export Notes to Markdown
  function exportMarkdown() {
    if (!window.LEETCODE_TOPICS_DATA) return;
    let md = `# 📝 My Personal LeetCode Revision Notes\n`;
    md += `*Exported on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}*\n\n`;

    let notesCount = 0;

    window.LEETCODE_TOPICS_DATA.forEach(topic => {
      let topicNotes = '';
      topic.problems.forEach(p => {
        const pState = trackerState.problems[p.id];
        if (pState && pState.notes && pState.notes.trim().length > 0) {
          notesCount++;
          const statusStr = pState.solved ? '✅ Solved' : '⏳ In Progress';
          const starStr = pState.starred ? '⭐ Marked for Revision' : '';
          topicNotes += `### LeetCode ${p.id}: [${p.title}](${p.url})\n`;
          topicNotes += `- **Difficulty:** ${p.difficulty} | **Target Time:** \`${p.time}\` | **Status:** ${statusStr} ${starStr}\n`;
          topicNotes += `- **Pattern Hint:** ${p.hint}\n\n`;
          topicNotes += `#### My Revision Notes:\n${pState.notes.trim()}\n\n---\n\n`;
        }
      });

      if (topicNotes) {
        md += `## Topic ${topic.id}: ${topic.name}\n\n`;
        md += topicNotes;
      }
    });

    if (notesCount === 0) {
      showToast("No personal notes found to export. Write some notes first!");
      return;
    }

    const dataStr = "data:text/markdown;charset=utf-8," + encodeURIComponent(md);
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `My_LeetCode_Revision_Notes_${new Date().toISOString().split('T')[0]}.md`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
    showToast(`Exported ${notesCount} personal revision notes to Markdown!`);
  }

  // Import JSON Backup
  function importJson(file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      try {
        const imported = JSON.parse(event.target.result);
        if (imported && imported.problems) {
          trackerState.problems = Object.assign({}, trackerState.problems, imported.problems);
          if (imported.collapsedTopics) {
            trackerState.collapsedTopics = Object.assign({}, trackerState.collapsedTopics, imported.collapsedTopics);
          }
          saveState();
          renderAll();
          showToast("Data imported and synced successfully!");
        } else {
          alert("Invalid backup JSON format.");
        }
      } catch (err) {
        alert("Failed to parse JSON file.");
      }
    };
    reader.readAsText(file);
  }

  // Random Unsolved Picker
  function pickRandomUnsolved() {
    if (!window.LEETCODE_TOPICS_DATA) return;
    const unsolvedList = [];
    window.LEETCODE_TOPICS_DATA.forEach(t => {
      t.problems.forEach(p => {
        if (!trackerState.problems[p.id]?.solved) {
          unsolvedList.push(p);
        }
      });
    });

    if (unsolvedList.length === 0) {
      showToast("🎉 Incredible! You've solved all 180 questions!");
      return;
    }

    const rand = unsolvedList[Math.floor(Math.random() * unsolvedList.length)];
    // Expand topic card
    trackerState.collapsedTopics[rand.topicId] = false;
    saveState();
    renderTopics();

    // Scroll to row and highlight
    setTimeout(() => {
      const row = document.getElementById(`problem-row-${rand.id}`);
      if (row) {
        row.scrollIntoView({ behavior: 'smooth', block: 'center' });
        row.style.outline = '2px solid var(--accent-primary)';
        row.style.backgroundColor = 'var(--accent-glow)';
        setTimeout(() => {
          row.style.outline = '';
          row.style.backgroundColor = '';
        }, 3000);
        showToast(`Selected #${rand.id}: ${rand.title}`);
      }
    }, 150);
  }

  // Setup Event Listeners
  function setupEventListeners() {
    // Theme toggle
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Search input
    searchInput.addEventListener('input', (e) => {
      activeFilters.search = e.target.value;
      renderTopics();
    });

    // Topic select
    topicSelect.addEventListener('change', (e) => {
      activeFilters.topic = e.target.value;
      renderTopics();
    });

    // Status filter pills
    statusPillsGroup.addEventListener('click', (e) => {
      const pill = e.target.closest('.filter-pill');
      if (!pill) return;
      statusPillsGroup.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilters.status = pill.getAttribute('data-value');
      renderTopics();
    });

    // Difficulty filter pills
    diffPillsGroup.addEventListener('click', (e) => {
      const pill = e.target.closest('.filter-pill');
      if (!pill) return;
      diffPillsGroup.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilters.diff = pill.getAttribute('data-value');
      renderTopics();
    });

    // Random picker
    randomBtn.addEventListener('click', pickRandomUnsolved);

    // Toggle All Accordions
    let allExpanded = true;
    toggleAllAccordionBtn.addEventListener('click', () => {
      allExpanded = !allExpanded;
      if (!window.LEETCODE_TOPICS_DATA) return;
      window.LEETCODE_TOPICS_DATA.forEach(t => {
        trackerState.collapsedTopics[t.id] = !allExpanded;
      });
      toggleAllAccordionBtn.textContent = allExpanded ? '↕ Collapse All' : '↕ Expand All';
      saveState();
      renderTopics();
    });

    // Container clicks (Accordions, Solved toggles, Star toggles, Notes button, Cheat sheet)
    topicsContainer.addEventListener('click', (e) => {
      // Toggle Topic Accordion Header
      const header = e.target.closest('.topic-header');
      const cheatBtn = e.target.closest('.cheat-sheet-btn');

      if (cheatBtn) {
        e.stopPropagation();
        const tid = cheatBtn.getAttribute('data-cheat-topic');
        openCheatSheetModal(tid);
        return;
      }

      if (header) {
        const tid = header.getAttribute('data-topic-id');
        trackerState.collapsedTopics[tid] = !trackerState.collapsedTopics[tid];
        saveState();
        const card = document.getElementById(`topic-card-${tid}`);
        if (card) {
          card.classList.toggle('collapsed', trackerState.collapsedTopics[tid]);
        }
        return;
      }

      // Checkbox Toggle Solved
      const checkBtn = e.target.closest('[data-action="toggle-solved"]');
      if (checkBtn) {
        e.stopPropagation();
        const pid = checkBtn.getAttribute('data-problem-id');
        if (!trackerState.problems[pid]) {
          trackerState.problems[pid] = { solved: false, starred: false, notes: '' };
        }
        trackerState.problems[pid].solved = !trackerState.problems[pid].solved;
        trackerState.problems[pid].updatedAt = Date.now();
        saveState();
        renderTopics();
        showToast(trackerState.problems[pid].solved ? `Marked #${pid} as Solved ✓` : `Marked #${pid} as Unsolved`);
        return;
      }

      // Star Toggle Revision
      const starBtn = e.target.closest('[data-action="toggle-starred"]');
      if (starBtn) {
        e.stopPropagation();
        const pid = starBtn.getAttribute('data-problem-id');
        if (!trackerState.problems[pid]) {
          trackerState.problems[pid] = { solved: false, starred: false, notes: '' };
        }
        trackerState.problems[pid].starred = !trackerState.problems[pid].starred;
        trackerState.problems[pid].updatedAt = Date.now();
        saveState();
        renderTopics();
        showToast(trackerState.problems[pid].starred ? `Added #${pid} to Revision Starred ⭐` : `Removed #${pid} from Revision Starred`);
        return;
      }

      // Open Notes Modal
      const notesBtn = e.target.closest('[data-action="open-notes"]');
      if (notesBtn) {
        e.stopPropagation();
        const pid = notesBtn.getAttribute('data-problem-id');
        openNotesModal(pid);
        return;
      }
    });

    // Notes Modal Events
    closeNotesModalBtn.addEventListener('click', closeNotesModal);
    saveNoteBtn.addEventListener('click', () => {
      saveCurrentModalNote();
      closeNotesModal();
      showToast('Note saved successfully!');
    });

    modalNotesTextarea.addEventListener('input', triggerAutoSave);
    modalSolvedCheckbox.addEventListener('change', triggerAutoSave);
    modalStarredCheckbox.addEventListener('change', triggerAutoSave);

    copyNoteBtn.addEventListener('click', () => {
      const text = modalNotesTextarea.value;
      if (!text) {
        showToast('Nothing to copy!');
        return;
      }
      navigator.clipboard.writeText(text).then(() => {
        showToast('Note copied to clipboard!');
      });
    });

    clearNoteBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear your notes for this problem?')) {
        modalNotesTextarea.value = '';
        saveCurrentModalNote();
        showToast('Note cleared.');
      }
    });

    // Template Pills in Notes Modal
    document.querySelectorAll('.template-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-template');
        insertTemplate(type);
      });
    });

    // Close Cheat Sheet Modal
    closeCheatSheetBtn.addEventListener('click', closeCheatSheetModal);

    // Close modals on clicking overlay backdrop
    window.addEventListener('click', (e) => {
      if (e.target === notesModal) closeNotesModal();
      if (e.target === cheatSheetModal) closeCheatSheetModal();
    });

    // Close modals on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (notesModal.classList.contains('active')) closeNotesModal();
        if (cheatSheetModal.classList.contains('active')) closeCheatSheetModal();
      }
    });

    // Export and Import
    exportJsonBtn.addEventListener('click', exportJson);
    exportMdBtn.addEventListener('click', exportMarkdown);

    importJsonBtn.addEventListener('click', () => {
      importFileInput.click();
    });

    importFileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        importJson(e.target.files[0]);
        importFileInput.value = '';
      }
    });
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
