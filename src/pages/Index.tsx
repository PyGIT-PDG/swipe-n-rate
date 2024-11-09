import { useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import SwipeButtons from "@/components/SwipeButtons";
import { useToast } from "@/components/ui/use-toast";

// Sample profiles data
const profiles = [
  {
    id: "1",
    name: "Sarah",
    age: 28,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Adventure seeker and coffee enthusiast. Let's explore together!",
  },
  {
    id: "2",
    name: "James",
    age: 32,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "Photographer and world traveler. Always looking for the perfect shot.",
  },
  {
    id: "3",
    name: "Emma",
    age: 26,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    bio: "Food lover and yoga instructor. Balance is key!",
  },
];

const Index = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const { toast } = useToast();

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "right") {
      toast({
        title: "It's a match! 💖",
        description: `You liked ${profiles[currentProfileIndex].name}!`,
      });
    }

    setTimeout(() => {
      setCurrentProfileIndex((prev) =>
        prev < profiles.length - 1 ? prev + 1 : 0
      );
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 to-pink-100 py-8">
      <div className="container max-w-md mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-rose-500 to-pink-500 text-transparent bg-clip-text">
          TinderRate
        </h1>
        {profiles[currentProfileIndex] && (
          <>
            <ProfileCard
              profile={profiles[currentProfileIndex]}
              onSwipe={handleSwipe}
            />
            <SwipeButtons
              onSwipeLeft={() => handleSwipe("left")}
              onSwipeRight={() => handleSwipe("right")}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Index;