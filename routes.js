module.exports = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      console.log("====================================");
      console.log(request.query.id);
      console.log("====================================");
      return {
        name: "alifsadsddasas",
      };
    },
  },
];
