'use strict';

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

  let cont = document.getElementById('container');
  let table = document.createElement('table');
  cont.appendChild(table);


let arrOfObjects = [];
function SalmonShops(locName,min,max,avg){
    this.locName = locName;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.custPerHour = [];
    this.cookiesPerH = [];
    this.total = 0;
   arrOfObjects.push(this);


}

 //prototypes
  SalmonShops.prototype.calcRandomCust= function (){
    for(let i = 0; i < hours.length;i++){
        this.custPerHour.push(randomVal(this.min,this.max));
  }  
}

 SalmonShops.prototype.calcRandomCookies= function(){
    for(let i = 0 ; i < hours.length; i++){
        this.cookiesPerH.push(this.custPerHour[i] * Math.ceil(this.avg));
        this.total += this.cookiesPerH[i];


    }
 }


 function getHeaderRow(){
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    let emptyCell = document.createElement('th');
    headerRow.appendChild(emptyCell);

    for(let i = 0; i< hours.length; i++){
        let th = document.createElement('th');
        headerRow.appendChild(th);
        th.textContent = hours[i];
    }

    let dailyLoc = document.createElement('th')
    headerRow.appendChild(dailyLoc);
    dailyLoc.textContent = 'DailyLocTotal';
}


SalmonShops.prototype.render= function(){
    let tr = document.createElement('tr');
    table.appendChild(tr);
    let firstCell = document.createElement('th');
    tr.appendChild(firstCell);
    firstCell.textContent = this.locName;
    for(let i= 0; i < this.cookiesPerH.length; i++){
        let td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = this.cookiesPerH[i];
    }

    let lastCell = document.createElement('th');
    tr.appendChild(lastCell);
    lastCell.textContent = this.total
}


// instences
let seattle = new SalmonShops('Seattle', 23, 65, 6.3);
let Tokyo = new SalmonShops('Tokyo', 3, 24 ,1.2);
let Dubai = new SalmonShops('Dubai', 11, 38, 3.7);
let Paris = new SalmonShops('Paris', 11, 38, 2.3);
let Lima = new SalmonShops('Lima', 2, 16, 4.6);

//console.log(arrOfObjects);


getHeaderRow();
for (let i = 0; i < arrOfObjects.length; i++){
    arrOfObjects[i].calcRandomCust();
    arrOfObjects[i].calcRandomCookies();
    arrOfObjects[i].render();
}

console.log(arrOfObjects);
function footRow (){
    let lastRow = document.createElement('tr');
    table.appendChild(lastRow);
    let firstCell = document.createElement('th');
    lastRow.appendChild(firstCell);
    firstCell.textContent = 'Totals'
    
    let megaTotal = 0;


    for(let i = 0 ;i < hours.length; i++){
        let sum = 0;
        sum = seattle.cookiesPerH[i] + Tokyo.cookiesPerH[i] + Paris.cookiesPerH[i] + Dubai.cookiesPerH[i] + Lima.cookiesPerH[i];

        let td = document.createElement('td');
        lastRow.appendChild(td);
        td.textContent = sum;
        megaTotal = megaTotal + sum;
    
    }
    let totals = document.createElement('th');
    lastRow.appendChild(totals);
    totals.textContent= megaTotal;
} 
footRow();







/*seattle.calcRandomCust();
seattle.calcRandomCookies();
seattle.render();
Tokyo.calcRandomCust();
Tokyo.calcRandomCookies();
Tokyo.render();
Dubai.calcRandomCust();
Dubai.calcRandomCookies();
Dubai.render();
Paris.calcRandomCust();
Paris.calcRandomCookies();
Paris.render();
Lima.calcRandomCust();
Lima.calcRandomCookies();
Lima.render();*/


const branchesForm = document.getElementById('storeBranches');
branchesForm.addEventListener('submit', handleSubmitting);
function handleSubmitting(event){
    event.preventDefault(); 
    //console.log(event);
    //console.log(event.target.nameFiled.value);

    
    let newName = event.target.nameFiled.value;
    //console.log(newName);
    let newMin = Number(event.target.minFiled.value);
    //console.log(newMin);
    let newMax = Number(event.target.maxFiled.value);
    //console.log(newMax);
    let newAvg= Number(event.target.avgFiled.value);
    //console.log(newAvg);
    let newBranch = new SalmonShops(newName, newMin, newMax, newAvg);
    //console.log(newBranch); 
    if(newMax < newMin){
        alert('Please, add a right number!');
        
    }

    
    newBranch.calcRandomCust();
    newBranch.calcRandomCookies();
    newBranch.render();

    

    
}

