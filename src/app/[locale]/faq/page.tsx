'use client';

import { useState, useMemo } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FormattedText } from '@/components/ui/formatted-text';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ArrowRight,
  Search,
  Filter,
  Building2,
  Users,
  Settings,
  Database,
  Workflow,
  BarChart3,
  Brain,
  Cloud,
  Shield,
  DollarSign,
  Layers,
  HelpCircle,
  BookOpen,
  MessageCircleQuestion,
} from 'lucide-react';

// FAQ Section Icons mapping
const sectionIcons: Record<string, React.ElementType> = {
  general: HelpCircle,
  institution: Building2,
  itOrganization: Users,
  itProcesses: Settings,
  applications: Database,
  processMapping: Workflow,
  dataAnalytics: BarChart3,
  aiTechnology: Brain,
  infrastructure: Cloud,
  security: Shield,
  financial: DollarSign,
  digitization: Layers,
};

// FAQ Data Structure
interface FAQItem {
  id: string;
  section: string;
  questionKey: string;
  answerKey: string;
  keywords: string[];
}

// 38 FAQs organized by section
const faqData: FAQItem[] = [
  // General Questions (5)
  {
    id: 'g1',
    section: 'general',
    questionKey: 'faq.questions.g1.question',
    answerKey: 'faq.questions.g1.answer',
    keywords: ['confidential', 'privacy', 'data protection', 'bảo mật', 'riêng tư'],
  },
  {
    id: 'g2',
    section: 'general',
    questionKey: 'faq.questions.g2.question',
    answerKey: 'faq.questions.g2.answer',
    keywords: ['time', 'duration', 'how long', 'thời gian', 'bao lâu'],
  },
  {
    id: 'g3',
    section: 'general',
    questionKey: 'faq.questions.g3.question',
    answerKey: 'faq.questions.g3.answer',
    keywords: ['save', 'progress', 'continue', 'lưu', 'tiếp tục'],
  },
  {
    id: 'g4',
    section: 'general',
    questionKey: 'faq.questions.g4.question',
    answerKey: 'faq.questions.g4.answer',
    keywords: ['benchmark', 'comparison', 'peer', 'so sánh', 'đối chiếu'],
  },
  {
    id: 'g5',
    section: 'general',
    questionKey: 'faq.questions.g5.question',
    answerKey: 'faq.questions.g5.answer',
    keywords: ['result', 'report', 'output', 'kết quả', 'báo cáo'],
  },
  // Institution Profile (2)
  {
    id: 'i1',
    section: 'institution',
    questionKey: 'faq.questions.i1.question',
    answerKey: 'faq.questions.i1.answer',
    keywords: ['student', 'headcount', 'population', 'sinh viên', 'quy mô'],
  },
  {
    id: 'i2',
    section: 'institution',
    questionKey: 'faq.questions.i2.question',
    answerKey: 'faq.questions.i2.answer',
    keywords: ['campus', 'multi-campus', 'location', 'cơ sở', 'địa điểm'],
  },
  // IT Organization (3)
  {
    id: 'o1',
    section: 'itOrganization',
    questionKey: 'faq.questions.o1.question',
    answerKey: 'faq.questions.o1.answer',
    keywords: ['FTE', 'staff', 'headcount', 'ratio', 'nhân sự', 'tỷ lệ'],
  },
  {
    id: 'o2',
    section: 'itOrganization',
    questionKey: 'faq.questions.o2.question',
    answerKey: 'faq.questions.o2.answer',
    keywords: ['outsource', 'insource', 'vendor', 'thuê ngoài', 'nội bộ'],
  },
  {
    id: 'o3',
    section: 'itOrganization',
    questionKey: 'faq.questions.o3.question',
    answerKey: 'faq.questions.o3.answer',
    keywords: ['reporting', 'CIO', 'governance', 'báo cáo', 'quản trị'],
  },
  // IT Processes (3)
  {
    id: 'p1',
    section: 'itProcesses',
    questionKey: 'faq.questions.p1.question',
    answerKey: 'faq.questions.p1.answer',
    keywords: ['ITIL', 'maturity', 'level', 'trưởng thành', 'cấp độ'],
  },
  {
    id: 'p2',
    section: 'itProcesses',
    questionKey: 'faq.questions.p2.question',
    answerKey: 'faq.questions.p2.answer',
    keywords: ['service desk', 'ticket', 'FCR', 'first call', 'giải quyết'],
  },
  {
    id: 'p3',
    section: 'itProcesses',
    questionKey: 'faq.questions.p3.question',
    answerKey: 'faq.questions.p3.answer',
    keywords: ['change', 'CAB', 'approval', 'thay đổi', 'phê duyệt'],
  },
  // Applications (10)
  {
    id: 'a1',
    section: 'applications',
    questionKey: 'faq.questions.a1.question',
    answerKey: 'faq.questions.a1.answer',
    keywords: ['ERP', 'SAP', 'Oracle', 'enterprise', 'hệ thống'],
  },
  {
    id: 'a2',
    section: 'applications',
    questionKey: 'faq.questions.a2.question',
    answerKey: 'faq.questions.a2.answer',
    keywords: ['LMS', 'learning', 'Moodle', 'Canvas', 'học tập'],
  },
  {
    id: 'a3',
    section: 'applications',
    questionKey: 'faq.questions.a3.question',
    answerKey: 'faq.questions.a3.answer',
    keywords: ['SIS', 'student information', 'enrollment', 'quản lý sinh viên'],
  },
  {
    id: 'a4',
    section: 'applications',
    questionKey: 'faq.questions.a4.question',
    answerKey: 'faq.questions.a4.answer',
    keywords: ['SIS', 'LMS', 'integration', 'LTI', 'tích hợp'],
  },
  {
    id: 'a5',
    section: 'applications',
    questionKey: 'faq.questions.a5.question',
    answerKey: 'faq.questions.a5.answer',
    keywords: ['build', 'buy', 'custom', 'mua', 'tự phát triển'],
  },
  {
    id: 'a6',
    section: 'applications',
    questionKey: 'faq.questions.a6.question',
    answerKey: 'faq.questions.a6.answer',
    keywords: ['CRM', 'admissions', 'alumni', 'tuyển sinh', 'cựu sinh viên', 'Salesforce'],
  },
  {
    id: 'a7',
    section: 'applications',
    questionKey: 'faq.questions.a7.question',
    answerKey: 'faq.questions.a7.answer',
    keywords: ['ERP', 'implementation', 'SAP', 'Oracle', 'triển khai', 'MISA'],
  },
  {
    id: 'a8',
    section: 'applications',
    questionKey: 'faq.questions.a8.question',
    answerKey: 'faq.questions.a8.answer',
    keywords: ['SIS', 'migration', 'data', 'di chuyển', 'PSC', 'Edusoft'],
  },
  {
    id: 'a9',
    section: 'applications',
    questionKey: 'faq.questions.a9.question',
    answerKey: 'faq.questions.a9.answer',
    keywords: ['LMS', 'migration', 'content', 'SCORM', 'khóa học', 'nội dung'],
  },
  {
    id: 'a10',
    section: 'applications',
    questionKey: 'faq.questions.a10.question',
    answerKey: 'faq.questions.a10.answer',
    keywords: ['portal', 'super app', 'mobile', 'SSO', 'sinh viên', 'tích hợp'],
  },
  // Process Mapping (2)
  {
    id: 'm1',
    section: 'processMapping',
    questionKey: 'faq.questions.m1.question',
    answerKey: 'faq.questions.m1.answer',
    keywords: ['integration', 'API', 'middleware', 'tích hợp', 'kết nối'],
  },
  {
    id: 'm2',
    section: 'processMapping',
    questionKey: 'faq.questions.m2.question',
    answerKey: 'faq.questions.m2.answer',
    keywords: ['gap', 'manual', 'automation', 'thiếu sót', 'thủ công'],
  },
  // Data Analytics (3)
  {
    id: 'd1',
    section: 'dataAnalytics',
    questionKey: 'faq.questions.d1.question',
    answerKey: 'faq.questions.d1.answer',
    keywords: ['data warehouse', 'BI', 'analytics', 'kho dữ liệu', 'phân tích'],
  },
  {
    id: 'd2',
    section: 'dataAnalytics',
    questionKey: 'faq.questions.d2.question',
    answerKey: 'faq.questions.d2.answer',
    keywords: ['data governance', 'quality', 'master data', 'quản trị dữ liệu'],
  },
  {
    id: 'd3',
    section: 'dataAnalytics',
    questionKey: 'faq.questions.d3.question',
    answerKey: 'faq.questions.d3.answer',
    keywords: ['dashboard', 'reporting', 'visualization', 'báo cáo', 'trực quan'],
  },
  // AI & Technology (3)
  {
    id: 't1',
    section: 'aiTechnology',
    questionKey: 'faq.questions.t1.question',
    answerKey: 'faq.questions.t1.answer',
    keywords: ['AI', 'artificial intelligence', 'machine learning', 'trí tuệ nhân tạo'],
  },
  {
    id: 't2',
    section: 'aiTechnology',
    questionKey: 'faq.questions.t2.question',
    answerKey: 'faq.questions.t2.answer',
    keywords: ['chatbot', 'virtual assistant', 'automation', 'trợ lý ảo', 'tự động'],
  },
  {
    id: 't3',
    section: 'aiTechnology',
    questionKey: 'faq.questions.t3.question',
    answerKey: 'faq.questions.t3.answer',
    keywords: ['emerging', 'innovation', 'trend', 'xu hướng', 'đổi mới'],
  },
  // Infrastructure (2)
  {
    id: 'f1',
    section: 'infrastructure',
    questionKey: 'faq.questions.f1.question',
    answerKey: 'faq.questions.f1.answer',
    keywords: ['cloud', 'AWS', 'Azure', 'hybrid', 'đám mây'],
  },
  {
    id: 'f2',
    section: 'infrastructure',
    questionKey: 'faq.questions.f2.question',
    answerKey: 'faq.questions.f2.answer',
    keywords: ['network', 'bandwidth', 'WiFi', 'SD-WAN', 'mạng'],
  },
  // Security (3)
  {
    id: 's1',
    section: 'security',
    questionKey: 'faq.questions.s1.question',
    answerKey: 'faq.questions.s1.answer',
    keywords: ['security', 'framework', 'ISO', 'NIST', 'bảo mật', 'khung'],
  },
  {
    id: 's2',
    section: 'security',
    questionKey: 'faq.questions.s2.question',
    answerKey: 'faq.questions.s2.answer',
    keywords: ['compliance', 'GDPR', 'FERPA', 'regulation', 'tuân thủ', 'quy định'],
  },
  {
    id: 's3',
    section: 'security',
    questionKey: 'faq.questions.s3.question',
    answerKey: 'faq.questions.s3.answer',
    keywords: ['MFA', 'authentication', 'identity', 'xác thực', 'danh tính'],
  },
  // Financial (2)
  {
    id: 'n1',
    section: 'financial',
    questionKey: 'faq.questions.n1.question',
    answerKey: 'faq.questions.n1.answer',
    keywords: ['budget', 'spending', 'cost', 'ngân sách', 'chi phí'],
  },
  {
    id: 'n2',
    section: 'financial',
    questionKey: 'faq.questions.n2.question',
    answerKey: 'faq.questions.n2.answer',
    keywords: ['TCO', 'ROI', 'investment', 'đầu tư', 'lợi nhuận'],
  },
];

