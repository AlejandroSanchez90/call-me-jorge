'use client';
import { cn } from '@/lib/utils';
import { Link } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { ChangeEvent, useTransition } from 'react';
import useCurrentLocale from '@/hooks/useCurrentLocale';
import useMobilMenu from '@/hooks/useMobileMenu';
import { useRouter } from 'next/navigation';
type Props = {
  className?: string;
};

function LanguageSwitcher({ className }: Props) {
  const t = useTranslations('LanguageSwitcher');
  const [isPending, startTransition] = useTransition();
  const locale = useCurrentLocale();
  const router = useRouter();
  const { onClose } = useMobilMenu();
  function handleClick(event: ChangeEvent<HTMLSelectElement>) {
    onClose();
    startTransition(() => {
      router.push(locale, { scroll: false });
    });
  }
  return (
    <li className={cn(`bg-sacbeOrange  px-4 py-1 rounded-full font-bold`, className)}>
      <button className='' value={t('label')} onClick={(e: any) => handleClick(e)}>
        {t('label')}
      </button>
    </li>
  );
}

export default LanguageSwitcher;
