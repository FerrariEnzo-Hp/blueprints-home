import { Link } from "@tanstack/react-router";
import logo from "@/assets/amtriz-logo.jpg";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-mono text-sm tracking-widest">
              <img
                src={logo}
                alt="AMTRIZ"
                className="h-9 w-9 rounded-sm object-contain ring-1 ring-primary/30"
              />
              <span className="text-foreground">AMTRIZ</span>
              <span className="text-muted-foreground">/ELÉTRICA</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Projetos elétricos residenciais com segurança e eficiência para
              sua casa.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-foreground/80 hover:text-foreground">Início</Link></li>
              <li><Link to="/servicos" className="text-foreground/80 hover:text-foreground">Serviços</Link></li>
              <li><Link to="/contato" className="text-foreground/80 hover:text-foreground">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li>amtriz0710@gmail.com</li>
              <li>
                <Link
                  to="/contato"
                  className="inline-flex items-center rounded-sm border border-border/60 bg-secondary/30 px-4 py-2 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                >
                  Entrar em contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 font-mono text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} AMTRIZ Engenharia Elétrica</span>
        </div>
      </div>
    </footer>
  );
}
