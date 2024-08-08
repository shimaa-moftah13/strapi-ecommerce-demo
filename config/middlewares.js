module.exports = [
  'strapi::logger',
  'strapi::errors',
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'connect-src': ["'self'", 'https:'],
            'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'res.cloudinary.com'],
            'media-src': [
              "'self'",
              'data:',
              'blob:',
              'market-assets.strapi.io',
              'res.cloudinary.com',
            ],
            upgradeInsecureRequests: null,
          },
        },
      },
    },
    // ...
 
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
// module.exports = ({ env }) => ({
//   settings: {
//     logger: {
//       level: 'debug',
//       exposeInContext: true,
//       requests: true,
//       output: {
//         file: '/path/to/your/log/file.log',
//       },
//     },
//   },
// });

