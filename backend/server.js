const http = require("http");
const getRequest = require("./methods/get-request");
const postRequest = require("./methods/post-request");
const deleteRequest = require("./methods/delete-request");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  switch (req.method) {
    case "OPTIONS":
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      res.end();
      break;
    case "GET":
      getRequest(req, res);
      break;

    case "POST":
      postRequest(req, res);
      break;

    case "DELETE":
      deleteRequest(req, res);
      break;

    default:
      // cevabın durum kodunu güncelle
      res.statusCode = 404;

      // gönderilen cevaba yeni header ekle
      res.setHeader("Content-Type", "application/json");

      // gönderilecek cevabın içeriğini belirle
      res.write(
        JSON.stringify({
          message: "Sayfa bulunamadı",
        })
      );

      // cevabı client'a gönder
      res.end();
  }
});

const port = 5000;
server.listen(port, () => {
  console.log(`server ${port} a gelen istekler dinlenmeye başlandı`);
});
