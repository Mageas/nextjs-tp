import { JobDocument } from '@/prismicio-types.js';
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware';

type HistoryState = {
    history: JobDocument[];
    addHistory: (job: JobDocument) => void;
    reset: () => void;
}

export const useHistoryState = create<HistoryState>()(
  persist(
    (set) => ({
    history: [],
    addHistory: (job) => set((state) => ({ history: [...state.history.filter((j) => j.uid !== job.uid), job]    })),
    reset: () => set({ history: [] }),
}),
    {
      name: 'history-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
