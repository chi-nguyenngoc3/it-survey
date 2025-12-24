'use client';

import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SurveyFormData } from '@/types/survey';
import { Building2 } from 'lucide-react';

interface SectionProps {
  formData: SurveyFormData;
  updateFormData: (field: keyof SurveyFormData, value: unknown) => void;
  updateNestedData: (parent: keyof SurveyFormData, field: string, value: unknown) => void;
}

export function InstitutionProfile({ formData, updateFormData }: SectionProps) {
  const t = useTranslations();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-primary pb-3 mb-6">
        <Building2 className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-semibold text-primary">
          {t('survey.sections.institution.title')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Institution Name */}
        <div className="space-y-2">
          <Label htmlFor="institutionName" className="required">
            {t('survey.fields.institutionName')}
          </Label>
          <Input
            id="institutionName"
            value={formData.institutionName}
            onChange={(e) => updateFormData('institutionName', e.target.value)}
            placeholder={t('survey.placeholders.institutionName')}
          />
        </div>

        {/* Institution Type 1 */}
        <div className="space-y-2">
          <Label htmlFor="institutionType1" className="required">
            {t('survey.fields.institutionType1')}
          </Label>
          <Select
            value={formData.institutionType1}
            onValueChange={(value) => {
              updateFormData('institutionType1', value);
              if (value === 'university') {
                updateFormData('institutionType2', '');
              }
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder={t('common.select')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="university">
                {t('survey.options.institutionType1.university')}
              </SelectItem>
              <SelectItem value="school">
                {t('survey.options.institutionType1.school')}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Institution Type 2 (conditional) */}
        {formData.institutionType1 === 'school' && (
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="institutionType2" className="required">
              {t('survey.fields.institutionType2')}
            </Label>
            <Select
              value={formData.institutionType2}
              onValueChange={(value) => updateFormData('institutionType2', value)}
            >
              <SelectTrigger className="bg-blue-50">
                <SelectValue placeholder={t('common.select')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sna">
                  {t('survey.options.institutionType2.sna')}
                </SelectItem>
                <SelectItem value="uk_academy">
                  {t('survey.options.institutionType2.uk_academy')}
                </SelectItem>
                <SelectItem value="ischool">
                  {t('survey.options.institutionType2.ischool')}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Institution Type (Academic) */}
        <div className="space-y-2">
          <Label htmlFor="institutionType" className="required">
            {t('survey.fields.institutionType')}
          </Label>
          <Select
            value={formData.institutionType}
            onValueChange={(value) => updateFormData('institutionType', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={t('common.select')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="public_research">
                {t('survey.options.institutionType.public_research')}
              </SelectItem>
              <SelectItem value="private_research">
                {t('survey.options.institutionType.private_research')}
              </SelectItem>
              <SelectItem value="public_comprehensive">
                {t('survey.options.institutionType.public_comprehensive')}
              </SelectItem>
              <SelectItem value="private_liberal_arts">
                {t('survey.options.institutionType.private_liberal_arts')}
              </SelectItem>
              <SelectItem value="community_college">
                {t('survey.options.institutionType.community_college')}
              </SelectItem>
              <SelectItem value="technical">
                {t('survey.options.institutionType.technical')}
              </SelectItem>
              <SelectItem value="private_multi_campus">
                {t('survey.options.institutionType.private_multi_campus')}
              </SelectItem>
              <SelectItem value="k12_international">
                {t('survey.options.institutionType.k12_international')}
              </SelectItem>
              <SelectItem value="k12_bilingual">
                {t('survey.options.institutionType.k12_bilingual')}
              </SelectItem>
              <SelectItem value="k12_integrated">
                {t('survey.options.institutionType.k12_integrated')}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Student Population */}
        <div className="space-y-2">
          <Label htmlFor="studentPopulation" className="required">
            {t('survey.fields.studentPopulation')}
          </Label>
          <Input
            id="studentPopulation"
            type="number"
            value={formData.studentPopulation}
            onChange={(e) => updateFormData('studentPopulation', e.target.value)}
            placeholder="10000"
          />
        </div>

        {/* Employee Count */}
        <div className="space-y-2">
          <Label htmlFor="employeeCount" className="required">
            {t('survey.fields.employeeCount')}
          </Label>
          <Input
            id="employeeCount"
            type="number"
            value={formData.employeeCount}
            onChange={(e) => updateFormData('employeeCount', e.target.value)}
            placeholder="500"
          />
        </div>

        {/* Faculty Count */}
        <div className="space-y-2">
          <Label htmlFor="facultyCount" className="required">
            {t('survey.fields.facultyCount')}
          </Label>
          <Input
            id="facultyCount"
            type="number"
            value={formData.facultyCount}
            onChange={(e) => updateFormData('facultyCount', e.target.value)}
            placeholder="200"
          />
        </div>

        {/* Campus Count */}
        <div className="space-y-2">
          <Label htmlFor="campusCount">
            {t('survey.fields.campusCount')}
          </Label>
          <Input
            id="campusCount"
            type="number"
            value={formData.campusCount}
            onChange={(e) => updateFormData('campusCount', e.target.value)}
            placeholder="1"
          />
        </div>

        {/* Fiscal Year */}
        <div className="space-y-2">
          <Label htmlFor="fiscalYear" className="required">
            {t('survey.fields.fiscalYear')}
          </Label>
          <Input
            id="fiscalYear"
            value={formData.fiscalYear}
            onChange={(e) => updateFormData('fiscalYear', e.target.value)}
            placeholder={t('survey.placeholders.fiscalYear')}
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="border-t pt-6 mt-6">
        <h3 className="font-semibold text-gray-800 mb-4">
          Primary Contact Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="contactName" className="required">
              {t('survey.fields.contactName')}
            </Label>
            <Input
              id="contactName"
              value={formData.contactName}
              onChange={(e) => updateFormData('contactName', e.target.value)}
              placeholder={t('survey.placeholders.contactName')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactEmail" className="required">
              {t('survey.fields.contactEmail')}
            </Label>
            <Input
              id="contactEmail"
              type="email"
              value={formData.contactEmail}
              onChange={(e) => updateFormData('contactEmail', e.target.value)}
              placeholder={t('survey.placeholders.contactEmail')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactRole" className="required">
              {t('survey.fields.contactRole')}
            </Label>
            <Input
              id="contactRole"
              value={formData.contactRole}
              onChange={(e) => updateFormData('contactRole', e.target.value)}
              placeholder={t('survey.placeholders.contactRole')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

