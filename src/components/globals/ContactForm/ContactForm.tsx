import { ContactFormField } from "./ContactFormField";
import { ContactFormSubmitButton } from "./ContactFormSubmitButton";

export function ContactForm() {
  return (
    <div>
      <h3 className="mb-6 text-lg font-bold text-white">Contato</h3>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <ContactFormField
          id="nome"
          name="nome"
          label="Nome Completo"
          placeholder="Seu nome"
          type="text"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <ContactFormField
            id="email"
            name="email"
            label="E-mail"
            placeholder="seu@email.com"
            type="email"
          />
          <ContactFormField
            id="telefone"
            name="telefone"
            label="Telefone"
            placeholder="(00) 00000-0000"
            type="tel"
          />
        </div>
        <ContactFormField
          id="mensagem"
          name="mensagem"
          label="Mensagem"
          placeholder="Escreva sua mensagem..."
          type="textarea"
          rows={4}
        />
        <ContactFormSubmitButton>
          Enviar Mensagem
        </ContactFormSubmitButton>
      </form>
    </div>
  );
}
