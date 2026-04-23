import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Send as TelegramIcon } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { SectionLabel } from "@/components/section-label";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Solicite seu Projeto Elétrico | AMTRIZ" },
      {
        name: "description",
        content:
          "Fale com a AMTRIZ para orçamento de projeto elétrico residencial. Resposta em até 48h por WhatsApp ou Telegram.",
      },
      { property: "og:title", content: "Contato AMTRIZ" },
      {
        property: "og:description",
        content: "Solicite um orçamento de projeto elétrico residencial.",
      },
    ],
  }),
  component: ContactPage,
});

const contacts = [
  {
    name: "Enzo Ferrari",
    role: "Suporte técnico",
    display: "(21) 98200-9835",
    waDigits: "5521982009835",
    tgDigits: "+5521982009835",
  },
  {
    name: "Miguel Euzébio",
    role: "Vendas",
    display: "(21) 96538-5263",
    waDigits: "5521965385263",
    tgDigits: "+5521965385263",
  },
  {
    name: "Luis Gustavo",
    role: "Jurídico",
    display: "(21) 98739-8550",
    waDigits: "5521987398550",
    tgDigits: "+5521987398550",
  },
];

function ContactPage() {
  return (
    <PageShell>
      <section className="border-b border-border/60 bg-hero">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <SectionLabel index="01">Contato</SectionLabel>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold tracking-tight md:text-6xl">
            Vamos <span className="text-gradient">desenhar seu projeto</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Conte sobre sua residência e suas necessidades. Retornamos com um
            orçamento detalhado em até 48 horas úteis.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-2xl">
            <SectionLabel index="02">Fale com nossa equipe</SectionLabel>
            <p className="mt-4 text-muted-foreground">
              Escolha o setor desejado e entre em contato direto via WhatsApp
              ou Telegram.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contacts.map((c) => (
              <div
                key={c.display}
                className="rounded-sm border border-border/60 p-6"
              >
                <div className="font-mono text-[11px] uppercase tracking-widest text-primary">
                  {c.role}
                </div>
                <div className="mt-2 font-display text-xl font-semibold text-foreground">
                  {c.name}
                </div>
                <div className="mt-1 font-mono text-sm text-muted-foreground">
                  {c.display}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/${c.waDigits}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-sm border border-border/60 bg-secondary/30 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                  >
                    <MessageCircle className="h-4 w-4 text-primary" />
                    WhatsApp
                  </a>
                  <a
                    href={`https://t.me/${c.tgDigits}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-sm border border-border/60 bg-secondary/30 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                  >
                    <TelegramIcon className="h-4 w-4 text-primary" />
                    Telegram
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
