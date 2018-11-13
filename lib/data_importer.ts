import { Input } from "./interfaces/input";
// tslint:disable-next-line:no-var-requires
const fs = require("fs");
// tslint:disable-next-line:no-var-requires
const path = require("path");

class DataImporter {

    public async import(pwd: string, fileToImport: string): Promise<Input> {
        try {
            const filePath = path.resolve(pwd, fileToImport);

            const data = fs.readFileSync(filePath);

            const file = JSON.parse(data);
            const fileValid = this.validate(file);

            if (!fileValid) {
                throw new Error("File contains invalid elements.");
            }

            return file;
        } catch (error) {
            console.log("File Import Error", error);
            throw error;
        }
    }

    private validate(file: any): boolean {
        if (typeof(file.data) === "undefined") {
            return false;
        }

        if (typeof(file.options) === "undefined") {
            return false;
        }

        return true;
    }
}

export {
    DataImporter
};
