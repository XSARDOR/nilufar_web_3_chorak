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
            <img src="https://upload.wikimedia.org/wikipedia/en/c/cd/New_Fiat_Abarth_Logo.png" alt="Abarth Logo" width="200">
            <p><strong>Abarth</strong> — Italiyaning sport avtomobillari ishlab chiqaruvchi kompaniyasi.</p>`;
    } else if (selectedBrand === "AC") {
        infoDiv.innerHTML = `
            <h2>AC</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOv66JhzjnwicBjy5x112MWmIOgDVriux14w&s" alt="AC Logo" width="200">
            <p><strong>AC</strong> — Britaniyaning klassik sport avtomobillari ishlab chiqaruvchisi.</p>`;
    } else if (selectedBrand === "Acura") {
        infoDiv.innerHTML = `
            <h2>Acura</h2>
            <img src="https://1000logos.net/wp-content/uploads/2018/09/acura-symbol.jpg" alt="Acura Logo" width="200">
            <p><strong>Acura</strong> — Honda kompaniyasining premium avtomobil brendi.</p>`;
    } else if (selectedBrand === "Alfa Romeo") {
        infoDiv.innerHTML = `
            <h2>Alfa Romeo</h2>
            <img src="https://medias.fcacanada.ca//specs/alfaromeo/media/images/badge//current-badge_457d965994803bd415fc9735d023d1eb.png" alt="Alfa Romeo Logo" width="200">
            <p><strong>Alfa Romeo</strong> — mashhur italyan avtomobil brendi, sport va hashamat avtomobillari bilan tanilgan.</p>`;
    } else if (selectedBrand === "Audi") {
        infoDiv.innerHTML = `
            <h2>Audi</h2>
            <img src="https://pictures.dealer.com/k/keyesaudishermanoaksaoa/0416/d82ee5a1af7fd3baa30a98070b91144ax.jpg" alt="Audi Logo" width="200">
            <p><strong>Audi</strong> — Germaniyaning premium avtomobil ishlab chiqaruvchisi.</p>`;
    } else if (selectedBrand === "BMW") {
        infoDiv.innerHTML = `
            <h2>BMW</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/480px-BMW.svg.png" alt="BMW Logo" width="200">
            <p><strong>BMW</strong> — Germaniyaning eng nufuzli avtomobil brendlaridan biri.</p>`;
    } else if (selectedBrand === "Mercedes-Benz") {
        infoDiv.innerHTML = `
            <h2>Mercedes-Benz</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1200px-Mercedes-Logo.svg.png" alt="Mercedes-Benz Logo" width="200">
            <p><strong>Mercedes-Benz</strong> — dunyodagi eng mashhur va nufuzli avtomobil ishlab chiqaruvchilardan biri.</p>`;
    } else if (selectedBrand === "Bugatti") {
        infoDiv.innerHTML = `
            <h2>Bugatti</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Bugatti_logo.svg/800px-Bugatti_logo.svg.png" alt="Bugatti Logo" width="200">
            <p><strong>Bugatti</strong> — yuqori tezlik va hashamatni uyg‘unlashtirgan fransuz avtomobil brendi.</p>`;
    } else if (selectedBrand === "Ferrari") {
        infoDiv.innerHTML = `
            <h2>Ferrari</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM7Otqdk3acwZQjX2GulLYIkLM1E8ptq7aZA&s" alt="Ferrari Logo" width="200">
            <p><strong>Ferrari</strong> — dunyoning eng mashhur sport avtomobil brendlaridan biri.</p>`;
    } else if (selectedBrand === "Lamborghini") {
        infoDiv.innerHTML = `
            <h2>Lamborghini</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdavgWGEhiBzc1mor9YL97_KiXXxG-bO-aMw&s" alt="Lamborghini Logo" width="200">
            <p><strong>Lamborghini</strong> — yuqori tezlik va futuristik dizayn bilan mashhur italyan brendi.</p>`;
    } else if (selectedBrand === "Porsche") {
        infoDiv.innerHTML = `
            <h2>Porsche</h2>
            <img src="https://lezebre.lu/images/detailed/79/45326-Sticker-Porsche-Logo.png" alt="Porsche Logo" width="200">
            <p><strong>Porsche</strong> — sport avtomobillari bilan mashhur nemis avtomobil ishlab chiqaruvchisi.</p>`;
    } else if (selectedBrand === "Toyota") {
        infoDiv.innerHTML = `
            <h2>Toyota</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Toyota_logo_%28Red%29.svg/1024px-Toyota_logo_%28Red%29.svg.png" alt="Toyota Logo" width="200">
            <p><strong>Toyota</strong> — dunyodagi eng yirik avtomobil ishlab chiqaruvchilardan biri.</p>`;
    } else if (selectedBrand === "Ford") {
        infoDiv.innerHTML = `
            <h2>Ford</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg" alt="Ford Logo" width="200">
            <p><strong>Ford</strong> — Amerika avtomobil sanoatining peshqadamlaridan biri.</p>`;
    } else if (selectedBrand === "Chevrolet") {
        infoDiv.innerHTML = `
            <h2>Chevrolet</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pBTquvqdoFhctdDJML_IeG3Un4W822zYHw&s" alt="Chevrolet Logo" width="200">
            <p><strong>Chevrolet</strong> — General Motors tarkibidagi eng mashhur avtomobil brendlaridan biri.</p>`;
    } else if (selectedBrand === "Honda") {
        infoDiv.innerHTML = `
            <h2>Honda</h2>
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_1080,h_675/https://graphicdesignergeeks.com/wp-content/uploads/2024/03/HONDA-1-1080x628.jpg" alt="Honda Logo" width="200">
            <p><strong>Honda</strong> — ishonchli va tejamkor avtomobillari bilan mashhur yapon brendi.</p>`;
    } else {
        infoDiv.innerHTML = `<p>Ushbu brend haqida ma'lumot topilmadi.</p>`;
    }
});
