'use client';

import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LabelWithTooltip } from '@/components/ui/label-with-tooltip';
import { FormError } from '@/components/ui/form-error';
import { GenerateExampleButton } from '@/components/ui/generate-example-button';
import { SurveyFormData } from '@/types/survey';
import { DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import { exampleFinancial } from '@/lib/exampleData';

interface SectionProps {
  formData: SurveyFormData;
  updateFormData: (field: keyof SurveyFormData, value: unknown) => void;
  updateNestedData: (parent: keyof SurveyFormData, field: string, value: unknown) => void;
  getFieldError?: (fieldName: string) => string | undefined;
}

export function Financial({ formData, updateFormData, updateNestedData, getFieldError }: SectionProps) {
  const t = useTranslations();

  const handleGenerateExample = () => {
    Object.entries(exampleFinancial).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        Object.entries(value).forEach(([nestedKey, nestedValue]) => {
          updateNestedData(key as keyof SurveyFormData, nestedKey, nestedValue);
        });
      } else {
        updateFormData(key as keyof SurveyFormData, value);
      }
    });
  };

  const handleClearExample = () => {
    Object.entries(exampleFinancial).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        Object.keys(value).forEach((nestedKey) => {
          updateNestedData(key as keyof SurveyFormData, nestedKey, '');
        });
      } else {
        updateFormData(key as keyof SurveyFormData, '');
      }
    });
  };

  const budgetCategories = [
    { key: 'personnel', label: t('financial.breakdown.personnel') },
    { key: 'hardware', label: t('financial.breakdown.hardware') },
    { key: 'software', label: t('financial.breakdown.software') },
    { key: 'cloud', label: t('financial.breakdown.cloud') },
    { key: 'telecom', label: t('financial.breakdown.telecom') },
    { key: 'security', label: t('financial.breakdown.security') },
    { key: 'projects', label: t('financial.breakdown.projects') },
    { key: 'support', label: t('financial.breakdown.support') },
    { key: 'training', label: t('financial.breakdown.training') },
    { key: 'other', label: t('financial.breakdown.other') },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-primary pb-3 mb-6">
        <div className="flex items-center gap-3">
          <DollarSign className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold text-primary">
            {t('financial.title')}
          </h2>
        </div>
        <GenerateExampleButton onClick={handleGenerateExample} onClear={handleClearExample} />
      </div>

      <div className="info-box info-box-success mb-6">
        <p className="text-sm text-green-800">
          {t('financial.note')}
        </p>
      </div>

      {/* Total IT Budget */}
      <div className="space-y-2">
        <LabelWithTooltip 
          className="required text-lg"
          tooltip={t('financial.tooltips.totalBudget')}
        >
          {t('financial.totalBudget')}
        </LabelWithTooltip>
        <Input
          value={formData.totalItBudget}
          onChange={(e) => updateFormData('totalItBudget', e.target.value)}
          placeholder="e.g., $15,000,000"
          className={cn('text-lg max-w-md', getFieldError?.('totalItBudget') && 'border-red-500 focus-visible:border-red-500')}
        />
        <FormError message={getFieldError?.('totalItBudget')} />
      </div>

      {/* Budget Breakdown */}
      <div className="border-t pt-6">
        <LabelWithTooltip 
          className="font-semibold text-gray-800 mb-4"
          tooltip={t('financial.tooltips.breakdown')}
        >
          {t('financial.breakdown.title')} (USD or %)
        </LabelWithTooltip>
        <div className="space-y-3 mt-4">
          {budgetCategories.map((category) => {
            const tooltipKey = `financial.tooltips.${category.key}` as const;
            const hasTooltip = category.key === 'personnel' || category.key === 'hardware' || category.key === 'software' || category.key === 'cloud';
            return (
              <div key={category.key} className="grid grid-cols-2 gap-4 items-center">
                {hasTooltip ? (
                  <LabelWithTooltip tooltip={t(tooltipKey)} className="text-sm text-gray-700">
                    {category.label}
                  </LabelWithTooltip>
                ) : (
                  <label className="text-sm text-gray-700">{category.label}</label>
                )}
                <Input
                  value={formData.budgetBreakdown[category.key as keyof typeof formData.budgetBreakdown] || ''}
                  onChange={(e) => updateNestedData('budgetBreakdown', category.key, e.target.value)}
                  placeholder="$0 or 0%"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="border-t pt-6">
        <h3 className="font-semibold text-gray-800 mb-4">
          {t('financial.metrics.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <LabelWithTooltip tooltip={t('financial.tooltips.budgetPercent')}>
              {t('financial.metrics.budgetPercent')}
            </LabelWithTooltip>
            <Input
              type="number"
              step="0.1"
              value={formData.itBudgetPercent}
              onChange={(e) => updateFormData('itBudgetPercent', e.target.value)}
              placeholder="e.g., 4.5"
            />
          </div>

          <div className="space-y-2">
            <LabelWithTooltip tooltip={t('financial.tooltips.costPerStudent')}>
              {t('financial.metrics.costPerStudent')}
            </LabelWithTooltip>
            <Input
              type="number"
              value={formData.costPerStudent}
              onChange={(e) => updateFormData('costPerStudent', e.target.value)}
              placeholder="e.g., 850"
            />
          </div>

          <div className="space-y-2">
            <LabelWithTooltip tooltip={t('financial.tooltips.costPerEmployee')}>
              {t('financial.metrics.costPerEmployee')}
            </LabelWithTooltip>
            <Input
              type="number"
              value={formData.costPerEmployee}
              onChange={(e) => updateFormData('costPerEmployee', e.target.value)}
              placeholder="e.g., 3200"
            />
          </div>

          <div className="space-y-2">
            <LabelWithTooltip tooltip={t('financial.tooltips.capexOpex')}>
              {t('financial.metrics.capexOpex')}
            </LabelWithTooltip>
            <Input
              value={formData.capexOpexRatio}
              onChange={(e) => updateFormData('capexOpexRatio', e.target.value)}
              placeholder="e.g., 30/70 or 40/60"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

