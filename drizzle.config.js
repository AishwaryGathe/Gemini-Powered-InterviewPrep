/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:lYhCUWIc05wq@ep-divine-rice-a8ysu5eg.eastus2.azure.neon.tech/neondb?sslmode=require',
    }
};