// # Database queries
import { pool } from "@/lib/db";
import { CreateAppConfigurationInput } from "./app-configuration.schema";

export async function createAppConfiguration(data: CreateAppConfigurationInput) {
  const query = `
    INSERT INTO app_configurations (site_name, address)
    VALUES ($1, $2)
    RETURNING *
  `;

  const values = [data.siteName, data.address];

  const { rows } = await pool.query(query, values);
  return rows[0];
}

export async function getAllAppConfigurations() {
  const { rows } = await pool.query("SELECT * FROM app_configurations");
  return rows;
}