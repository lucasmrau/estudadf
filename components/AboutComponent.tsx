import Image from 'next/image';

type Topic = {
  title: string;
  icon: 'screen' | 'teacher' | 'book' | 'refresh' | 'chart' | 'check' | 'edit' | 'rocket';
};

const topics: Topic[] = [
  { title: 'Aulas 100% presenciais e online', icon: 'screen' },
  { title: 'Professores especializados em concursos públicos', icon: 'teacher' },
  { title: 'Material de apoio', icon: 'book' },
  { title: 'Revisões', icon: 'refresh' },
  { title: 'Simulados', icon: 'chart' },
  { title: 'Conteúdo atualizado conforme o edital', icon: 'check' },
];

const flowCards = [
  {
    title: 'Faça sua inscrição',
    text: 'Preencha seus dados no formulário oficial e envie sua inscrição em poucos minutos.',
    icon: 'edit' as const,
  },
  {
    title: 'Aguarde confirmação',
    text: 'Nossa equipe valida os cadastros para garantir organização e melhor atendimento das turmas. A confirmação da inscrição será enviada por e-mail.',
    icon: 'check' as const,
  },
  {
    title: 'Inicie sua jornada',
    text: 'No primeiro dia, leve 1 kg de alimento nao perecivel e comece sua preparacao com apoio completo.',
    icon: 'rocket' as const,
  },
];

const scheduleItems = [
  'Início: 10/08',
  '1ª Semana: 10/08 a 14/08',
  '2ª Semana: 17/08 a 21/08',
  '3ª Semana: 24/08 a 28/08 (confirmar)',
  'Segunda a quinta: aulas presenciais.',
  'Sexta: simulado.',
];

const classLocations = [
  'Guará / Estrutural',
  'Taguatinga',
  'Ceilândia',
  'Gama / Santa Maria',
  'Sobradinho / Planaltina',
  'São Sebastião',
  'Brazlândia',
  'Riacho Fundo',
];

