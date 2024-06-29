import { useQuery } from "@tanstack/react-query";
import apiInstance from "../config/axios";

interface useFetchQueryParams {
  queryKey: unknown[];
  url: string;
}

const useFetchQuery = ({ queryKey, url }: useFetchQueryParams) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const { data } = await apiInstance.get(url);
      return data;
    },
  });
};

export default useFetchQuery;
