import { useState } from "react";
import Swal from "sweetalert2";
import { create } from "../../services";
import { Button, Input, Select } from "..";
import { useSelector } from "react-redux";
import { selectorUserId } from "../../selectors/userSelector";
import { useNavigate } from "react-router-dom";

const categories = ["Trago", "Cerveza", "Gaseosa", "Agua"];
const status = ["Creado", "Modificado", "Actualizado"];

export default function FormProduct({
  product,
  getProducts,

  inputs,
  values,
  handleInputChange
}) {

  const navigate = useNavigate();

  const userId = useSelector(selectorUserId);

  // para el LISTBOX se requiere una variable
  const [category, setCategory] = useState(product.category ?? categories[0]);
  const [state, setState] = useState(product.state ?? status[0]);

  // Evita el refresh de la pagina con "preventDefault()"
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    await create({
      ...values,
      state,
      category,
      user_id: userId,
    }, "products")

    Swal.fire({
      title: "Success",
      text: "Se agrego el producto",
      icon: "success",
    })
    navigate("/products")
    await getProducts();
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="my-5 items-center">
        {inputs.map((input) => (
          <Input
            key={input.name}
            placeholder={input.placeholder}
            value={values[input.name]}
            name={input.name}
            onChange={handleInputChange}
            type={input.type ?? "text"}
          />
        ))}

        <Select
          value={category}
          onChange={setCategory}
          items={categories}
        />
        <Select
          value={state}
          onChange={setState}
          items={status}
        />
        <Button
          type="submit"
          text="Ingresar producto"
          variant="primary"
          className="hover:bg-green-600 hover:border-green-600 hover:text-white"
        />
      </form>
    </>
  )
}