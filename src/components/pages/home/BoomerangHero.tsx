'use client';

import { Container } from '@/components/common/layout';
import Button from '@/components/ui/Button';

export default function BoomerangHero() {
  return (
    <section className="relative min-h-screen bg-space-gradient overflow-hidden -mt-18">
      {/* Animated stars background */}
      <div className="absolute inset-0 bg-stars animate-twinkle opacity-70"></div>
      
      {/* Floating cosmic elements */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-secondary/20 animate-float"></div>
      <div className="absolute top-40 right-20 w-8 h-8 rounded-full bg-accent/30 animate-float-delayed"></div>
      <div className="absolute bottom-32 left-1/4 w-12 h-12 rounded-full bg-secondary/15 animate-orbit"></div>
      
      <Container size="lg" padding="lg" className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="font-[family-name:var(--font-heading)] text-6xl lg:text-8xl font-bold text-white leading-tight">
                <span className="text-cosmic text-glow">BOOM</span>
                <span className="text-white">ERANG</span>
              </h1>
              <p className="font-[family-name:var(--font-accent)] text-xl lg:text-2xl text-secondary font-semibold tracking-wider">
                PAKISTAN
              </p>
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-200 font-[family-name:var(--font-body)] max-w-2xl leading-relaxed">
              Experience <span className="text-secondary font-bold">out-of-this-world</span> flavors! 
              From cosmic burgers to galactic fries, every bite is an adventure through space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-cosmic-gradient hover:scale-105 transition-transform duration-300 font-[family-name:var(--font-heading)] text-lg px-8 py-4 rounded-full border-2 border-secondary/30"
              >
                🚀 Order Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 font-[family-name:var(--font-body)] text-lg px-8 py-4 rounded-full"
              >
                View Menu
              </Button>
            </div>
          </div>
          
          {/* Astronaut Mascot Area */}
          <div className="flex-1 flex justify-center items-center mt-12 lg:mt-0">
            <div className="relative">
              {/* Main astronaut illustration placeholder */}
              <div className="w-96 h-96 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full flex items-center justify-center animate-cosmic-pulse border-4 border-secondary/30">
                <div className="text-8xl animate-float">🧑‍🚀</div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-secondary rounded-full flex items-center justify-center animate-orbit text-2xl">
                🍔
              </div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-orbit text-xl" style={{animationDelay: '5s'}}>
                🍟
              </div>
              
              {/* Floating text */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-white font-[family-name:var(--font-accent)] text-sm tracking-wider opacity-80 animate-float-delayed">
                SPACE FOOD
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-[family-name:var(--font-body)]">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}