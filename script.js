const upload = document.getElementById("upload");
const preview = document.getElementById("preview");

upload.addEventListener("change", function () {
  const file = upload.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    preview.src = e.target.result;
  };

  reader.readAsDataURL(file);
});

function setFilter(filter) {
  preview.style.filter = filter;
}const upload = document.getElementById("upload");
const preview = document.getElementById("preview");

upload.addEventListener("change", function () {
  const file = upload.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    preview.src = e.target.result;
  };

  reader.readAsDataURL(file);
});

function setFilter(filter) {
  preview.style.filter = filter;
}
