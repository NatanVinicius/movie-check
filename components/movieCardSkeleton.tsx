export const MovieCardSkeleton = () => {
  return (
    <div className="w-70 h-90  rounded-lg bg-gray-800 overflow-hidden animate-pulse">
      {/* imagem */}
      <div className="w-full h-56 bg-gray-700" />

      {/* footer */}
      <div className="p-2 flex flex-col gap-2">
        <div className="h-4 bg-gray-600 rounded w-3/4" /> {/* título */}
        <div className="h-3 bg-gray-600 rounded w-1/2" /> {/* gênero */}
        <div className="h-3 bg-gray-600 rounded w-full" /> {/* descrição */}
      </div>
    </div>
  );
};
