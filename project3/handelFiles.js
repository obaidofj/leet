// const fs = require('fs');
import fs from 'fs';
export let jsonData;

export const readJsonFile = async (filePath) => {
  try {
    const fileData = await fs.promises.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(fileData);
    return jsonData;
  } catch (error) {
    console.error('Error reading JSON file:', error);
    throw error;
  }
}



export const writeToJSON = () => {
  // const myData = "Hello from the code!";
  fs.writeFile("data.json", JSON.stringify(jsonData), 'utf-8', (err) => {
    if (err) {
      console.log("Something went wrong while writing to the file!");
      console.log(err.message);
    } else {
      console.log("File has been written.");
    }
  });
}

export const appendToJsonFile = () => {
  const newData = "\nHello from the code!";
  fs.appendFile("data.txt", newData, "utf-8", (err) => {
    if (err) {
      console.log("Something went wrong while appending to the file!");
      console.log(err.message);
    } else {
      console.log("File has been updated.");
    }
  })
  
}

(async ()=>{
let data= await readJsonFile('movies.json');
console.log( data);
})();


