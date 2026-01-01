import { NextResponse } from 'next/server';
import { google } from 'googleapis';

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = 'Field Mapping';

// Field mapping data structure
interface FieldMapping {
  section: string;
  sectionVi: string;
  sectionEn: string;
  fieldName: string;
  dataType: string;
  required: boolean;
  descriptionVi: string;
  descriptionEn: string;
  example: string;
  notes: string;
}

// All field mappings
// Examples based on NHG - Tập đoàn Giáo dục Nguyễn Hoàng (https://nhg.vn/vi/thanh-vien)
const fieldMappings: FieldMapping[] = [
  // Section 0: Institution Profile
  { section: '0', sectionVi: 'Thông tin Cơ sở', sectionEn: 'Institution Profile', fieldName: 'institutionName', dataType: 'string', required: true, descriptionVi: 'Tên đầy đủ của cơ sở giáo dục', descriptionEn: 'Full name of the educational institution', example: 'Tập đoàn Giáo dục Nguyễn Hoàng (NHG)', notes: 'Unique identifier for the survey response' },
  { section: '0', sectionVi: 'Thông tin Cơ sở', sectionEn: 'Institution Profile', fieldName: 'institutionType1', dataType: 'enum', required: true, descriptionVi: 'Loại cơ sở cấp 1 (đại học/trường phổ thông)', descriptionEn: 'Level 1 institution type', example: 'university | school', notes: 'Determines if institutionType2 is required' },
  { section: '0', sectionVi: 'Thông tin Cơ sở', sectionEn: 'Institution Profile', fieldName: 'institutionType2', dataType: 'enum', required: true, descriptionVi: 'Loại hệ thống trường (chỉ khi type1=school)', descriptionEn: 'School system type (only when type1=school)', example: 'sna | uk_academy | ischool', notes: 'Conditionally required when institutionType1=school' },
  { section: '0', sectionVi: 'Thông tin Cơ sở', sectionEn: 'Institution Profile', fieldName: 'institutionType', dataType: 'enum', required: true, descriptionVi: 'Loại cơ sở học thuật', descriptionEn: 'Academic institution type', example: 'private_multi_campus', notes: 'Options: public_research, private_research, private_multi_campus, k12_international' },
  { section: '0', sectionVi: 'Thông tin Cơ sở', sectionEn: 'Institution Profile', fieldName: 'studentPopulation', dataType: 'number', required: true, descriptionVi: 'Tổng số sinh viên/học sinh', descriptionEn: 'Total student population', example: '65000', notes: 'Used for per-student cost calculations' },
  { section: '0', sectionVi: 'Thông tin Cơ sở', sectionEn: 'Institution Profile', fieldName: 'employeeCount', dataType: 'number', required: true, descriptionVi: 'Tổng số nhân viên', descriptionEn: 'Total employee count', example: '8500', notes: 'Includes all staff, not just IT' },
  { section: '0', sectionVi: 'Thông tin Cơ sở', sectionEn: 'Institution Profile', fieldName: 'facultyCount', dataType: 'number', required: true, descriptionVi: 'Số lượng giảng viên/giáo viên', descriptionEn: 'Faculty/teacher count', example: '4200', notes: '' },
  { section: '0', sectionVi: 'Thông tin Cơ sở', sectionEn: 'Institution Profile', fieldName: 'campusCount', dataType: 'number', required: false, descriptionVi: 'Số lượng cơ sở/campus', descriptionEn: 'Number of campuses', example: '35', notes: 'NHG has 35+ campuses (HIU, HSU, SNA, UK Academy, iSchool)' },
  { section: '0', sectionVi: 'Thông tin Cơ sở', sectionEn: 'Institution Profile', fieldName: 'contactName', dataType: 'string', required: true, descriptionVi: 'Tên người liên hệ', descriptionEn: 'Contact person name', example: 'Trần Minh Đức', notes: 'Primary survey respondent' },
  { section: '0', sectionVi: 'Thông tin Cơ sở', sectionEn: 'Institution Profile', fieldName: 'contactEmail', dataType: 'email', required: true, descriptionVi: 'Email liên hệ', descriptionEn: 'Contact email', example: 'it.director@nhg.vn', notes: 'Must be valid email format' },
  { section: '0', sectionVi: 'Thông tin Cơ sở', sectionEn: 'Institution Profile', fieldName: 'contactRole', dataType: 'string', required: true, descriptionVi: 'Chức vụ người liên hệ', descriptionEn: 'Contact role/title', example: 'Giám đốc CNTT', notes: '' },
  { section: '0', sectionVi: 'Thông tin Cơ sở', sectionEn: 'Institution Profile', fieldName: 'fiscalYear', dataType: 'string', required: true, descriptionVi: 'Năm tài chính tham chiếu', descriptionEn: 'Reference fiscal year', example: 'FY2024', notes: 'For budget data context' },

  // Section 1: IT Organization
  { section: '1', sectionVi: 'Tổ chức CNTT', sectionEn: 'IT Organization', fieldName: 'itReportingStructure', dataType: 'enum', required: true, descriptionVi: 'IT báo cáo cho ai', descriptionEn: 'IT reports to whom', example: 'president | cfo | provost | coo', notes: 'Options: president, provost, cfo, coo, other' },
  { section: '1', sectionVi: 'Tổ chức CNTT', sectionEn: 'IT Organization', fieldName: 'cioCtoTitle', dataType: 'string', required: true, descriptionVi: 'Chức danh lãnh đạo IT', descriptionEn: 'IT leader title', example: 'Giám đốc Công nghệ Thông tin (CIO)', notes: '' },
  { section: '1', sectionVi: 'Tổ chức CNTT', sectionEn: 'IT Organization', fieldName: 'itStaffCount', dataType: 'number', required: true, descriptionVi: 'Tổng số nhân viên IT', descriptionEn: 'Total IT staff count', example: '120', notes: 'FTE count for multi-campus group' },
  { section: '1', sectionVi: 'Tổ chức CNTT', sectionEn: 'IT Organization', fieldName: 'organizationalModel', dataType: 'enum', required: true, descriptionVi: 'Mô hình tổ chức IT', descriptionEn: 'IT organizational model', example: 'centralized | decentralized | hybrid', notes: '' },
  { section: '1', sectionVi: 'Tổ chức CNTT', sectionEn: 'IT Organization', fieldName: 'itFteBreakdown.leadership', dataType: 'number', required: false, descriptionVi: 'FTE - Lãnh đạo', descriptionEn: 'FTE - Leadership', example: '12', notes: '' },
  { section: '1', sectionVi: 'Tổ chức CNTT', sectionEn: 'IT Organization', fieldName: 'itFteBreakdown.infrastructure', dataType: 'number', required: false, descriptionVi: 'FTE - Hạ tầng', descriptionEn: 'FTE - Infrastructure', example: '25', notes: '' },
  { section: '1', sectionVi: 'Tổ chức CNTT', sectionEn: 'IT Organization', fieldName: 'itFteBreakdown.applications', dataType: 'number', required: false, descriptionVi: 'FTE - Ứng dụng', descriptionEn: 'FTE - Applications', example: '22', notes: '' },
  { section: '1', sectionVi: 'Tổ chức CNTT', sectionEn: 'IT Organization', fieldName: 'itFteBreakdown.security', dataType: 'number', required: false, descriptionVi: 'FTE - Bảo mật', descriptionEn: 'FTE - Security', example: '15', notes: '' },
  { section: '1', sectionVi: 'Tổ chức CNTT', sectionEn: 'IT Organization', fieldName: 'itFteBreakdown.servicedesk', dataType: 'number', required: false, descriptionVi: 'FTE - Service Desk', descriptionEn: 'FTE - Service Desk', example: '28', notes: '' },
  { section: '1', sectionVi: 'Tổ chức CNTT', sectionEn: 'IT Organization', fieldName: 'itFteBreakdown.projectmgmt', dataType: 'number', required: false, descriptionVi: 'FTE - Quản lý dự án', descriptionEn: 'FTE - Project Management', example: '8', notes: '' },
  { section: '1', sectionVi: 'Tổ chức CNTT', sectionEn: 'IT Organization', fieldName: 'itFteBreakdown.data', dataType: 'number', required: false, descriptionVi: 'FTE - Dữ liệu/Phân tích', descriptionEn: 'FTE - Data/Analytics', example: '10', notes: '' },
  { section: '1', sectionVi: 'Tổ chức CNTT', sectionEn: 'IT Organization', fieldName: 'itFteBreakdown.network', dataType: 'number', required: false, descriptionVi: 'FTE - Mạng', descriptionEn: 'FTE - Network', example: '12', notes: '' },
  { section: '1', sectionVi: 'Tổ chức CNTT', sectionEn: 'IT Organization', fieldName: 'itFteBreakdown.other', dataType: 'number', required: false, descriptionVi: 'FTE - Khác', descriptionEn: 'FTE - Other', example: '8', notes: '' },

  // Section 2: IT Processes
  { section: '2', sectionVi: 'Quy trình CNTT', sectionEn: 'IT Processes', fieldName: 'itilMaturity', dataType: 'enum', required: true, descriptionVi: 'Mức độ trưởng thành ITIL', descriptionEn: 'ITIL maturity level', example: '1-5', notes: '1=Initial, 5=Optimized' },
  { section: '2', sectionVi: 'Quy trình CNTT', sectionEn: 'IT Processes', fieldName: 'serviceDesk.tool', dataType: 'string', required: true, descriptionVi: 'Công cụ ITSM/Service Desk', descriptionEn: 'ITSM/Service Desk tool', example: 'ServiceNow, Jira SM', notes: '' },
  { section: '2', sectionVi: 'Quy trình CNTT', sectionEn: 'IT Processes', fieldName: 'serviceDesk.monthlyTickets', dataType: 'number', required: false, descriptionVi: 'Số ticket trung bình/tháng', descriptionEn: 'Average monthly tickets', example: '2500', notes: '' },
  { section: '2', sectionVi: 'Quy trình CNTT', sectionEn: 'IT Processes', fieldName: 'serviceDesk.fcr', dataType: 'number', required: false, descriptionVi: 'Tỷ lệ giải quyết lần đầu (%)', descriptionEn: 'First Contact Resolution (%)', example: '75', notes: '' },
  { section: '2', sectionVi: 'Quy trình CNTT', sectionEn: 'IT Processes', fieldName: 'serviceDesk.resolutionTime', dataType: 'number', required: false, descriptionVi: 'Thời gian giải quyết TB (giờ)', descriptionEn: 'Avg resolution time (hours)', example: '24', notes: '' },
  { section: '2', sectionVi: 'Quy trình CNTT', sectionEn: 'IT Processes', fieldName: 'changeManagement.cabFrequency', dataType: 'enum', required: true, descriptionVi: 'Tần suất họp CAB', descriptionEn: 'CAB meeting frequency', example: 'weekly | biweekly | monthly', notes: '' },
  { section: '2', sectionVi: 'Quy trình CNTT', sectionEn: 'IT Processes', fieldName: 'changeManagement.successRate', dataType: 'number', required: false, descriptionVi: 'Tỷ lệ thay đổi thành công (%)', descriptionEn: 'Change success rate (%)', example: '95', notes: '' },
  { section: '2', sectionVi: 'Quy trình CNTT', sectionEn: 'IT Processes', fieldName: 'incidentManagement.mttr', dataType: 'number', required: false, descriptionVi: 'Thời gian khôi phục TB (giờ)', descriptionEn: 'Mean Time to Restore (hours)', example: '4', notes: '' },
  { section: '2', sectionVi: 'Quy trình CNTT', sectionEn: 'IT Processes', fieldName: 'assetManagement.tool', dataType: 'string', required: false, descriptionVi: 'Công cụ quản lý tài sản', descriptionEn: 'Asset management tool', example: 'ServiceNow ITAM', notes: '' },
  { section: '2', sectionVi: 'Quy trình CNTT', sectionEn: 'IT Processes', fieldName: 'assetManagement.cmdbAccuracy', dataType: 'number', required: false, descriptionVi: 'Độ chính xác CMDB (%)', descriptionEn: 'CMDB accuracy (%)', example: '85', notes: '' },

  // Section 3: Applications Portfolio
  { section: '3', sectionVi: 'Danh mục Ứng dụng', sectionEn: 'Applications Portfolio', fieldName: 'sis.vendor', dataType: 'string', required: true, descriptionVi: 'Nhà cung cấp hệ thống SIS', descriptionEn: 'SIS vendor/product', example: 'Ellucian Banner', notes: '' },
  { section: '3', sectionVi: 'Danh mục Ứng dụng', sectionEn: 'Applications Portfolio', fieldName: 'sis.hosting', dataType: 'enum', required: true, descriptionVi: 'Hình thức triển khai SIS', descriptionEn: 'SIS hosting model', example: 'on_premise | cloud_saas | hosted | hybrid', notes: '' },
  { section: '3', sectionVi: 'Danh mục Ứng dụng', sectionEn: 'Applications Portfolio', fieldName: 'sis.integration', dataType: 'string', required: false, descriptionVi: 'Phương thức tích hợp SIS', descriptionEn: 'SIS integration method', example: 'API, ETL', notes: '' },
  { section: '3', sectionVi: 'Danh mục Ứng dụng', sectionEn: 'Applications Portfolio', fieldName: 'lms.vendor', dataType: 'string', required: true, descriptionVi: 'Nhà cung cấp hệ thống LMS', descriptionEn: 'LMS vendor/product', example: 'Canvas, Moodle', notes: '' },
  { section: '3', sectionVi: 'Danh mục Ứng dụng', sectionEn: 'Applications Portfolio', fieldName: 'lms.hosting', dataType: 'enum', required: true, descriptionVi: 'Hình thức triển khai LMS', descriptionEn: 'LMS hosting model', example: 'on_premise | cloud_saas | hosted', notes: '' },
  { section: '3', sectionVi: 'Danh mục Ứng dụng', sectionEn: 'Applications Portfolio', fieldName: 'lms.users', dataType: 'number', required: false, descriptionVi: 'Số người dùng LMS', descriptionEn: 'LMS active users', example: '15000', notes: '' },
  { section: '3', sectionVi: 'Danh mục Ứng dụng', sectionEn: 'Applications Portfolio', fieldName: 'erp.vendor', dataType: 'string', required: true, descriptionVi: 'Nhà cung cấp hệ thống ERP', descriptionEn: 'ERP vendor/product', example: 'Workday, SAP', notes: '' },
  { section: '3', sectionVi: 'Danh mục Ứng dụng', sectionEn: 'Applications Portfolio', fieldName: 'erp.hosting', dataType: 'enum', required: true, descriptionVi: 'Hình thức triển khai ERP', descriptionEn: 'ERP hosting model', example: 'on_premise | cloud_saas | hosted | hybrid', notes: '' },
  { section: '3', sectionVi: 'Danh mục Ứng dụng', sectionEn: 'Applications Portfolio', fieldName: 'crm.vendor', dataType: 'string', required: false, descriptionVi: 'Nhà cung cấp hệ thống CRM', descriptionEn: 'CRM vendor/product', example: 'Salesforce Education Cloud', notes: '' },
  { section: '3', sectionVi: 'Danh mục Ứng dụng', sectionEn: 'Applications Portfolio', fieldName: 'crm.purpose', dataType: 'enum', required: false, descriptionVi: 'Mục đích chính của CRM', descriptionEn: 'Primary CRM purpose', example: 'comprehensive', notes: 'Options: recruitment, retention, alumni, advancement, comprehensive' },
  { section: '3', sectionVi: 'Danh mục Ứng dụng', sectionEn: 'Applications Portfolio', fieldName: 'crm.users', dataType: 'number', required: false, descriptionVi: 'Số người dùng CRM', descriptionEn: 'CRM active users', example: '120', notes: '' },
  { section: '3', sectionVi: 'Danh mục Ứng dụng', sectionEn: 'Applications Portfolio', fieldName: 'totalApplications', dataType: 'number', required: true, descriptionVi: 'Tổng số ứng dụng', descriptionEn: 'Total applications count', example: '145', notes: '' },
  { section: '3', sectionVi: 'Danh mục Ứng dụng', sectionEn: 'Applications Portfolio', fieldName: 'integrationPlatform', dataType: 'string', required: false, descriptionVi: 'Nền tảng tích hợp', descriptionEn: 'Integration platform', example: 'MuleSoft Anypoint', notes: '' },
  { section: '3', sectionVi: 'Danh mục Ứng dụng', sectionEn: 'Applications Portfolio', fieldName: 'ssoProvider', dataType: 'string', required: false, descriptionVi: 'Nhà cung cấp SSO', descriptionEn: 'SSO provider', example: 'Azure Active Directory', notes: '' },

  // Section 4: Process Mapping
  { section: '4', sectionVi: 'Ma trận Ánh xạ', sectionEn: 'Process Mapping', fieldName: 'processSystemMappings', dataType: 'array', required: false, descriptionVi: 'Ánh xạ quy trình-hệ thống', descriptionEn: 'Process-system mappings', example: '[{process: "admissions", primarySystem: "CRM", supportingSystems: "SIS", dataFlow: "CRM → SIS"}]', notes: '12 processes: recruitment, admissions, registration, courseDelivery, gradeManagement, financialAid, billing, degreeAudit, advising, retention, graduation, alumni' },
  { section: '4', sectionVi: 'Ma trận Ánh xạ', sectionEn: 'Process Mapping', fieldName: 'processSystemMappings.primarySystem', dataType: 'enum', required: false, descriptionVi: 'Hệ thống chính', descriptionEn: 'Primary system', example: 'CRM | SIS | LMS | ERP | BI | Other', notes: 'Select one system per process' },
  { section: '4', sectionVi: 'Ma trận Ánh xạ', sectionEn: 'Process Mapping', fieldName: 'processSystemMappings.supportingSystems', dataType: 'string', required: false, descriptionVi: 'Hệ thống hỗ trợ', descriptionEn: 'Supporting systems', example: 'DocuSign, Zoom, Portal', notes: 'Free text' },
  { section: '4', sectionVi: 'Ma trận Ánh xạ', sectionEn: 'Process Mapping', fieldName: 'processSystemMappings.dataFlow', dataType: 'string', required: false, descriptionVi: 'Mô tả luồng dữ liệu', descriptionEn: 'Data flow description', example: 'Web → CRM → SIS', notes: 'Free text' },
  { section: '4', sectionVi: 'Ma trận Ánh xạ', sectionEn: 'Process Mapping', fieldName: 'integrationChallenges', dataType: 'text', required: false, descriptionVi: 'Thách thức tích hợp', descriptionEn: 'Integration challenges', example: 'Data synchronization delays between SIS and LMS', notes: '' },
  { section: '4', sectionVi: 'Ma trận Ánh xạ', sectionEn: 'Process Mapping', fieldName: 'integrationGaps', dataType: 'array', required: false, descriptionVi: 'Khoảng cách tích hợp', descriptionEn: 'Integration gaps', example: 'sisLms, crmSis, biAll, manualReconciliation', notes: 'Options: sisLms, lmsSis, sisErp, crmSis, biAll, noSso, manualReconciliation' },
  { section: '4', sectionVi: 'Ma trận Ánh xạ', sectionEn: 'Process Mapping', fieldName: 'integrationMaturityLevel', dataType: 'enum', required: false, descriptionVi: 'Mức độ trưởng thành tích hợp', descriptionEn: 'Integration maturity level', example: '3', notes: 'Options: 1 (Ad-hoc), 2 (Repeatable), 3 (Defined), 4 (Managed), 5 (Optimized)' },
  { section: '4', sectionVi: 'Ma trận Ánh xạ', sectionEn: 'Process Mapping', fieldName: 'activeIntegrations', dataType: 'number', required: false, descriptionVi: 'Số tích hợp đang hoạt động', descriptionEn: 'Number of active integrations', example: '78', notes: '' },

  // Section 5: Data Analytics
  { section: '5', sectionVi: 'Dữ liệu & Phân tích', sectionEn: 'Data Analytics', fieldName: 'dataWarehouse.platform', dataType: 'string', required: false, descriptionVi: 'Nền tảng Data Warehouse', descriptionEn: 'Data warehouse platform', example: 'Snowflake', notes: '' },
  { section: '5', sectionVi: 'Dữ liệu & Phân tích', sectionEn: 'Data Analytics', fieldName: 'dataWarehouse.status', dataType: 'enum', required: false, descriptionVi: 'Trạng thái Data Warehouse', descriptionEn: 'Data warehouse status', example: 'production | pilot | planning | none', notes: '' },
  { section: '5', sectionVi: 'Dữ liệu & Phân tích', sectionEn: 'Data Analytics', fieldName: 'dataWarehouse.coverage', dataType: 'number', required: false, descriptionVi: 'Phạm vi bao phủ (%)', descriptionEn: 'Data coverage (%)', example: '75', notes: '' },
  { section: '5', sectionVi: 'Dữ liệu & Phân tích', sectionEn: 'Data Analytics', fieldName: 'biTool', dataType: 'string', required: true, descriptionVi: 'Công cụ BI', descriptionEn: 'BI tool', example: 'Tableau Server', notes: '' },
  { section: '5', sectionVi: 'Dữ liệu & Phân tích', sectionEn: 'Data Analytics', fieldName: 'dataGovernance', dataType: 'enum', required: false, descriptionVi: 'Mức độ quản trị dữ liệu', descriptionEn: 'Data governance level', example: 'formal', notes: 'Options: formal, informal, developing, none' },
  { section: '5', sectionVi: 'Dữ liệu & Phân tích', sectionEn: 'Data Analytics', fieldName: 'dataLake', dataType: 'enum', required: false, descriptionVi: 'Trạng thái Data Lake', descriptionEn: 'Data lake status', example: 'pilot', notes: 'Options: production, pilot, planned, none' },
  { section: '5', sectionVi: 'Dữ liệu & Phân tích', sectionEn: 'Data Analytics', fieldName: 'masterData', dataType: 'text', required: false, descriptionVi: 'Quản lý dữ liệu chủ (MDM)', descriptionEn: 'Master Data Management', example: 'Student: SIS, Employee: Workday, Finance: ERP', notes: 'Describe MDM approach and systems for each domain' },
  { section: '5', sectionVi: 'Dữ liệu & Phân tích', sectionEn: 'Data Analytics', fieldName: 'dataQualityScore', dataType: 'number', required: false, descriptionVi: 'Điểm chất lượng dữ liệu (1-100)', descriptionEn: 'Data quality score (1-100)', example: '78', notes: '' },

  // Section 6: AI Technology
  { section: '6', sectionVi: 'AI & Công nghệ Mới', sectionEn: 'AI Technology', fieldName: 'aiStrategy', dataType: 'enum', required: true, descriptionVi: 'Trạng thái chiến lược AI', descriptionEn: 'AI strategy status', example: 'developing', notes: 'Options: no_strategy, exploring, developing, implemented, mature' },
  { section: '6', sectionVi: 'AI & Công nghệ Mới', sectionEn: 'AI Technology', fieldName: 'aiSpending', dataType: 'string', required: false, descriptionVi: 'Chi phí AI hàng năm', descriptionEn: 'Annual AI spending', example: '$250,000', notes: '' },
  { section: '6', sectionVi: 'AI & Công nghệ Mới', sectionEn: 'AI Technology', fieldName: 'aiUseCases', dataType: 'array', required: false, descriptionVi: 'Các use case AI', descriptionEn: 'AI use cases', example: 'Chatbots & Virtual Assistants, Predictive Analytics, Student Success Prediction', notes: 'Checkbox options from UI' },
  { section: '6', sectionVi: 'AI & Công nghệ Mới', sectionEn: 'AI Technology', fieldName: 'aiPlatforms', dataType: 'string', required: false, descriptionVi: 'Nền tảng AI', descriptionEn: 'AI platforms', example: 'Microsoft Azure AI, OpenAI API, Google Vertex AI', notes: '' },
  { section: '6', sectionVi: 'AI & Công nghệ Mới', sectionEn: 'AI Technology', fieldName: 'aiGovernance', dataType: 'enum', required: false, descriptionVi: 'Framework quản trị AI', descriptionEn: 'AI governance framework', example: 'developing', notes: 'Options: none, informal, developing, formal, mature' },
  { section: '6', sectionVi: 'AI & Công nghệ Mới', sectionEn: 'AI Technology', fieldName: 'aiInitiatives', dataType: 'text', required: false, descriptionVi: 'Sáng kiến & thách thức AI', descriptionEn: 'AI initiatives & challenges', example: 'Piloting AI chatbot for student services. Challenges include data quality and faculty adoption.', notes: 'Free text describing current AI initiatives and challenges' },

  // Section 7: Infrastructure
  { section: '7', sectionVi: 'Hạ tầng & Đám mây', sectionEn: 'Infrastructure', fieldName: 'datacenterStrategy', dataType: 'enum', required: true, descriptionVi: 'Chiến lược datacenter', descriptionEn: 'Datacenter strategy', example: 'hybrid', notes: 'Options: on_premise, colocation, cloud_first, hybrid, cloud_only' },
  { section: '7', sectionVi: 'Hạ tầng & Đám mây', sectionEn: 'Infrastructure', fieldName: 'cloudAdoption.providers', dataType: 'array', required: false, descriptionVi: 'Nhà cung cấp cloud', descriptionEn: 'Cloud providers', example: 'AWS, Microsoft Azure, Google Cloud', notes: 'Exact checkbox labels' },
  { section: '7', sectionVi: 'Hạ tầng & Đám mây', sectionEn: 'Infrastructure', fieldName: 'cloudAdoption.spend', dataType: 'string', required: false, descriptionVi: 'Chi phí cloud hàng năm', descriptionEn: 'Annual cloud spend', example: '$1,200,000', notes: '' },
  { section: '7', sectionVi: 'Hạ tầng & Đám mây', sectionEn: 'Infrastructure', fieldName: 'cloudAdoption.workloadPercent', dataType: 'number', required: false, descriptionVi: '% workload trên cloud', descriptionEn: '% workloads on cloud', example: '55', notes: '' },
  { section: '7', sectionVi: 'Hạ tầng & Đám mây', sectionEn: 'Infrastructure', fieldName: 'networkInfra.vendor', dataType: 'string', required: false, descriptionVi: 'Nhà cung cấp mạng lõi', descriptionEn: 'Core network vendor', example: 'Cisco', notes: '' },
  { section: '7', sectionVi: 'Hạ tầng & Đám mây', sectionEn: 'Infrastructure', fieldName: 'networkInfra.bandwidth', dataType: 'number', required: false, descriptionVi: 'Băng thông internet (Gbps)', descriptionEn: 'Internet bandwidth (Gbps)', example: '10', notes: 'Numeric value in Gbps' },
  { section: '7', sectionVi: 'Hạ tầng & Đám mây', sectionEn: 'Infrastructure', fieldName: 'networkInfra.wifi', dataType: 'enum', required: false, descriptionVi: 'Chuẩn Wi-Fi', descriptionEn: 'Wi-Fi standard', example: 'wifi6', notes: 'Options: wifi6e, wifi6, wifi5, mixed' },
  { section: '7', sectionVi: 'Hạ tầng & Đám mây', sectionEn: 'Infrastructure', fieldName: 'networkInfra.sdwan', dataType: 'enum', required: false, descriptionVi: 'Triển khai SD-WAN', descriptionEn: 'SD-WAN deployment', example: 'deployed', notes: 'Options: deployed, partial, planned, none' },
  { section: '7', sectionVi: 'Hạ tầng & Đám mây', sectionEn: 'Infrastructure', fieldName: 'virtualizationPlatform', dataType: 'string', required: false, descriptionVi: 'Nền tảng ảo hóa', descriptionEn: 'Virtualization platform', example: 'VMware vSphere 8', notes: '' },
  { section: '7', sectionVi: 'Hạ tầng & Đám mây', sectionEn: 'Infrastructure', fieldName: 'backupSolution', dataType: 'string', required: false, descriptionVi: 'Giải pháp backup', descriptionEn: 'Backup solution', example: 'Veeam Backup & Replication', notes: '' },
  { section: '7', sectionVi: 'Hạ tầng & Đám mây', sectionEn: 'Infrastructure', fieldName: 'drSite', dataType: 'string', required: false, descriptionVi: 'Site DR', descriptionEn: 'DR site', example: 'Azure Site Recovery', notes: '' },

  // Section 8: Security
  { section: '8', sectionVi: 'Bảo mật & Tuân thủ', sectionEn: 'Security', fieldName: 'securityFramework', dataType: 'enum', required: true, descriptionVi: 'Framework bảo mật', descriptionEn: 'Security framework', example: 'nist', notes: 'Options: nist, iso27001, cis, custom, none' },
  { section: '8', sectionVi: 'Bảo mật & Tuân thủ', sectionEn: 'Security', fieldName: 'securityReporting', dataType: 'enum', required: false, descriptionVi: 'Bảo mật báo cáo cho ai', descriptionEn: 'Security reports to', example: 'cio', notes: 'Options: cio, president, cfo, legal, other' },
  { section: '8', sectionVi: 'Bảo mật & Tuân thủ', sectionEn: 'Security', fieldName: 'complianceStandards', dataType: 'array', required: false, descriptionVi: 'Yêu cầu tuân thủ', descriptionEn: 'Compliance requirements', example: 'FERPA, GDPR, SOC 2, PCI DSS', notes: 'Exact checkbox labels' },
  { section: '8', sectionVi: 'Bảo mật & Tuân thủ', sectionEn: 'Security', fieldName: 'securityTools.endpoint', dataType: 'string', required: false, descriptionVi: 'Công cụ bảo vệ endpoint', descriptionEn: 'Endpoint protection tool', example: 'CrowdStrike Falcon', notes: '' },
  { section: '8', sectionVi: 'Bảo mật & Tuân thủ', sectionEn: 'Security', fieldName: 'securityTools.siem', dataType: 'string', required: false, descriptionVi: 'Công cụ SIEM', descriptionEn: 'SIEM tool', example: 'Microsoft Sentinel', notes: '' },
  { section: '8', sectionVi: 'Bảo mật & Tuân thủ', sectionEn: 'Security', fieldName: 'securityTools.iam', dataType: 'string', required: false, descriptionVi: 'Công cụ IAM', descriptionEn: 'IAM tool', example: 'Azure AD Premium P2', notes: '' },
  { section: '8', sectionVi: 'Bảo mật & Tuân thủ', sectionEn: 'Security', fieldName: 'securityTools.firewall', dataType: 'string', required: false, descriptionVi: 'Công cụ Firewall', descriptionEn: 'Firewall tool', example: 'Palo Alto Networks', notes: '' },
  { section: '8', sectionVi: 'Bảo mật & Tuân thủ', sectionEn: 'Security', fieldName: 'mfaImplementation', dataType: 'enum', required: false, descriptionVi: 'Triển khai MFA', descriptionEn: 'MFA implementation', example: 'universal', notes: 'Options: universal, staff, selective, pilot, none' },
  { section: '8', sectionVi: 'Bảo mật & Tuân thủ', sectionEn: 'Security', fieldName: 'securityTraining', dataType: 'enum', required: false, descriptionVi: 'Đào tạo nhận thức bảo mật', descriptionEn: 'Security awareness training', example: 'annual_mandatory', notes: 'Options: annual_mandatory, quarterly, ad_hoc, none' },
  { section: '8', sectionVi: 'Bảo mật & Tuân thủ', sectionEn: 'Security', fieldName: 'lastSecurityAudit', dataType: 'string', required: false, descriptionVi: 'Ngày kiểm toán bảo mật gần nhất', descriptionEn: 'Last security audit date', example: 'June 2024', notes: '' },
  { section: '8', sectionVi: 'Bảo mật & Tuân thủ', sectionEn: 'Security', fieldName: 'securityIncidents', dataType: 'number', required: false, descriptionVi: 'Số sự cố bảo mật (12 tháng qua)', descriptionEn: 'Security incidents (last 12 months)', example: '3', notes: '' },

  // Section 9: Financial
  { section: '9', sectionVi: 'Phân tích Tài chính', sectionEn: 'Financial', fieldName: 'totalItBudget', dataType: 'string', required: true, descriptionVi: 'Tổng ngân sách IT', descriptionEn: 'Total IT budget', example: '$18,500,000', notes: '' },
  { section: '9', sectionVi: 'Phân tích Tài chính', sectionEn: 'Financial', fieldName: 'budgetBreakdown.personnel', dataType: 'string', required: false, descriptionVi: 'Chi phí nhân sự (%)', descriptionEn: 'Personnel costs (%)', example: '38', notes: 'Percentage of total budget' },
  { section: '9', sectionVi: 'Phân tích Tài chính', sectionEn: 'Financial', fieldName: 'budgetBreakdown.hardware', dataType: 'string', required: false, descriptionVi: 'Chi phí phần cứng (%)', descriptionEn: 'Hardware costs (%)', example: '12', notes: '' },
  { section: '9', sectionVi: 'Phân tích Tài chính', sectionEn: 'Financial', fieldName: 'budgetBreakdown.software', dataType: 'string', required: false, descriptionVi: 'Chi phí phần mềm (%)', descriptionEn: 'Software costs (%)', example: '22', notes: '' },
  { section: '9', sectionVi: 'Phân tích Tài chính', sectionEn: 'Financial', fieldName: 'budgetBreakdown.cloud', dataType: 'string', required: false, descriptionVi: 'Chi phí cloud (%)', descriptionEn: 'Cloud costs (%)', example: '15', notes: '' },
  { section: '9', sectionVi: 'Phân tích Tài chính', sectionEn: 'Financial', fieldName: 'budgetBreakdown.telecom', dataType: 'string', required: false, descriptionVi: 'Chi phí viễn thông (%)', descriptionEn: 'Telecom costs (%)', example: '5', notes: '' },
  { section: '9', sectionVi: 'Phân tích Tài chính', sectionEn: 'Financial', fieldName: 'budgetBreakdown.security', dataType: 'string', required: false, descriptionVi: 'Chi phí bảo mật (%)', descriptionEn: 'Security costs (%)', example: '8', notes: '' },
  { section: '9', sectionVi: 'Phân tích Tài chính', sectionEn: 'Financial', fieldName: 'budgetBreakdown.projects', dataType: 'string', required: false, descriptionVi: 'Chi phí dự án (%)', descriptionEn: 'Project costs (%)', example: '10', notes: '' },
  { section: '9', sectionVi: 'Phân tích Tài chính', sectionEn: 'Financial', fieldName: 'budgetBreakdown.support', dataType: 'string', required: false, descriptionVi: 'Chi phí hỗ trợ (%)', descriptionEn: 'Support costs (%)', example: '6', notes: '' },
  { section: '9', sectionVi: 'Phân tích Tài chính', sectionEn: 'Financial', fieldName: 'budgetBreakdown.training', dataType: 'string', required: false, descriptionVi: 'Chi phí đào tạo (%)', descriptionEn: 'Training costs (%)', example: '2', notes: '' },
  { section: '9', sectionVi: 'Phân tích Tài chính', sectionEn: 'Financial', fieldName: 'budgetBreakdown.other', dataType: 'string', required: false, descriptionVi: 'Chi phí khác (%)', descriptionEn: 'Other costs (%)', example: '2', notes: '' },
  { section: '9', sectionVi: 'Phân tích Tài chính', sectionEn: 'Financial', fieldName: 'itBudgetPercent', dataType: 'number', required: false, descriptionVi: '% ngân sách tổ chức cho IT', descriptionEn: 'IT % of org budget', example: '5.2', notes: '' },
  { section: '9', sectionVi: 'Phân tích Tài chính', sectionEn: 'Financial', fieldName: 'costPerStudent', dataType: 'number', required: false, descriptionVi: 'Chi phí IT/sinh viên (USD)', descriptionEn: 'IT cost per student (USD)', example: '528', notes: 'Numeric value without currency symbol' },
  { section: '9', sectionVi: 'Phân tích Tài chính', sectionEn: 'Financial', fieldName: 'costPerEmployee', dataType: 'number', required: false, descriptionVi: 'Chi phí IT/nhân viên (USD)', descriptionEn: 'IT cost per employee (USD)', example: '4111', notes: 'Numeric value without currency symbol' },
  { section: '9', sectionVi: 'Phân tích Tài chính', sectionEn: 'Financial', fieldName: 'capexOpexRatio', dataType: 'string', required: false, descriptionVi: 'Tỷ lệ CapEx/OpEx', descriptionEn: 'CapEx/OpEx ratio', example: '35:65', notes: '' },

  // Section 10: Digitization (Optional)
  { section: '10', sectionVi: 'Số hóa Quy trình', sectionEn: 'Digitization', fieldName: 'processMaturity.admissions', dataType: 'enum', required: false, descriptionVi: 'Mức độ số hóa - Tuyển sinh', descriptionEn: 'Digitization - Admissions', example: '1-5', notes: '1=Manual, 5=Fully Automated' },
  { section: '10', sectionVi: 'Số hóa Quy trình', sectionEn: 'Digitization', fieldName: 'processMaturity.enrollment', dataType: 'enum', required: false, descriptionVi: 'Mức độ số hóa - Đăng ký', descriptionEn: 'Digitization - Enrollment', example: '1-5', notes: '' },
  { section: '10', sectionVi: 'Số hóa Quy trình', sectionEn: 'Digitization', fieldName: 'processMaturity.finance', dataType: 'enum', required: false, descriptionVi: 'Mức độ số hóa - Tài chính', descriptionEn: 'Digitization - Finance', example: '1-5', notes: '' },
  { section: '10', sectionVi: 'Số hóa Quy trình', sectionEn: 'Digitization', fieldName: 'processMaturity.hr', dataType: 'enum', required: false, descriptionVi: 'Mức độ số hóa - Nhân sự', descriptionEn: 'Digitization - HR', example: '1-5', notes: '' },
  { section: '10', sectionVi: 'Số hóa Quy trình', sectionEn: 'Digitization', fieldName: 'processDigitizationScore', dataType: 'number', required: false, descriptionVi: 'Điểm số hóa tổng thể', descriptionEn: 'Overall digitization score', example: '3.5', notes: '' },
  { section: '10', sectionVi: 'Số hóa Quy trình', sectionEn: 'Digitization', fieldName: 'painPoints', dataType: 'text', required: false, descriptionVi: 'Các điểm đau chính', descriptionEn: 'Main pain points', example: 'Manual data entry, System silos', notes: '' },
];

