import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Wrench } from 'lucide-react';
import { useState } from 'react';
import type { PortfolioData } from '../../types/portfolio';
import { GlassCard } from '../common/GlassCard';
import { Reveal } from '../common/Reveal';
import { SectionHeader } from '../common/SectionHeader';

export function ReleasedProjectsSection({ items }: { items: PortfolioData['releasedProjects'] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const previous = () => setActiveIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  const next = () => setActiveIndex((current) => (current === items.length - 1 ? 0 : current + 1));

  const activeItem = items[activeIndex];


  return (
    <section id="released-projects" className="section-shell section-spacing">
      <SectionHeader eyebrow="Projects" title="Все проекты" />

      <Reveal>
        <div className="relative mt-6 px-0 sm:px-10 lg:px-14">
          <button
            type="button"
            aria-label="Показать предыдущий релиз"
            className="absolute left-0 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-slate-200 transition-colors duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
            onClick={previous}
          >
            <ArrowLeft size={18} />
          </button>

          <button
            type="button"
            aria-label="Показать следующий релиз"
            className="absolute right-0 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-slate-200 transition-colors duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
            onClick={next}
          >
            <ArrowRight size={18} />
          </button>

          <div className="mx-auto max-w-[980px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.title}
                initial={{ opacity: 0, x: 36 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -36 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <GlassCard className="overflow-hidden p-4 sm:p-5 lg:min-h-[640px] lg:p-6">
                  <div className="grid gap-5 md:grid-cols-[0.82fr_1.18fr] md:items-start lg:gap-6">
                    <div className="flex h-full flex-col">
                      <div className="overflow-hidden rounded-[18px] border border-white/[0.08]">
                        <img src={activeItem.image} alt={activeItem.title} className="h-full min-h-[260px] w-full object-cover lg:min-h-[320px]" />
                      </div>
                      <div className="mt-4 rounded-[18px] border border-white/[0.08] bg-white/[0.03] p-3.5 text-sm text-slate-300">
                        <div className="flex items-center gap-2 text-sm font-semibold text-white">
                          <CheckCircle2 size={16} className="text-cyan-200" />
                          Статус и платформа
                        </div>
                        <p className="mt-2 leading-6 text-slate-400">
                          {activeItem.status} • {activeItem.platform}
                        </p>
                      </div>
                      <a href={activeItem.url} target="_blank" rel="noreferrer" className="button-accent mt-4 w-full justify-center sm:w-full">
                        {activeItem.linkLabel}
                        <ArrowUpRight size={15} />
                      </a>
                    </div>

                    <div className="flex min-w-0 flex-col">
                      <h3 className="text-xl font-semibold text-white sm:text-[1.55rem]">{activeItem.title}</h3>
                      <div className="mt-4 rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-4 sm:p-5">
                        <p className="text-sm leading-7 text-slate-300 sm:text-[15px]">{activeItem.description}</p>
                      </div>

                      <div className="mt-4">
                        <div className="flex items-center gap-2 text-[1.02rem] font-semibold text-white sm:text-[1.08rem]">
                          <Wrench size={19} className="text-violet-200" />
                          Стек и инструменты
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2.5">
                          {activeItem.stack.map((tech) => (
                            <span key={tech} className="tech-chip-lg">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>

            <div className="mt-4 flex items-center justify-center gap-2.5">
              {items.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Показать релиз ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-200 ${
                    index === activeIndex ? 'w-7 bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.45)]' : 'w-2.5 bg-white/20 hover:bg-white/35'
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
