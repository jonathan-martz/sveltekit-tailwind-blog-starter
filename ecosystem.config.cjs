module.exports = {
    apps: [
      {
        name: "sveltekit-app",             // Name of your app
        script: "./build/index.js",          // Path to the built SvelteKit app entry file
        instances: "max",                  // Scales the app across all available CPUs
        exec_mode: "cluster",              // Enables load balancing across instances
        env: {
          NODE_ENV: "development",         // Development environment settings
        },
        env_production: {
          NODE_ENV: "production",          // Production environment settings
        }
      }
    ]
  };