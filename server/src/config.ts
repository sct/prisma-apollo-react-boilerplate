export default {
  appSecret: process.env.APP_SECRET || 'test',
  corsOptions: process.env.CORS_DOMAIN || 'http://localhost:3000'
};
