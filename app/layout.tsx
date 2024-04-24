import '@/app/ui/global.css';

import { lato } from '@/app/ui/fonts';
import clsx from 'clsx';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(lato.className, 'antialiased')}>{children}</body>
    </html>
  );
}
