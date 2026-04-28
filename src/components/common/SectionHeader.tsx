import { Reveal } from './Reveal';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  align?: 'left' | 'center';
  titleClassName?: string;
};

export function SectionHeader({ eyebrow, title, align = 'left', titleClassName = '' }: SectionHeaderProps) {
  const centered = align === 'center';

  return (
    <Reveal>
      <div className={centered ? 'mx-auto max-w-xl text-center' : 'max-w-xl'}>
        <span className="section-kicker">{eyebrow}</span>
        <h2
          className={`mt-3 text-[1.5rem] font-semibold tracking-tight text-white sm:text-[1.72rem] lg:text-[1.9rem] ${titleClassName}`.trim()}
        >
          {title}
        </h2>
      </div>
    </Reveal>
  );
}
