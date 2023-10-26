document.addEventListener("DOMContentLoaded", function() {
    let data = [
        {
            "projectImage":"https://static-00.iconduck.com/assets.00/loan-money-icon-2048x2048-o516fb1v.png",
            "title":"Gelir Gider",
            "detail":"Gelir gider uygulaması",
            "url":"https://projectmurat.github.io/payment/"
        },
        {
            "projectImage":"https://e7.pngegg.com/pngimages/28/126/png-clipart-cookpad-inc-recipe-cooking-cuisine-food-cooking-food-text-thumbnail.png",
            "title":"Yemek Tarifleri",
            "detail":"Yemek Tarifleri sayfasına gider",
            "url":"https://projectmurat.github.io/tariflerim/"
        },
        {
            "projectImage":"https://w7.pngwing.com/pngs/209/1016/png-transparent-computer-icons-task-id-miscellaneous-computer-logo.png",
            "title":"Tasklar",
            "detail":"Tasklar sayfasına gider",
            "url":"https://projectmurat.github.io/tasktracer/"
        }
    ]
    data.forEach(project=>{
        createCarouselItem(project);
    })
});

function createCarouselItem(project){

    // Card için tanımlar
    let carouselContainer = document.getElementById("carousel-container");
    let carouselItem = document.createElement("div");
    let carouselItemImg = document.createElement("img");
    let carouselItemDetails = document.createElement("div");
    let carouselItemDetails_controls = document.createElement("div");
    let carouselItemDetails_controls_span1 = document.createElement("span");
    let carouselItemDetails_controls_span2 = document.createElement("span");
    let carouselItemDetails_controls_h1 = document.createElement("h1");
    let carouselItemDetails_controls_h3 = document.createElement("h3");
    let carouselItemDetails_controls_a = document.createElement("a");
    let carouselItemDetails_controls_a_button = document.createElement("button");

    // Carousel Item En Dış Container
    carouselItem.className = "carousel-item";

    // Carousel Item arka plan resmi
    carouselItemImg.className = "carousel-item__img";
    carouselItemImg.src = project.projectImage;

    // Carousel Item Detayların Genel Container'ı
    carouselItemDetails.className = "carousel-item__details";

    // Carousel Item Dizaynın en üstüne eklenen boş span div'i
    carouselItemDetails_controls.className = "controls";

    // Conrols içindeki boş alan spanları
    carouselItemDetails_controls_span1.className = "fas fa-play-circle";
    carouselItemDetails_controls_span2.className = "fas fa-plus-circle";

    // Proje başlığı h1'i
    carouselItemDetails_controls_h1.className = "carousel-item__details--title";
    carouselItemDetails_controls_h1.innerText = project.title;

    // Proje başlığı altında gelecek açıklama h3'ü
    carouselItemDetails_controls_h3.className ="carousel-item__details--subtitle";
    carouselItemDetails_controls_h3.innerText = project.detail;

    // Proje yönelndirmesi için <a> çerçevesi ekliyoruz
    carouselItemDetails_controls_a.href = project.url;

    // çerçeve içine butonu yerleştiriyoruz.
    carouselItemDetails_controls_a_button.className = "carousel-item__btn"
    carouselItemDetails_controls_a_button.innerText = "Sayfaya Git";


    // Carousel item kartına öncelikle resim ve detay div'ini ekliyoruz.

    carouselItem.appendChild(carouselItemImg);
    carouselItem.appendChild(carouselItemDetails);

    // Carousel kartının Detay div'ine sırasıyla control, h1, h2 ve buton <a> 'yı ekliyoruz.
    carouselItemDetails.appendChild(carouselItemDetails_controls);
    carouselItemDetails.appendChild(carouselItemDetails_controls_h1);
    carouselItemDetails.appendChild(carouselItemDetails_controls_h3);
    carouselItemDetails.appendChild(carouselItemDetails_controls_a);

    // Controls div'ine 2 adet spanı ekliyoruz
    carouselItemDetails_controls.appendChild(carouselItemDetails_controls_span1);
    carouselItemDetails_controls.appendChild(carouselItemDetails_controls_span2);

    // <a> çerçevesine butonu ekliyoruz.
    carouselItemDetails_controls_a.appendChild(carouselItemDetails_controls_a_button);

    // Son olarak container'a tasarlanan kartı basıyoruz.

    carouselContainer.appendChild(carouselItem);



}