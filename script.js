const panels = document.querySelectorAll(".panel");
let activePanel = panels[0];

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        activePanel.classList.remove('active');
        panel.classList.add('active');
        activePanel = panel;
    })
})