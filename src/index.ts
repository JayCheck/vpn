import { Pricing, VPNItem } from './vpn-item';
import data from './assets/data.json';


function createListView(data: VPNItem[]): HTMLUListElement {
  const listView = document.createElement('ul');
  listView.classList.add('list-view');

  data.forEach(item => {
    const listItem = createListItem(item);
    listView.appendChild(listItem);
  });

  return listView;
}

function createListItem(item: VPNItem): HTMLLIElement {
  const listItem = document.createElement('li');
  listItem.classList.add('list-item');

  listItem.addEventListener('click', () => {
    window.location.href = item.url;
  });

  const itemContent = document.createElement('div');
  itemContent.classList.add('item-content');

  const image = createImage(item.imageUri, item.title);
  const textContent = createTextContent(item.title, item.description, item.rating);
  const pricing = createPricing(item.pricing);

  itemContent.appendChild(image);
  itemContent.appendChild(textContent);
  itemContent.appendChild(pricing);

  listItem.appendChild(itemContent);

  return listItem;
}

function createImage(imageUri: string, title: string): HTMLImageElement {
  const image = document.createElement('img');
  image.src = imageUri;
  image.alt = title;
  return image;
}

function createTextContent(title: string, description: string, rating: number)
  : HTMLElement {
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

function createRating(rating: number): HTMLDivElement {
  const ratingElement = document.createElement('div');
  ratingElement.classList.add('rating');

  for (let i = 0; i < rating; i++) {
    const star = document.createElement('span');
    star.textContent = '★';
    ratingElement.appendChild(star);
  }

  return ratingElement;
}

function createPricing(pricing: Pricing): HTMLDivElement {
  const originalPrice = parseFloat(pricing.original);
  const discountedPrice = parseFloat(pricing.discounted);
  const discountPercentage =
    ((originalPrice - discountedPrice) / originalPrice * 100).toFixed(0);

  const pricingElement = document.createElement('div');
  pricingElement.classList.add('pricing');

  const discountElement = document.createElement('div');
  discountElement.classList.add('discount');

  const originalPriceElement = document.createElement('span');
  originalPriceElement.textContent = `$${originalPrice}/mo`;
  originalPriceElement.classList.add('strikethrough');

  const discountedPriceElement = document.createElement('span');
  discountedPriceElement.textContent = `$${discountedPrice}`;
  discountedPriceElement.classList.add('discounted-price');

  const discountPercentElement = document.createElement('span');
  discountPercentElement.textContent = `(-${discountPercentage}%)`;
  discountPercentElement.classList.add('discount-percent');

  discountElement.appendChild(originalPriceElement);
  discountElement.appendChild(discountPercentElement);

  pricingElement.appendChild(discountedPriceElement);
  pricingElement.appendChild(discountElement);

  return pricingElement;
}

const vpnListData: VPNItem[] = data;
const listViewElement = createListView(vpnListData);
document.body.appendChild(listViewElement);
