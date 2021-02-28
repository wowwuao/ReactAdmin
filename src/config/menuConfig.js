import {
    AppstoreOutlined,
    PieChartOutlined,
    SafetyCertificateOutlined,
    FileDoneOutlined,
    BarsOutlined,
    UserOutlined,
    HomeOutlined,
    LineChartOutlined,
    FileTextOutlined,
    StarOutlined,
} from '@ant-design/icons';

const menuList = [
    {
        title: '首页', // 菜单标题名称
        key: '/home', // 对应的path
        icon: <HomeOutlined/>, // 图标名称
        isPublic: true, // 公开的
    },
    {
        title: '管理',
        key: '/products',
        icon: <AppstoreOutlined/>,
        children: [ // 子菜单列表
            {
                title: '学习计划',
                key: '/category',
                icon: <FileDoneOutlined/>
            },
            {
                title: '收藏管理',
                key: '/collection',
                icon: <StarOutlined/>
            },
        ]
    },

    {
        title: '用户管理',
        key: '/user',
        icon: <UserOutlined/>
    },
    {
        title: '权限管理',
        key: '/role',
        icon: <SafetyCertificateOutlined/>
    },

    {
        title: '图形图表',
        key: '/charts',
        icon: <PieChartOutlined/>,
        children: [
            {
                title: '柱形图',
                key: '/charts/bar',
                icon: <BarsOutlined/>
            },
            {
                title: '折线图',
                key: '/charts/line',
                icon: <LineChartOutlined/>
            },
            {
                title: '饼图',
                key: '/charts/pie',
                icon: <PieChartOutlined/>
            },
        ]
    },

    {
        title: '课程表',
        key: '/file',
        icon: <FileTextOutlined/>,
    },
]

export default menuList