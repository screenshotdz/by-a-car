const dataInput = document.getElementById("dataInput");
const saveButton = document.getElementById("saveButton");
const dataList = document.getElementById("dataList");
document.addEventListener("DOMContentLoaded", () => {
  const savedData = JSON.parse(localStorage.getItem("dataList")) || [];
  savedData.forEach(item => displayData(item));
});
saveButton.addEventListener("click", () => {
  const inputData = dataInput.value.trim();
  if (inputData) {
    saveData(inputData);
    displayData(inputData);
    dataInput.value = "";
  }
});
function saveData(data) {
  const savedData = JSON.parse(localStorage.getItem("dataList")) || [];
  savedData.push(data);
  localStorage.setItem("dataList", JSON.stringify(savedData));
}
function displayData(data) {
  const li = document.createElement("li");
  li.textContent = data;
  dataList.appendChild(li);
}