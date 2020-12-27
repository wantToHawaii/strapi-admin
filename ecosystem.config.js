module.exports = {
  apps: [
    {
      name: "strapi-admin",
      cwd: `${__dirname}/strapi-admin`,
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        // DATABASE_HOST: "localhost", // database endpoint
        // DATABASE_PORT: "5432",
        // DATABASE_NAME: "strapi", // DB name
        // DATABASE_USERNAME: "your-name", // your username for psql
        // DATABASE_PASSWORD: "password", // your password for psql
      },
    },
  ],
};
