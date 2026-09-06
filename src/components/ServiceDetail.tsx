import Button from "@/components/Button";
import Placeholder from "@/components/Placeholder";

type Card = { title: string; desc: string };

export default function ServiceDetail({
  kicker,
  title,
  lede,
  photoLabel,
  primaryCtaHref,
  primaryCtaLabel,
  cardsTitle,
  cards,
  cardsNote,
}: {
  kicker: string;
  title: string;
  lede: string;
  photoLabel: string;
  primaryCtaHref: string;
  primaryCtaLabel: string;
  cardsTitle: string;
  cards: Card[];
  cardsNote?: string;
}) {
  return (
    <>
      <section className="px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-2 text-xs font-bold text-ink-soft">{kicker}</div>
          <div className="grid items-center gap-9 md:grid-cols-2">
            <div>
              <h1 className="text-[28px] leading-[1.18] font-extrabold">{title}</h1>
              <p className="mt-3 max-w-[46ch] text-ink-soft">{lede}</p>
              <div className="mt-5">
                <Button href={primaryCtaHref}>{primaryCtaLabel}</Button>
              </div>
            </div>
            <Placeholder label={photoLabel} className="h-[260px]" />
          </div>
        </div>
      </section>

      <section className="bg-canvas px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-[28px] leading-[1.18] font-extrabold">{cardsTitle}</h2>
          <div className="mt-6 grid gap-5.5 md:grid-cols-3">
            {cards.map((c) => (
              <div key={c.title} className="rounded border border-line-soft bg-white p-5.5">
                <h3 className="mb-2 text-[15px] font-extrabold">{c.title}</h3>
                <p className="text-[13.5px] text-ink-soft">{c.desc}</p>
              </div>
            ))}
          </div>
          {cardsNote && <p className="mt-4 text-[11px] italic text-[#8E97A3]">{cardsNote}</p>}
        </div>
      </section>

      <section className="px-6 py-10 text-center">
        <Button href="/solutions" variant="ghost">
          ← Back to Solutions &amp; Services
        </Button>
      </section>
    </>
  );
}
