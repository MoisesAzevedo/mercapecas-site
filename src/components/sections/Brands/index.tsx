import { Container } from "@/components/globals/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const brandImages = Array.from({ length: 35 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  const ext = index < 4 ? "jpg" : "png";
  return `/assets/images/brands/img${number}.${ext}`;
});

export function Brands() {
  return (
    <section className="border-y border-border bg-background py-14">
      <Container>
        <div className="mb-8 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-accent-red">
            Parceiros
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Trabalhamos com:
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Veja as marcas de peças que trabalhamos.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
            }}
            className="relative px-12"
          >
            <CarouselContent className="flex gap-4">
              {brandImages.map((src, index) => (
                <CarouselItem
                  key={src}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-[16.6667%]"
                >
                  <div className="flex h-28 w-full items-center justify-center rounded-3xl border border-border bg-card p-4 shadow-sm transition-colors duration-200 hover:border-accent-red">
                    <img
                      src={src}
                      alt={`Marca ${index + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden lg:inline-flex absolute left-0 top-1/2 -translate-y-1/2" />
            <CarouselNext className="hidden lg:inline-flex absolute right-0 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </Container>
    </section>
  );
}
