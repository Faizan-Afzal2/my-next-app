"use client";

import { useCounterStore } from "@/store/counter-store";
import Button from "@/components/ui/Button";

export default function CounterPage() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  const handleSetRandom = () => {
    const randomNumber = Math.floor(Math.random() * 100);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">{count}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Learn state management with this simple counter example using Zustand.
        </p>
      </div>

      <div className="bg-card border border-border rounded-lg p-8 mb-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">
            Current Count
          </h2>

          {/* Display the count value from our store */}
          <div className="text-6xl font-bold text-primary mb-4">{count}</div>
        </div>

        {/* Control Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Basic increment/decrement buttons */}
          <Button onClick={decrement} variant="secondary" size="lg">
            -1 Decrement
          </Button>

          <Button onClick={increment} variant="primary" size="lg">
            +1 Increment
          </Button>

          {/* Reset button */}
          <Button onClick={reset} variant="danger" size="lg">
            🔄 Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
