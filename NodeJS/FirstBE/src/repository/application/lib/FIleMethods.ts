import fs from 'fs';

export class FileMethods{
    static async Delete(filePath: string){
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                return{
                    state: 0,
                    mess: `File does not exist`
                }
            }
            fs.unlink(filePath, (err) => {
                if (err) {
                    return{
                        state: -1,
                        error: err
                    }
                }
                return{
                    state: 1,
                    mess: `File deleted successfully`
                }
            });
        });
    }
}

