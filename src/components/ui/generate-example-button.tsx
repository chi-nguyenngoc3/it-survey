'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Wand2, Eraser } from 'lucide-react';
import { useLocale } from 'next-intl';

interface GenerateExampleButtonProps {
  onClick: () => void;
  onClear?: () => void;
  className?: string;
}

export function GenerateExampleButton({ onClick, onClear, className = '' }: GenerateExampleButtonProps) {
  const locale = useLocale();
  const [hasGenerated, setHasGenerated] = useState(false);
  
  const generateLabel = locale === 'vi' ? 'Tạo dữ liệu mẫu' : 'Generate Example';
  const clearLabel = locale === 'vi' ? 'Xóa dữ liệu mẫu' : 'Clear Example';

  const handleGenerate = () => {
    onClick();
    setHasGenerated(true);
  };

  const handleClear = () => {
    if (onClear) {
      onClear();
      setHasGenerated(false);
    }
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={handleGenerate}
        className="gap-2 text-amber-600 border-amber-300 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-400"
      >
        <Wand2 className="h-4 w-4" />
        {generateLabel}
      </Button>
      
      {hasGenerated && onClear && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleClear}
          className="gap-2 text-gray-500 border-gray-300 hover:bg-gray-50 hover:text-gray-700 hover:border-gray-400"
        >
          <Eraser className="h-4 w-4" />
          {clearLabel}
        </Button>
      )}
    </div>
  );
}

