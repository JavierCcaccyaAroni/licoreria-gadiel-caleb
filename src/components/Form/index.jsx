import { Button, Input } from "../../components"

export default function Form({
  handleFormSubmit,
  inputs,
  values,
  handleInputChange,
  errors,
  textButton,
}) {
  return (
    <form onSubmit={handleFormSubmit} className="my-5">
      {inputs.map((input) => (
        <div key={input.name}>
          <Input
            placeholder={input.placeholder}
            value={values[input.name]}
            name={input.name}
            onChange={handleInputChange}
            type={input.type ?? "text"}
          />
          <span className="text-red-500 mt-1 text-sm">
            {errors[input.name]}
          </span>
        </div>
      ))}
      <Button
        type="submit"
        text={textButton}
        variant="primary"
        className="hover:bg-green-600 hover:border-green-600 hover:text-white"
      />
    </form>
  )
}