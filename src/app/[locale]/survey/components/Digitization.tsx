'use client';

import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SurveyFormData } from '@/types/survey';
import { Layers } from 'lucide-react';

interface SectionProps {
  formData: SurveyFormData;
  updateFormData: (field: keyof SurveyFormData, value: unknown) => void;
  updateNestedData: (parent: keyof SurveyFormData, field: string, value: unknown) => void;
}

interface ProcessCategory {
  title: string;
  processes: { key: string; label: string; desc: string }[];
}

export function Digitization({ formData, updateFormData, updateNestedData }: SectionProps) {
  const t = useTranslations();

  const processCategories: ProcessCategory[] = [
    {
      title: t('digitization.studentLifecycle.title'),
      processes: [
        { key: 'admissions', label: t('digitization.studentLifecycle.admissions'), desc: 'Application processing, CRM, communication' },
        { key: 'enrollment', label: t('digitization.studentLifecycle.enrollment'), desc: 'Course registration, payment processing' },
        { key: 'academic', label: t('digitization.studentLifecycle.academic'), desc: 'Grade management, transcripts, scheduling' },
        { key: 'student_services', label: t('digitization.studentLifecycle.studentServices'), desc: 'Advising, support services, career services' },
        { key: 'alumni', label: t('digitization.studentLifecycle.alumni'), desc: 'Alumni engagement and fundraising' },
      ]
    },
    {
      title: t('digitization.academicAdmin.title'),
      processes: [
        { key: 'curriculum', label: t('digitization.academicAdmin.curriculum'), desc: 'Program and course management' },
        { key: 'quality', label: t('digitization.academicAdmin.quality'), desc: 'Accreditation, assessment, compliance' },
        { key: 'library', label: t('digitization.academicAdmin.library'), desc: 'Digital resources, catalog management' },
        { key: 'research', label: t('digitization.academicAdmin.research'), desc: 'Grant management, research data' },
      ]
    },
    {
      title: t('digitization.backOffice.title'),
      processes: [
        { key: 'finance', label: t('digitization.backOffice.finance'), desc: 'Financial management, budget, reporting' },
        { key: 'hr', label: t('digitization.backOffice.hr'), desc: 'Recruiting, payroll, performance management' },
        { key: 'procurement', label: t('digitization.backOffice.procurement'), desc: 'Purchase orders, vendor management' },
        { key: 'facilities', label: t('digitization.backOffice.facilities'), desc: 'Space management, work orders, assets' },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-primary pb-3 mb-6">
        <Layers className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-semibold text-primary">
          {t('digitization.title')}
        </h2>
      </div>

      <div className="info-box mb-6">
        <p className="text-sm text-gray-700">
          {t('digitization.description')}
        </p>
      </div>

      {/* Process Maturity Ratings */}
      {processCategories.map((category, catIndex) => (
        <div key={catIndex} className="border rounded-lg p-4 bg-gray-50">
          <h3 className="font-semibold text-gray-800 mb-4">
            {category.title}
          </h3>
          <div className="space-y-4">
            {category.processes.map((process) => (
              <div key={process.key} className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    {process.label}
                  </label>
                  <p className="text-xs text-gray-500">{process.desc}</p>
                </div>
                <Select
                  value={formData.processMaturity[process.key] || ''}
                  onValueChange={(value) => updateNestedData('processMaturity', process.key, value)}
                >
                  <SelectTrigger className="w-36">
                    <SelectValue placeholder="Rate..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">{t('digitization.maturityRatings.1')}</SelectItem>
                    <SelectItem value="2">{t('digitization.maturityRatings.2')}</SelectItem>
                    <SelectItem value="3">{t('digitization.maturityRatings.3')}</SelectItem>
                    <SelectItem value="4">{t('digitization.maturityRatings.4')}</SelectItem>
                    <SelectItem value="5">{t('digitization.maturityRatings.5')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Overall Maturity Scores */}
      <div className="border-t pt-6">
        <h3 className="font-semibold text-gray-800 mb-4">
          {t('digitization.overallScores.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>{t('digitization.overallScores.processDigitization')}</Label>
            <Input
              type="number"
              min="1"
              max="5"
              step="0.1"
              value={formData.processDigitizationScore}
              onChange={(e) => updateFormData('processDigitizationScore', e.target.value)}
              placeholder="1.0 - 5.0"
            />
          </div>

          <div className="space-y-2">
            <Label>{t('digitization.overallScores.dataMaturity')}</Label>
            <Input
              type="number"
              min="1"
              max="5"
              step="0.1"
              value={formData.dataMaturityScore}
              onChange={(e) => updateFormData('dataMaturityScore', e.target.value)}
              placeholder="1.0 - 5.0"
            />
          </div>

          <div className="space-y-2">
            <Label>{t('digitization.overallScores.itOperations')}</Label>
            <Input
              type="number"
              min="1"
              max="5"
              step="0.1"
              value={formData.itOperationsScore}
              onChange={(e) => updateFormData('itOperationsScore', e.target.value)}
              placeholder="1.0 - 5.0"
            />
          </div>
        </div>
      </div>

      {/* Pain Points */}
      <div className="space-y-2">
        <Label>{t('digitization.painPoints')}</Label>
        <Textarea
          value={formData.painPoints}
          onChange={(e) => updateFormData('painPoints', e.target.value)}
          placeholder="Describe major pain points in current processes and potential quick wins..."
          rows={4}
        />
      </div>
    </div>
  );
}

