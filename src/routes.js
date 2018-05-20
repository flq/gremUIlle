import { Router } from "express";
import { client } from "./gremlin"

const routes = Router();

/**
 * GET home page
 */
routes.get('/', (req, res) => {
  res.render('index', { title: 'Express Babel' });
});

routes.get("/api/hello", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ result: "grenUIlle backend is running." }));
});

routes.get("/api/query", (req, res) => {
  client().execute("g.V().hasLabel('News').outE().values('label').dedup()", (err, results) => {
    res.setHeader('Content-Type', 'application/json');
    console.log(err);
    console.log(results);
    res.send(JSON.stringify(results));
  });
});



export default routes;
