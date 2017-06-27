var request = require('request');

app.get('/raw',function(req,res) {
  var url = "http://marceliotstein.net/reservoir/docroot/jsonapi/node/article/b06953e5-0ca1-4965-a54e-83ecf13e148e";

  request({
    url: url,
    json: true
  }, function (error, response, body) {

    if (!error && response.statusCode === 200) {
      res.send(body);
    }
  })
});

app.get('/',function(req,res) {
  var url = "http://marceliotstein.net/reservoir/docroot/jsonapi/node/article/b06953e5-0ca1-4965-a54e-83ecf13e148e";

  request({
    url: url,
    json: true
  }, function (error, response, body) {

    if (!error && response.statusCode === 200) {
      var doc_title = body['data']['attributes']['title'];
      var doc_body = body['data']['attributes']['field_body']['value'];
      res.render('default',{title: doc_title, body: doc_body});
    }
  })
});

app.get('/echo/:word?', function(req,res) {
  var word = req.params.word;
  res.send('<h1>You just said ' + word + '</h1>');
});
