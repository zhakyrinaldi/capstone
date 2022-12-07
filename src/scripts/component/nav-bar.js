class NavBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
      this.innerHTML = `
      <nav>
      <div class="wrapper">
      <div class="logo"><a href="#about-profile">1%</a></div>
      <div class="menu">
          <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#class">Class</a></li>
              <li><a href="#about-profile">About Us</a></li>
              <li class="btn-sign"><a href="">Sign In</a></li>
              <li class="btn-login"><a href="">Login</a></li>
          </ul>
      </div>
  </div>
  </nav>`;
    }
  }
   
  customElements.define('nav-bar', NavBar);