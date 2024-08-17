"use client";

import { Suspense } from "react";
import dynamic from 'next/dynamic';

const UpdatePromptContent = dynamic(() => import('./UpdatePromptContent'), { 
  ssr: false,
  loading: () => <p>Loading...</p>
});

const UpdatePrompt = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePromptContent />
    </Suspense>
  );
};

export default UpdatePrompt;