import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portal de Saúde de Itaqui',
  description: 'Acesso organizado a serviços, informações e documentos de saúde.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
