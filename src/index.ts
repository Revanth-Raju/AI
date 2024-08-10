import app from "./app.js";
import { connectToDataBase } from "./db/connections.js";

const port = 5001;

connectToDataBase()
.then(() => {
// Connnections & Listeneres
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port} & Connected to dataBase`);
  });
}).catch(
  (err) => console.log(err)
);
