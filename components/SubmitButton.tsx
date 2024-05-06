'use client';

import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';

export default function ServerButton({ children, size }) {
  const { pending } = useFormStatus();

  return (
    <div>
      {pending ? (
        <div>nothing</div>
      ) : (
        <Button
          disabled={pending}
          size={size}
        >
          {children}
        </Button>
      )}
    </div>
  );
}
