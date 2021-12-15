import { Client } from "faunadb";
import { FAUNA_KEY } from "../constants/fauna";

export const fauna = new Client({
  secret: FAUNA_KEY,
  domain: "db.us.fauna.com",
});
