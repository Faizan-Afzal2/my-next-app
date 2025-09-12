'use client';

import { Container } from '@/components/common/layout';

export default function BoomerangAbout() {
  return (
    <section className="py-20 bg-space-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-stars animate-twinkle opacity-40"></div>
      <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/10 rounded-full animate-float blur-xl"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-accent/10 rounded-full animate-float-delayed blur-xl"></div>
      
      <Container size="lg" padding="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h2 className="font-[family-name:var(--font-heading)] text-5xl lg:text-6xl font-bold">
                Our <span className="text-cosmic text-glow">Mission</span>
              </h2>
              <p className="font-[family-name:var(--font-accent)] text-xl text-secondary font-semibold tracking-wider">
                TO INFINITY AND BEYOND TASTE
              </p>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed font-[family-name:var(--font-body)]">
              <p className="text-gray-200">
                At <span className="text-secondary font-bold">Boomerang Pakistan</span>, we believe food should be 
                an adventure. Our space-themed restaurant takes you on a culinary journey through the cosmos, 
                where every dish is crafted with stellar ingredients and served with astronomical care.
              </p>
              
              <p className="text-gray-300">
                From our signature <span className="text-accent font-semibold">Nova Burgers</span> to our 
                famous <span className="text-accent font-semibold">Cosmic Fries</span>, each item on our menu 
                is designed to transport your taste buds to another galaxy.
              </p>
              
              <p className="text-gray-200">
                Join our crew of food explorers and discover why we're not just a restaurant - 
                we're a <span className="text-secondary font-bold">space station for spectacular flavors!</span>
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-xl p-4 flex-1 min-w-32">
                <div className="text-3xl mb-2">🚀</div>
                <div className="font-[family-name:var(--font-accent)] text-sm text-secondary font-bold">FAST SERVICE</div>
                <div className="text-xs text-gray-300 mt-1">Lightning-speed delivery</div>
              </div>
              
              <div className="bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-xl p-4 flex-1 min-w-32">
                <div className="text-3xl mb-2">⭐</div>
                <div className="font-[family-name:var(--font-accent)] text-sm text-accent font-bold">QUALITY FOOD</div>
                <div className="text-xs text-gray-300 mt-1">Premium ingredients</div>
              </div>
              
              <div className="bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-xl p-4 flex-1 min-w-32">
                <div className="text-3xl mb-2">🌟</div>
                <div className="font-[family-name:var(--font-accent)] text-sm text-secondary font-bold">SPACE VIBES</div>
                <div className="text-xs text-gray-300 mt-1">Unique atmosphere</div>
              </div>
            </div>
          </div>
          
          {/* Visual Side */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Main astronaut with chicken */}
              <div className="w-80 h-80 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full flex items-center justify-center animate-cosmic-pulse border-4 border-secondary/30 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-8xl mb-4 animate-float">🧑‍🚀</div>
                  <div className="text-6xl animate-float-delayed">🐓</div>
                </div>
              </div>
              
              {/* Orbiting food items */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-cosmic-gradient rounded-full flex items-center justify-center animate-orbit text-2xl shadow-lg">
                🍔
              </div>
              
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-12 h-12 bg-nebula-gradient rounded-full flex items-center justify-center animate-orbit text-xl shadow-lg" style={{animationDelay: '5s'}}>
                🍟
              </div>
              
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-cosmic-gradient rounded-full flex items-center justify-center animate-orbit text-xl shadow-lg" style={{animationDelay: '10s'}}>
                🥤
              </div>
              
              <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 w-10 h-10 bg-nebula-gradient rounded-full flex items-center justify-center animate-orbit text-lg shadow-lg" style={{animationDelay: '15s'}}>
                ⭐
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-8 right-8 w-3 h-3 bg-secondary rounded-full animate-twinkle"></div>
              <div className="absolute bottom-16 left-8 w-2 h-2 bg-accent rounded-full animate-twinkle" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/3 right-16 w-4 h-4 bg-secondary rounded-full animate-twinkle" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="font-[family-name:var(--font-accent)] text-4xl font-bold text-secondary mb-2">1000+</div>
            <div className="font-[family-name:var(--font-body)] text-white text-lg">Happy Space Travelers</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="font-[family-name:var(--font-accent)] text-4xl font-bold text-accent mb-2">50+</div>
            <div className="font-[family-name:var(--font-body)] text-white text-lg">Cosmic Menu Items</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="font-[family-name:var(--font-accent)] text-4xl font-bold text-secondary mb-2">24/7</div>
            <div className="font-[family-name:var(--font-body)] text-white text-lg">Galactic Service</div>
          </div>
        </div>
      </Container>
    </section>
  );
}