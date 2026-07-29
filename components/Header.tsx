'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/#inicio', label: 'Início' },
    { href: '/#sobre', label: 'Sobre' },
    { href: '/inscreva-se', label: 'Inscrição' },
    { href: '/#suporte', label: 'Contato' },
  ];

  return (
    <header className='fixed inset-x-0 top-0 z-9000 w-full border-b border-brand-blue/10 bg-white backdrop-blur'>
      <div className='page-width grid grid-cols-[1fr_auto_auto] items-center gap-3 md:grid-cols-[1fr_auto_1fr] md:gap-4'>
        <div className='justify-self-start'>
          <Link
            href='/'
            aria-label='Voltar para a página inicial'
          >
            <Image
              src='/estudaDF.png'
              alt='EstudaDF'
              width={180}
              height={168}
              priority
              style={{ height: 'auto' }}
              className='rounded-full w-16 md:w-22.5'
            />
          </Link>
        </div>

        <nav
          aria-label='Menu principal'
          className='hidden justify-self-center text-black md:block'
        >
          <ul className='flex items-center gap-5 text-sm font-semibold uppercase tracking-wide md:gap-8 md:text-base'>
            {navItems.map(item => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className='transition-opacity hover:opacity-80'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='justify-self-end'>
          <Link
            href='/inscreva-se'
            className='inline-flex items-center rounded-full bg-brand-yellow px-4 py-2 text-xs font-bold text-brand-blue transition-transform duration-200 hover:scale-105 sm:px-5 sm:text-sm md:px-6 md:py-2.5 md:text-base'
          >
            Inscreva-se
          </Link>
        </div>

        <button
          type='button'
          className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue/20 text-brand-blue md:hidden'
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(previous => !previous)}
        >
          <span className='sr-only'>Menu</span>
          <span className='relative block h-4 w-5'>
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-200 ${isMenuOpen ? 'translate-y-1.75 rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-1.75 h-0.5 w-5 bg-current transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`absolute left-0 top-3.5 h-0.5 w-5 bg-current transition-transform duration-200 ${isMenuOpen ? '-translate-y-1.75 -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <nav
          aria-label='Menu mobile'
          className='border-t border-brand-blue/10 bg-white px-4 py-4 md:hidden'
        >
          <ul className='page-width grid gap-2 text-sm font-semibold uppercase tracking-wide text-brand-ink'>
            {navItems.map(item => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className='block rounded-xl px-4 py-3 transition-colors hover:bg-brand-light-blue/20'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
