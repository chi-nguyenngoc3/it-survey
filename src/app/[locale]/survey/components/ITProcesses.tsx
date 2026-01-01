'use client';

import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LabelWithTooltip } from '@/components/ui/label-with-tooltip';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormError } from '@/components/ui/form-error';
import { GenerateExampleButton } from '@/components/ui/generate-example-button';
import { SurveyFormData } from '@/types/survey';
import { Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { exampleITProcesses } from '@/lib/exampleData';

interface SectionProps {
  formData: SurveyFormData;
  updateFormData: (field: keyof SurveyFormData, value: unknown) => void;
  updateNestedData: (parent: keyof SurveyFormData, field: string, value: unknown) => void;
  getFieldError?: (fieldName: string) => string | undefined;
}

export function ITProcesses({ formData, updateFormData, updateNestedData, getFieldError }: SectionProps) {
  const t = useTranslations();

  const handleGenerateExample = () => {
    Object.entries(exampleITProcesses).forEach(([key, value]) => {
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
    Object.entries(exampleITProcesses).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        Object.keys(value).forEach((nestedKey) => {
          updateNestedData(key as keyof SurveyFormData, nestedKey, '');
        });
      } else {
        updateFormData(key as keyof SurveyFormData, '');
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-primary pb-3 mb-6">
        <div className="flex items-center gap-3">
          <Settings className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold text-primary">
            {t('itProcesses.title')}
          </h2>
        </div>
        <GenerateExampleButton onClick={handleGenerateExample} onClear={handleClearExample} />
      </div>

      {/* ITIL Maturity */}
      <div className="space-y-2">
        <LabelWithTooltip
          htmlFor="itilMaturity"
          tooltip={t('itProcesses.tooltips.itilMaturity')}
          required
        >
          {t('survey.fields.itilMaturity')}
        </LabelWithTooltip>
        <Select
          value={formData.itilMaturity}
          onValueChange={(value) => updateFormData('itilMaturity', value)}
        >
          <SelectTrigger className={cn('max-w-md', getFieldError?.('itilMaturity') && 'border-red-500')}>
            <SelectValue placeholder={t('common.select')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">{t('survey.options.itilMaturity.1')}</SelectItem>
            <SelectItem value="2">{t('survey.options.itilMaturity.2')}</SelectItem>
            <SelectItem value="3">{t('survey.options.itilMaturity.3')}</SelectItem>
            <SelectItem value="4">{t('survey.options.itilMaturity.4')}</SelectItem>
            <SelectItem value="5">{t('survey.options.itilMaturity.5')}</SelectItem>
          </SelectContent>
        </Select>
        <FormError message={getFieldError?.('itilMaturity')} />
      </div>

      {/* Service Desk */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <h3 className="font-semibold text-gray-800 mb-4">
          {t('itProcesses.serviceDesk.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <LabelWithTooltip
              htmlFor="serviceDeskTool"
              tooltip={t('itProcesses.tooltips.serviceDeskTool')}
              required
            >
              {t('itProcesses.serviceDesk.tool')}
            </LabelWithTooltip>
            <Input
              id="serviceDeskTool"
              value={formData.serviceDesk.tool || ''}
              onChange={(e) => updateNestedData('serviceDesk', 'tool', e.target.value)}
              placeholder="e.g., ServiceNow, Jira, BMC"
              className={cn(getFieldError?.('serviceDesk.tool') && 'border-red-500 focus-visible:border-red-500')}
            />
            <FormError message={getFieldError?.('serviceDesk.tool')} />
          </div>

          <div className="space-y-2">
            <LabelWithTooltip
              htmlFor="monthlyTickets"
              tooltip={t('itProcesses.tooltips.monthlyTickets')}
            >
              {t('itProcesses.serviceDesk.monthlyTickets')}
            </LabelWithTooltip>
            <Input
              id="monthlyTickets"
              type="number"
              value={formData.serviceDesk.monthlyTickets || ''}
              onChange={(e) => updateNestedData('serviceDesk', 'monthlyTickets', e.target.value)}
              placeholder="500"
            />
          </div>

          <div className="space-y-2">
            <LabelWithTooltip
              htmlFor="fcr"
              tooltip={t('itProcesses.tooltips.fcr')}
            >
              {t('itProcesses.serviceDesk.fcr')}
            </LabelWithTooltip>
            <Input
              id="fcr"
              type="number"
              value={formData.serviceDesk.fcr || ''}
              onChange={(e) => updateNestedData('serviceDesk', 'fcr', e.target.value)}
              placeholder="65"
            />
          </div>

          <div className="space-y-2">
            <LabelWithTooltip
              htmlFor="resolutionTime"
              tooltip={t('itProcesses.tooltips.resolutionTime')}
            >
              {t('itProcesses.serviceDesk.resolutionTime')}
            </LabelWithTooltip>
            <Input
              id="resolutionTime"
              type="number"
              value={formData.serviceDesk.resolutionTime || ''}
              onChange={(e) => updateNestedData('serviceDesk', 'resolutionTime', e.target.value)}
              placeholder="24"
            />
          </div>
        </div>
      </div>

      {/* Change Management */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <h3 className="font-semibold text-gray-800 mb-4">
          {t('itProcesses.changeManagement.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <LabelWithTooltip
              htmlFor="cabFrequency"
              tooltip={t('itProcesses.tooltips.cabFrequency')}
              required
            >
              {t('itProcesses.changeManagement.cabFrequency')}
            </LabelWithTooltip>
            <Select
              value={formData.changeManagement.cabFrequency || ''}
              onValueChange={(value) => updateNestedData('changeManagement', 'cabFrequency', value)}
            >
              <SelectTrigger className={cn(getFieldError?.('changeManagement.cabFrequency') && 'border-red-500')}>
                <SelectValue placeholder={t('common.select')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="biweekly">Bi-weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="adhoc">Ad-hoc</SelectItem>
                <SelectItem value="none">No formal CAB</SelectItem>
              </SelectContent>
            </Select>
            <FormError message={getFieldError?.('changeManagement.cabFrequency')} />
          </div>

          <div className="space-y-2">
            <LabelWithTooltip
              htmlFor="changeSuccessRate"
              tooltip={t('itProcesses.tooltips.changeSuccessRate')}
            >
              {t('itProcesses.changeManagement.successRate')}
            </LabelWithTooltip>
            <Input
              id="changeSuccessRate"
              type="number"
              value={formData.changeManagement.successRate || ''}
              onChange={(e) => updateNestedData('changeManagement', 'successRate', e.target.value)}
              placeholder="95"
            />
          </div>
        </div>
      </div>

      {/* Asset Management */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <h3 className="font-semibold text-gray-800 mb-4">
          {t('itProcesses.assetManagement.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <LabelWithTooltip
              htmlFor="assetTool"
              tooltip={t('itProcesses.tooltips.assetTool')}
            >
              {t('itProcesses.assetManagement.tool')}
            </LabelWithTooltip>
            <Input
              id="assetTool"
              value={formData.assetManagement.tool || ''}
              onChange={(e) => updateNestedData('assetManagement', 'tool', e.target.value)}
              placeholder="e.g., ServiceNow CMDB, Lansweeper"
            />
          </div>

          <div className="space-y-2">
            <LabelWithTooltip
              htmlFor="cmdbAccuracy"
              tooltip={t('itProcesses.tooltips.cmdbAccuracy')}
            >
              {t('itProcesses.assetManagement.cmdbAccuracy')}
            </LabelWithTooltip>
            <Input
              id="cmdbAccuracy"
              type="number"
              value={formData.assetManagement.cmdbAccuracy || ''}
              onChange={(e) => updateNestedData('assetManagement', 'cmdbAccuracy', e.target.value)}
              placeholder="85"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
