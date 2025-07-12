interface Student{
firstName : string,
lastName : string,
age : number,
location : string
}
const Chala : Student = {firstName : "Chala" ,lastName : "Bona" ,age: 22, location:"Adama"}
const Abebe : Student = {firstName : "Abebe" ,lastName : "Abebaw" ,age: 25, location:"Gonder"}
const studentsList : Student[] = []
const table: HTMLTableElement = document.createElement('table');

const headerRow: HTMLTableRowElement = document.createElement('tr');

const header1: HTMLTableCellElement = document.createElement('th');
header1.textContent = 'firstname';

const header2: HTMLTableCellElement = document.createElement('th');
header2.textContent = 'location';

headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});
const container = document.getElementById('table-container');
if (container) {
  container.appendChild(table);
}