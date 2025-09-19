import { Card } from "@/components/ui/card";
import { Eye, TrendingUp } from "lucide-react";

interface ReelCardProps {
  title: string;
  views: string;
  category: string;
  videoUrl: string;
  autoplay?: boolean;
}

export const ReelCard = ({ title, views, category, videoUrl, autoplay }: ReelCardProps) => {
  return (
    <Card className="relative overflow-hidden bg-card border-border flex-shrink-0 w-[200px] md:w-[280px]">
      <div className="aspect-[9/16] bg-black relative overflow-hidden">
        
        {/* Video element */}
        <video
          src={videoUrl}
          className="object-cover w-full h-full"
          muted
          autoPlay={autoplay}
          loop
          playsInline
        />

        {/* Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Stats overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 text-white text-sm">
            <Eye className="w-4 h-4" />
            <span>{views}</span>
            <TrendingUp className="w-4 h-4 ml-2" />
            <span className="bg-primary/20 px-2 py-1 rounded-full text-xs">
              {category}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};
