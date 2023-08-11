const logos = [
    '/images/3way.webp',
    '/images/yestack.png',
    '/images/3way.webp',
    '/images/yestack.png',
    '/images/3way.webp',
    '/images/yestack.png',
    '/images/web32.png',
    // Add more logo URLs as needed
  ];
  
  function createElement(tag, attributes) {
    const element = document.createElement(tag);
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
    return element;
  }
  
  function createCarousel() {
    const container = createElement('div', {
      style: 'text-align: center; margin-top: 50px;', // Center the content and add some margin
    });
  
    const title = createElement('h2', {
      textContent: 'Community Partners',
      style: 'color: yellow; font-size: 24px; margin-bottom: 20px;', // Set title color to yellow and add margin
    });
    container.appendChild(title);
  
    const carouselContainer = createElement('div', {
      class: 'carousel-container',
      style: 'display: flex; justify-content: space-between; max-width: 1000px; margin: 0 auto; overflow: hidden; position: relative;',
    });
  
    const carouselItems = logos.map((logoUrl) => {
      const carouselItem = createElement('div', {
        class: 'carousel-item',
        style: 'min-width: 100%; padding: 10px; box-sizing: border-box; flex: 0 0 auto; transition: transform 0.5s ease;',
      });
  
      const card = createElement('div', {
        class: 'carousel-card',
        style: 'background-color: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); overflow: hidden;',
      });
  
      const img = createElement('img', {
        src: logoUrl,
        alt: 'Logo',
        style: 'display: block; width: 100%; height: auto; max-width: 100%; max-height: 200px; object-fit: cover;',
      });
  
      card.appendChild(img);
      carouselItem.appendChild(card);
      carouselContainer.appendChild(carouselItem);
  
      return carouselItem;
    });
  
    const prevArrow = createElement('div', {
      class: 'carousel-arrow prev',
      style: 'position: absolute; top: 50%; left: 10px; transform: translateY(-50%); cursor: pointer; padding: 10px; background-color: rgba(255, 255, 255, 0.8); border-radius: 50%; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);',
      innerHTML: '&#10094;',
    });
  
    const nextArrow = createElement('div', {
      class: 'carousel-arrow next',
      style: 'position: absolute; top: 50%; right: 10px; transform: translateY(-50%); cursor: pointer; padding: 10px; background-color: rgba(255, 255, 255, 0.8); border-radius: 50%; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);',
      innerHTML: '&#10095;',
    });
  
    prevArrow.addEventListener('click', showPrevLogo);
    nextArrow.addEventListener('click', showNextLogo);
  
    container.appendChild(carouselContainer);
    container.appendChild(prevArrow);
    container.appendChild(nextArrow);
  
    document.body.appendChild(container);
  
    let currentIndex = 0;
  
    function showSlide(index) {
      carouselItems.forEach((item, i) => {
        const offset = (i - index) * 100;
        item.style.transform = `translateX(${offset}%)`;
      });
      currentIndex = index;
    }
  
    function showNextLogo() {
      const nextIndex = (currentIndex + 1) % carouselItems.length;
      showSlide(nextIndex);
    }
  
    function showPrevLogo() {
      const prevIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showSlide(prevIndex);
    }
  
    function startCarousel() {
      setInterval(showNextLogo, 3000); // Adjust the interval (in milliseconds) for automatic animation
    }
  
    startCarousel();
  }
  
  createCarousel();
  