export default function FAQPage() {
  const t = useTranslations();
  const locale = useLocale();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState<string>('all');

  // All sections for filter
  const sections = [
    { value: 'all', labelKey: 'faq.filters.all' },
    { value: 'general', labelKey: 'faq.filters.general' },
    { value: 'institution', labelKey: 'survey.sections.institution.title' },
    { value: 'itOrganization', labelKey: 'survey.sections.itOrganization.title' },
    { value: 'itProcesses', labelKey: 'survey.sections.itProcesses.title' },
    { value: 'applications', labelKey: 'survey.sections.applications.title' },
    { value: 'processMapping', labelKey: 'survey.sections.processMapping.title' },
    { value: 'dataAnalytics', labelKey: 'survey.sections.dataAnalytics.title' },
    { value: 'aiTechnology', labelKey: 'survey.sections.aiTechnology.title' },
    { value: 'infrastructure', labelKey: 'survey.sections.infrastructure.title' },
    { value: 'security', labelKey: 'survey.sections.security.title' },
    { value: 'financial', labelKey: 'survey.sections.financial.title' },
  ];

  // Filter FAQs based on search and section
  const filteredFAQs = useMemo(() => {
    return faqData.filter((faq) => {
      // Section filter
      if (selectedSection !== 'all' && faq.section !== selectedSection) {
        return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const questionText = t(faq.questionKey).toLowerCase();
        const answerText = t(faq.answerKey).toLowerCase();
        const keywordsMatch = faq.keywords.some((kw) =>
          kw.toLowerCase().includes(query)
        );

        return (
          questionText.includes(query) ||
          answerText.includes(query) ||
          keywordsMatch
        );
      }

      return true;
    });
  }, [searchQuery, selectedSection, t]);

  // Group FAQs by section for display
  const groupedFAQs = useMemo(() => {
    const groups: Record<string, FAQItem[]> = {};
    filteredFAQs.forEach((faq) => {
      if (!groups[faq.section]) {
        groups[faq.section] = [];
      }
      groups[faq.section].push(faq);
    });
    return groups;
  }, [filteredFAQs]);

  const getSectionLabel = (sectionKey: string) => {
    if (sectionKey === 'general') {
      return t('faq.filters.general');
    }
    return t(`survey.sections.${sectionKey}.title`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary-darker text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-6">
            <MessageCircleQuestion className="h-10 w-10 text-accent-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('faq.hero.title')}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t('faq.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Search and Filter Section - Compact */}
      <section className="py-3 bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-grow w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder={t('faq.search.placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-9 text-sm"
              />
            </div>

            {/* Section Filter */}
            <div className="w-full sm:w-52">
              <Select value={selectedSection} onValueChange={setSelectedSection}>
                <SelectTrigger className="h-9">
                  <div className="flex items-center gap-2">
                    <Filter className="h-3.5 w-3.5 text-gray-500" />
                    <SelectValue placeholder={t('faq.filters.all')} />
                  </div>
                </SelectTrigger>
                <SelectContent position="popper" className="z-[9999]">
                  {sections.map((section) => (
                    <SelectItem key={section.value} value={section.value}>
                      {t(section.labelKey)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Results count - inline on desktop */}
            <div className="text-xs text-gray-500 whitespace-nowrap">
              {t('faq.results.count', { count: filteredFAQs.length })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-16">
              <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                {t('faq.results.noResults')}
              </h3>
              <p className="text-gray-500">{t('faq.results.tryAgain')}</p>
            </div>
          ) : (
            <div className="space-y-8">
              {Object.entries(groupedFAQs).map(([section, faqs]) => {
                const Icon = sectionIcons[section] || HelpCircle;
                return (
                  <div key={section} className="bg-white rounded-xl shadow-sm border overflow-hidden">
                    {/* Section Header */}
                    <div className="bg-gray-50 px-6 py-4 border-b flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-lg font-semibold text-primary">
                        {getSectionLabel(section)}
                      </h2>
                      <span className="ml-auto text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                        {faqs.length} {locale === 'vi' ? 'câu hỏi' : 'questions'}
                      </span>
                    </div>

                    {/* Questions */}
                    <Accordion type="multiple" className="divide-y">
                      {faqs.map((faq) => (
                        <AccordionItem
                          key={faq.id}
                          value={faq.id}
                          className="border-0"
                        >
                          <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50 hover:no-underline">
                            <span className="text-base font-medium text-gray-800 pr-4">
                              {t(faq.questionKey)}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-6 pt-2">
                            <FormattedText 
                              content={t(faq.answerKey)} 
                              className="prose prose-sm max-w-none text-gray-600"
                            />
                            {/* Keywords tags */}
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.keywords.slice(0, 5).map((keyword) => (
                                <span
                                  key={keyword}
                                  className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                                >
                                  {keyword}
                                </span>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-darker text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-12 w-12 text-accent-gold mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">
            {t('faq.cta.title')}
          </h2>
          <p className="text-lg text-white/80 mb-8">
            {t('faq.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/about`} passHref>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 hover:border-white font-semibold px-8"
              >
                {t('faq.cta.aboutButton')}
              </Button>
            </Link>
            <Link href={`/${locale}/survey?start=1`} passHref>
              <Button
                size="lg"
                className="bg-accent-gold text-primary-darker hover:bg-accent-gold/90 font-semibold px-8"
              >
                {t('faq.cta.surveyButton')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

