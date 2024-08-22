/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://hjcodintech:lZmkb76zCDKt@ep-lively-shape-a1yhzwx0.ap-southeast-1.aws.neon.tech/AI-Content-Generator?sslmode=require",
  },
};
