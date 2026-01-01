'use client';

import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { LabelWithTooltip } from '@/components/ui/label-with-tooltip';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormError } from '@/components/ui/form-error';
import { GenerateExampleButton } from '@/components/ui/generate-example-button';
import { SurveyFormData } from '@/types/survey';
import { Brain } from 'lucide-react';
import { cn } from '@/lib/utils';
import { exampleAITechnology } from '@/lib/exampleData';

interface SectionProps {
  formData: SurveyFormData;
  updateFormData: (field: keyof SurveyFormData, value: unknown) => void;
  updateNestedData: (parent: keyof SurveyFormData, field: string, value: unknown) => void;
  getFieldError?: (fieldName: string) => string | undefined;
}

const aiUseCaseOptions = [
  'Chatbots & Virtual Assistants',
  'Predictive Analytics',
  'Student Success Prediction',
  'Personalized Learning',
  'Automated Grading',
  'Content Generation',
  'Research Assistance',
  'Administrative Automation',
  'Security Threat Detection',
  'Document Processing'
];

export function AITechnology({ formData, updateFormData, getFieldError }: SectionProps) {
  const t = useTranslations();

  const handleUseCaseChange = (useCase: string, checked: boolean) => {
    const currentUseCases = formData.aiUseCases || [];
    if (checked) {
      updateFormData('aiUseCases', [...currentUseCases, useCase]);
    } else {
      updateFormData('aiUseCases', currentUseCases.filter(u => u !== useCase));
    }
  };

  const handleGenerateExample = () => {
    Object.entries(exampleAITechnology).forEach(([key, value]) => {
      updateFormData(key as keyof SurveyFormData, value);
    });
  };

  const handleClearExample = () => {
    Object.entries(exampleAITechnology).forEach(([key, value]) => {
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
          <Brain className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold text-primary">
            {t('aiTechnology.title')}
          </h2>
        </div>
        <GenerateExampleButton onClick={handleGenerateExample} onClear={handleClearExample} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* AI Strategy */}
        <div className="space-y-2">
          <LabelWithTooltip tooltip={t('aiTechnology.tooltips.aiStrategy')} required>
            AI Strategy Status
          </LabelWithTooltip>
          <Select
            value={formData.aiStrategy}
            onValueChange={(value) => updateFormData('aiStrategy', value)}
          >
            <SelectTrigger className={cn(getFieldError?.('aiStrategy') && 'border-red-500')}>
              <SelectValue placeholder={t('common.select')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="no_strategy">No formal AI strategy</SelectItem>
              <SelectItem value="exploring">Exploring AI opportunities</SelectItem>
              <SelectItem value="developing">Developing AI strategy</SelectItem>
              <SelectItem value="implemented">AI strategy implemented</SelectItem>
              <SelectItem value="mature">Mature AI program</SelectItem>
            </SelectContent>
          </Select>
          <FormError message={getFieldError?.('aiStrategy')} />
        </div>

        {/* AI Spending */}
        <div className="space-y-2">
          <LabelWithTooltip tooltip={t('aiTechnology.tooltips.aiSpending')}>
            Annual AI/ML Spending (USD)
          </LabelWithTooltip>
          <Input
            value={formData.aiSpending}
            onChange={(e) => updateFormData('aiSpending', e.target.value)}
            placeholder="e.g., $100,000"
          />
        </div>

        {/* AI Platforms */}
        <div className="space-y-2 md:col-span-2">
          <LabelWithTooltip tooltip={t('aiTechnology.tooltips.aiPlatforms')}>
            AI/ML Platforms in Use
          </LabelWithTooltip>
          <Input
            value={formData.aiPlatforms}
            onChange={(e) => updateFormData('aiPlatforms', e.target.value)}
            placeholder="e.g., Azure AI, AWS SageMaker, Google AI, OpenAI"
          />
        </div>

        {/* AI Governance */}
        <div className="space-y-2">
          <LabelWithTooltip tooltip={t('aiTechnology.tooltips.aiGovernance')}>
            AI Governance Framework
          </LabelWithTooltip>
          <Select
            value={formData.aiGovernance}
            onValueChange={(value) => updateFormData('aiGovernance', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={t('common.select')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No governance framework</SelectItem>
              <SelectItem value="informal">Informal guidelines</SelectItem>
              <SelectItem value="developing">Framework in development</SelectItem>
              <SelectItem value="formal">Formal governance in place</SelectItem>
              <SelectItem value="mature">Mature governance with oversight</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* AI Use Cases */}
      <div className="border-t pt-6">
        <LabelWithTooltip tooltip={t('aiTechnology.tooltips.aiUseCases')} className="mb-4">
          <span className="font-semibold text-gray-800">AI Use Cases (Current or Planned)</span>
        </LabelWithTooltip>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {aiUseCaseOptions.map((useCase) => (
            <div key={useCase} className="flex items-center space-x-2">
              <Checkbox
                id={`ai-${useCase}`}
                checked={(formData.aiUseCases || []).includes(useCase)}
                onCheckedChange={(checked) => handleUseCaseChange(useCase, checked as boolean)}
              />
              <label
                htmlFor={`ai-${useCase}`}
                className="text-sm text-gray-700 cursor-pointer"
              >
                {useCase}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Notes */}
      <div className="space-y-2">
        <LabelWithTooltip tooltip={t('aiTechnology.tooltips.aiInitiatives')}>
          AI Initiatives & Challenges
        </LabelWithTooltip>
        <Textarea
          value={formData.aiInitiatives}
          onChange={(e) => updateFormData('aiInitiatives', e.target.value)}
          placeholder="Describe current AI initiatives, challenges, and future plans..."
          rows={4}
        />
      </div>
    </div>
  );
}
