/**
 * mechanical workshop => Mechanical Workshop
 * cd corridor => CD Corridor
 * bc corridor => BC Corridor
 * lpXXX_XXX => LP XXX-XXX
 * lt => LT
 * cs block => CS Block
 * tan => Tan
 * b block => B Block
 * c block => C Block
 * d block => D Block
 * e block => E Block
 * f block => F Block
 * g block => G Block
 * h block => H Block
 */
export default (str: string): string => {
  if (/^lp\d{3}_\d{3}$/i.test(str)) {
    return str.replace(/^lp(\d{3})_(\d{3})$/i, "LP $1-$2");
  }

  const mappings: { [key: string]: string } = {
    "cd corridor": "CD Corridor",
    "bc corridor": "BC Corridor",
    "cd corridor2": "CD Corridor 2",
    "bc corridor2": "BC Corridor 2",
    "lt": "LT",
    "cs block": "CS Block",
    "hostel pg": "Hostel PG",
    "sbop lawns": "SBOP Lawns",
    "cos": "COS",
    "oat": "OAT",
  };

  const normalizedStr = str.toLowerCase();
  if (mappings[normalizedStr]) {
    return mappings[normalizedStr];
  }

  // return python equivalent of str.title()
  return str
    .split(" ")
    .map((word) => {
      if (word.length === 1) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}