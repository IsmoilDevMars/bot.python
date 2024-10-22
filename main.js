// script.js
const daysGrid = document.querySelector('.days-grid');
const monthYear = document.getElementById('month-year');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');
let currentDate = new Date();
let isDarkMode = false;

const renderCalendar = () => {
    daysGrid.innerHTML = ''; // Clear previous days

    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    monthYear.innerText = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentYear}`;

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Fill in days
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        daysGrid.appendChild(emptyDiv); // Empty space before first day
    }

    for (let day = 1; day <= lastDay; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.innerText = day;
        daysGrid.appendChild(dayDiv);
    }
};

const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    isDarkMode = !isDarkMode;
};

const changeMonth = (direction) => {
    currentDate.setMonth(currentDate.getMonth() + direction);
    renderCalendar();
};

// Initial render
renderCalendar();

// Event Listeners
darkModeToggle.addEventListener('click', toggleDarkMode);
prevMonthButton.addEventListener('click', () => changeMonth(-1));
nextMonthButton.addEventListener('click', () => changeMonth(1));
