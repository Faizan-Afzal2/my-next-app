import { Container, Section } from '@/components/common'
import { Heading, Paragraph } from '@/components/common'
import { Card } from '@/components/common'
import Button from '@/components/ui/Button'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="text-center py-16">
            <Heading level={1} className="mb-4" align="center">
              About Boomerang Burgers
            </Heading>
            <Paragraph variant="lead" className="max-w-2xl mx-auto" align="center">
              Since 1995, we've been serving up the freshest burgers and building lasting relationships 
              with our community, one delicious meal at a time.
            </Paragraph>
          </div>
        </Container>
      </Section>

      {/* Our Story */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level={2} className="mb-6">
                Our Story
              </Heading>
              <Paragraph className="mb-6">
                Boomerang Burgers started as a small family business with a simple mission: create 
                the best burgers using fresh, quality ingredients and serve them with a smile. 
                What began as a single location has grown into a beloved fast-food chain with 
                multiple locations across the city.
              </Paragraph>
              <Paragraph className="mb-6">
                Our name "Boomerang" represents our commitment to our customers - just like a boomerang 
                returns to you, we want our great taste and service to bring you back again and again.
              </Paragraph>
              <Paragraph>
                Today, we're proud to continue our tradition of quality food, fast service, and 
                community involvement that has made us a local favorite for nearly three decades.
              </Paragraph>
            </div>
            <div className="bg-secondary p-8 rounded-lg">
              <Heading level={3} className="mb-4">
                Quick Facts
              </Heading>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Founded:</span>
                  <span className="font-medium">1995</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Locations:</span>
                  <span className="font-medium">12+ and growing</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Employees:</span>
                  <span className="font-medium">200+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Burgers served:</span>
                  <span className="font-medium">2M+ annually</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-muted">
        <Container>
          <div className="text-center mb-12">
            <Heading level={2} className="mb-4" align="center">
              Our Values
            </Heading>
            <Paragraph className="max-w-2xl mx-auto">
              These core values guide everything we do, from ingredient sourcing to customer service.
            </Paragraph>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="text-4xl mb-4">🌱</div>
              <Heading level={3} className="mb-3">
                Fresh Quality
              </Heading>
              <Paragraph>
                We source the freshest ingredients and never compromise on quality, 
                ensuring every bite is delicious.
              </Paragraph>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <Heading level={3} className="mb-3">
                Fast Service
              </Heading>
              <Paragraph>
                Quick doesn't mean compromised. We prepare your food fast without 
                sacrificing taste or quality.
              </Paragraph>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <Heading level={3} className="mb-3">
                Community First
              </Heading>
              <Paragraph>
                We're more than a restaurant - we're part of the community, supporting 
                local events and causes.
              </Paragraph>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section>
        <Container>
          <div className="text-center py-12">
            <Heading level={2} className="mb-4" align="center">
              Experience the Boomerang Difference
            </Heading>
            <Paragraph className="mb-6 max-w-xl mx-auto">
              Visit us today and taste why customers keep coming back for more.
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Find a Location
              </Button>
              <Button variant="secondary" size="lg">
                View Our Menu
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}