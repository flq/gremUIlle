import { Router } from "express";
import { client } from "./gremlin"

const routes = Router();

/**
 * GET home page
 */
routes.get('/', (req, res) => {
  res.render('index', { title: 'gremUIlle' });
});

routes.post("/api/query", (req, res) => {
  const { query } = req.body;
  client().execute(query, (err, results) => {
    res.setHeader('Content-Type', 'application/json');
    if (err) {
      console.error(err);
      res.send(JSON.stringify({error: err.toString()}));
      return;
    }
    res.send(JSON.stringify(results));
  });
}); 



export default routes;
