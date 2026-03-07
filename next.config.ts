import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Blogs WordPress (menjadors)
      { protocol: "https", hostname: "menjadorespai3.wordpress.com", pathname: "/**" },
      { protocol: "https", hostname: "menjadormartamataviladecans.wordpress.com", pathname: "/**" },
      { protocol: "https", hostname: "menjadorvicenteferrer.wordpress.com", pathname: "/**" },
      { protocol: "https", hostname: "menjadormarianaosantboi.wordpress.com", pathname: "/**" },
      { protocol: "https", hostname: "menjadorabreraernestlluch.wordpress.com", pathname: "/**" },
      { protocol: "https", hostname: "menjadorelspins.wordpress.com", pathname: "/**" },
      { protocol: "https", hostname: "menjadordolorsalmeda.wordpress.com", pathname: "/**" },
      { protocol: "https", hostname: "menjadorsantantoni.wordpress.com", pathname: "/**" },
      { protocol: "https", hostname: "menjadorietorrelles.wordpress.com", pathname: "/**" },
      { protocol: "https", hostname: "menjadorfredericmistral.wordpress.com", pathname: "/**" },
      // CDN WordPress (*.wp.com – Next.js no admet wildcard; afegim subdominis habituals)
      { protocol: "https", hostname: "i0.wp.com", pathname: "/**" },
      { protocol: "https", hostname: "i1.wp.com", pathname: "/**" },
      { protocol: "https", hostname: "i2.wp.com", pathname: "/**" },
      { protocol: "https", hostname: "s0.wp.com", pathname: "/**" },
      { protocol: "https", hostname: "s1.wp.com", pathname: "/**" },
      { protocol: "https", hostname: "s2.wp.com", pathname: "/**" },
      { protocol: "https", hostname: "wp.com", pathname: "/**" },
      // Miniatures YouTube (posts amb vídeo embegut)
      { protocol: "https", hostname: "img.youtube.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
