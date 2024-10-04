class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div class="container">
            <a class="navbar-brand" href="index.html"><img src="../images/logo.png" alt="Logo Hakordia 2023"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="../index.html">Beranda</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../index.html#tentang">Tentang</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../index.html#tema">Tema dan Logo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../index.html#mainevent">Main Event</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Side Event</a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="../index.html#sideevent">Stranas Pemberantasan Korupsi</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="https://aclc.kpk.go.id/tapaksiapi-2023" target="_blank">TAPAKSIAPI 2023</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="../index.html#sideevent">Seminar Nasional Perempian Indonesia Antikorupsi</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="../index.html#sideevent">Diskusi Komite Advokasi Daerah</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="../index.html#sideevent">JAGA in Action</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="../side-event/lelang.html">Lelang Barang Gratifikasi dan Rampasan</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                         <a class="nav-link" href="../index.html#jadwal">Jadwal</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../index.html#denah">Denah</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../index.html#roadto">Road to</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../index.html#faq">FAQ</a>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="../index.html#berita">Berita</a>
                    </li> -->
                    <li class="nav-item">
                        <a class="nav-link" href="../index.html#unduh">Unduh</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
      `;
  }
}

customElements.define("nav-bar", NavBar);
