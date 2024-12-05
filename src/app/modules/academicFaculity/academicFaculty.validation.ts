import { z } from 'zod';

const createAcademicValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic name must be a string',
    }),
  }),
});

const updateAcademicValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Academic name must be a string',
      })
      .optional(),
  }),
});

export const academicValidations = {
  createAcademicValidationSchema,
  updateAcademicValidationSchema,
};
