/**
 * Personal data that does not change between languages.
 * Texts shown around these values live in the locale files.
 */
export const PROFILE = {
  name: "Maria Júlia Carvalho Sousa",
  firstName: "Maria",
  middleName: "Júlia",
  email: "mariajuliacrss@gmail.com",
  github: {
    url: "https://github.com/mariajuliacs",
    label: "github.com/mariajuliacs",
  },
  linkedin: {
    url: "https://linkedin.com/in/mariajuliacs",
    label: "linkedin.com/in/mariajuliacs",
  },
  /**
   * Résumé PDF per language: `file` is the path in the site, `downloadName`
   * is the name the visitor's browser saves it as. Languages without their
   * own entry fall back to the Portuguese version.
   */
  resume: {
    pt: {
      file: "assets/docs/curriculo-maria-julia-pt.pdf",
      downloadName: "Maria_Julia_Carvalho_Sousa_Curriculo.pdf",
    },
    en: {
      file: "assets/docs/resume-maria-julia-en.pdf",
      downloadName: "Maria_Julia_Carvalho_Sousa_Resume.pdf",
    },
  },
};
