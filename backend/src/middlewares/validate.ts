import type { RequestHandler } from 'express';
import type { ZodType } from 'zod';

type RequestPart = 'body' | 'params' | 'query';

export const validate = (
  schema: ZodType,
  part: RequestPart = 'body',
): RequestHandler => {
  return (req, res, next) => {
    const result = schema.safeParse(req[part]);

    if (!result.success) {
      return res.status(400).json({
        status: 'fail',
        message: 'Validasi gagal',
        errors: result.error.issues.map((issue) => ({
          field: `${part}.${issue.path.join('.')}`,
          message: issue.message,
        })),
      });
    }

    res.locals.validated = {
      ...res.locals.validated,
      [part]: result.data,
    };

    next();
  };
};
