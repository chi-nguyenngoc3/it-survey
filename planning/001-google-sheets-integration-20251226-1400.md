# 001 - Google Sheets Integration Plan

**Created:** December 26, 2025  
**Status:** Planned  
**Priority:** High

---

## Overview

Replace Supabase with Google Sheets API for storing survey responses. This provides non-technical stakeholders easy access to view and analyze data directly in a spreadsheet.

## Decision Context

| Factor | Decision |
|--------|----------|
| Expected responses | Under 50 |
| Data access needs | Non-technical stakeholders |
| Current Supabase status | Not configured |
| Recommendation | **Google Sheets** |

---

## Current Respondent Identification

The survey already collects identifying information in the `InstitutionProfile` section:

| Field | Purpose |
|-------|---------|
| `institutionName` | Name of the institution (required) |
| `contactName` | Primary contact person (required) |
| `contactEmail` | Contact's email (required) |
| `contactRole` | Contact's role/position (required) |

These fields, combined with a timestamp, will uniquely identify each response in Google Sheets.

---

## Tech Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| API Client | `googleapis` (npm) | Official Google API library for Node.js |
| Authentication | Service Account (JSON key) | Server-to-server auth, no user login needed |
| API | Google Sheets API v4 | Read/write spreadsheet data |
| Runtime | Next.js API Routes | Server-side execution (keys stay secure) |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Your Next.js App                         │
│  ┌──────────────┐    ┌──────────────┐    ┌───────────────┐ │
│  │  API Route   │───▶│  googleapis  │───▶│ Environment   │ │
│  │ /api/survey  │    │  npm package │    │   Variables   │ │
│  └──────────────┘    └──────────────┘    └───────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      Google Cloud                           │
│  ┌──────────────┐    ┌──────────────┐    ┌───────────────┐ │
│  │   Service    │───▶│ Sheets API   │───▶│    Your       │ │
│  │   Account    │    │     v4       │    │  Spreadsheet  │ │
│  └──────────────┘    └──────────────┘    └───────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## Implementation Steps

### Phase 1: Google Cloud Setup (Manual - ~10 min)

1. **Create Google Cloud Project**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create new project or select existing one

2. **Enable Google Sheets API**
   - Navigate to APIs & Services > Library
   - Search for "Google Sheets API"
   - Click Enable

3. **Create Service Account**
   - Go to APIs & Services > Credentials
   - Create Credentials > Service Account
   - Name: `survey-bot` (or similar)
   - Download JSON key file

4. **Create Google Sheet**
   - Create new Google Sheet
   - Share with service account email (Editor access)
   - Copy the spreadsheet ID from URL

5. **Configure Environment Variables**
   ```bash
   # .env.local
   GOOGLE_SERVICE_ACCOUNT_EMAIL=survey-bot@your-project.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
   GOOGLE_SHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
   ```

### Phase 2: Install Dependencies

```bash
npm install googleapis
```

### Phase 3: Create Google Sheets Client

**File:** `src/lib/google-sheets/client.ts`

```typescript
import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function appendSurveyResponse(data: SurveyFormData) {
  // Flatten and append data to sheet
}

export async function getSurveyResponses() {
  // Read all responses
}

export async function updateSurveyResponse(rowIndex: number, data: SurveyFormData) {
  // Update specific row
}
```

### Phase 4: Update API Routes

**Modify:** `src/app/api/survey/route.ts`
- Replace Supabase calls with Google Sheets calls
- Flatten nested JSON data for spreadsheet columns
- Add row identifier using `contactEmail + timestamp`

**Modify:** `src/app/api/survey/[id]/route.ts`
- Update GET/PATCH handlers to use Google Sheets

### Phase 5: Cleanup (Optional)

- Remove `src/lib/supabase/` directory
- Remove `@supabase/supabase-js` from package.json
- Update environment variable documentation

---

## Sheet Structure

| Column | Field | Source |
|--------|-------|--------|
| A | Timestamp | Auto-generated |
| B | Row ID | `contactEmail_timestamp` |
| C | Institution Name | `institutionName` |
| D | Contact Name | `contactName` |
| E | Contact Email | `contactEmail` |
| F | Contact Role | `contactRole` |
| G | Institution Type | `institutionType` |
| H | Student Population | `studentPopulation` |
| ... | ... | ... |

---

## Files to Create/Modify

| Action | File Path |
|--------|-----------|
| Create | `src/lib/google-sheets/client.ts` |
| Modify | `src/app/api/survey/route.ts` |
| Modify | `src/app/api/survey/[id]/route.ts` |
| Delete | `src/lib/supabase/` (optional) |

---

## Environment Variables

```bash
# Required for Google Sheets integration
GOOGLE_SERVICE_ACCOUNT_EMAIL=xxx@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_spreadsheet_id
```

---

## Rate Limits & Considerations

| Aspect | Limit |
|--------|-------|
| Read requests | 100 per 100 seconds per user |
| Write requests | 100 per 100 seconds per user |
| Cells per request | 10,000,000 |

For under 50 responses, these limits are more than sufficient.

---

## Checklist

- [ ] Google Cloud project created
- [ ] Google Sheets API enabled
- [ ] Service account created
- [ ] JSON credentials downloaded
- [ ] Google Sheet created and shared
- [ ] Environment variables configured
- [ ] `googleapis` package installed
- [ ] Google Sheets client created
- [ ] API routes updated
- [ ] Testing completed
- [ ] Supabase files removed (optional)

---

## Next Steps

1. Complete Google Cloud setup (Phase 1)
2. Notify when ready to proceed with code implementation

