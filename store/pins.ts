import { JobDocument } from '@/prismicio-types.js';
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware';

type PinState = {
    pins: string[];
    addPin: (pin: JobDocument) => void;
    removePin: (pin: JobDocument) => void;
    hasPin: (pin: JobDocument) => boolean;
}

export const usePinState = create<PinState>()(
  persist(
    (set, get) => ({
    pins: [],
    addPin: (pin) => set((state) => ({ pins: [...state.pins, pin.uid] })),
    removePin: (pin) => set((state) => ({ pins: state.pins.filter((uid) => uid !== pin.uid) })),
    hasPin: (pin) => get().pins.includes(pin.uid),
}),
    {
      name: 'pin-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
