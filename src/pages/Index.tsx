import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FeatureCard } from "@/components/ui/feature-card";
import { ReelCard } from "@/components/ui/reel-card";
import { Filter, BookOpen, Clock, ArrowRight, Star, Zap, Target } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import reelMockups from "@/assets/reel-mockups.jpg";
import reelExamples from "@/assets/reel-examples.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
        </div>
        <div className="hero-gradient absolute inset-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-satoshi font-black text-3xl md:text-5xl lg:text-8xl mb-8 leading-tight">
             Discover {" "}
            <span className="text-primary animate-glow"> Viral Reel Ideas  </span>{" "} 
            for Your Brand
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Unlock a library of top-performing Instagram reel ideas and step to recreate them for your brand with Exploding Reels
          </p>
          <Button variant="hero" size="xl" className="animate-float">
            Get Exploding Reels
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>


      {/* Reel Preview Section */}
      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-satoshi font-black text-4xl md:text-5xl mb-6">
              150+ Viral Reel Ideas Waiting for You
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every reel idea comes with a detailed breakdown showing you exactly how to recreate the magic for your brand.
            </p>
          </div>

          <div className="overflow-hidden mb-12">
  <div className="flex gap-6 animate-scroll-left-mobile md:animate-scroll-left">
    <ReelCard
      title="Trending Fashion Hook"
      views="2.3M views"
      category="Fashion"
      videoUrl="https://vz-96460461-914.b-cdn.net/d99bced9-b62a-4f77-ab10-e6791bc74464/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Business Growth Tip"
      views="890K views"
      category="Business"
      videoUrl="https://vz-96460461-914.b-cdn.net/e0b6913a-f3de-4256-b4e9-16a5f6179c2f/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Creative Transition"
      views="1.7M views"
      category="Creative"
      videoUrl="https://vz-96460461-914.b-cdn.net/25c3f1af-bc10-4d0e-afeb-d38ba4fafcd4/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Lifestyle Moment"
      views="3.1M views"
      category="Lifestyle"
      videoUrl="https://vz-96460461-914.b-cdn.net/8c16bf01-702a-40c1-9a90-7a8c68afbaeb/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Educational Content"
      views="1.2M views"
      category="Education"
      videoUrl="https://vz-96460461-914.b-cdn.net/5cbc4739-1052-498f-bda1-839dd98c12a2/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Viral Dance Move"
      views="5.4M views"
      category="Entertainment"
      videoUrl="https://vz-96460461-914.b-cdn.net/03693590-38ed-4e09-b793-17ef90f840b4/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Food Inspiration"
      views="780K views"
      category="Food"
      videoUrl="https://vz-96460461-914.b-cdn.net/5b0771d4-1942-4bbe-bc48-685af52c0ca5/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Travel Aesthetic"
      views="2.1M views"
      category="Travel"
      videoUrl="https://vz-96460461-914.b-cdn.net/ad3cd2fb-137c-4e8e-99ec-8a1c76b55437/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Tech Hack"
      views="960K views"
      category="Tech"
      videoUrl="https://vz-96460461-914.b-cdn.net/48f7868f-43ca-4761-951e-4ec1f9ec893f/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Motivational Snippet"
      views="1.5M views"
      category="Motivation"
      videoUrl="https://vz-96460461-914.b-cdn.net/6167a7b2-37d0-495e-9094-f6fcdc3817e0/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Comedy Skit"
      views="4.7M views"
      category="Comedy"
      videoUrl="https://vz-96460461-914.b-cdn.net/cf007b9a-c33f-4877-afe8-c2e759358e2b/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Fitness Routine"
      views="2.6M views"
      category="Fitness"
      videoUrl="https://vz-96460461-914.b-cdn.net/9d055a10-43e2-409e-96b7-ad28394433a1/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Pet Fun"
      views="3.9M views"
      category="Pets"
      videoUrl="https://vz-96460461-914.b-cdn.net/a6013cff-5d7c-4097-949e-85baa46e96b5/play_720p.mp4"
      autoplay={true}
    />
   <ReelCard
      title="Creative Transition"
      views="1.7M views"
      category="Creative"
      videoUrl="https://vz-96460461-914.b-cdn.net/25c3f1af-bc10-4d0e-afeb-d38ba4fafcd4/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Lifestyle Moment"
      views="3.1M views"
      category="Lifestyle"
      videoUrl="https://vz-96460461-914.b-cdn.net/8c16bf01-702a-40c1-9a90-7a8c68afbaeb/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Educational Content"
      views="1.2M views"
      category="Education"
      videoUrl="https://vz-96460461-914.b-cdn.net/5cbc4739-1052-498f-bda1-839dd98c12a2/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Viral Dance Move"
      views="5.4M views"
      category="Entertainment"
      videoUrl="https://vz-96460461-914.b-cdn.net/03693590-38ed-4e09-b793-17ef90f840b4/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Food Inspiration"
      views="780K views"
      category="Food"
      videoUrl="https://vz-96460461-914.b-cdn.net/5b0771d4-1942-4bbe-bc48-685af52c0ca5/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Travel Aesthetic"
      views="2.1M views"
      category="Travel"
      videoUrl="https://vz-96460461-914.b-cdn.net/ad3cd2fb-137c-4e8e-99ec-8a1c76b55437/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Tech Hack"
      views="960K views"
      category="Tech"
      videoUrl="https://vz-96460461-914.b-cdn.net/48f7868f-43ca-4761-951e-4ec1f9ec893f/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Motivational Snippet"
      views="1.5M views"
      category="Motivation"
      videoUrl="https://vz-96460461-914.b-cdn.net/6167a7b2-37d0-495e-9094-f6fcdc3817e0/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Comedy Skit"
      views="4.7M views"
      category="Comedy"
      videoUrl="https://vz-96460461-914.b-cdn.net/cf007b9a-c33f-4877-afe8-c2e759358e2b/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Fitness Routine"
      views="2.6M views"
      category="Fitness"
      videoUrl="https://vz-96460461-914.b-cdn.net/9d055a10-43e2-409e-96b7-ad28394433a1/play_720p.mp4"
      autoplay={true}
    />
    <ReelCard
      title="Pet Fun"
      views="3.9M views"
      category="Pets"
      videoUrl="https://vz-96460461-914.b-cdn.net/a6013cff-5d7c-4097-949e-85baa46e96b5/play_720p.mp4"
      autoplay={true}
    />
  </div>
