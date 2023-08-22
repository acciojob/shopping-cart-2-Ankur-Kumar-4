document.addEventListener('DOMContentLoaded', function () {
  const itemNameInput = document.getElementById('item-name-input');
  const itemPriceInput = document.getElementById('item-price-input');
  const addButton = document.getElementById('add-button');
  const itemTableBody = document.querySelector('#item-table tbody');
  const totalElement = document.getElementById('total');

  addButton.addEventListener('click', function () {
    const itemName = itemNameInput.value.trim();
    const itemPrice = parseFloat(itemPriceInput.value);

    if (itemName === '' || isNaN(itemPrice) || itemPrice <= 0) {
      alert('Please enter valid item name and price.');
      return;
    }

    const row = document.createElement('tr');
    const itemNameCell = document.createElement('td');
    const itemPriceCell = document.createElement('td');

    itemNameCell.textContent = itemName;
    itemPriceCell.textContent = itemPrice.toFixed(2);

    row.appendChild(itemNameCell);
    row.appendChild(itemPriceCell);
    itemTableBody.appendChild(row);

    // Update total
    let total = parseFloat(totalElement.textContent);
    total += itemPrice;
    totalElement.textContent = total.toFixed(2);

    // Clear input fields
    itemNameInput.value = '';
    itemPriceInput.value = '';
  });
});
