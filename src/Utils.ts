import fs from 'node:fs';

class Utils {
    static do () {
        fs.writeFile('ps', 'Juan', (err)=> { err !== null ? console.log(err): false });
    };
};

Utils.do();