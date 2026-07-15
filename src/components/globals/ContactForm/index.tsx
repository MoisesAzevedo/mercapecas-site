
export function ContactForm() {
  return (
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
  );
}
