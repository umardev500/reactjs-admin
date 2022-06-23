import {
  faBars,
  faBell,
  faChartLine,
  faClipboardList,
  faCloudBolt,
  faCog,
  faInbox,
  faLightbulb,
  faPowerOff,
  faSwatchbook,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const knobData = () => ({
  header: {
    navigation: [
      {
        id: 1,
        title: 'left',
        items: [
          {
            id: 1,
            type: 'toggler',
            icon: <FontAwesomeIcon fontSize={18} icon={faBars} />,
            url: '#',
            subMenu: [],
          },
        ],
      },
      {
        id: 2,
        title: 'right',
        items: [
          {
            id: 1,
            type: 'menu',
            icon: <FontAwesomeIcon fontSize={18} icon={faBell} />,
            url: '#',
            subMenu: [],
          },
          {
            id: 2,
            type: 'menu',
            icon: <FontAwesomeIcon fontSize={18} icon={faCog} />,
            url: '#',
            subMenu: [],
          },
        ],
      },
    ],
  },
  sidebar: {
    navigation: [
      {
        id: 1,
        title: 'intro',
        items: [
          {
            id: 1,
            type: 'main',
            icon: <FontAwesomeIcon fontSize={18} icon={faTachometerAlt} />,
            title: 'Dashboard',
            url: '#',
            subMenu: [],
          },
        ],
      },
      {
        id: 2,
        title: 'general',
        items: [
          {
            id: 1,
            type: 'main',
            icon: <FontAwesomeIcon fontSize={20} icon={faClipboardList} />,
            title: 'Blog Post',
            url: '#',
            subMenu: [
              {
                id: 1,
                type: 'sub',
                icon: <FontAwesomeIcon fontSize={18} icon={faLightbulb} />,
                title: 'Create New',
                url: '#',
              },
              {
                id: 2,
                type: 'sub',
                icon: <FontAwesomeIcon fontSize={18} icon={faLightbulb} />,
                title: 'All Posts',
                url: '#',
              },
              {
                id: 3,
                type: 'sub',
                icon: <FontAwesomeIcon fontSize={18} icon={faLightbulb} />,
                title: 'Draft',
                url: '#',
              },
            ],
          },
          {
            id: 2,
            type: 'main',
            icon: <FontAwesomeIcon fontSize={17} icon={faInbox} />,
            title: 'Messages',
            url: '#',
            subMenu: [],
          },
          {
            id: 4,
            type: 'main',
            icon: <FontAwesomeIcon fontSize={17} icon={faChartLine} />,
            title: 'Analytics',
            url: '#',
            subMenu: [
              {
                id: 1,
                type: 'sub',
                icon: <FontAwesomeIcon fontSize={18} icon={faLightbulb} />,
                title: 'Create New',
                url: '#',
              },
            ],
          },
          {
            id: 3,
            type: 'main',
            icon: <FontAwesomeIcon fontSize={20} icon={faCloudBolt} />,
            title: 'File Manger',
            url: '#',
            subMenu: [],
          },
          {
            id: 5,
            type: 'main',
            icon: <FontAwesomeIcon fontSize={17} icon={faSwatchbook} />,
            title: 'Subsribers',
            url: '#',
            subMenu: [],
          },
        ],
      },
      {
        id: 3,
        title: 'user',
        items: [
          {
            id: 1,
            type: 'main',
            icon: <FontAwesomeIcon fontSize={18} icon={faCog} />,
            title: 'Settings',
            url: '#',
            subMenu: [],
          },
          {
            id: 2,
            type: 'main',
            icon: <FontAwesomeIcon fontSize={18} icon={faPowerOff} />,
            title: 'Log Out',
            url: '#',
            subMenu: [],
          },
        ],
      },
    ],
  },
})

export default knobData
