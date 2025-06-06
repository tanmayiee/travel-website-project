function searchFunction() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    const text = section.textContent.toLowerCase();
    section.style.display = text.includes(query) ? "block" : "none";
  });
}

function clearSearch() {
  document.getElementById("searchBar").value = "";
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    section.style.display = "block";
  });
}
