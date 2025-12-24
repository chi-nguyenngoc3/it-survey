'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useSurveyForm } from '@/hooks/useSurveyForm';
import { SURVEY_SECTIONS } from '@/types/survey';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { SurveyNavigation } from './components/SurveyNavigation';
import { InstitutionProfile } from './components/InstitutionProfile';
import { ITOrganization } from './components/ITOrganization';
import { ITProcesses } from './components/ITProcesses';
import { ApplicationsPortfolio } from './components/ApplicationsPortfolio';
import { ProcessMapping } from './components/ProcessMapping';
import { DataAnalytics } from './components/DataAnalytics';
import { AITechnology } from './components/AITechnology';
import { Infrastructure } from './components/Infrastructure';
import { Security } from './components/Security';
import { Financial } from './components/Financial';
import { Digitization } from './components/Digitization';
import { 
  Download, 
  Save, 
  CheckCircle2, 
  Loader2,
  AlertCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function SurveyPage() {
  const t = useTranslations();
  const locale = useLocale();
  
  const {
    formData,
    currentSection,
    completedSections,
    isSaving,
    lastSaved,
    updateFormData,
    updateNestedData,
    setCurrentSection,
    markSectionComplete,
    saveData,
    exportData
  } = useSurveyForm();

  const progress = Math.round((completedSections.size / SURVEY_SECTIONS.length) * 100);

  const renderSection = () => {
    const commonProps = {
      formData,
      updateFormData,
      updateNestedData
    };

    switch (currentSection) {
      case 0:
        return <InstitutionProfile {...commonProps} />;
      case 1:
        return <ITOrganization {...commonProps} />;
      case 2:
        return <ITProcesses {...commonProps} />;
      case 3:
        return <ApplicationsPortfolio {...commonProps} />;
      case 4:
        return <ProcessMapping {...commonProps} />;
      case 5:
        return <DataAnalytics {...commonProps} />;
      case 6:
        return <AITechnology {...commonProps} />;
      case 7:
        return <Infrastructure {...commonProps} />;
      case 8:
        return <Security {...commonProps} />;
      case 9:
        return <Financial {...commonProps} />;
      case 10:
        return <Digitization {...commonProps} />;
      default:
        return <InstitutionProfile {...commonProps} />;
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleNext = () => {
    if (currentSection < SURVEY_SECTIONS.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handleMarkComplete = () => {
    markSectionComplete(currentSection);
    if (currentSection < SURVEY_SECTIONS.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background-gray py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          {/* Title and Actions */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-primary">
                {t('header.title')}
              </h1>
              <p className="text-gray-600 mt-1">
                {t('header.subtitle')}
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Save Indicator */}
              {isSaving ? (
                <div className="save-indicator save-indicator-saving">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  <span>{t('common.saving')}</span>
                </div>
              ) : lastSaved ? (
                <div className="save-indicator save-indicator-saved">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>{t('common.saved')}</span>
                </div>
              ) : null}
              
              {/* Export Button */}
              <Button
                variant="outline"
                onClick={exportData}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                {t('common.export')}
              </Button>
              
              {/* Save Button */}
              <Button
                onClick={() => saveData()}
                disabled={isSaving}
                className="bg-primary hover:bg-primary-dark text-white"
              >
                {isSaving ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Save className="h-4 w-4 mr-2" />
                )}
                {t('common.save')}
              </Button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>
                {t('survey.progress')}: {progress}%
              </span>
              <span>
                {completedSections.size} {t('survey.of')} {SURVEY_SECTIONS.length} {t('survey.sectionsComplete')}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Section Navigation */}
          <SurveyNavigation
            sections={SURVEY_SECTIONS}
            currentSection={currentSection}
            completedSections={completedSections}
            onSectionChange={setCurrentSection}
          />
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-6">
          {renderSection()}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentSection === 0}
              className="w-full sm:w-auto"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              {t('common.previous')}
            </Button>

            <Button
              onClick={handleMarkComplete}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white"
            >
              <CheckCircle2 className="h-4 w-4 mr-2" />
              {t('common.markComplete')}
            </Button>

            <Button
              onClick={handleNext}
              disabled={currentSection === SURVEY_SECTIONS.length - 1}
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white"
            >
              {t('common.next')}
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Guidelines Card */}
        <div className="info-box rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-primary mb-2">
                {t('survey.guidelines.title')}
              </h3>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                {(t.raw('survey.guidelines.items') as string[]).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

