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

function createListItem(item) {
  const listItem = document.createElement('li');
  listItem.classList.add('list-item');

  const itemContent = document.createElement('div');
  itemContent.classList.add('item-content');

  listItem.addEventListener('click', () => {
    window.location.href = item.url;
  });

  const image = createImage(item.imageUri, item.title);
  const textContent = createTextContent(item.title, item.description, item.rating);
  const pricing = createPricing(item.pricing);

  itemContent.appendChild(image);
  itemContent.appendChild(textContent);
  itemContent.appendChild(pricing);
  listItem.appendChild(itemContent);

  return listItem;
}

function createImage(imageUri, title) {
  const image = document.createElement('img');
  image.src = imageUri;
  image.alt = title;
  return image;
}

function createTextContent(title, description, rating) {
  const textContent = document.createElement('div');
  textContent.classList.add('text-content');

  const titleElement = document.createElement('h2');
  titleElement.textContent = title;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;

  const ratingElement = createRating(rating);

  textContent.appendChild(titleElement);
  textContent.appendChild(descriptionElement);
  textContent.appendChild(ratingElement);

  return textContent;
}

function createRating(rating) {
  const ratingElement = document.createElement('div');
  ratingElement.classList.add('rating');

  for (let i = 0; i < rating; i++) {
    const star = document.createElement('span');
    star.textContent = '★';
    ratingElement.appendChild(star);
  }

  return ratingElement;
}

function createPricing(pricing) {
  const pricingElement = document.createElement('p');
  pricingElement.textContent = pricing;
  pricingElement.classList.add('pricing');
  return pricingElement;
}

function createListView(data) {
  const listView = document.createElement('ul');
  listView.classList.add('list-view');

  data.forEach(item => {
    const listItem = createListItem(item);
    listView.appendChild(listItem);
  });

  return listView;
}

const listViewElement = createListView(data);
document.body.appendChild(listViewElement);
