import Button from "@/components/ui/Button";
import Paginator from "../components/ui/Paginator";
import apiInstance from "../config/axios";
import { generateProductsFakeData } from "../helpers/fakeData";
import useFetchQuery from "../hooks/useFetchQuery";
import { useState } from "react";
import CookiesService from "@/services/Cookies";

const ProductsPage = () => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(15);
  const [sortBy, setSortBy] = useState<string>("desc");

  const cookieService = new CookiesService();

  const { data, isLoading } = useFetchQuery({
    url: `/products?pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=createdAt:${sortBy}`,
    queryKey: ["products", page, pageSize, sortBy],
  });

  const onGenerate = () => {
    const token = cookieService.get("userCredentials")?.jwt;

    apiInstance.post(
      "/products",
      {
        data: generateProductsFakeData(1),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  const onPrevPage = () => {
    if (page === 1) return;
    setPage(prev => prev - 1);
  };

  const onNextPage = () => {
    if (page === data.meta.pagination.pageCount) return;
    setPage(prev => prev + 1);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container my-10">
      <Button onClick={onGenerate}>Generate new 75 Product</Button>
      <h1 className="my-10">Products Page</h1>
      {data?.data?.length ? (
        data.data.map((item: { id: number; attributes: { title: string } }) => (
          <p key={item.id}>
            {item.id} - {item.attributes.title}
          </p>
        ))
      ) : (
        <h3>No products</h3>
      )}
      {data?.data?.length && (
        <div className="flex items-center justify-between my-10">
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="asc">Older</option>
            <option value="desc">Newest</option>
          </select>

          <select value={pageSize} onChange={e => setPageSize(+e.target.value)}>
            <option value="15">15 per page</option>
            <option value="30">30 per page</option>
            <option value="50">50 per page</option>
            <option value="100">100 per page</option>
          </select>
          <Paginator
            total={data.meta.pagination.total}
            page={data.meta.pagination.page}
            lastPage={data.meta.pagination.pageCount}
            onPrev={onPrevPage}
            onNext={onNextPage}
          />
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
