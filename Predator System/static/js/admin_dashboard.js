const adminSearchInput = document.getElementById("adminEventSearch");
const adminRows = Array.from(document.querySelectorAll(".admin-event-row"));
const adminEmptySearch = document.getElementById("adminEmptySearch");
const adminDeleteForms = Array.from(document.querySelectorAll(".admin-delete-form"));

if (adminSearchInput) {
  adminSearchInput.addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    let visibleCount = 0;

    adminRows.forEach((row) => {
      const searchableText = row.dataset.event || "";
      const shouldShow = searchableText.includes(query);
      row.classList.toggle("hidden", !shouldShow);
      if (shouldShow) visibleCount += 1;
    });

    if (adminEmptySearch) {
      adminEmptySearch.classList.toggle("hidden", visibleCount !== 0);
    }
  });
}

adminDeleteForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    const ok = window.confirm("Delete this event?");
    if (!ok) event.preventDefault();
  });
});
