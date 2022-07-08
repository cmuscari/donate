const db = require("../config/connection");
const { User, Post } = require("../models");

db.once("open", async () => {
  // seed users
  await User.create({
    username: "Emily",
    email: "emily@gmail.com",
    password: "password123",
  });

  await User.create({
    username: "Brandon",
    email: "brandon@gmail.com",
    password: "password456",
  });

  console.log("users seeded");

  // seed posts
  const posts = await Post.insertMany([
    {
      category: "animals",
      orgName: "Global Animal Partnership",
      website: "https://globalanimalpartnership.org",
      location: "Austin, Texas",
      description:
        "Their mission is to drive meaningful, continuous improvement of farm animal welfare through multi-level standards development, application, and verification across the supply chain.",
      username: "Emily",
    },
    {
      category: "health",
      orgName: "National Multiple Sclerosis Society",
      website: "http://www.nationalmssociety.org",
      location: "New York, New York",
      description:
        "The National Multiple Sclerosis Society (NMSS) is a voluntary, non-profit, health organization dedicated to ending the devastating effects of MS by advancing the cure, prevention and treatment of multiple sclerosis and by improving the lives of affected individuals.",
      username: "Brandon",
    },
    {
      category: "children",
      orgName: "I Have a Dream Foundation",
      website: "https://www.ihadla.org/",
      location: "Los Angeles, California",
      description:
        "I Have a Dream FDN provides long-term support to youth living in under-resourced communities to help them reach their full potential. We promote, from an early age, values of higher ed. and career success through guaranteed financial resources, empowerment programs and more.",
      username: "Emily",
    },
  ]);

  console.log("posts seeded");

  process.exit();
});
