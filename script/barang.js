let barang = {
  data: [
    {
      barangName: "Baju Batik De Chantique",
      category: "fashion",
      src: "../images/barang-lelang/barang-gratif-1.jpg",
    },
    {
      barangName: "Alat Kopi",
      category: "perkakas",
      src: "../images/barang-lelang/barang-gratif-2.jpg",
    },
    {
      barangName: "Kompor Induksi & Wajan",
      category: "perkakas",
      src: "../images/barang-lelang/barang-gratif-3.jpg",
    },
    {
      barangName: "Kain Batik Iwan Tirta",
      category: "fashion",
      src: "../images/barang-lelang/barang-gratif-4.jpg",
    },
    {
      barangName: "Lanyard Coach",
      category: "fashion",
      src: "../images/barang-lelang/barang-gratif-5.jpg",
    },
    {
      barangName: "Parfume Jour D'Hermes",
      category: "perawatan",
      src: "../images/barang-lelang/barang-gratif-6.jpg",
    },
    {
      barangName: "Parfume Chanel",
      category: "perawatan",
      src: "../images/barang-lelang/barang-gratif-7.jpg",
    },
    {
      barangName: "Jam Tangan Tag Heuer",
      category: "fashion",
      src: "../images/barang-lelang/barang-gratif-8.jpg",
    },
    {
      barangName: "Kain Batik Concept",
      category: "fashion",
      src: "../images/barang-lelang/barang-gratif-9.jpg",
    },
    {
      barangName: "Tas burberry",
      category: "fashion",
      src: "../images/barang-lelang/barang-gratif-10.jpg",
    },
    {
      barangName: "Helm JPX",
      category: "otomotif",
      src: "../images/barang-lelang/barang-gratif-11.jpg",
    },
    {
      barangName: "Tablet Huawei",
      category: "elektronik",
      src: "../images/barang-lelang/barang-gratif-12.jpg",
    },
  ],
};

for (let i of barang.data) {
  document.getElementById("card").innerHTML += `
  <div class="card m-3 ${i.category}" style="width: 18rem;">
    <img src="${i.src}" class="card-img-top mt-3" alt="...">
    <div class="card-body">
      <p class="card-text">${i.barangName}</p>
    </div>
  </div>
  `;
}
