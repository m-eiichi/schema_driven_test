import useSWR from "swr";
import { DefaultApi } from "@/generated-api/apis/DefaultApi";

const api = new DefaultApi();

export const useUser = (id: number | undefined) => {
  const shouldFetch = id !== undefined;

  const { data, error, isLoading } = useSWR(
    shouldFetch ? `user-${id}` : null, // キャッシュキー（idベース）
    () => (id ? api.usersIdGet({ id }) : Promise.resolve(null)) // fetcher
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
};
