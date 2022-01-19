const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    footer {
      height: 60px;
      padding: 0 10px;
      list-style: none;
      display: flex;
      flex-shrink: 0;
      justify-content: space-between;
      align-items: center;
      background-color: #B81207;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      margin: 0 15px;
      color: inherit;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #333;
    }
    
    .social-row {
      font-size: 20px;
    }
    
    .social-row li a {
      margin: 0 15px;
    }
    .concello{
      width: 80px;
      margin-right: 150px;
      cursor: pointer;
    }
  </style>
  <footer>
  <nav>
  <ul>
    <li><img class="concello" src="/img/logo.jpg"></li>
    </ul>
    </nav>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);
  
  customElements.define('footer-component', Footer);