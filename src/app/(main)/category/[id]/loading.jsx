import React from "react";
import {
  LeftSidebarSkeleton,
  NewsCardSkeleton,
  RightSidebarSkeleton,
} from "@/components/homepage/news/NewsSkeletons";

const CategoryLoadingPage = () => {
  return (
    <div className="container mx-auto my-[40px] grid grid-cols-1 gap-6 px-4 md:my-[60px] md:grid-cols-12">
      <div className="md:col-span-3">
        <LeftSidebarSkeleton />
      </div>

      <div className="md:col-span-6">
        <div className="space-y-4">
          <NewsCardSkeleton />
          <NewsCardSkeleton />
          <NewsCardSkeleton />
        </div>
      </div>

      <div className="md:col-span-3">
        <RightSidebarSkeleton />
      </div>
    </div>
  );
};

export default CategoryLoadingPage;
