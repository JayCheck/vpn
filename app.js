const data = [
  {
    "imageUri": "assets/images/surfshark.png",
    "title": "SurfShark",
    "description": "A single subscription works simultaneously on multiple devices",
    "pricing": {
      "original": "15.95",
      "discounted": "2.29"
    },
    "rating": 4,
    "url": "https://get.surfshark.net/aff_c?offer_id=926&aff_id=29693"
  },
  {
    "imageUri": "assets/images/ipvanish.webp",
    "title": "IPVanish",
    "description": "Fast speeds, verified no-traffic-logs, and apps for all devices.",
    "pricing": {
      "original": "12.99",
      "discounted": "2.75"
    },
    "rating": 4,
    "url": "https://affiliate.ipvanish.com/aff_c?offer_id=1&aff_id=2727"
  },
  {
    "imageUri": "assets/images/proton.png",
    "title": "ProtonVPN",
    "description": "High speed Swiss VPN. Thousands of servers 60+ countries.",
    "pricing": {
      "original": "9.99",
      "discounted": "4.99"
    },
    "rating": 4,
    "url": "https://go.getproton.me/aff_c?offer_id=26&aff_id=7343"
  },

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
  const originalPrice = pricing.original;
  const discountedPrice = pricing.discounted;
  const discountPercentage = (100 * (originalPrice - discountedPrice) / originalPrice).toFixed(0);

  const pricingElement = document.createElement('div');
  pricingElement.classList.add('pricing')

  const discountElement = document.createElement('div');
  discountElement.classList.add('discount')

  const originalPriceElement = document.createElement('span');
  originalPriceElement.textContent = '$' + originalPrice;
  originalPriceElement.classList.add('strikethrough');

  const discountedPriceElement = document.createElement('span');
  discountedPriceElement.textContent = '$' + discountedPrice;
  discountedPriceElement.classList.add('discounted-price');

  const discountPercentElement = document.createElement('span');
  discountPercentElement.textContent = '(-' + discountPercentage + '%)';
  discountPercentElement.classList.add('discount-percent');

  discountElement.appendChild(originalPriceElement);
  discountElement.appendChild(discountPercentElement);

  pricingElement.appendChild(discountedPriceElement);
  pricingElement.appendChild(discountElement);

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
