import { Card, Form } from "../../components"
import { inputs } from "./form"
import { useForm } from "../../hooks/useForm"
import { useDispatch } from "react-redux";
import { saveUser } from "../../slices/userSlice"
import { useNavigate } from "react-router-dom";
import { findUser, showError } from "../../utils";

export default function SignIn() {

  const { values, errors, handleInputChange, validateIfValuesHasEmpty } =
    useForm({
      email: "",
      password: "",
    });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateIfValuesHasEmpty()) return;

    const user = await findUser("email", values.email);

    if (!user || user.password !== values.password) {
      showError("Email y/o password incorrecto");
      return;
    }

    // la información coincide  y debemos enviarla al home y crear la session
    dispatch(saveUser(user));
    navigate("/addproducts")
  }

  return (
    <div className="p-20 bg-[url('/background.jpg')] bg-no-repeat">
      <Card className="2xl:w-[45%]">
        <h2 className="font-semibold text-xl text-white">Iniciar Sesion:</h2>
        <Form
          inputs={inputs}
          values={values}
          errors={errors}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleSubmit}
          textButton="Iniciar Sesion"
        />
      </Card>
    </div>
  )
}