(() => {
  const initialCount = 0;
  const defaultTitle = "Contador de eventos";

  const titleElement = document.querySelector("#event-title");
  const titleForm = document.querySelector("#title-form");
  const titleInput = document.querySelector("#title-input");
  const counterOutput = document.querySelector("#counter-value");
  const decreaseButton = document.querySelector("#decrease-button");
  const increaseButton = document.querySelector("#increase-button");
  const resetButton = document.querySelector("#reset-button");

  let count = initialCount;

  function renderCount() {
    counterOutput.value = String(count);
    counterOutput.textContent = String(count);
  }

  increaseButton.addEventListener("click", () => {
    count += 1;
    renderCount();
  });

  decreaseButton.addEventListener("click", () => {
    count = Math.max(0, count - 1);
    renderCount();
  });

  resetButton.addEventListener("click", () => {
    count = initialCount;
    renderCount();
  });

  titleForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newTitle = titleInput.value.trim();
    titleElement.textContent = newTitle || defaultTitle;
    document.title = `${titleElement.textContent} | Colegio Bolívar`;
  });

  renderCount();
})();