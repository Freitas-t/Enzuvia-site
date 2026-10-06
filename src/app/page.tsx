import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-20%] h-[620px] w-[620px] rounded-full bg-emerald-400/10 blur-[140px]" />
        <div className="absolute right-[-10%] top-[5%] h-[680px] w-[680px] rounded-full bg-sky-500/10 blur-[160px]" />
        <div className="hero-grid absolute inset-0 opacity-30" />
      </div>

      {/* HEADER */}
      <header className="relative z-20">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 shadow-lg shadow-black/20 backdrop-blur">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 7.5L12 4l7 3.5v9L12 20l-7-3.5v-9Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M8.5 9.5h7M8.5 12h5M8.5 14.5h7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <span className="text-xl font-semibold tracking-[-0.03em]">
              Enzuvia
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a
              href="#produto"
              className="transition hover:text-white"
            >
              Produto
            </a>

            <a
              href="#como-funciona"
              className="transition hover:text-white"
            >
              Como funciona
            </a>

            <a
              href="#seguranca"
              className="transition hover:text-white"
            >
              Segurança
            </a>

            <a
              href="#preco"
              className="transition hover:text-white"
            >
              Preço
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://app.enzuvia.com.br/login"
              className="hidden text-sm font-medium text-slate-300 transition hover:text-white sm:block"
            >
              Entrar
            </a>

            <a
              href="https://app.enzuvia.com.br/signup"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-white px-4 text-sm font-semibold text-slate-950 shadow-lg shadow-black/20 transition hover:bg-slate-100"
            >
              Começar agora
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10">
        <div className="mx-auto grid min-h-[calc(100vh-80px)] min-w-0 max-w-7xl items-center gap-12 px-5 pb-16 pt-10 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-16">
          {/* COPY */}
          <div className="min-w-0 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.07] px-3.5 py-2 text-sm font-medium text-emerald-100 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]" />

              Gestão e automação de pendências externas
            </div>

            <h1 className="max-w-3xl text-[42px] font-semibold leading-[1.03] tracking-[-0.05em] text-white sm:text-6xl lg:text-[72px]">
              Pare de correr atrás do que ainda precisa
              acontecer.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-xl sm:leading-8">
              O Enzuvia centraliza documentos, prazos e
              pendências que dependem de clientes,
              fornecedores e parceiros — e acompanha tudo
              até a resolução.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://app.enzuvia.com.br/signup"
                className="inline-flex h-13 w-full items-center justify-center rounded-xl bg-emerald-300 px-6 text-sm font-semibold text-[#07111f] shadow-[0_18px_50px_rgba(110,231,183,0.16)] transition hover:bg-emerald-200 sm:w-auto"
              >
                Começar agora
                <span className="ml-2">→</span>
              </a>

              <a
                href="#como-funciona"
                className="inline-flex h-13 w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/[0.09] sm:w-auto"
              >
                Ver como funciona
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-slate-400 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              <span className="flex items-center gap-2">
                <span className="text-emerald-300">✓</span>
                Sem instalação
              </span>

              <span className="flex items-center gap-2">
                <span className="text-emerald-300">✓</span>
                Acesso pelo navegador
              </span>

              <span className="flex items-center gap-2">
                <span className="text-emerald-300">✓</span>
                R$ 99/mês
              </span>
            </div>
          </div>

          {/* PRODUCT MOCKUP */}
          <div className="relative min-w-0 lg:pl-6">
            <div className="absolute -inset-10 rounded-full bg-sky-400/[0.06] blur-3xl" />

            <div className="relative min-w-0 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.06] p-3 shadow-[0_45px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#f7f8fa]">
                {/* browser bar */}
                <div className="flex h-12 items-center gap-2 border-b border-slate-200 bg-white px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />

                  <div className="ml-4 h-6 flex-1 rounded-md bg-slate-100" />
                </div>

                <div className="grid min-h-[430px] grid-cols-1 sm:min-h-[500px] sm:grid-cols-[185px_minmax(0,1fr)]">
                  {/* sidebar */}
                  <aside className="hidden border-r border-slate-200 bg-[#0b1728] p-4 text-white sm:block">
                    <div className="mb-8 flex items-center gap-2">
                      <div className="h-7 w-7 rounded-lg bg-white/10" />
                      <div className="h-2.5 w-16 rounded-full bg-white/70" />
                    </div>

                    <div className="space-y-2">
                      <div className="rounded-lg bg-white/10 px-3 py-3">
                        <div className="h-2 w-16 rounded-full bg-white/80" />
                      </div>

                      {[
                        'w-20',
                        'w-16',
                        'w-24',
                        'w-14',
                        'w-20',
                      ].map((width, index) => (
                        <div
                          key={index}
                          className="px-3 py-3"
                        >
                          <div
                            className={`h-2 rounded-full bg-white/30 ${width}`}
                          />
                        </div>
                      ))}
                    </div>
                  </aside>

                  {/* dashboard */}
                  <div className="min-w-0 p-4 sm:p-7">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                          Visão operacional
                        </div>

                        <div className="mt-2 text-xl font-semibold text-slate-900">
                          Bom dia
                        </div>
                      </div>

                      <div className="h-9 w-9 rounded-full bg-slate-200" />
                    </div>

                    <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      <MetricCard
                        label="Atrasadas"
                        value="04"
                        accent="red"
                      />

                      <MetricCard
                        label="Recebidas"
                        value="07"
                        accent="emerald"
                      />

                      <MetricCard
                        label="Próximas"
                        value="11"
                        accent="sky"
                      />
                    </div>

                    <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold text-slate-900">
                            Pendências recentes
                          </div>

                          <div className="mt-1 text-xs text-slate-400">
                            Acompanhe o que ainda precisa ser
                            resolvido.
                          </div>
                        </div>

                        <div className="rounded-lg bg-slate-100 px-3 py-2 text-[11px] font-medium text-slate-500">
                          Ver todas
                        </div>
                      </div>

                      <div className="mt-4 space-y-3">
                        <PendencyRow
                          title="Documentos fiscais"
                          company="Grupo Horizonte"
                          status="Aguardando"
                        />

                        <PendencyRow
                          title="Contrato assinado"
                          company="Nova Base"
                          status="Recebido"
                        />

                        <PendencyRow
                          title="Comprovante mensal"
                          company="Atlas Serviços"
                          status="Atrasado"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING STATUS */}
            <div className="absolute -bottom-7 -left-2 hidden w-64 rounded-2xl border border-white/10 bg-[#0d1a2c]/95 p-4 shadow-2xl backdrop-blur-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-300">
                  ✓
                </div>

                <div>
                  <div className="text-xs text-slate-400">
                    Atualização automática
                  </div>

                  <div className="mt-1 text-sm font-medium text-white">
                    Documento recebido
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
           {/* PROBLEMA */}
      <section
        id="problema"
        className="relative bg-[#f7f8fa] text-slate-950"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                O problema
              </div>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-5xl">
                Sua equipe não deveria gastar o dia cobrando
                o que ainda não chegou.
              </h2>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-lg leading-8 text-slate-600">
                Documentos atrasados, comprovantes que não
                chegam, contratos esperando assinatura,
                informações pendentes e aquela cobrança que
                alguém precisa lembrar de fazer novamente.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                O Enzuvia transforma esse acompanhamento
                manual em um fluxo organizado, rastreável e
                automatizado.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <ProblemCard
              number="01"
              title="Você pede"
              text="A solicitação sai por e-mail, WhatsApp, planilha ou mensagem."
            />

            <ProblemCard
              number="02"
              title="Você espera"
              text="O prazo passa e alguém precisa lembrar quem ainda não respondeu."
            />

            <ProblemCard
              number="03"
              title="Você cobra de novo"
              text="Sua equipe perde tempo acompanhando manualmente o que continua pendente."
            />
          </div>
          <div 
            id="como-funciona"
            className="relative mt-16 scroll-mt-24 overflow-hidden rounded-[32px] bg-[#091525] px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
            <div className="pointer-events-none absolute right-[-10%] top-[-70%] h-[450px] w-[450px] rounded-full bg-emerald-300/10 blur-[100px]" />

            <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <div className="text-sm font-medium text-emerald-300">
                  Com o Enzuvia
                </div>

                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                  A pendência continua andando mesmo quando
                  você não está cobrando.
                </h3>

                <p className="mt-5 max-w-lg text-base leading-7 text-slate-300">
                  Centralize a solicitação, acompanhe o prazo,
                  automatize lembretes e mantenha o histórico
                  de tudo até a resolução.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <FlowItem
                  step="1"
                  title="Crie a pendência"
                  text="Defina o que precisa ser recebido e até quando."
                />

                <FlowItem
                  step="2"
                  title="Compartilhe"
                  text="O destinatário recebe um link simples e seguro."
                />

                <FlowItem
                  step="3"
                  title="Acompanhe"
                  text="O Enzuvia organiza prazos, cobranças e respostas."
                />

                <FlowItem
                  step="4"
                  title="Resolva"
                  text="Receba, confira, aprove e mantenha todo o histórico."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* PRODUTO REAL */}
      <section
        id="produto"
        className="relative scroll-mt-20 bg-white text-slate-950"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              O produto
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Tudo o que está pendente,
              em um único lugar.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Veja o que atrasou, o que chegou,
              o que precisa de análise e o que
              ainda depende de alguém — sem
              planilhas paralelas ou cobranças
              perdidas.
            </p>
          </div>

          {/* DASHBOARD */}
          <div className="relative mt-16">
            <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-[70%] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-slate-100 p-2 shadow-[0_35px_100px_rgba(15,23,42,0.14)] sm:p-3">
              <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white">
                <div className="flex h-11 items-center gap-2 border-b border-slate-200 bg-white px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />

                  <div className="ml-4 h-6 flex-1 rounded-md bg-slate-100" />
                </div>

                <div className="aspect-[16/8.2] overflow-hidden bg-slate-50">
                  <Image
                    src="/screenshots/dashboard.png"
                    alt="Dashboard do Enzuvia"
                    width={1720}
                    height={864}
                    priority
                    className="h-full w-full object-cover object-left-top"
                  />
                </div>
              </div>
            </div>

            <div className="mx-auto mt-8 grid max-w-4xl gap-6 text-center sm:grid-cols-3">
              <ProductStat
                title="Prioridade visível"
                text="Saiba imediatamente o que precisa da sua atenção."
              />

              <ProductStat
                title="Status centralizados"
                text="Atrasos, recebimentos e análises no mesmo fluxo."
              />

              <ProductStat
                title="Histórico rastreável"
                text="Acompanhe o que aconteceu em cada pendência."
              />
            </div>
          </div>

          {/* PENDÊNCIAS */}
          <div className="mt-24 grid gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 p-2 shadow-[0_25px_70px_rgba(15,23,42,0.09)]">
              <div className="overflow-hidden rounded-[20px] bg-white">
                <Image
                  src="/screenshots/pendencias.png"
                  alt="Gestão de pendências no Enzuvia"
                  width={1720}
                  height={893}
                  className="h-auto w-full"
                />
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="text-sm font-semibold text-emerald-700">
                Operação organizada
              </div>

              <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                Da criação à resolução,
                sem perder o contexto.
              </h3>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Crie pendências manualmente,
                reutilize modelos ou gere várias
                solicitações de uma só vez.
              </p>

              <div className="mt-8 space-y-5">
                <FeatureLine
                  title="Filtros rápidos"
                  text="Encontre pendências por status, contato ou empresa."
                />

                <FeatureLine
                  title="Recorrências"
                  text="Configure demandas que precisam acontecer novamente."
                />

                <FeatureLine
                  title="Visão operacional"
                  text="Veja abertos, atrasados e recebimentos aguardando análise."
                />
              </div>
            </div>
          </div>

          {/* EXPERIÊNCIA EXTERNA */}
          <div className="mt-24 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="text-sm font-semibold text-emerald-700">
                Para quem precisa responder
              </div>

              <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                Responder uma solicitação
                não deveria exigir treinamento.
              </h3>

              <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
                O destinatário abre um link seguro,
                entende o que precisa enviar e
                responde diretamente pelo navegador.
              </p>

              <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5">
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-sm font-bold text-white">
                    ✓
                  </div>

                  <div>
                    <div className="font-semibold text-slate-950">
                      Sem cadastro para o destinatário
                    </div>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Menos atrito para quem responde.
                      Mais chance de a pendência ser
                      resolvida rapidamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[640px]">
              <div className="absolute -inset-8 rounded-full bg-sky-100/70 blur-3xl" />

              <div className="relative rounded-[32px] border border-slate-200 bg-[#f7f8fa] p-4 shadow-[0_30px_90px_rgba(15,23,42,0.12)] sm:p-6">
                <div className="mx-auto max-h-[680px] overflow-hidden rounded-[22px] border border-slate-200 bg-white">
                  <Image
                    src="/screenshots/solicitacao-publica.png"
                    alt="Página pública de envio do Enzuvia"
                    width={1084}
                    height={1336}
                    className="h-auto w-full"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
                <div className="text-xs text-slate-400">
                  Experiência externa
                </div>

                <div className="mt-1 text-sm font-semibold text-slate-950">
                  Simples. Direta. Sem login.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
           {/* SEGURANÇA */}
      <section
        id="seguranca"
        className="relative scroll-mt-20 overflow-hidden bg-[#081321] text-white"
      >
        <div className="pointer-events-none absolute left-[-10%] top-[-30%] h-[520px] w-[520px] rounded-full bg-emerald-400/[0.07] blur-[130px]" />

        <div className="pointer-events-none absolute bottom-[-40%] right-[-10%] h-[600px] w-[600px] rounded-full bg-sky-500/[0.07] blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Segurança e confiança
              </div>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
                Seus processos não precisam ficar espalhados.
                Seus dados também não.
              </h2>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-lg leading-8 text-slate-300">
                O Enzuvia foi construído para manter cada
                organização isolada, proteger os arquivos
                recebidos e controlar quem pode acessar cada
                informação.
              </p>

              <p className="mt-5 text-base leading-7 text-slate-400">
                A experiência é simples para quem usa,
                enquanto a segurança permanece nos bastidores.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <TrustCard
              icon="01"
              title="Dados isolados"
              text="Cada organização acessa somente os próprios dados e operações."
            />

            <TrustCard
              icon="02"
              title="Arquivos privados"
              text="Documentos enviados ficam armazenados em ambiente privado."
            />

            <TrustCard
              icon="03"
              title="Links seguros"
              text="Solicitações públicas utilizam links únicos para cada pendência."
            />

            <TrustCard
              icon="04"
              title="Histórico preservado"
              text="Acompanhe entregas, análises e decisões ao longo de todo o processo."
            />
          </div>

          <div className="mt-16 flex flex-col gap-8 rounded-[30px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-300/10 text-xl text-emerald-300">
                  ✓
                </div>

                <div className="text-lg font-semibold">
                  Segurança sem complicar a experiência
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                O destinatário não precisa criar uma conta
                para responder a uma solicitação, enquanto
                os usuários internos permanecem protegidos
                por autenticação e controle de acesso.
              </p>
            </div>

            <div className="shrink-0 rounded-2xl border border-white/10 bg-black/20 px-6 py-4 text-sm text-slate-300">
              Criado para operações B2B
            </div>
          </div>
        </div>
      </section>
           {/* PREÇO */}
      <section
        id="preco"
        className="relative scroll-mt-20 overflow-hidden bg-[#f7f8fa] text-slate-950"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Simples desde o começo
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Um plano.
              <br />
              O Enzuvia completo.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Sem módulos escondidos ou uma versão limitada
              demais para funcionar. Comece com tudo o que
              precisa para organizar e acompanhar suas
              pendências externas.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            {/* VALOR */}
            <div className="rounded-[30px] bg-[#091525] p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.14)] sm:p-10">
              <div className="text-sm font-medium text-emerald-300">
                Quanto custa continuar cobrando manualmente?
              </div>

              <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em]">
                Uma pendência esquecida pode custar mais do
                que um mês inteiro de Enzuvia.
              </h3>

              <p className="mt-5 text-base leading-7 text-slate-300">
                Tempo da equipe, mensagens repetidas,
                documentos perdidos, prazos vencidos e falta
                de visibilidade também têm custo.
              </p>

              <div className="mt-10 border-t border-white/10 pt-7">
                <div className="text-sm text-slate-400">
                  O objetivo não é apenas organizar.
                </div>

                <div className="mt-2 text-lg font-medium text-white">
                  É tirar da sua equipe o trabalho de lembrar
                  o que ainda precisa acontecer.
                </div>
              </div>
            </div>

            {/* PLANO */}
            <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-10">
              <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-emerald-200/50 blur-3xl" />

              <div className="relative">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold text-emerald-700">
                      Enzuvia
                    </div>

                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                      Gestão e automação de pendências
                    </h3>
                  </div>

                  <div className="shrink-0 text-left sm:text-right">
                    <div className="flex items-end gap-1 sm:justify-end">
                      <span className="text-5xl font-semibold tracking-[-0.06em] text-slate-950">
                        R$ 99
                      </span>

                      <span className="mb-1.5 text-sm text-slate-500">
                        /mês
                      </span>
                    </div>

                    <div className="mt-1 text-xs text-slate-400">
                      por organização
                    </div>
                  </div>
                </div>

                <div className="my-8 h-px bg-slate-200" />

                <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  <PriceFeature text="Gestão de contatos" />

                  <PriceFeature text="Pendências e prazos" />

                  <PriceFeature text="Links públicos seguros" />

                  <PriceFeature text="Envio de documentos" />

                  <PriceFeature text="Análise e aprovação" />

                  <PriceFeature text="Pendências recorrentes" />

                  <PriceFeature text="Modelos reutilizáveis" />

                  <PriceFeature text="Criação em massa" />

                  <PriceFeature text="Cobranças e lembretes" />

                  <PriceFeature text="Histórico operacional" />
                </div>

                <a
                  href="https://app.enzuvia.com.br/signup"
                  className="mt-10 inline-flex h-14 w-full items-center justify-center rounded-xl bg-slate-950 px-6 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:bg-slate-800"
                >
                  Começar com o Enzuvia
                  <span className="ml-2">→</span>
                </a>

                <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
                  <span>✓ Sem instalação</span>
                  <span>✓ Cobrança mensal</span>
                  <span>✓ Sem fidelidade</span>
                </div>
              </div>
            </div>
          </div>

          {/* ARGUMENTO FINAL */}
          <div className="mx-auto mt-16 max-w-3xl text-center">
            <p className="text-sm font-medium text-slate-500">
              Menos de
            </p>

            <div className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              R$ 3,30 por dia
            </div>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500">
              para centralizar uma operação que hoje pode
              depender de mensagens, memória, planilhas e
              acompanhamento manual.
            </p>
          </div>
        </div>
      </section>
           {/* FAQ */}
      <section className="bg-white text-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Perguntas frequentes
              </div>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
                Antes de começar,
                talvez você queira saber.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-slate-600">
                O Enzuvia foi pensado para ser simples para
                sua equipe e também para quem está do outro
                lado da solicitação.
              </p>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              <FaqItem
                question="Para quem o Enzuvia é indicado?"
                answer="Para empresas que dependem de documentos, informações, aprovações ou entregas vindas de clientes, fornecedores, parceiros ou outros contatos externos."
              />

              <FaqItem
                question="Quem recebe uma solicitação precisa criar conta?"
                answer="Não. O destinatário acessa um link próprio da pendência e pode responder diretamente pelo navegador."
              />

              <FaqItem
                question="Posso criar pendências recorrentes?"
                answer="Sim. Demandas que acontecem novamente podem ser configuradas como recorrentes, reduzindo trabalho repetitivo da equipe."
              />

              <FaqItem
                question="É possível reutilizar solicitações frequentes?"
                answer="Sim. O Enzuvia possui modelos reutilizáveis e também permite criar várias pendências de uma só vez."
              />

              <FaqItem
                question="Quais tipos de arquivo podem ser recebidos?"
                answer="Atualmente o envio aceita PDF, JPG, PNG e WEBP, com limite de até 10 MB por arquivo."
              />

              <FaqItem
                question="Os arquivos enviados ficam públicos?"
                answer="Não. Os documentos ficam armazenados de forma privada e o acesso interno respeita as permissões da organização."
              />

              <FaqItem
                question="Quanto custa?"
                answer="O Enzuvia custa R$ 99 por mês por organização, com cobrança mensal e sem fidelidade."
              />

              <FaqItem
                question="Posso cancelar?"
                answer="Sim. A assinatura pode ser cancelada pelo responsável da organização, sem contrato de fidelidade."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-[#07111f] text-white">
        <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[150px]" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center lg:px-8 lg:py-32">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 text-xl text-emerald-300">
            ✓
          </div>

          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Pare de cobrar no braço.
            <br />
            Deixe o Enzuvia acompanhar.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Centralize o que sua empresa ainda precisa
            receber e acompanhe cada pendência até a
            resolução.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://app.enzuvia.com.br/signup"
              className="inline-flex h-14 items-center justify-center rounded-xl bg-emerald-300 px-7 text-sm font-semibold text-[#07111f] shadow-[0_20px_60px_rgba(110,231,183,0.16)] transition hover:bg-emerald-200"
            >
              Começar com o Enzuvia
              <span className="ml-2">→</span>
            </a>

            <a
              href="https://app.enzuvia.com.br/login"
              className="inline-flex h-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] px-7 text-sm font-semibold text-white transition hover:bg-white/[0.09]"
            >
              Já tenho uma conta
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            R$ 99/mês por organização · Sem fidelidade
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#050d18] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <a
                href="#"
                className="flex items-center gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 font-semibold">
                  E
                </div>

                <span className="text-xl font-semibold tracking-[-0.03em]">
                  Enzuvia
                </span>
              </a>

              <p className="mt-5 text-sm leading-6 text-slate-400">
                Gestão e automação de pendências externas
                para empresas que precisam acompanhar o que
                ainda depende de outras pessoas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-16 gap-y-8 text-sm sm:grid-cols-3">
              <div>
                <div className="font-semibold text-white">
                  Produto
                </div>

                <div className="mt-4 space-y-3 text-slate-400">
                  <a
                    href="#produto"
                    className="block transition hover:text-white"
                  >
                    Recursos
                  </a>

                  <a
                    href="#como-funciona"
                    className="block transition hover:text-white"
                  >
                    Como funciona
                  </a>

                  <a
                    href="#preco"
                    className="block transition hover:text-white"
                  >
                    Preço
                  </a>
                </div>
              </div>

              <div>
                <div className="font-semibold text-white">
                  Confiança
                </div>

                <div className="mt-4 space-y-3 text-slate-400">
                  <a
                    href="#seguranca"
                    className="block transition hover:text-white"
                  >
                    Segurança
                  </a>
                  <Link
                    href="/privacidade"
                    className="block transition hover:text-white"
                  >
                    Privacidade
                  </Link>

                  <Link
                    href="/termos"
                    className="block transition hover:text-white"
                  >
                    Termos de Uso
                  </Link>
                </div>
              </div>

              <div>
                <div className="font-semibold text-white">
                  Conta
                </div>

                <div className="mt-4 space-y-3 text-slate-400">
                  <a
                    href="https://app.enzuvia.com.br/login"
                    className="block transition hover:text-white"
                  >
                    Entrar
                  </a>

                  <a
                    href="https://app.enzuvia.com.br/signup"
                    className="block transition hover:text-white"
                  >
                    Criar conta
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <div>
              © 2026 Enzuvia. Todos os direitos reservados.
            </div>

            <div>
              Feito para operações que não podem perder o
              controle do que ainda está pendente.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

function MetricCard({
  label,
  value,
  accent,
}: {
  label: string
  value: string
  accent: 'red' | 'emerald' | 'sky'
}) {
  const dots = {
    red: 'bg-red-400',
    emerald: 'bg-emerald-400',
    sky: 'bg-sky-400',
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
      <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.1em] text-slate-400 sm:text-xs">
        <span
          className={`h-1.5 w-1.5 rounded-full ${dots[accent]}`}
        />
        {label}
      </div>

      <div className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl">
        {value}
      </div>
    </div>
  )
}