function createAuth() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!clientEmail || !privateKey) {
    return null;
  }

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

/**
 * POST /api/survey/field-mapping - Create Field Mapping sheet
 */
export async function POST() {
  try {
    const auth = createAuth();
    if (!auth || !SPREADSHEET_ID) {
      return NextResponse.json(
        { success: false, error: 'Google Sheets not configured' },
        { status: 500 }
      );
    }

    const sheets = google.sheets({ version: 'v4', auth });

    // Check if sheet exists
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID,
    });

    const existingSheet = spreadsheet.data.sheets?.find(
      (s) => s.properties?.title === SHEET_NAME
    );

    if (existingSheet) {
      // Delete existing sheet
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: {
          requests: [
            {
              deleteSheet: {
                sheetId: existingSheet.properties?.sheetId,
              },
            },
          ],
        },
      });
    }

    // Create new sheet
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: SHEET_NAME,
              },
            },
          },
        ],
      },
    });

    // Prepare data
    const headers = [
      'Section #',
      'Section (VI)',
      'Section (EN)',
      'Field Name',
      'Data Type',
      'Required',
      'Description (VI)',
      'Description (EN)',
      'Example',
      'Notes',
    ];

    const rows = fieldMappings.map((f) => [
      f.section,
      f.sectionVi,
      f.sectionEn,
      f.fieldName,
      f.dataType,
      f.required ? 'Yes' : 'No',
      f.descriptionVi,
      f.descriptionEn,
      f.example,
      f.notes,
    ]);

    const allData = [headers, ...rows];

    // Write data
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `'${SHEET_NAME}'!A1`,
      valueInputOption: 'RAW',
      requestBody: {
        values: allData,
      },
    });

    return NextResponse.json({
      success: true,
      message: `Created Field Mapping sheet with ${rows.length} fields`,
      url: `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}`,
    });
  } catch (error) {
    console.error('Error creating field mapping sheet:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create sheet' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/survey/field-mapping - Get field mapping data
 */
export async function GET() {
  return NextResponse.json({
    success: true,
    data: fieldMappings,
    count: fieldMappings.length,
  });
}

