import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://enzuvia.com.br'),

  title: {
    default: 'Enzuvia | Gestão e automação de pendências externas',
    template: '%s | Enzuvia',
  },

  description:
    'Centralize documentos, prazos e pendências que dependem de clientes, fornecedores e parceiros. O Enzuvia acompanha tudo até a resolução.',

  applicationName: 'Enzuvia',

  keywords: [
    'gestão de pendências',
    'automação de cobranças',
    'cobrança de documentos',
    'gestão de documentos',
    'pendências externas',
    'automação de processos',
    'acompanhamento de pendências',
    'software de gestão',
  ],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Enzuvia | Gestão e automação de pendências externas',
    description:
      'Pare de correr atrás do que ainda precisa acontecer. Centralize pendências, documentos e prazos em um único fluxo.',
    url: 'https://enzuvia.com.br',
    siteName: 'Enzuvia',
    locale: 'pt_BR',
    type: 'website',
  },

  twitter: {
    card: 'summary',
    title: 'Enzuvia | Gestão de pendências externas',
    description:
      'Centralize o que sua empresa ainda precisa receber e acompanhe cada pendência até a resolução.',
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  )
}