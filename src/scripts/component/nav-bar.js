class NavBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
      this.innerHTML = `
      <nav>
      <div class="wrapper">
<<<<<<< HEAD
      <div class="logo"><a href="#/SP0011">1%</a></></div>
      <div class="menu">
          <ul>
              <li ><button><a href="#/home">Home</a></button></li>
              <li href="#class"><a href="#/SP0011">Class</a></li>
              <li href="#about"><a>About Us</a></li>
              <li href="" class="btn-sign"><a>Sign In</a></li>
              <li href="" class="btn-login"><a>Login</a></li>
=======
      <div class="logo"><a href="#about-profile">1%</a></div>
      <div class="menu">
          <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#class">Class</a></li>
              <li><a href="#about-profile">About Us</a></li>
              <li class="btn-sign"><a href="">Sign In</a></li>
              <li class="btn-login"><a href="">Login</a></li>
>>>>>>> 11e1639889a08d32b203aad56ac4831e0cc75542
          </ul>
      </div>
  </div>
  </nav>`;
    }
  }
   
  customElements.define('nav-bar', NavBar);