function PendencyRow({
  title,
  company,
  status,
}: {
  title: string
  company: string
  status: string
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-100 px-3 py-3">
      <div className="min-w-0">
        <div className="truncate text-xs font-medium text-slate-800 sm:text-sm">
          {title}
        </div>

        <div className="mt-1 truncate text-[11px] text-slate-400">
          {company}
        </div>
      </div>

      <div className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium text-slate-500">
        {status}
      </div>
    </div>
  )
}

function ProblemCard({
  number,
  title,
  text,
}: {
  number: string
  title: string
  text: string
}) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
      <div className="text-sm font-semibold text-emerald-700">
        {number}
      </div>

      <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-slate-950">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {text}
      </p>
    </div>
  )
}

function FlowItem({
  step,
  title,
  text,
}: {
  step: string
  title: string
  text: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-300 text-xs font-bold text-[#07111f]">
        {step}
      </div>

      <h4 className="mt-5 font-semibold text-white">
        {title}
      </h4>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        {text}
      </p>
    </div>
  )
}

function ProductStat({
  title,
  text,
}: {
  title: string
  text: string
}) {
  return (
    <div>
      <div className="font-semibold text-slate-950">
        {title}
      </div>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {text}
      </p>
    </div>
  )
}

function FeatureLine({
  title,
  text,
}: {
  title: string
  text: string
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
        ✓
      </div>

      <div>
        <div className="font-semibold text-slate-950">
          {title}
        </div>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {text}
        </p>
      </div>
    </div>
  )
}

function TrustCard({
  icon,
  title,
  text,
}: {
  icon: string
  title: string
  text: string
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-300/10 text-xs font-semibold text-emerald-300">
        {icon}
      </div>

      <h3 className="mt-8 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {text}
      </p>
    </div>
  )
}

function PriceFeature({
  text,
}: {
  text: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
        ✓
      </div>

      <span className="text-sm font-medium text-slate-700">
        {text}
      </span>
    </div>
  )
}

function FaqItem({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  return (
    <details className="group py-6">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-slate-950">
        {question}

        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg font-normal text-slate-500 transition group-open:rotate-45">
          +
        </span>
      </summary>

      <p className="max-w-2xl pr-12 pt-4 text-sm leading-7 text-slate-600">
        {answer}
      </p>
    </details>
  )
}