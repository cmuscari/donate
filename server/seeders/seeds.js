const db = require("../config/connection");
const { User, Post } = require("../models");

db.once("open", async () => {
  // seed users
  await User.create({
    username: "Malory",
    email: "malory@gmail.com",
    password: "password111",
  });

  await User.create({
    username: "Archer",
    email: "archer@gmail.com",
    password: "password222",
  });

  await User.create({
    username: "Pam",
    email: "pam@gmail.com",
    password: "password333",
  });

  await User.create({
    username: "Barry",
    email: "barry@gmail.com",
    password: "password444",
  });

  await User.create({
    username: "Lana",
    email: "lana@gmail.com",
    password: "password555",
  });

  await User.create({
    username: "Krieger",
    email: "krieger@gmail.com",
    password: "password666",
  });

  await User.create({
    username: "Cheryl",
    email: "cheryl@gmail.com",
    password: "password777",
  });

  await User.create({
    username: "Len",
    email: "len@gmail.com",
    password: "password888",
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
      username: "Malory",
    },
    {
      category: "human-civil",
      orgName: "Urban League of Greater Pittsburgh",
      website: "https://ulpgh.org/",
      location: "Pittsburgh, Pennsylvania",
      description:
        "The Mission of the Urban League of Greater Pittsburgh is to enable African Americans to secure economic self-reliance, parity and power, and civil rights.",
      username: "Krieger",
    },
    {
      category: "children",
      orgName: "I Have a Dream Foundation",
      website: "https://www.ihadla.org/",
      location: "Los Angeles, California",
      description:
        "I Have a Dream FDN provides long-term support to youth living in under-resourced communities to help them reach their full potential. We promote, from an early age, values of higher ed. and career success through guaranteed financial resources, empowerment programs and more.",
      username: "Pam",
    },
    {
      category: "health",
      orgName: "Recipe for Success Foundation",
      website: "https://www.recipe4success.org/",
      location: "Houston, Texas",
      description:
        "The mission of the Recipe for Success Foundation is to combat childhood obesity and encourage long-term health by altering the way children understand, appreciate and eat their food.",
      username: "Barry",
    },
    {
      category: "education",
      orgName: "826CHI",
      website: "https://www.826chi.org/",
      location: "Chicago, Illinois",
      description:
        "826CHI is a non-profit creative writing, tutoring, and publishing center dedicated to amplifying the voices of Chicago youth.",
      username: "Lana",
    },
    {
      category: "health",
      orgName: "National Multiple Sclerosis Society",
      website: "http://www.nationalmssociety.org",
      location: "New York, New York",
      description:
        "The National Multiple Sclerosis Society (NMSS) is a voluntary, non-profit, health organization dedicated to ending the devastating effects of MS by advancing the cure, prevention and treatment of multiple sclerosis and by improving the lives of affected individuals.",
      username: "Archer",
    },
    {
      category: "art-culture",
      orgName: "The Arts Community Alliance",
      website: "https://taca-arts.org/",
      location: "Dallas, Texas",
      description:
        "TACA believes in the transformative power of the arts. We exist to nurture arts organizations and provide visionary and responsive leadership to the arts community.",
      username: "Len",
    },
    {
      category: "international",
      orgName: "International Rescue Committee",
      website: "https://www.rescue.org/",
      location: "New York, New York",
      description:
        "The International Rescue Committee (IRC) helps people affected by humanitarian crises—including the climate crisis—to survive, recover and rebuild their lives.",
      username: "Lana",
    },
    {
      category: "environmental",
      orgName: "The Ocean Cleanup",
      website: "https://theoceancleanup.com/",
      location: "New York, New York",
      description:
        "The Ocean Cleanup's team consists of 120 engineers, researchers, scientists, computational modelers, and supporting roles, working daily to rid the world's oceans of plastic.",
      username: "Barry",
    },
    {
      category: "animals",
      orgName: "The Animal Foundation",
      website: "https://animalfoundation.com/",
      location: "Las Vegas, Nevada",
      description:
        "The Animal Foundation of Las Vegas, founded in 1978 as a low-cost spay and neuter clinic, is one of the highest volume single-site animal shelters in America.",
      username: "Pam",
    },
    {
      category: "public-military",
      orgName: "Twenty Two Until None",
      website: "https://www.22untilnone.org/",
      location: "Phoenix, Arizona",
      description:
        "Ending veteran suicide one step at a time. With this epidemic running through our ranks of veterans, we need to take a stand as a team. We host many events and attend many others to help our veterans in every way possible.",
      username: "Malory",
    },
    {
      category: "health",
      orgName: "Clean the World",
      website: "https://cleantheworld.org/",
      location: "Orlando, Florida",
      description:
        "Through the distribution of donated hygiene products to impoverished people, we prevent the millions of deaths caused by hygiene-related illnesses every day.",
      username: "Archer",
    },
  ]);

  console.log("posts seeded");

  process.exit();
});
