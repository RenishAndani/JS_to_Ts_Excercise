const child = document.querySelector(".child") as HTMLDivElement | null;

if (child) {
  const parent = child.parentElement as HTMLDivElement | null;

  if (parent) {
    const relativeToViewportTop = parent.getBoundingClientRect().top;

    const absoluteToDocumentTop = parent.getBoundingClientRect().top + window.scrollY;

    console.log("Parent distance from viewport top:", relativeToViewportTop, "px");
    console.log("Parent distance from document top:", absoluteToDocumentTop, "px");
  }
}
