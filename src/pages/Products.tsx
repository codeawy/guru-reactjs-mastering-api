import Button from "@/components/ui/Button";
import Paginator from "../components/ui/Paginator";
import apiInstance from "../config/axios";
import { generateProductsFakeData } from "../helpers/fakeData";
import useFetchQuery from "../hooks/useFetchQuery";
import { useState } from "react";

const ProductsPage = () => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(15);
  const { data, isLoading } = useFetchQuery({
    url: `/products?pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    queryKey: ["products", page],
  });
  const {
    meta: { pagination },
  } = data;

  const onGenerate = () => {
    for (let i = 0; i < 75; i++) {
      apiInstance.post("/products", {
        data: generateProductsFakeData(),
      });
    }
  };

  const onPrevPage = () => {};
  const onNextPage = () => {
    setPage(prev => prev + 1);
    console.log(page);
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
        <Paginator
          total={pagination.total}
          page={pagination.page}
          lastPage={pagination.pageCount}
          onPrev={onPrevPage}
          onNext={onNextPage}
        />
      )}
    </div>
  );
};

export default ProductsPage;
