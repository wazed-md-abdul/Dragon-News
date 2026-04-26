import Link from "next/link";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div className="reveal-up reveal-delay-1">
      <p className="section-kicker">Browse</p>
      <h2 className="editorial-heading mt-3 text-2xl font-bold text-slate-900">
        All categories
      </h2>
      <ul className="flex flex-col gap-3 mt-6">
        {categories.news_category.map((category) => {
          const isActive = activeId === category.category_id;

          return (
            <li
              key={category.category_id}
              className={`surface-panel hover-lift rounded-2xl font-bold text-center text-md ${
                isActive
                  ? "border-slate-900 bg-slate-900 text-white shadow-[0_22px_44px_rgba(15,23,42,0.2)]"
                  : ""
              }`}
            >
              <Link
                href={`/category/${category.category_id}`}
                className={`block rounded-2xl px-4 py-3 text-sm transition sm:text-base ${
                  isActive ? "text-white" : "text-slate-700"
                }`}
              >
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
