import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Review Kantin API',
    version: '1.0.0',
  },
  servers: [{ url: 'http://localhost:3000' }],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
      description: 'Masukkan Bearer diikuti token JWT',
    },
  },
  definitions: {
    StallInput: {
      $name: 'Warung Baru',
      category: 'Nasi',
      location: 'Kantin FK',
      description: '',
    },
  },
};

const outputFile = './src/docs/swagger-output.json';
const endpointsFiles = [
  './src/index.ts',
  './src/routes/userRouter.ts',
  './src/routes/stallRouter.ts',
  './src/routes/menuItemRouter.ts',
  './src/routes/reviewRouter.ts',
  './src/routes/likeRouter.ts',
  './src/routes/flagRouter.ts',
  './src/routes/auditLogRouter.ts',
];

swaggerAutogen()(outputFile, endpointsFiles, doc);
