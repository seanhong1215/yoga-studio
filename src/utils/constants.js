// 瑜珈工作室網站常數

export const STUDIO_INFO = {
    name: '靜心瑜珈工作室',
    tagline: '找回身心平衡，開啟療癒之旅',
    phone: '+886-2-1234-5678',
    email: 'info@sereneyoga.com',
    address: '台北市大安區和平東路二段 123 號 3 樓',
    hours: '週一至週日 07:00 - 21:00'
}

export const CLASSES = [
    {
        id: 1,
        name: '哈達瑜珈',
        description: '基礎瑜珈課程,適合初學者,著重於體位法和呼吸練習',
        duration: '60 分鐘',
        level: '初級',
        price: 'NT$ 500'
    },
    {
        id: 2,
        name: '流瑜珈',
        description: '連續流暢的動作串聯,增強心肺功能與肌力',
        duration: '75 分鐘',
        level: '中級',
        price: 'NT$ 600'
    },
    {
        id: 3,
        name: '陰瑜珈',
        description: '深度放鬆課程,每個動作停留 3-5 分鐘,釋放深層壓力',
        duration: '90 分鐘',
        level: '所有程度',
        price: 'NT$ 650'
    },
    {
        id: 4,
        name: '空中瑜珈',
        description: '使用吊床輔助,體驗無重力的瑜珈練習',
        duration: '60 分鐘',
        level: '中高級',
        price: 'NT$ 800'
    }
]

export const SCHEDULE = [
    { day: '週一', time: '07:00-08:00', class: '哈達瑜珈', instructor: 'Lisa' },
    { day: '週一', time: '18:30-19:45', class: '流瑜珈', instructor: 'Amy' },
    { day: '週二', time: '10:00-11:30', class: '陰瑜珈', instructor: 'Emma' },
    { day: '週三', time: '19:00-20:00', class: '空中瑜珈', instructor: 'Sarah' },
    { day: '週四', time: '07:00-08:00', class: '哈達瑜珈', instructor: 'Lisa' },
    { day: '週四', time: '18:30-19:45', class: '流瑜珈', instructor: 'Amy' },
    { day: '週五', time: '10:00-11:30', class: '陰瑜珈', instructor: 'Emma' },
    { day: '週六', time: '09:00-10:00', class: '哈達瑜珈', instructor: 'Lisa' },
    { day: '週六', time: '14:00-15:00', class: '空中瑜珈', instructor: 'Sarah' },
    { day: '週日', time: '10:00-11:30', class: '陰瑜珈', instructor: 'Emma' }
]

export const COLORS = {
    primary: '#8B7355', // 溫暖的棕色
    secondary: '#C9B8A3', // 淺棕色
    accent: '#7FA99B', // 寧靜的綠色
    background: '#FAF8F5', // 米白色
    text: '#3E3E3E', // 深灰色
    white: '#FFFFFF'
}
