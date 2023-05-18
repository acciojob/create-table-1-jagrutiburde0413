function insert_Row() {
  // Create new elements
  var newRow = document.createElement('tr');
  var newCell1 = document.createElement('td');
  var newCell2 = document.createElement('td');
  
  // Set cell values
  newCell1.textContent = 'New Cell1';
  newCell2.textContent = 'New Cell2';
  
  // Append cells to the new row
  newRow.appendChild(newCell1);
  newRow.appendChild(newCell2);
  
  // Get reference to the table
  var table = document.getElementById('sampleTable');
  
  // Insert new row at the top
  table.insertRow(0).appendChild(newRow);
}
