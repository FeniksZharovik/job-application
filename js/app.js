function downloadApplication() {
  const form = document.getElementById("application-form");

  const originalWidth = form.style.width;
  const originalTransform = form.style.transform;
  const originalScale = form.style.scale;

  form.style.width = "850px";
  form.style.transform = "scale(1)";
  form.style.transformOrigin = "top left";

  html2canvas(form, {
    scale: 2, 
    width: 850,
    windowWidth: 850,
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "job-application.png";
    link.href = canvas.toDataURL("image/png");
    link.click();

    form.style.width = originalWidth;
    form.style.transform = originalTransform;
  });
}
