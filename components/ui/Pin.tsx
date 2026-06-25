"use client";
import { JobDocument } from "@/prismicio-types.js";
import { usePinState } from "@/store/pins";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useEffect, useState } from "react";

export default function Pin({ job }: { job: JobDocument }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, []);

  const addPin = usePinState((state) => state.addPin);
  const removePin = usePinState((state) => state.removePin);
  const pinned = usePinState((state) => state.hasPin(job));

  const handlePinClick = () => {
    if (pinned) {
      removePin(job);
    } else {
      addPin(job);
    }
  };

  return (
    mounted && (
      <button onClick={handlePinClick}>
      {pinned ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />}
    </button>
    )
  );
}
