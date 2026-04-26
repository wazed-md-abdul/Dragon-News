import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const LeftSidebarSkeleton = () => {
  return (
    <div>
      <Skeleton width={140} height={28} />
      <div className="mt-6 flex flex-col gap-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} height={40} borderRadius={8} />
        ))}
      </div>
    </div>
  );
};

export const RightSidebarSkeleton = () => {
  return (
    <div className="space-y-5">
      <div>
        <Skeleton width={110} height={16} />
        <Skeleton width={150} height={28} className="mt-3" />
        <Skeleton width="90%" height={16} className="mt-3 mb-5" />
        <div className="flex flex-col gap-3">
          <Skeleton height={68} borderRadius={24} />
          <Skeleton height={68} borderRadius={24} />
        </div>
      </div>
      <Skeleton height={170} borderRadius={28} />
      <Skeleton height={170} borderRadius={28} />
    </div>
  );
};

export const NewsCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body p-4 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3 bg-slate-200 p-4">
          <div className="flex min-w-0 items-center gap-2">
            <Skeleton circle width={40} height={40} />
            <div className="min-w-0 space-y-2">
              <Skeleton width={110} height={16} />
              <Skeleton width={90} height={12} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Skeleton width={24} height={24} />
            <Skeleton width={24} height={24} />
          </div>
        </div>

        <Skeleton height={28} width="85%" />
        <Skeleton height={220} className="sm:h-[300px]" />
        <Skeleton count={3} />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <Skeleton width={70} height={20} />
            <Skeleton width={70} height={20} />
          </div>
          <Skeleton width={110} height={40} borderRadius={8} className="sm:ml-auto" />
        </div>
      </div>
    </div>
  );
};

export const NewsDetailsSkeleton = () => {
  return (
    <div className="mx-auto my-6 max-w-4xl px-4 sm:my-8">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body p-4 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3 bg-slate-200 p-4">
            <div className="flex min-w-0 items-center gap-2">
              <Skeleton circle width={40} height={40} />
              <div className="min-w-0 space-y-2">
                <Skeleton width={120} height={16} />
                <Skeleton width={90} height={12} />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Skeleton width={24} height={24} />
              <Skeleton width={24} height={24} />
            </div>
          </div>

          <Skeleton height={32} width="80%" />
          <Skeleton height={240} className="sm:h-[360px]" />
          <Skeleton count={6} />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <Skeleton width={70} height={20} />
              <Skeleton width={70} height={20} />
            </div>
            <Skeleton width={220} height={44} borderRadius={8} className="sm:w-[260px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
