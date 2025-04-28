// 生成されたAPIクライアントからインポート
import { DefaultApi, Configuration } from '../generated-api';

const api = new DefaultApi(new Configuration({ basePath: import.meta.env.VITE_API_BASE_URL }));

import useSWR from 'swr';

const fetchUser = (id: number) => api.usersIdGetRaw({ id });

export const useUser = (id: number) => {
  const { data, error, isLoading } = useSWR(['getUser', id], () => fetchUser(id));
  return { data, error, isLoading };
};

