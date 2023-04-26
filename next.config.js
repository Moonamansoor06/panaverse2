/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
   env: {
    CONTENTFUL_SPACE_ID: "f6k7elf4s95o",
    CONTENTFUL_ACCESS_KEY: "pckHD1skjM_YxMaVgySGkYJqseaEb0dUMfb_3fG-rc0"
  },

}

module.exports = nextConfig
