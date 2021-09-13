import express from "express";
import path from "path";

const app = express();
const PORT: number = Number(process.env["PORT"]) || 3002;

app.set('view engine', 'pug');
app.locals.pretty = true;
app.set('views', path.join(__dirname, "./views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => { res.render("index"); });
app.get("/controls/loading", (req, res) => { res.render("controls/loading"); });
app.get("/controls/button", (req, res) => { res.render("controls/button"); });
app.get("/controls/checkbox", (req, res) => { res.render("controls/checkbox"); });
app.get("/controls/Glassmorphism", (req, res) => { res.render("controls/Glassmorphism"); });


app.listen(PORT, function () {
   console.log("");
   console.log("-------------------------------------------------------------");
   console.log("");
   console.log(`OPEN TUTORIALS 서버 구동중 ... | port : ${PORT}`);
   console.log("");
   console.log("-------------------------------------------------------------");
});
