module.exports = {
  tenants: [
    {
      name: "local1",
      domains: [
        {
          dev: "local.website-1.com",
          stage: "local1.bluxcommerce.com",
          prod: "local1.bluxcommerce.com",
        },
      ],
    },
    {
      name: "website-2",
      domains: [
        {
          dev: "local.website-2.com",
          stage: "website-2.bluxcommerce.com",
          prod: "website-2.bluxcommerce.com",
        },
      ],
    },
  ],
};
