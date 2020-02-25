var fs = require("fs");
var text = fs.readFileSync("./itemIds.txt").toString('utf-8');
var textByLine = text.split("\n")

let dictionary = {}
for(let i=0;i<textByLine.length;i++) {
  let id = textByLine[i].slice(0,textByLine[i].indexOf(","))
  let secondaryId = textByLine[i].slice(textByLine[i].indexOf(",")+1,textByLine[i].lastIndexOf(","))
  let name = textByLine[i].slice(textByLine[i].lastIndexOf(",")+1).replace(" ","_")
  
  dictionary[id + "_" + secondaryId] = name
}

dictionary= JSON.stringify(dictionary)
console.log(dictionary)

fs.writeFile('itemIdsAsObjectArray.txt', dictionary, function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
  });
