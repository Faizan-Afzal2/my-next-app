import { create } from "zustand";

interface CounterState {
  count: number;
  todos: TODO[];
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

interface TODO {
  id: number;
  title: string;
  description: string;
}

export const useCounterStore = create<CounterState>((set, get) => ({
  // Initial values for states
  count: 0,
  todos: [],

  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),

  decrement: () =>
    set((state) => ({
      count: state.count - 1,
    })),

  addTodo: (newTodo: TODO) => set((state) => ({})),

  reset: () => set({ count: 0 }),
}));
