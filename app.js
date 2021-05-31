'use strict';

let workingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  let cont = document.getElementById('container');

  // first location 
const seattle = {
    locName:'Seattle',
    min:23,
    max:65,
    avg:6.3,
    custPerHour:[],
    cookiesPerH:[],
    total:0,
    calcRandomCust:function(){
          for(let i = 0; i< workingHours.length;i++){
                this.custPerHour.push(randomVal(this.min,this.max));
          }  
    },
    
    calcRandomCookies:function(){
        for(let i = 0 ; i < workingHours.length; i++){
            this.cookiesPerH.push(this.custPerHour[i] * Math.ceil(this.avg));
            this.total = this.total + this.cookiesPerH[i];

        }
    },
    render:function(){
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
    }


};

seattle.calcRandomCust();
seattle.calcRandomCookies();
seattle.render();
//console.log(seattle);



// second location
const Tokyo = {
    locName:'Tokyo',
    min:3,
    max:24,
    avg:1.2,
    custPerHour:[],
    cookiesPerH:[],
    total:0,
    calcRandomCust:function(){
          for(let i = 0; i< workingHours.length;i++){
                this.custPerHour.push(randomVal(this.min,this.max));
          }  
    },
    
    calcRandomCookies:function(){
        for(let i = 0 ; i < workingHours.length; i++){
            this.cookiesPerH.push(this.custPerHour[i] * Math.ceil(this.avg));
            this.total = this.total + this.cookiesPerH[i];

        }
    },
    render:function(){
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
    }


};

Tokyo.calcRandomCust();
Tokyo.calcRandomCookies();
Tokyo.render();
//console.log(Tokyo);

//Third location
const Dubai= {
    locName:'Dubai',
    min:11,
    max:38,
    avg:3.7,
    custPerHour:[],
    cookiesPerH:[],
    total:0,
    calcRandomCust:function(){
          for(let i = 0; i< workingHours.length;i++){
                this.custPerHour.push(randomVal(this.min,this.max));
          }  
    },
    
    calcRandomCookies:function(){
        for(let i = 0 ; i < workingHours.length; i++){
            this.cookiesPerH.push(this.custPerHour[i] * Math.ceil(this.avg));
            this.total = this.total + this.cookiesPerH[i];

        }
    },
    render:function(){
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
    }


};

Dubai.calcRandomCust();
Dubai.calcRandomCookies();
Dubai.render();
//console.log(Dubai);


//Fourth Place

const Paris= {
    locName:'Paris',
    min:11,
    max:38,
    avg:2.3,
    custPerHour:[],
    cookiesPerH:[],
    total:0,
    calcRandomCust:function(){
          for(let i = 0; i< workingHours.length;i++){
                this.custPerHour.push(randomVal(this.min,this.max));
          }  
    },
    
    calcRandomCookies:function(){
        for(let i = 0 ; i < workingHours.length; i++){
            this.cookiesPerH.push(this.custPerHour[i] * Math.ceil(this.avg));
            this.total = this.total + this.cookiesPerH[i];

        }
    },
    render:function(){
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
    }


};

Paris.calcRandomCust();
Paris.calcRandomCookies();
Paris.render();
//console.log(Paris);

//Fifth Place 

const Lima= {
    locName:'Lima',
    min:2,
    max:16,
    avg:4.6,
    custPerHour:[],
    cookiesPerH:[],
    total:0,
    calcRandomCust:function(){
          for(let i = 0; i< workingHours.length;i++){
                this.custPerHour.push(randomVal(this.min,this.max));
          }  
    },
    
    calcRandomCookies:function(){
        for(let i = 0 ; i < workingHours.length; i++){
            this.cookiesPerH.push(this.custPerHour[i] * Math.ceil(this.avg));
            this.total = this.total + this.cookiesPerH[i];

        }
    },
    render:function(){
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
    }


};

Lima.calcRandomCust();
Lima.calcRandomCookies();
Lima.render();
//console.log(Lima);

