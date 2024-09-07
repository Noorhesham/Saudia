window.addEventListener("scroll", function () {
  const scrollValue = 50;
  const header = document.querySelector("header");
  const logo = document.querySelector("#logo");
  const links = document.querySelectorAll(".nav_link");
  const signupButton = document.querySelector(".signup");
  header.classList.toggle("sticky", window.scrollY > scrollValue);
  if (window.scrollY > scrollValue) {
    logo.src = "img/svgviewer-output.svg";
    signupButton.style.backgroundColor = "#78006e";
    signupButton.style.color = "white";
    links.forEach((link) => (link.style.color = `black`));
  } else {
    logo.src = "img/imagewhite.svg";
    signupButton.style.backgroundColor = "white";
    signupButton.style.color = "#757575";
    links.forEach((link) => (link.style.color = `white`));
  }
});

window.addEventListener("load", () => {
  const menuItems = document.querySelectorAll(".menu_item");
  let hoverMenu; // Variable to keep track of the currently displayed hover menu
  let timeoutId; // To delay the removal of the hover menu

  menuItems.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      e.stopPropagation();
      removeHoverMenus(); // Remove any existing hover menus when mouse over a new item

      // Create and insert the hover menu based on the data attribute
      if (item.dataset.menu === "1") {
        hoverMenu = createHoverMenu([
          { text: "عسير", img: "/img/menu1.webp" },
          { text: "جدة", img: "/img/menu2.webp" },
          { text: "الطائف", img: "/img/menu3.webp" },
          { text: "الرياض", img: "/img/menu3.webp" },
          { text: "العلا", img: "/img/menu3.webp" },
          { text: "البارحة", img: "/img/menu3.webp" },
          { text: "عرض الكل", all: true },
        ]);
      } else if (item.dataset.menu === "2") {
        hoverMenu = createHoverMenu([
          { text: "مواقع طبيعية", img: "/img/menu1.webp" },
          { text: "التسوق", img: "/img/menu1.webp" },
          { text: "الخيارات الترفيهية", img: "/img/menu1.webp" },
          {
            text: "اماكن تراثية وتاريخية",
            img: "/img/menu1.webp",
          },
          { text: "عرض الكل", all: true },
        ]);
      } else if (item.dataset.menu === "3") {
        hoverMenu = createHoverMenu([
          { text: " حول السعودية", img: "/img/menu1.webp" },
          { text: "دليل السفر", img: "/img/menu1.webp" },
          { text: " الوصول الي وجهتك", img: "/img/menu1.webp" },
          { text: "عرض الكل", all: true },
        ]);
      }

      item.insertAdjacentElement("afterend", hoverMenu);

      hoverMenu.addEventListener("mouseleave", (e) => {
        e.stopPropagation();
        removeHoverMenus();
      });
    });
  });

  function removeHoverMenus() {
    const existingMenus = document.querySelectorAll(".menu_item_hover");
    existingMenus.forEach((menu) => {
      setTimeout(() => {
        menu.style.opacity = "0";
      }, 100);
      setTimeout(() => {
        menu.remove();
      }, 500);
    });
  }

  function createLink(text, img, menuList, image, all) {
    const a = document.createElement("a");
    a.className = `text-gray-700 cursor-pointer text-base font-medium ml-auto pr-2  border-r-2 border-gray-400`;
    if (all) a.style.color = "#78006e";
    a.textContent = text;
    menuList.appendChild(a);

    // Smooth opacity change on hover
    a.addEventListener("mouseover", () => {
      image.style.transition = "opacity 0.3s ease"; // Transition for opacity
      image.style.opacity = "0"; // Fade out

      setTimeout(() => {
        image.src = img; // Change the source dynamically
        image.style.opacity = "1"; // Fade in the new image
      }, 300); // Wait for the fade-out animation
    });
  }

  // Function to create a hover menu dynamically
  function createHoverMenu(menuItems) {
    const menuHover = document.createElement("div");
    menuHover.className = "menu_item_hover ";
    menuHover.style.opacity = "0";
    setTimeout(() => {
      menuHover.style.opacity = "1";
    }, 300);
    const menuContent = document.createElement("div");
    menuContent.className = "menu_content";
    const menuList = document.createElement("div");
    let menuList2 = null;
    menuList.className = "flex flex-col items-end gap-4";
    if (menuItems.length > 2) {
      menuList2 = document.createElement("div");
      menuList2.className = "flex flex-col items-end gap-4";
    }
    const menuImg = document.createElement("div");
    menuImg.className = "menu_img";
    const img = document.createElement("img");
    img.className = "w-full h-full transition-opacity duration-300"; // Added transition class
    img.src = menuItems[0].img; // Initial image source
    menuImg.appendChild(img);

    menuItems.forEach((menuItem, i) => {
      if (i > 2)
        createLink(menuItem.text, menuItem.img, menuList, img, menuItem.all);
      else
        createLink(menuItem.text, menuItem.img, menuList2, img, menuItem.all);
    });

    menuHover.appendChild(menuImg);
    menuContent.appendChild(menuList);
    if (menuList2) menuContent.appendChild(menuList2);
    menuHover.appendChild(menuContent);

    return menuHover;
  }
  //hompage slider
  const swiper = new Swiper(".swiper1", {
    direction: "horizontal",
    speed: 800,
    loop: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    pagination: {
      el: ".swiper-pagination-main",
      clickable: true,
      renderBullet: function (index, className) {
        if (index === 2)
          return `<button class="pagination  ${className}" style="text-white;">
           سجّل وعيش المتعة مع مكافآت السعودية!
               </button>`;
        if (index === 1)
          return `<button class="pagination ${className}" style="text-white;">
             سجّل وعيش المتعة مع مكافآت السعودية!
                </button>`;
        if (index === 0)
          return `<button class="pagination ${className}" style="text-white;">
   السعودية.. تراها أجمل 
              </button>`;
      },
    },
    slidesPerView: 1,
  });

  // Second card slider
  const swiper2 = new Swiper(".mySwiper", {
    slidesPerView: 3.3,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      touchMoveOpposite(event) {
        this.params.speed = 400;
      },
      touchEnd(event) {
        this.params.speed = 800;
      },
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

  // Third card slider
  const swiper3 = new Swiper(".swiper3", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 800,
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
    on: {
      touchMoveOpposite(event) {
        this.params.speed = 400;
      },
      touchEnd(event) {
        this.params.speed = 800;
      },
    },
    breakpoints: {
      768: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.add("hidden");
  });
  const firstTabContent = document.querySelector('[data-slideSection="1"]');
  const firstTab = document.querySelector('[data-tab="1"]');
  setTimeout(() => {
    firstTab.classList.add("active");
    firstTab.style.opacity = "1";
  }, 100);
  firstTabContent.classList.remove("hidden");
  firstTabContent.style.opacity = "1";

  document.querySelectorAll(".tab_item").forEach((tab) => {
    tab.addEventListener("click", function () {
      document
        .querySelectorAll(".tab_item")
        .forEach((item) => item.classList.remove("active"));

      document.querySelectorAll(".tab-content").forEach((content) => {
        content.style.opacity = "0";
        setTimeout(() => {
          content.classList.add("hidden");
        }, 100);
      });

      setTimeout(() => {
        this.classList.add("active");
        this.style.opacity = "1";
      }, 100);

      const tabNumber = this.dataset.tab;

      const newContent = document.querySelector(
        '[data-slideSection="' + tabNumber + '"]'
      );
      console.log(newContent);

      setTimeout(() => {
        newContent.classList.remove("hidden");
        newContent.style.opacity = "1";
      }, 100);
    });
  });
});
