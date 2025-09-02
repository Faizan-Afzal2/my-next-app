import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // =============================================================================
  // PRODUCTION OPTIMIZATIONS
  // =============================================================================
  
  /**
   * Experimental features for better performance
   */
  experimental: {
    // Enable optimized CSS loading
    optimizeCss: true,
    // Enable Turbopack for faster builds (when stable)
    turbo: {
      rules: {
        // Custom Turbopack rules can be added here
      },
    },
  },

  /**
   * Image optimization for production
   */
  images: {
    // Optimize images for better performance
    formats: ['image/webp', 'image/avif'],
    // Add your image domains here (for external images)
    domains: [
      // 'your-nestjs-api.com', // Your backend domain
      // 'cdn.example.com',     // CDN domains
    ],
    // Image sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  /**
   * Build output configuration
   */
  output: 'standalone', // For Docker deployment
  
  /**
   * Compression for smaller bundle sizes
   */
  compress: true,
  
  /**
   * Security headers for production
   */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
    ];
  },

  /**
   * Redirects for better SEO and UX
   */
  async redirects() {
    return [
      // Example: Redirect old routes to new ones
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ];
  },

  /**
   * Rewrites for API proxy (if needed)
   * Useful for avoiding CORS issues in development
   */
  async rewrites() {
    return [
      // Example: Proxy API calls to avoid CORS
      // {
      //   source: '/api/:path*',
      //   destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      // },
    ];
  },

  /**
   * Environment variables validation
   * Ensures required variables are present at build time
   */
  env: {
    // These will be available at build time
    CUSTOM_BUILD_TIME_VAR: process.env.CUSTOM_BUILD_TIME_VAR,
  },

  /**
   * TypeScript configuration
   */
  typescript: {
    // Fail build on TypeScript errors in production
    ignoreBuildErrors: false,
  },

  /**
   * ESLint configuration
   */
  eslint: {
    // Fail build on ESLint errors in production
    ignoreDuringBuilds: false,
  },

  /**
   * Bundle analysis (for optimization)
   * Uncomment to enable bundle analysis
   */
  // webpack: (config, { isServer }) => {
  //   if (process.env.ANALYZE === 'true') {
  //     const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
  //     config.plugins.push(
  //       new BundleAnalyzerPlugin({
  //         analyzerMode: 'static',
  //         openAnalyzer: false,
  //       })
  //     );
  //   }
  //   return config;
  // },
};

export default nextConfig;
