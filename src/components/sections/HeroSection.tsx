import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import type { PortfolioData } from '../../types/portfolio';

export function HeroSection({ hero }: { hero: PortfolioData['hero'] }) {
  return (
    <section id="hero" className="section-shell section-spacing relative overflow-hidden pt-4 sm:pt-5">
      <div className="absolute inset-x-0 top-0 -z-10 h-[240px] rounded-[28px] bg-hero-radial blur-3xl" />

      <div className="grid items-center gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-[2rem] font-semibold leading-none tracking-tight text-white sm:text-[2.35rem] lg:text-[2.75rem]">
            {hero.name}
          </h1>
          <p className="mt-3 text-xl font-semibold tracking-[0.02em] text-slate-100 sm:text-[1.6rem] lg:text-[1.85rem]">
            {hero.role}
          </p>

          <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
            <a href={hero.primaryCta.href} className="button-accent">
              <Download size={15} />
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="button-secondary">
              <ArrowRight size={15} />
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className="mt-4 space-y-2.5">
            <p className="text-lg font-semibold tracking-[0.06em] text-slate-100 sm:text-[1.25rem] lg:text-[1.38rem]">{hero.experienceNote}</p>
            <p className="flex flex-wrap items-center gap-2 text-[15px] font-medium text-slate-300 sm:text-base">
              <span className="font-semibold text-slate-200">Локация:</span>
              <img src={hero.flagIcon} alt="Флаг России" className="h-4 w-6 shrink-0 object-cover" />
              <span>{hero.location}</span>
            </p>
            <p className="flex flex-wrap items-center gap-2 text-[15px] font-medium text-slate-300 sm:text-base">
              <span className="font-semibold text-slate-200">Возраст:</span>
              <span>{hero.age}</span>
            </p>
            <p className="flex flex-wrap items-center gap-2 text-[15px] font-medium text-slate-300 sm:text-base">
              <span className="font-semibold text-slate-200">Английский:</span>
              <span>{hero.english}</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[250px] sm:max-w-[285px]"
        >
          <div className="panel relative overflow-hidden p-3">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-500/[0.12]" />
            <div className="absolute right-3 top-3 flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cyan-300/70" />
              <span className="h-2 w-2 rounded-full bg-violet-300/70" />
              <span className="h-2 w-2 rounded-full bg-slate-300/30" />
            </div>
            <div className="relative rounded-[18px] border border-white/10 bg-slate-950/60 p-2.5">
              <img
                src={hero.avatar}
                alt="Аватар или key art placeholder"
                className="aspect-[4/5] w-full rounded-[14px] object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
