'use client';

import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SurveyFormData } from '@/types/survey';
import { Settings } from 'lucide-react';

interface SectionProps {
  formData: SurveyFormData;
  updateFormData: (field: keyof SurveyFormData, value: unknown) => void;
  updateNestedData: (parent: keyof SurveyFormData, field: string, value: unknown) => void;
}

export function ITProcesses({ formData, updateFormData, updateNestedData }: SectionProps) {
  const t = useTranslations();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-primary pb-3 mb-6">
        <Settings className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-semibold text-primary">
          {t('itProcesses.title')}
        </h2>
      </div>

      {/* ITIL Maturity */}
      <div className="space-y-2">
        <Label htmlFor="itilMaturity" className="required">
          {t('survey.fields.itilMaturity')}
        </Label>
        <Select
          value={formData.itilMaturity}
          onValueChange={(value) => updateFormData('itilMaturity', value)}
        >
          <SelectTrigger className="max-w-md">
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
      </div>

      {/* Service Desk */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <h3 className="font-semibold text-gray-800 mb-4">
          {t('itProcesses.serviceDesk.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="serviceDeskTool" className="required">
              {t('itProcesses.serviceDesk.tool')}
            </Label>
            <Input
              id="serviceDeskTool"
              value={formData.serviceDesk.tool || ''}
              onChange={(e) => updateNestedData('serviceDesk', 'tool', e.target.value)}
              placeholder="e.g., ServiceNow, Jira, BMC"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="monthlyTickets">
              {t('itProcesses.serviceDesk.monthlyTickets')}
            </Label>
            <Input
              id="monthlyTickets"
              type="number"
              value={formData.serviceDesk.monthlyTickets || ''}
              onChange={(e) => updateNestedData('serviceDesk', 'monthlyTickets', e.target.value)}
              placeholder="500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fcr">
              {t('itProcesses.serviceDesk.fcr')}
            </Label>
            <Input
              id="fcr"
              type="number"
              value={formData.serviceDesk.fcr || ''}
              onChange={(e) => updateNestedData('serviceDesk', 'fcr', e.target.value)}
              placeholder="65"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="resolutionTime">
              {t('itProcesses.serviceDesk.resolutionTime')}
            </Label>
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
            <Label htmlFor="cabFrequency" className="required">
              {t('itProcesses.changeManagement.cabFrequency')}
            </Label>
            <Select
              value={formData.changeManagement.cabFrequency || ''}
              onValueChange={(value) => updateNestedData('changeManagement', 'cabFrequency', value)}
            >
              <SelectTrigger>
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
          </div>

          <div className="space-y-2">
            <Label htmlFor="changeSuccessRate">
              {t('itProcesses.changeManagement.successRate')}
            </Label>
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
            <Label htmlFor="assetTool">
              {t('itProcesses.assetManagement.tool')}
            </Label>
            <Input
              id="assetTool"
              value={formData.assetManagement.tool || ''}
              onChange={(e) => updateNestedData('assetManagement', 'tool', e.target.value)}
              placeholder="e.g., ServiceNow CMDB, Lansweeper"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cmdbAccuracy">
              {t('itProcesses.assetManagement.cmdbAccuracy')}
            </Label>
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

