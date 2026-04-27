import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;

  const news = await getNewsDetailsById(id);


  return {
    title: news.title,
    description: news.details,
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  
  const news = await getNewsDetailsById(id);
 
  return (
    <div className="mx-auto my-6 max-w-4xl px-4 sm:my-8">
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
                  className="rounded-full"
                  unoptimized
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

          <h2 className="card-title text-lg sm:text-2xl">{news.title}</h2>

          <figure>
            {news.image_url ? (
              <Image
                src={news.image_url}
                alt={news.title}
                width={300}
                height={300}
                className="w-full rounded-md object-cover"
                unoptimized
              />
            ) : (
              <div className="flex h-[240px] w-full items-center justify-center rounded-md bg-slate-200 text-sm text-slate-500 sm:h-[360px]">
                No image available
              </div>
            )}
          </figure>

          <p className="text-sm leading-7 sm:text-base">{news.details}</p>

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

            <Link href={`/category/${news.category_id}`} className="w-full sm:w-auto">
              <button className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 sm:w-auto">
                See other news for this category <BsArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
