import * as fs from "fs";
import * as http from "http";
import * as path from "path";

http.createServer((req, res) => {
        const file = path.join(__dirname, "file.txt");
        const stat = fs.statSync(file);
        res.writeHead(200, {
            "Content-Type": "audio/mpeg",
            "Content-Length": stat.size
        });
        const readStream = fs.createReadStream(file);
        readStream.pipe(res);
    }
).listen(8080);