SCRIPTS = [
  {
    name: "Coptic",
    ranges: [
      [994, 1008],
      [11392, 11508],
      [11513, 11520],
    ],
    direction: "ltr",
    year: -200,
    living: false,
    link: "http://en.wikipedia.org",
  },

  {
    name: "Coptic",
    ranges: [[50, 100]],
    direction: "ltr",
    year: -200,
    living: false,
    link: "http://en.wikipedia.org",
  },
  {
    name: "Coptic",
    ranges: [
      [500, 1000],
      [10100, 10000],
      [10000, 11000],
    ],
    direction: "ltr",
    year: -200,
    living: false,
    link: "http://en.wikipedia.org",
  },
  {
    name: "Coptic",
    ranges: [
      [1, 100000000000],
      [5, 15],
    ],
    direction: "ltr",
    year: -200,
    living: false,
    link: "http://en.wikipedia.org",
  },
];

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}
console.log(
  SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
  })
);
