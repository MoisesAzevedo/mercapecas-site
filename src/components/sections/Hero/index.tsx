import { Slider } from "@/components/globals/Slider";
import type { Slide } from "@/interfaces/Slide";

const slides: Slide[] = [
  {
    id: 1,
    image: "/img01-01.webp",
    title: "A Experiência que você precisa",
    description:
      "Desde 1998, no mercado de caminhões Mercedes, com profissionais qualificados para melhor te atender. Nossa experiência nos permite oferecer soluções personalizadas que atendem às suas necessidades específicas.",
    buttonLabel: "Conheça a Empresa",
    buttonHref: "#sobre",
  },
  {
    id: 2,
    image: "/img02-02.webp",
    title: "Conte conosco para todas as peças do seu caminhão Mercedes",
    description:
      "Sua viagem é importante e não queremos que um simples problema com uma peça atrapalhe seus planos. Temos um estoque completo de componentes de alta qualidade, garantindo que você tenha tudo o que precisa em mãos.",
    buttonLabel: "Ver Produtos",
    buttonHref: "#produtos",
  },
];

export function Hero() {
  return <Slider slides={slides} autoPlayInterval={7000} />;
}
