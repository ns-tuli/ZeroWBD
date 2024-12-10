/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    env:{
      DATABASE_URL:'postgresql://zerowbd_owner:xrPbkBjoi7D6@ep-weathered-glitter-a15z1a2w.ap-southeast-1.aws.neon.tech/zerowbd?sslmode=require',
      WEB3_AUTH_CLIENT_ID : 'BAwmI6f037AfJf7Vhli2fPFZkLq9ZxxlUgD1LpV7zDAODOnWjo7MrbS84OmZao2en2v36JjlrHPSuT4r3Z7lh6g',
      GEMINI_API_KEY:'AIzaSyB2iBDJHZNytthVh4arWyLY9vhvnawAGhY',
      GOOOGLE_MAPS_API_KEY:'AIzaSyAqAo0-uDFPLPIxwKYEEO3jdBZUVu2J9V4'
    },
  };
  
  export default nextConfig;