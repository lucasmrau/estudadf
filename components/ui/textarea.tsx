import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      className={cn(
        'border-brand-blue/30 placeholder:text-brand-ink/45 focus-visible:border-brand-blue focus-visible:ring-brand-blue/25 dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-white px-3 py-2 text-base text-brand-ink shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:ring-[3px]',
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
