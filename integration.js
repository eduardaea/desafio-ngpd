$.ajax({
    url: 'https://api.notion.com/v1/databases/ec4b3aa93e4248c9ab1b1341b99e2483/query',
    type: 'GET',
    headers: {
      'Authorization': 'secret_05MNjbI3sANylqajxNydr1rjVcZ2ZgDdwkKfC1bpWHz',
      'Notion-Version': '2022-06-28',
        "Access-Control-Allow-Origin":"*"
      
    },
    success: function(data) {
      var urls = [];
      $.each(data.results, function(index, result) {
        urls.push(result.properties.Url.url);
      });
      console.log(urls);
    },
    error: function(error) {
      console.log(error);
    }
  });
  