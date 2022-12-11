class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav>
      <div class="wrapper">
      <div class="logo"><a href="./form.html">1%</a></></div>
      <div class="menu">
          <ul>
              <li><button><a href="#/home">Home</a></button></li>
              <li><a href="./form.html">Ulasan Kami</a></li>
          </ul>
      </div>
  </div>
  </nav>`;
  }
}

customElements.define('nav-bar', NavBar);
