"use client";
import { JobDocument } from "@/prismicio-types.js";
import { usePinState } from "@/store/pins";

export default function Pin({ job }: { job: JobDocument }) {
    const addPin = usePinState((state) => state.addPin);
    const removePin = usePinState((state) => state.removePin);
    const hasPin = usePinState((state) => state.hasPin(job));

  const handlePinClick = () => {
    if (hasPin) {
      removePin(job);
    } else {
      addPin(job);
    }
  };

  return (
    <button
      onClick={handlePinClick}
      className={`px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
        hasPin ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-blue-500 text-white hover:bg-blue-600'
      }`}
    >
      {hasPin ? 'Unpin' : 'Pin'}
    </button>
  );
}
