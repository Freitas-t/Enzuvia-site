import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Saiba como o Enzuvia trata e protege dados pessoais.',
}

export default function PrivacidadePage() {
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
          Privacidade
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
          Política de Privacidade
        </h1>

        <p className="mt-5 text-sm text-slate-500">
          Última atualização: 6 de outubro de 2026
        </p>

        <div className="mt-12 space-y-10 text-base leading-7 text-slate-600">
          <LegalSection title="1. Sobre esta política">
            <p>
              Esta Política de Privacidade explica como o
              Enzuvia trata dados pessoais relacionados ao
              uso de seu site, plataforma, contas,
              assinaturas, solicitações e demais recursos do
              serviço.
            </p>
          </LegalSection>

          <LegalSection title="2. Quais dados podem ser tratados">
            <p>
              Dependendo da forma de utilização do Enzuvia,
              podemos tratar dados como nome, e-mail,
              telefone, empresa, dados cadastrais e de
              faturamento, informações relacionadas à conta
              e registros técnicos necessários ao
              funcionamento e à segurança da plataforma.
            </p>

            <p>
              As organizações clientes também podem inserir
              dados de contatos e solicitar documentos ou
              informações a clientes, fornecedores,
              parceiros e outros terceiros.
            </p>

            <p>
              O conteúdo enviado em resposta a uma
              solicitação poderá conter dados pessoais,
              conforme a finalidade definida pela
              organização que realizou a solicitação.
            </p>
          </LegalSection>

          <LegalSection title="3. Como os dados são utilizados">
            <p>
              Os dados podem ser tratados para permitir a
              criação e administração de contas, prestar o
              serviço contratado, organizar pendências,
              receber documentos, registrar atividades,
              realizar comunicações, processar pagamentos,
              prevenir abusos e manter a segurança e o
              funcionamento da plataforma.
            </p>
          </LegalSection>

          <LegalSection title="4. Papel do Enzuvia e das organizações clientes">
            <p>
              Em relação aos dados necessários para
              administrar contas, assinaturas e a própria
              relação com seus usuários, o Enzuvia poderá
              atuar como controlador.
            </p>

            <p>
              Quando uma organização utiliza o Enzuvia para
              tratar dados de seus próprios clientes,
              fornecedores, parceiros ou outros contatos,
              essa organização define a finalidade desse
              tratamento. Nesses casos, o Enzuvia atua, em
              regra, como operador dos dados em nome da
              organização cliente.
            </p>
          </LegalSection>

          <LegalSection title="5. Compartilhamento com fornecedores">
            <p>
              Para prestar o serviço, o Enzuvia utiliza
              fornecedores de infraestrutura tecnológica,
              hospedagem, banco de dados, armazenamento,
              envio de e-mails, segurança e processamento
              de pagamentos.
            </p>

            <p>
              O compartilhamento é limitado ao necessário
              para a prestação desses serviços e para o
              funcionamento da plataforma.
            </p>
          </LegalSection>

          <LegalSection title="6. Armazenamento e segurança">
            <p>
              O Enzuvia adota medidas técnicas e
              administrativas destinadas a proteger dados
              e arquivos contra acesso não autorizado,
              perda, alteração ou divulgação indevida.
            </p>

            <p>
              Arquivos recebidos por meio das solicitações
              são mantidos em armazenamento privado, e o
              acesso interno é controlado de acordo com a
              organização e as permissões aplicáveis.
            </p>
          </LegalSection>

          <LegalSection title="7. Links públicos de solicitação">
            <p>
              Algumas pendências podem utilizar links
              individuais para permitir que um destinatário
              envie informações ou documentos sem precisar
              criar uma conta no Enzuvia.
            </p>

            <p>
              Esses links devem ser utilizados apenas pelo
              destinatário da solicitação e não devem ser
              compartilhados com terceiros sem necessidade.
            </p>
          </LegalSection>

          <LegalSection title="8. Conservação dos dados">
            <p>
              Os dados serão mantidos pelo período
              necessário para prestação dos serviços,
              cumprimento de obrigações legais,
              exercício de direitos, prevenção de fraudes
              e atendimento às finalidades para as quais
              foram tratados.
            </p>
          </LegalSection>

          <LegalSection title="9. Direitos dos titulares">
            <p>
              O titular poderá solicitar, quando aplicável,
              confirmação da existência de tratamento,
              acesso, correção, informações sobre o
              tratamento, anonimização, bloqueio,
              eliminação, portabilidade, oposição ou outros
              direitos previstos na legislação brasileira
              de proteção de dados.
            </p>

            <p>
              Quando os dados tiverem sido inseridos no
              Enzuvia por uma organização cliente, a
              solicitação poderá precisar ser direcionada
              inicialmente a essa organização, responsável
              pelas decisões sobre o tratamento.
            </p>
          </LegalSection>

          <LegalSection title="10. Dados de crianças e adolescentes">
            <p>
              O Enzuvia não é direcionado especificamente a
              crianças ou adolescentes. Caso uma organização
              cliente trate esse tipo de dado por meio da
              plataforma, ela é responsável por observar as
              exigências legais aplicáveis.
            </p>
          </LegalSection>

          <LegalSection title="11. Alterações desta política">
            <p>
              Esta política poderá ser atualizada para
              refletir mudanças no serviço, na legislação
              ou nas práticas de privacidade. A versão
              vigente permanecerá disponível nesta página.
            </p>
          </LegalSection>

          <LegalSection title="12. Contato">
            <p>
              Solicitações relacionadas à privacidade e à
              proteção de dados poderão ser encaminhadas
              pelos canais oficiais disponibilizados pelo
              Enzuvia.
            </p>

            <p className="font-medium text-slate-900">
              Antes da publicação, defina aqui o e-mail
              oficial de privacidade do Enzuvia.
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