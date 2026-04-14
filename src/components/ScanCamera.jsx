export default function ScanCamera({ image }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-start gap-3 px-6 pb-8 pt-3">
      <div className="rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white pointer-events-none">
        Take picture to scan
      </div>
      <div className="relative w-full max-w-sm aspect-3/4 bg-black rounded-lg">
        {image && (
          <img 
            src={image} 
            alt="Camera view" 
            className="w-full h-full object-cover rounded-lg"
          />
        )}
        
        <div className="absolute top-0 left-0 w-6 h-6 border-t-3 border-l-3 border-gray-400 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-3 border-r-3 border-gray-400 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-3 border-l-3 border-gray-400 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-3 border-r-3 border-gray-400 pointer-events-none"></div>
      </div>
    </div>
  );
}
