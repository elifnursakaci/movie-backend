const fs = require("fs");

module.exports = (req, res) => {
  const baseUrl = req.url.substring(0, req.url.lastIndexOf("/"));

  const id = req.url.split("/")[3];

  if (baseUrl === "/api/movies" && id) {
    let data = fs.readFileSync("./data/movies.json", "utf-8");
    data = JSON.parse(data);

    const foundItem = data.movies.find((item) => item.id == id);

    if (!foundItem) {
      res.writeHead(404);
      return res.end("Id geçersiz");
    }

    const filtred = data.movies.filter((item) => item.id != id);
    data.movies = filtred;

    fs.writeFileSync("./data/movies.json", JSON.stringify(data));

    res.writeHead(204, { "Content-Type": "application/json" });
    res.end();
  } else {
    res.writeHead(404);
    res.end("id blunamadi");
  }
};
