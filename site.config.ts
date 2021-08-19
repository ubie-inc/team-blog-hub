export const config = {
  siteMeta: {
    title: "Ubie Engineers' blogs",
    teamName: 'Ubie, inc.',
    description: 'Ubie Discoveryに所属するエンジニアのブログ記事をまとめています。',
  },
  siteRoot: process.env.NODE_ENV === 'production' ? 'https://team-blog-hub.vercel.app' : 'http://localhost:3000',
  headerLinks: [
    {
      title: 'Company',
      href: 'https://ubie.life/',
    },
    {
      title: 'Recruit',
      href: 'https://recruit.ubie.life/jd_dev',
    },
  ],
};
