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




// creating the topbar items
document.addEventListener("DOMContentLoaded", function() {

    // Helper function: force open collapsible containers.
    function expandAncestors(element) {
      let current = element.parentElement;
      while (current && current !== document.body) {
        if (
          current.classList && 
          (current.classList.contains("category-content") ||
           current.classList.contains("section") ||
           current.classList.contains("category") ||
           current.classList.contains("content"))
        ) {
          if (!current.classList.contains("show") || window.getComputedStyle(current).display === "none") {
            current.classList.add("show");
            current.style.display = "block";
          }
        }
        current = current.parentElement;
      }
    }
  
    // Build the navigation links based on all h2 and h3 headers
    const sidebarNav = document.getElementById("sidebarNav");
    const headers = document.querySelectorAll("h2, h3");
    
    headers.forEach(header => {
      // If the header doesn't have an id, assign one, should not be necessary in most cases but good to include
      if (!header.id) {
        header.id = header.textContent.trim().toLowerCase().replace(/\s+/g, '-');
      }
      
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `#${header.id}`;
      a.textContent = header.textContent;
      li.appendChild(a);
      sidebarNav.appendChild(li);
    });
  
    // attaching click events to the links
    sidebarNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault(); // prevent the default jump for now
        
        // Close the sidebar
        document.getElementById("menuSidebar").classList.remove("active");
    
        // Get the target header element
        const targetId = this.getAttribute("href");
        const targetHeader = document.querySelector(targetId);
        console.log(targetId, targetHeader);
        
        if (targetHeader) {
          // Expand any collapsed ancestor containers before jumping to the section
          expandAncestors(targetHeader);
    
          // Ensure the target header's immediate content is expanded
          const contentElement = targetHeader.nextElementSibling;
          if (contentElement && (!contentElement.classList.contains("show") || window.getComputedStyle(contentElement).display === "none")) {
            contentElement.classList.add("show");
            contentElement.style.display = "block";
          }
    
          // Scroll to the target
          targetHeader.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  
    // Set up the menu toggle button
    const menuToggle = document.getElementById("menuToggle");
    const menuSidebar = document.getElementById("menuSidebar");
    menuToggle.addEventListener("click", function() {
      menuSidebar.classList.toggle("active");
    });
  
    // Close the sidebar if clicking outside
    document.addEventListener("click", function(e) {
      if (menuSidebar.classList.contains("active") &&
          !menuSidebar.contains(e.target) &&
          !menuToggle.contains(e.target)) {
        menuSidebar.classList.remove("active");
      }
    });
  });
  