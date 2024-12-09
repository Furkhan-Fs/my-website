// Event listener for seat clicks
seats.forEach(seat => {
    seat.addEventListener('click', () => {
        // Toggle the selected state
        if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
            const index = selectedSeats.indexOf(seat);
            if (index > -1) {
                selectedSeats.splice(index, 1);
            }
        } else {
            seat.classList.add('selected');
            selectedSeats.push(seat);
        }
    });
});

// Confirm seat selection
confirmButton.addEventListener('click', () => {
    if (selectedSeats.length === 0) {
        alert('Please select at least one seat before confirming!');
    } else {
        // Mark seats as taken
        selectedSeats.forEach(seat => {
            seat.classList.remove('selected');
            seat.classList.add('taken');
        });

        // Reset the selection
        selectedSeats = [];

        // Show confirmation
        alert('Seats confirmed successfully!');
    }
});