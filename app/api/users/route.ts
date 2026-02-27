// import { NextResponse } from "next/server";
// import { pool } from "@/lib/db";

// // GET all users
// export async function GET() {
//     try {
//         const result = await pool.query("SELECT * FROM users");
//         return NextResponse.json(result.rows);
//     } catch (error) {
//         return NextResponse.json(
//             { error: "Database error" },
//             { status: 500 }
//         );
//     }
// }

// // POST create user
// export async function POST(request: Request) {
//     try {
//         const body = await request.json();
//         const { name, email } = body;

//         const result = await pool.query(
//             "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
//             [name, email]
//         );

//         return NextResponse.json(result.rows[0]);
//     } catch (error) {
//         return NextResponse.json(
//             { error: "Insert failed" },
//             { status: 500 }
//         );
//     }
// }


import { createAppConfigurationSchema } from "@/modules/app-configuration/app-configuration.schema";
import { createAppConfigurationService, getAppConfigurationsService } from "@/modules/app-configuration/app-configuration.service";
import { successResponse, errorResponse } from "@/lib/response";
import { AppError } from "@/lib/errors";

export async function GET() {
    try {
        const appConfigurations = await getAppConfigurationsService();
        return successResponse(appConfigurations);
    } catch (error) {
        return errorResponse("Failed to fetch app configurations");
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const validated = createAppConfigurationSchema.parse(body);

        const appConfiguration = await createAppConfigurationService(validated);

        return successResponse(appConfiguration, "App configuration created");
    } catch (error: any) {
        if (error instanceof AppError) {
            return errorResponse(error.message, error.statusCode);
        }

        return errorResponse("Internal Server Error", 500);
    }
}