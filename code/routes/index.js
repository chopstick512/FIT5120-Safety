var express = require("express");
var router = express.Router();

let routes_path = [
  {
    id: 1,
    title: "Coburg to St Kilda Corridor",
    direction: "Both Directions",
    type: "Corridor",
    distance: "15KM",
    safety_rank: 1,
    crash_points: 34,
    safety_recommendations:
      "Considering there are 34 crash points, we recommend you be careful when cycling here.",
    image_url: "/images/Coburg_to_St_Kilda_Corridor.jpg",
  },
  {
    id: 2,
    title: "City Trail",
    direction: "Both Directions",
    type: "Off-Road Bike Route",
    distance: "15KM",
    safety_rank: 2,
    crash_points: 43,
    safety_recommendations:
      "Considering there are 43 crash points, we recommend you be careful when cycling here.",
    image_url: "/images/Capital_City_Trail.jpg",
  },
  {
    id: 3,
    title: "Sunine to Boxhill",
    direction: "Both Directions",
    type: "Corridor",
    distance: "16KM",
    safety_rank: 3,
    crash_points: 50,
    safety_recommendations:
      "Considering there are 50 crash points, we recommend you be careful when cycling here.",
    image_url: "/images/Sunine_to_Boxhill.jpg",
  },
  {
    id: 4,
    title: "Batman to Elsternwick",
    direction: "Underection",
    type: "Corridor",
    distance: "21KM",
    safety_rank: 4,
    crash_points: 91,
    safety_recommendations:
      "Considering there are 91 crash points, we recommend you be careful when cycling here.",
    image_url: "/images/Batman_to_Elsternwick.jpg",
  },
];

/* GET home page. */
router.get("/", async (req, res) => {
  res.render("home");
});

router.get("/discover.html", (req, res) => {
  res.render("discover");
});

router.get("/search.html", (req, res) => {
  res.render("search", {
    routesPath: routes_path,
  });
});

router.get("/search/detail.html/:id", (req, res) => {
  let routePath = routes_path[req.params.id - 1];
  res.render("search_detail", {
    routePath: routePath,
  });
});

router.get("/route/filter.html", (req, res) => {
  let direction = req.query.direction;
  let type = req.query.type;
  let routePaths = [];
  console.log(direction, type);
  if (direction && type) {
    for (const path of routes_path) {
      if (path.direction === direction && path.type === type) {
        routePaths.push(path);
      }
    }
  } else if (direction && !type) {
    for (const path of routes_path) {
      if (path.direction === direction) {
        routePaths.push(path);
      }
    }
  } else if (!direction && type) {
    for (const path of routes_path) {
      if (path.type === type) {
        routePaths.push(path);
      }
    }
  }
  res.render("search", {
    routesPath: routePaths,
    direction: direction,
    type: type,
  });
});

router.get("/about_us.html", (req, res) => {
  res.render("about_us");
});

module.exports = router;
