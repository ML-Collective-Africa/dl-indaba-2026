interface PageHeaderProps {
  title: string;
  lede?: string;
}

export function PageHeader({ title, lede }: PageHeaderProps) {
  return (
    <section className="py-16 pb-10 border-b border-rule">
      <div className="container-site grid grid-cols-1 md:grid-cols-[1fr_280px] gap-7 md:gap-14 items-end">
        <div>
          <h1 className="text-[clamp(40px,5.6vw,72px)] tracking-[-0.025em] leading-none mt-3 font-serif font-normal">
            {title}
          </h1>
          {lede && <p className="lede mt-[18px] text-[21px] leading-relaxed text-ink-2 max-w-[50ch]">{lede}</p>}
        </div>
      </div>
    </section>
  );
}
