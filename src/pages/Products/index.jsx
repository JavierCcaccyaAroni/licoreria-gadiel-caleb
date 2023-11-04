import { Card } from "../../components";
import { read } from "../../services"
import { useEffect, useState } from "react"
import {
  // TrashIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid"

export default function Products() {

  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await read("products");
    setProducts(response);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="flex flex-wrap items-start gap-4 my-10">
        {products.length > 0 && products.map((product) =>
          <Card className="lg:w-[30%] h-80 flex flex-col items-center gap-3" key={product.id}>
            <h2 className="font-bold">{product.name}</h2>
            <div className="w-[50%] m-auto">
              <img src={product.img} alt={product.name} className="w-[100%]" />
            </div>
            <p className="font-bold text-lg">S/ {product.price}</p>
            <div className="flex gap-3">
              <ShoppingCartIcon className="h-6 w-6 text-green-500 cursor-pointer" />
              Comprar
              {/* <Edit product={product} getProducts={getProducts} />
              <TrashIcon className="h-6 w-6 text-red-500 cursor-pointer" /> */}
            </div>
          </Card>
        )}
      </div>
    </>
  )
}