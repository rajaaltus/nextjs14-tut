/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_URL:
      process.env.NODE_ENV === "production"
        ? "https://nextjs14-tut.vercel.app/"
        : "http://localhost:3000",
  },
};

module.exports = nextConfig;
