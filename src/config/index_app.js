const express = require("express");
//const db = require("./config/server");
const db = require("../config/server");
const cors = require("cors");

const app = express();

const PORT = 3000;
app.use(cors());
app.use(express.json());

// Route to get all posts
app.get("/users", (req, res) => {
  db.query("SELECT * FROM user", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// Add a new user
/*app.post("/users", (request, response) => {
  db.query("INSERT INTO user SET ?", request.body, (error, result) => {
    if (error) throw error;
    response.status(201).send(`User added with ID: ${result.insertId}`);
  });
});*/

// Update an existing user
app.put("/users/:id", (request, response) => {
  const id = request.params.id;
  db.query(
    "UPDATE user SET ? WHERE id = ?",
    [request.body, id],
    (error, result) => {
      if (error) throw error;
      response.send("User updated successfully.");
    }
  );
});

// Route for creating the post
app.post("/users", (req, res) => {
  const username = req.body.username;
  const name = req.body.name;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  console.log(username, name, lastName, email, password);

  db.query(
    "INSERT INTO user (name, lastName, username, email, password) VALUES (?,?,?,?)",
    [name, lastName, username, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});

// Delete a user
app.delete("/users/:id", (request, response) => {
  const id = request.params.id;
  db.query("DELETE FROM user WHERE id = ?", id, (error, result) => {
    if (error) throw error;
    response.send("User deleted.");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
