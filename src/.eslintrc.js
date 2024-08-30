module.exports = {
    // Other ESLint configurations...
  
    // Add this section
    rules: {
      'no-warning-comments': process.env.CI ? 'warn' : 'off', // Example rule
      // Add more rules as needed
    },
    // Optionally include these settings to enforce stricter linting only in CI
    overrides: [
      {
        files: ['**/*.js', '**/*.jsx'],
        rules: {
        "no-unused-vars": "warn",
        "react/prop-types": "warn"
        },
      },
    ],
  };
  