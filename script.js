const upload = document.getElementById("upload");
const preview = document.getElementById("preview");

let filters = {
  brightness: 100,
  contrast: 100,
  blur: 0,
};

// -------------------
// IMAGE UPLOAD
// -------------------

upload.addEventListener("change", function () {
  const file = upload.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (e) {
    preview.src = e.target.result;
  };

  reader.readAsDataURL(file);
});

// -------------------
// FILTER SYSTEM
// -------------------

function applyFilters() {
  preview.style.filter = `
    brightness(${filters.brightness}%)
    contrast(${filters.contrast}%)
    blur(${filters.blur}px)
  `;
}

// buttons override sliders
function setFilter(filter) {
  preview.style.filter = filter;
}

// -------------------
// SLIDERS
// -------------------

document.getElementById("brightness").oninput = (e) => {
  filters.brightness = e.target.value;
  applyFilters();
};

document.getElementById("contrast").oninput = (e) => {
  filters.contrast = e.target.value;
  applyFilters();
};

document.getElementById("blur").oninput = (e) => {
  filters.blur = e.target.value;
  applyFilters();
};

// -------------------
// RESET
// -------------------

function resetFilters() {
  filters = {
    brightness: 100,
    contrast: 100,
    blur: 0,
  };

  document.getElementById("brightness").value = 100;
  document.getElementById("contrast").value = 100;
  document.getElementById("blur").value = 0;

  applyFilters();
}

// -------------------
// DOWNLOAD IMAGE
// -------------------

function downloadImage() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const img = preview;

  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  ctx.filter = getComputedStyle(img).filter;
  ctx.drawImage(img, 0, 0);

  const link = document.createElement("a");
  link.download = "filtered-image.png";
  link.href = canvas.toDataURL();
  link.click();
}