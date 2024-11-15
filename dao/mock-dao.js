const fs = require('fs');

const dataFile = '../data/data.json';

class Dao{
    constructor() {
        const fileContents = fs.readFileSync(dataFile, 'utf-8');
        this.data = JSON.parse(fileContents);
    }

    queryForAllData() {
        return this.data;
    }
}