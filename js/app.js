function downloadApplication() {
  const formElement = document.querySelector("#application-form");
  html2canvas(formElement).then(canvas => {
    const link = document.createElement("a");
    link.download = "job-application.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
