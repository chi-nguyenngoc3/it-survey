import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ITSM Survey',
  description: 'IT Service Management Data Collection for Education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
