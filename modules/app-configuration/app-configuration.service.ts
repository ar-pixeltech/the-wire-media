// # Business logic
import * as appConfigRepo from "./app-configuration.repository";
import { CreateAppConfigurationInput } from "./app-configuration.schema";
import { AppError } from "@/lib/errors";

export async function createAppConfigurationService(data: CreateAppConfigurationInput) {
    // Example business logic
    const existing = await appConfigRepo.getAllAppConfigurations();

    if (existing.find((u: any) => u.site_name === data.siteName)) {
        throw new AppError("App configuration already exists", 400);
    }

    return appConfigRepo.createAppConfiguration(data);
}

export async function getAppConfigurationsService() {
    return appConfigRepo.getAllAppConfigurations();
}