import useSWR from "swr";
import { DefaultApi } from "@/generated-api/apis/DefaultApi";

const api = new DefaultApi();

export const useUsers = () => {
  const { data, error, isLoading } = useSWR(
    "/users",
    () => api.usersGet() // fetcher
  );

  return {
    users: data,
    isLoading,
    isError: error,
  };
};
