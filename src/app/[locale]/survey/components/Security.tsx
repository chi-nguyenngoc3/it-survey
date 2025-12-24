'use client';

import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SurveyFormData } from '@/types/survey';
import { Shield } from 'lucide-react';

interface SectionProps {
  formData: SurveyFormData;
  updateFormData: (field: keyof SurveyFormData, value: unknown) => void;
  updateNestedData: (parent: keyof SurveyFormData, field: string, value: unknown) => void;
}

const complianceOptions = ['FERPA', 'HIPAA', 'PCI DSS', 'GDPR', 'CCPA', 'SOC 2', 'FISMA', 'ITAR'];

export function Security({ formData, updateFormData, updateNestedData }: SectionProps) {
  const t = useTranslations();

  const handleComplianceChange = (standard: string, checked: boolean) => {
    const currentStandards = formData.complianceStandards || [];
    if (checked) {
      updateFormData('complianceStandards', [...currentStandards, standard]);
    } else {
      updateFormData('complianceStandards', currentStandards.filter(s => s !== standard));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-primary pb-3 mb-6">
        <Shield className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-semibold text-primary">
          {t('security.title')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Security Framework */}
        <div className="space-y-2">
          <Label className="required">{t('security.framework')}</Label>
          <Select
            value={formData.securityFramework}
            onValueChange={(value) => updateFormData('securityFramework', value)}
          >
            <SelectTrigger>
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
        </div>

        {/* Security Reporting */}
        <div className="space-y-2">
          <Label>{t('security.reporting')}</Label>
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
        <Label>{t('security.compliance')}</Label>
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
          <Input
            value={formData.securityTools.endpoint || ''}
            onChange={(e) => updateNestedData('securityTools', 'endpoint', e.target.value)}
            placeholder={`${t('security.tools.endpoint')} (e.g., CrowdStrike, Microsoft Defender)`}
          />
          <Input
            value={formData.securityTools.siem || ''}
            onChange={(e) => updateNestedData('securityTools', 'siem', e.target.value)}
            placeholder={`${t('security.tools.siem')} (e.g., Splunk, QRadar)`}
          />
          <Input
            value={formData.securityTools.iam || ''}
            onChange={(e) => updateNestedData('securityTools', 'iam', e.target.value)}
            placeholder={`${t('security.tools.iam')} (e.g., Okta, Duo)`}
          />
          <Input
            value={formData.securityTools.firewall || ''}
            onChange={(e) => updateNestedData('securityTools', 'firewall', e.target.value)}
            placeholder={`${t('security.tools.firewall')} (e.g., Palo Alto, Fortinet)`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* MFA Implementation */}
        <div className="space-y-2">
          <Label>{t('security.mfa')}</Label>
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
          <Label>{t('security.training')}</Label>
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
          <Label>Last Security Audit Date</Label>
          <Input
            value={formData.lastSecurityAudit}
            onChange={(e) => updateFormData('lastSecurityAudit', e.target.value)}
            placeholder="e.g., March 2024"
          />
        </div>

        {/* Security Incidents */}
        <div className="space-y-2">
          <Label>Major Security Incidents (Last 12 months)</Label>
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

