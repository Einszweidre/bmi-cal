function calculateBMI() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    let bmi = weight / (height ** 2);

    document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);

    if (bmi < 18.5) {
        document.getElementById("category").innerHTML = "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 25) {
        document.getElementById("category").innerHTML = "You are of normal weight.";
    } else if (bmi >= 25 && bmi < 30) {
        document.getElementById("category").innerHTML = "You are overweight.";
    } else {
        document.getElementById("category").innerHTML = "You are obese.";
    }
}

let recommendations = [
    {
        category: "Underweight",
        tips: [
            "Kenaikan berat badan sehat dengan meningkatkan asupan kalori secara bertahap dan seimbang.",
            "Latihan kekuatan untuk membangun otot dan meningkatkan kekuatan tubuh.",
            "Konsumsi makanan yang kaya nutrisi seperti biji-bijian, protein, lemak sehat dan buah-buahan dan sayuran yang memiliki kandungan nutrisi yang tinggi."
        ]
    },
    {
        category: "Normal",
        tips: [
            "Berolahraga teratur dengan aktivitas aerobik seperti jogging, bersepeda, berenang atau yoga.",
            "Makan seimbang dengan mengonsumsi makanan yang kaya nutrisi dan tidak berlebihan dalam porsi.",
            "Tidur cukup untuk memulihkan energi dan memperbaiki sistem kekebalan tubuh."
        ]
    },
    {
        category: "Overweight",
        tips: [
            "Berolahraga secara teratur dengan aktivitas aerobik dan kekuatan untuk membakar kalori dan membangun otot.",
            "Konsumsi makanan yang seimbang dan terkontrol dalam porsi dan kalori.",
            "Pilih makanan dengan kandungan rendah kalori dan tinggi nutrisi seperti buah-buahan, sayuran, protein rendah lemak, dan biji-bijian."
        ]
    },
    {
        category: "Obese",
        tips: [
            "Berolahraga secara teratur dengan aktivitas aerobik dan kekuatan untuk membakar kalori dan membangun otot.",
            "Kurangi konsumsi makanan yang kaya lemak dan gula.",
            "Fokus pada makanan sehat yang kaya nutrisi dan rendah kalori seperti buah-buahan, sayuran, protein rendah lemak, dan biji-bijian."
        ]
    }
];