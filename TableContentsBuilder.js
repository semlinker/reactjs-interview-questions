const fs = require("fs");
const path = require("path");
const util = require('util');
const os = require('os');

const MD_FILE_PATH = path.join(__dirname, "README.md");
const TITLE_RE = /^(\d+\.\s*#{3}|#{2})\s*([^#\r\n]+)\r?\n?$/gm;
const TABLE_CONTENT_RE = /(<!--\s*TOC\s*-->)([\s\S]+)(<!--\s*\/TOC\s*-->)/g;

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const contentTemplate = contents => `
| 序号. | 问题 |
| --- | --------- | 
${contents.map(content =>`|${!content.root ? content.index : ""} | [${content.title}](#${content.anchor}) |`).join(os.EOL)}
`;

class TableContentsBuilder {
    async buildTableContents(filePath) {
        let contents = await this.loadContents(filePath);
        if (!contents) return;
        let contentTitles = this.parse(contents);
        let tableContents = contentTemplate(contentTitles);
        let updatedContents = contents.replace(TABLE_CONTENT_RE, (match, p1, p2, p3) => {
            return p1 + tableContents + p3;
        });
        await this.saveContents(filePath, updatedContents);
    }

    async loadContents(filePath) {
        if (!filePath) throw `${filePath} is invalid!`;
        let content;
        try {
            if (fs.existsSync(filePath)) {
                content = await readFile(filePath, {
                    encoding: "utf-8"
                });
            }
        } catch (err) {
            console.dir(err);
        }
        return content;
    }

    parse(contents) {
        let contentTitles = [],
            index = 1;
        while (TITLE_RE.exec(contents) !== null) {
            contentTitles.push({
                root: RegExp.$1 === "##",
                index: RegExp.$1 != "##" ? index++ : 0,
                title: RegExp.$2,
                anchor: RegExp.$2.replace(/\s+/g, '-').replace(/[\*`<>?()\\，？（）]*\s*/g, '').toLowerCase()
            });
        }
        return contentTitles;
    }

    async saveContents(filePath, contents) {
        try {
            await writeFile(filePath, contents, {
                encoding: "utf-8"
            });
        } catch (err) {
            console.error(err);
        }
    }
}

async function main() {
    await new TableContentsBuilder().buildTableContents(MD_FILE_PATH);
}

main().then(() => {
    console.log('Build Table Contents Success')
}).catch((err) => console.error)