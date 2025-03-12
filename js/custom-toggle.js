function setAndShowSection(sectionClass, clickedButton)
{
    // Hide all toggle sections
    document.querySelectorAll('.toggle').forEach(section => {
        section.style.display = 'none';
    });

    // Remove "active" class from all buttons
    document.querySelectorAll('.more-details-button').forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected section
    const selectedSection = document.querySelector(`.${sectionClass}`);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Add "active" class to clicked button
    clickedButton.classList.add('active');
}