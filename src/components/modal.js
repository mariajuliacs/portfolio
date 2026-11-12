/** Certificate viewer modal (behaviour in src/ui/modal.js). */
import { esc } from "./dom.js";
import { icon } from "./icons.js";

export function renderModal(ctx) {
  const { status, a11y } = ctx.t.common;
  return `
    <div class="modal" id="cert-modal" role="dialog" aria-modal="true" aria-labelledby="cert-modal-title" hidden>
      <div class="modal-backdrop" data-close></div>
      <div class="modal-content">
        <div class="modal-head">
          <h2 class="modal-title" id="cert-modal-title">${esc(status.certificate)}</h2>
          <button type="button" class="modal-close" data-close aria-label="${esc(a11y.close)}">${icon("close", 2)}</button>
        </div>
        <div class="modal-body">
          <img class="modal-img" alt="" />
          <p class="modal-fallback">${esc(status.certUnavailable)}</p>
        </div>
      </div>
    </div>`;
}
