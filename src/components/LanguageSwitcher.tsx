'use client';

import { useRouter, usePathname } from 'next/navigation';
import { locales, localeFlags, localeNames, type Locale } from '@/lib/i18n/config';

interface LanguageSwitcherProps {
  currentLocale: string;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: Locale) => {
    // Replace the current locale in the pathname
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLocaleChange(locale)}
          className={`
            flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium
            transition-all duration-200
            ${currentLocale === locale
              ? 'bg-white text-primary shadow-sm'
              : 'text-white/80 hover:text-white hover:bg-white/10'
            }
          `}
          title={localeNames[locale]}
        >
          <span className="text-base">{localeFlags[locale]}</span>
          <span className="hidden sm:inline uppercase">{locale}</span>
        </button>
      ))}
    </div>
  );
}

