import Header from '@/components/Header';
import Image from 'next/image';

export default function MainComponent() {
  return (
    <section className='relative overflow-hidden bg-brand-blue pt-20 text-brand-white min-h-[70vh] md:pt-24'>
      <span
        aria-hidden='true'
        className='orb-enter pointer-events-none absolute left-[-2%] top-[17%] h-12 w-12 rounded-full bg-brand-light-blue [animation-delay:60ms] md:left-[6%] md:h-16 md:w-16'
      />
      <span
        aria-hidden='true'
        className='orb-enter pointer-events-none absolute left-[3%] bottom-[8%] h-10 w-10 rounded-full bg-brand-yellow [animation-delay:160ms] md:left-[6%] md:h-14 md:w-14'
      />
      <span
        aria-hidden='true'
        className='orb-enter pointer-events-none absolute left-[7%] top-[12%] h-6 w-6 rounded-full bg-brand-white [animation-delay:220ms] md:left-[28%] md:h-8 md:w-8'
      />
      <span
        aria-hidden='true'
        className='orb-enter pointer-events-none absolute left-[2%] bottom-[34%] h-8 w-8 rounded-full bg-brand-light-blue/90 [animation-delay:310ms] md:left-[10%] md:h-12 md:w-12'
      />
      <span
        aria-hidden='true'
        className='orb-enter pointer-events-none absolute left-[2%] top-[29%] h-5 w-5 rounded-full bg-brand-yellow/85 [animation-delay:420ms] md:left-[36%] md:h-7 md:w-7'
      />
      <span
        aria-hidden='true'
        className='orb-enter pointer-events-none absolute left-[12%] bottom-[30%] h-4 w-4 rounded-full bg-brand-light-blue/80 [animation-delay:510ms] md:left-[41%] md:h-6 md:w-6'
      />
      <span
        aria-hidden='true'
        className='orb-enter pointer-events-none absolute right-[-8%] top-[22%] h-14 w-14 rounded-full bg-brand-light-blue [animation-delay:120ms] md:h-20 md:w-20'
      />
      <span
        aria-hidden='true'
        className='orb-enter pointer-events-none absolute right-[12%] bottom-[14%] h-11 w-11 rounded-full bg-brand-white [animation-delay:260ms] md:h-16 md:w-16'
      />
      <span
        aria-hidden='true'
        className='orb-enter pointer-events-none absolute right-[4%] top-[14%] h-7 w-7 rounded-full bg-brand-yellow/90 [animation-delay:340ms] md:right-[24%] md:h-10 md:w-10'
      />
      <span
        aria-hidden='true'
        className='orb-enter pointer-events-none absolute right-[6%] bottom-[30%] h-9 w-9 rounded-full bg-brand-light-blue/80 [animation-delay:460ms] md:h-12 md:w-12'
      />
      <span
        aria-hidden='true'
        className='orb-enter pointer-events-none absolute right-[2%] top-[33%] h-5 w-5 rounded-full bg-brand-white [animation-delay:560ms] md:right-[32%] md:h-7 md:w-7'
      />
      <span
        aria-hidden='true'
        className='orb-enter pointer-events-none absolute right-[27%] bottom-[29%] h-4 w-4 rounded-full bg-brand-yellow/80 [animation-delay:640ms] md:h-6 md:w-6'
      />

      <Header />

      <div
        id='inicio'
        className='relative z-10 page-width min-h-[calc(70vh-80px)] w-full md:min-h-[calc(65vh-96px)]'
      >
        <h1 className='text-4xl font-bold leading-tight md:text-7xl text-center mt-10'>Estuda DF</h1>

        <div className='grid w-full items-center lg:grid-cols-[0.5fr_1.5fr] lg:items-end mt-6'>
          <div className='order-2 mx-auto flex h-full w-full items-end lg:order-2 mt-4 lg:mt-0 lg:mx-0'>
            <Image
              src='/students_main.png'
              alt='Estudante com caderno fazendo anotacoes'
              width={3000}
              height={3000}
              className='mx-auto h-auto w-full rounded-4xl object-contain object-top '
              priority
            />
          </div>

          <div className='order-1 max-w-5xl text-center lg:order-1 lg:self-center lg:text-left'>
            <h2 className='mx-auto max-w-3xl text-xl font-semibold md:text-3xl lg:mx-0'>
              Educação gratuita que transforma oportunidades
            </h2>
            <p className='mx-auto mt-6 max-w-4xl text-base leading-relaxed md:text-xl lg:mx-0'>
              O Educa DF reúne cursos preparatórios para concursos públicos e cursos de capacitação profissional, com professores
              qualificados, metodologia prática e acesso gratuito.
            </p>
            <a
              href='#suporte'
              className='mt-8 inline-flex rounded-full bg-brand-yellow px-8 py-3 text-base font-bold text-brand-blue transition-transform duration-200 hover:scale-105 md:text-lg'
            >
              Inscreva-se
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
