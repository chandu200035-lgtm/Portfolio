import PageWrapper from "./PageWrapper";

export default function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <PageWrapper>
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10">
        <div className="hud-card glow p-7 md:p-10">
          <div className="mb-8">
            <div className="text-xs tracking-[0.28em] text-emerald-200/70">$ whoami</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-emerald-300 md:text-5xl">
              {title}
            </h1>
            <p className="mt-3 text-base text-emerald-200/75 md:text-lg">{subtitle}</p>
          </div>
          {children}
        </div>
      </section>
    </PageWrapper>
  );
}
