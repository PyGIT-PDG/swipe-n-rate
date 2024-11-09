import { X, Heart } from "lucide-react";

interface SwipeButtonsProps {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const SwipeButtons = ({ onSwipeLeft, onSwipeRight }: SwipeButtonsProps) => {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <button
        onClick={onSwipeLeft}
        className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
      >
        <X className="w-8 h-8 text-red-500" />
      </button>
      <button
        onClick={onSwipeRight}
        className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
      >
        <Heart className="w-8 h-8 text-green-500" />
      </button>
    </div>
  );
};

export default SwipeButtons;