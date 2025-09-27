import { Container, Section } from '@/components/common'
import { Heading, Paragraph } from '@/components/common'
import { Card } from '@/components/common'
import Button from '@/components/ui/Button'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="text-center py-16">
            <Heading level={1} className="mb-4" align="center">
              Contact Boomerang Burgers
            </Heading>
            <Paragraph variant="lead" className="max-w-2xl mx-auto" align="center">
              Have questions, feedback, or want to learn about franchise opportunities? 
              We'd love to hear from you!
            </Paragraph>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-6">
              <Heading level={2} className="mb-6">
                Send us a Message
              </Heading>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>General Inquiry</option>
                    <option>Franchise Opportunity</option>
                    <option>Customer Feedback</option>
                    <option>Catering Request</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <Heading level={3} className="mb-4">
                  Corporate Headquarters
                </Heading>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Address:</strong><br />
                    123 Burger Boulevard<br />
                    Suite 100<br />
                    Fast Food City, CA 90210
                  </p>
                  <p>
                    <strong className="text-foreground">Phone:</strong><br />
                    (555) BURGER-1 (284-7371)
                  </p>
                  <p>
                    <strong className="text-foreground">Email:</strong><br />
                    info@boomerangburgers.com
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <Heading level={3} className="mb-4">
                  Business Hours
                </Heading>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="text-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <Heading level={3} className="mb-4">
                  Quick Links
                </Heading>
                <div className="space-y-3">
                  <Button variant="secondary" className="w-full justify-start">
                    Find Restaurant Locations
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    Franchise Information
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    Catering Services
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    Nutritional Information
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}