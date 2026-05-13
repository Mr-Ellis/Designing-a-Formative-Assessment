function startEscape() {
  window.location.href = "puzzles/node1.html";
}

function goToNode(node) {
  window.location.href = `node${node}.html`;
}

function checkCode(inputId, correctCode, nextNode) {
  const userCode = document.getElementById(inputId).value.trim();
  if (userCode === correctCode) {
    alert("Access Granted. Door Unlocked.");
    goToNode(nextNode);
  } else {
    alert("Access Denied. Try again.");
  }
}
