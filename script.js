fetch("https://corsproxy.io/?https://www.carqueryapi.com/api/0.3/?cmd=getMakes&format=json")
    .then(response => response.json())
    .then(data => {
        let result = document.getElementById("result");
        result.innerHTML = "";

        let brands = data.Makes;

        brands.forEach(brand => {
            let option = document.createElement("option");
            option.value = brand.make_display;
            option.textContent = brand.make_display;
            result.appendChild(option);
        });
    })
    .catch(error => console.error("Xatolik yuz berdi:", error));

document.getElementById("searchBtn").addEventListener("click", function() {
    let selectedBrand = document.getElementById("result").value;
    let infoDiv = document.getElementById("info");

    if (selectedBrand === "Abarth") {
        infoDiv.innerHTML = `
            <h2>Abarth</h2>
            <img src="https://1000logos.net/wp-content/uploads/2018/03/Abarth-Logo.png" alt="Abarth Logo" width="200">
            <p><strong>Abarth</strong> — Italiyaning sport avtomobillari ishlab chiqaruvchi kompaniyasi.</p>`;
    } else if (selectedBrand === "AC") {
        infoDiv.innerHTML = `
            <h2>AC</h2>
            <img src="https://seeklogo.com/images/A/ac-cars-logo-57C203EFD5-seeklogo.com.png" alt="AC Logo" width="200">
            <p><strong>AC</strong> — Britaniyaning klassik sport avtomobillari ishlab chiqaruvchisi.</p>`;
    } else if (selectedBrand === "Acura") {
        infoDiv.innerHTML = `
            <h2>Acura</h2>
            <img src="https://1000logos.net/wp-content/uploads/2016/10/Acura-Logo-2000.png" alt="Acura Logo" width="200">
            <p><strong>Acura</strong> — Honda kompaniyasining premium avtomobil brendi.</p>`;
    } else if (selectedBrand === "Alfa Romeo") {
        infoDiv.innerHTML = `
            <h2>Alfa Romeo</h2>
            <img src="https://1000logos.net/wp-content/uploads/2018/04/Alfa-Romeo-logo.png" alt="Alfa Romeo Logo" width="200">
            <p><strong>Alfa Romeo</strong> — mashhur italyan avtomobil brendi, sport va hashamat avtomobillari bilan tanilgan.</p>`;
    } else if (selectedBrand === "Audi") {
        infoDiv.innerHTML = `
            <h2>Audi</h2>
            <img src="https://1000logos.net/wp-content/uploads/2017/04/Audi-Logo.png" alt="Audi Logo" width="200">
            <p><strong>Audi</strong> — Germaniyaning premium avtomobil ishlab chiqaruvchisi.</p>`;
    } else if (selectedBrand === "BMW") {
        infoDiv.innerHTML = `
            <h2>BMW</h2>
            <img src="https://1000logos.net/wp-content/uploads/2016/10/BMW-logo.png" alt="BMW Logo" width="200">
            <p><strong>BMW</strong> — Germaniyaning eng nufuzli avtomobil brendlaridan biri.</p>`;
    } else if (selectedBrand === "Mercedes-Benz") {
        infoDiv.innerHTML = `
            <h2>Mercedes-Benz</h2>
            <img src="https://1000logos.net/wp-content/uploads/2017/02/Mercedes-Benz-Logo.png" alt="Mercedes-Benz Logo" width="200">
            <p><strong>Mercedes-Benz</strong> — dunyodagi eng mashhur va nufuzli avtomobil ishlab chiqaruvchilardan biri.</p>`;
    } else if (selectedBrand === "Bugatti") {
        infoDiv.innerHTML = `
            <h2>Bugatti</h2>
            <img src="https://1000logos.net/wp-content/uploads/2017/04/Bugatti-Logo.png" alt="Bugatti Logo" width="200">
            <p><strong>Bugatti</strong> — yuqori tezlik va hashamatni uyg‘unlashtirgan fransuz avtomobil brendi.</p>`;
    } else if (selectedBrand === "Ferrari") {
        infoDiv.innerHTML = `
            <h2>Ferrari</h2>
            <img src="https://1000logos.net/wp-content/uploads/2017/04/Ferrari-Logo.png" alt="Ferrari Logo" width="200">
            <p><strong>Ferrari</strong> — dunyoning eng mashhur sport avtomobil brendlaridan biri.</p>`;
    } else if (selectedBrand === "Lamborghini") {
        infoDiv.innerHTML = `
            <h2>Lamborghini</h2>
            <img src="https://1000logos.net/wp-content/uploads/2017/04/Lamborghini-Logo.png" alt="Lamborghini Logo" width="200">
            <p><strong>Lamborghini</strong> — yuqori tezlik va futuristik dizayn bilan mashhur italyan brendi.</p>`;
    } else if (selectedBrand === "Porsche") {
        infoDiv.innerHTML = `
            <h2>Porsche</h2>
            <img src="https://1000logos.net/wp-content/uploads/2017/04/Porsche-Logo.png" alt="Porsche Logo" width="200">
            <p><strong>Porsche</strong> — sport avtomobillari bilan mashhur nemis avtomobil ishlab chiqaruvchisi.</p>`;
    } else if (selectedBrand === "Toyota") {
        infoDiv.innerHTML = `
            <h2>Toyota</h2>
            <img src="https://1000logos.net/wp-content/uploads/2017/06/Toyota-Logo.png" alt="Toyota Logo" width="200">
            <p><strong>Toyota</strong> — dunyodagi eng yirik avtomobil ishlab chiqaruvchilardan biri.</p>`;
    } else if (selectedBrand === "Ford") {
        infoDiv.innerHTML = `
            <h2>Ford</h2>
            <img src="https://1000logos.net/wp-content/uploads/2017/06/Ford-Logo.png" alt="Ford Logo" width="200">
            <p><strong>Ford</strong> — Amerika avtomobil sanoatining peshqadamlaridan biri.</p>`;
    } else if (selectedBrand === "Chevrolet") {
        infoDiv.innerHTML = `
            <h2>Chevrolet</h2>
            <img src="https://1000logos.net/wp-content/uploads/2017/06/Chevrolet-Logo.png" alt="Chevrolet Logo" width="200">
            <p><strong>Chevrolet</strong> — General Motors tarkibidagi eng mashhur avtomobil brendlaridan biri.</p>`;
    } else if (selectedBrand === "Honda") {
        infoDiv.innerHTML = `
            <h2>Honda</h2>
            <img src="https://1000logos.net/wp-content/uploads/2017/06/Honda-Logo.png" alt="Honda Logo" width="200">
            <p><strong>Honda</strong> — ishonchli va tejamkor avtomobillari bilan mashhur yapon brendi.</p>`;
    } else {
        infoDiv.innerHTML = `<p>Ushbu brend haqida ma'lumot topilmadi.</p>`;
    }
});
