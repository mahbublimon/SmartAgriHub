function startVideoCall() {
  alert("🔴 Starting a video call...");
}

function startAudioCall() {
  alert("🎧 Sending an audio message...");
}

function openChat() {
  alert("💬 Opening বাংলা chat interface...");
}

function addRow(tableId) {
  const table = document.getElementById(tableId).getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();
  const cols = tableId === "farmers-table" ? 5 : 5;

  for (let i = 0; i < cols - 1; i++) {
    const cell = newRow.insertCell(i);
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter value';
    cell.appendChild(input);
  }

  const actionsCell = newRow.insertCell(cols - 1);
  actionsCell.innerHTML = `
    <button onclick="saveRow(this)">💾</button>
    <button onclick="deleteRow(this)">🗑️</button>
  `;
}

function saveRow(btn) {
  const row = btn.closest('tr');
  [...row.cells].forEach((cell, i) => {
    if (cell.children[0]?.tagName === "INPUT") {
      const text = cell.children[0].value;
      cell.innerText = text;
    }
  });
  row.cells[row.cells.length - 1].innerHTML = `
    <button onclick="startVideoCall()">📹</button>
    <button onclick="startAudioCall()">🎧</button>
    <button onclick="openChat()">💬</button>
    <button onclick="editRow(this)">✏️</button>
    <button onclick="deleteRow(this)">🗑️</button>
  `;
}

function editRow(btn) {
  const row = btn.closest('tr');
  for (let i = 0; i < row.cells.length - 1; i++) {
    const current = row.cells[i].innerText;
    row.cells[i].innerHTML = `<input type="text" value="${current}" />`;
  }
  row.cells[row.cells.length - 1].innerHTML = `
    <button onclick="saveRow(this)">💾</button>
    <button onclick="deleteRow(this)">🗑️</button>
  `;
}

function deleteRow(btn) {
  const row = btn.closest('tr');
  
