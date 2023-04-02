const express = require('express');
const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({
  auth: 'secret_05MNjbI3sANylqajxNydr1rjVcZ2ZgDdwkKfC1bpWHz',
})

const router = express.Router();

router.get('/lista', async (req, res) => {

    const result = await notion.databases.query({
        database_id: "ec4b3aa93e4248c9ab1b1341b99e2483",
    });
    console.log(result)
    const arrayImages = []
    for(let img of result.results){
      arrayImages.push(img.url)
    }
    res.send(arrayImages);
});

module.exports = router;
