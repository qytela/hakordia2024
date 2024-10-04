class FooterBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <footer>
        <div class="footer-top text-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 text-center">
                        <img src="images/logo_footer.png" style="width: 300px !important; margin-bottom: 20px;" alt="">
                        <!-- <img src="images/logo_footer.png" alt=""> -->
                        <p class="mb-4">Sekretariat Panitia:<br>Gd. Komisi Pemberantasan Korupsi<br>Jl. Kuningan Persada Kav.4, Jakarta Selatan</p>
                        <div class="col-auto social-icons">
                            <a href="https://www.facebook.com/KomisiPemberantasanKorupsi" target="_blank"><i class='bx bxl-facebook'></i></a>
                            <a href="https://www.instagram.com/official.kpk" target="_blank"><i class='bx bxl-instagram'></i></a>
                            <a href="https://www.youtube.com/@HUMASKPK" target="_blank"><i class='bx bxl-youtube'></i></a>
                            <a href="https://twitter.com/KPK_RI" target="_blank"><i class='bx bxl-twitter'></i></a>
                            <!-- <a href="mailto:hakordia2022@kpk.go.id"><i class='bx bxs-envelope'></i></a> -->
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom text-center">
            <p class="mb-0">Copyright KPK RI 2024. All rights Reserved</p>
        </div>
    </footer>
      `;
  }
}

customElements.define("footer-bar", FooterBar);