</div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              View Full Library
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Deep Dives */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
        {/* Filter Like a Pro */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-satoshi font-black text-3xl md:text-4xl mb-6">
              Filter Like a <span className="text-primary">Pro</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              From faceless videos to meme hooks — find the exact reel type that matches your brand. Our advanced filtering system helps you discover content that converts.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Faceless", "Educational", "Behind-the-scenes", "Trending", "Product demos"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src={reelMockups} 
              alt="Filter Interface Mockup" 
              className="rounded-2xl shadow-card hover-lift"
            />
          </div>
        </div>

        {/* Recreate in Minutes */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <img 
              src={reelMockups} 
              alt="Step-by-step Breakdown" 
              className="rounded-2xl shadow-card hover-lift"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="font-satoshi font-black text-3xl md:text-4xl mb-6">
              Recreate in <span className="text-primary">Minutes</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Every reel comes with a breakdown: what to shoot, how to edit, and why it works. Turn inspiration into action with detailed step-by-step guides.
            </p>
            <div className="space-y-4">
              {[
                { icon: Target, title: "What to shoot", desc: "Camera angles, props, and setup details" },
                { icon: Zap, title: "How to edit", desc: "Transitions, effects, and timing breakdowns" },
                { icon: Star, title: "Why it works", desc: "Psychology and engagement principles" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-satoshi font-bold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-12 bg-card border-border hover-lift card-gradient">
            <h2 className="font-satoshi font-black text-3xl md:text-4xl mb-6">
              Lifetime Access for Just <span className="text-primary">$19</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              No recurring fees. One-time payment for unlimited inspiration.
            </p>
            <ul className="text-left space-y-4 mb-8 max-w-md mx-auto">
              {[
                "Access to entire reel library",
                "Step-by-step recreation guides",
                "Advanced filtering system",
                "New reels added weekly",
                "Lifetime updates included"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="cta" size="xl" className="w-full">
              Get Exploding Reels
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-card/30 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-satoshi font-black text-4xl md:text-6xl mb-8">
            Ready to create reels that <span className="text-primary animate-glow">explode</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of creators who've transformed their content strategy with proven, high-performing reel ideas.
          </p>
          <Button variant="hero" size="xl" className="animate-float">
            Get Exploding Reels
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Exploding Reels. Transform your content. Explode your reach.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
