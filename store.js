const categories = [
  { id: 'c1', description: 'Ford' },
  { id: 'c2', description: 'Dodge' },
  { id: 'c3', description: 'Honda' },
  { id: 'c4', description: 'Toyota' }
];

const products = [
  {
    id: 'F1',
    name: 'Ford F150:',
    description: 'Pick up truck with strong pulling power built for all of your trucking needs.',
    price: 5500000, // $55.000
    discontinued: false,
    categories: ['c1']
  },
  {
    id: 'D1',
    name: 'Ram 1500:',
    description: 'Heavy duty pickup truck with a sleek design',
    price: 6000000, // $60.000
    discontinued: false,
    categories: ['c2']
  },
  {
    id: 'H1',
    name: 'Honda Civic:',
    description: 'Great starter car long durability',
    price: 2300000, // $23.000
    discontinued: false,
    categories: ['c3']
  },
  {
    id: 'T1',
    name: 'Toyota Corolla:',
    description: 'Great starter car long durability',
    price: 1900000, // $19.000
    discontinued: false,
    categories: ['c4']
  },
  {
    id: 'F2',
    name: 'Super duty:',
    description: 'Heavy utility truck built for industrial and personal needs.',
    price: 7500000, // $75.000
    discontinued: false,
    categories: ['c1']
  },
  {
    id: 'D2',
    name: 'Dodge Durango:',
    description: 'Large SUV with a HEMI engine',
    price: 4500000, // $45.000
    discontinued: false,
    categories: ['c2']
  },
  {
    id: 'H2',
    name: 'Honda CRV:',
    description: 'Mid sized SUV',
    price: 3900000, // $39.000
    discontinued: false,
    categories: ['c3']
  },
  {
    id: 'T2',
    name: 'Toyota RAV4:',
    description: 'Mid Sized SUV',
    price: 3900000, // $39.000
    discontinued: false,
    categories: ['c4']
  },
  {
    id: 'F3',
    name: 'Ford Escape:',
    description: 'Mid sized SUV built for daily life great for children with a sleek design',
    price: 3900000, // $39.000
    discontinued: false,
    categories: ['c1']
  },
  {
    id: 'D3',
    name: 'Dodge charger:',
    description: 'Sporty sedan with a lot of torque',
    price: 3400000, // $34.000
    discontinued: false,
    categories: ['c2']
  },
  {
    id: 'H3',
    name: 'Honda Passport:',
    description: 'Mid Sized SUV with more luxury than the CRV',
    price: 4200000, // $42.000
    discontinued: false,
    categories: ['c3']
  },
  {
    id: 'T3',
    name: 'Toyota Highlander:',
    description: 'Large SUV can drive offroad',
    price: 4700000, // $47.000
    discontinued: false,
    categories: ['c4']
  },
  {
    id: 'F4',
    name: 'Ford Explorer:',
    description: 'Large SUV great for families can also be customized for police use',
    price: 4500000, // $45.000
    discontinued: false,
    categories: ['c1']
  },
  {
    id: 'D4',
    name: 'Dodge Challenger:',
    description: 'Sporty american muscle car with a sleek interior',
    price: 3900000, // $39.000
    discontinued: false,
    categories: ['c2']
  },
  {
    id: 'H4',
    name: 'Honda Pilot:',
    description: 'Large sized SUV with a V8 engine',
    price: 5100000, // $51.000
    discontinued: false,
    categories: ['c3']
  },
  {
    id: 'T4',
    name: 'Toyota Tacoma:',
    description: 'Pick up truck with luxury',
    price: 4400000, // $44.000
    discontinued: false,
    categories: ['c4']
  },
  {
    id: 'F5',
    name: 'Ford Mustang:',
    description: 'Fast sports car, Great if you want to outrun police',
    price: 5000000, // $50.000
    discontinued: false,
    categories: ['c1']
  },
  {
    id: 'D5',
    name: 'Dodge Viper:',
    description: 'American muscle with a hint of japanese design',
    price: 7000000, // $70.000
    discontinued: false,
    categories: ['c2']
  },
  {
    id: 'H5',
    name: 'Honda Civic type R:',
    description: 'Sports car with long durability and comfort',
    price: 4200000, // $42.000
    discontinued: false,
    categories: ['c3']
  },
  {
    id: 'T5',
    name: 'Toyota Supra',
    description: 'Sports car with a low ride and great comfort',
    price: 9100000, // $91.000
    discontinued: true,
    categories: ['c4']
  }
];

// Function to create category button
function createCategoryButtons() {
  const menu = document.getElementById('menu');
  categories.forEach((category, index) => {
    const button = document.createElement('button');
    button.textContent = category.description;
    button.addEventListener('click', () => showProductList(category));
    menu.appendChild(button);
    button.dataset.categoryId = category.id; // Store category ID as a data attribute
  });
}

// Function to show product list for category
function showProductList(category) {
  const selectedCategoryTitle = document.getElementById('selectedCategoryTitle');
  selectedCategoryTitle.textContent = category.description;

  const tbody = document.getElementById('productList');
  tbody.innerHTML = '';

  const filteredProducts = products.filter((product) => {
    return product.categories.includes(category.id) && !product.discontinued;
  });

  filteredProducts.forEach((product) => {
    const row = document.createElement('tr');
    row.addEventListener('click', () => {
      console.log(product);
    });

    const nameCell = document.createElement('td');
    nameCell.textContent = product.name;

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = product.description;

    const priceCell = document.createElement('td');
    priceCell.textContent = formatCurrency(product.price);

    row.appendChild(nameCell);
    row.appendChild(descriptionCell);
    row.appendChild(priceCell);

    tbody.appendChild(row);
  });
}

// function to format currency
function formatCurrency(price) {
  const formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD'
  });
  return formatter.format(price / 100); // Convert cents to dollars and format as currency
}

// Run function when the page is loaded
window.addEventListener('load', createCategoryButtons);

  