export default function DownloadButton({ children, width, height }) {
  return (
    <div>
      <button
        className={`bg-[#012931] text-white rounded-xl hover:text-gray-500 uppercase font-bold py-3 px-7 w-${width} h-${height}`}
      >
        {children}
      </button>
    </div>
  );
}
