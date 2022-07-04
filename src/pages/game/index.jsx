import Header from "../../components/header";

export default function Game() {
  return (
    <div className="w-screen h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white rounded-md shadow-md w-96">
        <Header />
      </div>
    </div>
  );
}