function TopicIcon({ icon }: { icon: Topic['icon'] }) {
  if (icon === 'screen') {
    return (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        className='h-6 w-6 text-brand-blue'
        aria-hidden='true'
      >
        <rect
          x='3'
          y='4'
          width='18'
          height='12'
          rx='2'
          stroke='currentColor'
          strokeWidth='1.8'
        />
        <path
          d='M9 20h6M12 16v4'
          stroke='currentColor'
          strokeWidth='1.8'
          strokeLinecap='round'
        />
      </svg>
    );
  }

  if (icon === 'teacher') {
    return (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        className='h-6 w-6 text-brand-blue'
        aria-hidden='true'
      >
        <circle
          cx='12'
          cy='8'
          r='3'
          stroke='currentColor'
          strokeWidth='1.8'
        />
        <path
          d='M5 19a7 7 0 0 1 14 0M3.5 12l2.7-1.3M20.5 12l-2.7-1.3'
          stroke='currentColor'
          strokeWidth='1.8'
          strokeLinecap='round'
        />
      </svg>
    );
  }

  if (icon === 'book') {
    return (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        className='h-6 w-6 text-brand-blue'
        aria-hidden='true'
      >
        <path
          d='M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16H7.5A2.5 2.5 0 0 0 5 21z'
          stroke='currentColor'
          strokeWidth='1.8'
        />
        <path
          d='M5 5.5V21M9 7h7'
          stroke='currentColor'
          strokeWidth='1.8'
          strokeLinecap='round'
        />
      </svg>
    );
  }

  if (icon === 'refresh') {
    return (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        className='h-6 w-6 text-brand-blue'
        aria-hidden='true'
      >
        <path
          d='M20 6v5h-5M4 18v-5h5'
          stroke='currentColor'
          strokeWidth='1.8'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M19 11a7 7 0 0 0-12-3M5 13a7 7 0 0 0 12 3'
          stroke='currentColor'
          strokeWidth='1.8'
          strokeLinecap='round'
        />
      </svg>
    );
  }

  if (icon === 'chart') {
    return (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        className='h-6 w-6 text-brand-blue'
        aria-hidden='true'
      >
        <path
          d='M4 19h16M7 16V9M12 16V5M17 16v-7'
          stroke='currentColor'
          strokeWidth='1.8'
          strokeLinecap='round'
        />
      </svg>
    );
  }

  if (icon === 'edit') {
    return (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        className='h-6 w-6 text-brand-blue'
        aria-hidden='true'
      >
        <path
          d='M4 20h4l10.3-10.3a1.8 1.8 0 0 0 0-2.5l-1.5-1.5a1.8 1.8 0 0 0-2.5 0L4 16v4z'
          stroke='currentColor'
          strokeWidth='1.8'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12.5 6.5l5 5'
          stroke='currentColor'
          strokeWidth='1.8'
          strokeLinecap='round'
        />
      </svg>
    );
  }

  if (icon === 'rocket') {
    return (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        className='h-6 w-6 text-brand-blue'
        aria-hidden='true'
      >
        <path
          d='M14 4c3.5 0 6 2.5 6 6-3 0-5.5 2.5-6 6-3.5 0-6-2.5-6-6 0-3.5 2.5-6 6-6z'
          stroke='currentColor'
          strokeWidth='1.8'
          strokeLinejoin='round'
        />
        <circle
          cx='14'
          cy='10'
          r='1.4'
          stroke='currentColor'
          strokeWidth='1.6'
        />
        <path
          d='M8 14l-3 1 2 2 1-3zM10 18l-1 3 2-1 1-2'
          stroke='currentColor'
          strokeWidth='1.8'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      className='h-6 w-6 text-brand-blue'
      aria-hidden='true'
    >
      <path
        d='M5 13l4 4L19 7'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default function AboutComponent() {
  return (
    <section
      id='sobre'
      className='bg-brand-white py-16 md:py-24'
    >
      <div className='page-width grid gap-10 px-4 lg:grid-cols-[1.05fr_1.15fr] lg:items-start'>
        <div>
          <p className='text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue md:text-base'>Sobre o Estuda DF</p>
          <h2 className='mt-4 text-4xl font-bold leading-tight text-brand-ink md:text-6xl'>
            Educação gratuita que transforma oportunidades
          </h2>
          <p className='mt-7 max-w-2xl text-base leading-relaxed text-brand-ink/85 md:text-xl'>
            O Estuda DF nasceu para oferecer formação de qualidade, acessível e gratuita, conectando conhecimento, cidadania e
            inclusão social. O programa reúne cursos preparatórios e de capacitação em diversas áreas, aproximando a população de
            novas oportunidades acadêmicas e profissionais.
          </p>
          <a
            href='#suporte'
            className='mt-8 inline-flex rounded-full bg-brand-yellow px-8 py-3 text-base font-bold text-brand-blue transition-transform duration-200 hover:scale-105 md:text-lg'
          >
            Inscreva-se
          </a>
        </div>

        <div className='grid grid-cols-2 gap-5 xl:grid-cols-3'>
          <article className='col-span-2 rounded-3xl border-2 border-brand-light-blue/35 bg-brand-light-blue/12 p-6 xl:col-span-3'>
            <h3 className='text-2xl font-bold text-brand-blue md:text-3xl'>Curso - Preparatório para o Concurso da SEDES</h3>
          </article>

          {topics.map(topic => (
            <article
              key={topic.title}
              className='rounded-3xl border-2 border-brand-blue/20 bg-brand-white p-5 shadow-[0_8px_30px_rgba(0,66,191,0.08)] transition-transform duration-200 hover:-translate-y-1'
            >
              <div className='mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-light-blue/20'>
                <TopicIcon icon={topic.icon} />
              </div>
              <p className='text-base font-semibold leading-snug text-brand-ink md:text-lg'>{topic.title}</p>
            </article>
          ))}
        </div>

        <section className='rounded-4xl bg-brand-white p-4 sm:p-8 lg:col-span-2'>
          <h3 className='text-center text-3xl font-bold text-brand-ink md:text-5xl'>Como funciona</h3>

          <div className='mt-24 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center'>
            <div className='relative mx-auto w-full max-w-2xl lg:max-w-4xl'>
              <div
                className='absolute -inset-2 rounded-4xl bg-brand-blue/10 blur-2xl'
                aria-hidden='true'
              />
              <Image
                src='/man-wearing-t-shirt.png'
                alt='Participante do Educa DF'
                width={980}
                height={1160}
                className='relative z-10 -ml-[6%] w-[112%] max-w-none rounded-4xl object-cover sm:ml-0 sm:w-full sm:max-w-full lg:origin-left lg:scale-125'
              />
            </div>

            <div className='relative z-20 grid gap-4 lg:-ml-24 lg:w-[125%]'>
              {flowCards.map(card => (
                <article
                  key={card.title}
                  className='flex gap-4 rounded-3xl border border-brand-blue/12 bg-white p-5 shadow-[0_8px_28px_rgba(45,47,51,0.08)] md:items-center md:p-6'
                >
                  <span className='mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-yellow md:mt-0'>
                    <TopicIcon icon={card.icon} />
                  </span>
                  <div>
                    <h4 className='text-xl font-bold text-brand-ink md:text-2xl'>{card.title}</h4>
                    <p className='mt-2 text-sm leading-relaxed text-brand-ink/80 md:text-base'>{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='relative overflow-hidden rounded-4xl bg-brand-blue p-5 sm:p-8 lg:col-span-2'>
          <div
            className='pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-brand-white/20 blur-3xl'
            aria-hidden='true'
          />

          <p className='relative z-10 inline-flex rounded-full bg-brand-yellow px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue md:text-sm'>
            Turma SEDES
          </p>
          <h3 className='relative z-10 mt-4 text-3xl font-bold text-brand-white md:text-5xl'>Cronograma do Curso SEDES</h3>

          <div className='relative z-10 mt-8 grid gap-6 lg:grid-cols-2'>
            <article className='rounded-3xl border border-brand-white/70 bg-brand-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.12)] md:p-6'>
              <h4 className='text-xl font-bold text-brand-blue md:text-2xl'>Calendário</h4>
              <ul className='mt-4 grid gap-3'>
                {scheduleItems.map(item => (
                  <li
                    key={item}
                    className='flex items-start gap-3 text-brand-ink/90'
                  >
                    <span
                      className='mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-brand-blue'
                      aria-hidden='true'
                    />
                    <span className='text-base leading-relaxed md:text-lg'>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className='rounded-3xl border border-brand-white/70 bg-brand-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.12)] md:p-6'>
              <h4 className='text-xl font-bold text-brand-blue md:text-2xl'>Locais das Aulas</h4>
              <ul className='mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2'>
                {classLocations.map(location => (
                  <li
                    key={location}
                    className='rounded-2xl border border-brand-blue/20 bg-brand-light-blue/15 px-3 py-2 text-sm font-semibold text-brand-blue md:text-base'
                  >
                    {location}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className='relative z-10 mt-6 rounded-3xl border border-brand-yellow/50 bg-brand-yellow p-5 md:p-6'>
            <h4 className='text-xl font-bold text-brand-blue md:text-2xl'>Mega Aulão Solidário</h4>
            {/* <p className='mt-2 text-sm font-semibold text-brand-blue/90 md:text-base'>
              Lançaremos mais à frente esse Mega Aulão no site.
            </p> */}
            <div className='mt-4 grid gap-2 text-brand-ink md:grid-cols-3 md:gap-4'>
              <p className='rounded-xl bg-brand-white px-3 py-2 text-sm font-semibold md:text-base'>Data: 05/09</p>
              <p className='rounded-xl bg-brand-white px-3 py-2 text-sm font-semibold md:text-base'>Horário: 08h às 18h</p>
              <p className='rounded-xl bg-brand-white/80 px-3 py-2 text-sm font-semibold md:text-base'>Local: A confirmar</p>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}
