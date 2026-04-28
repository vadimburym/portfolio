import {
  AppWindow,
  ArrowUpRight,
  Gamepad2,
  Github,
  Linkedin,
  Mail,
  MessagesSquare,
  Palette,
  Smartphone,
} from 'lucide-react';
import type { PortfolioData } from '../../types/portfolio';
import type { SocialPlatform } from '../../types/portfolio';
import { GlassCard } from '../common/GlassCard';
import { Reveal } from '../common/Reveal';
import { SectionHeader } from '../common/SectionHeader';

const iconMap: Record<Exclude<SocialPlatform, 'steam'>, typeof Github> = {
  github: Github,
  telegram: MessagesSquare,
  email: Mail,
  linkedin: Linkedin,
  artstation: Palette,
  itch: Gamepad2,
  googlePlay: Smartphone,
  appStore: AppWindow,
};

function ContactIcon({ platform }: { platform: SocialPlatform }) {
  if (platform === 'steam') {
    return <img
        src="./placeholders/steam.svg"
        alt="Steam"
        className="h-5 w-5 text-white opacity-90 object-contain"
    />
  }

  const Icon = iconMap[platform];
  return <Icon size={16} />;
}

export function ContactSection({ items }: { items: PortfolioData['contacts'] }) {
  return (
    <section id="contacts" className="section-shell section-spacing">
      <SectionHeader eyebrow="Contacts" title="Контакты" align="center" />

      <Reveal>
        <GlassCard className="mt-8 p-5 sm:p-6 lg:p-7">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {items.map((item, index) => {
              
              return (
                <a
                  key={`${item.platform}-${index}`}
                  href={item.url}
                  target={item.platform === 'email' ? undefined : '_blank'}
                  rel={item.platform === 'email' ? undefined : 'noreferrer'}
                  className="group rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-cyan-300/[0.07]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-200 transition group-hover:border-cyan-300/20 group-hover:bg-cyan-300/10">
                    <ContactIcon platform={item.platform} />
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <h3 className="text-sm font-semibold text-white">{item.label}</h3>
                    <ArrowUpRight size={15} className="text-slate-500 transition group-hover:text-white" />
                  </div>
                  <p className="mt-2 break-all text-sm leading-6 text-slate-300">{item.value}</p>
                </a>
              );
            })}
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
