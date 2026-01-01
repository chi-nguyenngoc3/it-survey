'use client';

import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LabelWithTooltip } from '@/components/ui/label-with-tooltip';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormError } from '@/components/ui/form-error';
import { GenerateExampleButton } from '@/components/ui/generate-example-button';
import { SurveyFormData } from '@/types/survey';
import { Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { exampleSecurity } from '@/lib/exampleData';

interface SectionProps {
  formData: SurveyFormData;
  updateFormData: (field: keyof SurveyFormData, value: unknown) => void;
  updateNestedData: (parent: keyof SurveyFormData, field: string, value: unknown) => void;
  getFieldError?: (fieldName: string) => string | undefined;
}

const complianceOptions = ['FERPA', 'HIPAA', 'PCI DSS', 'GDPR', 'CCPA', 'SOC 2', 'FISMA', 'ITAR'];

export function Security({ formData, updateFormData, updateNestedData, getFieldError }: SectionProps) {
  const t = useTranslations();

  const handleComplianceChange = (standard: string, checked: boolean) => {
    const currentStandards = formData.complianceStandards || [];
    if (checked) {
      updateFormData('complianceStandards', [...currentStandards, standard]);
    } else {
      updateFormData('complianceStandards', currentStandards.filter(s => s !== standard));
    }
  };

  const handleGenerateExample = () => {
    Object.entries(exampleSecurity).forEach(([key, value]) => {
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
    Object.entries(exampleSecurity).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        Object.keys(value).forEach((nestedKey) => {
          updateNestedData(key as keyof SurveyFormData, nestedKey, '');
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
          <Shield className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold text-primary">
            {t('security.title')}
          </h2>
        </div>
        <GenerateExampleButton onClick={handleGenerateExample} onClear={handleClearExample} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Security Framework */}
        <div className="space-y-2">
          <LabelWithTooltip 
            className="required"
            tooltip={t('security.tooltips.framework')}
          >
            {t('security.framework')}
          </LabelWithTooltip>
          <Select
            value={formData.securityFramework}
            onValueChange={(value) => updateFormData('securityFramework', value)}
          >
            <SelectTrigger className={cn(getFieldError?.('securityFramework') && 'border-red-500')}>
              <SelectValue placeholder={t('common.select')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nist">NIST Cybersecurity Framework</SelectItem>
              <SelectItem value="iso27001">ISO 27001</SelectItem>
              <SelectItem value="cis">CIS Controls</SelectItem>
              <SelectItem value="custom">Custom Framework</SelectItem>
              <SelectItem value="none">No Formal Framework</SelectItem>
            </SelectContent>
          </Select>
          <FormError message={getFieldError?.('securityFramework')} />
        </div>

        {/* Security Reporting */}
        <div className="space-y-2">
          <LabelWithTooltip tooltip={t('security.tooltips.reporting')}>
            {t('security.reporting')}
          </LabelWithTooltip>
          <Select
            value={formData.securityReporting}
            onValueChange={(value) => updateFormData('securityReporting', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={t('common.select')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cio">CIO/IT Leadership</SelectItem>
              <SelectItem value="president">President/Chancellor</SelectItem>
              <SelectItem value="cfo">CFO</SelectItem>
              <SelectItem value="legal">General Counsel</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Compliance Standards */}
      <div className="space-y-3">
        <LabelWithTooltip tooltip={t('security.tooltips.compliance')}>
          {t('security.compliance')}
        </LabelWithTooltip>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {complianceOptions.map((standard) => (
            <div key={standard} className="flex items-center space-x-2">
              <Checkbox
                id={`compliance-${standard}`}
                checked={(formData.complianceStandards || []).includes(standard)}
                onCheckedChange={(checked) => handleComplianceChange(standard, checked as boolean)}
              />
              <label
                htmlFor={`compliance-${standard}`}
                className="text-sm text-gray-700 cursor-pointer"
              >
                {standard}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Security Tools */}
      <div className="space-y-4">
        <Label>{t('security.tools.title')}</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <LabelWithTooltip tooltip={t('security.tooltips.endpoint')}>
              {t('security.tools.endpoint')}
            </LabelWithTooltip>
            <Input
              value={formData.securityTools.endpoint || ''}
              onChange={(e) => updateNestedData('securityTools', 'endpoint', e.target.value)}
              placeholder="e.g., CrowdStrike, Microsoft Defender"
            />
          </div>
          <div className="space-y-2">
            <LabelWithTooltip tooltip={t('security.tooltips.siem')}>
              {t('security.tools.siem')}
            </LabelWithTooltip>
            <Input
              value={formData.securityTools.siem || ''}
              onChange={(e) => updateNestedData('securityTools', 'siem', e.target.value)}
              placeholder="e.g., Splunk, QRadar"
            />
          </div>
          <div className="space-y-2">
            <LabelWithTooltip tooltip={t('security.tooltips.iam')}>
              {t('security.tools.iam')}
            </LabelWithTooltip>
            <Input
              value={formData.securityTools.iam || ''}
              onChange={(e) => updateNestedData('securityTools', 'iam', e.target.value)}
              placeholder="e.g., Okta, Duo"
            />
          </div>
          <div className="space-y-2">
            <LabelWithTooltip tooltip={t('security.tooltips.firewall')}>
              {t('security.tools.firewall')}
            </LabelWithTooltip>
            <Input
              value={formData.securityTools.firewall || ''}
              onChange={(e) => updateNestedData('securityTools', 'firewall', e.target.value)}
              placeholder="e.g., Palo Alto, Fortinet"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* MFA Implementation */}
        <div className="space-y-2">
          <LabelWithTooltip tooltip={t('security.tooltips.mfa')}>
            {t('security.mfa')}
          </LabelWithTooltip>
          <Select
            value={formData.mfaImplementation}
            onValueChange={(value) => updateFormData('mfaImplementation', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={t('common.select')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="universal">{t('security.options.mfa.universal')}</SelectItem>
              <SelectItem value="staff">{t('security.options.mfa.staff')}</SelectItem>
              <SelectItem value="selective">{t('security.options.mfa.selective')}</SelectItem>
              <SelectItem value="pilot">{t('security.options.mfa.pilot')}</SelectItem>
              <SelectItem value="none">{t('security.options.mfa.none')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Security Training */}
        <div className="space-y-2">
          <LabelWithTooltip tooltip={t('security.tooltips.training')}>
            {t('security.training')}
          </LabelWithTooltip>
          <Select
            value={formData.securityTraining}
            onValueChange={(value) => updateFormData('securityTraining', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={t('common.select')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="annual_mandatory">{t('security.options.training.annual_mandatory')}</SelectItem>
              <SelectItem value="quarterly">{t('security.options.training.quarterly')}</SelectItem>
              <SelectItem value="ad_hoc">{t('security.options.training.ad_hoc')}</SelectItem>
              <SelectItem value="none">{t('security.options.training.none')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Last Security Audit */}
        <div className="space-y-2">
          <LabelWithTooltip tooltip={t('security.tooltips.lastAudit')}>
            Last Security Audit Date
          </LabelWithTooltip>
          <Input
            value={formData.lastSecurityAudit}
            onChange={(e) => updateFormData('lastSecurityAudit', e.target.value)}
            placeholder="e.g., March 2024"
          />
        </div>

        {/* Security Incidents */}
        <div className="space-y-2">
          <LabelWithTooltip tooltip={t('security.tooltips.incidents')}>
            Major Security Incidents (Last 12 months)
          </LabelWithTooltip>
          <Input
            type="number"
            value={formData.securityIncidents}
            onChange={(e) => updateFormData('securityIncidents', e.target.value)}
            placeholder="0"
          />
        </div>
      </div>
    </div>
  );
}

