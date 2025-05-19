"use client";
import BlogCard from "@/components/cards/BlogCard";
import { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon, SearchIcon } from "lucide-react";

const dropdownOptions = [
  { id: "all", label: "All Insights", value: "all" },
  { id: "blogs", label: "Blogs", value: "blogs" },
  { id: "articles", label: "Articles", value: "articles" },
  { id: "whitepaper", label: "Whitepaper", value: "whitepaper" },
];

const serviceOptions = [
  { id: "all", label: "All Service", value: "all" },
  { id: "ecommerce", label: "eCommerce", value: "eCommerce" },
  { id: "aiml", label: "AI/ML", value: "AI/ML" },
];

const blogData = [
  {
    id: 1,
    image: { url: "/images/blogImage1.png", alt: "blog image" },
    author: "Damon Salvatore",
    readTime: "9 min read",
    title: "Driving conversions with the fastest search engine in the world.",
    tags: ["AI/ML", "eCommerce"],
    excerpt:
      "The fastest search engine in the world empowers users to find what they need instantly, reducing bounce ...",
    type: "blogs",
  },
  {
    id: 2,
    image: { url: "/images/blogImage1.png", alt: "blog image" },
    author: "Damon Salvatore",
    readTime: "9 min read",
    title: "How AI is transforming eCommerce logistics and delivery.",
    tags: ["AI/ML", "eCommerce"],
    excerpt:
      "AI-driven logistics are making eCommerce faster, smarter, and more reliable for everyone involved.",
    type: "whitepaper",
  },
  {
    id: 3,
    image: { url: "/images/blogImage1.png", alt: "blog image" },
    author: "Damon Salvatore",
    readTime: "7 min read",
    title: "Personalization at scale: The future of online shopping.",
    tags: ["AI/ML", "eCommerce"],
    excerpt:
      "Personalization engines are helping brands connect with customers in new ways.",
    type: "articles",
  },
  {
    id: 4,
    image: { url: "/images/blogImage1.png", alt: "blog image" },
    author: "Damon Salvatore",
    readTime: "8 min read",
    title: "The rise of voice search in digital commerce.",
    tags: ["AI/ML", "eCommerce"],
    excerpt:
      "Voice search is changing how users interact with online stores and services.",
    type: "articles",
  },
  {
    id: 5,
    image: { url: "/images/blogImage1.png", alt: "blog image" },
    author: "Damon Salvatore",
    readTime: "6 min read",
    title: "Optimizing checkout flows for higher conversions.",
    tags: ["AI/ML", "eCommerce"],
    excerpt:
      "A seamless checkout experience can dramatically increase your sales.",
    type: "blogs",
  },
  {
    id: 6,
    image: { url: "/images/blogImage1.png", alt: "blog image" },
    author: "Damon Salvatore",
    readTime: "10 min read",
    title: "Whitepaper: The future of AI in retail.",
    tags: ["AI/ML", "eCommerce"],
    excerpt:
      "A deep dive into how AI will shape the next decade of retail innovation.",
    type: "whitepaper",
  },
  {
    id: 7,
    image: { url: "/images/blogImage1.png", alt: "blog image" },
    author: "Damon Salvatore",
    readTime: "9 min read",
    title: "How to use data to drive business growth.",
    tags: ["AI/ML", "eCommerce"],
    excerpt:
      "Data-driven decision making is the new normal for successful businesses.",
    type: "articles",
  },
  {
    id: 8,
    image: { url: "/images/blogImage1.png", alt: "blog image" },
    author: "Damon Salvatore",
    readTime: "8 min read",
    title: "The impact of fast search on user experience.",
    tags: ["AI/ML", "eCommerce"],
    excerpt: "Speed is a key factor in keeping users engaged and satisfied.",
    type: "articles",
  },
  {
    id: 9,
    image: { url: "/images/blogImage1.png", alt: "blog image" },
    author: "Damon Salvatore",
    readTime: "7 min read",
    title: "Case Study: AI/ML in modern eCommerce.",
    tags: ["AI/ML", "eCommerce"],
    excerpt:
      "A real-world look at how AI/ML is being used to solve business challenges.",
    type: "blogs",
  },
  {
    id: 10,
    image: { url: "/images/blogImage1.png", alt: "blog image" },
    author: "Damon Salvatore",
    readTime: "11 min read",
    title: "Whitepaper: Security in the age of AI.",
    tags: ["AI/ML", "eCommerce"],
    excerpt: "Security strategies for businesses leveraging AI technologies.",
    type: "whitepaper",
  },
  {
    id: 11,
    image: { url: "/images/blogImage1.png", alt: "blog image" },
    author: "Damon Salvatore",
    readTime: "8 min read",
    title: "The evolution of product recommendations.",
    tags: ["AI/ML", "eCommerce"],
    excerpt: "How recommendation engines have changed the way we shop online.",
    type: "articles",
  },
  {
    id: 12,
    image: { url: "/images/blogImage1.png", alt: "blog image" },
    author: "Damon Salvatore",
    readTime: "9 min read",
    title: "How to build a scalable eCommerce platform.",
    tags: ["AI/ML", "eCommerce"],
    excerpt:
      "Tips and tricks for building a platform that grows with your business.",
    type: "blogs",
  },
];

