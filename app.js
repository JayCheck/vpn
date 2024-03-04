const data = [
  {
    "imageUri": "assets/images/express.png",
    "title": "Express VPN",
    "description": "Best VPN ever",
    "pricing": "3.45$/month",
    "rating": 5,
    "url": "https://www.expressvpn.com/"
  },
  {
    "imageUri": "assets/images/surfshark.png",
    "title": "SurfShark",
    "description": "Best VPN ever",
    "pricing": "3.82$/month",
    "rating": 4,
    "url": "https://get.surfshark.net/aff_c?offer_id=926&aff_id=29693"
  },
  {
    "imageUri": "assets/images/ipvanish.webp",
    "title": "IPVanish",
    "description": "Best VPN ever",
    "pricing": "4.45$/month",
    "rating": 4,
    "url": "https://affiliate.ipvanish.com/aff_c?offer_id=1&aff_id=2727"
  }
];


function createListView() {
  const listView = document.createElement('ul');
  listView.classList.add('list-view');

  data.forEach(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    const itemContent = document.createElement('div');
    itemContent.classList.add('item-content');

    const image = document.createElement('img');
    image.src = item.imageUri;
    image.alt = item.title;

    const textContent = document.createElement('div');
    textContent.classList.add('text-content');

    const title = document.createElement('h2');
    title.textContent = item.title;

    const description = document.createElement('p');
    description.textContent = item.description;

    const rating = document.createElement('div');
    rating.classList.add('rating');

    for (let i = 0; i < item.rating; i++) {
      const star = document.createElement('span');
      star.textContent = '★';
      rating.appendChild(star);
    }

    listItem.addEventListener('click', () => {
      window.location.href = item.url;
    });

    const pricing = document.createElement('p');
    pricing.textContent = item.pricing;
    pricing.classList.add('pricing');

    itemContent.appendChild(image);

    textContent.appendChild(title);
    textContent.appendChild(description);
    textContent.appendChild(rating);

    itemContent.appendChild(textContent);

    itemContent.appendChild(pricing);

    listItem.appendChild(itemContent);
    listView.appendChild(listItem);
  });

  return listView;
}

const listViewElement = createListView();
document.body.appendChild(listViewElement);
