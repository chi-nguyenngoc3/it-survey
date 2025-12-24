'use client';

import { useTranslations } from 'next-intl';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Building2, 
  Users, 
  Settings, 
  Database, 
  Shield, 
  BarChart3,
  Cloud,
  Brain,
  DollarSign,
  Workflow,
  Layers,
  ArrowRight,
  FileCheck
} from 'lucide-react';

const sectionIcons = [
  Building2,    // Institution Profile
  Users,        // IT Organization
  Settings,     // IT Processes
  Database,     // Applications
  Workflow,     // Process Mapping
  BarChart3,    // Data Analytics
  Brain,        // AI & Tech
  Cloud,        // Infrastructure
  Shield,       // Security
  DollarSign,   // Financial
  Layers        // Digitization
];

export default function HomePage() {
  const t = useTranslations();
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;

  const handleStartSurvey = () => {
    router.push(`/${locale}/survey`);
  };

  const sections = [
    'institution',
    'itOrganization',
    'itProcesses',
    'applications',
    'processMapping',
    'dataAnalytics',
    'aiTechnology',
    'infrastructure',
    'security',
    'financial',
    'digitization'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary-darker text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('header.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              {t('header.subtitle')}
            </p>
            <Button
              size="lg"
              onClick={handleStartSurvey}
              className="bg-accent-gold text-primary-darker hover:bg-accent-gold/90 font-semibold px-8 py-6 text-lg"
            >
              {locale === 'vi' ? 'Bắt đầu Khảo sát' : 'Start Survey'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Survey Overview */}
      <section className="py-16 bg-background-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              {locale === 'vi' ? '11 Phần Khảo sát' : '11 Survey Sections'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'vi' 
                ? 'Đánh giá toàn diện về năng lực CNTT và mức độ trưởng thành số của cơ sở giáo dục'
                : 'Comprehensive assessment of IT capabilities and digital maturity for educational institutions'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => {
              const Icon = sectionIcons[index];
              return (
                <Card key={section} className="card-corporate hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-base text-primary">
                          {t(`survey.sections.${section}.title`)}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {t(`survey.sections.${section}.description`)}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <FileCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {locale === 'vi' ? 'Tự động Lưu' : 'Auto-Save'}
              </h3>
              <p className="text-gray-600">
                {locale === 'vi' 
                  ? 'Dữ liệu được lưu tự động mỗi 30 giây'
                  : 'Your data is automatically saved every 30 seconds'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {locale === 'vi' ? 'Xuất Dữ liệu' : 'Data Export'}
              </h3>
              <p className="text-gray-600">
                {locale === 'vi' 
                  ? 'Xuất dữ liệu dưới dạng JSON để sao lưu'
                  : 'Export your data as JSON for backup'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {locale === 'vi' ? 'Bảo mật' : 'Secure'}
              </h3>
              <p className="text-gray-600">
                {locale === 'vi' 
                  ? 'Dữ liệu được bảo vệ và mã hóa'
                  : 'Your data is protected and encrypted'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-darker text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {locale === 'vi' ? 'Sẵn sàng bắt đầu?' : 'Ready to get started?'}
          </h2>
          <p className="text-lg text-white/80 mb-8">
            {locale === 'vi' 
              ? 'Hoàn thành khảo sát để đánh giá năng lực CNTT của cơ sở giáo dục'
              : 'Complete the survey to assess your institution\'s IT capabilities'
            }
          </p>
          <Button
            size="lg"
            onClick={handleStartSurvey}
            className="bg-accent-gold text-primary-darker hover:bg-accent-gold/90 font-semibold px-8 py-6 text-lg"
          >
            {locale === 'vi' ? 'Bắt đầu Khảo sát' : 'Start Survey'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

