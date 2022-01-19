const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    nav {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:  #B81207;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      font-weight: 700;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
    .concello{
      width: 50px;
      margin-right: 150px
    }
  </style>
  <header>
    <nav>
      <ul>
        <li><img class="concello" src="/img/logo.jpg"></li>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="citas.html">Citas</a></li>
        <li><a href="empresas.html">Empresas</a></li>
        <li><a href="personas.html">Persoas</a></li>
        <li><a href="usuario.html">Usuario</a></li>
      </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
