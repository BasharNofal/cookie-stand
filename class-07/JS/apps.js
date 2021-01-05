'use strict'

var hours = ['6 am', '7 am', '8 am', '9 am', ' 10 am', ' 11 am', ' 12 pm', ' 1 pm', ' 2 pm', ' 3 pm', ' 4 pm', ' 5 pm', ' 6 pm', ' 7 pm'];
var hoursAndTot = [" ",'6:00am', '7:00am', '8:00am', '9:00am', ' 10:00am', ' 11:00am', ' 12:00pm', ' 1:00pm', ' 2:00pm', ' 3:00pm', ' 4:00pm', ' 5:00pm', ' 6:00pm', ' 7:00pm', "Daily Location Total"];
var branches = [Seattle, Tokyo, Dubai, Paris, Lima];

function BranchData(name, minCus, maxCus, randCus, avgCookiesPerCus, amountOfCookies, cookiesPerHour, totCookies,) {
    this.name = name;
    this.minCus = minCus;
    this.maxCus = maxCus;
    this.randCus = randCus;
    this.avgCookiesPerCus = avgCookiesPerCus;
    this.amountOfCookies = amountOfCookies;
    this.cookiesPerHour = cookiesPerHour;
    this.totCookies = totCookies;
    this.brHourlyTot=[];
}

BranchData.prototype.getRandCus = function () {
    return this.randCus = Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
}

BranchData.prototype.getAmountOfCookies = function () {
    return this.amountOfCookies = this.avgCookiesPerCus * this.getRandCus();
}

BranchData.prototype.hourlyCookies = function () {
    for (var counter = 0; counter < hours.length; counter++) {
        this.cookiesPerHour[counter] = this.getAmountOfCookies();
        this.totCookies = this.totCookies + this.getAmountOfCookies();

    }
    // console.log(this.cookiesPerHour);
    // console.log(this.totCookies);
}

// Initializing the table
var parentElement = document.getElementById('main');
var article = document.createElement('article');
parentElement.appendChild(article);

var table = document.createElement('table');
article.appendChild(table);

var hoursAndTotalTr = document.createElement('tr');
table.appendChild(hoursAndTotalTr);
for (var counter3 = 0; counter3 < hoursAndTot.length; counter3++) {
    var hoursAndTotalTc = document.createElement('th');
    hoursAndTotalTc.textContent = hoursAndTot[counter3];
    hoursAndTotalTr.appendChild(hoursAndTotalTc);
}

// Render the data in the table
BranchData.prototype.render = function () {
    var tableRow = document.createElement('tr');
    table.appendChild(tableRow);

    var tableBrName = document.createElement('th');
    tableBrName.textContent = this.name;
    tableRow.appendChild(tableBrName);

    for (var counter2 = 0; counter2 < hours.length; counter2++) {
        var tableCookiesSold = document.createElement('td');
        tableCookiesSold.textContent = this.cookiesPerHour[counter2];
        tableRow.appendChild(tableCookiesSold);
    }

    var tableTotCookiesPerBr = document.createElement('td');
    tableTotCookiesPerBr.textContent = this.totCookies;
    tableRow.appendChild(tableTotCookiesPerBr);
}


BranchData.prototype.renderBottomRow = function(){
    for(var counter4=0;counter4<hours.length;counter4++){
       this.brHourlyTot[counter4]+= this.cookiesPerHour[counter4];        
    }
    console.log(this.brHourlyTot);
}


var Seattle = new BranchData("Seattle", 23, 65, 0, 10, 0, [], 0);
Seattle.getRandCus();
Seattle.getAmountOfCookies();
Seattle.hourlyCookies();
Seattle.render();
Seattle.renderBottomRow();
// console.log(Seattle);

var Tokyo = new BranchData("Tokyo", 3, 24, 0, 2, 0, [], 0);
Tokyo.getRandCus();
Tokyo.getAmountOfCookies();
Tokyo.hourlyCookies();
Tokyo.render();
// Tokyo.renderBottomRow();
// console.log(Tokyo);

var Dubai = new BranchData("Dubai", 11, 38, 0, 4, 0, [], 0);
Dubai.getRandCus();
Dubai.getAmountOfCookies();
Dubai.hourlyCookies();
Dubai.render();
// console.log(Dubai);

var Paris = new BranchData("Paris", 20, 38, 0, 6, 0, [], 0);
Paris.getRandCus();
Paris.getAmountOfCookies();
Paris.hourlyCookies();
Paris.render();
// console.log(Paris);

var Lima = new BranchData("Lima", 2, 16, 0, 3, 0, [], 0);
Lima.getRandCus();
Lima.getAmountOfCookies();
Lima.hourlyCookies();
Lima.render();
// console.log(Lima);

