/**
 * TOEIC READING MOBILE APP - CORE CONTROLLER
 * Xử lý đếm ngược 75 phút, lưu trữ LocalStorage, điều hướng và chấm điểm tự động.
 */

const STORAGE_KEY_ANSWERS = 'toeic_exam_answers_test07';
const STORAGE_KEY_TIME = 'toeic_exam_time_test07';
const STORAGE_KEY_RESULT = 'toeic_exam_last_result';
const TOTAL_DURATION_SECONDS = 75 * 60; // 75 phút = 4500s

class ToeicExamApp {
  constructor() {
    this.exam = typeof EXAM_DATA !== 'undefined' ? EXAM_DATA : null;
    this.remainingSeconds = TOTAL_DURATION_SECONDS;
    this.answers = {};
    this.timerInterval = null;
    this.isSubmitted = false;
  }

  // Khởi tạo phòng thi (take.html)
  initTakeRoom() {
    if (!this.exam) {
      console.error('Không tìm thấy dữ liệu đề thi EXAM_DATA!');
      return;
    }

    // Phục hồi bài làm cũ từ LocalStorage nếu có
    this.loadState();

    // Render danh sách câu hỏi
    this.renderQuestions();

    // Render Palette bảng 100 câu
    this.renderPalette();

    // Bắt đầu đếm ngược thời gian thực
    this.startTimer();

    // Cập nhật tiến độ ban đầu
    this.updateProgress();

    // Lắng nghe sự kiện modal nộp bài
    this.bindEvents();
  }

