class NavBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
      this.innerHTML = `
      <nav>
      <div class="wrapper">
      <div class="logo"><a href="#/SP0011">1%</a></></div>
      <div class="menu">
          <ul>
              <li ><button><a href="#/home">Home</a></button></li>
              <li href="#class"><a href="#/SP0011">Class</a></li>
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