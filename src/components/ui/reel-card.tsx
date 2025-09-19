import { Card } from "@/components/ui/card";
import { Play, Eye, TrendingUp } from "lucide-react";

interface ReelCardProps {
  title: string;
  views: string;
  category: string;
  thumbnail?: string;
  isHovered?: boolean;
}

export const ReelCard = ({ title, views, category, thumbnail, isHovered }: ReelCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-card border-border hover-lift cursor-pointer">
      <div className="aspect-[9/16] bg-muted relative overflow-hidden">
        {thumbnail && (
          <img 
            src={thumbnail} 
            alt={title}
            className="object-cover w-full h-full"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-primary/90 rounded-full p-4 animate-glow">
            <Play className="w-6 h-6 text-primary-foreground fill-current" />
          </div>
        </div>

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

      {/* Hover content */}
      <div className="p-4 absolute inset-x-0 bottom-0 bg-gradient-to-t from-card via-card/95 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="font-satoshi font-bold text-sm mb-2">{title}</h3>
        <p className="text-muted-foreground text-xs leading-relaxed">
          Step-by-step breakdown: Learn how to recreate this reel for your own brand.
        </p>
      </div>
    </Card>
  );
};