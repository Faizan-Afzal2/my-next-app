import { Container, Section } from '@/components/common'
import { Heading, Paragraph } from '@/components/common'
import { Card } from '@/components/common'
import Button from '@/components/ui/Button'

interface Location {
  id: string
  name: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  hours: {
    weekdays: string
    weekends: string
  }
  features: string[]
}

const locations: Location[] = [
  {
    id: '1',
    name: 'Downtown Location',
    address: '123 Main Street',
    city: 'Downtown',
    state: 'CA',
    zip: '90210',
    phone: '(555) 123-4567',
    hours: {
      weekdays: '6:00 AM - 11:00 PM',
      weekends: '7:00 AM - 12:00 AM'
    },
    features: ['Drive-Thru', 'Delivery', 'Dine-In', 'WiFi']
  },
  {
    id: '2',
    name: 'Mall Food Court',
    address: '456 Shopping Plaza',
    city: 'Westfield',
    state: 'CA',
    zip: '90211',
    phone: '(555) 234-5678',
    hours: {
      weekdays: '10:00 AM - 10:00 PM',
      weekends: '10:00 AM - 11:00 PM'
    },
    features: ['Dine-In', 'Takeout', 'WiFi']
  },
  {
    id: '3',
    name: 'University Campus',
    address: '789 College Avenue',
    city: 'University City',
    state: 'CA',
    zip: '90212',
    phone: '(555) 345-6789',
    hours: {
      weekdays: '7:00 AM - 2:00 AM',
      weekends: '8:00 AM - 2:00 AM'
    },
    features: ['Drive-Thru', 'Delivery', 'Student Discounts', 'Late Night']
  }
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="text-center py-16">
            <Heading level={1} className="mb-4" align="center">
              Find Us Near You
            </Heading>
            <Paragraph variant="lead" className="max-w-2xl mx-auto" align="center">
              Visit any of our convenient locations for fresh, delicious burgers and fast, 
              friendly service. We're always close by when you're craving great food.
            </Paragraph>
          </div>
        </Container>
      </Section>

      {/* Locations Grid */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Card key={location.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <Heading level={3} className="mb-2">
                    {location.name}
                  </Heading>
                  <div className="text-muted-foreground space-y-1">
                    <p>{location.address}</p>
                    <p>{location.city}, {location.state} {location.zip}</p>
                    <p className="font-medium">{location.phone}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <Heading level={4} className="mb-2 text-foreground">
                    Hours
                  </Heading>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><span className="font-medium">Mon-Fri:</span> {location.hours.weekdays}</p>
                    <p><span className="font-medium">Sat-Sun:</span> {location.hours.weekends}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <Heading level={4} className="mb-2 text-foreground">
                    Features
                  </Heading>
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                    Get Directions
                  </Button>
                  <Button variant="secondary" size="sm" className="flex-1">
                    Call Store
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Info Section */}
      <Section className="bg-secondary">
        <Container>
          <div className="text-center py-12">
            <Heading level={2} className="mb-4" align="center">
              Can't Find a Location Near You?
            </Heading>
            <Paragraph className="mb-6 max-w-xl mx-auto">
              We're always expanding! Contact us to suggest a new location or inquire about 
              franchise opportunities.
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Suggest Location
              </Button>
              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}