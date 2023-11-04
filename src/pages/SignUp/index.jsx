import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../../slices/userSlice";
import { Card, Form } from "../../components";
import { create } from "../../services";
import { inputs } from "./form";
import { Link } from "react-router-dom";


export default function SignUp() {

  const {values, handleInputChange, errors, validateIfValuesHasEmpty} = 
  useForm({
    name : "",
    lastname: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateIfValuesHasEmpty()) return;
    const user = await create(values, "users")
    dispatch(saveUser(user));
    navigate("/addproducts")
  };

  return (
    <div className="p-20 bg-[url('/background-cc.jpg')] bg-no-repeat bg-cover">
      <Card className="2xl:w-[45%]">
        <h2 className="font-semibold text-xl text-white">Crear cuenta:</h2>
        <p className="text-white">Bienvenido a LICORERIA Gadiel y Caleb </p>
        <Form
          inputs={inputs}
          values={values}
          errors={errors}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
          textButton="Crear cuenta"
        />
        <Link to="/signin">
          <span className="text-white cursor-pointer">Iniciar sesion</span>
        </Link>
      </Card>
    </div>
  )
}