const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");
const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const balanceEl = document.getElementById("balance");

let balance = 0;

function addTransaction(isIncome) {
  const desc = descInput.value.trim();
  const amountStr = amountInput.value.trim();

  if (desc === "" || amountStr === "") {
    return;
  }

  const amount = Number(amountStr);
  if (Number.isNaN(amount)) {
    return;
  }

  const li = document.createElement("li");
  const typ = isIncome ? "Inkomst" : "Utgift";
  li.textContent = `${desc} - ${amount} kr (${typ})`;

  if (isIncome) {
    incomeList.appendChild(li);
    balance += amount;
  } else {
    expenseList.appendChild(li);
    balance -= amount;
  }

  balanceEl.textContent = balance;

  descInput.value = "";
  amountInput.value = "";
}

incomeBtn.addEventListener("click", function () {
  addTransaction(true);
});

expenseBtn.addEventListener("click", function () {
  addTransaction(false);
});
