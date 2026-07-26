import Image from 'next/image';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';

const menuLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Inscrição', href: '/inscreva-se' },
  { label: 'Contato', href: '#suporte' },
];

const socialItems = [
  { label: 'Instagram', bg: 'bg-white', href: '#', icon: FaInstagram, iconClass: 'text-pink-500' },
  { label: 'WhatsApp', bg: 'bg-white', href: '#', icon: FaWhatsapp, iconClass: 'text-green-600' },
];

export default function FooterComponent() {
  return (
    <footer
      id='rodape'
      className='relative overflow-hidden bg-[#eef5ff] py-16 md:py-24'
    >
      <span
        className='absolute left-[4%] top-[8%] h-10 w-10 rounded-full bg-brand-yellow'
        aria-hidden='true'
      />
      <span
        className='absolute left-[58%] top-[10%] h-9 w-9 rounded-full bg-brand-light-blue'
        aria-hidden='true'
      />
      <span
        className='absolute right-[10%] top-[18%] h-8 w-8 rounded-full bg-brand-white/85'
        aria-hidden='true'
      />
      <span
        className='absolute left-[22%] bottom-[20%] h-8 w-8 rounded-full bg-brand-yellow/80'
        aria-hidden='true'
      />
      <span
        className='absolute right-[38%] bottom-[24%] h-10 w-10 rounded-full bg-brand-blue'
        aria-hidden='true'
      />
      <span
        className='absolute left-[10%] top-[34%] h-6 w-6 rounded-full bg-brand-white/80'
        aria-hidden='true'
      />
      <span
        className='absolute right-[4%] top-[30%] h-7 w-7 rounded-full bg-brand-yellow/90'
        aria-hidden='true'
      />
      <span
        className='absolute left-[30%] bottom-[12%] h-9 w-9 rounded-full bg-brand-light-blue/90'
        aria-hidden='true'
      />
      <span
        className='absolute right-[8%] bottom-[10%] h-6 w-6 rounded-full bg-brand-white/85'
        aria-hidden='true'
      />
      <span
        className='absolute left-[52%] top-[18%] h-5 w-5 rounded-full bg-brand-blue/85'
        aria-hidden='true'
      />
      <span
        className='absolute left-[15%] top-[52%] h-4 w-4 rounded-full bg-brand-yellow/85'
        aria-hidden='true'
      />
      <span
        className='absolute right-[16%] top-[46%] h-5 w-5 rounded-full bg-brand-light-blue/80'
        aria-hidden='true'
      />
      <span
        className='absolute left-[40%] bottom-[30%] h-6 w-6 rounded-full bg-brand-white/80'
        aria-hidden='true'
      />
      <span
        className='absolute right-[30%] bottom-[36%] h-4 w-4 rounded-full bg-brand-yellow/80'
        aria-hidden='true'
      />
      <span
        className='absolute left-[6%] bottom-[20%] h-10 w-10 rounded-full bg-brand-blue/75'
        aria-hidden='true'
      />

      <div className='page-width relative z-10 px-4'>
        <div className='relative grid gap-10 md:grid-cols-2 xl:grid-cols-[1.2fr_1fr]'>
          <span
            className='pointer-events-none absolute left-1/4 top-12 hidden h-5 w-5 -translate-x-1/2 rounded-full bg-brand-yellow/85 md:block'
            aria-hidden='true'
          />
          <span
            className='pointer-events-none absolute left-1/3 top-28 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-brand-white/90 md:block'
            aria-hidden='true'
          />
          <span
            className='pointer-events-none absolute left-1/6 top-44 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-brand-blue/80 md:block'
            aria-hidden='true'
          />
          <div>
            <ul className='mt-5 space-y-3 text-lg text-brand-ink/80'>
              {menuLinks.map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className='font-semibold transition-opacity hover:opacity-80'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='self-end rounded-3xl bg-white/65 p-6'>
            <p className='text-lg font-semibold text-brand-blue md:text-xl'>Inscrições abertas</p>
            <p className='mt-2 text-brand-ink/80'>Garanta sua vaga e receba a confirmação por e-mail.</p>
            <a
              href='/inscreva-se'
              className='mt-4 inline-flex items-center rounded-full bg-brand-yellow px-6 py-2 text-sm font-bold text-brand-blue transition-transform duration-200 hover:scale-105 md:text-base'
            >
              Inscreva-se
            </a>
          </div>
        </div>

        <div className='mt-14 rounded-3xl bg-brand-blue px-6 py-8 text-white md:px-10 md:py-10'>
          <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
            <div>
              <div className='inline-flex items-center gap-3'>
                <span className='inline-flex h-28 w-28 items-center justify-center rounded-full bg-white'>
                  <Image
                    src='/estudaDF.png'
                    alt='Estuda DF'
                    width={112}
                    height={112}
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </span>
              </div>
            </div>
            <p className='mt-1 max-w-2xl text-sm text-white/75 md:mt-3 md:text-base'>
              Copyright 2026 Educa DF<sup className='text-[0.6em] align-super'>®</sup> <br />
              Educação gratuita com impacto social no Distrito Federal
              <br />
              Desenvolvido por{' '}
              <a
                href='https://lucasrau.com'
                target='_blank'
                rel='noreferrer'
                className='font-semibold text-white decoration-white/70 underline-offset-4 hover:opacity-85'
              >
                Lucas Rau
              </a>
            </p>

            <ul className='flex items-center gap-3'>
              {socialItems.map(item => (
                <li key={item.label}>
                  {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
                  {(() => {
                    const Icon = item.icon;
                    return (
                      <a
                        href={item.href}
                        aria-label={item.label}
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${item.bg}`}
                      >
                        <Icon
                          className={`h-5 w-5 ${item.iconClass}`}
                          aria-hidden='true'
                        />
                      </a>
                    );
                  })()}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
