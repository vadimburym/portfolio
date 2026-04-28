import { BriefcaseBusiness, Gamepad2, Target } from 'lucide-react';
import type { PortfolioData } from '../../types/portfolio';
import { GlassCard } from '../common/GlassCard';
import { Reveal } from '../common/Reveal';
import { SectionHeader } from '../common/SectionHeader';

const infoBlocks = [
  { title: 'К каким жанрам лежит душа', icon: Gamepad2, key: 'favoriteGenres' },
  { title: 'Предпочтения по работе', icon: Target, key: 'lookingFor' },
] as const;

export function AboutSection({ about }: { about: PortfolioData['about'] }) {
  return (
    <section id="about" className="section-shell section-spacing">
      <SectionHeader eyebrow="About / Positioning" title={about.title} />

      <Reveal>
        <GlassCard className="mt-5 p-4 sm:p-5">
          <div className="grid gap-4 lg:grid-cols-[1.18fr_0.82fr] lg:gap-5">
            <div>
              <div className="flex items-center gap-3 text-white">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/[0.15] bg-cyan-300/10 text-cyan-200">
                  <BriefcaseBusiness size={15} />
                </div>
                <h3 className="text-base font-semibold">Краткое позиционирование</h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-300">{about.description}</p>

            </div>

            <div className="grid gap-3">
              {infoBlocks.map(({ title, icon: Icon, key }) => {
                const values = about[key];
                return (
                  <div key={title} className="rounded-[18px] border border-white/[0.08] bg-white/[0.03] p-3.5">
                    <div className="flex items-center gap-2 text-white">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-200">
                        <Icon size={14} />
                      </div>
                      <h3 className="text-sm font-semibold">{title}</h3>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {values.map((item) => (
                        <span key={item} className="chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
