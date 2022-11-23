const fs = require("fs");
const { parse } = require("csv-parse");

const data = [];

fs.createReadStream("./DATA.csv")
.pipe(parse({ delimiter: ",", columns: true, ltrim: true, }))
.on("data", function (row) {
  data.push(row);
})
.on("error", function (error) {
  console.log(error.message);
})
.on("end", function () {
  console.log("finished");
  saveJSON(data);
});


function saveJSON(data) {
    var database = {};
    data.forEach(element => {
        keys = ["RSCID", "Name", "Franchise", "Team", "Tier", "SBV", "GP"];
        let rscid = element['Discord ID'];
        database[rscid] = {};
        keys.forEach(e => {
            database[rscid][e] = element[e];
        })
    });
    fs.writeFile("Data.json", JSON.stringify(database), function(err) {
        if (err) {
            console.log(err);
        }
    });
}