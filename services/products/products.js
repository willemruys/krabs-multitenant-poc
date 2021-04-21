import axios from "axios";
import useSWR from "swr";

const fetcher = (url, tenant) =>
  axios
    .get(url, {
      headers: {
        "X-tenant-host": tenant,
      },
    })
    .then((res) => res.data);

export default function useProducts(tenant) {
  const { data, error } = useSWR(
    [
      `https://lux-commerce-demo-server-development-dot-bubbly-polygon-305519.ew.r.appspot.com/product/all`,
      tenant,
    ],
    fetcher
  );

  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
}
