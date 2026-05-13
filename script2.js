// Start timer when any game page loads
let timeLeft = 45 * 60; // 45 minutes in seconds
let timerInterval;

function startTimer() {
  const timerDisplay = document.getElementById('timer');
  if (!timerDisplay) return;
  
  timerInterval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert('⏰ Time is up! The AI purged the system.');
      window.location.href = 'index.html';
    }
    timeLeft--;
  }, 1000);
}

// Start timer on any node page
if (document.getElementById('timer')) {
  startTimer();
}

function startEscape() {
  window.location.href = 'node1.html';
}

function goToNode(node) {
  window.location.href = `node${node}.html`;
}

function checkCode(inputId, correctCode, nextNode) {
  const input = document.getElementById(inputId);
  const feedback = document.getElementById('feedback');
  
  if (!input) {
    console.error('Input element not found:', inputId);
    return;
  }
  if (!feedback) {
    console.error('Feedback element not found');
    return;
  }

  const userCode = input.value.trim();
  
  if (userCode === correctCode) {
    feedback.textContent = '✅ Access Granted. Door Unlocked.';
    feedback.style.color = '#0f0';
    input.disabled = true;
    
    // Stop timer on final node (nextNode === 0)
    if (nextNode === 0) {
      clearInterval(timerInterval);
      setTimeout(() => {
        alert('🎉 Congratulations! You escaped!');
        window.location.href = 'index.html';
      }, 1000);
    } else {
      setTimeout(() => goToNode(nextNode), 1000);
    }
  } else {
    feedback.textContent = '❌ Access Denied. Try again.';
    feedback.style.color = '#f00';
    input.value = '';
    input.focus();
  }
}
