import { useEffect, useState } from "react";
import { Card, FormProduct } from "../../components";
import { read } from "../../services";
import { useForm } from "../../hooks/useForm";
import { inputs } from "./form";


import { useSelector } from "react-redux";
import { selectorUser } from "../../selectors/userSelector";

export default function AddProducts() {

  const user = useSelector(selectorUser);

  const { values, handleInputChange } = 
  useForm({
    name: "",
    img: "",
    price:"",
  });

  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await read();
    setProducts(response);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="my-20">
      <Card className="2xl:w-[45%]" >
      <h2 className="font-semibold text-xl">Usuario conectado:</h2>
      <div className="text-sm">
          <p>
            {user.name} {user.lastname}
          </p>
          <p>{user.email}</p>
        </div>
        <FormProduct
          inputs={inputs}
          values={values}
          handleInputChange={handleInputChange}

          product={products}
          getProducts={getProducts}
        />
      </Card>
    </div>
  )
}