import Header from '@/components/Header';
import FooterComponent from '@/components/FooterComponent';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const classLocations = [
  { value: 'guara-estrutural', label: 'Guará / Estrutural' },
  { value: 'taguatinga', label: 'Taguatinga' },
  { value: 'ceilandia', label: 'Ceilândia' },
  { value: 'gama-santa-maria', label: 'Gama / Santa Maria' },
  { value: 'sobradinho-planaltina', label: 'Sobradinho / Planaltina' },
  { value: 'sao-sebastiao', label: 'São Sebastião' },
  { value: 'brazlandia', label: 'Brazlândia' },
  { value: 'riacho-fundo', label: 'Riacho Fundo' },
];

export default function InscrevaSePage() {
  return (
    <>
      <Header />

      <main className='relative overflow-hidden bg-white pb-16 pt-32 md:pb-24 md:pt-40'>
        <span
          className='absolute left-[8%] top-[12%] h-9 w-9 rounded-full bg-brand-yellow/90'
          aria-hidden='true'
        />
        <span
          className='absolute right-[12%] top-[16%] h-7 w-7 rounded-full bg-brand-light-blue/80'
          aria-hidden='true'
        />
        <span
          className='absolute left-[14%] bottom-[16%] h-10 w-10 rounded-full bg-brand-blue/85'
          aria-hidden='true'
        />

        <section className='page-width relative z-10 px-4'>
          <div className='grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue'>Matrículas abertas</p>
              <h1 className='mt-3 text-4xl font-bold leading-tight text-brand-ink md:text-6xl'>
                Inscreva-se no
                <br />
                curso EstudaDF
              </h1>
              <p className='mt-3 inline-flex rounded-full border border-brand-blue/20 bg-brand-light-blue/15 px-4 py-2 text-sm font-semibold text-brand-blue md:text-base'>
                Preparatório para o Concurso da SEDES
              </p>
              <p className='mt-5 max-w-xl text-lg text-brand-ink/75'>
                Preencha o formulário para receber a confirmação da sua vaga e as próximas orientações por e-mail.
              </p>

              <div className='mt-8 rounded-3xl border border-brand-blue/20 bg-brand-yellow px-6 py-5'>
                <p className='text-base font-bold text-brand-blue md:text-lg'>Lembrete importante</p>
                <p className='mt-2 text-brand-ink'>Traga 1 kg de alimento não perecível no primeiro dia de aula.</p>
              </div>
            </div>

            <form className='rounded-4xl border border-brand-blue/15 bg-white p-6 shadow-[0_14px_40px_rgba(0,66,191,0.15)] sm:p-10'>
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
                  Localidade para aula
                  <Select>
                    <SelectTrigger className='mt-2 h-14 rounded-2xl px-5 text-base'>
                      <SelectValue placeholder='Selecione a localidade' />
                    </SelectTrigger>
                    <SelectContent>
                      {classLocations.map(location => (
                        <SelectItem
                          key={location.value}
                          value={location.value}
                        >
                          {location.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </label>

                <button
                  type='button'
                  className='inline-flex h-12 w-full items-center justify-center rounded-2xl bg-brand-blue text-lg font-semibold text-white transition-transform duration-200 hover:scale-[1.01]'
                >
                  Confirmar inscrição
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <FooterComponent />
    </>
  );
}
