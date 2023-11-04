export default function Button({
  text,
  type = "button",
  className,
  variant = "primary",
}) {
  const colors = {
    primary: "bg-green-800 border-green-800 text-white",
    secondary: "bg-blue-400 border-blue-400 text-white",
    danger: "bg-red-400 border-red-400 text-white",
    warning: "bg-yellow-400 border-yellow-400 text-black",
    dark: "bg-black border-black text-white",
  };

  return (
    <>
      <button
        type={type}
        className={`w-full px-2 py-2 rounded border ${colors[variant]} ${className}`}
      >
        {text}
      </button>
    </>
  );
}