export type GetManyResponse<ResponseType> = Promise<{
    isError: true,
    data: undefined,
} | {
    isError: false;
    data: ResponseType[];
}>;