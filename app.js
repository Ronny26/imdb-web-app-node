import express from 'express';
import Hello from './hello.js';
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from './users/routes.js';
import session from "express-session";

import "dotenv/config";

const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/kanbas'
mongoose.connect(CONNECTION_STRING);


const app = express();
app.use(cors(
    {
        credentials: true,
        origin: "http://localhost:3000",
      }
));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
  
  
  
  app.use(
    session(sessionOptions)
  );
app.use(express.json());
UserRoutes(app);
Hello(app);
app.listen(4000)