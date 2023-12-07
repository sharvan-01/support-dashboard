// import Chart from 'chart.js/auto';
import axios from 'axios';
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
    var { FCR } = data;

    Object.keys(FCR).forEach((element) => {
      var date = new Date(Date.parse(element));
      date = date.toLocaleDateString();
      fcrLabels.push(date);
    });

    Object.values(FCR).forEach((element) => {
      fcrValues.push(element);
    });
    chart();
  } catch (error) {
    console.error('Error:', error);
  }
}

// function accessingData(data) {
//   console.log();
// }
var data = {};
var fcrLabels = [];
var fcrValues = [];

createData();

async function chart() {
  new Chart(document.getElementById('acquisitions'), {
    type: 'line',
    data: {
      label: fcrLabels,
      datasets: [
        {
          label: 'FCR sheet',
          data: fcrValues,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    },
  });
}
