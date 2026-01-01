'use client';

import { HelpCircle } from 'lucide-react';
import { Label } from './label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';
import { cn } from '@/lib/utils';

interface LabelWithTooltipProps {
  htmlFor?: string;
  children: React.ReactNode;
  tooltip: string;
  required?: boolean;
  className?: string;
}

export function LabelWithTooltip({
  htmlFor,
  children,
  tooltip,
  required,
  className,
}: LabelWithTooltipProps) {
  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <Label htmlFor={htmlFor} className={cn(required && 'required')}>
        {children}
      </Label>
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded-full"
              aria-label="More information"
            >
              <HelpCircle className="h-4 w-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" align="start">
            <p className="text-sm leading-relaxed">{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

