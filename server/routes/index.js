const express = require('express');
const { Client } = require("@notionhq/client")

const notion = new Client({
  auth: 'secret_05MNjbI3sANylqajxNydr1rjVcZ2ZgDdwkKfC1bpWHz',
})

const router = express.Router();

router.get('/lista', async (req, res) => {

    const result = await notion.databases.query({
        database_id: "ec4b3aa93e4248c9ab1b1341b99e2483",
    });
    const arrayImages = []
   
    for(let img of result.results){
      const tableLine = {
        url: img.properties.url.rich_text[0].text.content,
        curiosidade: img.properties.Curiosidade.rich_text[0].text.content,
        animal: img.properties.Animal.title[0].text.content
      }

      arrayImages.push(tableLine)
    }
    res.send(arrayImages);
});

module.exports = router;
