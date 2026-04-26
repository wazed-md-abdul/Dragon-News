import Link from "next/link";

const metrics = [
  {
    value: "24/7",
    label: "A daily reporting rhythm that keeps breaking stories moving.",
    delay: "reveal-delay-1",
  },
  {
    value: "8",
    label: "Core coverage desks spanning policy, culture, tech, and climate.",
    delay: "reveal-delay-2",
  },
  {
    value: "100%",
    label: "Stories edited for clarity, sourcing, and context before publish.",
    delay: "reveal-delay-3",
  },
];

const principles = [
  {
    title: "Context first",
    description:
      "We look past the headline and bring readers the why, who, and what happens next.",
  },
  {
    title: "Human reporting",
    description:
      "Interviews, lived experience, and first-hand observation shape every major story.",
  },
  {
    title: "Calm presentation",
    description:
      "Readers should feel informed, not flooded, so we design for clarity and flow.",
  },
];

const coverageAreas = [
  "Politics and policy",
  "Business and markets",
  "Culture and internet life",
  "Science and climate",
];

const workflow = [
  {
    step: "01",
    title: "Pitch and framing",
    description:
      "Every story begins with a clear angle, a reader need, and a reporting plan.",
  },
  {
    step: "02",
    title: "Reporting and review",
    description:
      "Writers work with editors to source facts, pressure-test claims, and keep nuance intact.",
  },
  {
    step: "03",
    title: "Publish and update",
    description:
      "Stories stay alive after publication with fresh context, corrections, and follow-through.",
  },
];

const AboutSection = () => {
  return (
    <main className="pb-20 pt-10">
      <section className="relative overflow-hidden border-b border-slate-200/80">
        <div className="soft-grid absolute inset-0 opacity-40" />
        <div className="container mx-auto px-4 py-10 sm:py-16">
          <div className="relative grid gap-12 lg:grid-cols-[1.35fr_0.9fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="section-kicker reveal-up">About NewsJournal</p>
              <h1 className="editorial-heading reveal-up reveal-delay-1 mt-4 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Reporting that stays thoughtful when the news cycle gets loud.
              </h1>
              <p className="reveal-up reveal-delay-2 mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                NewsJournal blends daily reporting with crisp context so readers can move from
                headlines to understanding without feeling overwhelmed.
              </p>
              <div className="reveal-up reveal-delay-3 mt-8 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
                >
                  Back to headlines
                </Link>
                <Link
                  href="/career"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-slate-900"
                >
                  See careers
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {metrics.map((metric) => (
                <div
                  key={metric.value}
                  className={`surface-panel hover-lift reveal-up rounded-[28px] p-5 ${metric.delay}`}
                >
                  <p className="text-3xl font-black text-slate-900">{metric.value}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80">
        <div className="container mx-auto px-4 py-14 sm:py-16">
          <div className="max-w-2xl">
            <p className="section-kicker">Principles</p>
            <h2 className="editorial-heading mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              The values that keep our reporting steady.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className={`surface-panel hover-lift reveal-up rounded-[28px] p-6 ${
                  index === 0 ? "reveal-delay-1" : index === 1 ? "reveal-delay-2" : "reveal-delay-3"
                }`}
              >
                <h3 className="editorial-heading text-2xl font-bold text-slate-900">
                  {principle.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 py-14 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="reveal-up reveal-delay-1">
              <p className="section-kicker">Coverage</p>
              <h2 className="editorial-heading mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                The beats we care about most.
              </h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {coverageAreas.map((area) => (
                  <div key={area} className="surface-panel hover-lift rounded-[24px] px-5 py-4">
                    <p className="font-semibold text-slate-800">{area}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-up reveal-delay-2">
              <p className="section-kicker">Workflow</p>
              <h2 className="editorial-heading mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                How a story moves through the newsroom.
              </h2>
              <div className="mt-8 space-y-4">
                {workflow.map((item) => (
                  <div
                    key={item.step}
                    className="surface-panel hover-lift flex gap-4 rounded-[28px] p-5"
                  >
                    <span className="text-sm font-black uppercase tracking-[0.28em] text-blue-600">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutSection;
