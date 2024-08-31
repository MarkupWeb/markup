'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const currentLocale = useLocale();

  const toggleLocale = () => {
    const nextLocale = currentLocale === 'ar' ? 'en' : 'ar';
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  const buttonLabel = currentLocale === 'ar' ? 'EN' : 'AR';

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className={`text-white p-1 rounded-md text-[11px] hover:opacity-45 ${currentLocale === "en" ? "bg-[#F6AA02] font-medium " : "bg-blue-800"}`}
        onClick={toggleLocale}
        aria-pressed={isPending}
        disabled={isPending}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
