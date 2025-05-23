export function convertSubjectCodeToSubjectName(subject_code: string): string {
  switch (subject_code) {
    case 'UCS102': return 'Artificial Intelligence';
    case 'UMA022': return 'Calculus for Engineers';
    case 'UCB009': return 'Chemistry';
    case 'UMA023': return 'Differential Equations and Linear Algebra';
    case 'UES013': return 'Electric & Electronic Engineering';
    case 'UEN008': return 'Energy and Environment';
    case 'UES101': return 'Engineering Drawing';
    case 'UES102': return 'Manufacturing Process';
    case 'UPH013': return 'Physics';
    case 'UHU003': return 'Proffessional Communication';
    case 'UAI201': return 'Programming Essentials for AI and ML';
    case 'UES103': return 'Programming for Problem Solving';
  };
  return subject_code;
}

export function convertInstructorCodeToInstructorName(instructor_code: string): string {
  return 'Vivek Gupta';
}