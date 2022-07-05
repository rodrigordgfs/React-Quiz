export default function Button({
  label = "",
  onButtonClick = null,
  color = "bg-blue-500 hover:bg-blue-600 text-white",
}) {
  function handleOnButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }

  return (
    <button
      onClick={handleOnButtonClick}
      className={`${color} font-poppins p-2 rounded-md shadow-md`}
    >
      {label}
    </button>
  );
}
