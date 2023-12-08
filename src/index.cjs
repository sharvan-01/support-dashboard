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
        } else if (key === 'CSAT') {
          console.log(fcrValues);
          var inc = 0;
          fcrValues.forEach((ele) => {
            fcrValues[inc] = ele * 100;
            inc++;
          });
          await chart2(fcrLabels, fcrValues);
        } else {
          await chart3(fcrLabels, fcrValues);
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

var data = {};
var fcrLabels = [];
var fcrValues = [];
createData();

async function chart1(label, value) {
  new Chart(document.getElementById('mfrt'), {
    type: 'line',
    data: {
      labels: label,
      datasets: [
        {
          borderWidth: '2',
          label: '',
          data: value,
          fill: false,
          //borderColor: 'rgb(75, 192, 192)',
          tension: 0.2,
          backgroundColor: '#FFFAF2',
          borderColor: '#FF4052',
        },
      ],
    },
    options: {
      scales: {
        x: {
          grid: {
            display: false,
          },
          title: {
            text: 'Date',
            display: true,
          },
          ticks: {
            fontSize: 40,
          },
        },
        y: {
          grid: {
            display: false,
          },
          title: {
            text: 'Median First Response Time in Hours',
            display: true,
            fontSize: 30,
          },
          ticks: {
            fontSize: 30,
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
  new Chart(document.getElementById('csat'), {
    type: 'line',
    data: {
      labels: label,
      datasets: [
        {
          borderWidth: '2',
          label: '',
          data: value,
          fill: false,
          //borderColor: 'rgb(75, 192, 192)',
          tension: 0.2,
          backgroundColor: '#FFFAF2',
          borderColor: '#FF4052',
        },
      ],
    },
    options: {
      scales: {
        x: {
          title: {
            text: 'Date',
            display: true,
          },
          grid: {
            display: false,
          },
        },
        y: {
          title: {
            text: 'Percentage',
            display: true,
          },
          grid: {
            display: false,
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
  new Chart(document.getElementById('fcr'), {
    type: 'line',
    data: {
      labels: label,
      datasets: [
        {
          borderWidth: '2',
          label: '',
          data: value,
          fill: false,
          //borderColor: 'rgb(75, 192, 192)',
          tension: 0.2,
          backgroundColor: '#FFFAF2',
          borderColor: '#FF4052',
        },
      ],
    },
    options: {
      scales: {
        x: {
          title: {
            text: 'Date',
            display: true,
          },
          grid: {
            display: false,
          },
        },
        y: {
          title: {
            text: 'First Call Resolution (in hours)',
            display: true,
          },
          grid: {
            display: false,
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
