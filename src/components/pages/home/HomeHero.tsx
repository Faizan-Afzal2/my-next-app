import { Heading, Paragraph } from '@/components/common/text';
import { Stack } from '@/components/common/layout';
import Button from '@/components/ui/Button';

export default function HomeHero() {
  return (
    <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20 -mx-4">
      <Stack direction="vertical" spacing="lg" align="center" className="text-center px-4">
        <Heading level={1} variant="primary" align="center" className="text-white text-4xl md:text-6xl font-bold mb-4">
          🍔 Boomerang Burgers
        </Heading>
        <Paragraph variant="lead" align="center" className="max-w-2xl text-white/90 text-xl">
          Fresh, juicy burgers made with premium ingredients. Fast service, unbeatable taste, 
          and flavors that keep coming back to you!
        </Paragraph>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Order Now
          </Button>
          <Button variant="secondary" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
            View Menu
          </Button>
        </div>
      </Stack>
    </div>
  );
}