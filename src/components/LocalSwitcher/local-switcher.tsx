'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const currentLocale = useLocale();

  const toggleLocale = () => {
    const nextLocale = currentLocale === 'en' ? 'ar' : 'en';
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  const buttonLabel = currentLocale === 'en' ? 'AR' : 'EN';

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className={`dark:text-white text-[14px]  hover:opacity-45 hover:border-b-2 hover:border-b-orange-600 ${currentLocale === "en" ? " font-medium hover:border-b-blue-600 " : ""}`}
        onClick={toggleLocale}
        aria-pressed={isPending}
        disabled={isPending}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
