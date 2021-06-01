'use strict';

let workingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  /*let cont = document.getElementById('container');
  let table = document.createElement('table');
  function headerRow(){
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    let th = document.createElement('th');
    headerRow.appendChild(th);
    th.textContent= ('6am');*/
  }

  // Lab07

function SalmonShops(locName,min,max,avg,custPerHour,cookiesPerH,total,/*calcRandomCust,calcRandomCookies*/){
    this.locName = locName;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.custPerHour = custPerHour;
    this.cookiesPerH = cookiesPerH;
    this.total = total;
    /*this.calcRandomCust= calcRandomCust;
    this.calcRandomCookies = calcRandomCookies;*/
    
}
 //prototypes
 SalmonShops.prototype.calcRandomCust= function (){
    for(let i = 0; i< workingHours.length;i++){
        this.custPerHour.push(randomVal(this.min,this.max));
  }  
 }

 SalmonShops.prototype.calcRandomCookies= function(){
    for(let i = 0 ; i < workingHours.length; i++){
        this.cookiesPerH.push(this.custPerHour[i] * Math.ceil(this.avg));
        this.total = this.total + this.cookiesPerH[i];

    }
 }

 SalmonShops.prototype.render= function(){
    let locName = document.createElement('h2');
    cont.appendChild(locName);
    locName.textContent = this.locName;

    let unList = document.createElement('ul');   
    cont.appendChild(unList);

    for(let i = 0 ; i < workingHours.length; i++){
        let liItems = document.createElement('li');
        unList.appendChild(liItems);
        liItems.textContent = `${workingHours[i]} : ${this.cookiesPerH[i]} cookies`;
    }

    let dayTotal = document.createElement('li');
    unList.appendChild(dayTotal);
    dayTotal.textContent = `Total : ${this.total} cookies`;

    /*let headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    let th = document.createElement('th');
    headerRow.appendChild(th);
    th.textContent= ('6am');
    let th2 = document.createElement('th');
    headerRow.appendChild(th2);
    th.textContent= ('7am');
    let th3 = document.createElement('th');
    headerRow.appendChild(th3);
    th.textContent= ('8am');
    let th3 = document.createElement('th');
    headerRow.appendChild(th3);
    th.textContent= ('9m');
    let th4 = document.createElement('th');
    headerRow.appendChild(th4);
    th.textContent= ('10am');
    let th5 = document.createElement('th');
    headerRow.appendChild(th5);
    th.textContent= ('11am');
    let th6 = document.createElement('th');
    headerRow.appendChild(th6);
    th.textContent= ('12pm');
    let th7 = document.createElement('th');
    headerRow.appendChild(th7);
    th.textContent= ('1pm');
    let th8 = document.createElement('th');
    headerRow.appendChild(th8);
    th.textContent= ('2pm');
    let th9 = document.createElement('th');
    headerRow.appendChild(th9);
    th.textContent= ('3pm');
    let th10 = document.createElement('th');
    headerRow.appendChild(th10);
    th.textContent= ('4pm');
    let th11 = document.createElement('th');
    headerRow.appendChild(th1);
    th.textContent= ('5pm');
    let th12= document.createElement('th');
    headerRow.appendChild(th12);
    th.textContent= ('6pm');
    let th13 = document.createElement('th');
    headerRow.appendChild(th13);
    th.textContent= ('7pm');
   
   
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);*/

    
}



// instences
let seattle = new SalmonShops('Seattle', 23, 65, 6.3, [], [], 0);
console.log(seattle);

let Tokyo = new SalmonShops('Tokyo', 3, 24 ,1.2 ,[] , [], 0);
console.log(Tokyo);

let Dubai = new SalmonShops('Dubai', 11, 38, 3.7, [], [], 0);
console.log(Dubai);

let Paris = new SalmonShops('Paris', 11, 38, 2.3, [], [], 0);
console.log(Paris);

let Lima = new SalmonShops('Lima', 2, 16, 4.6, [],[], 0);
console.log(Lima);


seattle.calcRandomCust();
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
Lima.render();

