module.exports = [
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/types/survey.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ITSM Survey Types
 * Defines all data structures for the survey application
 */ // IT FTE Breakdown
__turbopack_context__.s([
    "SURVEY_SECTIONS",
    ()=>SURVEY_SECTIONS,
    "createInitialFormData",
    ()=>createInitialFormData
]);
const SURVEY_SECTIONS = [
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
function createInitialFormData() {
    return {
        institutionName: '',
        institutionType1: '',
        institutionType2: '',
        institutionType: '',
        studentPopulation: '',
        employeeCount: '',
        facultyCount: '',
        campusCount: '',
        contactName: '',
        contactEmail: '',
        contactRole: '',
        fiscalYear: '',
        itReportingStructure: '',
        cioCtoTitle: '',
        itStaffCount: '',
        itFteBreakdown: {
            leadership: '',
            infrastructure: '',
            applications: '',
            security: '',
            servicedesk: '',
            projectmgmt: '',
            data: '',
            network: '',
            other: ''
        },
        organizationalModel: '',
        sourcingModel: {},
        itilMaturity: '',
        serviceDesk: {
            tool: '',
            monthlyTickets: '',
            fcr: '',
            resolutionTime: '',
            availability: ''
        },
        changeManagement: {
            cabFrequency: '',
            successRate: '',
            tool: ''
        },
        incidentManagement: {
            mttr: '',
            majorIncidents: ''
        },
        problemManagement: {
            knownErrors: '',
            rootCauseAnalysis: ''
        },
        assetManagement: {
            tool: '',
            cmdbAccuracy: '',
            coverage: ''
        },
        erp: {
            vendor: '',
            version: '',
            hosting: '',
            implementationYear: '',
            modules: [],
            integration: ''
        },
        lms: {
            vendor: '',
            hosting: '',
            users: '',
            satisfaction: ''
        },
        sis: {
            vendor: '',
            hosting: '',
            integration: '',
            customization: ''
        },
        crm: {
            vendor: '',
            purpose: '',
            users: ''
        },
        totalApplications: '',
        applicationsByCategory: {},
        integrationPlatform: '',
        apiManagementTool: '',
        ssoProvider: '',
        etlTool: '',
        studentPortal: '',
        facultyPortal: '',
        mobileApp: '',
        librarySystem: '',
        advisingSystem: '',
        careerServices: '',
        processSystemMappings: [],
        integrationChallenges: '',
        integrationGaps: [],
        integrationMaturityLevel: '',
        activeIntegrations: '',
        dataWarehouse: {
            platform: '',
            status: '',
            coverage: ''
        },
        biTool: '',
        dataGovernance: '',
        dataLake: '',
        masterData: {},
        dataQualityScore: '',
        aiStrategy: '',
        aiSpending: '',
        aiUseCases: [],
        aiPlatforms: '',
        aiGovernance: '',
        datacenterStrategy: '',
        datacenterLocation: '',
        cloudAdoption: {
            providers: [],
            spend: '',
            workloadPercent: '',
            strategy: ''
        },
        networkInfra: {
            vendor: '',
            bandwidth: '',
            wifi: '',
            sdwan: '',
            wanProvider: ''
        },
        virtualizationPlatform: '',
        backupSolution: '',
        drSite: '',
        securityFramework: '',
        securityReporting: '',
        complianceStandards: [],
        securityTools: {
            endpoint: '',
            siem: '',
            iam: '',
            firewall: '',
            dlp: ''
        },
        mfaImplementation: '',
        securityTraining: '',
        lastSecurityAudit: '',
        securityIncidents: '',
        totalItBudget: '',
        budgetBreakdown: {
            personnel: '',
            hardware: '',
            software: '',
            cloud: '',
            telecom: '',
            security: '',
            projects: '',
            support: '',
            training: '',
            other: ''
        },
        itBudgetPercent: '',
        costPerStudent: '',
        costPerEmployee: '',
        capexOpexRatio: '',
        processMaturity: {
            admissions: '',
            enrollment: '',
            academic: '',
            student_services: '',
            alumni: '',
            curriculum: '',
            quality: '',
            library: '',
            research: '',
            finance: '',
            hr: '',
            procurement: '',
            facilities: ''
        },
        quickWins: [],
        processDigitizationScore: '',
        dataMaturityScore: '',
        itOperationsScore: '',
        painPoints: ''
    };
}
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/hooks/useSurveyForm.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSurveyForm",
    ()=>useSurveyForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$types$2f$survey$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/types/survey.ts [app-ssr] (ecmascript)");
'use client';
;
;
const STORAGE_KEY = 'itsm-survey-data';
const AUTO_SAVE_DELAY = 30000; // 30 seconds
function useSurveyForm(options = {}) {
    const { surveyId, initialData } = options;
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        // Try to load from localStorage on initial mount
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$types$2f$survey$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createInitialFormData"])(),
            ...initialData
        };
    });
    const [currentSection, setCurrentSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return 0;
    });
    const [completedSections, setCompletedSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return new Set();
    });
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastSaved, setLastSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const autoSaveTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasChangesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Save to localStorage
    const saveToLocalStorage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        formData,
        currentSection,
        completedSections
    ]);
    // Save data (to API if surveyId exists, otherwise localStorage)
    const saveData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setIsSaving(true);
        try {
            if (surveyId && surveyId.startsWith('local-') === false) {
                // Save to API
                const response = await fetch(`/api/survey/${surveyId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        formData,
                        currentSection,
                        completedSections: Array.from(completedSections)
                    })
                });
                if (!response.ok) {
                    throw new Error('Failed to save survey');
                }
            }
            // Always save to localStorage as backup
            saveToLocalStorage();
            setLastSaved(new Date());
            hasChangesRef.current = false;
        } catch (error) {
            console.error('Error saving survey:', error);
            // Still save to localStorage even if API fails
            saveToLocalStorage();
        } finally{
            setIsSaving(false);
        }
    }, [
        surveyId,
        formData,
        currentSection,
        completedSections,
        saveToLocalStorage
    ]);
    // Auto-save effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (hasChangesRef.current) {
            if (autoSaveTimeoutRef.current) {
                clearTimeout(autoSaveTimeoutRef.current);
            }
            autoSaveTimeoutRef.current = setTimeout(()=>{
                saveData();
            }, AUTO_SAVE_DELAY);
        }
        return ()=>{
            if (autoSaveTimeoutRef.current) {
                clearTimeout(autoSaveTimeoutRef.current);
            }
        };
    }, [
        formData,
        saveData
    ]);
    // Update form data
    const updateFormData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
        hasChangesRef.current = true;
    }, []);
    // Update nested form data
    const updateNestedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((parent, field, value)=>{
        setFormData((prev)=>{
            const parentValue = prev[parent];
            if (typeof parentValue === 'object' && parentValue !== null) {
                return {
                    ...prev,
                    [parent]: {
                        ...parentValue,
                        [field]: value
                    }
                };
            }
            return prev;
        });
        hasChangesRef.current = true;
    }, []);
    // Mark section as complete
    const markSectionComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((section)=>{
        setCompletedSections((prev)=>new Set([
                ...prev,
                section
            ]));
        hasChangesRef.current = true;
    }, []);
    // Export data as JSON
    const exportData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const dataStr = JSON.stringify(formData, null, 2);
        const dataBlob = new Blob([
            dataStr
        ], {
            type: 'application/json'
        });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${formData.institutionName || 'institution'}_itsm_data.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }, [
        formData
    ]);
    // Reset form
    const resetForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$types$2f$survey$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createInitialFormData"])());
        setCurrentSection(0);
        setCompletedSections(new Set());
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        hasChangesRef.current = false;
    }, []);
    return {
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
        exportData,
        resetForm
    };
}
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/progress.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/@radix-ui/react-progress/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Progress({ className, value, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "progress",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "progress-indicator",
            className: "bg-primary h-full w-full flex-1 transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/progress.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/progress.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/SurveyNavigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SurveyNavigation",
    ()=>SurveyNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
'use client';
;
;
;
function SurveyNavigation({ sections, currentSection, completedSections, onSectionChange }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('survey.sections');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-2 overflow-x-auto pb-2 -mx-2 px-2",
        children: sections.map((section, index)=>{
            const isActive = currentSection === index;
            const isCompleted = completedSections.has(index);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onSectionChange(index),
                className: `
              nav-tab flex items-center gap-2
              ${isActive ? 'nav-tab-active' : isCompleted ? 'nav-tab-completed' : 'nav-tab-inactive'}
            `,
                children: [
                    isCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/SurveyNavigation.tsx",
                        lineNumber: 37,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            index + 1,
                            ". ",
                            t(`${section}.title`)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/SurveyNavigation.tsx",
                        lineNumber: 38,
                        columnNumber: 13
                    }, this)
                ]
            }, section, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/SurveyNavigation.tsx",
                lineNumber: 29,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/SurveyNavigation.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function SelectContent({ className, children, position = "item-aligned", align = "center", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            align: align,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "data-slot": "select-item-indicator",
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
            lineNumber: 156,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
            lineNumber: 174,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InstitutionProfile",
    ()=>InstitutionProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
'use client';
;
;
;
;
;
;
function InstitutionProfile({ formData, updateFormData }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 border-b border-primary pb-3 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                        className: "h-6 w-6 text-primary"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-primary",
                        children: t('survey.sections.institution.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "institutionName",
                                className: "required",
                                children: t('survey.fields.institutionName')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                id: "institutionName",
                                value: formData.institutionName,
                                onChange: (e)=>updateFormData('institutionName', e.target.value),
                                placeholder: t('survey.placeholders.institutionName')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "institutionType1",
                                className: "required",
                                children: t('survey.fields.institutionType1')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: formData.institutionType1,
                                onValueChange: (value)=>{
                                    updateFormData('institutionType1', value);
                                    if (value === 'university') {
                                        updateFormData('institutionType2', '');
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: t('common.select')
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "university",
                                                children: t('survey.options.institutionType1.university')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "school",
                                                children: t('survey.options.institutionType1.school')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    formData.institutionType1 === 'school' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-2 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "institutionType2",
                                className: "required",
                                children: t('survey.fields.institutionType2')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: formData.institutionType2,
                                onValueChange: (value)=>updateFormData('institutionType2', value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        className: "bg-blue-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: t('common.select')
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "sna",
                                                children: t('survey.options.institutionType2.sna')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "uk_academy",
                                                children: t('survey.options.institutionType2.uk_academy')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "ischool",
                                                children: t('survey.options.institutionType2.ischool')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "institutionType",
                                className: "required",
                                children: t('survey.fields.institutionType')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: formData.institutionType,
                                onValueChange: (value)=>updateFormData('institutionType', value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: t('common.select')
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "public_research",
                                                children: t('survey.options.institutionType.public_research')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "private_research",
                                                children: t('survey.options.institutionType.private_research')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "public_comprehensive",
                                                children: t('survey.options.institutionType.public_comprehensive')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "private_liberal_arts",
                                                children: t('survey.options.institutionType.private_liberal_arts')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "community_college",
                                                children: t('survey.options.institutionType.community_college')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "technical",
                                                children: t('survey.options.institutionType.technical')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "private_multi_campus",
                                                children: t('survey.options.institutionType.private_multi_campus')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "k12_international",
                                                children: t('survey.options.institutionType.k12_international')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                                lineNumber: 132,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "k12_bilingual",
                                                children: t('survey.options.institutionType.k12_bilingual')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "k12_integrated",
                                                children: t('survey.options.institutionType.k12_integrated')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "studentPopulation",
                                className: "required",
                                children: t('survey.fields.studentPopulation')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                id: "studentPopulation",
                                type: "number",
                                value: formData.studentPopulation,
                                onChange: (e)=>updateFormData('studentPopulation', e.target.value),
                                placeholder: "10000"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "employeeCount",
                                className: "required",
                                children: t('survey.fields.employeeCount')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                id: "employeeCount",
                                type: "number",
                                value: formData.employeeCount,
                                onChange: (e)=>updateFormData('employeeCount', e.target.value),
                                placeholder: "500"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "facultyCount",
                                className: "required",
                                children: t('survey.fields.facultyCount')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                id: "facultyCount",
                                type: "number",
                                value: formData.facultyCount,
                                onChange: (e)=>updateFormData('facultyCount', e.target.value),
                                placeholder: "200"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "campusCount",
                                children: t('survey.fields.campusCount')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                id: "campusCount",
                                type: "number",
                                value: formData.campusCount,
                                onChange: (e)=>updateFormData('campusCount', e.target.value),
                                placeholder: "1"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "fiscalYear",
                                className: "required",
                                children: t('survey.fields.fiscalYear')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                id: "fiscalYear",
                                value: formData.fiscalYear,
                                onChange: (e)=>updateFormData('fiscalYear', e.target.value),
                                placeholder: t('survey.placeholders.fiscalYear')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t pt-6 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-gray-800 mb-4",
                        children: "Primary Contact Information"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "contactName",
                                        className: "required",
                                        children: t('survey.fields.contactName')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "contactName",
                                        value: formData.contactName,
                                        onChange: (e)=>updateFormData('contactName', e.target.value),
                                        placeholder: t('survey.placeholders.contactName')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "contactEmail",
                                        className: "required",
                                        children: t('survey.fields.contactEmail')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                        lineNumber: 234,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "contactEmail",
                                        type: "email",
                                        value: formData.contactEmail,
                                        onChange: (e)=>updateFormData('contactEmail', e.target.value),
                                        placeholder: t('survey.placeholders.contactEmail')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "contactRole",
                                        className: "required",
                                        children: t('survey.fields.contactRole')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "contactRole",
                                        value: formData.contactRole,
                                        onChange: (e)=>updateFormData('contactRole', e.target.value),
                                        placeholder: t('survey.placeholders.contactRole')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ITOrganization",
    ()=>ITOrganization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
'use client';
;
;
;
;
;
;
function ITOrganization({ formData, updateFormData, updateNestedData }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])();
    const fteCategories = [
        {
            key: 'leadership',
            label: t('itOrganization.fteBreakdown.leadership')
        },
        {
            key: 'infrastructure',
            label: t('itOrganization.fteBreakdown.infrastructure')
        },
        {
            key: 'applications',
            label: t('itOrganization.fteBreakdown.applications')
        },
        {
            key: 'security',
            label: t('itOrganization.fteBreakdown.security')
        },
        {
            key: 'servicedesk',
            label: t('itOrganization.fteBreakdown.servicedesk')
        },
        {
            key: 'projectmgmt',
            label: t('itOrganization.fteBreakdown.projectmgmt')
        },
        {
            key: 'data',
            label: t('itOrganization.fteBreakdown.data')
        },
        {
            key: 'network',
            label: t('itOrganization.fteBreakdown.network')
        },
        {
            key: 'other',
            label: t('itOrganization.fteBreakdown.other')
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 border-b border-primary pb-3 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                        className: "h-6 w-6 text-primary"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-primary",
                        children: t('itOrganization.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "itReportingStructure",
                                className: "required",
                                children: t('survey.fields.itReportingStructure')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: formData.itReportingStructure,
                                onValueChange: (value)=>updateFormData('itReportingStructure', value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: t('common.select')
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "president",
                                                children: t('survey.options.itReportingStructure.president')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                                lineNumber: 54,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "provost",
                                                children: t('survey.options.itReportingStructure.provost')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "cfo",
                                                children: t('survey.options.itReportingStructure.cfo')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "coo",
                                                children: t('survey.options.itReportingStructure.coo')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "other",
                                                children: t('survey.options.itReportingStructure.other')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "cioCtoTitle",
                                className: "required",
                                children: t('survey.fields.cioCtoTitle')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                id: "cioCtoTitle",
                                value: formData.cioCtoTitle,
                                onChange: (e)=>updateFormData('cioCtoTitle', e.target.value),
                                placeholder: "e.g., CIO, VP IT, IT Director"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "itStaffCount",
                                className: "required",
                                children: t('survey.fields.itStaffCount')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                id: "itStaffCount",
                                type: "number",
                                value: formData.itStaffCount,
                                onChange: (e)=>updateFormData('itStaffCount', e.target.value),
                                placeholder: "25"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "organizationalModel",
                                className: "required",
                                children: t('survey.fields.organizationalModel')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: formData.organizationalModel,
                                onValueChange: (value)=>updateFormData('organizationalModel', value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: t('common.select')
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "centralized",
                                                children: t('survey.options.organizationalModel.centralized')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "decentralized",
                                                children: t('survey.options.organizationalModel.decentralized')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "hybrid",
                                                children: t('survey.options.organizationalModel.hybrid')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t pt-6 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-gray-800 mb-4",
                        children: t('itOrganization.staffDistribution')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                        children: fteCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: `fte-${category.key}`,
                                        className: "text-sm",
                                        children: category.label
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: `fte-${category.key}`,
                                        type: "number",
                                        step: "0.5",
                                        value: formData.itFteBreakdown[category.key] || '',
                                        onChange: (e)=>updateNestedData('itFteBreakdown', category.key, e.target.value),
                                        placeholder: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, category.key, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ITProcesses",
    ()=>ITProcesses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
'use client';
;
;
;
;
;
;
function ITProcesses({ formData, updateFormData, updateNestedData }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 border-b border-primary pb-3 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                        className: "h-6 w-6 text-primary"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-primary",
                        children: t('itProcesses.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "itilMaturity",
                        className: "required",
                        children: t('survey.fields.itilMaturity')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                        value: formData.itilMaturity,
                        onValueChange: (value)=>updateFormData('itilMaturity', value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                className: "max-w-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                    placeholder: t('common.select')
                                }, void 0, false, {
                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "1",
                                        children: t('survey.options.itilMaturity.1')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "2",
                                        children: t('survey.options.itilMaturity.2')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "3",
                                        children: t('survey.options.itilMaturity.3')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "4",
                                        children: t('survey.options.itilMaturity.4')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "5",
                                        children: t('survey.options.itilMaturity.5')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-lg p-4 bg-gray-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-gray-800 mb-4",
                        children: t('itProcesses.serviceDesk.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "serviceDeskTool",
                                        className: "required",
                                        children: t('itProcesses.serviceDesk.tool')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "serviceDeskTool",
                                        value: formData.serviceDesk.tool || '',
                                        onChange: (e)=>updateNestedData('serviceDesk', 'tool', e.target.value),
                                        placeholder: "e.g., ServiceNow, Jira, BMC"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "monthlyTickets",
                                        children: t('itProcesses.serviceDesk.monthlyTickets')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "monthlyTickets",
                                        type: "number",
                                        value: formData.serviceDesk.monthlyTickets || '',
                                        onChange: (e)=>updateNestedData('serviceDesk', 'monthlyTickets', e.target.value),
                                        placeholder: "500"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "fcr",
                                        children: t('itProcesses.serviceDesk.fcr')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "fcr",
                                        type: "number",
                                        value: formData.serviceDesk.fcr || '',
                                        onChange: (e)=>updateNestedData('serviceDesk', 'fcr', e.target.value),
                                        placeholder: "65"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "resolutionTime",
                                        children: t('itProcesses.serviceDesk.resolutionTime')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "resolutionTime",
                                        type: "number",
                                        value: formData.serviceDesk.resolutionTime || '',
                                        onChange: (e)=>updateNestedData('serviceDesk', 'resolutionTime', e.target.value),
                                        placeholder: "24"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-lg p-4 bg-gray-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-gray-800 mb-4",
                        children: t('itProcesses.changeManagement.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "cabFrequency",
                                        className: "required",
                                        children: t('itProcesses.changeManagement.cabFrequency')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                        value: formData.changeManagement.cabFrequency || '',
                                        onValueChange: (value)=>updateNestedData('changeManagement', 'cabFrequency', value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: t('common.select')
                                                }, void 0, false, {
                                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "weekly",
                                                        children: "Weekly"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "biweekly",
                                                        children: "Bi-weekly"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "monthly",
                                                        children: "Monthly"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "adhoc",
                                                        children: "Ad-hoc"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "none",
                                                        children: "No formal CAB"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "changeSuccessRate",
                                        children: t('itProcesses.changeManagement.successRate')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "changeSuccessRate",
                                        type: "number",
                                        value: formData.changeManagement.successRate || '',
                                        onChange: (e)=>updateNestedData('changeManagement', 'successRate', e.target.value),
                                        placeholder: "95"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-lg p-4 bg-gray-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-gray-800 mb-4",
                        children: t('itProcesses.assetManagement.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "assetTool",
                                        children: t('itProcesses.assetManagement.tool')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "assetTool",
                                        value: formData.assetManagement.tool || '',
                                        onChange: (e)=>updateNestedData('assetManagement', 'tool', e.target.value),
                                        placeholder: "e.g., ServiceNow CMDB, Lansweeper"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "cmdbAccuracy",
                                        children: t('itProcesses.assetManagement.cmdbAccuracy')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "cmdbAccuracy",
                                        type: "number",
                                        value: formData.assetManagement.cmdbAccuracy || '',
                                        onChange: (e)=>updateNestedData('assetManagement', 'cmdbAccuracy', e.target.value),
                                        placeholder: "85"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/textarea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApplicationsPortfolio",
    ()=>ApplicationsPortfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
'use client';
;
;
;
;
;
;
;
function ApplicationsPortfolio({ formData, updateFormData, updateNestedData }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 border-b border-primary pb-3 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                        className: "h-6 w-6 text-primary"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-primary",
                        children: t('applications.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "info-box mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-700",
                    children: t('applications.description')
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-lg p-4 bg-purple-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-gray-800 mb-4",
                        children: t('applications.sis.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "required",
                                        children: t('applications.sis.vendor')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        value: formData.sis.vendor || '',
                                        onChange: (e)=>updateNestedData('sis', 'vendor', e.target.value),
                                        placeholder: "e.g., Ellucian Banner, Workday Student"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "required",
                                        children: t('applications.sis.hosting')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                        value: formData.sis.hosting || '',
                                        onValueChange: (value)=>updateNestedData('sis', 'hosting', value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: t('common.select')
                                                }, void 0, false, {
                                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "on_premise",
                                                        children: t('survey.options.hosting.on_premise')
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "cloud_saas",
                                                        children: t('survey.options.hosting.cloud_saas')
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "hosted",
                                                        children: t('survey.options.hosting.hosted')
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "hybrid",
                                                        children: t('survey.options.hosting.hybrid')
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('applications.sis.integration')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        value: formData.sis.integration || '',
                                        onChange: (e)=>updateNestedData('sis', 'integration', e.target.value),
                                        placeholder: "e.g., API, ETL, Middleware"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('applications.sis.customization')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                        value: formData.sis.customization || '',
                                        onValueChange: (value)=>updateNestedData('sis', 'customization', value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: t('common.select')
                                                }, void 0, false, {
                                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "vanilla",
                                                        children: "Vanilla (No customization)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "light",
                                                        children: "Light customization"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "moderate",
                                                        children: "Moderate customization"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "heavy",
                                                        children: "Heavy customization"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-lg p-4 bg-green-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-gray-800 mb-4",
                        children: t('applications.lms.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "required",
                                        children: t('applications.lms.vendor')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        value: formData.lms.vendor || '',
                                        onChange: (e)=>updateNestedData('lms', 'vendor', e.target.value),
                                        placeholder: "e.g., Canvas, Blackboard, Moodle"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "required",
                                        children: t('applications.sis.hosting')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                        value: formData.lms.hosting || '',
                                        onValueChange: (value)=>updateNestedData('lms', 'hosting', value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: t('common.select')
                                                }, void 0, false, {
                                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "on_premise",
                                                        children: t('survey.options.hosting.on_premise')
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "cloud_saas",
                                                        children: t('survey.options.hosting.cloud_saas')
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "hosted",
                                                        children: t('survey.options.hosting.hosted')
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('applications.lms.users')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        value: formData.lms.users || '',
                                        onChange: (e)=>updateNestedData('lms', 'users', e.target.value),
                                        placeholder: "10000"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('applications.lms.satisfaction')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        min: "1",
                                        max: "5",
                                        step: "0.1",
                                        value: formData.lms.satisfaction || '',
                                        onChange: (e)=>updateNestedData('lms', 'satisfaction', e.target.value),
                                        placeholder: "4.0"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-lg p-4 bg-orange-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-gray-800 mb-4",
                        children: t('applications.crm.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('applications.crm.vendor')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        value: formData.crm.vendor || '',
                                        onChange: (e)=>updateNestedData('crm', 'vendor', e.target.value),
                                        placeholder: "e.g., Salesforce, Slate, Element451"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('applications.crm.purpose')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                        value: formData.crm.purpose || '',
                                        onValueChange: (value)=>updateNestedData('crm', 'purpose', value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: t('common.select')
                                                }, void 0, false, {
                                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                lineNumber: 168,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "recruitment",
                                                        children: "Recruitment & Admissions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "retention",
                                                        children: "Student Retention"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "alumni",
                                                        children: "Alumni Relations"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "advancement",
                                                        children: "Advancement/Fundraising"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "comprehensive",
                                                        children: "Comprehensive (All)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                lineNumber: 171,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('applications.crm.users')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        value: formData.crm.users || '',
                                        onChange: (e)=>updateNestedData('crm', 'users', e.target.value),
                                        placeholder: "50"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-lg p-4 bg-red-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-gray-800 mb-4",
                        children: t('applications.erp.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "required",
                                        children: t('applications.erp.vendor')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        value: formData.erp.vendor || '',
                                        onChange: (e)=>updateNestedData('erp', 'vendor', e.target.value),
                                        placeholder: "e.g., Workday, Banner Finance"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('applications.erp.version')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        value: formData.erp.version || '',
                                        onChange: (e)=>updateNestedData('erp', 'version', e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "required",
                                        children: t('applications.sis.hosting')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                        value: formData.erp.hosting || '',
                                        onValueChange: (value)=>updateNestedData('erp', 'hosting', value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: t('common.select')
                                                }, void 0, false, {
                                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "on_premise",
                                                        children: t('survey.options.hosting.on_premise')
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "cloud_saas",
                                                        children: t('survey.options.hosting.cloud_saas')
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "hosted",
                                                        children: t('survey.options.hosting.hosted')
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "hybrid",
                                                        children: t('survey.options.hosting.hybrid')
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                                lineNumber: 222,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('applications.erp.implementationYear')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        value: formData.erp.implementationYear || '',
                                        onChange: (e)=>updateNestedData('erp', 'implementationYear', e.target.value),
                                        placeholder: "2020"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-lg p-4 bg-cyan-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-gray-800 mb-4",
                        children: t('applications.integration.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('applications.integration.platform')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 249,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        value: formData.integrationPlatform,
                                        onChange: (e)=>updateFormData('integrationPlatform', e.target.value),
                                        placeholder: "e.g., MuleSoft, Dell Boomi"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('applications.integration.apiTool')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        value: formData.apiManagementTool,
                                        onChange: (e)=>updateFormData('apiManagementTool', e.target.value),
                                        placeholder: "e.g., Apigee, Azure API Mgmt"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 258,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('applications.integration.sso')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        value: formData.ssoProvider,
                                        onChange: (e)=>updateFormData('ssoProvider', e.target.value),
                                        placeholder: "e.g., Okta, Azure AD"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('applications.integration.etl')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        value: formData.etlTool,
                                        onChange: (e)=>updateFormData('etlTool', e.target.value),
                                        placeholder: "e.g., Informatica, Talend"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                        lineNumber: 274,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: t('applications.totalApplications')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        type: "number",
                        value: formData.totalApplications,
                        onChange: (e)=>updateFormData('totalApplications', e.target.value),
                        placeholder: "50",
                        className: "max-w-xs"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: t('applications.integrationChallenges')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                        value: formData.integrationChallenges,
                        onChange: (e)=>updateFormData('integrationChallenges', e.target.value),
                        placeholder: "Describe data synchronization issues, manual workarounds, system silos...",
                        rows: 4
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/checkbox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Checkbox({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "checkbox",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "checkbox-indicator",
            className: "grid place-content-center text-current transition-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                className: "size-3.5"
            }, void 0, false, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/checkbox.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/checkbox.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/checkbox.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProcessMapping",
    ()=>ProcessMapping
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/workflow.js [app-ssr] (ecmascript) <export default as Workflow>");
'use client';
;
;
;
;
;
;
;
;
const businessProcesses = [
    'recruitment',
    'admissions',
    'registration',
    'courseDelivery',
    'gradeManagement',
    'financialAid',
    'billing',
    'degreeAudit',
    'advising',
    'retention',
    'graduation',
    'alumni'
];
const systemOptions = [
    'CRM',
    'SIS',
    'LMS',
    'ERP',
    'BI',
    'Other'
];
const integrationGapKeys = [
    'sisLms',
    'lmsSis',
    'sisErp',
    'crmSis',
    'biAll',
    'noSso',
    'manualReconciliation'
];
function ProcessMapping({ formData, updateFormData }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])();
    const handleGapChange = (gapKey, checked)=>{
        const currentGaps = formData.integrationGaps || [];
        if (checked) {
            updateFormData('integrationGaps', [
                ...currentGaps,
                gapKey
            ]);
        } else {
            updateFormData('integrationGaps', currentGaps.filter((g)=>g !== gapKey));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 border-b border-primary pb-3 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__["Workflow"], {
                        className: "h-6 w-6 text-primary"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-primary",
                        children: t('processMapping.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "info-box mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-700",
                    children: t('processMapping.description')
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "matrix-table",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: t('processMapping.businessProcess')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: t('processMapping.primarySystem')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: t('processMapping.supportingSystems')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: t('processMapping.dataFlow')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: businessProcesses.map((process)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "font-medium",
                                            children: t(`processMapping.processes.${process}`)
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "w-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: t('common.select')
                                                        }, void 0, false, {
                                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: systemOptions.map((system)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: system,
                                                                children: system
                                                            }, system, false, {
                                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                                lineNumber: 90,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "e.g., API, BI, Portal",
                                                className: "text-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "e.g., Web → CRM → BI",
                                                className: "text-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, process, true, {
                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t pt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-gray-800 mb-4",
                        children: "Integration Pain Points & Challenges"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                        value: formData.integrationChallenges,
                        onChange: (e)=>updateFormData('integrationChallenges', e.target.value),
                        placeholder: "Describe specific integration challenges: manual data entry, delayed syncs, data quality issues...",
                        rows: 4
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t pt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-gray-800 mb-4",
                        children: t('processMapping.integrationGaps.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                        children: integrationGapKeys.map((gapKey)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                        id: `gap-${gapKey}`,
                                        checked: (formData.integrationGaps || []).includes(gapKey),
                                        onCheckedChange: (checked)=>handleGapChange(gapKey, checked)
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: `gap-${gapKey}`,
                                        className: "text-sm text-gray-700 cursor-pointer",
                                        children: t(`processMapping.integrationGaps.${gapKey}`)
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, gapKey, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t pt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-gray-800 mb-4",
                        children: t('processMapping.maturityLevel.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('processMapping.maturityLevel.level')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                        value: formData.integrationMaturityLevel,
                                        onValueChange: (value)=>updateFormData('integrationMaturityLevel', value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: t('common.select')
                                                }, void 0, false, {
                                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "1",
                                                        children: t('processMapping.maturityLevel.levels.1')
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "2",
                                                        children: t('processMapping.maturityLevel.levels.2')
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "3",
                                                        children: t('processMapping.maturityLevel.levels.3')
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "4",
                                                        children: t('processMapping.maturityLevel.levels.4')
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "5",
                                                        children: t('processMapping.maturityLevel.levels.5')
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                                lineNumber: 165,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('processMapping.maturityLevel.activeIntegrations')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        value: formData.activeIntegrations,
                                        onChange: (e)=>updateFormData('activeIntegrations', e.target.value),
                                        placeholder: "25"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataAnalytics",
    ()=>DataAnalytics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
'use client';
;
;
;
;
;
;
;
function DataAnalytics({ formData, updateFormData, updateNestedData }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 border-b border-primary pb-3 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                        className: "h-6 w-6 text-primary"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-primary",
                        children: t('dataAnalytics.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                children: t('dataAnalytics.dataWarehouse')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                value: formData.dataWarehouse.platform || '',
                                onChange: (e)=>updateNestedData('dataWarehouse', 'platform', e.target.value),
                                placeholder: "e.g., Snowflake, Teradata, Oracle"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                children: t('dataAnalytics.biTool')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                value: formData.biTool,
                                onChange: (e)=>updateFormData('biTool', e.target.value),
                                placeholder: "e.g., Tableau, Power BI, QlikView"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                children: t('dataAnalytics.dataGovernance')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: formData.dataGovernance,
                                onValueChange: (value)=>updateFormData('dataGovernance', value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: t('common.select')
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "formal",
                                                children: t('dataAnalytics.options.governance.formal')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "informal",
                                                children: t('dataAnalytics.options.governance.informal')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "developing",
                                                children: t('dataAnalytics.options.governance.developing')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "none",
                                                children: t('dataAnalytics.options.governance.none')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                                lineNumber: 64,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                children: t('dataAnalytics.dataLake')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: formData.dataLake,
                                onValueChange: (value)=>updateFormData('dataLake', value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: t('common.select')
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "production",
                                                children: t('dataAnalytics.options.dataLake.production')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "pilot",
                                                children: t('dataAnalytics.options.dataLake.pilot')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "planned",
                                                children: t('dataAnalytics.options.dataLake.planned')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "none",
                                                children: t('dataAnalytics.options.dataLake.none')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: t('dataAnalytics.masterData')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                        value: typeof formData.masterData === 'string' ? formData.masterData : '',
                        onChange: (e)=>updateFormData('masterData', e.target.value),
                        placeholder: "Describe your MDM approach, tools, and domains (Student, HR, Finance, etc.)",
                        rows: 3
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 max-w-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Data Quality Score (1-5)"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        type: "number",
                        min: "1",
                        max: "5",
                        step: "0.1",
                        value: formData.dataQualityScore,
                        onChange: (e)=>updateFormData('dataQualityScore', e.target.value),
                        placeholder: "3.5"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AITechnology",
    ()=>AITechnology
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/brain.js [app-ssr] (ecmascript) <export default as Brain>");
'use client';
;
;
;
;
;
;
;
;
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
function AITechnology({ formData, updateFormData }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])();
    const handleUseCaseChange = (useCase, checked)=>{
        const currentUseCases = formData.aiUseCases || [];
        if (checked) {
            updateFormData('aiUseCases', [
                ...currentUseCases,
                useCase
            ]);
        } else {
            updateFormData('aiUseCases', currentUseCases.filter((u)=>u !== useCase));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 border-b border-primary pb-3 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                        className: "h-6 w-6 text-primary"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-primary",
                        children: "AI & Emerging Technologies"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                children: "AI Strategy Status"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: formData.aiStrategy,
                                onValueChange: (value)=>updateFormData('aiStrategy', value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: t('common.select')
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "no_strategy",
                                                children: "No formal AI strategy"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                                lineNumber: 64,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "exploring",
                                                children: "Exploring AI opportunities"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "developing",
                                                children: "Developing AI strategy"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "implemented",
                                                children: "AI strategy implemented"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "mature",
                                                children: "Mature AI program"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                                lineNumber: 68,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                children: "Annual AI/ML Spending (USD)"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                value: formData.aiSpending,
                                onChange: (e)=>updateFormData('aiSpending', e.target.value),
                                placeholder: "e.g., $100,000"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                children: "AI/ML Platforms in Use"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                value: formData.aiPlatforms,
                                onChange: (e)=>updateFormData('aiPlatforms', e.target.value),
                                placeholder: "e.g., Azure AI, AWS SageMaker, Google AI, OpenAI"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                children: "AI Governance Framework"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: formData.aiGovernance,
                                onValueChange: (value)=>updateFormData('aiGovernance', value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: t('common.select')
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "none",
                                                children: "No governance framework"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "informal",
                                                children: "Informal guidelines"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "developing",
                                                children: "Framework in development"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "formal",
                                                children: "Formal governance in place"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                                lineNumber: 107,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "mature",
                                                children: "Mature governance with oversight"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t pt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-gray-800 mb-4",
                        children: "AI Use Cases (Current or Planned)"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                        children: aiUseCaseOptions.map((useCase)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                        id: `ai-${useCase}`,
                                        checked: (formData.aiUseCases || []).includes(useCase),
                                        onCheckedChange: (checked)=>handleUseCaseChange(useCase, checked)
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: `ai-${useCase}`,
                                        className: "text-sm text-gray-700 cursor-pointer",
                                        children: useCase
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, useCase, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: "AI Initiatives & Challenges"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                        placeholder: "Describe current AI initiatives, challenges, and future plans...",
                        rows: 4
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Infrastructure",
    ()=>Infrastructure
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/cloud.js [app-ssr] (ecmascript) <export default as Cloud>");
'use client';
;
;
;
;
;
;
;
const cloudProviders = [
    'AWS',
    'Microsoft Azure',
    'Google Cloud',
    'Oracle Cloud',
    'IBM Cloud',
    'Other'
];
function Infrastructure({ formData, updateFormData, updateNestedData }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])();
    const handleProviderChange = (provider, checked)=>{
        const currentProviders = formData.cloudAdoption.providers || [];
        if (checked) {
            updateNestedData('cloudAdoption', 'providers', [
                ...currentProviders,
                provider
            ]);
        } else {
            updateNestedData('cloudAdoption', 'providers', currentProviders.filter((p)=>p !== provider));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 border-b border-primary pb-3 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                        className: "h-6 w-6 text-primary"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-primary",
                        children: t('infrastructure.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        className: "required",
                        children: t('survey.fields.datacenterStrategy')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                        value: formData.datacenterStrategy,
                        onValueChange: (value)=>updateFormData('datacenterStrategy', value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                className: "max-w-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                    placeholder: t('common.select')
                                }, void 0, false, {
                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "on_premise",
                                        children: t('survey.options.datacenterStrategy.on_premise')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "colocation",
                                        children: t('survey.options.datacenterStrategy.colocation')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "cloud_first",
                                        children: t('survey.options.datacenterStrategy.cloud_first')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "hybrid",
                                        children: t('survey.options.datacenterStrategy.hybrid')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "cloud_only",
                                        children: t('survey.options.datacenterStrategy.cloud_only')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-lg p-4 bg-gray-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-gray-800 mb-4",
                        children: t('infrastructure.cloudAdoption.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('infrastructure.cloudAdoption.providers')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: cloudProviders.map((provider)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                        id: `cloud-${provider}`,
                                                        checked: (formData.cloudAdoption.providers || []).includes(provider),
                                                        onCheckedChange: (checked)=>handleProviderChange(provider, checked)
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: `cloud-${provider}`,
                                                        className: "text-sm text-gray-700 cursor-pointer",
                                                        children: provider
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, provider, true, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                children: t('infrastructure.cloudAdoption.spend')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                value: formData.cloudAdoption.spend || '',
                                                onChange: (e)=>updateNestedData('cloudAdoption', 'spend', e.target.value),
                                                placeholder: "e.g., $2,000,000"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                children: t('infrastructure.cloudAdoption.workloadPercent')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "number",
                                                value: formData.cloudAdoption.workloadPercent || '',
                                                onChange: (e)=>updateNestedData('cloudAdoption', 'workloadPercent', e.target.value),
                                                placeholder: "40"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-lg p-4 bg-gray-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-gray-800 mb-4",
                        children: t('infrastructure.network.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('infrastructure.network.vendor')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        value: formData.networkInfra.vendor || '',
                                        onChange: (e)=>updateNestedData('networkInfra', 'vendor', e.target.value),
                                        placeholder: "e.g., Cisco, Juniper, Arista"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('infrastructure.network.bandwidth')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        value: formData.networkInfra.bandwidth || '',
                                        onChange: (e)=>updateNestedData('networkInfra', 'bandwidth', e.target.value),
                                        placeholder: "10"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('infrastructure.network.wifi')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                        value: formData.networkInfra.wifi || '',
                                        onValueChange: (value)=>updateNestedData('networkInfra', 'wifi', value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: t('common.select')
                                                }, void 0, false, {
                                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "wifi6e",
                                                        children: "Wi-Fi 6E"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "wifi6",
                                                        children: "Wi-Fi 6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "wifi5",
                                                        children: "Wi-Fi 5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "mixed",
                                                        children: "Mixed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('infrastructure.network.sdwan')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                        value: formData.networkInfra.sdwan || '',
                                        onValueChange: (value)=>updateNestedData('networkInfra', 'sdwan', value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: t('common.select')
                                                }, void 0, false, {
                                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                                lineNumber: 159,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "deployed",
                                                        children: "Fully Deployed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "partial",
                                                        children: "Partially Deployed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "planned",
                                                        children: "Planned"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: "none",
                                                        children: "Not Implemented"
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: t('infrastructure.virtualization')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        value: formData.virtualizationPlatform,
                        onChange: (e)=>updateFormData('virtualizationPlatform', e.target.value),
                        placeholder: "e.g., VMware, Hyper-V, KVM",
                        className: "max-w-md"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                children: "Backup Solution"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                value: formData.backupSolution,
                                onChange: (e)=>updateFormData('backupSolution', e.target.value),
                                placeholder: "e.g., Veeam, Commvault, Rubrik"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                children: "DR Site"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                value: formData.drSite,
                                onChange: (e)=>updateFormData('drSite', e.target.value),
                                placeholder: "e.g., Secondary DC, Cloud DR"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Security",
    ()=>Security
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
'use client';
;
;
;
;
;
;
;
const complianceOptions = [
    'FERPA',
    'HIPAA',
    'PCI DSS',
    'GDPR',
    'CCPA',
    'SOC 2',
    'FISMA',
    'ITAR'
];
function Security({ formData, updateFormData, updateNestedData }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])();
    const handleComplianceChange = (standard, checked)=>{
        const currentStandards = formData.complianceStandards || [];
        if (checked) {
            updateFormData('complianceStandards', [
                ...currentStandards,
                standard
            ]);
        } else {
            updateFormData('complianceStandards', currentStandards.filter((s)=>s !== standard));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 border-b border-primary pb-3 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                        className: "h-6 w-6 text-primary"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-primary",
                        children: t('security.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                className: "required",
                                children: t('security.framework')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: formData.securityFramework,
                                onValueChange: (value)=>updateFormData('securityFramework', value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: t('common.select')
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "nist",
                                                children: "NIST Cybersecurity Framework"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                                lineNumber: 52,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "iso27001",
                                                children: "ISO 27001"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                                lineNumber: 53,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "cis",
                                                children: "CIS Controls"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                                lineNumber: 54,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "custom",
                                                children: "Custom Framework"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "none",
                                                children: "No Formal Framework"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                children: t('security.reporting')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: formData.securityReporting,
                                onValueChange: (value)=>updateFormData('securityReporting', value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: t('common.select')
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "cio",
                                                children: "CIO/IT Leadership"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "president",
                                                children: "President/Chancellor"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "cfo",
                                                children: "CFO"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                                lineNumber: 74,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "legal",
                                                children: "General Counsel"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "other",
                                                children: "Other"
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: t('security.compliance')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                        children: complianceOptions.map((standard)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                        id: `compliance-${standard}`,
                                        checked: (formData.complianceStandards || []).includes(standard),
                                        onCheckedChange: (checked)=>handleComplianceChange(standard, checked)
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: `compliance-${standard}`,
                                        className: "text-sm text-gray-700 cursor-pointer",
                                        children: standard
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, standard, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: t('security.tools.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                value: formData.securityTools.endpoint || '',
                                onChange: (e)=>updateNestedData('securityTools', 'endpoint', e.target.value),
                                placeholder: `${t('security.tools.endpoint')} (e.g., CrowdStrike, Microsoft Defender)`
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                value: formData.securityTools.siem || '',
                                onChange: (e)=>updateNestedData('securityTools', 'siem', e.target.value),
                                placeholder: `${t('security.tools.siem')} (e.g., Splunk, QRadar)`
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                value: formData.securityTools.iam || '',
                                onChange: (e)=>updateNestedData('securityTools', 'iam', e.target.value),
                                placeholder: `${t('security.tools.iam')} (e.g., Okta, Duo)`
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                value: formData.securityTools.firewall || '',
                                onChange: (e)=>updateNestedData('securityTools', 'firewall', e.target.value),
                                placeholder: `${t('security.tools.firewall')} (e.g., Palo Alto, Fortinet)`
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                children: t('security.mfa')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: formData.mfaImplementation,
                                onValueChange: (value)=>updateFormData('mfaImplementation', value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: t('common.select')
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "universal",
                                                children: t('security.options.mfa.universal')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "staff",
                                                children: t('security.options.mfa.staff')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "selective",
                                                children: t('security.options.mfa.selective')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "pilot",
                                                children: t('security.options.mfa.pilot')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "none",
                                                children: t('security.options.mfa.none')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                children: t('security.training')
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: formData.securityTraining,
                                onValueChange: (value)=>updateFormData('securityTraining', value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: t('common.select')
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "annual_mandatory",
                                                children: t('security.options.training.annual_mandatory')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "quarterly",
                                                children: t('security.options.training.quarterly')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                                lineNumber: 164,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "ad_hoc",
                                                children: t('security.options.training.ad_hoc')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                                lineNumber: 165,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "none",
                                                children: t('security.options.training.none')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                                lineNumber: 166,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                children: "Last Security Audit Date"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                value: formData.lastSecurityAudit,
                                onChange: (e)=>updateFormData('lastSecurityAudit', e.target.value),
                                placeholder: "e.g., March 2024"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                children: "Major Security Incidents (Last 12 months)"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                type: "number",
                                value: formData.securityIncidents,
                                onChange: (e)=>updateFormData('securityIncidents', e.target.value),
                                placeholder: "0"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Financial",
    ()=>Financial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
'use client';
;
;
;
;
;
function Financial({ formData, updateFormData, updateNestedData }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])();
    const budgetCategories = [
        {
            key: 'personnel',
            label: t('financial.breakdown.personnel')
        },
        {
            key: 'hardware',
            label: t('financial.breakdown.hardware')
        },
        {
            key: 'software',
            label: t('financial.breakdown.software')
        },
        {
            key: 'cloud',
            label: t('financial.breakdown.cloud')
        },
        {
            key: 'telecom',
            label: t('financial.breakdown.telecom')
        },
        {
            key: 'security',
            label: t('financial.breakdown.security')
        },
        {
            key: 'projects',
            label: t('financial.breakdown.projects')
        },
        {
            key: 'support',
            label: t('financial.breakdown.support')
        },
        {
            key: 'training',
            label: t('financial.breakdown.training')
        },
        {
            key: 'other',
            label: t('financial.breakdown.other')
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 border-b border-primary pb-3 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                        className: "h-6 w-6 text-primary"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-primary",
                        children: t('financial.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "info-box info-box-success mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-green-800",
                    children: t('financial.note')
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        className: "required text-lg",
                        children: t('financial.totalBudget')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        value: formData.totalItBudget,
                        onChange: (e)=>updateFormData('totalItBudget', e.target.value),
                        placeholder: "e.g., $15,000,000",
                        className: "text-lg max-w-md"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t pt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-gray-800 mb-4",
                        children: [
                            t('financial.breakdown.title'),
                            " (USD or %)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: budgetCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm text-gray-700",
                                        children: category.label
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        value: formData.budgetBreakdown[category.key] || '',
                                        onChange: (e)=>updateNestedData('budgetBreakdown', category.key, e.target.value),
                                        placeholder: "$0 or 0%"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, category.key, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t pt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-gray-800 mb-4",
                        children: t('financial.metrics.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('financial.metrics.budgetPercent')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        step: "0.1",
                                        value: formData.itBudgetPercent,
                                        onChange: (e)=>updateFormData('itBudgetPercent', e.target.value),
                                        placeholder: "e.g., 4.5"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('financial.metrics.costPerStudent')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        value: formData.costPerStudent,
                                        onChange: (e)=>updateFormData('costPerStudent', e.target.value),
                                        placeholder: "e.g., 850"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('financial.metrics.costPerEmployee')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        value: formData.costPerEmployee,
                                        onChange: (e)=>updateFormData('costPerEmployee', e.target.value),
                                        placeholder: "e.g., 3200"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('financial.metrics.capexOpex')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        value: formData.capexOpexRatio,
                                        onChange: (e)=>updateFormData('capexOpexRatio', e.target.value),
                                        placeholder: "e.g., 30/70 or 40/60"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Digitization",
    ()=>Digitization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
'use client';
;
;
;
;
;
;
;
function Digitization({ formData, updateFormData, updateNestedData }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])();
    const processCategories = [
        {
            title: t('digitization.studentLifecycle.title'),
            processes: [
                {
                    key: 'admissions',
                    label: t('digitization.studentLifecycle.admissions'),
                    desc: 'Application processing, CRM, communication'
                },
                {
                    key: 'enrollment',
                    label: t('digitization.studentLifecycle.enrollment'),
                    desc: 'Course registration, payment processing'
                },
                {
                    key: 'academic',
                    label: t('digitization.studentLifecycle.academic'),
                    desc: 'Grade management, transcripts, scheduling'
                },
                {
                    key: 'student_services',
                    label: t('digitization.studentLifecycle.studentServices'),
                    desc: 'Advising, support services, career services'
                },
                {
                    key: 'alumni',
                    label: t('digitization.studentLifecycle.alumni'),
                    desc: 'Alumni engagement and fundraising'
                }
            ]
        },
        {
            title: t('digitization.academicAdmin.title'),
            processes: [
                {
                    key: 'curriculum',
                    label: t('digitization.academicAdmin.curriculum'),
                    desc: 'Program and course management'
                },
                {
                    key: 'quality',
                    label: t('digitization.academicAdmin.quality'),
                    desc: 'Accreditation, assessment, compliance'
                },
                {
                    key: 'library',
                    label: t('digitization.academicAdmin.library'),
                    desc: 'Digital resources, catalog management'
                },
                {
                    key: 'research',
                    label: t('digitization.academicAdmin.research'),
                    desc: 'Grant management, research data'
                }
            ]
        },
        {
            title: t('digitization.backOffice.title'),
            processes: [
                {
                    key: 'finance',
                    label: t('digitization.backOffice.finance'),
                    desc: 'Financial management, budget, reporting'
                },
                {
                    key: 'hr',
                    label: t('digitization.backOffice.hr'),
                    desc: 'Recruiting, payroll, performance management'
                },
                {
                    key: 'procurement',
                    label: t('digitization.backOffice.procurement'),
                    desc: 'Purchase orders, vendor management'
                },
                {
                    key: 'facilities',
                    label: t('digitization.backOffice.facilities'),
                    desc: 'Space management, work orders, assets'
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 border-b border-primary pb-3 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                        className: "h-6 w-6 text-primary"
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-primary",
                        children: t('digitization.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "info-box mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-700",
                    children: t('digitization.description')
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            processCategories.map((category, catIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border rounded-lg p-4 bg-gray-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-gray-800 mb-4",
                            children: category.title
                        }, void 0, false, {
                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: category.processes.map((process)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700",
                                                    children: process.label
                                                }, void 0, false, {
                                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500",
                                                    children: process.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                            value: formData.processMaturity[process.key] || '',
                                            onValueChange: (value)=>updateNestedData('processMaturity', process.key, value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                    className: "w-36",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                        placeholder: "Rate..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "1",
                                                            children: t('digitization.maturityRatings.1')
                                                        }, void 0, false, {
                                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "2",
                                                            children: t('digitization.maturityRatings.2')
                                                        }, void 0, false, {
                                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "3",
                                                            children: t('digitization.maturityRatings.3')
                                                        }, void 0, false, {
                                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "4",
                                                            children: t('digitization.maturityRatings.4')
                                                        }, void 0, false, {
                                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "5",
                                                            children: t('digitization.maturityRatings.5')
                                                        }, void 0, false, {
                                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, process.key, true, {
                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, catIndex, true, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t pt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-gray-800 mb-4",
                        children: t('digitization.overallScores.title')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('digitization.overallScores.processDigitization')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        min: "1",
                                        max: "5",
                                        step: "0.1",
                                        value: formData.processDigitizationScore,
                                        onChange: (e)=>updateFormData('processDigitizationScore', e.target.value),
                                        placeholder: "1.0 - 5.0"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('digitization.overallScores.dataMaturity')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        min: "1",
                                        max: "5",
                                        step: "0.1",
                                        value: formData.dataMaturityScore,
                                        onChange: (e)=>updateFormData('dataMaturityScore', e.target.value),
                                        placeholder: "1.0 - 5.0"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        children: t('digitization.overallScores.itOperations')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        min: "1",
                                        max: "5",
                                        step: "0.1",
                                        value: formData.itOperationsScore,
                                        onChange: (e)=>updateFormData('itOperationsScore', e.target.value),
                                        placeholder: "1.0 - 5.0"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        children: t('digitization.painPoints')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                        value: formData.painPoints,
                        onChange: (e)=>updateFormData('painPoints', e.target.value),
                        placeholder: "Describe major pain points in current processes and potential quick wins...",
                        rows: 4
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SurveyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$hooks$2f$useSurveyForm$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/hooks/useSurveyForm.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$types$2f$survey$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/types/survey.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/ui/progress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$SurveyNavigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/SurveyNavigation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$InstitutionProfile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/InstitutionProfile.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$ITOrganization$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITOrganization.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$ITProcesses$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ITProcesses.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$ApplicationsPortfolio$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ApplicationsPortfolio.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$ProcessMapping$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/ProcessMapping.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$DataAnalytics$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/DataAnalytics.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$AITechnology$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/AITechnology.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$Infrastructure$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Infrastructure.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$Security$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Security.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$Financial$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Financial.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$Digitization$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/components/Digitization.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function SurveyPage() {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    const { formData, currentSection, completedSections, isSaving, lastSaved, updateFormData, updateNestedData, setCurrentSection, markSectionComplete, saveData, exportData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$hooks$2f$useSurveyForm$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSurveyForm"])();
    const progress = Math.round(completedSections.size / __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$types$2f$survey$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SURVEY_SECTIONS"].length * 100);
    const renderSection = ()=>{
        const commonProps = {
            formData,
            updateFormData,
            updateNestedData
        };
        switch(currentSection){
            case 0:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$InstitutionProfile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InstitutionProfile"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                    lineNumber: 59,
                    columnNumber: 16
                }, this);
            case 1:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$ITOrganization$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ITOrganization"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                    lineNumber: 61,
                    columnNumber: 16
                }, this);
            case 2:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$ITProcesses$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ITProcesses"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                    lineNumber: 63,
                    columnNumber: 16
                }, this);
            case 3:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$ApplicationsPortfolio$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApplicationsPortfolio"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                    lineNumber: 65,
                    columnNumber: 16
                }, this);
            case 4:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$ProcessMapping$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProcessMapping"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                    lineNumber: 67,
                    columnNumber: 16
                }, this);
            case 5:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$DataAnalytics$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataAnalytics"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                    lineNumber: 69,
                    columnNumber: 16
                }, this);
            case 6:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$AITechnology$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AITechnology"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                    lineNumber: 71,
                    columnNumber: 16
                }, this);
            case 7:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$Infrastructure$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Infrastructure"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                    lineNumber: 73,
                    columnNumber: 16
                }, this);
            case 8:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$Security$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Security"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                    lineNumber: 75,
                    columnNumber: 16
                }, this);
            case 9:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$Financial$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Financial"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                    lineNumber: 77,
                    columnNumber: 16
                }, this);
            case 10:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$Digitization$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Digitization"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                    lineNumber: 79,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$InstitutionProfile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InstitutionProfile"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                    lineNumber: 81,
                    columnNumber: 16
                }, this);
        }
    };
    const handlePrevious = ()=>{
        if (currentSection > 0) {
            setCurrentSection(currentSection - 1);
        }
    };
    const handleNext = ()=>{
        if (currentSection < __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$types$2f$survey$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SURVEY_SECTIONS"].length - 1) {
            setCurrentSection(currentSection + 1);
        }
    };
    const handleMarkComplete = ()=>{
        markSectionComplete(currentSection);
        if (currentSection < __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$types$2f$survey$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SURVEY_SECTIONS"].length - 1) {
            setCurrentSection(currentSection + 1);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background-gray py-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-md p-6 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold text-primary",
                                            children: t('header.title')
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 mt-1",
                                            children: t('header.subtitle')
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        isSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "save-indicator save-indicator-saving",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-3 w-3 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t('common.saving')
                                                }, void 0, false, {
                                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this) : lastSaved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "save-indicator save-indicator-saved",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t('common.saved')
                                                }, void 0, false, {
                                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            onClick: exportData,
                                            className: "border-primary text-primary hover:bg-primary hover:text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 17
                                                }, this),
                                                t('common.export')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>saveData(),
                                            disabled: isSaving,
                                            className: "bg-primary hover:bg-primary-dark text-white",
                                            children: [
                                                isSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-4 w-4 mr-2 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this),
                                                t('common.save')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-sm text-gray-600 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                t('survey.progress'),
                                                ": ",
                                                progress,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                completedSections.size,
                                                " ",
                                                t('survey.of'),
                                                " ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$types$2f$survey$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SURVEY_SECTIONS"].length,
                                                " ",
                                                t('survey.sectionsComplete')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                    value: progress,
                                    className: "h-2"
                                }, void 0, false, {
                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$app$2f5b$locale$5d2f$survey$2f$components$2f$SurveyNavigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SurveyNavigation"], {
                            sections: __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$types$2f$survey$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SURVEY_SECTIONS"],
                            currentSection: currentSection,
                            completedSections: completedSections,
                            onSectionChange: setCurrentSection
                        }, void 0, false, {
                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-md p-6 md:p-8 mb-6",
                    children: [
                        renderSection(),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: handlePrevious,
                                    disabled: currentSection === 0,
                                    className: "w-full sm:w-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this),
                                        t('common.previous')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleMarkComplete,
                                    className: "w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, this),
                                        t('common.markComplete')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleNext,
                                    disabled: currentSection === __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$types$2f$survey$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SURVEY_SECTIONS"].length - 1,
                                    className: "w-full sm:w-auto bg-primary hover:bg-primary-dark text-white",
                                    children: [
                                        t('common.next'),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "h-4 w-4 ml-2"
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "info-box rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-primary mb-2",
                                        children: t('survey.guidelines.title')
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "text-sm text-gray-700 space-y-1 list-disc list-inside",
                                        children: t.raw('survey.guidelines.items').map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: item
                                            }, index, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
            lineNumber: 106,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/app/[locale]/survey/page.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=My_files_Master%20files_RnD_105-survey-001-20251224_itsm-survey_src_6fa10824._.js.map