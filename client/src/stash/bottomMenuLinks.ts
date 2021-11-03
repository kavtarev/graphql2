export interface MobileMenuItem {
    label: string;
    url: string;
  }
  
  export const mobileMenuLinks: MobileMenuItem[] = [
    { label: "Контакты", url: "/page/contacts" },
    { label: "Реклама", url: "/page/advertising-proposal" },
    { label: "Корпоративные блоги", url: "/page/corporate-blog" },
    { label: "Все блоги", url: "/posts/1" },
    { label: "Мероприятия", url: "/page/events" },
  ];
  
  export interface MobileUserMenuItem {
    label: string;
    url: string;
  }
  
  export const mobileUserMenuLinks: MobileUserMenuItem[] = [
    { label: "Политика конфиденциальности", url: "/page/privacy-policy" },
    {
      label: "Политика обработки персональных данных",
      url: "/page/personal-data-policy",
    },
    { label: "Пользовательское соглашение", url: "/page/terms-of-use" },
    {
      label: "Соглашение по платным рассылкам",
      url: "/page/agreement-on-paid-newsletters",
    },
  ];
  
  export interface BottomMenuItem {
    label: string;
    url: string;
  }
  
  export const bottomMenuLinks: BottomMenuItem[] = [
    { label: "Косметичка", url: "/page/contacts" },
    { label: "О flacon", url: "/page/advertising-proposal" },
    { label: "Журнал", url: "/page/events" },
    { label: "Контакты", url: "/page/corporate-blog" },
    { label: "Бренды", url: "/page/terms-of-use" },
    /*  { label: 'Соглашение по платным рассылкам', url: '/page/agreement-on-paid-newsletters' },
      { label: 'Политика конфиденциальности', url: '/page/privacy-policy' },
      {
          label: 'Политика в отношении обработки персональных данных',
          url: '/page/personal-data-policy',
      }, */
    { label: "Медиа-кит", url: "/posts/1" },
  ];
  
  modules/main/