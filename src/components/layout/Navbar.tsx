import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { UnityMark } from '../common/UnityMark';
import { useState } from 'react';

type NavbarProps = {
  items: Array<{ label: string; href: string }>;
  ctaHref: string;
};

export function Navbar({ items, ctaHref }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/[0.65] backdrop-blur-2xl">
      <div className="section-shell flex h-14 items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-2.5 text-sm font-semibold text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-300/18 to-violet-400/[0.12] shadow-glow">
            <UnityMark className="h-[16px] w-[16px] invert" />
          </div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-100 sm:text-[11px]">Unity Portfolio</div>
        </a>

        <nav className="hidden items-center gap-4 lg:flex">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="link-subtle text-[13px]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href={ctaHref} className="button-secondary">
            Связаться
          </a>
        </div>

        <button
          type="button"
          aria-label="Открыть меню"
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="overflow-hidden border-t border-white/5 lg:hidden"
          >
            <div className="section-shell flex flex-col gap-2.5 py-3">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-white/[0.08] bg-white/5 px-4 py-3 text-sm text-slate-200"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href={ctaHref} className="button-primary mt-1" onClick={() => setOpen(false)}>
                Связаться
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
