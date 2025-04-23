export function buildingCodeFromLocation(location: string | null): string | null {
  if (!location) {
    return null;
  }
  console.log("location", location);
  const loc = location.toLowerCase().trim();

  if (loc == "w/shop") {
    return "mechanical workshop";
  } else if (loc == "ced/cad") {
    return "cd corridor";
  } else if (["lp101", "lp102", "lp103", "lp104"].includes(loc)) {
    return "lp101_104";
  } else if (["lp105", "lp106", "lp107"].includes(loc)) {
    return "lp105_107";
  } else if (loc.startsWith("lp")) {
    return "lp108_111";
  } else if (loc.startsWith("lt")) {
    return "lt";
  } else if (loc.startsWith("pl") || loc.startsWith("ml")) { // Programming Lab or Machine Learning Lab
    return "cs block";
  } else if (loc.startsWith("t")) {
    return "tan";
  } else if (loc.startsWith("b")) {
    return "b block";
  } else if (loc.startsWith("c")) {
    return "c block";
  } else if (loc.startsWith("d")) {
    return "d block";
  } else if (loc.startsWith("e")) {
    return "e block";
  } else if (loc.startsWith("f")) {
    return "f block";
  } else if (loc.startsWith("g")) {
    return "g block";
  } else if (loc.startsWith("h")) {
    return "h block";
  }
  return null;
}