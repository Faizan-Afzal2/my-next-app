import { useCounterStore } from '@/store/counter-store';
import { Stack } from '@/components/common/layout';
import Button from '@/components/ui/Button';

export default function CounterControls() {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  const setCount = useCounterStore((state) => state.setCount);

  const handleSetRandom = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    setCount(randomNumber);
  };

  return (
    <Stack direction="horizontal" spacing="md" wrap justify="center">
      <Button 
        onClick={decrement} 
        variant="secondary" 
        size="lg"
      >
        -1 Decrement
      </Button>
      
      <Button 
        onClick={increment} 
        variant="primary" 
        size="lg"
      >
        +1 Increment
      </Button>
      
      <Button 
        onClick={reset} 
        variant="danger" 
        size="lg"
      >
        🔄 Reset
      </Button>
      
      <Button 
        onClick={handleSetRandom} 
        variant="secondary" 
        size="lg"
      >
        🎲 Random
      </Button>
    </Stack>
  );
}