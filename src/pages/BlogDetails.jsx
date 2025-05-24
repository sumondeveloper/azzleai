import PageNavbar from "../components/shared/PageNavbar";
import BlogSidebar from "../components/shared/BlogSidebar";
import MaxWidthWrapper from "../components/shared/MaxWidthWrapper";

import BlogArticle from "../components/shared/BlogArticle";
import BlogComment from "../components/shared/BlogComment";

const BlogDetails = () => {
  return (
    <>
      <PageNavbar pages="Blog Details" page="Blog Details" />
      <section className="lg:py-20">
        <div className="pb-40 xl:pb-[220px]">
          <MaxWidthWrapper>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-[2fr_1fr]">
              <div className="flex flex-col gap-y-10 lg:gap-y-14 xl:gap-y-20">
                {/* Blog Article */}
                <BlogArticle />

                {/* Comment Section */}
                <BlogComment />
              </div>
              {/* Sidebar Placeholder */}
              <BlogSidebar />
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
    </>
  );
};
export default BlogDetails;
