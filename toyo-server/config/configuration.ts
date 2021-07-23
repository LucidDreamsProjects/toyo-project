export default () => ({
  port: parseInt(process.env.PORT, 10) || 8081,
  database: {
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    name: process.env.DATABASE_NAME,
    secret: process.env.DATABASE_SECRET
  }
});