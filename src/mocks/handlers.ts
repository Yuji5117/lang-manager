import { rest } from "msw";

import { vocabularies } from "./data";

export const handlers = [
  rest.get("/api/vocabularies", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(vocabularies));
  }),

  rest.post("/api/vocabulary", (_, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.put("/api/vocabulary/:id", (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.status(200));
  }),

  rest.delete("/api/vocabulary/:id", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
