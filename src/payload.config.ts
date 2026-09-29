import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { Events } from "./collections/Events";
import { Media } from "./collections/Media";
import { Users } from "./collections/Users";
import { migrations } from "./migrations";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Events, Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    // Schema changes go through migrations (src/migrations) rather than dev-mode
    // auto-push, because local dev and the live site share the same database.
    push: false,
    migrationDir: path.resolve(dirname, "migrations"),
    // Vercel runs pending migrations when the production server starts.
    prodMigrations: migrations,
    pool: {
      // Neon's URL uses sslmode=require, which pg already treats as verify-full;
      // stating it explicitly silences pg's deprecation warning.
      connectionString: (process.env.DATABASE_URL || "").replace(
        "sslmode=require",
        "sslmode=verify-full",
      ),
    },
  }),
  sharp,
  plugins: [
    // Vercel's filesystem is wiped on each deploy, so uploads go to Vercel Blob.
    // Without a token (e.g. local dev) uploads fall back to the local disk.
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      collections: { media: true },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
});
