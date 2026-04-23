import { createFileRoute, Link } from "@tanstack/react-router";
import { FileCheck2, Lightbulb } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { SectionLabel } from "@/components/section-label";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Projetos Elétricos Residenciais | AMTRIZ" },
      {
        name: "description",
        content:
          "Projeto elétrico residencial e luminotécnica para sua casa.",
      },
      { property: "og:title", content: "Serviços de Projeto Elétrico Residencial" },
      {
        property: "og:description",
        content: "Engenharia elétrica residencial: projeto, luminotécnica, solar e automação.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: FileCheck2,
    title: "Projeto elétrico residencial",
    desc: "Planejamento elétrico completo da sua residência, do dimensionamento à execução.",
    items: ["Pontos elétricos", "Quadro de cargas", "Dimensionamento", "Acompanhamento"],
  },
  {
    icon: Lightbulb,
    title: "Luminotécnica",
    desc: "Cálculo profissional de iluminação por ambiente, com simulação de cenários e eficiência energética.",
    items: ["Cálculo de iluminação", "Cenários de iluminação", "Especificação de luminárias", "Plantas de teto"],
  },
];

function ServicesPage() {
  return (
    <PageShell>
      <section className="border-b border-border/60 bg-hero">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <SectionLabel index="01">Serviços</SectionLabel>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold tracking-tight md:text-6xl">
            <span className="text-gradient">Engenharia elétrica</span> sob medida
            para sua residência.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Atuamos em todas as etapas do projeto — do dimensionamento inicial
            à execução — garantindo segurança e eficiência.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-px overflow-hidden rounded-sm bg-border/50 md:grid-cols-2">
            {services.map((s, i) => (
              <article key={s.title} className="bg-background p-8">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 ring-1 ring-primary/20">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-6 font-display text-xl font-semibold">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <ul className="mt-5 space-y-2 border-t border-border/60 pt-5 font-mono text-xs text-foreground/80">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-sm border border-border/60 p-8 md:flex-row">
            <div>
              <h3 className="font-display text-2xl font-semibold">
                Não encontrou o que precisa?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Atendemos demandas customizadas. Conte-nos sobre seu projeto.
              </p>
            </div>
            <Link
              to="/contato"
              className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Fale conosco →
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
