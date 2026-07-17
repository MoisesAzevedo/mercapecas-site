import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface NavigationModalProps {
  address: string;
  googleMapsLink?: string;
  wazeLink?: string;
  appleMapsLink?: string;
}

interface MapOption {
  name: string;
  href: string;
  iconSrc: string;
}


export function NavigationModal({
  address,
  googleMapsLink,
  wazeLink,
  appleMapsLink,
}: NavigationModalProps) {
  const mapOptions: MapOption[] = [
  googleMapsLink && {
    name: "Google Maps",
    href: googleMapsLink,
    iconSrc: "/assets/images/icons/google-maps-icon.png",
  },
  wazeLink && {
    name: "Waze",
    href: wazeLink,
    iconSrc: "/assets/images/icons/waze-icon.png",
  },
  appleMapsLink && {
    name: "Apple Maps",
    href: appleMapsLink,
    iconSrc: "/assets/images/icons/apple-map-icon.png",
  },
].filter((option): option is MapOption => Boolean(option));

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="cursor-pointer text-left text-zinc-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E51515] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          {address}
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Como deseja navegar?</DialogTitle>
          <DialogDescription>
            Escolha seu aplicativo de mapas para traçar a rota até nossa loja.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-3 gap-3">
          {mapOptions.map(({ name, href, iconSrc }) => (
  <a
    key={name}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-md border border-border p-3 text-sm font-medium transition-colors hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
  >
    <img
      src={iconSrc}
      alt=""
      aria-hidden="true"
      className="size-8 object-contain"
    />
    <span>{name}</span>
  </a>
))}
        </div>
      </DialogContent>
    </Dialog>
  );
}