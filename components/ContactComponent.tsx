import { FaEnvelope, FaPhone } from 'react-icons/fa6';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactCards = [
  {
    title: 'E-mail',
    value: 'atendimento@estudadf.com.br',
    href: 'mailto:atendimento@estudadf.com.br',
    icon: FaEnvelope,
  },
  {
    title: 'Telefone',
    value: '(61) 99304-7272',
    href: 'tel:+5561993047272',
    icon: FaPhone,
  },
];

export default function ContactComponent() {
  return (
    <section
      id='suporte'
      className='bg-white py-8 md:py-24'
    >
      <div className='page-width grid gap-10 px-4 lg:grid-cols-[1fr_1.05fr] lg:items-center'>
        <div className='min-w-0'>
          <h3 className='max-w-md text-4xl font-bold leading-tight text-brand-ink md:text-6xl'>
            Adoraríamos
            <br />
            ouvir você
          </h3>

          <div className='mt-8 space-y-4'>
            {contactCards.map(item => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className='flex min-w-0 items-center gap-5 rounded-3xl border border-brand-blue/10 bg-white px-6 py-5 shadow-[0_12px_30px_rgba(45,47,51,0.10)]'
                >
                  <span className='inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-yellow'>
                    <Icon
                      className='h-5 w-5 text-brand-blue'
                      aria-hidden='true'
                    />
                  </span>

                  <div className='min-w-0'>
                    <p className='text-2xl font-semibold text-brand-ink md:text-3xl'>{item.title}</p>
                    <a
                      href={item.href}
                      className='mt-1 inline-block break-all text-base font-medium text-brand-ink/80 underline-offset-4 hover:underline md:text-lg'
                    >
                      {item.value}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <form className='min-w-0 w-full rounded-4xl bg-brand-yellow p-6 sm:p-10 lg:mx-auto lg:max-w-2xl'>
          <div className='space-y-5'>
            <label className='block text-sm font-bold text-brand-ink md:text-base'>
              Nome completo
              <Input
                type='text'
                placeholder='Seu nome'
                className='mt-2 h-14 rounded-2xl px-5 text-base'
              />
            </label>

            <label className='block text-sm font-bold text-brand-ink md:text-base'>
              E-mail
              <Input
                type='email'
                placeholder='exemplo@email.com'
                className='mt-2 h-14 rounded-2xl px-5 text-base'
              />
            </label>

            <label className='block text-sm font-bold text-brand-ink md:text-base'>
              Telefone
              <Input
                type='tel'
                placeholder='(61) 99999-9999'
                className='mt-2 h-14 rounded-2xl px-5 text-base'
              />
            </label>

            <label className='block text-sm font-bold text-brand-ink md:text-base'>
              Mensagem
              <Textarea
                rows={4}
                placeholder='Digite sua mensagem'
                className='mt-2 rounded-2xl px-5 py-3 text-base'
              />
            </label>

            <button
              type='button'
              className='mt-2 inline-flex h-12 w-full items-center justify-center rounded-2xl border border-brand-blue bg-brand-yellow text-lg font-semibold text-brand-blue transition-transform duration-200 hover:scale-[1.01]'
            >
              Enviar mensagem
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
