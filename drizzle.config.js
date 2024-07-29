/** @type { import("drizzle-kit").Config } */
export default {
	schema: "./utils/schema.tsx",
	dialect: "postgresql",
	dbCredentials: {
		url: "postgresql://neondb_owner:Q8JxOWGXp7tS@ep-blue-leaf-a5845a40.us-east-2.aws.neon.tech/neondb?sslmode=require",
	},
};
