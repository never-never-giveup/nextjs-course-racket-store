const apiRootPath = 'http://localhost:4000/api';

type GetParams = {
    path: string;
    limit?: number;
}
export async function get<T>({path, limit}: GetParams): Promise<T> {
    const queryString = typeof limit === 'number' ? '?' + new URLSearchParams({ limit: `${limit}` }).toString() : '';
    const response = await fetch(`${apiRootPath}/${path}${queryString}`);
    return await response.json() as T;
}