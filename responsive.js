
document.addEventListener('polaroidRendered', function () {
    console.log("Received polaroidRendered event.");

    function adjustTextSizeAndSpacing() {
        const loremTextDiv = document.querySelector('.lorem-text');
        const introTextDiv = document.querySelector('.intro-text');

        const polaroids = document.querySelectorAll('.polaroid');
        if (polaroids.length === 0) {
            console.log("Polaroids not found.");
            return;
        }
        console.log("Polaroids found, proceeding.");

        polaroids.forEach(function (polaroid) {
            if (window.innerWidth <= 600 || window.innerHeight <= 600) {
                polaroid.style.width = '250px';
                polaroid.style.height = '300px';
                polaroid.style.fontSize = '16px';

            } else if ((window.innerWidth > 600 && window.innerWidth <= 900) ||
                (window.innerHeight > 600 && window.innerHeight <= 900)) {
                polaroid.style.width = '300px';
                polaroid.style.height = '350px';
                polaroid.style.fontSize = '17px';

            } else {
                polaroid.style.width = '350px';
                polaroid.style.height = '400px';
                polaroid.style.fontSize = '18px';
            }
        });

        if (window.innerWidth <= 600 || window.innerHeight <= 600) {
            loremTextDiv.style.fontSize = '16px';
            loremTextDiv.style.lineHeight = '1.2';
            introTextDiv.style.fontSize = '30px';
            polaroids.style.width = '200px';
            polaroids.style.height = '250px';
            polaroids.style.fontSize = '16px';

        } else if ((window.innerWidth > 600 && window.innerWidth <= 900) ||
            (window.innerHeight > 600 && window.innerHeight <= 900)) {
            loremTextDiv.style.fontSize = '18px';
            loremTextDiv.style.lineHeight = '1.4';
            introTextDiv.style.fontSize = '40px';
            polaroids.style.width = '250px';
            polaroids.style.height = '300px';
            polaroids.style.fontSize = '17px';

        } else {
            loremTextDiv.style.fontSize = '22px';
            loremTextDiv.style.lineHeight = '1.6';
            introTextDiv.style.fontSize = '50px';
            polaroids.style.width = '300px';
            polaroids.style.height = '350px';
            polaroids.style.fontSize = '18px';

        }
    }

    adjustTextSizeAndSpacing();
    window.addEventListener('resize', adjustTextSizeAndSpacing);

});
