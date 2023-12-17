document.addEventListener('DOMContentLoaded', function () {
  const volumeSlider = document.getElementById('volumeSlider');
  const volumePercentage = document.getElementById('volumePercentage');
  const speakersDown = document.querySelector('.speakers-down');
  const speakersUp = document.querySelector('.speakers-up');

  volumeSlider.addEventListener('input', function () {
    const value = this.value;
    updateVolume(value);
  });

  // Add mouse wheel event to adjust the slider
  volumeSlider.addEventListener('wheel', function (event) {
    event.preventDefault();
    const delta = -Math.sign(event.deltaY); // Invert the direction of the wheel scroll
    const step = 5; // Adjust the step value as needed

    // Update the slider value based on the wheel scroll direction
    const newValue = parseInt(volumeSlider.value, 10) + delta * step;
    const clampedValue = Math.min(100, Math.max(0, newValue));

    updateVolume(clampedValue);
  });

  volumeSlider.addEventListener('dblclick', function () {
    updateVolume(50); // Set volume to 50 on double click
  });

  speakersDown.addEventListener('click', function () {
    updateVolume(0); // Set volume to 0 when speakers down is clicked
  });

  speakersUp.addEventListener('click', function () {
    updateVolume(100); // Set volume to 100 when speakers up is clicked
  });

  function updateVolume(value) {
    volumeSlider.value = value;
    volumePercentage.textContent = value;
  }
});
