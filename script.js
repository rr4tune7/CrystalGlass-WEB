let products = []; // сюда загрузим данные

// Функция для отображения таблицы
function renderTable(data) {
  let tbody = document.querySelector("#productsTable tbody");
  tbody.innerHTML = ""; // очищаем таблицу
  data.forEach(item => {
    let row = `<tr>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>${item.description}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

// Загружаем JSON с товарами
fetch("products.json")
  .then(response => response.json())
  .then(data => {
    products = data;
    renderTable(products); // отображаем все товары
  });

// Поиск по названию
document.querySelector("#searchInput").addEventListener("input", function() {
  let query = this.value.toLowerCase(); // приводим к нижнему регистру
  let filtered = products.filter(p => p.name.toLowerCase().includes(query));
  renderTable(filtered); // отображаем только найденные
});


$(document).ready(function() {
  $('#productsTable').DataTable({
    data: products,
    columns: [
      { data: 'name' },
      { data: 'price' },
      { data: 'description' }
    ]
  });
});

