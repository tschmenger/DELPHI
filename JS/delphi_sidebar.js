    // Sidebar Toggle Functionality
    const sidebar = document.getElementById('diceSidebar');
    const toggleSidebarButton = sidebar.querySelector('.toggle-sidebar-button');

    toggleSidebarButton.addEventListener('click', () => {
        sidebar.classList.toggle('expanded');
        const sidebarContent = sidebar.querySelector('.sidebar-content');
        sidebarContent.style.display = sidebar.classList.contains('expanded') ? 'flex' : 'none';
    });

    // Dice Roll Functionality
    document.querySelectorAll('.dice-button').forEach(button => {
        button.addEventListener('click', () => {
            const diceType = button.getAttribute('data-dice');
            const rollResult = Math.floor(Math.random() * parseInt(diceType.slice(1))) + 1;
            document.getElementById('diceResultDisplay').textContent = `You rolled a ${rollResult} on a ${diceType}!`;
        });
    });
