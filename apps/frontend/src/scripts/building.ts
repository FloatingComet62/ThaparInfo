export function buildingCodeFromLocation(location: string | null): string | null {
  if (!location) {
    return null;
  }
  console.log("location", location);
  const loc = location.toLowerCase().trim();

  if (loc == "w/shop") {
    return "mechanical_workshop";
  } else if (loc == "ced/cad") {
    return "cd_corridor";
  } else if (loc == "med/cad") {
    return "d_block";
  } else if (loc.includes("lp")) {
    const codes = {
      "lp101_104": ["101", "102", "103", "104"],
      "lp105_107": ["105", "106", "107"],
    }
    for (const [key, items] of Object.entries(codes)) {
      for (const code of items) {
        if (loc.includes(code)) {
          return key;
        }
      }
    }
    return "lp108_111"
  } else if (loc.match(/lt[0-9]{3}/)) {
    return "lt";
  } else if (loc.startsWith("pl") || loc.startsWith("ml")) { // Programming Lab or Machine Learning Lab
    return "cs_block";
  } else if (loc.match(/t[0-9]{3}/)) {
    return "tan";
  } else if (loc.match(/b[0-9]{3}/)) {
    return "b_block";
  } else if (loc.match(/c[0-9]{3}/)) {
    return "c_block";
  } else if (loc.match(/d[0-9]{3}/)) {
    return "d_block";
  } else if (loc.match(/e[0-9]{3}/)) {
    return "e_block";
  } else if (loc.match(/f[0-9]{3}/)) {
    return "f_block";
  } else if (loc.match(/g[0-9]{3}/)) {
    return "g_block";
  } else if (loc.match(/h[0-9]{3}/)) {
    return "h_block";
  }
  return loc.split(" ").join("_");
}

const BUILDINGS = [
  "LP 101-104",
  "LP 105-107",
  "LP 108-111",
  "Hostel K",
  "Hostel L",
  "Staff Quarters",
  "Health Centre",
  "Sports Office",
  "4 Tennis Courts",
  "Badminton Court",
  "Basketball Court 1",
  "Basketball Court 3",
  "Basketball Court 2",
  "Tennis Court 2",
  "Tennis Court 3",
  "Volleyball Court",
  "Volleyball Court 2",
  "Indoor Courts",
  "Swimming Pool",
  "Kravings",
  "Tan",
  "Running Track",
  "OAT",
  "COS",
  "Shiv Mandir",
  "Gurudwara",
  "Cricket Field",
  "Hostel D",
  "Hostel O",
  "Hostel A",
  "Hostel Q",
  "Hostel C",
  "Hostel B",
  "Hostel M",
  "Hostel J",
  "Hostel H",
  "Just Food",
  "Hostel PG",
  "Fete Area",
  "Nirvana",
  "Hostel E",
  "Hostel G",
  "Hostel I",
  "Hostel N",
  "G Block Canteen",
  "Stationary Shop",
  "G Block",
  "Library",
  "LT",
  "Waterbody Cafe",
  "Waterbody",
  "CS Block",
  "Activity Space",
  "SBOP Lawns",
  "Main Audi",
  "Jaggi",
  "Post Office",
  "Aahar",
  "H Block",
  "D Block",
  "C Block",
  "B Block",
  "F Block",
  "E Block",
  "CD Corridor",
  "BC Corridor",
  "Directorate",
  "Mechanical Workshop",
  "CD Corridor 2",
  "BC Corridor 2",
  "Garden",
  "Dean Office",
  "Garden 2",
  "Venture Lab",
  "TSLAS",
  "TSLAS Canteen",
  "Main Gate",
  "Gate 3",
  "Gate 2",
  "Polytechnic Gate",
];
export function search(search_term: string): string[] {
  const loc = search_term.toLowerCase().trim();
  const output = [];
  if (["lp101", "lp102", "lp103", "lp104"].includes(loc)) {
    output.push(BUILDINGS[0]);
  } else if (["lp105", "lp106", "lp107"].includes(loc)) {
    output.push(BUILDINGS[1]);
  } else if (loc.startsWith("lp")) {
    output.push(BUILDINGS[2]);
  }

  return output.concat(
    BUILDINGS.filter((building) => {
      return building.toLowerCase().includes(loc);
    }
  ));
}