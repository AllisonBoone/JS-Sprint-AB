fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); 
        displayData(data); 
    })
    .catch(error => console.error('Error fetching data:', error));

function namesCustomers(data) {
    const firstName = data.map(item => item.firstName);
    return `Customers names: ${firstName.join(', ')}`;
}

function averageAge(data) {
    const totalAge = data.reduce((acc, curr) => acc + curr.age, 0);
    return `Average Age: ${totalAge / data.length}`;
}

function listGender(data) {
    const gender = data.map(item => item.gender);
    return `Gender: ${gender.join(', ')}`;
}


function displayData(data) {
    data.forEach(item => {
        console.log(`Name: ${item.name}, Age: ${item.age}, Gender: ${item.gender}, Phone Number: ${item.phoneNumber}, Married: ${item.married} `);
    });
}
  
function namesCustomers(data) {
  const firstName = data.map(item => item.firstName);
  return `Customers names: ${firstName.join(', ')}`;
}

function averageAge(data) {
  const totalAge = data.reduce((acc, curr) => acc + curr.age, 0);
  return `Average Age: ${totalAge / data.length}`;
}

function listGender(data) {
  const gender = data.map(item => item.gender);
  return `Gender: ${gender.join(', ')}`;
}

function displayData(data) {
  const output = document.querySelector('#output');
  output.innerHTML = `
      <p>${namesCustomers(data)}</p>
      <p>${averageAge(data)}</p>
      <p>${listGender(data)}</p>
  `;
}