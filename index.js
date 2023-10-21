const projects = [
    { name: "E-commerce Website", imgSrc: "/images/placeHolder.jpg", url: "https://www.google.com" },
    { name: "Project2", imgSrc: "/images/placeHolder.jpg", url: "https://www.youtube.com" },
    { name: "Project3", imgSrc: "/images/placeHolder.jpg" },
    { name: "Project4", imgSrc: "/images/placeHolder.jpg" },
    { name: "Project5", imgSrc: "/images/placeHolder.jpg" },
    { name: "Project6", imgSrc: "/images/placeHolder.jpg" },
];

const projectGrid = document.querySelector(".project_grid");

projects.forEach((project, index) => {
    const projectBox = document.createElement("div");
    projectBox.classList.add("project_box");

    const link = document.createElement("a");
    link.href = project.url || `project.html?id=${index}`;

    const img = document.createElement("img");
    img.src = project.imgSrc;
    img.alt = project.name;

    const overlayText = document.createElement("div");
    overlayText.classList.add("overlay_Text");
    overlayText.textContent = project.name;

    link.appendChild(img);
    link.appendChild(overlayText);

    projectBox.appendChild(link);
    projectGrid.appendChild(projectBox);
});
