const beforeButton = document.getElementById("before")
const afterButton = document.getElementById("after")
const plate = document.getElementById("image-plate")
var slideRange = 0

afterButton.addEventListener('click', () => {
    if (slideRange >= 1840) {
        slideRange = -920
    }
    slideRange += 920
    plate.style.marginLeft = "-" + slideRange + "px"
})

beforeButton.addEventListener('click', () => {
    if (slideRange == 0) {
        slideRange = 1840 + 920
    }
    slideRange -= 920
    plate.style.marginLeft = "-" + slideRange + "px"
})


// slider
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// chart
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["JAVA", "PHP", "GOLANG", "JAVASCRIPT"],
        datasets: [{
            label: 'language',
            data: [10, 50, 10, 20],
            backgroundColor: [
                '#EA2027',
                '#833471',
                '#12CBC4',
                '#fff200'
            ],
            borderColor: [
                '#ecf0f1',
                '#ecf0f1',
                '#ecf0f1',
                '#ecf0f1'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});