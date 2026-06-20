export type GetOneResponse<ResponseType> = Promise<{
    isError: boolean;
    data?: ResponseType;
}>;