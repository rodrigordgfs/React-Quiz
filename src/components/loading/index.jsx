export default function Loading() {
  return (
    <div className="bg-white rounded-md shadow-md w-96 cursor-wait">
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between font-poppins p-4">
          <div className="bg-gray-400 w-32 h-8 animate-pulse" />
          <div className="bg-gray-400 w-16 h-8 animate-pulse" />
        </div>
        <div className="bg-gray-400 w-full h-1 animate-pulse" />
      </div>
      <div className="px-5 py-7 flex flex-col gap-5">
        <div className="bg-gray-400 w-full rounded-md h-6 animate-pulse" />
        <div className="flex flex-col gap-3">
          <div className="bg-gray-400 w-full rounded-md h-12 animate-pulse" />
          <div className="bg-gray-400 w-full rounded-md h-12 animate-pulse" />
          <div className="bg-gray-400 w-full rounded-md h-12 animate-pulse" />
          <div className="bg-gray-400 w-full rounded-md h-12 animate-pulse" />
        </div>
        <div className="bg-gray-400 w-full rounded-md h-14 animate-pulse" />
      </div>
    </div>
  );
}
