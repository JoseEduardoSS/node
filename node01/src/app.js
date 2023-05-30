import express from "express";

const app = express();
app.use(express.json());

const books = [
  { id: 1, title: "Harry Potter" },
  { id: 2, title: "Lord of the Rings" },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node!");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
  const index = findBook(req.params.id);
  res.json(books[index]);
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("Book created");
});

app.put("/books/:id", (req, res) => {
  const {id } = req.params;
  const index = findBook(id);
  books[index].title = req.body.title;
  res.json(books[index]);
});

app.delete("/books/:id", (req, res) => {
  const {id } = req.params;
  const index = findBook(id);
  books.splice(index, 1);
  res.json(books);
});

const findBook = (id) => {
  return books.findIndex((book) => book.id === parseInt(id));
}

export default app;
