'use client';

import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SurveyFormData } from '@/types/survey';
import { Users } from 'lucide-react';

interface SectionProps {
  formData: SurveyFormData;
  updateFormData: (field: keyof SurveyFormData, value: unknown) => void;
  updateNestedData: (parent: keyof SurveyFormData, field: string, value: unknown) => void;
}

export function ITOrganization({ formData, updateFormData, updateNestedData }: SectionProps) {
  const t = useTranslations();

  const fteCategories = [
    { key: 'leadership', label: t('itOrganization.fteBreakdown.leadership') },
    { key: 'infrastructure', label: t('itOrganization.fteBreakdown.infrastructure') },
    { key: 'applications', label: t('itOrganization.fteBreakdown.applications') },
    { key: 'security', label: t('itOrganization.fteBreakdown.security') },
    { key: 'servicedesk', label: t('itOrganization.fteBreakdown.servicedesk') },
    { key: 'projectmgmt', label: t('itOrganization.fteBreakdown.projectmgmt') },
    { key: 'data', label: t('itOrganization.fteBreakdown.data') },
    { key: 'network', label: t('itOrganization.fteBreakdown.network') },
    { key: 'other', label: t('itOrganization.fteBreakdown.other') },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-primary pb-3 mb-6">
        <Users className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-semibold text-primary">
          {t('itOrganization.title')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* IT Reporting Structure */}
        <div className="space-y-2">
          <Label htmlFor="itReportingStructure" className="required">
            {t('survey.fields.itReportingStructure')}
          </Label>
          <Select
            value={formData.itReportingStructure}
            onValueChange={(value) => updateFormData('itReportingStructure', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={t('common.select')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="president">
                {t('survey.options.itReportingStructure.president')}
              </SelectItem>
              <SelectItem value="provost">
                {t('survey.options.itReportingStructure.provost')}
              </SelectItem>
              <SelectItem value="cfo">
                {t('survey.options.itReportingStructure.cfo')}
              </SelectItem>
              <SelectItem value="coo">
                {t('survey.options.itReportingStructure.coo')}
              </SelectItem>
              <SelectItem value="other">
                {t('survey.options.itReportingStructure.other')}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* CIO/CTO Title */}
        <div className="space-y-2">
          <Label htmlFor="cioCtoTitle" className="required">
            {t('survey.fields.cioCtoTitle')}
          </Label>
          <Input
            id="cioCtoTitle"
            value={formData.cioCtoTitle}
            onChange={(e) => updateFormData('cioCtoTitle', e.target.value)}
            placeholder="e.g., CIO, VP IT, IT Director"
          />
        </div>

        {/* IT Staff Count */}
        <div className="space-y-2">
          <Label htmlFor="itStaffCount" className="required">
            {t('survey.fields.itStaffCount')}
          </Label>
          <Input
            id="itStaffCount"
            type="number"
            value={formData.itStaffCount}
            onChange={(e) => updateFormData('itStaffCount', e.target.value)}
            placeholder="25"
          />
        </div>

        {/* Organizational Model */}
        <div className="space-y-2">
          <Label htmlFor="organizationalModel" className="required">
            {t('survey.fields.organizationalModel')}
          </Label>
          <Select
            value={formData.organizationalModel}
            onValueChange={(value) => updateFormData('organizationalModel', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={t('common.select')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="centralized">
                {t('survey.options.organizationalModel.centralized')}
              </SelectItem>
              <SelectItem value="decentralized">
                {t('survey.options.organizationalModel.decentralized')}
              </SelectItem>
              <SelectItem value="hybrid">
                {t('survey.options.organizationalModel.hybrid')}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* FTE Breakdown */}
      <div className="border-t pt-6 mt-6">
        <h3 className="font-semibold text-gray-800 mb-4">
          {t('itOrganization.staffDistribution')}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {fteCategories.map((category) => (
            <div key={category.key} className="space-y-2">
              <Label htmlFor={`fte-${category.key}`} className="text-sm">
                {category.label}
              </Label>
              <Input
                id={`fte-${category.key}`}
                type="number"
                step="0.5"
                value={formData.itFteBreakdown[category.key as keyof typeof formData.itFteBreakdown] || ''}
                onChange={(e) => updateNestedData('itFteBreakdown', category.key, e.target.value)}
                placeholder="0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

