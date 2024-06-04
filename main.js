let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/firefox-icon.png") {
    miImage.setAttribute("src", "images/firefox2.png");
  } else {
    miImage.setAttribute("src", "images/firefox-icon.png");
  }
};

  const ctx1 = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
      datasets: [{
        label: 'Ventas mensuales - Anuel AA',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1
      },
      {
        label: 'Ventas mensuales - Bad Bunny',
        data: [80, 75, 90, 85, 70, 65, 60],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  const ctx2 = document.getElementById('miGrafica').getContext('2d');
  const miGrafica = new Chart(ctx2, {
      type: 'line',
      data: {
          labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
          datasets: [
              {
                  label: 'Karol G',
                  data: [30, 20, 40, 50, 60, 80], // Datos de popularidad para Karol G
                  fill: false,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.1
              },
              {
                  label: 'Natti Natasha',
                  data: [30, 30, 45, 55, 20, 10], // Datos de popularidad para Natti Natasha
                  fill: false,
                  borderColor: 'rgb(192, 75, 75)',
                  tension: 0.1
              }
          ]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  
  
// Asegúrate de incluir Chart.js en tu proyecto añadiendo el siguiente script en tu HTML:
// <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

const ctx3 = document.getElementById('myDoughnutChart').getContext('2d');
const myDoughnutChart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['1990', '2000', '2010', '2020'], // Periodos de tiempo
        datasets: [{
            label: 'Evolución del Reggaetón',
            data: [10, 30, 70, 90], // Sustituye estos valores por datos reales
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});







  function configurarAnalytics() {
    // Código de seguimiento de Google Analytics
  }