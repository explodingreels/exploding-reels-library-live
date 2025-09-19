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
          <img 
            src={heroImage} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hero-gradient absolute inset-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-satoshi font-black text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
            Steal Proven Reels.{" "}
            <span className="text-primary animate-glow">Create Content</span>{" "}
            That Works.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Exploding Reels helps you find top-performing Instagram reel ideas and shows you exactly how to recreate them for your brand.
          </p>
          <Button variant="hero" size="xl" className="animate-float">
            Browse the Library
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="feature-grid">
          <FeatureCard
            icon={Filter}
            title="Filter by niche, use case, or video style"
            description="Find the exact inspiration you need. From faceless videos to meme hooks — find the exact reel type that matches your brand."
          />
          <FeatureCard
            icon={BookOpen}
            title="Step-by-step breakdown"
            description="Learn how to recreate every reel for your own brand. Every reel comes with a breakdown: what to shoot, how to edit, and why it works."
          />
          <FeatureCard
            icon={Clock}
            title="Save hours of scrolling"
            description="Every reel in the library is handpicked and proven to perform. Stop wasting time chasing trends. Start creating reels that already work."
          />
        </div>
      </section>

      {/* Reel Preview Section */}
      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-satoshi font-black text-4xl md:text-5xl mb-6">
              See what's inside the library
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every reel comes with detailed breakdowns showing you exactly how to recreate the magic.
            </p>
          </div>

          <div className="reel-grid mb-12">
            <ReelCard
              title="Trending Fashion Hook"
              views="2.3M views"
              category="Fashion"
              thumbnail={reelExamples}
            />
            <ReelCard
              title="Business Growth Tip"
              views="890K views"
              category="Business"
              thumbnail={reelExamples}
            />
            <ReelCard
              title="Creative Transition"
              views="1.7M views"
              category="Creative"
              thumbnail={reelExamples}
            />
            <ReelCard
              title="Lifestyle Moment"
              views="3.1M views"
              category="Lifestyle"
              thumbnail={reelExamples}
            />
            <ReelCard
              title="Educational Content"
              views="1.2M views"
              category="Education"
              thumbnail={reelExamples}
            />
            <ReelCard
              title="Viral Dance Move"
              views="5.4M views"
              category="Entertainment"
              thumbnail={reelExamples}
            />
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