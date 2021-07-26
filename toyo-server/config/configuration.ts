export default () => ({
  port: parseInt(process.env.PORT!, 10) || process.env.PORT2,
  database: {
    port: parseInt(process.env.DATABASE_PORT!, 10),
    host: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    name: process.env.DATABASE_NAME,
    secret: process.env.DATABASE_SECRET,
  },
});
