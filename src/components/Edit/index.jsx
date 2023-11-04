import { useState } from "react"
import { PencilIcon } from "@heroicons/react/24/solid"
import { Dialog } from "@headlessui/react"
import { Button, Input, Select } from "../../components";
import { update } from "../../services";
import Swal from "sweetalert2";

const categories = ["Trago", "Cerveza", "Gaseosa", "Agua"];
const status = ["Creado", "Modificado", "Actualizado"];

export default function Edit({ product, getProducts }) {

  // manejar el estado de las variables ABIERTO o CERRADO (Boolean)
  const [open, setOpen] = useState(false);

  const [name, setName] = useState(product.name);
  const handleInputChange = (e) => setName(e.target.value);

  const [price, setPrice] = useState(Number(""));
  const handlePrice = (e) => setPrice(e.target.value);

  // para el LISTBOX se requiere una variable
  const [category, setCategory] = useState(product.category ?? categories[0]);
  const [state, setState] = useState(product.state ?? status[0]);

  //función para actualizar la información
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    await update(product.id, {
      name,
      price,
      category,
      state,
    }, "products");

    // alerta
    Swal.fire({
      title: "Success",
      text: "Se actualizo correctamente",
      icon: "success",
    });

    //Cerrar el modal
    setOpen(false);

    //Actualizar la pagina
    await getProducts();
  }

  return (
    <>
      <PencilIcon
        className="h-6 w-6 text-blue-500 cursor-pointer"
        onClick={() => setOpen(true)}
      />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <Dialog.Panel className="bg-white mx-auto w-full max-w-sm rounded p-4">
            <Dialog.Title>Editar información: {product.name}</Dialog.Title>
            <form className="my-3" onSubmit={handleEditSubmit}>
              <Input value={name} onChange={handleInputChange} />
              <Input value={price} onChange={handlePrice} placeholder="Valor del producto" type="number" />
              <div className="mt-3">
                <Select
                  value={category}
                  onChange={setCategory}
                  items={categories}
                />
              </div>
              <div className="mt-3">
                <Select
                  value={state}
                  onChange={setState}
                  items={status}
                />
              </div>
              <div className="mt-3">
                <Button
                  type="submit"
                  text="Actualizar"
                  variant="primary"
                  className="hover:bg-green-600 hover:border-green-600 hover:text-white"
                />
              </div>
            </form>
          </Dialog.Panel>
        </div>

      </Dialog>
    </>
  )
}