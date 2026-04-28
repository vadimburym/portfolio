import { ArrowUpRight, GraduationCap } from 'lucide-react';
import type { PortfolioData } from '../../types/portfolio';
import { GlassCard } from '../common/GlassCard';
import { Reveal } from '../common/Reveal';
import { SectionHeader } from '../common/SectionHeader';

export function EducationSection({ items }: { items: PortfolioData['education'] }) {
  return (
    <section id="education" className="section-shell section-spacing">
      <SectionHeader eyebrow="Education / Learning" title="Образование" />

      <div className="mt-6 space-y-4">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <GlassCard className="p-4 sm:p-[18px]">
              <div className="flex items-stretch gap-4">
                <div className="w-[92px] shrink-0 overflow-hidden rounded-[18px] border border-white/[0.08] sm:w-[112px]">
                  <img src={item.image} alt={item.title} className="aspect-square h-full w-full object-cover" />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-between">
                  <div className="flex min-w-0 items-start gap-3 text-white">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/[0.15] bg-cyan-300/10 text-cyan-200">
                      <GraduationCap size={20} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold leading-6 sm:text-[1.05rem]">{item.title}</h3>
                      <p className="mt-1.5 text-base font-semibold uppercase tracking-[0.16em] text-slate-200 sm:text-[1.05rem]">{item.period}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <a href={item.url} target="_blank" rel="noreferrer" className="button-secondary inline-flex px-4">
                      {item.linkLabel}
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
