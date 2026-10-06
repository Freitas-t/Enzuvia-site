import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description:
    'Termos aplicáveis à utilização da plataforma Enzuvia.',
}

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-950">
      <header className="bg-[#07111f] text-white">
        <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-xl font-semibold tracking-[-0.03em]"
          >
            Enzuvia
          </Link>

          <Link
            href="/"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Voltar ao site
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Uso da plataforma
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
          Termos de Uso
        </h1>

        <p className="mt-5 text-sm text-slate-500">
          Última atualização: 6 de outubro de 2026
        </p>

        <div className="mt-12 space-y-10 text-base leading-7 text-slate-600">
          <LegalSection title="1. O Enzuvia">
            <p>
              O Enzuvia é uma plataforma de gestão e
              automação de pendências externas, destinada a
              auxiliar organizações no acompanhamento de
              documentos, informações, prazos, entregas e
              outras solicitações que dependam de terceiros.
            </p>
          </LegalSection>

          <LegalSection title="2. Aceitação dos termos">
            <p>
              Ao criar uma conta, contratar ou utilizar o
              Enzuvia, o usuário declara ter lido e
              concordado com estes Termos de Uso e com a
              Política de Privacidade aplicável.
            </p>
          </LegalSection>

          <LegalSection title="3. Conta e organização">
            <p>
              O usuário é responsável por fornecer
              informações corretas, manter suas credenciais
              protegidas e utilizar a plataforma de forma
              compatível com sua atividade profissional.
            </p>

            <p>
              O responsável pela organização poderá possuir
              permissões adicionais relacionadas à
              administração da conta, membros e assinatura.
            </p>
          </LegalSection>

          <LegalSection title="4. Uso permitido">
            <p>
              O Enzuvia deve ser utilizado para finalidades
              legítimas relacionadas ao acompanhamento e à
              gestão de pendências, documentos e
              informações.
            </p>

            <p>
              Não é permitido utilizar a plataforma para
              atividades ilegais, fraudulentas, abusivas,
              para disseminação de conteúdo malicioso ou
              para violar direitos de terceiros.
            </p>
          </LegalSection>

          <LegalSection title="5. Dados e documentos inseridos">
            <p>
              A organização cliente é responsável pela
              legitimidade dos dados, documentos,
              solicitações e conteúdos que insere ou
              solicita por meio do Enzuvia.
            </p>

            <p>
              O uso da plataforma não transfere ao Enzuvia
              a responsabilidade pelas decisões tomadas
              pela organização cliente sobre quais dados
              solicitar, armazenar ou tratar.
            </p>
          </LegalSection>

          <LegalSection title="6. Assinatura e pagamento">
            <p>
              O acesso às funcionalidades contratadas poderá
              depender da existência de assinatura ativa.
            </p>

            <p>
              O preço, periodicidade e condições aplicáveis
              são apresentados antes da contratação.
            </p>

            <p>
              O plano comercial atual do Enzuvia possui
              cobrança mensal por organização, conforme
              valor apresentado na página de contratação.
            </p>
          </LegalSection>

          <LegalSection title="7. Cancelamento">
            <p>
              A assinatura poderá ser cancelada pelo
              responsável autorizado pela organização.
            </p>

            <p>
              O cancelamento impede novas cobranças de
              acordo com as condições aplicáveis à
              assinatura, sem prejuízo de valores já
              devidos ou obrigações anteriormente
              constituídas.
            </p>
          </LegalSection>

          <LegalSection title="8. Disponibilidade do serviço">
            <p>
              O Enzuvia busca manter a plataforma
              disponível e funcional, mas poderá realizar
              manutenções, atualizações ou interrupções
              temporárias necessárias à operação,
              segurança ou evolução do serviço.
            </p>
          </LegalSection>

          <LegalSection title="9. Serviços de terceiros">
            <p>
              Algumas funcionalidades dependem de serviços
              fornecidos por terceiros, incluindo
              infraestrutura tecnológica, armazenamento,
              comunicação e meios de pagamento.
            </p>

            <p>
              Indisponibilidades ou alterações nesses
              serviços poderão afetar temporariamente
              determinadas funcionalidades do Enzuvia.
            </p>
          </LegalSection>

          <LegalSection title="10. Propriedade intelectual">
            <p>
              A plataforma, sua identidade, interface,
              software, estrutura, textos e demais
              elementos próprios do Enzuvia são protegidos
              pela legislação aplicável.
            </p>

            <p>
              A contratação concede ao usuário apenas o
              direito de utilização do serviço nos termos
              contratados, não implicando transferência de
              propriedade sobre o software.
            </p>
          </LegalSection>

          <LegalSection title="11. Responsabilidades">
            <p>
              Cada organização é responsável pelo uso que
              realiza da plataforma, pelas informações que
              fornece e pelas instruções enviadas a seus
              contatos.
            </p>

            <p>
              O Enzuvia adotará medidas razoáveis para
              prestação segura e adequada do serviço,
              observadas as limitações técnicas inerentes a
              serviços digitais e as disposições da
              legislação aplicável.
            </p>
          </LegalSection>

          <LegalSection title="12. Alterações no serviço e nos termos">
            <p>
              O Enzuvia poderá evoluir suas funcionalidades
              e atualizar estes Termos de Uso. Alterações
              relevantes serão disponibilizadas pelos
              canais apropriados.
            </p>
          </LegalSection>

          <LegalSection title="13. Legislação aplicável">
            <p>
              Estes termos são regidos pela legislação
              brasileira, sem prejuízo de direitos
              assegurados por normas obrigatórias
              aplicáveis ao usuário.
            </p>
          </LegalSection>

          <LegalSection title="14. Contato">
            <p>
              Dúvidas relacionadas a estes termos poderão
              ser encaminhadas pelos canais oficiais
              disponibilizados pelo Enzuvia.
            </p>
          </LegalSection>
        </div>
      </article>
    </main>
  )
}

function LegalSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-[-0.02em] text-slate-950">
        {title}
      </h2>

      <div className="mt-4 space-y-4">
        {children}
      </div>
    </section>
  )
}