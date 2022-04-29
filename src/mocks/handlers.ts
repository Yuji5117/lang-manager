import { rest } from "msw";

import { vocabularies } from "./data";

export const handlers = [
  rest.get("/vocabularies", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(vocabularies));
  }),
];