const PAGE_SIZE = 9;

export default function ContentsSection() {
  const [insightFilter, setInsightFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // Filtering logic
  const filtered = blogData.filter((item) => {
    const matchesInsight =
      insightFilter === "all" || item.type === insightFilter;
    const matchesService =
      serviceFilter === "all" || item.tags.includes(serviceFilter);
    const matchesSearch =
      search.trim() === "" ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesInsight && matchesService && matchesSearch;
  });

  // Responsive page size
  let pageSize = PAGE_SIZE;
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    if (width < 640) pageSize = 3; // mobile
    else if (width < 1024) pageSize = 6; // tablet
  }

  const paginated = filtered.slice(0, page * pageSize);
  const hasMore = paginated.length < filtered.length;

  return (
    <section className="w-full max-w-[1320px] mx-auto px-2 md:px-0">
      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-3 md:gap-4 mt-8 mb-8">
        <div className="flex gap-3 md:gap-4 w-full md:w-auto justify-center ">
          <select
            className="bg-[#18122B] border border-[#332C44] rounded-full px-5 py-2 text-[#F5F5F5] text-sm focus:outline-none min-w-[140px]"
            value={insightFilter}
            onChange={(e) => setInsightFilter(e.target.value)}
          >
            {dropdownOptions.map((opt) => (
              <option key={opt.id} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <select
            className="bg-[#18122B] border border-[#332C44] rounded-full px-5 py-2 text-[#F5F5F5] text-sm focus:outline-none min-w-[140px]"
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
          >
            {serviceOptions.map((opt) => (
              <option key={opt.id} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className=" flex items-center justify-center md:justify-center relative ">
          <SearchIcon className="absolute left-3 w-5 h-5 text-[#F5F5F5] opacity-50" />
          <input
            type="search"
            className="w-full md:w-[350px] bg-[#18122B] border border-[#332C44] rounded-full pl-10 pr-5 py-2 text-[#F5F5F5] text-sm focus:outline-none"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Content Grid */}
      <div className=" flex items-center justify-center">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center min-h-[400px]">
          {paginated.length === 0 ? (
            <div className="col-span-full text-center text-[#B2A8BE] py-20">
              No posts found.
            </div>
          ) : (
            paginated.map((item) => (
              <div
                key={item.id}
                className="w-full max-w-[390px] h-[390px] flex"
              >
                <BlogCard
                  image={item.image.url}
                  author={item.author}
                  readTime={item.readTime}
                  title={item.title}
                  tags={item.tags}
                  excerpt={item.excerpt}
                  className="w-full max-w-[390px]"
                />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Show More Button */}
      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            className="md:w-full max-w-[600px] h-10 inline-flex items-center justify-center gap-2 pl-5 pr-2.5 bg-[#19082E] border border-[#F5F5F5] rounded-md text-[#F5F5F5] text-[16px] leading-[24px] font-normal cursor-pointer"
            onClick={() => setPage((p) => p + 1)}
          >
            Show More Post
            <ArrowRightIcon
              className="w-5 h-5 text-[#F5F5F5]"
              strokeWidth={1}
            />
          </button>
        </div>
      )}
    </section>
  );
}
