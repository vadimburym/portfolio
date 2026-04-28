import { ArrowUpRight, Sparkles, Wrench } from 'lucide-react';
import type { PortfolioData } from '../../types/portfolio';
import { GlassCard } from '../common/GlassCard';
import { Reveal } from '../common/Reveal';
import { SectionHeader } from '../common/SectionHeader';

type FeaturedProjectCardProps = {
  item: PortfolioData['featuredProjects'][number];
  delay: number;
};

function FeaturedProjectCard({ item, delay }: FeaturedProjectCardProps) {
  return (
    <Reveal delay={delay}>
      <GlassCard className="overflow-hidden p-0">
        <div className="bg-[#06101d]">
          <div className="grid items-stretch bg-[#07101d] lg:grid-cols-[minmax(0,1.03fr)_minmax(360px,0.97fr)]">
            <div
              className="relative min-h-[220px] lg:min-h-[294px]"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(99,102,241,0.14))]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07101d]/82 via-transparent to-transparent" />
              <div className="absolute inset-y-0 right-0 w-36 bg-[linear-gradient(90deg,rgba(7,16,29,0)_0%,rgba(7,16,29,0.1)_18%,rgba(7,16,29,0.32)_38%,rgba(7,16,29,0.64)_62%,rgba(7,16,29,0.88)_82%,#07101d_100%)] sm:w-44 lg:w-56" />
            </div>

            <div className="relative flex min-w-0 flex-col justify-center bg-[#07101d] px-4 py-4 sm:px-5 sm:py-5 lg:px-7 lg:py-6">
              <div className="absolute inset-y-0 left-0 hidden w-14 bg-[linear-gradient(90deg,#07101d_0%,rgba(7,16,29,0.92)_26%,rgba(7,16,29,0.54)_62%,rgba(7,16,29,0)_100%)] lg:block" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-lg font-semibold tracking-tight text-white sm:text-[1.34rem]">{item.title}</h3>
                  <span className="chip-open-source">{item.badge}</span>
                </div>

                <p className="mt-3 max-w-[42ch] text-sm leading-6 text-slate-300 sm:text-[15px]">{item.description}</p>

                <div className="mt-auto pt-5">
                  <a
                    href={item.url}
                    className="button-accent inline-flex min-w-[158px] justify-center px-6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Подробнее
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-cyan-300/14 to-transparent" />
        </div>

        <div className="bg-[linear-gradient(180deg,rgba(4,9,20,0.98),rgba(3,8,18,1))] px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6">
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            <div>
              <div className="flex items-center gap-2 text-base font-semibold text-white sm:text-[1.02rem]">
                <Sparkles size={18} className="text-cyan-200" />
                Особенности
              </div>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {item.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-3 text-sm leading-6 text-slate-300"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-base font-semibold text-white sm:text-[1.02rem]">
                <Wrench size={18} className="text-violet-200" />
                Стек и инструменты
              </div>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {item.stack.map((tech) => (
                  <span key={tech} className="tech-chip-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </Reveal>
  );
}

export function FeaturedProjectsSection({ items }: { items: PortfolioData['featuredProjects'] }) {
  return (
    <section id="featured-projects" className="section-shell section-spacing">
      <SectionHeader eyebrow="Open-source / Featured" title="Самые сильные open-source решения" titleClassName="whitespace-nowrap" />

      <div className="mt-6 grid gap-4">
        {items.map((item, index) => (
          <FeaturedProjectCard key={item.title} item={item} delay={index * 0.06} />
        ))}
      </div>
    </section>
  );
}
