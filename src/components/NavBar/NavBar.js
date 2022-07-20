import './NavBar.css';

function NavBar () {
    return (
        <nav class="navbar navbar-expand-lg bg-secondary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Nombre E-Comerce</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Enlace 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Enlace 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Enlace 3</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar