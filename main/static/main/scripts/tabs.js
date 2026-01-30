document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.dataset.tab;

    document.querySelectorAll('.tab-panel').forEach(panel =>
      panel.classList.remove('active')
    );

    document.querySelectorAll('.tab-btn').forEach(btn =>
      btn.classList.remove('active')
    );

    document.getElementById(tabId).classList.add('active');
    button.classList.add('active');
  });
});
