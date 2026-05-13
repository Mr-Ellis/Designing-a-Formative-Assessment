function startEscape() {
  // Go directly to node1.html in the root folder
  window.location.href = "node1.html";
}

function goToNode(node) {
  // Navigate to node2.html, node3.html, etc.
  window.location.href = `node${node}.html`;
}

function checkCode(inputId, correctCode, nextNode) {
  const userCode = document.getElementById(inputId).value.trim();

  if (userCode === correctCode) {
    alert("Access Granted. Door Unlocked.");

    // If nextNode is 0, return to index.html (optional)
    if (nextNode === 0) {
      window.location.href = "index.html";
    } else {
      goToNode(nextNode);
    }

  } else {
    alert("Access Denied. Try again.");
  }
}
