import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { SectionLabel } from "@/components/section-label";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — AMTRIZ Engenharia Elétrica" },
      {
        name: "description",
        content:
          "Equipe de engenheiros eletricistas dedicada a projetos residenciais seguros, normativos e bem documentados.",
      },
      { property: "og:title", content: "Sobre a AMTRIZ" },
      {
        property: "og:description",
        content: "Engenharia elétrica residencial com 12 anos de experiência.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Norma como base",
    desc: "Cada projeto segue rigorosamente a NBR 5410 e demais normas aplicáveis. Sem improviso.",
  },
  {
    title: "Documentação completa",
    desc: "Você recebe plantas, diagramas, memorial e ART — tudo o que a obra e a concessionária exigem.",
  },
  {
    title: "Visão de longo prazo",
    desc: "Projetamos pensando em automação, solar e veículo elétrico, evitando retrabalho futuro.",
  },
  {
    title: "Comunicação direta",
    desc: "Sem intermediários. Você fala diretamente com o engenheiro responsável pelo seu projeto.",
  },
];

const stack = [
  "AutoCAD Elétrico", "DIALux evo", "QiBuilder", "RevitMEP", "PVsyst", "Lumine",
];

function AboutPage() {
  return (
    <PageShell>
      <section className="border-b border-border/60 bg-hero">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <SectionLabel index="01">Sobre a AMTRIZ</SectionLabel>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
              <span className="text-gradient">Engenharia</span> com critério
              técnico.
            </h1>
          </div>
          <div className="flex items-end">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Somos uma consultoria de engenharia elétrica especializada em
              residências. Há mais de uma década entregamos projetos que unem
              segurança normativa, eficiência energética e clareza para a
              equipe de obra. Nossa promessa é simples: nenhum metro de fio
              passado sem propósito.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel index="02">Princípios</SectionLabel>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm bg-border/50 md:grid-cols-2">
            {values.map((v, i) => (
              <div key={v.title} className="bg-background p-8">
                <span className="font-mono text-xs text-muted-foreground">
                  P/{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <div>
            <SectionLabel index="03">Ferramentas</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Software de engenharia profissional.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Utilizamos ferramentas reconhecidas pelo mercado para garantir
              precisão no dimensionamento e qualidade na entrega.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-sm border border-border bg-secondary/40 px-4 py-2 font-mono text-xs uppercase tracking-widest text-foreground/80"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel index="04">Certificações</SectionLabel>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {["Registro CREA ativo", "NR-10 (segurança em eletricidade)", "ART por projeto entregue"].map(
              (c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 rounded-sm border border-border/60 p-6"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground/90">{c}</span>
                </li>
              ),
            )}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
