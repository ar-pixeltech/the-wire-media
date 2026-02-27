import { pool } from "@/lib/db";
import { seedAppConfig } from "./app-configuration.seed";
import { seedTestimonials } from "./testimonials.seed";
import { seedProjects } from "./projects.seed";

async function runSeeds() {
    try {
        console.log("🌱 Running seeds...");

        await seedAppConfig();
        await seedTestimonials();
        await seedProjects();

        console.log("✅ Seeding completed");
    } catch (error) {
        console.error("❌ Seeding failed:", error);
    } finally {
        await pool.end();
    }
}

runSeeds();