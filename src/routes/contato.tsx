import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { SectionLabel } from "@/components/section-label";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Solicite seu Projeto Elétrico | VOLTLINE" },
      {
        name: "description",
        content:
          "Fale com a VOLTLINE para orçamento de projeto elétrico residencial. Resposta em até 48h por e-mail ou WhatsApp.",
      },
      { property: "og:title", content: "Contato VOLTLINE" },
      {
        property: "og:description",
        content: "Solicite um orçamento de projeto elétrico residencial.",
      },
    ],
  }),
  component: ContactPage,
});

const EMAIL = "contato@voltline.com.br";
const PHONE_DIGITS = "5511900000000";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Orçamento — Projeto Elétrico (${form.name})`;
    const body = `Nome: ${form.name}
E-mail: ${form.email}
Telefone: ${form.phone}
Área da residência: ${form.area} m²

Mensagem:
${form.message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

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
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="space-y-4">
            <SectionLabel index="02">Canais diretos</SectionLabel>

            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-start gap-4 rounded-sm border border-border/60 p-6 transition-colors hover:border-primary/50 hover:bg-secondary/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10 ring-1 ring-primary/20">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  E-mail
                </div>
                <div className="mt-1 font-display text-lg text-foreground group-hover:text-primary">
                  {EMAIL}
                </div>
              </div>
            </a>

            <a
              href={`https://wa.me/${PHONE_DIGITS}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 rounded-sm border border-border/60 p-6 transition-colors hover:border-primary/50 hover:bg-secondary/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10 ring-1 ring-primary/20">
                <MessageCircle className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  WhatsApp
                </div>
                <div className="mt-1 font-display text-lg text-foreground group-hover:text-primary">
                  (11) 90000-0000
                </div>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-sm border border-border/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10 ring-1 ring-primary/20">
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Telefone
                </div>
                <div className="mt-1 font-display text-lg text-foreground">
                  (11) 4000-0000
                </div>
                <div className="mt-1 text-xs text-muted-foreground">Seg a Sex · 9h às 18h</div>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-sm border border-border/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10 ring-1 ring-primary/20">
                <MapPin className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Atendimento
                </div>
                <div className="mt-1 font-display text-lg text-foreground">São Paulo · SP</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Projetos remotos para todo o Brasil
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="blueprint-border rounded-sm p-8 md:p-10"
          >
            <SectionLabel index="03">Briefing rápido</SectionLabel>
            <h2 className="mt-4 font-display text-2xl font-semibold">
              Conte sobre seu projeto
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Ao enviar, abriremos seu cliente de e-mail com a mensagem pronta.
            </p>

            <div className="mt-8 grid gap-5">
              <Field label="Nome completo" required>
                <input
                  required
                  value={form.name}
                  onChange={update("name")}
                  className="form-input"
                  placeholder="Seu nome"
                />
              </Field>

              <div className="grid gap-5 md:grid-cols-2">
                <Field label="E-mail" required>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    className="form-input"
                    placeholder="voce@email.com"
                  />
                </Field>
                <Field label="Telefone">
                  <input
                    value={form.phone}
                    onChange={update("phone")}
                    className="form-input"
                    placeholder="(11) 90000-0000"
                  />
                </Field>
              </div>

              <Field label="Área da residência (m²)">
                <input
                  value={form.area}
                  onChange={update("area")}
                  className="form-input"
                  placeholder="Ex: 180"
                />
              </Field>

              <Field label="Sobre o projeto" required>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  className="form-input resize-none"
                  placeholder="Descreva o tipo de obra (nova, reforma), prazos e necessidades especiais (solar, automação, etc.)"
                />
              </Field>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
              >
                <Send className="h-4 w-4" />
                Enviar briefing
              </button>
            </div>
          </form>
        </div>
      </section>

      <style>{`
        .form-input {
          width: 100%;
          background: oklch(0.22 0.065 264 / 0.6);
          border: 1px solid var(--border);
          border-radius: 2px;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: var(--foreground);
          font-family: var(--font-display);
          transition: border-color 200ms, background 200ms;
        }
        .form-input::placeholder { color: var(--muted-foreground); opacity: 0.7; }
        .form-input:focus {
          outline: none;
          border-color: var(--ring);
          background: oklch(0.22 0.065 264 / 0.9);
        }
      `}</style>
    </PageShell>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}
