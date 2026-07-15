import { Container } from "@/components/globals/Container";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12.073h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12.073h2.773l-.443 2.89h-2.33v6.988C20.343 21.2 24 17.064 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer id="contato" className="bg-zinc-950 text-zinc-300">
      <div className="py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: About + Contact Info */}
            <div>
              <div className="mb-6">
                <img
                  src="/assets/images/logo-mercapecas.png"
                  alt="Mercapeças Casa do Mercedes"
                  className="h-14 w-auto object-contain brightness-0 invert"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith('.svg')) {
                      target.src = '/assets/images/logo-mercapecas.svg';
                      target.className = 'h-14 w-auto object-contain brightness-0 invert';
                    }
                  }}
                />
              </div>
              <p className="mb-6 max-w-sm text-sm leading-relaxed text-zinc-400">
                Sinta-se à vontade para entrar em contato. Nossa equipe está pronta para ajudar com qualquer dúvida ou solicitação. Valorizamos cada interação e buscamos sempre oferecer o melhor atendimento possível.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-[#E51515]" />
                  <a
                    href="https://www.google.com.br/maps/place/Mercapecas+Casa+do+Mercedes"
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    Av. Arlindo Massaro, 395 - Umuarama, Uberlândia - MG, 38402-076.
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Phone className="size-4 shrink-0 text-[#E51515]" />
                  <a href="tel:+553432139266" className="text-zinc-400 transition-colors hover:text-white">
                    Telefone: (34) 3213-9266
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Mail className="size-4 shrink-0 text-[#E51515]" />
                  <a href="mailto:vendas@mercapecas.com" className="text-zinc-400 transition-colors hover:text-white">
                    Para Cotações: vendas@mercapecas.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Mail className="size-4 shrink-0 text-[#E51515]" />
                  <a href="mailto:mercapecas@mercapecas.com" className="text-zinc-400 transition-colors hover:text-white">
                    Comercial: mercapecas@mercapecas.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <WhatsAppIcon className="size-4 shrink-0 text-[#E51515]" />
                  <a
                    href="https://api.whatsapp.com/send?phone=553432139266"
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    Whatsapp: (34) 3213-9266
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Building2 className="size-4 shrink-0 text-[#E51515]" />
                  <span className="text-zinc-400">CNPJ: 11.111.111/1111-11</span>
                </li>
              </ul>

              {/* Social links */}
              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.facebook.com/mercapecasltda/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="group/fb flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-zinc-300 transition-all hover:bg-[#1877F2] hover:text-white"
                >
                  <FacebookIcon className="size-4 transition-colors group-hover/fb:text-white" />
                </a>
                <a
                  href="https://www.instagram.com/mercapecas_mercedes/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="group/ig flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-zinc-300 transition-all hover:bg-[#E1306C] hover:text-white"
                >
                  <InstagramIcon className="size-4 transition-colors group-hover/ig:text-white" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=553432139266"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="group/wa flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-zinc-300 transition-all hover:bg-[#25D366] hover:text-white"
                >
                  <WhatsAppIcon className="size-4 transition-colors group-hover/wa:text-white" />
                </a>
              </div>
            </div>

            {/* Right: Contact form */}
            <div>
              <h3 className="mb-6 text-lg font-bold text-white">Contato</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-zinc-400">
                    Nome Completo
                  </label>
                  <input
                    id="nome"
                    type="text"
                    placeholder="Seu nome"
                    className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-[#E51515] focus:ring-1 focus:ring-[#E51515]"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-400">
                      E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-[#E51515] focus:ring-1 focus:ring-[#E51515]"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefone" className="mb-1.5 block text-sm font-medium text-zinc-400">
                      Telefone
                    </label>
                    <input
                      id="telefone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-[#E51515] focus:ring-1 focus:ring-[#E51515]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-zinc-400">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    rows={4}
                    placeholder="Escreva sua mensagem..."
                    className="w-full resize-none rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-[#E51515] focus:ring-1 focus:ring-[#E51515]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-sm bg-[#E51515] py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#c41212] focus:outline-none"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>

      <div className="border-t border-zinc-800 py-6">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
            <span>Copyright © 2026 MercaPecas. Todos os direitos reservados.</span>
            <span>CNPJ: 11.111.111/1111-11</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
