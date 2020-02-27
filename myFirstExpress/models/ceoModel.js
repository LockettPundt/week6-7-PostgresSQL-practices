'use script'
const db = require('./conn');

class ExecutiveList {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static async getAll() {
        try {
            console.log(`it's getting to this point`);
            const response = await db.any(`SELECT * FROM ceos;`);
            return response;
        } catch (error) {
            return error;
        }
    }
    static async getById(id) {
        try {
            const response = await db.any(`SELECT * FROM ceos WHERE id = ${id};`);
            return response;
        } catch(error) {
            return error;
        }
    }
}


module.exports = ExecutiveList;