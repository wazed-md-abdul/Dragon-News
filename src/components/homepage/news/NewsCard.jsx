import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body p-4 sm:p-6">
        {/* Author info */}
        <div className="flex flex-wrap items-start justify-between gap-3 bg-slate-200 p-4">
          <div className="flex min-w-0 gap-2 items-center">
            {news.author?.img ? (
              <Image
                src={news.author.img}
                alt={news.author?.name || "Author image"}
                height={40}
                width={40}
                unoptimized
                className="rounded-full"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-slate-300" />
            )}
            <div className="min-w-0">
              <h2 className="truncate font-semibold">{news.author?.name}</h2>
              <p className="text-xs">{news.author?.published_date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CiShare2 className="text-xl" />
            <CiBookmark className="text-xl" />
          </div>
        </div>

        <h2 className="card-title text-lg sm:text-xl">{news.title}</h2>

        <figure>
          {news.image_url ? (
            <Image
              src={news.image_url}
              alt={news.title || "News image"}
              width={300}
              height={300}
              unoptimized
              className="h-auto w-full rounded-md object-cover"
            />
          ) : (
            <div className="flex h-[220px] w-full items-center justify-center rounded-md bg-slate-200 text-sm text-slate-500 sm:h-[300px]">
              No image available
            </div>
          )}
        </figure>

        <p className="line-clamp-3">{news.details}</p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="flex items-center gap-2">
              <IoIosStar className="text-lg text-yellow-500" />

              {news.rating.number}
            </h2>
            <h2 className="flex items-center gap-2">
              <FaEye className="text-lg" />
              {news.total_view}
            </h2>
          </div>

          <Link href={`/news/${news._id}`} className="w-full sm:w-auto">
            <button className="btn w-full sm:w-auto">See details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
