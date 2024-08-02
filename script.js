
    document.getElementById('ageForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const birthdate = new Date(document.getElementById('birthdate').value);
        const age = calculateAge(birthdate);

        document.getElementById('result').textContent = ` ${age.years}  years  ${age.months} months  ${age.days} days`;
    });
    
    function calculateAge(birthdate) {
        const today = new Date();
        let years = today.getFullYear() - birthdate.getFullYear();
        let months = today.getMonth() - birthdate.getMonth();
        let days = today.getDate() - birthdate.getDate();
    
        // Adjust months & years if the current day is before the birth day of the month
        if (days < 0) {
            months--;
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days = lastMonth.getDate() + days; // Adjusting the days count based on the last month's total days
        }
    
        // Adjust years if the current month is before the birth month
        if (months < 0) {
            years--;
            months += 12; // Adjusting the months count for a full year
        }
    
        return { years, months, days };
    }
    
