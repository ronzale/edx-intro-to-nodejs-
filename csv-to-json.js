
// const fs = require('fs');
// const path = require('path');
const csvToJson = require('convert-csv-to-json');

const fileInputName = 'customer-data.csv';
const fileOutputName = 'customer-data.json';

csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInputName);
csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
