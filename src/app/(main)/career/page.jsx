import Link from "next/link";

const hiringFocus = [
  {
    title: "Investigative Reporter",
    detail: "Long-form reporting on power, accountability, and the people affected by both.",
    meta: "Editorial",
  },
  {
    title: "Audience Editor",
    detail: "Shape newsletters, social storytelling, and how stories travel across the web.",
    meta: "Growth",
  },
  {
    title: "Frontend Engineer",
    detail: "Build fast, expressive reading experiences with thoughtful motion and polish.",
    meta: "Product",
  },
];

const benefits = [
  "Flexible newsroom hours with room for deep work",
  "Collaborative editing and weekly craft reviews",
  "Remote-friendly workflow with in-person reporting support",
  "Space to pitch bold ideas and help shape the product",
];

const hiringSteps = [
  {
    step: "01",
    title: "Tell us what you care about",
    description:
      "We want to understand your instincts, the stories you chase, and the work you love doing.",
  },
  {
    step: "02",
    title: "Meet the team",
    description:
      "Conversations focus on collaboration, reporting habits, and how you like to build with others.",
  },
  {
    step: "03",
    title: "Make something together",
    description:
      "Finalists usually complete a lightweight exercise that mirrors the actual work.",
  },
];

const CareerSection = () => {
  return (
    <main className="pb-20 pt-10">
      <section className="relative overflow-hidden border-b border-slate-200/80">
        <div className="soft-grid absolute inset-0 opacity-35" />
        <div className="container mx-auto px-4 py-10 sm:py-16">
          <div className="relative grid gap-12 lg:grid-cols-[1.3fr_0.95fr]">
            <div className="max-w-3xl">
              <p className="section-kicker reveal-up">Career</p>
              <h1 className="editorial-heading reveal-up reveal-delay-1 mt-4 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Join the team shaping a calmer modern newsroom.
              </h1>
              <p className="reveal-up reveal-delay-2 mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                We are building a small, sharp team of reporters, editors, and product minds who
                care about clarity as much as speed.
              </p>
              <div className="reveal-up reveal-delay-3 mt-8 flex flex-wrap gap-3">
                <Link
                  href="/about-us"
                  className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
                >
                  See our values
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-slate-900"
                >
                  Browse today&apos;s coverage
                </Link>
              </div>
            </div>

            <div className="surface-panel hover-lift reveal-up reveal-delay-2 rounded-[32px] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">
                What it feels like here
              </p>
              <ul className="mt-6 space-y-4">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="rounded-[22px] border border-white/80 bg-white/75 px-4 py-4 text-sm leading-7 text-slate-600"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80">
        <div className="container mx-auto px-4 py-14 sm:py-16">
          <div className="max-w-2xl">
            <p className="section-kicker">Current focus</p>
            <h2 className="editorial-heading mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Teams and roles we are building next.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {hiringFocus.map((role, index) => (
              <div
                key={role.title}
                className={`surface-panel hover-lift reveal-up rounded-[28px] p-6 ${
                  index === 0 ? "reveal-delay-1" : index === 1 ? "reveal-delay-2" : "reveal-delay-3"
                }`}
              >
                <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                  {role.meta}
                </span>
                <h3 className="editorial-heading mt-5 text-2xl font-bold text-slate-900">
                  {role.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{role.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 py-14 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="reveal-up reveal-delay-1">
              <p className="section-kicker">Hiring flow</p>
              <h2 className="editorial-heading mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                A practical interview process with real signal.
              </h2>
            </div>

            <div className="space-y-4">
              {hiringSteps.map((item, index) => (
                <div
                  key={item.step}
                  className={`surface-panel hover-lift reveal-up flex gap-4 rounded-[28px] p-5 ${
                    index === 0 ? "reveal-delay-1" : index === 1 ? "reveal-delay-2" : "reveal-delay-3"
                  }`}
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
      </section>
    </main>
  );
};

export default CareerSection;
