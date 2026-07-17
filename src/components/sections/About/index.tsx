import { Container } from "@/components/globals/Container";
import { Truck, Users, Award, Star } from "lucide-react";

const stats = [
  { icon: Truck, value: "25+", label: "Anos de Experiência" },
  { icon: Users, value: "10k+", label: "Clientes Atendidos" },
  { icon: Award, value: "100%", label: "Qualidade Garantida" },
  { icon: Star, value: "4.6", label: "Avaliação dos Clientes" },
];

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-background py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-[#E51515]">
              Sobre a Mercapeças
            </span>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Casa do Mercedes — Sua parceira desde 1998
            </h2>
            <p className="mb-5 leading-relaxed text-muted-foreground">
              Desde 1998, somos referência no mercado de peças para caminhões Mercedes em Uberlândia e região. Nossa trajetória é marcada pelo compromisso com a qualidade, o atendimento personalizado e a excelência nos serviços prestados.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Contamos com um amplo estoque de peças e acessórios originais para garantir a manutenção adequada do seu veículo. Nossa equipe está sempre atualizada sobre as últimas inovações do setor, proporcionando um atendimento de excelência.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="inline-flex items-center rounded-sm bg-[#E51515] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#c41212]"
              >
                Entre em Contato
              </a>
              <a
                href="#produtos"
                className="inline-flex items-center rounded-sm border border-border px-7 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-all hover:bg-accent"
              >
                Ver Produtos
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#E51515]/10">
                  <Icon className="size-7 text-[#E51515]" />
                </div>
                <span className="text-3xl font-extrabold text-foreground">{value}</span>
                <span className="mt-1 text-sm text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
