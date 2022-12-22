const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "bminh9900",
        mongodb_password: "QKF9f2J6cWwIzUcH",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "bminh9900",
      mongodb_password: "QKF9f2J6cWwIzUcH",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
