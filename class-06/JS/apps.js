'use strict'

var hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7];

var amman = {
    name: "amman",
    minCus: 23,
    maxCus: 65,
    avgCookiesPerCus: 10,
    cookiesPerHour: [],
    totCookies:0,

    getRandCus: function () {
        return Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
    },
    getAmountOfCookies: function () {
        return this.avgCookiesPerCus * this.getRandCus();
    },
    hourlyCookies: function () {
        for (var counter = 0; counter < hours.length; counter++) {
            if (counter < 6) {
                this.cookiesPerHour[counter] = "at " + hours[counter] + " am = " + this.getAmountOfCookies();
                this.totCookies=this.totCookies+this.getAmountOfCookies();
            } else {
                this.cookiesPerHour[counter] = "at " + hours[counter] + " pm = " + this.getAmountOfCookies();
                this.totCookies=this.totCookies+this.getAmountOfCookies();
            }
        }
        console.log(this.cookiesPerHour);
        console.log(this.totCookies);
    },
};



var zarqa = {
    name: "zarqa",
    minCus: 3,
    maxCus: 14,
    avgCookiesPerCus: 2,
    cookiesPerHour: [],
    totCookies:0,

    getRandCus: function () {
        return Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
    },
    getAmountOfCookies: function () {
        return this.avgCookiesPerCus * this.getRandCus();
    },
    hourlyCookies: function () {
        for (var counter = 0; counter < hours.length; counter++) {
            if (counter < 6) {
                this.cookiesPerHour[counter] = "at " + hours[counter] + " am = " + this.getAmountOfCookies();
                this.totCookies=this.totCookies+this.getAmountOfCookies();
            } else {
                this.cookiesPerHour[counter] = "at " + hours[counter] + " pm = " + this.getAmountOfCookies();
                this.totCookies=this.totCookies+this.getAmountOfCookies();
            }
        }
        console.log(this.cookiesPerHour);
        console.log(this.totCookies);
    },
    
};



// var amountOfCookiesZ=zarqa.avgCookiesPerCus*zarqa.genRandCus();


var irbid = {
    name: "irbid",
    minCus: 11,
    maxCus: 38,
    avgCookiesPerCus: 4,
    cookiesPerHour: [],
    totCookies:0,

    getRandCus: function () {
        return Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
    },
    getAmountOfCookies: function () {
        return this.avgCookiesPerCus * this.getRandCus();
    },
    hourlyCookies: function () {
        for (var counter = 0; counter < hours.length; counter++) {
            if (counter < 6) {
                this.cookiesPerHour[counter] = "at " + hours[counter] + " am = " + this.getAmountOfCookies();
                this.totCookies=this.totCookies+this.getAmountOfCookies();
            } else {
                this.cookiesPerHour[counter] = "at " + hours[counter] + " pm = " + this.getAmountOfCookies();
                this.totCookies=this.totCookies+this.getAmountOfCookies();
            }
        }
        console.log(this.cookiesPerHour);
        console.log(this.totCookies);
    },
};


var maan = {
    name: "maan",
    minCus: 20,
    maxCus: 38,
    avgCookiesPerCus: 6,
    cookiesPerHour: [],
    totCookies:0,

    getRandCus: function () {
        return Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
    },
    getAmountOfCookies: function () {
        return this.avgCookiesPerCus * this.getRandCus();
    },
    hourlyCookies: function () {
        for (var counter = 0; counter < hours.length; counter++) {
            if (counter < 6) {
                this.cookiesPerHour[counter] = "at " + hours[counter] + " am = " + this.getAmountOfCookies();
                this.totCookies=this.totCookies+this.getAmountOfCookies();
            } else {
                this.cookiesPerHour[counter] = "at " + hours[counter] + " pm = " + this.getAmountOfCookies();
                this.totCookies=this.totCookies+this.getAmountOfCookies();
            }
        }
        console.log(this.cookiesPerHour);
        console.log(this.totCookies);
    },
};

var mafraq = {
    name: "irbid",
    minCus: 2,
    maxCus: 16,
    avgCookiesPerCus: 3,
    cookiesPerHour: [],
    totCookies:0,

    getRandCus: function () {
        return Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
    },
    getAmountOfCookies: function () {
        return this.avgCookiesPerCus * this.getRandCus();
    },
    hourlyCookies: function () {
        for (var counter = 0; counter < hours.length; counter++) {
            if (counter < 6) {
                this.cookiesPerHour[counter] = "at " + hours[counter] + " am = " + this.getAmountOfCookies();
                this.totCookies=this.totCookies+this.getAmountOfCookies();
            } else {
                this.cookiesPerHour[counter] = "at " + hours[counter] + " pm = " + this.getAmountOfCookies();
                this.totCookies=this.totCookies+this.getAmountOfCookies();
            }
        }
        console.log(this.cookiesPerHour);
        console.log(this.totCookies);
    },
};

var branches = [amman, zarqa, irbid, maan, mafraq];

for (var counter2=0;counter2<5;counter2++){
    branches[counter2].hourlyCookies();
}
// amman.hourlyCookies();
// irbid.hourlyCookies();


