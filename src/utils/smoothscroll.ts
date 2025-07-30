function smoothScroll(element: string) {
  const elementSection = document.getElementById(element);
  if (elementSection) {
    const y = elementSection.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export default smoothScroll;
