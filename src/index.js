// import axios from 'axios';
// import Chart from 'chart.js/auto';

// var data = [
//   {
//     Date: 'Count of new email conversations marked to Support Team',
//     'Fri Dec 01 2023 00:00:00 GMT+0530 (India Standard Time)': 51,
//     'Sat Dec 02 2023 00:00:00 GMT+0530 (India Standard Time)': 28,
//     'Sun Dec 03 2023 00:00:00 GMT+0530 (India Standard Time)': 11,
//     'Mon Dec 04 2023 00:00:00 GMT+0530 (India Standard Time)': 53,
//     'Tue Dec 05 2023 00:00:00 GMT+0530 (India Standard Time)': 60,
//     'Wed Dec 06 2023 00:00:00 GMT+0530 (India Standard Time)': 57,
//   },
//   {
//     Date: 'Average First response time in Hours',
//     'Fri Dec 01 2023 00:00:00 GMT+0530 (India Standard Time)': 2.45,
//     'Sat Dec 02 2023 00:00:00 GMT+0530 (India Standard Time)': 1.03,
//     'Sun Dec 03 2023 00:00:00 GMT+0530 (India Standard Time)': 0.38,
//     'Mon Dec 04 2023 00:00:00 GMT+0530 (India Standard Time)': 0.95,
//     'Tue Dec 05 2023 00:00:00 GMT+0530 (India Standard Time)': 1.44,
//     'Wed Dec 06 2023 00:00:00 GMT+0530 (India Standard Time)': 1.23,
//   },
//   {
//     Date: 'Median First response time in Hours',
//     'Fri Dec 01 2023 00:00:00 GMT+0530 (India Standard Time)': 0.87,
//     'Sat Dec 02 2023 00:00:00 GMT+0530 (India Standard Time)': 1.05,
//     'Sun Dec 03 2023 00:00:00 GMT+0530 (India Standard Time)': 0.29,
//     'Mon Dec 04 2023 00:00:00 GMT+0530 (India Standard Time)': 0.65,
//     'Tue Dec 05 2023 00:00:00 GMT+0530 (India Standard Time)': 1.36,
//     'Wed Dec 06 2023 00:00:00 GMT+0530 (India Standard Time)': 1.13,
//   },
//   {
//     Date: '% of First Response within SLA',
//     'Fri Dec 01 2023 00:00:00 GMT+0530 (India Standard Time)': 0.5625,
//     'Sat Dec 02 2023 00:00:00 GMT+0530 (India Standard Time)': 0.5,
//     'Sun Dec 03 2023 00:00:00 GMT+0530 (India Standard Time)': 1,
//     'Mon Dec 04 2023 00:00:00 GMT+0530 (India Standard Time)': 0.6604,
//     'Tue Dec 05 2023 00:00:00 GMT+0530 (India Standard Time)': 0.3793,
//     'Wed Dec 06 2023 00:00:00 GMT+0530 (India Standard Time)': 0.4211,
//   },
//   {
//     Date: 'p95 - First response time in Minutes',
//     'Fri Dec 01 2023 00:00:00 GMT+0530 (India Standard Time)': 176.43,
//     'Sat Dec 02 2023 00:00:00 GMT+0530 (India Standard Time)': 110.09,
//     'Sun Dec 03 2023 00:00:00 GMT+0530 (India Standard Time)': 48.48,
//     'Mon Dec 04 2023 00:00:00 GMT+0530 (India Standard Time)': 166.37,
//     'Tue Dec 05 2023 00:00:00 GMT+0530 (India Standard Time)': 195.48,
//     'Wed Dec 06 2023 00:00:00 GMT+0530 (India Standard Time)': 144.8,
//   },
//   {
//     Date: '% Tagging on Zendesk on First Response Tickets',
//     'Fri Dec 01 2023 00:00:00 GMT+0530 (India Standard Time)': 0.9167,
//     'Sat Dec 02 2023 00:00:00 GMT+0530 (India Standard Time)': 0.8929,
//     'Sun Dec 03 2023 00:00:00 GMT+0530 (India Standard Time)': 0.9091,
//     'Mon Dec 04 2023 00:00:00 GMT+0530 (India Standard Time)': 0.8679,
//     'Tue Dec 05 2023 00:00:00 GMT+0530 (India Standard Time)': 0.8966,
//     'Wed Dec 06 2023 00:00:00 GMT+0530 (India Standard Time)': 0.9123,
//   },
//   {
//     Date: 'Count of Overall Tickets Resolved Today',
//     'Fri Dec 01 2023 00:00:00 GMT+0530 (India Standard Time)': 55,
//     'Sat Dec 02 2023 00:00:00 GMT+0530 (India Standard Time)': 18,
//     'Sun Dec 03 2023 00:00:00 GMT+0530 (India Standard Time)': 17,
//     'Mon Dec 04 2023 00:00:00 GMT+0530 (India Standard Time)': 43,
//     'Tue Dec 05 2023 00:00:00 GMT+0530 (India Standard Time)': 40,
//     'Wed Dec 06 2023 00:00:00 GMT+0530 (India Standard Time)': 75,
//   },
//   {
//     Date: 'Average Resolution time in Days',
//     'Fri Dec 01 2023 00:00:00 GMT+0530 (India Standard Time)': 5.35,
//     'Sat Dec 02 2023 00:00:00 GMT+0530 (India Standard Time)': 9.24,
//     'Sun Dec 03 2023 00:00:00 GMT+0530 (India Standard Time)': 2.45,
//     'Mon Dec 04 2023 00:00:00 GMT+0530 (India Standard Time)': 10.07,
//     'Tue Dec 05 2023 00:00:00 GMT+0530 (India Standard Time)': 4.93,
//     'Wed Dec 06 2023 00:00:00 GMT+0530 (India Standard Time)': 5.27,
//   },
//   {
//     Date: 'Median Resolution time in Days',
//     'Fri Dec 01 2023 00:00:00 GMT+0530 (India Standard Time)': 3.26,
//     'Sat Dec 02 2023 00:00:00 GMT+0530 (India Standard Time)': 1.53,
//     'Sun Dec 03 2023 00:00:00 GMT+0530 (India Standard Time)': 1.13,
//     'Mon Dec 04 2023 00:00:00 GMT+0530 (India Standard Time)': 5.75,
//     'Tue Dec 05 2023 00:00:00 GMT+0530 (India Standard Time)': 1.08,
//     'Wed Dec 06 2023 00:00:00 GMT+0530 (India Standard Time)': 4.56,
//   },
//   {
//     Date: 'p80 - Resolution time in Days',
//     'Fri Dec 01 2023 00:00:00 GMT+0530 (India Standard Time)': 8.77,
//     'Sat Dec 02 2023 00:00:00 GMT+0530 (India Standard Time)': 7.57,
//     'Sun Dec 03 2023 00:00:00 GMT+0530 (India Standard Time)': 4.98,
//     'Mon Dec 04 2023 00:00:00 GMT+0530 (India Standard Time)': 14.13,
//     'Tue Dec 05 2023 00:00:00 GMT+0530 (India Standard Time)': 14.92,
//     'Wed Dec 06 2023 00:00:00 GMT+0530 (India Standard Time)': 8.16,
//   },
//   {
//     Date: 'CSAT Score',
//     'Fri Dec 01 2023 00:00:00 GMT+0530 (India Standard Time)': 1,
//     'Sat Dec 02 2023 00:00:00 GMT+0530 (India Standard Time)': 0.5,
//     'Sun Dec 03 2023 00:00:00 GMT+0530 (India Standard Time)': 1,
//     'Mon Dec 04 2023 00:00:00 GMT+0530 (India Standard Time)': 1,
//     'Tue Dec 05 2023 00:00:00 GMT+0530 (India Standard Time)': 1,
//     'Wed Dec 06 2023 00:00:00 GMT+0530 (India Standard Time)': 1,
//   },
//   {
//     Date: 'Fill Rate for CSAT',
//     'Fri Dec 01 2023 00:00:00 GMT+0530 (India Standard Time)': 0.1455,
//     'Sat Dec 02 2023 00:00:00 GMT+0530 (India Standard Time)': 0.1111,
//     'Sun Dec 03 2023 00:00:00 GMT+0530 (India Standard Time)': 0.0588,
//     'Mon Dec 04 2023 00:00:00 GMT+0530 (India Standard Time)': 0.1163,
//     'Tue Dec 05 2023 00:00:00 GMT+0530 (India Standard Time)': 0.125,
//     'Wed Dec 06 2023 00:00:00 GMT+0530 (India Standard Time)': 0.16,
//   },
//   {
//     Date: 'Count of Tickets due for Response',
//     'Fri Dec 01 2023 00:00:00 GMT+0530 (India Standard Time)': 19,
//     'Sat Dec 02 2023 00:00:00 GMT+0530 (India Standard Time)': 10,
//     'Sun Dec 03 2023 00:00:00 GMT+0530 (India Standard Time)': 17,
//     'Mon Dec 04 2023 00:00:00 GMT+0530 (India Standard Time)': 23,
//     'Tue Dec 05 2023 00:00:00 GMT+0530 (India Standard Time)': 17,
//     'Wed Dec 06 2023 00:00:00 GMT+0530 (India Standard Time)': 14,
//   },
//   {
//     Date: 'Count of Tickets Responded',
//     'Fri Dec 01 2023 00:00:00 GMT+0530 (India Standard Time)': 11,
//     'Sat Dec 02 2023 00:00:00 GMT+0530 (India Standard Time)': 4,
//     'Sun Dec 03 2023 00:00:00 GMT+0530 (India Standard Time)': 14,
//     'Mon Dec 04 2023 00:00:00 GMT+0530 (India Standard Time)': 5,
//     'Tue Dec 05 2023 00:00:00 GMT+0530 (India Standard Time)': 17,
//     'Wed Dec 06 2023 00:00:00 GMT+0530 (India Standard Time)': 7,
//   },
//   {
//     Date: 'FCR',
//     'Fri Dec 01 2023 00:00:00 GMT+0530 (India Standard Time)': 60,
//     'Sat Dec 02 2023 00:00:00 GMT+0530 (India Standard Time)': 55.56,
//     'Sun Dec 03 2023 00:00:00 GMT+0530 (India Standard Time)': 58.82,
//     'Mon Dec 04 2023 00:00:00 GMT+0530 (India Standard Time)': 34.88,
//     'Tue Dec 05 2023 00:00:00 GMT+0530 (India Standard Time)': 37.5,
//     'Wed Dec 06 2023 00:00:00 GMT+0530 (India Standard Time)': 46.67,
//   },
// ];

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
