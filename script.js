const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");
const artistGrid = document.getElementById("artist-grid");
const emptyState = document.getElementById("empty-state");
const FALLBACK_IMAGE = "./src/assets/icons/logo-spotify.png";

let debounceTimeout;

function showPlaylists() {
  resultPlaylist.classList.remove("hidden");
  resultArtist.classList.add("hidden");
  emptyState.classList.add("hidden");
}

function renderArtists(artists) {
  artistGrid.innerHTML = "";

  if (!artists.length) {
    emptyState.textContent = "Nenhum artista encontrado.";
    emptyState.classList.remove("hidden");
    resultArtist.classList.remove("hidden");
    resultPlaylist.classList.add("hidden");
    return;
  }

  artists.forEach((artist) => {
    const artistCard = document.createElement("article");
    artistCard.className = "artist-card";

    artistCard.innerHTML = `
      <div class="card-img">
        <img src="${artist.urlImg || FALLBACK_IMAGE}" alt="${artist.name}" class="artist-img" />
        <div class="play">
          <span class="fa fa-solid fa-play" aria-hidden="true"></span>
        </div>
      </div>
      <div class="card-text">
        <span class="artist-name">${artist.name}</span>
        <span class="artist-categorie">Artista</span>
      </div>
    `;

    const artistImage = artistCard.querySelector("img");
    artistImage.onerror = () => {
      artistImage.src = FALLBACK_IMAGE;
    };

    artistGrid.appendChild(artistCard);
  });

  resultPlaylist.classList.add("hidden");
  resultArtist.classList.remove("hidden");
  emptyState.classList.add("hidden");
}

function requestApi(searchTerm, genre) {
  const url = genre
    ? `http://localhost:3000/artists?genre=${encodeURIComponent(genre)}`
    : `http://localhost:3000/artists?name_like=${encodeURIComponent(searchTerm)}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao buscar artistas.");
      }

      return response.json();
    })
    .then((result) => renderArtists(result))
    .catch(() => {
      artistGrid.innerHTML = "";
      emptyState.textContent = "Não foi possível carregar os artistas no momento.";
      emptyState.classList.remove("hidden");
      resultPlaylist.classList.add("hidden");
      resultArtist.classList.remove("hidden");
    });
}

function handleSearch() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  clearTimeout(debounceTimeout);

  debounceTimeout = setTimeout(() => {
    if (!searchTerm) {
      showPlaylists();
      return;
    }

    requestApi(searchTerm);
  }, 300);
}

function handleSessionCardClick(event) {
  event.preventDefault();
  const card = event.currentTarget;
  const searchTerm = card.dataset.search;
  const genre = card.dataset.genre;

  if (!searchTerm) {
    return;
  }

  searchInput.value = searchTerm;
  requestApi(searchTerm, genre);
}

const sessionCards = document.querySelectorAll(".offer__list-item a.cards");
sessionCards.forEach((card) => {
  card.addEventListener("click", handleSessionCardClick);
});

searchInput.addEventListener("input", handleSearch);
showPlaylists();
