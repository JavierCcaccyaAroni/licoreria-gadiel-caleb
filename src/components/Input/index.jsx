import Form from 'react-bootstrap/Form';

export default function Input({
  value,
  onChange,
  placeholder = "Nombre del producto",
  type = "text",
  name,
}) {
  return (
    <Form.Control
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      className='shadow-md my-2'
    />
  )
}