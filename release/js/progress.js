let progress = 1;

function updateProgress() {
  if (progress <= 10) {
    const progressBar = document.querySelector(`.bar_${progress}`);
    progressBar.textContent = `${progress}/10`;
    progressBar.classList.add("active");

    if (progress > 1) {
      const prevProgressBar = document.querySelector(`.bar_${progress - 1}`);
      prevProgressBar.classList.remove("active");
    }

    progress++;
  }
}
