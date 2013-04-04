var woodmanConfig = {
  appenders: [
    {
      type: 'console',
      name: 'console',
      layout: {
        type: 'pattern',
        pattern: '%7.7r %5.5p [%15.15c] %m%n'
      }
    }
  ],
  loggers: [
    {
      level: 'all',
      appenders: [
        'console'
      ]
    },
    {
      name: 'joshfire.framework',
      level: 'all'
    }
  ]
};
