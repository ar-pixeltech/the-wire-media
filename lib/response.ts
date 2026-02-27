export function successResponse(data: any, message = "Success") {
    return Response.json({
        success: true,
        message,
        data,
    });
}

export function errorResponse(message: string, status = 500) {
    return Response.json(
        {
            success: false,
            message,
        },
        { status }
    );
}