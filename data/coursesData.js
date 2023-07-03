const vichea = {
  name: 'Nath Vichea',
  avatar: '/static/images/avatar.jpg',
  facebook: 'https://www.facebook.com/vichea',
}

const coursesData = [
  {
    title: 'React JS',
    description: `React JS is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.`,
    imgSrc: '/static/images/courses/reactjs.png',
    href: '/courses/reactjs',
    draft: false,
    price: 19.99,
    salePrice: 9.99,
  },
  {
    title: 'Node JS - Express',
    description: `Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.`,
    imgSrc: '/static/images/courses/nodejs.png',
    href: '/courses/nodejs',
    draft: true,
    price: 19.99,
    salePrice: 9.99,
  },
  {
    title: 'Django',
    description: `Django is a Python-based free and open-source web framework that follows the model–template–views architectural pattern.`,
    imgSrc: '/static/images/courses/django.png',
    href: '/courses/django',
    draft: true,
    price: 49.99,
  },
  {
    title: 'Laravel',
    description: `Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony.`,
    imgSrc: '/static/images/courses/laravel.png',
    href: '/courses/laravel',
    draft: true,
    price: 49.99,
  },
]

export default coursesData
