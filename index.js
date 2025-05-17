const express = require("express");
const path = require("path");
const app = express();
const members = [
  {
    id: 1,
    name: "Aniagolu Chiemelie",
    email: "aniagoluchiemelie77@gmail.com",
    status: "active",
  },
  {
    id: 2,
    name: "Munachi Aniagolu",
    email: "munachianiagolu01@gmail.com",
    status: "inactive",
  },
  {
    id: 3,
    name: "Diamaka Aniagolu",
    email: "diamakaaniagolu99@gmail.com",
    status: "inactive",
  },
];
//Gets All Members
app.get("/api/members", (req, res) => {
  res.json(members);
});
//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
