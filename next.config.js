module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.datocms-assets.com',
      'github.com',
      'ucarecdn.com',
      'avatars.dicebear.com',
      'img.shields.io',
      'researcherprofiles.org',
    ],
  },
  async redirects() {
    return [
      {
        source: '/sodaforcovid',
        destination: '/fairshare',
        permanent: true,
      },
    ];
  },
};
