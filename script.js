// function insert_Row() {
//   // Create new elements
//   var newRow = document.createElement('tr');
//   var newCell1 = document.createElement('td');
//   var newCell2 = document.createElement('td');
  
//   // Set cell values
//   newCell1.textContent = 'New Cell1';
//   newCell2.textContent = 'New Cell2';
  
//   // Append cells to the new row
//   newRow.appendChild(newCell1);
//   newRow.appendChild(newCell2);
  
//   // Get reference to the table body
//   var table = document.getElementById('sampleTable');
 
//   // Append new row to the table body
//   table.insertRow(0).appendChild(newRow);
// }


function insert_Row() {
  // Get reference to the table
  var table = document.getElementById('sampleTable');
  
  // Insert new row at the first position
  var newRow = table.insertRow(0);
  
  // Create new cells
  var newCell1 = newRow.insertCell(0);
  var newCell2 = newRow.insertCell(1);
  
  // Set cell values
  newCell1.textContent = 'New Cell1';
  newCell2.textContent = 'New Cell2';
}
