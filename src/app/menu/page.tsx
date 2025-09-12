import { Container, Section } from '@/components/common'
import { Heading, Paragraph } from '@/components/common'
import { Card } from '@/components/common'
import Button from '@/components/ui/Button'

interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  category: string
  popular?: boolean
}

const menuItems: MenuItem[] = [
  // Burgers
  {
    id: '1',
    name: 'Boomerang Classic Burger',
    description: 'Juicy beef patty with lettuce, tomato, onion, and our signature sauce',
    price: '$9.99',
    category: 'Burgers',
    popular: true
  },
  {
    id: '2',
    name: 'BBQ Bacon Burger',
    description: 'Beef patty with crispy bacon, BBQ sauce, onion rings, and cheddar cheese',
    price: '$11.99',
    category: 'Burgers'
  },
  {
    id: '3',
    name: 'Chicken Deluxe',
    description: 'Crispy chicken breast with avocado, bacon, and ranch dressing',
    price: '$10.99',
    category: 'Burgers'
  },
  
  // Sides
  {
    id: '4',
    name: 'Crispy Fries',
    description: 'Golden crispy fries with sea salt',
    price: '$3.99',
    category: 'Sides',
    popular: true
  },
  {
    id: '5',
    name: 'Onion Rings',
    description: 'Beer-battered onion rings with ranch dip',
    price: '$4.99',
    category: 'Sides'
  },
  {
    id: '6',
    name: 'Loaded Nachos',
    description: 'Tortilla chips with cheese, jalapeños, sour cream, and guacamole',
    price: '$7.99',
    category: 'Sides'
  },
  
  // Drinks
  {
    id: '7',
    name: 'Classic Milkshake',
    description: 'Vanilla, chocolate, or strawberry thick milkshake',
    price: '$4.99',
    category: 'Drinks'
  },
  {
    id: '8',
    name: 'Fresh Lemonade',
    description: 'House-made fresh lemonade',
    price: '$2.99',
    category: 'Drinks'
  }
]

const categories = ['All', 'Burgers', 'Sides', 'Drinks']

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="text-center py-16">
            <Heading level={1} className="mb-4" align="center">
              Our Delicious Menu
            </Heading>
            <Paragraph variant="lead" className="max-w-2xl mx-auto" align="center">
              Fresh ingredients, bold flavors, and unbeatable taste. Discover our signature burgers, 
              crispy sides, and refreshing drinks.
            </Paragraph>
          </div>
        </Container>
      </Section>

      {/* Menu Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <Card key={item.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <Heading level={3} className="flex-1">
                    {item.name}
                    {item.popular && (
                      <span className="ml-2 px-2 py-1 text-xs bg-accent text-accent-foreground rounded-full">
                        Popular
                      </span>
                    )}
                  </Heading>
                  <span className="text-lg font-bold text-primary ml-4">
                    {item.price}
                  </span>
                </div>
                <Paragraph className="text-muted-foreground mb-4">
                  {item.description}
                </Paragraph>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section className="bg-secondary">
        <Container>
          <div className="text-center py-12">
            <Heading level={2} className="mb-4" align="center">
              Ready to Order?
            </Heading>
            <Paragraph className="mb-6 max-w-xl mx-auto">
              Visit us in-store or place your order online for pickup or delivery.
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Order Online
              </Button>
              <Button variant="secondary" size="lg">
                Find Locations
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}