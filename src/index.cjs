import axios from 'axios';
import Chart from 'chart.js/auto';

async function fetchData() {
  try {
    const response = await axios.get(
      'https://script.google.com/macros/s/AKfycbxnffPLcEmE9jlXGQQyAIqGXYW49my8Cn8aB_Qve80X9yyyMS1XHlSefn43EsFnI878/exec'
    );
    return response; // Return the response
  } catch (error) {
    // Handle error here
    console.error('Error:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

async function createData() {
  try {
    const response = await fetchData();
    data = response.data;
    //obtaining only FCR's data
    // console.log(data);
    //var { FCR } = data;

    //provide the first object in the parent object to format the data
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        var value = data[key];
        // console.log('the keys');
        // console.log('the key value is:' + key);
        console.log(value);
        await formatData(value);
        if (key === 'MFRT') {
          await chart1(fcrLabels, fcrValues);
          await chart4(fcrLabels, fcrValues);
        } else if (key === 'CSAT') {
          console.log(fcrValues);
          var inc = 0;
          fcrValues.forEach((ele) => {
            fcrValues[inc] = ele * 100;
            inc++;
          });
          await chart2(fcrLabels, fcrValues);
          chart5(fcrLabels, fcrValues);
        } else {
          await chart3(fcrLabels, fcrValues);
          chart6(fcrLabels, fcrValues);
        }
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function formatData(object) {
  fcrLabels = [];
  fcrValues = [];
  Object.keys(object).forEach((element) => {
    var date = new Date(Date.parse(element));
    date = date.toLocaleDateString();
    fcrLabels.push(date);
  });

  Object.values(object).forEach((element) => {
    fcrValues.push(element);
  });
  return;
}
// https://uploads-ssl.webflow.com/63413ad4dec8a91fe53f4fb0/63413ad4dec8a930443f4fd3_Chromatica-Regular.woff2

async function chart1(label, value) {
  var ctx = document.getElementById('mfrt').getContext('2d');
  gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(87,14,64,1)');
  gradient.addColorStop(1, 'rgba(188,158,177,0.3)');
  gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient2.addColorStop(0, 'rgba(87,14,64,1)');
  gradient2.addColorStop(1, 'rgba(188,158,177,0)');
  new Chart(document.getElementById('mfrt'), {
    type: 'line',
    data: {
      labels: label,
      datasets: [
        {
          borderWidth: '2',
          label: '',
          data: value,
          fill: {
            target: 'origin',
            // below: 'rgb(0, 0, 255)',
            above: gradient,
          },

          //borderColor: 'rgb(75, 192, 192)',
          tension: 0.2,
          backgroundColor: '#FFFAF2',
          borderColor: '#340926',
          width: 2,
        },
      ],
    },
    options: {
      scales: {
        x: {
          grid: {
            display: false,
          },
          border: {
            width: 1,
            color: '#340926',
          },
          title: {
            family: 'Chromatica',
            text: 'Date',
            display: true,
            color: '#570E40',
            font: {
              family: 'Chromatica',
              size: 20,
              color: '#570E40',
            },
          },
          ticks: {
            maxTicksLimit: 6,
            padding: 10,
            color: '#570E40',
          },
          font: {
            family: 'Chromatica',
          },
        },
        y: {
          grid: {
            display: false,
          },
          border: {
            width: 1,
            color: '#340926',
          },
          title: {
            text: 'Hours',
            display: true,
            color: '#570E40',
            font: {
              family: 'Chromatica',
              size: 20,
              color: '#570E40',
            },
          },
          ticks: {
            maxTicksLimit: 6,
            padding: 10,
            color: '#570E40',
            font: {
              family: 'Chromatica',
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

async function chart2(label, value) {
  var ctx = document.getElementById('csat').getContext('2d');
  gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(87,14,64,1)');
  gradient.addColorStop(1, 'rgba(188,158,177,0.3)');
  gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient2.addColorStop(0, 'rgba(87,14,64,1)');
  gradient2.addColorStop(1, 'rgba(188,158,177,0)');
  new Chart(document.getElementById('csat'), {
    type: 'line',
    data: {
      labels: label,
      datasets: [
        {
          borderWidth: '2',
          label: '',
          data: value,
          fill: {
            target: 'origin',
            // below: 'rgb(0, 0, 255)',
            above: gradient,
          },

          //borderColor: 'rgb(75, 192, 192)',
          tension: 0.2,
          backgroundColor: '#FFFAF2',
          borderColor: '#340926',
          width: 2,
        },
      ],
    },
    options: {
      scales: {
        x: {
          grid: {
            display: false,
          },
          border: {
            width: 1,
            color: '#340926',
          },
          title: {
            family: 'Chromatica',
            text: 'Date',
            display: true,
            color: '#570E40',
            font: {
              family: 'Chromatica',
              size: 20,
              color: '#570E40',
            },
          },
          ticks: {
            maxTicksLimit: 6,
            padding: 10,
            color: '#570E40',
          },
          font: {
            family: 'Chromatica',
          },
        },
        y: {
          grid: {
            display: false,
          },
          border: {
            width: 1,
            color: '#340926',
          },
          title: {
            text: 'Hours',
            display: true,
            color: '#570E40',
            font: {
              family: 'Chromatica',
              size: 20,
              color: '#570E40',
            },
          },
          ticks: {
            // maxTicksLimit: 6,
            family: 'Chromatica',
            beginAtZero: true,
            stepSize: 20,
            max: 100,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}
async function chart3(label, value) {
  var ctx = document.getElementById('fcr').getContext('2d');
  gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(87,14,64,1)');
  gradient.addColorStop(1, 'rgba(188,158,177,0.3)');
  gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient2.addColorStop(0, 'rgba(87,14,64,1)');
  gradient2.addColorStop(1, 'rgba(188,158,177,0)');
  new Chart(document.getElementById('fcr'), {
    type: 'line',
    data: {
      labels: label,
      datasets: [
        {
          borderWidth: '2',
          label: '',
          data: value,
          fill: {
            target: 'origin',
            // below: 'rgb(0, 0, 255)',
            above: gradient,
          },

          //borderColor: 'rgb(75, 192, 192)',
          tension: 0.2,
          backgroundColor: '#FFFAF2',
          borderColor: '#340926',
          width: 2,
        },
      ],
    },
    options: {
      scales: {
        x: {
          grid: {
            display: false,
          },
          border: {
            width: 1,
            color: '#340926',
          },
          title: {
            family: 'Chromatica',
            text: 'Date',
            display: true,
            color: '#570E40',
            font: {
              family: 'Chromatica',
              size: 20,
              color: '#570E40',
            },
          },
          ticks: {
            maxTicksLimit: 6,
            padding: 10,
            color: '#570E40',
          },
          font: {
            family: 'Chromatica',
          },
        },
        y: {
          grid: {
            display: false,
          },
          border: {
            width: 1,
            color: '#340926',
          },
          title: {
            text: 'Hours',
            display: true,
            color: '#570E40',
            font: {
              family: 'Chromatica',
              size: 20,
              color: '#570E40',
            },
          },
          ticks: {
            maxTicksLimit: 6,
            padding: 10,
            color: '#570E40',
            font: {
              family: 'Chromatica',
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

async function chart4(label, value) {
  var ctx = document.getElementById('mfrt').getContext('2d');
  gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(87,14,64,1)');
  gradient.addColorStop(1, 'rgba(188,158,177,0.3)');
  gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient2.addColorStop(0, 'rgba(87,14,64,1)');
  gradient2.addColorStop(1, 'rgba(188,158,177,0)');
  new Chart(document.getElementById('mfrt-hero'), {
    type: 'line',
    data: {
      labels: label,
      datasets: [
        {
          label: false,
          borderWidth: 2,
          pointRadius: 3,
          data: value,
          fill: {
            target: 'origin',
            // below: 'rgb(0, 0, 255)',
            above: gradient2,
          },

          //borderColor: 'rgb(75, 192, 192)',
          tension: 0.2,
          backgroundColor: '#FFFAF2',
          borderColor: '#340926',
        },
      ],
    },
    options: {
      scales: {
        x: {
          display: false,
          grid: {
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
            color: 'transparent',
            width: 0,
          },
          border: {
            display: false,
          },
          ticks: {
            display: false,
            padding: 0,
          },
        },
        y: {
          display: false,
          grid: {
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
            color: 'transparent',
            width: 0,
          },
          border: {
            display: false,
          },
          ticks: {
            backdropPadding: 0,
            display: false,
            mirror: true,
            padding: 0,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

async function chart5(label, value) {
  var ctx = document.getElementById('csat').getContext('2d');
  gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(87,14,64,1)');
  gradient.addColorStop(1, 'rgba(188,158,177,0.3)');
  gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient2.addColorStop(0, 'rgba(87,14,64,1)');
  gradient2.addColorStop(1, 'rgba(188,158,177,0)');
  new Chart(document.getElementById('csat-hero'), {
    type: 'line',
    data: {
      labels: label,
      datasets: [
        {
          label: '',
          pointRadius: 3,
          data: value,
          fill: {
            target: 'origin',
            // below: 'rgb(0, 0, 255)',
            above: gradient,
          },

          //borderColor: 'rgb(75, 192, 192)',
          tension: 0.2,
          backgroundColor: '#FFFAF2',
          borderColor: '#340926',
          width: 2,
        },
      ],
    },
    options: {
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
          ticks: {
            // maxTicksLimit: 6,
            family: 'Chromatica',
            beginAtZero: true,
            stepSize: 30,
            max: 100,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

async function chart6(label, value) {
  var ctx = document.getElementById('fcr').getContext('2d');
  gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(87,14,64,1)');
  gradient.addColorStop(1, 'rgba(188,158,177,0.3)');
  gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient2.addColorStop(0, 'rgba(87,14,64,1)');
  gradient2.addColorStop(1, 'rgba(188,158,177,0)');
  new Chart(document.getElementById('fcr-hero'), {
    type: 'line',
    data: {
      labels: label,
      datasets: [
        {
          label: '',
          pointRadius: 3,
          data: value,
          fill: {
            target: 'origin',
            // below: 'rgb(0, 0, 255)',
            above: gradient,
          },

          //borderColor: 'rgb(75, 192, 192)',
          tension: 0.2,
          backgroundColor: '#FFFAF2',
          borderColor: '#340926',
          width: 2,
        },
      ],
    },
    options: {
      scales: {
        x: {
          display: false,
          grid: {
            drawTicks: false,
          },
        },

        y: {
          display: false,
          grid: {
            drawTicks: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

var data = {};
var fcrLabels = [];
var fcrValues = [];
var gradient, gradient2;
//error here is that maybe we cannot create the gradient without creating the chart first
$(document).ready(function () {
  createData();
});
