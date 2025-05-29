fetch("../data-makanan.json")
    .then((res) => res.json())
    .then((data) => {
        const kategoriList = ["halal", "nonhalal", "jajanan"];
        kategoriList.forEach((kat) => {
        const container = document.getElementById(kat + "-cards");
        const items = data.filter((item) => item.kategori === kat);
        items.forEach((item) => {
            container.innerHTML += `
                        <div class="col">
                            <div class="card h-100">
                            <img src="${item.img}" class="card-img-top" alt="${item.title}">
                            <div class="card-body">
                                <h5 class="card-title">${item.title}</h5>
                                <p class="card-text">${item.desc}</p>
                                <a href="${item.link}" class="btn btn-warning">Selengkapnya</a>
                            </div>
                            </div>
                        </div>
                        `;
        });
        });
    });
