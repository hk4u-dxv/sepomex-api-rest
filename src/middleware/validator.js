import { validationResult } from "express-validator";
import { errorResponse } from "@utils/responses.js";

export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json(errorResponse("Error de validación", errors.array()));
  }
  next();
};
