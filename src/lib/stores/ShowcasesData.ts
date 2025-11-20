import type {
  PortfolioTitleType,
  PortfolioDataType,
} from '../../types/showcases.d.ts'

export function getPortfolioTitle(i18n: any): PortfolioTitleType[] {
  return [
    {
      gern: 'All',
      name: i18n.t('all'),
      activetab: [true, false, false, false, false],
    },
    {
      gern: 'App',
      name: i18n.t('app'),
      activetab: [false, true, false, false, false],
    },
    {
      gern: 'Templates',
      name: i18n.t('templates'),
      activetab: [false, false, true, false, false],
    },
    {
      gern: 'Games',
      name: i18n.t('games'),
      activetab: [false, false, false, true, false],
    },
  ]
}

export function getPortfolioData(i18n: any): PortfolioDataType[] {
  return [
    {
      all: [
        {
          title: i18n.t('reactjs'),
          projectName: i18n.t('projectName0'),
          pic: 'bg-DigitalRepair',
          githubLink: 'https://github.com/mehdi-keramati/RepairDigitalFactory',
          viewOnline: 'https://mehdi-keramati.github.io/RepairDigitalFactory/',
        },
        {
          title: i18n.t('app'),
          projectName: i18n.t('projectName1'),
          pic: 'bg-dashboard',
          githubLink: 'https://github.com/mehdi-keramati/AdminDashboard',
          viewOnline: 'https://mehdi-keramati.github.io/AdminDashboard',
        },
        {
          title: i18n.t('app'),
          projectName: i18n.t('projectName2'),
          pic: 'bg-weatherforecast',
          githubLink: 'https://github.com/mehdi-keramati/weather_forecast',
          viewOnline: 'https://mehdi-keramati.github.io/weather_forecast',
        },
        {
          title: i18n.t('app'),
          projectName: i18n.t('projectName3'),
          pic: 'bg-musicPlayer',
          githubLink: 'https://github.com/mehdi-keramati/MUSICPLAYER',
          viewOnline: 'https://mehdi-keramati.github.io/MUSICPLAYER',
        },
        {
          title: i18n.t('app'),
          projectName: i18n.t('projectName4'),
          pic: 'bg-alannews',
          githubLink: 'https://github.com/mehdi-keramati/AlanNews',
          viewOnline: 'https://mehdi-keramati.github.io/AlanNews',
        },
        {
          title: i18n.t('app'),
          projectName: i18n.t('projectName5'),
          pic: 'bg-cryptocurrency',
          githubLink: 'https://github.com/mehdi-keramati/crypto-currency',
          viewOnline: 'https://mehdi-keramati.github.io/crypto-currency',
        },

        {
          title: i18n.t('reactjs'),
          projectName: i18n.t('projectName6'),
          pic: 'bg-legends_landingpage',
          githubLink: 'https://github.com/mehdi-keramati/legends-landingpage',
          viewOnline: 'https://mehdi-keramati.github.io/legends-landingpage',
        },
        {
          title: i18n.t('reactjs'),
          projectName: i18n.t('projectName7'),
          pic: 'bg-GPT3',
          githubLink: 'https://github.com/mehdi-keramati/GPT-3',
          viewOnline: 'https://mehdi-keramati.github.io/GPT-3',
        },
        {
          title: i18n.t('reactjs'),
          projectName: i18n.t('projectName8'),
          pic: 'bg-business',
          githubLink: 'https://github.com/mehdi-keramati/business',
          viewOnline: 'https://mehdi-keramati.github.io/business',
        },
        {
          title: i18n.t('reactjs'),
          projectName: i18n.t('projectName9'),
          pic: 'bg-covid19',
          githubLink: 'https://github.com/mehdi-keramati/covid19',
          viewOnline: 'https://mehdi-keramati.github.io/covid19',
        },
        {
          title: i18n.t('reactjs'),
          projectName: i18n.t('projectName10'),
          pic: 'bg-littleProject',
          githubLink: 'https://github.com/mehdi-keramati/LittlePorject-ReactJs',
          viewOnline: 'https://littleproject-reactjs.netlify.app',
        },
        {
          title: i18n.t('vanillajs'),
          projectName: i18n.t('projectName11'),
          pic: 'bg-bootstrapTemplate',
          githubLink: 'https://github.com/mehdi-keramati/modern_bootstrap_template',
          viewOnline: 'https://mehdi-keramati.github.io/modern_bootstrap_template',
        },
        {
          title: i18n.t('vanillajs'),
          projectName: i18n.t('projectName12'),
          pic: 'bg-videograph',
          githubLink: 'https://github.com/mehdi-keramati/videograph_portfolio',
          viewOnline: 'https://mehdi-keramati.github.io/videograph_portfolio',
        },
        {
          title: i18n.t('vanillajs'),
          projectName: i18n.t('projectName13'),
          pic: 'bg-eCommerceTemplate',
          githubLink: 'https://github.com/mehdi-keramati/eCommerce_tailwind_template',
          viewOnline: 'https://mehdi-keramati.github.io/eCommerce_tailwind_template',
        },
        {
          title: i18n.t('games'),
          projectName: i18n.t('projectName22'),
          pic: 'bg-SomeGames',
          githubLink: 'https://github.com/mehdi-keramati/somegames',
          viewOnline: 'https://mehdi-keramati.github.io/somegames',
        },
        {
          title: i18n.t('games'),
          projectName: i18n.t('projectName18'),
          pic: 'bg-quizapp',
          githubLink: 'https://github.com/mehdi-keramati/QuizApp',
          viewOnline: 'https://mehdi-keramati.github.io/QuizApp',
        },
      ],

      app: [
        {
          title: i18n.t('app'),
          projectName: i18n.t('projectName1'),
          pic: 'bg-dashboard',
          githubLink: 'https://github.com/mehdi-keramati/AdminDashboard',
          viewOnline: 'https://mehdi-keramati.github.io/AdminDashboard',
        },
        {
          title: i18n.t('app'),
          projectName: i18n.t('projectName2'),
          pic: 'bg-weatherforecast',
          githubLink: 'https://github.com/mehdi-keramati/weather_forecast',
          viewOnline: 'https://mehdi-keramati.github.io/weather_forecast',
        },
        {
          title: i18n.t('app'),
          projectName: i18n.t('projectName3'),
          pic: 'bg-musicPlayer',
          githubLink: 'https://github.com/mehdi-keramati/MUSICPLAYER',
          viewOnline: 'https://mehdi-keramati.github.io/MUSICPLAYER',
        },
        {
          title: i18n.t('app'),
          projectName: i18n.t('projectName4'),
          pic: 'bg-alannews',
          githubLink: 'https://github.com/mehdi-keramati/AlanNews',
          viewOnline: 'https://mehdi-keramati.github.io/AlanNews',
        },
        {
          title: i18n.t('app'),
          projectName: i18n.t('projectName5'),
          pic: 'bg-cryptocurrency',
          githubLink: 'https://github.com/mehdi-keramati/crypto-currency',
          viewOnline: 'https://mehdi-keramati.github.io/crypto-currency',
        },
      ],

      templates: [
        {
          react: [
            {
              title: i18n.t('reactjs'),
              projectName: i18n.t('projectName0'),
              pic: 'bg-DigitalRepair',
              githubLink: 'https://github.com/mehdi-keramati/RepairDigitalFactory',
              viewOnline: 'https://mehdi-keramati.github.io/RepairDigitalFactory/',
            },
            {
              title: i18n.t('reactjs'),
              projectName: i18n.t('projectName6'),
              pic: 'bg-legends_landingpage',
              githubLink: 'https://github.com/mehdi-keramati/legends-landingpage',
              viewOnline:
                ' https://Mehdi0-0Keramati.github.io/legends-landingpage',
            },
            {
              title: i18n.t('reactjs'),
              projectName: i18n.t('projectName7'),
              pic: 'bg-GPT3',
              githubLink: 'https://github.com/mehdi-keramati/GPT-3',
              viewOnline: 'https://mehdi-keramati.github.io/GPT-3',
            },
            {
              title: i18n.t('reactjs'),
              projectName: i18n.t('projectName8'),
              pic: 'bg-business',
              githubLink: 'https://github.com/mehdi-keramati/business',
              viewOnline: ' https://Mehdi0-0Keramati.github.io/business',
            },
            {
              title: i18n.t('reactjs'),
              projectName: i18n.t('projectName9'),
              pic: 'bg-covid19',
              githubLink: 'https://github.com/mehdi-keramati/covid19',
              viewOnline: 'https://mehdi-keramati.github.io/covid19',
            },
            {
              title: i18n.t('reactjs'),
              projectName: i18n.t('projectName10'),
              pic: 'bg-littleProject',
              githubLink: 'https://github.com/mehdi-keramati/LittlePorject-ReactJs',
              viewOnline: 'https://littleproject-reactjs.netlify.app',
            },
          ],
          vanillaJS: [
            {
              title: i18n.t('vanillajs'),
              projectName: i18n.t('projectName11'),
              pic: 'bg-bootstrapTemplate',
              githubLink: 'https://github.com/mehdi-keramati/modern_bootstrap_template',
              viewOnline: 'https://mehdi-keramati.github.io/modern_bootstrap_template',
            },
            {
              title: i18n.t('vanillajs'),
              projectName: i18n.t('projectName12'),
              pic: 'bg-videograph',
              githubLink: 'https://github.com/mehdi-keramati/videograph_portfolio',
              viewOnline: 'https://mehdi-keramati.github.io/videograph_portfolio',
            },
            {
              title: i18n.t('vanillajs'),
              projectName: i18n.t('projectName13'),
              pic: 'bg-eCommerceTemplate',
              githubLink:
                'https://github.com/mehdi-keramati/eCommerce_tailwind_template',
              viewOnline: 'https://mehdi-keramati.github.io/eCommerce_tailwind_template',
            },
          ],
        },
      ],

      games: [
        {
          title: i18n.t('games'),
          projectName: i18n.t('projectName18'),
          pic: 'bg-quizapp',
          githubLink: 'https://github.com/mehdi-keramati/QuizApp',
          viewOnline: 'https://mehdi-keramati.github.io/QuizApp',
        },
        {
          title: i18n.t('games'),
          projectName: i18n.t('projectName22'),
          pic: 'bg-SomeGames',
          githubLink: 'https://github.com/mehdi-keramati/somegames',
          viewOnline: 'https://mehdi-keramati.github.io/somegames',
        },
      ],
    },
  ]
}
