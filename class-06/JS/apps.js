'use strict'



var hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7];
var branches = [Seattle, Tokyo, Dubai, Paris, Lima];

var Seattle = {
    name: "Seattle",
    minCus: 23,
    maxCus: 65,
    avgCookiesPerCus: 10,
    cookiesPerHour: [],
    totCookies: 0,

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
                this.totCookies = this.totCookies + this.getAmountOfCookies();
            } else {
                this.cookiesPerHour[counter] = "at " + hours[counter] + " pm = " + this.getAmountOfCookies();
                this.totCookies = this.totCookies + this.getAmountOfCookies();
            }
        }
        // console.log(this.cookiesPerHour);
        // console.log(this.totCookies);
    },
    render: function () {
        this.hourlyCookies();
        var parentElement = document.getElementById("main");
        var article = document.createElement("article");
        parentElement.appendChild(article);

        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        article.appendChild(h2);

        var uList = document.createElement('ul');
            parentElement.appendChild(uList);

        for (var counter2 = 0; counter2 < this.cookiesPerHour.length; counter2++) {
            var listContent = document.createElement('li');
            uList.appendChild(listContent);
            listContent.textContent = (this.cookiesPerHour[counter2]);
        }
        var listContentTot = document.createElement('li');
        uList.appendChild(listContentTot);
        listContentTot.textContent = ("Total cookies sold " + this.totCookies);
    },
};


var Tokyo = {
    name: "Tokyo",
    minCus: 3,
    maxCus: 14,
    avgCookiesPerCus: 2,
    cookiesPerHour: [],
    totCookies: 0,

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
                this.totCookies = this.totCookies + this.getAmountOfCookies();
            } else {
                this.cookiesPerHour[counter] = "at " + hours[counter] + " pm = " + this.getAmountOfCookies();
                this.totCookies = this.totCookies + this.getAmountOfCookies();
            }
        }
        // console.log(this.cookiesPerHour);
        // console.log(this.totCookies);
    },
    render: function () {
        this.hourlyCookies();
        var parentElement = document.getElementById("main");
        var article = document.createElement("article");
        parentElement.appendChild(article);

        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        article.appendChild(h2);

        var uList = document.createElement('ul');
            parentElement.appendChild(uList);

        for (var counter2 = 0; counter2 < this.cookiesPerHour.length; counter2++) {
            var listContent = document.createElement('li');
            uList.appendChild(listContent);
            listContent.textContent = (this.cookiesPerHour[counter2]);
        }
        var listContentTot = document.createElement('li');
        uList.appendChild(listContentTot);
        listContentTot.textContent = ("Total cookies sold " + this.totCookies);
    },
};


var Dubai = {
    name: "Dubai",
    minCus: 11,
    maxCus: 38,
    avgCookiesPerCus: 4,
    cookiesPerHour: [],
    totCookies: 0,

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
                this.totCookies = this.totCookies + this.getAmountOfCookies();
            } else {
                this.cookiesPerHour[counter] = "at " + hours[counter] + " pm = " + this.getAmountOfCookies();
                this.totCookies = this.totCookies + this.getAmountOfCookies();
            }
        }
        // console.log(this.cookiesPerHour);
        // console.log(this.totCookies);
    },
    render: function () {
        this.hourlyCookies();
        var parentElement = document.getElementById("main");
        var article = document.createElement("article");
        parentElement.appendChild(article);

        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        article.appendChild(h2);
      
        var uList = document.createElement('ul');
        parentElement.appendChild(uList);

        for (var counter2 = 0; counter2 < this.cookiesPerHour.length; counter2++) {
            var listContent = document.createElement('li');
            uList.appendChild(listContent);
            listContent.textContent = (this.cookiesPerHour[counter2]);
        }
        var listContentTot = document.createElement('li');
        uList.appendChild(listContentTot);
        listContentTot.textContent = ("Total cookies sold " + this.totCookies);
    },
};


var Paris = {
    name: "Paris",
    minCus: 20,
    maxCus: 38,
    avgCookiesPerCus: 6,
    cookiesPerHour: [],
    totCookies: 0,

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
                this.totCookies = this.totCookies + this.getAmountOfCookies();
            } else {
                this.cookiesPerHour[counter] = "at " + hours[counter] + " pm = " + this.getAmountOfCookies();
                this.totCookies = this.totCookies + this.getAmountOfCookies();
            }
        }
        // console.log(this.cookiesPerHour);
        // console.log(this.totCookies);
    },
    render: function () {
        this.hourlyCookies();
        var parentElement = document.getElementById("main");
        var article = document.createElement("article");
        parentElement.appendChild(article);

        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        article.appendChild(h2);
      
        var uList = document.createElement('ul');
        parentElement.appendChild(uList);

        for (var counter2 = 0; counter2 < this.cookiesPerHour.length; counter2++) {
            var listContent = document.createElement('li');
            uList.appendChild(listContent);
            listContent.textContent = (this.cookiesPerHour[counter2]);
        }
        var listContentTot = document.createElement('li');
        uList.appendChild(listContentTot);
        listContentTot.textContent = ("Total cookies sold " + this.totCookies);
    },
};

var Lima = {
    name: "Lima",
    minCus: 2,
    maxCus: 16,
    avgCookiesPerCus: 3,
    cookiesPerHour: [],
    totCookies: 0,

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
                this.totCookies = this.totCookies + this.getAmountOfCookies();
            } else {
                this.cookiesPerHour[counter] = "at " + hours[counter] + " pm = " + this.getAmountOfCookies();
                this.totCookies = this.totCookies + this.getAmountOfCookies();
            }
        }
        // console.log(this.cookiesPerHour);
        // console.log(this.totCookies);
    },
    render: function () {
        this.hourlyCookies();
        var parentElement = document.getElementById("main");
        var article = document.createElement("article");
        parentElement.appendChild(article);

        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        article.appendChild(h2);
      
        var uList = document.createElement('ul');
        parentElement.appendChild(uList);

        for (var counter2 = 0; counter2 < this.cookiesPerHour.length; counter2++) {
            var listContent = document.createElement('li');
            uList.appendChild(listContent);
            listContent.textContent = (this.cookiesPerHour[counter2]);
        }
        var listContentTot = document.createElement('li');
        uList.appendChild(listContentTot);
        listContentTot.textContent = ("Total cookies sold " + this.totCookies);
    },  
};

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

// for(var counter3=0;counter3<branches.length;counter3++){
//     branches[counter3].render();
// }

