export const create_header = () => {
  const header = document.createElement("header");
  header.innerHTML = `
      <nav>
        <h1>
          <a href="/src/pages/home/index.html">Moon:s</a>
        </h1>
        <ul>
          <li>
            <a href="/src/pages/about/index.html">About</a>
          </li>
          <li>
            <a href="/src/pages/service/index.html">Service</a>
          </li>
          <li>
            <a href="/src/pages/media/index.html">Media</a>
          </li>
        </ul>
      </nav>
    `;
    return header;
};

export const init_header = ()=>{
    const header_container = document.querySelector("#header-container");

    console.log(header_container)
    if(header_container){
        header_container.appendChild(create_header());
    }
}