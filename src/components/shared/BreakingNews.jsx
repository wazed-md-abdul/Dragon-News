import Marquee from "react-fast-marquee";

const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    _id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breaking News: Sports Team Wins Championship",
  },
];

const BreakingNews = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="surface-panel reveal-up reveal-delay-1 flex items-center gap-4 rounded-[26px] px-3 py-3">
        <span className="hidden rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-red-500 sm:inline-flex">
          Live
        </span>
        <button className="btn border-0 bg-[linear-gradient(135deg,#ef4444,#f97316)] text-white shadow-[0_16px_34px_rgba(239,68,68,0.22)]">
          Latest News
        </button>
        <div className="min-w-0 flex-1">
          <Marquee pauseOnHover speed={80}>
            {news.map((n) => (
              <span key={n._id} className="marquee-item text-sm font-medium text-slate-600 sm:text-[15px]">
                {n.title}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
