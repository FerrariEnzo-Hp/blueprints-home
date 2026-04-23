import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BedDouble, Sofa, Bath, Trees, UtensilsCrossed } from "lucide-react";
import heroImg from "@/assets/blueprint-hero.jpg";
import { PageShell } from "@/components/page-shell";
import { SectionLabel } from "@/components/section-label";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AMTRIZ — Projetos Elétricos Residenciais conforme NBR 5410" },
      {
        name: "description",
        content:
          "Projetos elétricos residenciais executados por engenheiros, com ART, memorial e diagramas conforme a NBR 5410. Segurança e eficiência para sua casa.",
      },
      { property: "og:title", content: "AMTRIZ — Projetos Elétricos Residenciais" },
      {
        property: "og:description",
        content: "Engenharia elétrica residencial com documentação técnica completa.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});


const pricing = [
  { icon: BedDouble, title: "Quarto", price: "220,00", desc: "Projeto elétrico completo por ambiente." },
  { icon: Sofa, title: "Sala", price: "350,00", desc: "Iluminação, tomadas e pontos de TV/áudio." },
  { icon: Bath, title: "Banheiro", price: "300,00", desc: "Circuitos com DR, chuveiro e ventilação." },
  { icon: Trees, title: "Área de lazer", price: "470,00", desc: "Externa: piscina, churrasqueira e jardim." },
  { icon: UtensilsCrossed, title: "Cozinha", price: "380,00", desc: "Cargas pesadas, bancada e eletrodomésticos." },
];

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div
          className="absolute inset-0 opacity-30 mix-blend-screen"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />

        <div className="relative mx-auto max-w-7xl px-6 pb-32 pt-24 md:pt-32">
          <div className="max-w-3xl">
            <SectionLabel index="01">Engenharia elétrica residencial</SectionLabel>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              <span className="text-gradient">Projetos elétricos</span>
              <br />
              que sua obra precisa.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Da planta baixa ao quadro de distribuição: projetamos sistemas
              elétricos residenciais seguros, eficientes e prontos para
              execução, com toda a documentação técnica exigida.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contato"
                className="group inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
              >
                Solicitar orçamento
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary/60"
              >
                Ver serviços
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="border-t border-border/60 bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <SectionLabel index="02">Tabela de preços</SectionLabel>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                Projeto elétrico por ambiente.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Valores fixos por ambiente residencial. Combine os ambientes
                conforme o seu projeto — sem surpresas no orçamento.
              </p>
            </div>
            <Link
              to="/contato"
              className="font-mono text-xs uppercase tracking-widest text-primary hover:underline"
            >
              Solicitar orçamento →
            </Link>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-border/50 md:grid-cols-2 lg:grid-cols-3">
            {pricing.map((p, i) => (
              <div
                key={p.title}
                className="group relative flex flex-col bg-background p-8 transition-colors hover:bg-secondary/30"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 ring-1 ring-primary/20">
                    <p.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <div className="mt-6 flex items-baseline gap-1 border-t border-border/60 pt-5">
                  <span className="font-mono text-xs text-muted-foreground">R$</span>
                  <span className="font-display text-3xl font-semibold text-gradient">
                    {p.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 font-mono text-xs text-muted-foreground">
            * Valores referentes ao projeto elétrico por ambiente. ART, memorial e
            diagramas inclusos. Consulte condições para projetos completos.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-background py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="blueprint-border relative overflow-hidden rounded-sm p-10 md:p-16">
            <div className="absolute inset-0 bg-grid-sm opacity-40" />
            <div className="relative">
              <SectionLabel index="03">Próximo passo</SectionLabel>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Pronto para tirar o projeto da sua casa do papel?
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Envie a planta arquitetônica e suas necessidades. Retornamos
                com um orçamento detalhado em até 48h.
              </p>
              <Link
                to="/contato"
                className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
              >
                Entrar em contato
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