  loadState() {
    try {
      const savedAnswers = localStorage.getItem(STORAGE_KEY_ANSWERS);
      if (savedAnswers) {
        this.answers = JSON.parse(savedAnswers);
      }

      const savedTime = localStorage.getItem(STORAGE_KEY_TIME);
      if (savedTime) {
        const timeVal = parseInt(savedTime, 10);
        if (!isNaN(timeVal) && timeVal > 0) {
          this.remainingSeconds = timeVal;
        }
      }
    } catch (e) {
      console.warn('Lỗi đọc LocalStorage:', e);
    }
  }

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY_ANSWERS, JSON.stringify(this.answers));
      localStorage.setItem(STORAGE_KEY_TIME, this.remainingSeconds.toString());
    } catch (e) {
      console.warn('Lỗi ghi LocalStorage:', e);
    }
  }

  startTimer() {
    this.updateTimerDisplay();

    this.timerInterval = setInterval(() => {
      if (this.remainingSeconds <= 0) {
        clearInterval(this.timerInterval);
        this.autoSubmitTimeOut();
        return;
      }

      this.remainingSeconds--;
      this.updateTimerDisplay();

      // Lưu thời gian định kỳ mỗi 5 giây
      if (this.remainingSeconds % 5 === 0) {
        this.saveState();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;
    const formatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    const timerBadge = document.getElementById('timerBadge');
    const timerText = document.getElementById('timerText');

    if (timerText) timerText.innerText = formatted;

    // Cảnh báo thời gian dưới 5 phút (300 giây)
    if (timerBadge) {
      if (this.remainingSeconds <= 300) {
        timerBadge.classList.add('timer-warning');
      } else {
        timerBadge.classList.remove('timer-warning');
      }
    }
  }

  // Render toàn bộ câu hỏi Part 5, 6, 7
  renderQuestions() {
    const container = document.getElementById('questionsContainer');
    if (!container) return;

    let html = '';

    // 1. Part 5: Incomplete Sentences (Câu 101 - 130)
    if (this.exam.part5 && this.exam.part5.length > 0) {
      html += `
        <div class="px-3 pt-3 pb-1">
          <span class="badge badge-primary px-2 py-1 font-weight-bold" style="background: var(--primary);">PART 5</span>
          <h6 class="font-weight-bold mt-2 mb-1">Incomplete Sentences</h6>
          <p class="small text-muted">Chọn từ hoặc cụm từ thích hợp nhất để hoàn thành câu (101-130).</p>
        </div>
      `;

      this.exam.part5.forEach(q => {
        html += this.renderQuestionCard(q, null);
      });
    }

    // 2. Part 6: Text Completion (Câu 131 - 146)
    if (this.exam.part6 && this.exam.part6.length > 0) {
      html += `
        <div class="px-3 pt-4 pb-1">
          <span class="badge badge-primary px-2 py-1 font-weight-bold" style="background: var(--primary);">PART 6</span>
          <h6 class="font-weight-bold mt-2 mb-1">Text Completion</h6>
          <p class="small text-muted">Đọc bài đọc và chọn từ/câu thích hợp điền vào chỗ trống (131-146).</p>
        </div>
      `;

      this.exam.part6.forEach(group => {
        html += `
          <div class="card mx-3 mb-3 border-0 shadow-sm p-3 rounded-lg" style="border-radius: 18px;">
            ${group.passage_title ? `<h6 class="font-weight-bold text-primary mb-2">${group.passage_title}</h6>` : ''}
            <div class="passage-card mb-3">${this.escapeHtml(group.passage)}</div>
            ${group.questions.map(q => this.renderQuestionCard(q, null)).join('')}
          </div>
        `;
      });
    }

    // 3. Part 7: Reading Comprehension (Câu 147 - 200)
    if (this.exam.part7 && this.exam.part7.length > 0) {
      html += `
        <div class="px-3 pt-4 pb-1">
          <span class="badge badge-primary px-2 py-1 font-weight-bold" style="background: var(--primary);">PART 7</span>
          <h6 class="font-weight-bold mt-2 mb-1">Reading Comprehension</h6>
          <p class="small text-muted">Đọc các đoạn văn đơn và đoạn văn kép để trả lời câu hỏi (147-200).</p>
        </div>
      `;

      this.exam.part7.forEach(group => {
        html += `
          <div class="card mx-3 mb-3 border-0 shadow-sm p-3 rounded-lg" style="border-radius: 18px;">
            ${group.passage_title ? `<h6 class="font-weight-bold text-primary mb-2">${group.passage_title}</h6>` : ''}
            <div class="passage-card mb-3">${this.escapeHtml(group.passage)}</div>
            ${group.questions.map(q => this.renderQuestionCard(q, null)).join('')}
          </div>
        `;
      });
    }

    container.innerHTML = html;
  }

  renderQuestionCard(q) {
    const selected = this.answers[q.num] || '';
    return `
      <div class="question-item-card mx-3 mb-3" id="q_box_${q.num}">
        <div class="d-flex align-items-center justify-content-between mb-2">
          <span class="badge badge-light text-primary font-weight-bold px-2 py-1" style="background: var(--primary-light);">Câu ${q.num}</span>
          <span class="small text-muted font-weight-bold status-lbl-${q.num}">${selected ? '<i class="fas fa-check-circle text-success"></i> Đã chọn' : 'Chưa làm'}</span>
        </div>
        <p class="font-weight-bold text-dark mb-3">${q.text ? this.escapeHtml(q.text) : 'Chọn đáp án chính xác:'}</p>

        <div class="options-group">
          ${this.renderOptionBtn(q.num, 'A', q.a, selected === 'A')}
          ${this.renderOptionBtn(q.num, 'B', q.b, selected === 'B')}
          ${this.renderOptionBtn(q.num, 'C', q.c, selected === 'C')}
          ${this.renderOptionBtn(q.num, 'D', q.d, selected === 'D')}
        </div>
      </div>
    `;
  }

  renderOptionBtn(qNum, optLetter, optText, isSelected) {
    return `
      <div class="option-choice-label ${isSelected ? 'selected' : ''}" 
           id="opt_${qNum}_${optLetter}" 
           onclick="window.app.toggleOption(${qNum}, '${optLetter}')">
        <div class="d-flex align-items-center">
          <span class="option-badge">${optLetter}</span>
          <span>${this.escapeHtml(optText)}</span>
        </div>
        <i class="${isSelected ? 'fas fa-check-circle text-primary' : 'far fa-circle text-muted'}"></i>
      </div>
    `;
  }

  // Tương tác linh hoạt: chọn đáp án, đổi đáp án hoặc bỏ chọn
  toggleOption(qNum, optLetter) {
    if (this.isSubmitted) return;

    if (this.answers[qNum] === optLetter) {
      // Bỏ chọn nếu click lại cùng 1 đáp án
      delete this.answers[qNum];
    } else {
      this.answers[qNum] = optLetter;
    }

    this.saveState();
    this.updateQuestionUI(qNum);
    this.updateProgress();
    this.updatePaletteButton(qNum);
  }

  updateQuestionUI(qNum) {
    const curAnswer = this.answers[qNum] || '';
    ['A', 'B', 'C', 'D'].forEach(letter => {
      const el = document.getElementById(`opt_${qNum}_${letter}`);
      if (el) {
        const icon = el.querySelector('i');
        if (letter === curAnswer) {
          el.classList.add('selected');
          if (icon) icon.className = 'fas fa-check-circle text-primary';
        } else {
          el.classList.remove('selected');
          if (icon) icon.className = 'far fa-circle text-muted';
        }
      }
    });

    const statusLbl = document.querySelector(`.status-lbl-${qNum}`);
    if (statusLbl) {
      statusLbl.innerHTML = curAnswer ? '<i class="fas fa-check-circle text-success"></i> Đã chọn' : 'Chưa làm';
    }
  }

  // Render lưới 100 câu hỏi trong Question Palette
  renderPalette() {
    const paletteGrid = document.getElementById('paletteGrid');
    if (!paletteGrid) return;

    let html = '';
    for (let i = 101; i <= 200; i++) {
      const isAnswered = !!this.answers[i];
      html += `
        <button type="button" class="palette-btn ${isAnswered ? 'answered' : ''}" id="palette_btn_${i}" onclick="window.app.jumpToQuestion(${i})">
          ${i}
        </button>
      `;
    }
    paletteGrid.innerHTML = html;
  }

  updatePaletteButton(qNum) {
    const btn = document.getElementById(`palette_btn_${qNum}`);
    if (btn) {
      if (this.answers[qNum]) {
        btn.classList.add('answered');
      } else {
        btn.classList.remove('answered');
      }
    }
  }

  jumpToQuestion(qNum) {
    $('#paletteModal').modal('hide');
    const target = document.getElementById(`q_box_${qNum}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      target.style.transition = 'all 0.3s';
      target.style.boxShadow = '0 0 0 3px #4f46e5';
      setTimeout(() => {
        target.style.boxShadow = '';
      }, 1500);
    }
  }

  updateProgress() {
    const answeredCount = Object.keys(this.answers).length;
    const total = 100;
    const percent = Math.round((answeredCount / total) * 100);

    const progressEl = document.getElementById('examProgressBar');
    const progressText = document.getElementById('examProgressText');

    if (progressEl) progressEl.style.width = `${percent}%`;
    if (progressText) progressText.innerText = `${answeredCount}/${total} câu`;
  }

  bindEvents() {
    const submitBtn = document.getElementById('btnOpenSubmitModal');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        const answeredCount = Object.keys(this.answers).length;
        const total = 100;
        const remaining = total - answeredCount;

        const countAnsweredEl = document.getElementById('modalAnsweredCount');
        const countRemainingEl = document.getElementById('modalRemainingCount');

        if (countAnsweredEl) countAnsweredEl.innerText = answeredCount;
        if (countRemainingEl) countRemainingEl.innerText = remaining;

        $('#confirmSubmitModal').modal('show');
      });
    }

    const confirmSubmitBtn = document.getElementById('btnConfirmSubmit');
    if (confirmSubmitBtn) {
      confirmSubmitBtn.addEventListener('click', () => {
        this.submitExam();
      });
    }
  }

  // Tự động thu bài khi hết giờ
  autoSubmitTimeOut() {
    this.isSubmitted = true;
    alert('Đã hết 75 phút làm bài! Hệ thống tự động thu bài và chấm điểm.');
    this.submitExam();
  }

  // Nộp bài và chấm điểm
  submitExam() {
    this.isSubmitted = true;
    if (this.timerInterval) clearInterval(this.timerInterval);

    // Tính toán kết quả
    let correctCount = 0;
    let wrongCount = 0;
    let skippedCount = 0;
    const reviewList = [];

    // Lấy tất cả câu hỏi phẳng
    const allQuestions = [];
    if (this.exam.part5) allQuestions.push(...this.exam.part5);
    if (this.exam.part6) this.exam.part6.forEach(g => allQuestions.push(...g.questions));
    if (this.exam.part7) this.exam.part7.forEach(g => allQuestions.push(...g.questions));

    allQuestions.sort((a, b) => a.num - b.num);

    allQuestions.forEach(q => {
      const userAns = this.answers[q.num] || '';
      const correctAns = (q.ans || '').toUpperCase();
      let status = 'skipped';

      if (!userAns) {
        skippedCount++;
        status = 'skipped';
      } else if (userAns.toUpperCase() === correctAns) {
        correctCount++;
        status = 'correct';
      } else {
        wrongCount++;
        status = 'wrong';
      }

      reviewList.push({
        num: q.num,
        text: q.text,
        userAns: userAns || 'Chưa làm',
        correctAns: correctAns,
        status: status
      });
    });

    const timeSpent = TOTAL_DURATION_SECONDS - this.remainingSeconds;
    const score10 = Math.round((correctCount / 100.0) * 10 * 10) / 10;
    let estReading = Math.round(5 + (correctCount / 100.0) * 490);
    if (estReading < 5) estReading = 5;
    if (estReading > 495) estReading = 495;

    const resultObj = {
      examTitle: this.exam.title || 'TOEIC Reading Test 07',
      candidateName: 'Huỳnh Nguyên Khang',
      totalQuestions: 100,
      correctCount: correctCount,
      wrongCount: wrongCount,
      skippedCount: skippedCount,
      score10: score10,
      estReading: estReading,
      timeSpentSeconds: timeSpent,
      reviewList: reviewList
    };

    localStorage.setItem(STORAGE_KEY_RESULT, JSON.stringify(resultObj));

    // Xóa session làm bài cũ
    localStorage.removeItem(STORAGE_KEY_ANSWERS);
    localStorage.removeItem(STORAGE_KEY_TIME);

    // Chuyển sang màn hình kết quả
    window.location.href = 'result.html';
  }

  // Khởi tạo màn hình kết quả (result.html)
  initResultScreen() {
    const raw = localStorage.getItem(STORAGE_KEY_RESULT);
    if (!raw) {
      alert('Chưa có kết quả bài thi! Đang chuyển hướng về trang chủ.');
      window.location.href = 'index.html';
      return;
    }

    const data = JSON.parse(raw);

    // Cập nhật thông số
    const score10El = document.getElementById('resScore10');
    const toeicScoreEl = document.getElementById('resToeicScore');
    const correctEl = document.getElementById('resCorrectCount');
    const wrongEl = document.getElementById('resWrongCount');
    const skippedEl = document.getElementById('resSkippedCount');
    const timeSpentEl = document.getElementById('resTimeSpent');
    const candidateEl = document.getElementById('resCandidateName');

    if (score10El) score10El.innerText = data.score10;
    if (toeicScoreEl) toeicScoreEl.innerText = `${data.estReading}/495`;
    if (correctEl) correctEl.innerText = data.correctCount;
    if (wrongEl) wrongEl.innerText = data.wrongCount;
    if (skippedEl) skippedEl.innerText = data.skippedCount;
    if (candidateEl) candidateEl.innerText = data.candidateName || 'Huỳnh Nguyên Khang';

    if (timeSpentEl) {
      const m = Math.floor(data.timeSpentSeconds / 60);
      const s = data.timeSpentSeconds % 60;
      timeSpentEl.innerText = `${m}p ${s}s`;
    }

    // Render bảng đối chiếu 100 câu
    const listContainer = document.getElementById('reviewListContainer');
    if (listContainer && data.reviewList) {
      let html = '';
      data.reviewList.forEach(item => {
        let badgeHtml = '';
        let itemClass = '';

        if (item.status === 'correct') {
          itemClass = 'is-correct';
          badgeHtml = '<span class="badge badge-success px-2 py-1"><i class="fas fa-check mr-1"></i>Đúng</span>';
        } else if (item.status === 'wrong') {
          itemClass = 'is-wrong';
          badgeHtml = '<span class="badge badge-danger px-2 py-1"><i class="fas fa-times mr-1"></i>Sai</span>';
        } else {
          itemClass = 'is-skipped';
          badgeHtml = '<span class="badge badge-warning text-white px-2 py-1"><i class="fas fa-minus mr-1"></i>Bỏ qua</span>';
        }

        html += `
          <div class="review-item ${itemClass}">
            <div class="d-flex align-items-center justify-content-between mb-1">
              <span class="font-weight-bold text-dark">Câu ${item.num}</span>
              ${badgeHtml}
            </div>
            <div class="small text-muted mb-2">${item.text ? this.escapeHtml(item.text) : ''}</div>
            <div class="d-flex align-items-center justify-content-between small font-weight-bold">
              <span>Bạn chọn: <span class="${item.status === 'correct' ? 'text-success' : (item.status === 'wrong' ? 'text-danger' : 'text-muted')}">${item.userAns}</span></span>
              <span>Đáp án đúng: <span class="text-success font-weight-bold">${item.correctAns}</span></span>
            </div>
          </div>
        `;
      });
      listContainer.innerHTML = html;
    }
  }

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

window.app = new ToeicExamApp();
