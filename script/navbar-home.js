class NavBarHome extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div class="container">
            <a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="Logo Hakordia 2023"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Beranda</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tentang">Tentang</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tema">Tema dan Logo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#mainevent">Main Event</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#mainevent">Side Event</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#roadto">Road to</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#faq">FAQ</a>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#berita">Berita</a>
                    </li> -->
                    <li class="nav-item">
                        <a class="nav-link" href="#unduh">Unduh</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
      `;
  }
}

customElements.define("nav-bar-home", NavBarHome);
