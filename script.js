// Render projects from projects.json and set year
document.getElementById("year").textContent = new Date().getFullYear();

async function loadProjects() {
  try {
    const res = await fetch("assets/projects.json");
    const projects = await res.json();
    const grid = document.getElementById("project-grid");
    grid.innerHTML = "";
    projects.forEach(p => {
      const el = document.createElement("article");
      el.className = "project";
      el.innerHTML = `
        <h3>${p.title}</h3>
        <div class="meta">${p.tags?.join(" • ") || ""}</div>
        <p>${p.description}</p>
        <div>
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Live</a>` : ""}
          ${p.repo ? ` · <a href="${p.repo}" target="_blank" rel="noopener">Code</a>` : ""}
        </div>
      `;
      grid.appendChild(el);
    });
  } catch (e) {
    const grid = document.getElementById("project-grid");
    grid.innerHTML = "<p>Couldn't load projects. Check assets/projects.json.</p>";
  }
}
loadProjects();
