// script.js

// Функція для виклику AJAX
function fetchData() {
    // Виклик AJAX за допомогою Fetch API або іншого методу
    fetch('your_api_endpoint')
        .then(response => response.json())
        .then(data => {
            // data містить ваші дані, наприклад, { labels: [...], datasets: [...] }

            // Виклик функції, яка рендерить графік
            renderChart(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Функція для рендерингу графіка за допомогою Chart.js
function renderChart(data) {
    var ctx = document.getElementById('myChart').getContext('2d');

    // data.labels - масив міток графіка
    // data.datasets - масив наборів даних (див. документацію Chart.js для більш детальної інформації)
    var myChart = new Chart(ctx, {
        type: 'line', // Тип графіка (line, bar, pie, ін.)
        data: {
            labels: data.labels,
            datasets: data.datasets
        }
    });
}

// Виклик функції при завантаженні сторінки
fetchData();
