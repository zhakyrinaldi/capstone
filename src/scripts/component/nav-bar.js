class NavBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
      this.innerHTML = `
      <nav>
      <div class="wrapper">
      <div class="logo"><a href="">1%</a></div>
      <div class="menu">
          <ul>
              <li href="#home"><a>Home</a></li>
              <li href="#class"><a>Class</a></li>
              <li href="#about"><a>About Us</a></li>
              <li href="" class="btn-sign"><a>Sign In</a></li>
              <li href="" class="btn-login"><a>Login</a></li>
          </ul>
      </div>
  </div>
  </nav>`;
    }
  }
   
  customElements.define('nav-bar', NavBar);