import { Input } from "./interfaces/input";
// tslint:disable-next-line:no-var-requires
const fs = require("fs");

class DataImporter {

    public async import(fileToImport: string): Promise<Input> {
        try {
            const data = fs.readFileSync(`../${fileToImport}`);

            const file = JSON.parse(data);
            const fileValid = this.validate(file);

            if (!fileValid) {
                throw new Error("File contains invalid elements.");
            }

            return file;
        } catch (error) {
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
