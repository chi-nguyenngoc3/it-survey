module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/lib/i18n/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * i18n Configuration
 * Defines supported locales and default locale
 */ __turbopack_context__.s([
    "defaultLocale",
    ()=>defaultLocale,
    "localeFlags",
    ()=>localeFlags,
    "localeNames",
    ()=>localeNames,
    "locales",
    ()=>locales
]);
const locales = [
    'vi',
    'en'
];
const defaultLocale = 'vi';
const localeNames = {
    vi: 'Tiếng Việt',
    en: 'English'
};
const localeFlags = {
    vi: '🇻🇳',
    en: '🇬🇧'
};
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/LanguageSwitcher.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageSwitcher",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/lib/i18n/config.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function LanguageSwitcher({ currentLocale }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const handleLocaleChange = (newLocale)=>{
        // Replace the current locale in the pathname
        const segments = pathname.split('/');
        segments[1] = newLocale;
        const newPath = segments.join('/');
        router.push(newPath);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1 bg-white/10 rounded-lg p-1",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locales"].map((locale)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>handleLocaleChange(locale),
                className: `
            flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium
            transition-all duration-200
            ${currentLocale === locale ? 'bg-white text-primary shadow-sm' : 'text-white/80 hover:text-white hover:bg-white/10'}
          `,
                title: __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localeNames"][locale],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-base",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localeFlags"][locale]
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/LanguageSwitcher.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:inline uppercase",
                        children: locale
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/LanguageSwitcher.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                ]
            }, locale, true, {
                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/LanguageSwitcher.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/LanguageSwitcher.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/LanguageSwitcher.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
'use client';
;
;
;
;
function Header({ showProgress = false, progress = 0 }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('header');
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-primary text-white shadow-lg sticky top-0 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        className: "w-6 h-6 text-accent-gold"
                                    }, void 0, false, {
                                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Header.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Header.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-lg font-semibold tracking-tight",
                                            children: t('title')
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Header.tsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-white/70 hidden sm:block",
                                            children: t('subtitle')
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Header.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Header.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Header.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {
                                currentLocale: locale
                            }, void 0, false, {
                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Header.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Header.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Header.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                showProgress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pb-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-white/20 rounded-full h-1.5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-accent-gold h-1.5 rounded-full transition-all duration-500 ease-out",
                            style: {
                                width: `${progress}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Header.tsx",
                            lineNumber: 45,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Header.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Header.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Header.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Header.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
'use client';
;
;
function Footer() {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('footer');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-primary-darker text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-accent-gold font-semibold mb-3",
                                    children: "ITSM Survey"
                                }, void 0, false, {
                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Footer.tsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-white/70 leading-relaxed",
                                    children: "IT Service Management Data Collection Platform for Educational Institutions"
                                }, void 0, false, {
                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Footer.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Footer.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-accent-gold font-semibold mb-3",
                                    children: "Quick Links"
                                }, void 0, false, {
                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Footer.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-white/70 hover:text-white transition-colors",
                                                children: t('privacy')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Footer.tsx",
                                                lineNumber: 25,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Footer.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-white/70 hover:text-white transition-colors",
                                                children: t('terms')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Footer.tsx",
                                                lineNumber: 30,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Footer.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-white/70 hover:text-white transition-colors",
                                                children: t('contact')
                                            }, void 0, false, {
                                                fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Footer.tsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Footer.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Footer.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Footer.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-accent-gold font-semibold mb-3",
                                    children: t('contact')
                                }, void 0, false, {
                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Footer.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-white/70",
                                    children: "For technical support or questions, please contact your project coordinator."
                                }, void 0, false, {
                                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Footer.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Footer.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Footer.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 pt-6 border-t border-white/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_files$2f$Master__files$2f$RnD$2f$105$2d$survey$2d$001$2d$20251224$2f$itsm$2d$survey$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-sm text-white/50",
                        children: t('copyright')
                    }, void 0, false, {
                        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Footer.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Footer.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Footer.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/My_files/Master files/RnD/105-survey-001-20251224/itsm-survey/src/components/Footer.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a95494ec._.js.map