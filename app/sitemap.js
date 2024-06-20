export default async function sitemap() {
  return [
    {
      url: "https://musilidev.xyz/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://musilidev.xyz/blogs",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://musilidev.xyz/portfolio",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://musilidev.xyz/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
