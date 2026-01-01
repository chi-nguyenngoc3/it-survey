'use client';

import { useTranslations } from 'next-intl';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  Clock,
  Target,
  CheckCircle2,
  Lightbulb,
  TrendingUp,
  FileText,
  HelpCircle
} from 'lucide-react';

const sectionData = [
  {
    icon: Building2,
    title: 'Thông tin Cơ sở',
    titleEn: 'Institution Profile',
    duration: '3-5 phút',
    description: 'Thu thập thông tin cơ bản về tổ chức: quy mô, loại hình, số lượng sinh viên và nhân viên.',
    keyQuestions: ['Tên và loại hình tổ chức', 'Quy mô sinh viên/nhân viên', 'Số lượng cơ sở'],
    framework: 'Benchmarking & Peer Analysis'
  },
  {
    icon: Users,
    title: 'Tổ chức & Nhân sự CNTT',
    titleEn: 'IT Organization & Staffing',
    duration: '5-7 phút',
    description: 'Đánh giá cấu trúc tổ chức, nguồn nhân lực và mô hình vận hành CNTT.',
    keyQuestions: ['Cấu trúc báo cáo CIO/CTO', 'Phân bổ FTE theo chức năng', 'Mô hình outsourcing'],
    framework: 'Operating Model + COBIT'
  },
  {
    icon: Settings,
    title: 'Quy trình CNTT & ITSM',
    titleEn: 'IT Processes & ITSM Maturity',
    duration: '5-8 phút',
    description: 'Đánh giá mức độ trưởng thành của các quy trình quản lý dịch vụ CNTT theo ITIL.',
    keyQuestions: ['Service Desk metrics (FCR, thời gian xử lý)', 'Change Management', 'Project Management methodology'],
    framework: 'ITIL 4 Framework'
  },
  {
    icon: Database,
    title: 'Danh mục Ứng dụng',
    titleEn: 'Applications Portfolio',
    duration: '8-12 phút',
    description: 'Khảo sát các hệ thống ứng dụng cốt lõi: SIS, LMS, ERP, HRIS, CRM.',
    keyQuestions: ['Vendor và phiên bản', 'Hosting model', 'Mức độ hài lòng của người dùng'],
    framework: 'Application Portfolio Management'
  },
  {
    icon: Workflow,
    title: 'Ma trận Ánh xạ Quy trình',
    titleEn: 'Process-System Mapping',
    duration: '5-8 phút',
    description: 'Xây dựng bản đồ liên kết giữa quy trình nghiệp vụ và hệ thống hỗ trợ.',
    keyQuestions: ['Primary vs Supporting systems', 'Integration gaps', 'Data flow'],
    framework: 'Enterprise Architecture'
  },
  {
    icon: BarChart3,
    title: 'Dữ liệu & Phân tích',
    titleEn: 'Data & Analytics',
    duration: '5-7 phút',
    description: 'Đánh giá năng lực Data Warehouse, BI tools, và Data Governance.',
    keyQuestions: ['Data platform', 'Analytics maturity', 'Master Data Management'],
    framework: 'DAMA-DMBOK'
  },
  {
    icon: Brain,
    title: 'AI & Công nghệ Mới',
    titleEn: 'AI & Emerging Tech',
    duration: '4-6 phút',
    description: 'Khảo sát chiến lược và ứng dụng AI trong giáo dục.',
    keyQuestions: ['AI strategy status', 'Use cases đang triển khai', 'AI governance'],
    framework: 'Gartner AI Maturity Model'
  },
  {
    icon: Cloud,
    title: 'Hạ tầng & Đám mây',
    titleEn: 'Infrastructure & Cloud',
    duration: '5-8 phút',
    description: 'Đánh giá chiến lược datacenter, cloud adoption, và network infrastructure.',
    keyQuestions: ['Cloud providers', 'Workload distribution', 'DR capabilities'],
    framework: 'Cloud Maturity Model'
  },
  {
    icon: Shield,
    title: 'Bảo mật & Tuân thủ',
    titleEn: 'Security & Compliance',
    duration: '5-7 phút',
    description: 'Đánh giá Security Posture theo các framework chuẩn quốc tế.',
    keyQuestions: ['Security framework', 'Compliance standards', 'MFA implementation'],
    framework: 'NIST Cybersecurity Framework'
  },
  {
    icon: DollarSign,
    title: 'Phân tích Tài chính CNTT',
    titleEn: 'IT Financial Analysis',
    duration: '5-7 phút',
    description: 'Phân tích ngân sách CNTT, phân bổ chi phí, và các chỉ số tài chính.',
    keyQuestions: ['Total IT Budget', 'Cost per student/employee', 'CapEx vs OpEx'],
    framework: 'TBM (Technology Business Management)'
  },
  {
    icon: Layers,
    title: 'Số hóa & Trưởng thành Số',
    titleEn: 'Digital Maturity',
    duration: '6-10 phút',
    description: 'Đánh giá mức độ số hóa quy trình từ Manual đến Fully Automated.',
    keyQuestions: ['Process maturity ratings', 'Pain points', 'Quick wins'],
    framework: 'CMM (Capability Maturity Model)'
  }
];

