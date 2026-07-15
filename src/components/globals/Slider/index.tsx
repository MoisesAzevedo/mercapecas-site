import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Slide } from "@/interfaces/Slide";
import { useSlider } from "@/hooks/useSlider";
import { HeroButton } from "@/components/globals/Button";
import { cn } from "@/lib/utils";

interface SliderProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

export function Slider({ slides, autoPlayInterval = 6000 }: SliderProps) {
  const { current, goTo, next, prev, pause, resume } = useSlider({
    total: slides.length,
    autoPlayInterval,
  });

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100vh - 80px)", minHeight: "520px" }}
      onMouseEnter={pause}
      onMouseLeave={resume}
      aria-label="Hero Slider"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
          aria-hidden={index !== current}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 z-20 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                className={cn(
                  "max-w-2xl transition-all duration-700",
                  index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
              >
                <span className="mb-3 inline-block h-1 w-16 bg-[#E51515]" />
                <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {slide.title}
                </h2>
                <p className="mb-8 text-base leading-relaxed text-gray-200 sm:text-lg">
                  {slide.description}
                </p>
                {slide.buttonLabel && slide.buttonHref && (
                  <HeroButton href={slide.buttonHref} variant="primary">
                    {slide.buttonLabel}
                  </HeroButton>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        aria-label="Slide anterior"
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all duration-200 hover:bg-[#E51515] hover:scale-110 focus:outline-none"
      >
        <ChevronLeft className="size-6" />
      </button>

      <button
        onClick={next}
        aria-label="Próximo slide"
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all duration-200 hover:bg-[#E51515] hover:scale-110 focus:outline-none"
      >
        <ChevronRight className="size-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Ir para slide ${index + 1}`}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300 focus:outline-none",
              index === current
                ? "w-8 bg-[#E51515]"
                : "w-2.5 bg-white/50 hover:bg-white/80"
            )}
          />
        ))}
      </div>
    </div>
  );
}
