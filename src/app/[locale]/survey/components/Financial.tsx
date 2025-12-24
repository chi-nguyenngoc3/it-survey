'use client';

import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SurveyFormData } from '@/types/survey';
import { DollarSign } from 'lucide-react';

interface SectionProps {
  formData: SurveyFormData;
  updateFormData: (field: keyof SurveyFormData, value: unknown) => void;
  updateNestedData: (parent: keyof SurveyFormData, field: string, value: unknown) => void;
}

export function Financial({ formData, updateFormData, updateNestedData }: SectionProps) {
  const t = useTranslations();

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
      <div className="flex items-center gap-3 border-b border-primary pb-3 mb-6">
        <DollarSign className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-semibold text-primary">
          {t('financial.title')}
        </h2>
      </div>

      <div className="info-box info-box-success mb-6">
        <p className="text-sm text-green-800">
          {t('financial.note')}
        </p>
      </div>

      {/* Total IT Budget */}
      <div className="space-y-2">
        <Label className="required text-lg">{t('financial.totalBudget')}</Label>
        <Input
          value={formData.totalItBudget}
          onChange={(e) => updateFormData('totalItBudget', e.target.value)}
          placeholder="e.g., $15,000,000"
          className="text-lg max-w-md"
        />
      </div>

      {/* Budget Breakdown */}
      <div className="border-t pt-6">
        <h3 className="font-semibold text-gray-800 mb-4">
          {t('financial.breakdown.title')} (USD or %)
        </h3>
        <div className="space-y-3">
          {budgetCategories.map((category) => (
            <div key={category.key} className="grid grid-cols-2 gap-4 items-center">
              <label className="text-sm text-gray-700">{category.label}</label>
              <Input
                value={formData.budgetBreakdown[category.key as keyof typeof formData.budgetBreakdown] || ''}
                onChange={(e) => updateNestedData('budgetBreakdown', category.key, e.target.value)}
                placeholder="$0 or 0%"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="border-t pt-6">
        <h3 className="font-semibold text-gray-800 mb-4">
          {t('financial.metrics.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>{t('financial.metrics.budgetPercent')}</Label>
            <Input
              type="number"
              step="0.1"
              value={formData.itBudgetPercent}
              onChange={(e) => updateFormData('itBudgetPercent', e.target.value)}
              placeholder="e.g., 4.5"
            />
          </div>

          <div className="space-y-2">
            <Label>{t('financial.metrics.costPerStudent')}</Label>
            <Input
              type="number"
              value={formData.costPerStudent}
              onChange={(e) => updateFormData('costPerStudent', e.target.value)}
              placeholder="e.g., 850"
            />
          </div>

          <div className="space-y-2">
            <Label>{t('financial.metrics.costPerEmployee')}</Label>
            <Input
              type="number"
              value={formData.costPerEmployee}
              onChange={(e) => updateFormData('costPerEmployee', e.target.value)}
              placeholder="e.g., 3200"
            />
          </div>

          <div className="space-y-2">
            <Label>{t('financial.metrics.capexOpex')}</Label>
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

