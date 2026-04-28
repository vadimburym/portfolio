import type { PortfolioData } from '../../types/portfolio';

export function Footer({ navigation, footer }: { navigation: PortfolioData['navigation']; footer: PortfolioData['footer'] }) {
  return (
    <footer className="border-t border-white/[0.08] py-6">
      <div className="section-shell flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-slate-300">{footer.copyright}</p>
          <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-500">{footer.note}</p>
        </div>

        <nav className="flex flex-wrap gap-3 text-sm text-slate-400">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
