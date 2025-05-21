/**
 * mechanical_workshop => Mechanical Workshop
 * cd_corridor => CD Corridor
 * bc_corridor => BC Corridor
 * lpXXX_XXX => LP XXX-XXX
 * lt => LT
 * cs_block => CS Block
 * tan => Tan
 * b_block => B Block
 * c_block => C Block
 * d_block => D Block
 * e_block => E Block
 * f_block => F Block
 * g_block => G Block
 * h_block => H Block
 */
export default (str: string): string => {
  if (/^lp\d{3}_\d{3}$/i.test(str)) {
    return str.replace(/^lp(\d{3})_(\d{3})$/i, "LP $1-$2");
  }

  const mappings: { [key: string]: string } = {
    "cd_corridor": "CD Corridor",
    "bc_corridor": "BC Corridor",
    "cd_corridor2": "CD Corridor 2",
    "bc_corridor2": "BC Corridor 2",
    "lt": "LT",
    "cs_block": "CS Block",
    "hostel_pg": "Hostel PG",
    "sbop_lawns": "SBOP Lawns",
    "cos": "COS",
    "oat": "OAT",
    "fra": "FRA",
    "frb": "FRB",
    "frc": "FRC",
    "frd": "FRD",
    "fre": "FRE",
    "frf": "FRF",
    "frg": "FRG",
  };

  const normalizedStr = str.toLowerCase();
  if (mappings[normalizedStr]) {
    return mappings[normalizedStr];
  }

  str = str.replaceAll("_", " ");

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