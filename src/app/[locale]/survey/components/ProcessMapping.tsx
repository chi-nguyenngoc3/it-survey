'use client';

import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LabelWithTooltip } from '@/components/ui/label-with-tooltip';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GenerateExampleButton } from '@/components/ui/generate-example-button';
import { SurveyFormData } from '@/types/survey';
import { Workflow } from 'lucide-react';
import { exampleProcessMapping } from '@/lib/exampleData';

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

  // Get mapping for a specific process
  const getProcessMapping = (processKey: string) => {
    const mappings = formData.processSystemMappings || [];
    return mappings.find(m => m.process === processKey) || {
      process: processKey,
      primarySystem: '',
      supportingSystems: '',
      dataFlow: ''
    };
  };

  // Update a specific process mapping field
  const updateProcessMapping = (processKey: string, field: string, value: string) => {
    const mappings = [...(formData.processSystemMappings || [])];
    const existingIndex = mappings.findIndex(m => m.process === processKey);
    
    if (existingIndex >= 0) {
      mappings[existingIndex] = { ...mappings[existingIndex], [field]: value };
    } else {
      mappings.push({
        process: processKey,
        primarySystem: field === 'primarySystem' ? value : '',
        supportingSystems: field === 'supportingSystems' ? value : '',
        dataFlow: field === 'dataFlow' ? value : ''
      });
    }
    
    updateFormData('processSystemMappings', mappings);
  };

  const handleGenerateExample = () => {
    Object.entries(exampleProcessMapping).forEach(([key, value]) => {
      updateFormData(key as keyof SurveyFormData, value);
    });
  };

  const handleClearExample = () => {
    Object.entries(exampleProcessMapping).forEach(([key, value]) => {
      if (Array.isArray(value)) {
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
          <Workflow className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold text-primary">
            {t('processMapping.title')}
          </h2>
        </div>
        <GenerateExampleButton onClick={handleGenerateExample} onClear={handleClearExample} />
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
              <th>
                <div className="flex items-center gap-1">
                  {t('processMapping.primarySystem')}
                  <span className="text-gray-400 text-xs" title={t('processMapping.tooltips.primarySystem')}>ⓘ</span>
                </div>
              </th>
              <th>
                <div className="flex items-center gap-1">
                  {t('processMapping.supportingSystems')}
                  <span className="text-gray-400 text-xs" title={t('processMapping.tooltips.supportingSystems')}>ⓘ</span>
                </div>
              </th>
              <th>
                <div className="flex items-center gap-1">
                  {t('processMapping.dataFlow')}
                  <span className="text-gray-400 text-xs" title={t('processMapping.tooltips.dataFlow')}>ⓘ</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {businessProcesses.map((process) => {
              const mapping = getProcessMapping(process);
              const primarySystemValue = mapping.primarySystem || undefined;
              return (
                <tr key={`${process}-${primarySystemValue || 'empty'}`}>
                  <td className="font-medium">
                    {t(`processMapping.processes.${process}`)}
                  </td>
                  <td>
                    <Select
                      value={primarySystemValue}
                      onValueChange={(value) => updateProcessMapping(process, 'primarySystem', value)}
                    >
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
                    <Input 
                      value={mapping.supportingSystems || ''}
                      onChange={(e) => updateProcessMapping(process, 'supportingSystems', e.target.value)}
                      placeholder="e.g., API, BI, Portal" 
                      className="text-sm" 
                    />
                  </td>
                  <td>
                    <Input 
                      value={mapping.dataFlow || ''}
                      onChange={(e) => updateProcessMapping(process, 'dataFlow', e.target.value)}
                      placeholder="e.g., Web → CRM → BI" 
                      className="text-sm" 
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Integration Pain Points */}
      <div className="border-t pt-6">
        <LabelWithTooltip
          tooltip={t('processMapping.tooltips.integrationChallenges')}
          className="mb-3"
        >
          <span className="font-semibold text-gray-800">Integration Pain Points & Challenges</span>
        </LabelWithTooltip>
        <Textarea
          value={formData.integrationChallenges}
          onChange={(e) => updateFormData('integrationChallenges', e.target.value)}
          placeholder="Describe specific integration challenges: manual data entry, delayed syncs, data quality issues..."
          rows={4}
        />
      </div>

      {/* Integration Gaps */}
      <div className="border-t pt-6">
        <LabelWithTooltip
          tooltip={t('processMapping.tooltips.integrationGaps')}
          className="mb-4"
        >
          <span className="font-semibold text-gray-800">{t('processMapping.integrationGaps.title')}</span>
        </LabelWithTooltip>
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
            <LabelWithTooltip
              tooltip={t('processMapping.tooltips.maturityLevel')}
            >
              {t('processMapping.maturityLevel.level')}
            </LabelWithTooltip>
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
            <LabelWithTooltip
              tooltip={t('processMapping.tooltips.activeIntegrations')}
            >
              {t('processMapping.maturityLevel.activeIntegrations')}
            </LabelWithTooltip>
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
