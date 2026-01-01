'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { LanguageSwitcher } from './LanguageSwitcher';
import { BookOpen, Info } from 'lucide-react';

interface HeaderProps {
  showProgress?: boolean;
  progress?: number;
}

export function Header({ showProgress = false, progress = 0 }: HeaderProps) {
  const t = useTranslations('header');
  const locale = useLocale();

  return (
    <header className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <Link href={`/${locale}`} className="flex items-center gap-3 hover:opacity-90 transition-opacity cursor-pointer">
            <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg">
              <BookOpen className="w-6 h-6 text-accent-gold" />
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">
                {t('title')}
              </h1>
              <p className="text-xs text-white/70 hidden sm:block">
                {t('subtitle')}
              </p>
            </div>
          </Link>

          {/* Right side - Navigation and Language Switcher */}
          <div className="flex items-center gap-4">
            <Link 
              href={`/${locale}/about`}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <Info className="h-4 w-4" />
              <span className="hidden sm:inline">
                {locale === 'vi' ? 'Giới thiệu' : 'About'}
              </span>
            </Link>
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>

        {/* Progress Bar */}
        {showProgress && (
          <div className="pb-3">
            <div className="w-full bg-white/20 rounded-full h-1.5">
              <div
                className="bg-accent-gold h-1.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

