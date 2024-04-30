const config = {
  name: "gym name",

  apiMsg:"https://sheetdb.io/api/v1/aup7h1yb0yvlt",

  socialMedia: {
    fb: "https://www.facebook.com/",
    x: "https://www.facebook.com/",
    instagram: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/watch?v=WWn4lfNQy2s",
  },

  location:{ lat: 34.24907283623841, lng: -6.608490190724286 }, // 34.24907283623841, -6.608490190724286

  prices: [
    {
      name: "Lorem, ipsum 1.",
      price: 200,
      description:
        "1-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab mollitia voluptate sequi in odit placeat quasi hic cupiditate reprehenderit voluptatum!",
      title: "Lorem, ipsum",
      btn: "join new",
    },
    {
      name: "Lorem, ipsum 2.",
      price: 600,
      description:
        "2-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab mollitia voluptate sequi in odit placeat quasi hic cupiditate reprehenderit voluptatum!",
      title: "Lorem, ipsum",
      btn: "join new",
    },
    {
      name: "Lorem, ipsum 3.",
      price: 1000,
      description:
        "3-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab mollitia voluptate sequi in odit placeat quasi hic cupiditate reprehenderit voluptatum!",
      title: "Lorem, ipsum",
      btn: "join new",
    },
  ],

  currency: "Dh",

  daysGym: [
    {
      name: "Sunday",
      frenchName: "Dimanche",
      arabicName: "الأحد",
      entryTime: "10:00",
      exitTime: "17:00",
    },
    {
      name: "Monday",
      frenchName: "Lundi",
      arabicName: "الإثنين",
      entryTime: "08:30",
      exitTime: "18:00",
    },
    {
      name: "Tuesday",
      frenchName: "Mardi",
      arabicName: "الثلاثاء",
      entryTime: "08:30",
      exitTime: "18:00",
    },
    {
      name: "Wednesday",
      frenchName: "Mercredi",
      arabicName: "الأربعاء",
      entryTime: "08:30",
      exitTime: "18:00",
    },
    {
      name: "Thursday",
      frenchName: "Jeudi",
      arabicName: "الخميس",
      entryTime: "08:30",
      exitTime: "18:00",
    },
    {
      name: "Friday",
      frenchName: "Vendredi",
      arabicName: "الجمعة",
      entryTime: "16:30",
      exitTime: "22:00",
    },
    {
      name: "Saturday",
      frenchName: "Samedi",
      arabicName: "السبت",
      entryTime: "09:00",
      exitTime: "17:00",
    },
  ],
  about: {
    title:
      "Lorem ipsum dolor sit amet <span>consectetur adipisicing elit.</span>",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aperiam earum saepe et quas enim perspiciatis voluptates, libero sint commodi, consequatur rem vero blanditiis nam aspernatur molestiae vel ad hic.",
    list: [
      "Lorem ipsum dolor sit amet 1",
      "Lorem ipsum dolor sit amet 2",
      "Lorem ipsum dolor sit amet 3",
      
    ],
  },
  services: [
    {
      title: "Lorem, ipsum dolor 1.",
      id: 1,
    },
    {
      title: "Lorem, ipsum dolor 2.",
      id: 2,
    },
    {
      title: "Lorem, ipsum dolor 3.",
      id: 3,
    },
  ],

  titles: {
    services: {
      title: "our <span>services</span>",
      small_title: "what we do",
      id:"services"
    },
    about: {
      title: "about <span>ipsum</span>",
      small_title: "about",
      id:"about"
    },
    prices: {
      title: "choose your <span>pricing</span> plan",
      small_title: "our pricing",
      id:"prices"

    },
    comments: {
      title: "comments <span>ipsum</span>",
      small_title: "comments",
      id:"comments"
    },
    workingTimings: {
      title: "Timings <span>ipsum</span>",
      small_title: "Timings",
      id:"workingTimings"
    },
  },

  info:{
    address:"Apt. 599 Erbelegasse 80a, Heroldheim, HE 35439",
    phone:"0605805993",
    email:"mehdikidai@gmail.com",
    titleFooter:"Lorem, <span>ipsum.</span>"
  },
  alert:{
    successMsg:'safi ra wsl .',
    errorMsg:'mawslch .'
  }
};



export default config;
