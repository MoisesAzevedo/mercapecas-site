import { Container } from "@/components/globals/Container";
import { Truck, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Entrega Grátis",
    description: "Entrega grátis para a cidade de Uberlândia.",
  },
  {
    icon: Headphones,
    title: "Suporte Online",
    description: "Nossos vendedores estão prontos para te atender e oferecer a melhor solução para o seu caminhão.",
  },
];

export function Features() {
  return (
    <section className="bg-[#E51515] py-14">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex items-start gap-5"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15">
                <Icon className="size-7 text-white" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-white/80">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
