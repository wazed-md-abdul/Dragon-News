import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const NewsCard = ({ news }) => {
  return (
    <div className="card surface-panel hover-lift group rounded-[30px] border border-white/70">
      <div className="card-body p-4 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3 rounded-[24px] border border-white/70 bg-[linear-gradient(135deg,rgba(226,232,240,0.78),rgba(255,255,255,0.96))] p-4">
          <div className="flex min-w-0 gap-2 items-center">
            {news.author?.img ? (
              <Image
                src={news.author.img}
                alt={news.author?.name || "Author image"}
                height={40}
                width={40}
                unoptimized
                className="rounded-full ring-4 ring-white"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-slate-300" />
            )}
            <div className="min-w-0">
              <h2 className="truncate font-semibold text-slate-800">{news.author?.name}</h2>
              <p className="text-xs text-slate-500">{news.author?.published_date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/80 bg-white/80 transition duration-300 group-hover:text-blue-600">
              <CiShare2 className="text-xl" />
            </span>
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/80 bg-white/80 transition duration-300 group-hover:text-blue-600">
              <CiBookmark className="text-xl" />
            </span>
          </div>
        </div>

        <h2 className="card-title editorial-heading text-xl font-bold text-slate-900 sm:text-2xl">
          {news.title}
        </h2>

        <figure className="overflow-hidden rounded-[24px]">
          {news.image_url ? (
            <Image
              src={news.image_url}
              alt={news.title || "News image"}
              width={300}
              height={300}
              unoptimized
              className="h-auto w-full rounded-[24px] object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-[220px] w-full items-center justify-center rounded-[24px] bg-slate-200 text-sm text-slate-500 sm:h-[300px]">
              No image available
            </div>
          )}
        </figure>

        <p className="line-clamp-3 text-sm leading-7 text-slate-600 sm:text-base">
          {news.details}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3 text-slate-700">
            <h2 className="flex items-center gap-2 rounded-full bg-slate-900/[0.04] px-3 py-2 text-sm font-semibold">
              <IoIosStar className="text-lg text-yellow-500" />
              {news.rating.number}
            </h2>
            <h2 className="flex items-center gap-2 rounded-full bg-slate-900/[0.04] px-3 py-2 text-sm font-semibold">
              <FaEye className="text-lg" />
              {news.total_view}
            </h2>
          </div>

          <Link
            href={`/news/${news._id}`}
            className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 sm:w-auto"
          >
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
