import { Bot, Boxes, Cpu, Gauge, Wrench } from 'lucide-react';
import type { PortfolioData } from '../../types/portfolio';
import { GlassCard } from '../common/GlassCard';
import { Reveal } from '../common/Reveal';
import { SectionHeader } from '../common/SectionHeader';

const categoryIcons = [Cpu, Boxes, Wrench, Gauge, Bot, Boxes];

export function TechStackSection({ items }: { items: PortfolioData['techStack'] }) {
  return (
    <section id="tech-stack" className="section-shell section-spacing">
      <SectionHeader eyebrow="Tech Stack" title="Стек технологий" />

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {items.map((item, index) => {
          const Icon = categoryIcons[index] ?? Cpu;
          return (
            <Reveal key={item.title} delay={index * 0.05}>
              <GlassCard className="h-full p-5 sm:p-6">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-200">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {item.items.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-slate-200 transition duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
