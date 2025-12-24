'use client';

import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SurveyFormData } from '@/types/survey';
import { BarChart3 } from 'lucide-react';

interface SectionProps {
  formData: SurveyFormData;
  updateFormData: (field: keyof SurveyFormData, value: unknown) => void;
  updateNestedData: (parent: keyof SurveyFormData, field: string, value: unknown) => void;
}

export function DataAnalytics({ formData, updateFormData, updateNestedData }: SectionProps) {
  const t = useTranslations();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-primary pb-3 mb-6">
        <BarChart3 className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-semibold text-primary">
          {t('dataAnalytics.title')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Data Warehouse */}
        <div className="space-y-2">
          <Label>{t('dataAnalytics.dataWarehouse')}</Label>
          <Input
            value={formData.dataWarehouse.platform || ''}
            onChange={(e) => updateNestedData('dataWarehouse', 'platform', e.target.value)}
            placeholder="e.g., Snowflake, Teradata, Oracle"
          />
        </div>

        {/* BI Tool */}
        <div className="space-y-2">
          <Label>{t('dataAnalytics.biTool')}</Label>
          <Input
            value={formData.biTool}
            onChange={(e) => updateFormData('biTool', e.target.value)}
            placeholder="e.g., Tableau, Power BI, QlikView"
          />
        </div>

        {/* Data Governance */}
        <div className="space-y-2">
          <Label>{t('dataAnalytics.dataGovernance')}</Label>
          <Select
            value={formData.dataGovernance}
            onValueChange={(value) => updateFormData('dataGovernance', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={t('common.select')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="formal">{t('dataAnalytics.options.governance.formal')}</SelectItem>
              <SelectItem value="informal">{t('dataAnalytics.options.governance.informal')}</SelectItem>
              <SelectItem value="developing">{t('dataAnalytics.options.governance.developing')}</SelectItem>
              <SelectItem value="none">{t('dataAnalytics.options.governance.none')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Data Lake */}
        <div className="space-y-2">
          <Label>{t('dataAnalytics.dataLake')}</Label>
          <Select
            value={formData.dataLake}
            onValueChange={(value) => updateFormData('dataLake', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={t('common.select')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="production">{t('dataAnalytics.options.dataLake.production')}</SelectItem>
              <SelectItem value="pilot">{t('dataAnalytics.options.dataLake.pilot')}</SelectItem>
              <SelectItem value="planned">{t('dataAnalytics.options.dataLake.planned')}</SelectItem>
              <SelectItem value="none">{t('dataAnalytics.options.dataLake.none')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Master Data Management */}
      <div className="space-y-2">
        <Label>{t('dataAnalytics.masterData')}</Label>
        <Textarea
          value={typeof formData.masterData === 'string' ? formData.masterData : ''}
          onChange={(e) => updateFormData('masterData', e.target.value)}
          placeholder="Describe your MDM approach, tools, and domains (Student, HR, Finance, etc.)"
          rows={3}
        />
      </div>

      {/* Data Quality Score */}
      <div className="space-y-2 max-w-xs">
        <Label>Data Quality Score (1-5)</Label>
        <Input
          type="number"
          min="1"
          max="5"
          step="0.1"
          value={formData.dataQualityScore}
          onChange={(e) => updateFormData('dataQualityScore', e.target.value)}
          placeholder="3.5"
        />
      </div>
    </div>
  );
}

