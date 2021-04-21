module.exports = {
  tenants: [
    {
      name: "local1",
      domains: [
        {
          dev: "local.website-1.com",
          stage: "stage.website-1.com",
          prod: "website-1.com",
        },
      ],
    },
    {
      name: "website-2",
      domains: [
        {
          dev: "local.website-2.com",
          stage: "stage.website-2.com",
          prod: /[\w|\d|-|_]+\.website-2.com/,
        },
      ],
    },
  ],
};
