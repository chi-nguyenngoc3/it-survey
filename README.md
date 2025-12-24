# ITSM Survey Application

A production-ready web application for IT Service Management data collection, built for educational institutions.

## Features

- **11 Comprehensive Survey Sections**: Institution Profile, IT Organization, IT Processes, Applications Portfolio, Process-System Mapping, Data & Analytics, AI & Emerging Technologies, Infrastructure & Cloud, Security & Compliance, IT Financial Analysis, and Process Digitization.

- **Multi-Language Support**: Vietnamese (default) and English, with seamless language switching that preserves form data.

- **Auto-Save Functionality**: Form data is automatically saved every 30 seconds to prevent data loss.

- **Progress Tracking**: Visual progress indicators showing completed sections and overall survey completion.

- **Data Export**: Export survey data as JSON for backup or submission.

- **Corporate Design**: Professional styling inspired by NHG.vn with the corporate color scheme.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS + shadcn/ui components
- **i18n**: next-intl (Vietnamese default, English available)
- **Validation**: Zod schemas
- **State Management**: React hooks

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account (optional - app works in local storage mode without it)

### Installation

1. Clone the repository and navigate to the project:

```bash
cd itsm-survey
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables (optional for Supabase):

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Database Setup (Optional)

If using Supabase, run the schema from `src/lib/supabase/schema.sql` in your Supabase SQL Editor.

## Project Structure

```
itsm-survey/
├── src/
│   ├── app/
│   │   ├── [locale]/           # i18n routing (vi, en)
│   │   │   ├── layout.tsx      # Locale layout with Header/Footer
│   │   │   ├── page.tsx        # Landing page
│   │   │   └── survey/
│   │   │       ├── page.tsx    # Survey form page
│   │   │       └── components/ # Form section components
│   │   └── api/
│   │       └── survey/         # API routes for CRUD operations
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── hooks/
│   │   └── useSurveyForm.ts    # Custom hook for form state
│   ├── lib/
│   │   ├── supabase/           # Database configuration
│   │   ├── i18n/               # Internationalization config
│   │   └── validations/        # Zod schemas
│   └── types/
│       └── survey.ts           # TypeScript interfaces
├── messages/
│   ├── vi.json                 # Vietnamese translations
│   └── en.json                 # English translations
└── docs/                       # Documentation files
```

## Survey Sections

1. **Institution Profile**: Basic information about the educational institution
2. **IT Organization & Staffing**: IT organizational structure and resources
3. **IT Processes & ITSM Maturity**: Service desk, change management, asset management
4. **Applications Portfolio**: SIS, LMS, CRM, ERP, and integration platforms
5. **Process-System Mapping**: Business process to system mapping matrix
6. **Data & Analytics Capabilities**: Data warehouse, BI tools, governance
7. **AI & Emerging Technologies**: AI strategy, use cases, governance
8. **Infrastructure & Cloud**: Data center strategy, cloud adoption, network
9. **Security & Compliance**: Security framework, compliance, tools
10. **IT Financial Analysis**: Budget breakdown and financial metrics
11. **Process Digitization & Digital Maturity**: Digital maturity assessment

## Corporate Color Scheme (NHG.vn)

```css
Primary Green: #037236
Primary Dark: #145530
Primary Darker: #00471F
Accent Gold: #F7E6AC
Background Ivory: #FDF7F0
Background Gray: #F2F6F4
```

## API Endpoints

- `GET /api/survey` - List all surveys
- `POST /api/survey` - Create new survey
- `GET /api/survey/[id]` - Get survey by ID
- `PATCH /api/survey/[id]` - Update survey (auto-save)
- `DELETE /api/survey/[id]` - Delete survey

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Self-hosted

```bash
npm run build
npm run start
```

## License

MIT License

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
