'use client';

import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SurveyFormData } from '@/types/survey';
import { Workflow } from 'lucide-react';

interface SectionProps {
  formData: SurveyFormData;
  updateFormData: (field: keyof SurveyFormData, value: unknown) => void;
  updateNestedData: (parent: keyof SurveyFormData, field: string, value: unknown) => void;
}

const businessProcesses = [
  'recruitment',
  'admissions',
  'registration',
  'courseDelivery',
  'gradeManagement',
  'financialAid',
  'billing',
  'degreeAudit',
  'advising',
  'retention',
  'graduation',
  'alumni'
];

const systemOptions = ['CRM', 'SIS', 'LMS', 'ERP', 'BI', 'Other'];

const integrationGapKeys = [
  'sisLms',
  'lmsSis',
  'sisErp',
  'crmSis',
  'biAll',
  'noSso',
  'manualReconciliation'
];

export function ProcessMapping({ formData, updateFormData }: SectionProps) {
  const t = useTranslations();

  const handleGapChange = (gapKey: string, checked: boolean) => {
    const currentGaps = formData.integrationGaps || [];
    if (checked) {
      updateFormData('integrationGaps', [...currentGaps, gapKey]);
    } else {
      updateFormData('integrationGaps', currentGaps.filter(g => g !== gapKey));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-primary pb-3 mb-6">
        <Workflow className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-semibold text-primary">
          {t('processMapping.title')}
        </h2>
      </div>

      <div className="info-box mb-6">
        <p className="text-sm text-gray-700">
          {t('processMapping.description')}
        </p>
      </div>

      {/* Process-System Mapping Table */}
      <div className="overflow-x-auto">
        <table className="matrix-table">
          <thead>
            <tr>
              <th>{t('processMapping.businessProcess')}</th>
              <th>{t('processMapping.primarySystem')}</th>
              <th>{t('processMapping.supportingSystems')}</th>
              <th>{t('processMapping.dataFlow')}</th>
            </tr>
          </thead>
          <tbody>
            {businessProcesses.map((process) => (
              <tr key={process}>
                <td className="font-medium">
                  {t(`processMapping.processes.${process}`)}
                </td>
                <td>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={t('common.select')} />
                    </SelectTrigger>
                    <SelectContent>
                      {systemOptions.map((system) => (
                        <SelectItem key={system} value={system}>{system}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </td>
                <td>
                  <Input placeholder="e.g., API, BI, Portal" className="text-sm" />
                </td>
                <td>
                  <Input placeholder="e.g., Web → CRM → BI" className="text-sm" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Integration Pain Points */}
      <div className="border-t pt-6">
        <h3 className="font-semibold text-gray-800 mb-4">
          Integration Pain Points & Challenges
        </h3>
        <Textarea
          value={formData.integrationChallenges}
          onChange={(e) => updateFormData('integrationChallenges', e.target.value)}
          placeholder="Describe specific integration challenges: manual data entry, delayed syncs, data quality issues..."
          rows={4}
        />
      </div>

      {/* Integration Gaps */}
      <div className="border-t pt-6">
        <h3 className="font-semibold text-gray-800 mb-4">
          {t('processMapping.integrationGaps.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {integrationGapKeys.map((gapKey) => (
            <div key={gapKey} className="flex items-center space-x-2">
              <Checkbox
                id={`gap-${gapKey}`}
                checked={(formData.integrationGaps || []).includes(gapKey)}
                onCheckedChange={(checked) => handleGapChange(gapKey, checked as boolean)}
              />
              <label
                htmlFor={`gap-${gapKey}`}
                className="text-sm text-gray-700 cursor-pointer"
              >
                {t(`processMapping.integrationGaps.${gapKey}`)}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Maturity */}
      <div className="border-t pt-6">
        <h3 className="font-semibold text-gray-800 mb-4">
          {t('processMapping.maturityLevel.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>{t('processMapping.maturityLevel.level')}</Label>
            <Select
              value={formData.integrationMaturityLevel}
              onValueChange={(value) => updateFormData('integrationMaturityLevel', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder={t('common.select')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">{t('processMapping.maturityLevel.levels.1')}</SelectItem>
                <SelectItem value="2">{t('processMapping.maturityLevel.levels.2')}</SelectItem>
                <SelectItem value="3">{t('processMapping.maturityLevel.levels.3')}</SelectItem>
                <SelectItem value="4">{t('processMapping.maturityLevel.levels.4')}</SelectItem>
                <SelectItem value="5">{t('processMapping.maturityLevel.levels.5')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>{t('processMapping.maturityLevel.activeIntegrations')}</Label>
            <Input
              type="number"
              value={formData.activeIntegrations}
              onChange={(e) => updateFormData('activeIntegrations', e.target.value)}
              placeholder="25"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

