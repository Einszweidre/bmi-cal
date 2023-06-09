let recommendations = {
    underweight: [
        "Kenaikan berat badan sehat dengan meningkatkan asupan kalori secara bertahap dan seimbang.",
        "Latihan kekuatan untuk membangun otot dan meningkatkan kekuatan tubuh.",
        "Konsumsi makanan yang kaya nutrisi seperti biji-bijian, protein, lemak sehat dan buah-buahan dan sayuran yang memiliki kandungan nutrisi yang tinggi. Prioritaskan makanan tinggi protein seperti susu, telur dan daging"
    ],
    normal: [
        "Berolahraga teratur dengan aktivitas aerobik seperti jogging, bersepeda, berenang atau yoga.",
        "Makan seimbang dengan mengonsumsi makanan yang kaya nutrisi dan tidak berlebihan dalam porsi.",
        "Tidur cukup untuk memulihkan energi dan memperbaiki sistem kekebalan tubuh."
    ],
    overweight: [
        "Berolahraga secara teratur dengan aktivitas aerobik dan kekuatan untuk membakar kalori dan membangun otot.",
        "Konsumsi makanan yang seimbang dan terkontrol dalam porsi dan kalori.",
        "Pilih makanan dengan kandungan rendah kalori dan tinggi nutrisi seperti buah-buahan, sayuran, protein rendah lemak, dan biji-bijian."
    ],
    obese: [
        "Berolahraga secara teratur dengan aktivitas aerobik dan kekuatan untuk membakar kalori dan membangun otot. Apabila BMI anda melebihi 40 disarankan untuk menurunkan berat badan anda 10% sebelum anda dapat memulai olahraga yang berat.",
        "Kurangi konsumsi makanan yang kaya lemak dan gula.",
        "Fokus pada makanan sehat yang kaya nutrisi dan rendah kalori seperti buah-buahan, sayuran, protein rendah lemak, dan biji-bijian."
    ]
};

let exercise = {
    teen: "Anda tergolong masih muda/remaja. Silahkan beraktifitas sebanyak-banyaknya dan melakukan banyak olahraga. Pilihan olahraga yang cocok untuk anda seperti berenang, bermain bola, basket dan sebagainya.",
    adult: "Anda tergolong sudah dewasa. Direkomendasikan beraktifitas dengan memperhatikan jumlah langkah harian anda (minimal 8000 langkah). Olahraga yang cocok untuk anda adalah jogging dan juga olahraga yang membentuk otot anda minimal 2 kali seminggu.",
    elder: "Anda tergolong berusia lanjut. Direkomendasikan melakukan aktifitas harian dan juga berolahraga dengan berjalan santai setiap harinya. Jangan memaksakan tubuh anda apabila sudah lelah."
};

function calculateBMI() {
    let name = document.querySelector("#name").value;
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let age = parseFloat(document.getElementById("age").value);
    let category;

    let bmi = weight / ((height/100) ** 2);

    if(!height || !weight || !name || !age){
        document.getElementById("result").innerHTML = "Please fill all data";
        document.getElementById("category").innerHTML = "";
        document.getElementById("exercise").innerHTML = "";
        document.getElementById("recommendations1").innerHTML = "";
        document.getElementById("recommendations2").innerHTML = "";
        document.getElementById("recommendations3").innerHTML = "";
        document.getElementById("link-product").innerHTML = "";
        document.getElementById("link-product2").innerHTML = "";
    } else{
        document.getElementById("result").innerHTML = `Hello ${name}, your BMI is: ` + bmi.toFixed(2);

        if (bmi < 18.5) {
            document.getElementById("category").innerHTML = `You are underweight. You need to increase your weight by ${(((height/100) ** 2)*18.5 - weight).toFixed(2)} kg`;
            category = "underweight"
        } else if (bmi >= 18.5 && bmi < 25) {
            document.getElementById("category").innerHTML = "You are of normal weight. Keep do exercises and stay healthy.";
            category = "normal"
        } else if (bmi >= 25 && bmi < 30) {
            document.getElementById("category").innerHTML = `You are overweight. You need to decrease your weight by ${(weight - ((height/100) ** 2)*24.9).toFixed(2)} kg`;
            category = "overweight"
        } else {
            document.getElementById("category").innerHTML = `You are obese. You need to decrease your weight by ${(weight - ((height/100) ** 2)*24.9).toFixed(2)} kg. Consult to doctor or if needed.`;
            category = "obese"
        }

        if (age < 18){
            document.getElementById("exercise").innerHTML = exercise.teen;
        } else if (age >= 18 && age < 60){
            document.getElementById("exercise").innerHTML = exercise.adult;
        } else{
            document.getElementById("exercise").innerHTML = exercise.elder;
        }

        document.getElementById("recommendations1").innerHTML = recommendations[category][0];
        document.getElementById("recommendations2").innerHTML = recommendations[category][1];
        document.getElementById("recommendations3").innerHTML = recommendations[category][2];
        
        if(bmi >= 25){
        document.getElementById("link-product").innerHTML = `Check our recommended supplements for your weightloss training`;
        document.getElementById("link-product").style.display = "flex";
        document.getElementById("link-product2").style.display = "none";
        }else if(bmi < 25){
        document.getElementById("link-product2").innerHTML = `Check our recommended supplements for your bulking training`;
        document.getElementById("link-product2").style.display = "flex";
        document.getElementById("link-product").style.display = "none";
        }
    }
}


let dataReview = [
    {
        "id": 1,
        "username": "Blestro",
        "body": "BmiC++ GG banget!"
    },
    {
        "id": 2,
        "username": "Hangga",
        "body": "BmiC++ GG banget!"
    },
    {
        "id": 3,
        "username": "Zul",
        "body": "BmiC++ GG banget!"
    },
    {
        "id": 4,
        "username": "Timotius",
        "body": "BmiC++ GG banget!"
    },
    {
        "id": 5,
        "username": "Vincent",
        "body": "BmiC++ GG banget!"
    }
]


// read data => masukin data js ke html
function readData(){
    if (localStorage.getItem('dataReview')){
        data = JSON.parse(localStorage.getItem("dataReview")); // buat nyimpen di local storage
    }

dataReview.reverse()
let list = document.querySelector('#list') //id tempat naro review
let stringHtml = ""
for (let i = 0; i < dataReview.length; i++){
    stringHtml += ` 
    <div class="" >
        <div class="name">
            <span>${dataReview[i].username}</span>
            <button>X</button>
        </div>
        <hr>
        <p><i>"${dataReview[i].body}"</i></p>
    </div>
    `// buat masukin dataReview username ama body ke div html tempat review
    
}
list.innerHTML = stringHtml; //
}
readData(); 

function addData(e){
    e.preventDefault(); // special case kalo pake onSubmit di HTML biar pas nge add review ga ngerefresh browsernya 
    let username = document.querySelector('#inputName').value 
    let body = document.querySelector('#inputComment').value
    let obj = {
        id: dataReview[0].id + dataReview.length,
        username,
        body
    }
    console.log(obj)
     dataReview.push(obj);
    document.querySelector('#inputName').value = '';
    document.querySelector('#inputComment').value = '';
    localStorage.setItem('dataReview', JSON.stringify(dataReview, null, 2));
    readData()

}