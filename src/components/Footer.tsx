'use client';

import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-primary-darker text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-accent-gold font-semibold mb-3">ITSM Survey</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              IT Service Management Data Collection Platform for Educational Institutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-accent-gold font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  {t('privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  {t('terms')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-accent-gold font-semibold mb-3">{t('contact')}</h3>
            <p className="text-sm text-white/70">
              For technical support or questions, please contact your project coordinator.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-center text-sm text-white/50">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

