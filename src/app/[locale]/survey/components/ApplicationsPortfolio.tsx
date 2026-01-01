'use client';

import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormError } from '@/components/ui/form-error';
import { GenerateExampleButton } from '@/components/ui/generate-example-button';
import { SurveyFormData } from '@/types/survey';
import { Database } from 'lucide-react';
import { cn } from '@/lib/utils';
import { exampleApplications } from '@/lib/exampleData';

interface SectionProps {
  formData: SurveyFormData;
  updateFormData: (field: keyof SurveyFormData, value: unknown) => void;
  updateNestedData: (parent: keyof SurveyFormData, field: string, value: unknown) => void;
  getFieldError?: (fieldName: string) => string | undefined;
}

export function ApplicationsPortfolio({ formData, updateFormData, updateNestedData, getFieldError }: SectionProps) {
  const t = useTranslations();

  const handleGenerateExample = () => {
    Object.entries(exampleApplications).forEach(([key, value]) => {
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
    Object.entries(exampleApplications).forEach(([key, value]) => {
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
          <Database className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold text-primary">
            {t('applications.title')}
          </h2>
        </div>
        <GenerateExampleButton onClick={handleGenerateExample} onClear={handleClearExample} />
      </div>

      <div className="info-box mb-6">
        <p className="text-sm text-gray-700">
          {t('applications.description')}
        </p>
      </div>

      {/* SIS Section */}
      <div className="border rounded-lg p-4 bg-purple-50">
        <h3 className="font-semibold text-gray-800 mb-4">
          {t('applications.sis.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="required">{t('applications.sis.vendor')}</Label>
            <Input
              value={formData.sis.vendor || ''}
              onChange={(e) => updateNestedData('sis', 'vendor', e.target.value)}
              placeholder="e.g., Ellucian Banner, Workday Student"
              className={cn(getFieldError?.('sis.vendor') && 'border-red-500 focus-visible:border-red-500')}
            />
            <FormError message={getFieldError?.('sis.vendor')} />
          </div>
          <div className="space-y-2">
            <Label className="required">{t('applications.sis.hosting')}</Label>
            <Select
              value={formData.sis.hosting || ''}
              onValueChange={(value) => updateNestedData('sis', 'hosting', value)}
            >
              <SelectTrigger className={cn(getFieldError?.('sis.hosting') && 'border-red-500')}>
                <SelectValue placeholder={t('common.select')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="on_premise">{t('survey.options.hosting.on_premise')}</SelectItem>
                <SelectItem value="cloud_saas">{t('survey.options.hosting.cloud_saas')}</SelectItem>
                <SelectItem value="hosted">{t('survey.options.hosting.hosted')}</SelectItem>
                <SelectItem value="hybrid">{t('survey.options.hosting.hybrid')}</SelectItem>
              </SelectContent>
            </Select>
            <FormError message={getFieldError?.('sis.hosting')} />
          </div>
          <div className="space-y-2">
            <Label>{t('applications.sis.integration')}</Label>
            <Input
              value={formData.sis.integration || ''}
              onChange={(e) => updateNestedData('sis', 'integration', e.target.value)}
              placeholder="e.g., API, ETL, Middleware"
            />
          </div>
          <div className="space-y-2">
            <Label>{t('applications.sis.customization')}</Label>
            <Select
              value={formData.sis.customization || ''}
              onValueChange={(value) => updateNestedData('sis', 'customization', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder={t('common.select')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vanilla">Vanilla (No customization)</SelectItem>
                <SelectItem value="light">Light customization</SelectItem>
                <SelectItem value="moderate">Moderate customization</SelectItem>
                <SelectItem value="heavy">Heavy customization</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* LMS Section */}
      <div className="border rounded-lg p-4 bg-green-50">
        <h3 className="font-semibold text-gray-800 mb-4">
          {t('applications.lms.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="required">{t('applications.lms.vendor')}</Label>
            <Input
              value={formData.lms.vendor || ''}
              onChange={(e) => updateNestedData('lms', 'vendor', e.target.value)}
              placeholder="e.g., Canvas, Blackboard, Moodle"
              className={cn(getFieldError?.('lms.vendor') && 'border-red-500 focus-visible:border-red-500')}
            />
            <FormError message={getFieldError?.('lms.vendor')} />
          </div>
          <div className="space-y-2">
            <Label className="required">{t('applications.lms.hosting')}</Label>
            <Select
              value={formData.lms.hosting || ''}
              onValueChange={(value) => updateNestedData('lms', 'hosting', value)}
            >
              <SelectTrigger className={cn(getFieldError?.('lms.hosting') && 'border-red-500')}>
                <SelectValue placeholder={t('common.select')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="on_premise">{t('survey.options.hosting.on_premise')}</SelectItem>
                <SelectItem value="cloud_saas">{t('survey.options.hosting.cloud_saas')}</SelectItem>
                <SelectItem value="hosted">{t('survey.options.hosting.hosted')}</SelectItem>
              </SelectContent>
            </Select>
            <FormError message={getFieldError?.('lms.hosting')} />
          </div>
          <div className="space-y-2">
            <Label>{t('applications.lms.users')}</Label>
            <Input
              type="number"
              value={formData.lms.users || ''}
              onChange={(e) => updateNestedData('lms', 'users', e.target.value)}
              placeholder="10000"
            />
          </div>
          <div className="space-y-2">
            <Label>{t('applications.lms.satisfaction')}</Label>
            <Input
              type="number"
              min="1"
              max="5"
              step="0.1"
              value={formData.lms.satisfaction || ''}
              onChange={(e) => updateNestedData('lms', 'satisfaction', e.target.value)}
              placeholder="4.0"
            />
          </div>
        </div>
      </div>

      {/* CRM Section */}
      <div className="border rounded-lg p-4 bg-orange-50">
        <h3 className="font-semibold text-gray-800 mb-4">
          {t('applications.crm.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>{t('applications.crm.vendor')}</Label>
            <Input
              value={formData.crm.vendor || ''}
              onChange={(e) => updateNestedData('crm', 'vendor', e.target.value)}
              placeholder="e.g., Salesforce, Slate, Element451"
            />
          </div>
          <div className="space-y-2">
            <Label>{t('applications.crm.purpose')}</Label>
            <Select
              value={formData.crm.purpose || ''}
              onValueChange={(value) => updateNestedData('crm', 'purpose', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder={t('common.select')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recruitment">Recruitment & Admissions</SelectItem>
                <SelectItem value="retention">Student Retention</SelectItem>
                <SelectItem value="alumni">Alumni Relations</SelectItem>
                <SelectItem value="advancement">Advancement/Fundraising</SelectItem>
                <SelectItem value="comprehensive">Comprehensive (All)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>{t('applications.crm.users')}</Label>
            <Input
              type="number"
              value={formData.crm.users || ''}
              onChange={(e) => updateNestedData('crm', 'users', e.target.value)}
              placeholder="50"
            />
          </div>
        </div>
      </div>

      {/* ERP Section */}
      <div className="border rounded-lg p-4 bg-red-50">
        <h3 className="font-semibold text-gray-800 mb-4">
          {t('applications.erp.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="required">{t('applications.erp.vendor')}</Label>
            <Input
              value={formData.erp.vendor || ''}
              onChange={(e) => updateNestedData('erp', 'vendor', e.target.value)}
              placeholder="e.g., Workday, Banner Finance"
              className={cn(getFieldError?.('erp.vendor') && 'border-red-500 focus-visible:border-red-500')}
            />
            <FormError message={getFieldError?.('erp.vendor')} />
          </div>
          <div className="space-y-2">
            <Label>{t('applications.erp.version')}</Label>
            <Input
              value={formData.erp.version || ''}
              onChange={(e) => updateNestedData('erp', 'version', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label className="required">{t('applications.erp.hosting')}</Label>
            <Select
              value={formData.erp.hosting || ''}
              onValueChange={(value) => updateNestedData('erp', 'hosting', value)}
            >
              <SelectTrigger className={cn(getFieldError?.('erp.hosting') && 'border-red-500')}>
                <SelectValue placeholder={t('common.select')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="on_premise">{t('survey.options.hosting.on_premise')}</SelectItem>
                <SelectItem value="cloud_saas">{t('survey.options.hosting.cloud_saas')}</SelectItem>
                <SelectItem value="hosted">{t('survey.options.hosting.hosted')}</SelectItem>
                <SelectItem value="hybrid">{t('survey.options.hosting.hybrid')}</SelectItem>
              </SelectContent>
            </Select>
            <FormError message={getFieldError?.('erp.hosting')} />
          </div>
          <div className="space-y-2">
            <Label>{t('applications.erp.implementationYear')}</Label>
            <Input
              type="number"
              value={formData.erp.implementationYear || ''}
              onChange={(e) => updateNestedData('erp', 'implementationYear', e.target.value)}
              placeholder="2020"
            />
          </div>
        </div>
      </div>

      {/* Integration Platform */}
      <div className="border rounded-lg p-4 bg-cyan-50">
        <h3 className="font-semibold text-gray-800 mb-4">
          {t('applications.integration.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>{t('applications.integration.platform')}</Label>
            <Input
              value={formData.integrationPlatform}
              onChange={(e) => updateFormData('integrationPlatform', e.target.value)}
              placeholder="e.g., MuleSoft, Dell Boomi"
            />
          </div>
          <div className="space-y-2">
            <Label>{t('applications.integration.apiTool')}</Label>
            <Input
              value={formData.apiManagementTool}
              onChange={(e) => updateFormData('apiManagementTool', e.target.value)}
              placeholder="e.g., Apigee, Azure API Mgmt"
            />
          </div>
          <div className="space-y-2">
            <Label>{t('applications.integration.sso')}</Label>
            <Input
              value={formData.ssoProvider}
              onChange={(e) => updateFormData('ssoProvider', e.target.value)}
              placeholder="e.g., Okta, Azure AD"
            />
          </div>
          <div className="space-y-2">
            <Label>{t('applications.integration.etl')}</Label>
            <Input
              value={formData.etlTool}
              onChange={(e) => updateFormData('etlTool', e.target.value)}
              placeholder="e.g., Informatica, Talend"
            />
          </div>
        </div>
      </div>

      {/* Total Applications */}
      <div className="space-y-2">
        <Label className="required">{t('applications.totalApplications')}</Label>
        <Input
          type="number"
          value={formData.totalApplications}
          onChange={(e) => updateFormData('totalApplications', e.target.value)}
          placeholder="50"
          className={cn('max-w-xs', getFieldError?.('totalApplications') && 'border-red-500 focus-visible:border-red-500')}
        />
        <FormError message={getFieldError?.('totalApplications')} />
      </div>

      {/* Integration Challenges */}
      <div className="space-y-2">
        <Label>{t('applications.integrationChallenges')}</Label>
        <Textarea
          value={formData.integrationChallenges}
          onChange={(e) => updateFormData('integrationChallenges', e.target.value)}
          placeholder="Describe data synchronization issues, manual workarounds, system silos..."
          rows={4}
        />
      </div>
    </div>
  );
}
