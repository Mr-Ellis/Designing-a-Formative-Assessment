function startEscape() {
  window.location.href = "node1.html";
}

function goToNode(node) {
  window.location.href = `node${node}.html`;
}

function checkCode(inputId, correctCode, nextNode) {
  const userCode = document.getElementById(inputId).value.trim();

  if (userCode === correctCode) {
    alert("Access Granted. Door Unlocked.");

    if (nextNode === 0) {
      window.location.href = "index.html";
    } else {
      goToNode(nextNode);
    }

  } else {
    alert("Access Denied. Try again.");
  }
}
