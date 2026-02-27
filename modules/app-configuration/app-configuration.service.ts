// # Business logic
import { cache } from "react";
// import { unstable_cache } from "next/cache";  // For Persistent Caching
import { getActiveAppConfig, createAppConfiguration } from "./app-configuration.repository";
import { CreateAppConfigurationInput } from "./app-configuration.schema";
import { AppError } from "@/lib/errors";
import { siteConfig } from "@/config/site";

export async function createAppConfigurationService(data: CreateAppConfigurationInput) {
    const existing = await getActiveAppConfig();

    if (existing.find((u: any) => u.site_name === data.siteName)) {
        throw new AppError("App configuration already exists", 400);
    }

    return createAppConfiguration(data);
}

export const getAppConfigurationsService = cache(async () => {
    const config = await getActiveAppConfig();

    if (!config) {
        // throw new Error("App configuration not found");
        return {
            site_name: siteConfig?.name || "Default Site Name",
            //   address: siteConfig?.address || "123 Default St, City, Country",
        };
    }

    return config;
});


// Later to use in production
// export const getAppConfigurationsService = unstable_cache(
//   async () => {
//     return await getActiveAppConfig();
//   },
//   ["app-config"],
//   { revalidate: 3600 } // 1 hour
// );