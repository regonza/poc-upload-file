const pdfjs = require("pdfjs-dist/build/pdf");

async function getContent(src, numpage){
    const doc = await pdfjs.getDocument(src).promise;
    const page = await doc.getPage(numpage);
    return await page.getTextContent();
}

exports.getItems = async (src, numpage) => {
    const content = await getContent(src, numpage);
    const items = content.items.map((item) => {
        console.log(item.str)
        return item.str
    })
    return items;
}
