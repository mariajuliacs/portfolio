/** Education page (education.html): academic, certificates, languages, learning. */
import { list } from "../components/dom.js";
import { EDUCATION_GROUPS, renderEducationGroup } from "../components/education.js";
import { renderSubpage } from "./layout.js";

export function renderEducationPage(ctx) {
  const { page } = ctx.t.education;
  return renderSubpage(ctx, {
    heading: page,
    lead: page.lead,
    backHash: "education",
    content: list(EDUCATION_GROUPS, (group) => renderEducationGroup(group, ctx)),
  });
}
