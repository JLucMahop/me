// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Here are some repositories of projects I worked on, keep me in touch for any information.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-understanding-virtualization-and-hypervisors-a-technical-introduction",
        
          title: "Understanding Virtualization and Hypervisors: A Technical Introduction",
        
        description: "A beginner-friendly yet technically rigorous introduction to virtualization and hypervisor architectures, with diagrams and references.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/virtualization-and-hypervisors/";
          
        },
      },{id: "post-a-technical-comparison-of-x86-and-arm-architectures",
        
          title: "A Technical Comparison of x86 and ARM Architectures",
        
        description: "A detailed comparative study of x86 and ARM CPU architectures — instruction set design, microarchitecture, power-performance trade-offs, and ecosystem evolution.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/x86-vs-arm-architectural-analysis/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-joined-the-krakos-team-as-phd-student",
          title: 'I joined the KrakOS Team as PhD Student',
          description: "",
          section: "News",},{id: "news-presenting-at-the-defios-my-project-zeroswap-sparkles-smile",
          title: 'Presenting at the DefiOS my project zeroswap! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-speaker-at-the-vmpsec-sparkles-smile",
          title: 'Speaker at the VMPSec :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-gps-tracking-system",
          title: 'GPS Tracking system',
          description: "Builing an entire GPS tracking system using arduino",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-minidb",
          title: 'miniDB',
          description: "Building a simple and efficient database management system",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-mahalloc",
          title: 'mahalloc',
          description: "Building my own heap memory manager",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%68%6F%70%6E%67%6F%73%6C%75%63@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
