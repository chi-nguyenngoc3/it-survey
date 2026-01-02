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
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Download, 
  CheckCircle2, 
  Loader2,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Send,
  FileDown,
  Plus
} from 'lucide-react';

export default function SurveyPage() {
  const t = useTranslations();
  const locale = useLocale();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  
  // Check for reset/start params
  const shouldReset = searchParams.get('reset') === '1';
  const shouldStart = searchParams.get('start') === '1';
  
  // ALL HOOKS MUST BE CALLED BEFORE ANY RETURN STATEMENTS
  const {
    formData,
    currentSection,
    completedSections,
    isSaving,
    lastSaved,
    validationErrors,
    updateFormData,
    updateNestedData,
    setCurrentSection,
    markSectionComplete,
    clearValidationErrors,
    getFieldError,
    exportData,
    resetForm
  } = useSurveyForm({ locale });

  // Handle reset/start params in useEffect
  useEffect(() => {
    if (shouldReset) {
      console.log('[SurveyPage] Reset param detected - clearing data and redirecting');
      localStorage.removeItem('itsm-survey-data');
      setIsRedirecting(true);
      window.location.replace(`/${locale}/survey`);
    } else if (shouldStart) {
      console.log('[SurveyPage] Start param detected - setting section to 0');
      setCurrentSection(0);
      setIsRedirecting(true);
      window.location.replace(`/${locale}/survey`);
    }
  }, [shouldReset, shouldStart, locale, setCurrentSection]);

  // Show loading while redirecting
  if (isRedirecting || shouldReset || shouldStart) {
    return (
      <div className="min-h-screen bg-background-gray flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  const progress = Math.round((completedSections.size / SURVEY_SECTIONS.length) * 100);
  const isLastSection = currentSection === SURVEY_SECTIONS.length - 1;
  const isFirstSection = currentSection === 0;
  const allSectionsComplete = completedSections.size === SURVEY_SECTIONS.length;
  const currentSectionComplete = completedSections.has(currentSection);

  // Debug log
  console.log('[SurveyPage] Rendering - currentSection:', currentSection, 'isSubmitted:', isSubmitted);

  const renderSection = () => {
    const commonProps = {
      formData,
      updateFormData,
      updateNestedData,
      getFieldError
    };

    switch (currentSection) {
      case 0: return <InstitutionProfile {...commonProps} />;
      case 1: return <ITOrganization {...commonProps} />;
      case 2: return <ITProcesses {...commonProps} />;
      case 3: return <ApplicationsPortfolio {...commonProps} />;
      case 4: return <ProcessMapping {...commonProps} />;
      case 5: return <DataAnalytics {...commonProps} />;
      case 6: return <AITechnology {...commonProps} />;
      case 7: return <Infrastructure {...commonProps} />;
      case 8: return <Security {...commonProps} />;
      case 9: return <Financial {...commonProps} />;
      case 10: return <Digitization {...commonProps} />;
      default: return <InstitutionProfile {...commonProps} />;
    }
  };

  const handlePrevious = () => {
    if (!isFirstSection) {
      clearValidationErrors();
      setCurrentSection(currentSection - 1);
    }
  };

  const handleNext = () => {
    // Validate and mark complete before moving
    const isValid = markSectionComplete(currentSection);
    if (isValid && !isLastSection) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handleSectionChange = (section: number) => {
    clearValidationErrors();
    setCurrentSection(section);
  };

  // Submit to Google Sheets
  const handleSubmit = async () => {
    if (!allSectionsComplete) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language: locale,
          formData: formData,
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        // Clear localStorage completely after successful submission
        if (typeof window !== 'undefined') {
          localStorage.removeItem('itsm-survey-data');
        }
        setIsSubmitted(true);
      } else {
        // Show the actual error message from the API
        const errorMessage = result.error || (locale === 'vi' ? 'Có lỗi xảy ra. Vui lòng thử lại.' : 'An error occurred. Please try again.');
        console.error('Submit error from API:', result);
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Submit error:', error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      alert(locale === 'vi' 
        ? `Lỗi kết nối: ${errorMessage}` 
        : `Connection error: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Start a new survey - navigate with reset parameter
  const handleStartNewSurvey = () => {
    console.log('[SurveyPage] handleStartNewSurvey - navigating with reset param');
    window.location.href = `/${locale}/survey?reset=1`;
  };

  // Success state after submission
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background-gray py-6 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-12 max-w-lg mx-4 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            {locale === 'vi' ? 'Gửi khảo sát thành công!' : 'Survey Submitted Successfully!'}
          </h1>
          <p className="text-gray-600 mb-8">
            {locale === 'vi' 
              ? 'Cảm ơn bạn đã hoàn thành khảo sát. Dữ liệu của bạn đã được lưu.'
              : 'Thank you for completing the survey. Your data has been saved.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleStartNewSurvey}
              className="bg-primary hover:bg-primary-dark text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              {locale === 'vi' ? 'Bắt đầu khảo sát mới' : 'Start New Survey'}
            </Button>
            <Button
              onClick={exportData}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <FileDown className="h-4 w-4 mr-2" />
              {locale === 'vi' ? 'Tải bản sao' : 'Download Copy'}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-gray py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Card - Simplified */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-primary">
                {t('header.title')}
              </h1>
              <p className="text-gray-600 mt-1">
                {t('header.subtitle')}
              </p>
            </div>
            
            {/* Minimal Header Actions - Auto-save indicator only */}
            <div className="flex items-center gap-3">
              {isSaving ? (
                <div className="flex items-center gap-2 text-sm text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  <span>{t('common.saving')}</span>
                </div>
              ) : lastSaved ? (
                <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>{t('common.saved')}</span>
                </div>
              ) : null}
              
              {/* Download button - secondary action */}
              <Button
                variant="ghost"
                size="icon"
                onClick={exportData}
                className="text-gray-500 hover:text-primary hover:bg-primary/5"
                title={locale === 'vi' ? 'Tải xuống JSON' : 'Download JSON'}
              >
                <Download className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Enhanced Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center text-sm mb-2">
              <span className="font-medium text-gray-700">
                {locale === 'vi' ? 'Tiến độ' : 'Progress'}
              </span>
              <span className="text-primary font-semibold">
                {completedSections.size}/{SURVEY_SECTIONS.length} {locale === 'vi' ? 'phần' : 'sections'}
              </span>
            </div>
            <div className="relative">
              <Progress value={progress} className="h-2" />
              {progress === 100 && (
                <div className="absolute -right-1 -top-1">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                </div>
              )}
            </div>
          </div>

          {/* Section Navigation */}
          <SurveyNavigation
            sections={SURVEY_SECTIONS}
            currentSection={currentSection}
            completedSections={completedSections}
            onSectionChange={handleSectionChange}
          />
        </div>

        {/* Validation Errors */}
        {validationErrors.length > 0 && (
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-700 mb-2">
                  {locale === 'vi' ? 'Vui lòng điền các trường bắt buộc:' : 'Please fill in the required fields:'}
                </h3>
                <ul className="text-sm text-red-600 space-y-1 list-disc list-inside">
                  {validationErrors.map((error, index) => (
                    <li key={index}>{error.message}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-6">
          {/* Section indicator */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
            <span className="text-sm text-gray-500">
              {locale === 'vi' ? 'Phần' : 'Section'} {currentSection + 1} / {SURVEY_SECTIONS.length}
            </span>
            {currentSectionComplete && (
              <span className="flex items-center gap-1.5 text-sm text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {locale === 'vi' ? 'Đã hoàn thành' : 'Completed'}
              </span>
            )}
          </div>

          {renderSection()}

          {/* ============================================ */}
          {/* REDESIGNED NAVIGATION - Clear Visual Hierarchy */}
          {/* ============================================ */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            {/* Show Submit button when all sections complete */}
            {allSectionsComplete && (
              <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-800">
                        {locale === 'vi' ? 'Tất cả các phần đã hoàn thành!' : 'All sections completed!'}
                      </p>
                      <p className="text-sm text-green-600">
                        {locale === 'vi' ? 'Sẵn sàng gửi khảo sát' : 'Ready to submit your survey'}
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 text-base font-semibold shadow-lg shadow-green-500/25 transition-all hover:shadow-xl hover:shadow-green-500/30"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        {locale === 'vi' ? 'Đang gửi...' : 'Submitting...'}
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        {locale === 'vi' ? 'Gửi khảo sát' : 'Submit Survey'}
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}

            {/* Navigation Row - Simple 2-button layout */}
            <div className="flex items-center justify-between">
              {/* Left: Previous Button */}
              <Button
                variant="ghost"
                onClick={handlePrevious}
                disabled={isFirstSection}
                className={`
                  px-4 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100
                  transition-all duration-200
                  ${isFirstSection ? 'opacity-0 pointer-events-none' : ''}
                `}
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                {locale === 'vi' ? 'Quay lại' : 'Back'}
              </Button>

              {/* Center: Section dots (visual only) */}
              <div className="hidden sm:flex items-center gap-1.5">
                {SURVEY_SECTIONS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSectionChange(idx)}
                    className={`
                      w-2 h-2 rounded-full transition-all duration-200
                      ${idx === currentSection 
                        ? 'w-6 bg-primary' 
                        : completedSections.has(idx)
                          ? 'bg-green-500 hover:bg-green-600'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }
                    `}
                    title={`Section ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Right: Primary Action (contextual) */}
              {isLastSection ? (
                // On last section, show "Complete" if not yet complete
                !currentSectionComplete ? (
                  <Button
                    onClick={handleNext}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 font-medium shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <CheckCircle2 className="h-5 w-5 mr-2" />
                    {locale === 'vi' ? 'Hoàn thành phần này' : 'Complete Section'}
                  </Button>
                ) : (
                  // All done on last section, show muted state
                  <div className="text-sm text-gray-500 px-4">
                    {locale === 'vi' ? '↑ Cuộn lên để gửi' : '↑ Scroll up to submit'}
                  </div>
                )
              ) : (
                // Normal sections: Continue button
                <Button
                  onClick={handleNext}
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 font-medium shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  {currentSectionComplete 
                    ? (locale === 'vi' ? 'Tiếp tục' : 'Continue')
                    : (locale === 'vi' ? 'Lưu & Tiếp tục' : 'Save & Continue')
                  }
                  <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Guidelines Card */}
        <div className="bg-primary/5 border border-primary/10 rounded-lg p-5">
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