export default function AboutPage() {
  const t = useTranslations();
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;

  const handleStartSurvey = () => {
    router.push(`/${locale}/survey?start=1`);
  };

  const totalMinTime = sectionData.reduce((sum, s) => sum + parseInt(s.duration.split('-')[0]), 0);
  const totalMaxTime = sectionData.reduce((sum, s) => sum + parseInt(s.duration.split('-')[1]), 0);

  return (
    <div className="min-h-screen bg-background-ivory">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary-darker text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Khảo sát Đánh giá Năng lực CNTT
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Dành cho Cơ sở Giáo dục
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Công cụ đánh giá toàn diện được thiết kế theo các phương pháp luận tư vấn hàng đầu thế giới, 
              giúp xác định hiện trạng và lộ trình chuyển đổi số cho tổ chức giáo dục của bạn.
            </p>
          </div>
        </div>
      </section>

      {/* What, Why, How Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* What */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <HelpCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary">Khảo sát là gì?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-3">
                <p>
                  Đây là công cụ <strong>đánh giá toàn diện năng lực CNTT</strong> được thiết kế 
                  dành riêng cho các cơ sở giáo dục tại Việt Nam.
                </p>
                <p>
                  Khảo sát bao gồm <strong>11 phần</strong>, từ thông tin tổ chức đến mức độ 
                  trưởng thành số, giúp tạo bức tranh tổng thể về hiện trạng CNTT.
                </p>
              </CardContent>
            </Card>

            {/* Why */}
            <Card className="border-l-4 border-l-amber-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-50 rounded-lg">
                    <Target className="h-6 w-6 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl text-amber-700">Tại sao cần tham gia?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-3">
                <p>
                  <strong>Xác định hiện trạng:</strong> Hiểu rõ vị trí của tổ chức trên bản đồ 
                  trưởng thành số so với các cơ sở tương đương.
                </p>
                <p>
                  <strong>Phát hiện gaps:</strong> Nhận diện các điểm yếu và cơ hội cải thiện 
                  trong hệ thống CNTT.
                </p>
                <p>
                  <strong>Lập lộ trình:</strong> Cơ sở để xây dựng chiến lược và roadmap 
                  chuyển đổi số phù hợp.
                </p>
              </CardContent>
            </Card>

            {/* How */}
            <Card className="border-l-4 border-l-emerald-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl text-emerald-700">Làm thế nào?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-3">
                <p>
                  <strong>Đơn giản:</strong> Trả lời các câu hỏi theo từng phần, có thể lưu 
                  tiến độ và quay lại sau.
                </p>
                <p>
                  <strong>Hỗ trợ:</strong> Mỗi câu hỏi đều có tooltips giải thích chi tiết 
                  giúp bạn hiểu và trả lời chính xác.
                </p>
                <p>
                  <strong>Dữ liệu mẫu:</strong> Có thể tạo dữ liệu mẫu để tham khảo cách 
                  điền thông tin.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 bg-background-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-8">
            Giá trị mang lại
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Đánh giá Toàn diện</h3>
              <p className="text-sm text-gray-600">
                Bao quát tất cả khía cạnh của CNTT từ tổ chức, quy trình đến công nghệ
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Benchmark</h3>
              <p className="text-sm text-gray-600">
                So sánh với tiêu chuẩn ngành và các cơ sở giáo dục tương đương
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-4">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Actionable Insights</h3>
              <p className="text-sm text-gray-600">
                Xác định quick wins và các ưu tiên đầu tư cho roadmap
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 mb-4">
                <CheckCircle2 className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Best Practices</h3>
              <p className="text-sm text-gray-600">
                Áp dụng các framework quốc tế như ITIL, COBIT, NIST, CMM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Time Estimation Banner */}
      <section className="py-8 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Clock className="h-10 w-10" />
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold">Thời gian hoàn thành ước tính</h3>
              <p className="text-white/80">
                <strong>{totalMinTime}-{totalMaxTime} phút</strong> cho toàn bộ khảo sát 
                (có thể lưu và tiếp tục sau)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Details */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-4">
            Chi tiết 11 Phần Khảo sát
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Mỗi phần được thiết kế theo các framework tư vấn chuẩn quốc tế, 
            đảm bảo tính toàn diện và khả năng so sánh benchmark.
          </p>

          <div className="space-y-4">
            {sectionData.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    {/* Left: Number and Icon */}
                    <div className="flex items-center gap-4 p-4 bg-gray-50 md:w-64 md:flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                        {index + 1}
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{section.title}</p>
                          <p className="text-xs text-gray-500">{section.titleEn}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 p-4">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                          <Clock className="h-3 w-3" />
                          {section.duration}
                        </span>
                        <span className="inline-flex items-center px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">
                          {section.framework}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{section.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {section.keyQuestions.map((q, i) => (
                          <span key={i} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            • {q}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-12 bg-background-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-8">
            Phương pháp luận
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-4">
                  Frameworks Quốc tế được Áp dụng
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>ITIL 4</strong> - IT Service Management best practices
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>COBIT</strong> - IT Governance framework
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>NIST Cybersecurity</strong> - Security & Risk management
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>DAMA-DMBOK</strong> - Data Management framework
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>CMM</strong> - Capability Maturity Model
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-4">
                  Nguồn Benchmark
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>EDUCAUSE</strong> - Higher Education IT benchmarks (US)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Gartner</strong> - IT spending & maturity benchmarks
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>TBM Council</strong> - Technology Business Management
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>JISC</strong> - UK Higher Education IT data
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-8">
            Hướng dẫn Hoàn thành Khảo sát
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Trước khi bắt đầu
              </h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• Chuẩn bị thông tin về ngân sách CNTT năm gần nhất</li>
                <li>• Danh sách các hệ thống/ứng dụng đang sử dụng</li>
                <li>• Số liệu về nhân sự CNTT (FTE)</li>
                <li>• Thông tin về các vendors và hợp đồng</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Trong quá trình điền
              </h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• Dữ liệu tự động lưu mỗi 30 giây</li>
                <li>• Có thể thoát và quay lại bất cứ lúc nào</li>
                <li>• Sử dụng tooltips (?) để hiểu rõ câu hỏi</li>
                <li>• Dùng &quot;Tạo dữ liệu mẫu&quot; để tham khảo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-dark to-primary-darker text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Sẵn sàng bắt đầu?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Hoàn thành khảo sát để có bức tranh tổng thể về năng lực CNTT 
            và nhận được insights hữu ích cho chiến lược chuyển đổi số.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleStartSurvey}
              className="bg-accent-gold text-primary-darker hover:bg-accent-gold/90 font-semibold px-8 py-6 text-lg"
            >
              Bắt đầu Khảo sát
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              onClick={() => router.push(`/${locale}`)}
              className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 hover:border-white font-semibold px-8 py-6 text-lg"
            >
              Quay về Trang chủ
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

