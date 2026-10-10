const statusText = document.getElementById('statusText');
const healthButton = document.getElementById('healthButton');

async function checkHealth() {
  statusText.textContent = 'Checking app health...';

  try {
    const response = await fetch('/api/health');
    const data = await response.json();

    statusText.textContent = `${data.status.toUpperCase()} — ${data.message}`;
  } catch (error) {
    statusText.textContent = 'Health check failed. Please verify the server is running.';
    console.error(error);
  }
}

healthButton.addEventListener('click', checkHealth);
