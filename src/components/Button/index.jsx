export default function Button({ label = "", onButtonClick = null }) {
  function handleOnButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }

  return (
    <button
      onClick={handleOnButtonClick}
      className="bg-blue-500 hover:bg-blue-600 font-poppins text-white p-2 rounded-md shadow-md"
    >
      {label}
    </button>
  );
}
