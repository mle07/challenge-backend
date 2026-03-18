import { Request, Response, NextFunction } from "express";
import packagejson from "../../package.json";

export const getTypescriptVersion = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.json({ typescriptVersion: packagejson.devDependencies.typescript });
};
