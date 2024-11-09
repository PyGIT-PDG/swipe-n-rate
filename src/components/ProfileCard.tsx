import { useState } from "react";
import StarRating from "./StarRating";
import { useToast } from "@/components/ui/use-toast";

interface ProfileCardProps {
  profile: {
    id: string;
    name: string;
    age: number;
    image: string;
    bio: string;
  };
  onSwipe: (direction: "left" | "right") => void;
}

const ProfileCard = ({ profile, onSwipe }: ProfileCardProps) => {
  const [rating, setRating] = useState(0);
  const [swipeAnimation, setSwipeAnimation] = useState<"left" | "right" | null>(
    null
  );
  const { toast } = useToast();

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    toast({
      title: "Rating saved!",
      description: `You rated ${profile.name} ${newRating} stars`,
    });
  };

  const handleSwipe = (direction: "left" | "right") => {
    setSwipeAnimation(direction);
    setTimeout(() => {
      onSwipe(direction);
      setSwipeAnimation(null);
    }, 500);
  };

  return (
    <div
      className={`relative w-full max-w-sm mx-auto ${
        swipeAnimation === "left"
          ? "animate-swipe-left"
          : swipeAnimation === "right"
          ? "animate-swipe-right"
          : ""
      }`}
    >
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">
              {profile.name}, {profile.age}
            </h2>
            <StarRating rating={rating} onRatingChange={handleRatingChange} />
          </div>
          <p className="text-gray-600">{profile.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;