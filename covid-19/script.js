axios.get('https://api.covid19api.com/summary')
    .then(response => {
      var rawData = dataStore(response.data.Countries);
      createTable(rawData);
    })
    .catch(error => console.log(error));

function dataStore(data) {
  let list = [];
  data.forEach(item => {
    list.push({
      country: item.Country,
      newCases: item.NewConfirmed,
      totalCases: item.TotalConfirmed,
      newDeaths: item.NewDeaths,
      totalDeaths: item.TotalDeaths,
      newRecoveries: item.NewRecovered,
      totalRecoveries: item.TotalRecovered
    })
  })
  return list;
};

let TC=0,NC=0,TD=0,ND=0,TR=0,NR=0;

function createTable(d) {
  const mainContainer = document.getElementById("tableBody");
  const last = document.createElement("tr");

  for (var i = 0; i < d.length; i++) {
    const row = document.createElement("tr");    
    row.innerHTML =
      '<td class="bg-gray">' + d[i].country + '</td>'
      + '<td>' + d[i].totalCases + '</td>'
      + '<td>' + d[i].newCases + '</td>'
      + '<td>' + d[i].totalDeaths + '</td>'
      + '<td>' + d[i].newDeaths + '</td>'
      + '<td>' + d[i].totalRecoveries + '</td>'
      + '<td>' + d[i].newRecoveries + '</td>';
    mainContainer.appendChild(row);

    TC+=d[i].totalCases;
    NC+=d[i].newCases;
    TD+=d[i].totalDeaths;
    ND+=d[i].newDeaths;
    TR+=d[i].totalRecoveries;
    NR+=d[i].newRecoveries;
        
  }
  last.innerHTML =
      '<td class="bg-gray">Total</td>'
      + '<td>' + TC + '</td>'
      + '<td>' + NC + '</td>'
      + '<td>' + TD + '</td>'
      + '<td>' + ND + '</td>'
      + '<td>' + TR + '</td>'
      + '<td>' + NR + '</td>';
  mainContainer.appendChild(last);

  document.getElementById('NC-label').innerHTML= '+' + NC;
  document.getElementById('TC-label').innerHTML=TC;
  document.getElementById('ND-label').innerHTML= '+' + ND;
  document.getElementById('TD-label').innerHTML=TD;
  document.getElementById('NR-label').innerHTML= '+' + NR;
  document.getElementById('TR-label').innerHTML=TR;
};

