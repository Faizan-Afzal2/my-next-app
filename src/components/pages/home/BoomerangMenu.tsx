'use client';

import { Container } from '@/components/common/layout';

const menuData = {
  burgers: [
    { name: 'Nova Sando', price: 995, description: 'Out-of-this-world chicken sandwich' },
    { name: 'Nova Burger', price: 895, description: 'Classic cosmic burger experience' },
  ],
  tenders: [
    { name: 'Tenders 3 Pcs', price: 895, description: 'Crispy chicken from the stars' },
    { name: 'Tenders 5 Pcs', price: 1395, description: 'Perfect for space explorers' },
  ],
  fries: [
    { name: 'Straight Fries', price: 395 },
    { name: 'Curly Fries', price: 445 },
    { name: 'Saucy Fries', price: 495 },
    { name: 'Loaded Fries', price: 995 },
  ],
  drinks: [
    { name: 'Soft Drinks', price: 180 },
    { name: 'Cocoa Cosmos', price: 650 },
    { name: 'Vanilla Vortex', price: 650 },
    { name: 'Cookie Orbit', price: 650 },
  ]
};

const sauces = ['Volcanic', 'Remoulade', 'Honey Tango', 'Astro'];
const spices = ['Star Dust', 'Red Rush'];

export default function BoomerangMenu() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-cosmic-cream relative overflow-hidden">
      {/* Decorative cosmic elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-space-gradient rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-cosmic-gradient rounded-full opacity-10 animate-float-delayed"></div>
      
      <Container size="lg" padding="lg">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-[family-name:var(--font-heading)] text-5xl lg:text-6xl font-bold text-primary mb-6">
            Our <span className="text-cosmic">Cosmic</span> Menu
          </h2>
          <p className="font-[family-name:var(--font-body)] text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover flavors from across the galaxy! Each dish is crafted with stellar ingredients 
            and served with astronomical taste.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Burgers Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary/10 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">🍔</div>
                <h3 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-secondary">
                  Our Chicks
                </h3>
              </div>
              
              <div className="space-y-4">
                {menuData.burgers.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-[family-name:var(--font-body)] font-semibold text-lg text-primary">
                        {item.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                    <span className="font-[family-name:var(--font-accent)] font-bold text-secondary text-lg ml-4">
                      Rs {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fries Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary/10 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">🍟</div>
                <h3 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-secondary">
                  Bruh! Fries Aswell
                </h3>
              </div>
              
              <div className="space-y-4 mb-6">
                {menuData.fries.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <h4 className="font-[family-name:var(--font-body)] font-semibold text-lg text-primary">
                      {item.name}
                    </h4>
                    <span className="font-[family-name:var(--font-accent)] font-bold text-secondary text-lg">
                      Rs {item.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-secondary/20 pt-6">
                <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-secondary mb-3">
                  Get Spicy
                </h4>
                <div className="flex flex-wrap gap-2">
                  {spices.map((spice, index) => (
                    <span key={index} className="bg-cosmic-gradient text-white px-3 py-1 rounded-full text-sm font-[family-name:var(--font-body)]">
                      {spice} - Rs 25
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tenders & Drinks */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary/10 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">🐔</div>
                <h3 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-secondary">
                  Oh So Tender...
                </h3>
              </div>
              
              <div className="space-y-4 mb-6">
                {menuData.tenders.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-[family-name:var(--font-body)] font-semibold text-lg text-primary">
                        {item.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                    <span className="font-[family-name:var(--font-accent)] font-bold text-secondary text-lg ml-4">
                      Rs {item.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-secondary/20 pt-6">
                <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-secondary mb-3">
                  Glazing & Sauces
                </h4>
                <p className="text-sm text-muted-foreground mb-2">Solar Sweet • Meteor Heat</p>
                <div className="flex flex-wrap gap-2">
                  {sauces.map((sauce, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-[family-name:var(--font-body)]">
                      {sauce}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary/10 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">🥤</div>
                <h3 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-secondary">
                  Drinks?
                </h3>
              </div>
              
              <div className="space-y-4">
                {menuData.drinks.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <h4 className="font-[family-name:var(--font-body)] font-semibold text-lg text-primary">
                      {item.name}
                    </h4>
                    <span className="font-[family-name:var(--font-accent)] font-bold text-secondary text-lg">
                      Rs {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-space-gradient rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-stars opacity-30"></div>
            <div className="relative z-10">
              <h3 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
                Ready for Launch? 🚀
              </h3>
              <p className="font-[family-name:var(--font-body)] text-lg mb-6">
                Order now and embark on a culinary journey through space!
              </p>
              <button className="bg-cosmic-gradient hover:scale-105 transition-transform duration-300 font-[family-name:var(--font-heading)] text-lg px-8 py-4 rounded-full border-2 border-secondary/30">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}