// JavaScript for interactive elements can be added here
// For example, handling clicks on "Xem Phân Tích" links

document.querySelectorAll('.match a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Phân tích chi tiết sẽ được hiển thị ở đây.');
    });
});