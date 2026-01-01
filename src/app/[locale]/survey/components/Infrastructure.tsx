'use client';

import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { LabelWithTooltip } from '@/components/ui/label-with-tooltip';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormError } from '@/components/ui/form-error';
import { GenerateExampleButton } from '@/components/ui/generate-example-button';
import { SurveyFormData } from '@/types/survey';
import { Cloud } from 'lucide-react';
import { cn } from '@/lib/utils';
import { exampleInfrastructure } from '@/lib/exampleData';

interface SectionProps {
  formData: SurveyFormData;
  updateFormData: (field: keyof SurveyFormData, value: unknown) => void;
  updateNestedData: (parent: keyof SurveyFormData, field: string, value: unknown) => void;
  getFieldError?: (fieldName: string) => string | undefined;
}

const cloudProviders = ['AWS', 'Microsoft Azure', 'Google Cloud', 'Oracle Cloud', 'IBM Cloud', 'Other'];

export function Infrastructure({ formData, updateFormData, updateNestedData, getFieldError }: SectionProps) {
  const t = useTranslations();

  const handleProviderChange = (provider: string, checked: boolean) => {
    const currentProviders = formData.cloudAdoption.providers || [];
    if (checked) {
      updateNestedData('cloudAdoption', 'providers', [...currentProviders, provider]);
    } else {
      updateNestedData('cloudAdoption', 'providers', currentProviders.filter(p => p !== provider));
    }
  };

  const handleGenerateExample = () => {
    Object.entries(exampleInfrastructure).forEach(([key, value]) => {
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
    Object.entries(exampleInfrastructure).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        Object.keys(value).forEach((nestedKey) => {
          updateNestedData(key as keyof SurveyFormData, nestedKey, Array.isArray((value as Record<string, unknown>)[nestedKey]) ? [] : '');
        });
      } else if (Array.isArray(value)) {
        updateFormData(key as keyof SurveyFormData, []);
      } else {
        updateFormData(key as keyof SurveyFormData, '');
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-primary pb-3 mb-6">
        <div className="flex items-center gap-3">
          <Cloud className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold text-primary">
            {t('infrastructure.title')}
          </h2>
        </div>
        <GenerateExampleButton onClick={handleGenerateExample} onClear={handleClearExample} />
      </div>

      {/* Data Center Strategy */}
      <div className="space-y-2">
        <LabelWithTooltip tooltip={t('infrastructure.tooltips.datacenterStrategy')} required>
          {t('survey.fields.datacenterStrategy')}
        </LabelWithTooltip>
        <Select
          value={formData.datacenterStrategy}
          onValueChange={(value) => updateFormData('datacenterStrategy', value)}
        >
          <SelectTrigger className={cn('max-w-md', getFieldError?.('datacenterStrategy') && 'border-red-500')}>
            <SelectValue placeholder={t('common.select')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="on_premise">{t('survey.options.datacenterStrategy.on_premise')}</SelectItem>
            <SelectItem value="colocation">{t('survey.options.datacenterStrategy.colocation')}</SelectItem>
            <SelectItem value="cloud_first">{t('survey.options.datacenterStrategy.cloud_first')}</SelectItem>
            <SelectItem value="hybrid">{t('survey.options.datacenterStrategy.hybrid')}</SelectItem>
            <SelectItem value="cloud_only">{t('survey.options.datacenterStrategy.cloud_only')}</SelectItem>
          </SelectContent>
        </Select>
        <FormError message={getFieldError?.('datacenterStrategy')} />
      </div>

      {/* Cloud Adoption */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <h3 className="font-semibold text-gray-800 mb-4">
          {t('infrastructure.cloudAdoption.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <LabelWithTooltip tooltip={t('infrastructure.tooltips.cloudProviders')}>
              {t('infrastructure.cloudAdoption.providers')}
            </LabelWithTooltip>
            <div className="space-y-2">
              {cloudProviders.map((provider) => (
                <div key={provider} className="flex items-center space-x-2">
                  <Checkbox
                    id={`cloud-${provider}`}
                    checked={(formData.cloudAdoption.providers || []).includes(provider)}
                    onCheckedChange={(checked) => handleProviderChange(provider, checked as boolean)}
                  />
                  <label
                    htmlFor={`cloud-${provider}`}
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    {provider}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <LabelWithTooltip tooltip={t('infrastructure.tooltips.cloudSpend')}>
                {t('infrastructure.cloudAdoption.spend')}
              </LabelWithTooltip>
              <Input
                value={formData.cloudAdoption.spend || ''}
                onChange={(e) => updateNestedData('cloudAdoption', 'spend', e.target.value)}
                placeholder="e.g., $2,000,000"
              />
            </div>

            <div className="space-y-2">
              <LabelWithTooltip tooltip={t('infrastructure.tooltips.workloadPercent')}>
                {t('infrastructure.cloudAdoption.workloadPercent')}
              </LabelWithTooltip>
              <Input
                type="number"
                value={formData.cloudAdoption.workloadPercent || ''}
                onChange={(e) => updateNestedData('cloudAdoption', 'workloadPercent', e.target.value)}
                placeholder="40"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Network Infrastructure */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <h3 className="font-semibold text-gray-800 mb-4">
          {t('infrastructure.network.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <LabelWithTooltip tooltip={t('infrastructure.tooltips.networkVendor')}>
              {t('infrastructure.network.vendor')}
            </LabelWithTooltip>
            <Input
              value={formData.networkInfra.vendor || ''}
              onChange={(e) => updateNestedData('networkInfra', 'vendor', e.target.value)}
              placeholder="e.g., Cisco, Juniper, Arista"
            />
          </div>

          <div className="space-y-2">
            <LabelWithTooltip tooltip={t('infrastructure.tooltips.bandwidth')}>
              {t('infrastructure.network.bandwidth')}
            </LabelWithTooltip>
            <Input
              type="number"
              value={formData.networkInfra.bandwidth || ''}
              onChange={(e) => updateNestedData('networkInfra', 'bandwidth', e.target.value)}
              placeholder="10"
            />
          </div>

          <div className="space-y-2">
            <LabelWithTooltip tooltip={t('infrastructure.tooltips.wifi')}>
              {t('infrastructure.network.wifi')}
            </LabelWithTooltip>
            <Select
              value={formData.networkInfra.wifi || ''}
              onValueChange={(value) => updateNestedData('networkInfra', 'wifi', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder={t('common.select')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wifi6e">Wi-Fi 6E</SelectItem>
                <SelectItem value="wifi6">Wi-Fi 6</SelectItem>
                <SelectItem value="wifi5">Wi-Fi 5</SelectItem>
                <SelectItem value="mixed">Mixed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <LabelWithTooltip tooltip={t('infrastructure.tooltips.sdwan')}>
              {t('infrastructure.network.sdwan')}
            </LabelWithTooltip>
            <Select
              value={formData.networkInfra.sdwan || ''}
              onValueChange={(value) => updateNestedData('networkInfra', 'sdwan', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder={t('common.select')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="deployed">Fully Deployed</SelectItem>
                <SelectItem value="partial">Partially Deployed</SelectItem>
                <SelectItem value="planned">Planned</SelectItem>
                <SelectItem value="none">Not Implemented</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Virtualization */}
      <div className="space-y-2">
        <LabelWithTooltip tooltip={t('infrastructure.tooltips.virtualization')}>
          {t('infrastructure.virtualization')}
        </LabelWithTooltip>
        <Input
          value={formData.virtualizationPlatform}
          onChange={(e) => updateFormData('virtualizationPlatform', e.target.value)}
          placeholder="e.g., VMware, Hyper-V, KVM"
          className="max-w-md"
        />
      </div>

      {/* Backup & DR */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <LabelWithTooltip tooltip={t('infrastructure.tooltips.backup')}>
            Backup Solution
          </LabelWithTooltip>
          <Input
            value={formData.backupSolution}
            onChange={(e) => updateFormData('backupSolution', e.target.value)}
            placeholder="e.g., Veeam, Commvault, Rubrik"
          />
        </div>

        <div className="space-y-2">
          <LabelWithTooltip tooltip={t('infrastructure.tooltips.drSite')}>
            DR Site
          </LabelWithTooltip>
          <Input
            value={formData.drSite}
            onChange={(e) => updateFormData('drSite', e.target.value)}
            placeholder="e.g., Secondary DC, Cloud DR"
          />
        </div>
      </div>
    </div>
  );
}
