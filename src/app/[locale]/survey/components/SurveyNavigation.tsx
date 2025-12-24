'use client';

import { useTranslations } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';
import { SurveySection } from '@/types/survey';

interface SurveyNavigationProps {
  sections: readonly SurveySection[];
  currentSection: number;
  completedSections: Set<number>;
  onSectionChange: (index: number) => void;
}

export function SurveyNavigation({
  sections,
  currentSection,
  completedSections,
  onSectionChange
}: SurveyNavigationProps) {
  const t = useTranslations('survey.sections');

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2">
      {sections.map((section, index) => {
        const isActive = currentSection === index;
        const isCompleted = completedSections.has(index);

        return (
          <button
            key={section}
            onClick={() => onSectionChange(index)}
            className={`
              nav-tab flex items-center gap-2
              ${isActive ? 'nav-tab-active' : isCompleted ? 'nav-tab-completed' : 'nav-tab-inactive'}
            `}
          >
            {isCompleted && <CheckCircle2 className="w-4 h-4" />}
            <span>{index + 1}. {t(`${section}.title`)}</span>
          </button>
        );
      })}
    </div>
  );
}

