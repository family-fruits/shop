const vegetablesData = [
    {
        id: 1,
        name: 'Баклажан',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 2,
        name: 'Батат',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 3,
        name: 'Буряк',
        category: "vegetables",
        minOrder: '0.5 кг',
        available: true
    },
    {
        id: 4,
        name: 'Гарбуз Баттернат',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 5,
        name: 'Гарбуз Хоккайдо',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 6,
        name: 'Гливи',
        category: "vegetables",
        minOrder: '0.5 кг',
        available: false
    },
    {
        id: 7,
        name: 'Горошок зелений стручковий 250г',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 8,
        name: 'Гриби печериці',
        category: "vegetables",
        minOrder: '0.5 кг',
        available: true
    },
    {
        id: 9,
        name: 'Гриби Печериці королівські',
        category: "vegetables",
        minOrder: '0.5 кг',
        available: false
    },
    {
        id: 10,
        name: 'Гриби Ерінги 400г',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 11,
        name: 'Гриби Шіїтаке 200г',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 12,
        name: 'Гриби Шімеджі 150г',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 13,
        name: 'Кабачок',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 14,
        name: 'Капуста білоголова',
        category: "vegetables",
        minOrder: '1 шт',
        available: true
    },
    {
        id: 15,
        name: 'Капуста Броколі',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 16,
        name: 'Капуста брюссельська',
        category: "vegetables",
        minOrder: '1 кг',
        available: false
    },
    {
        id: 17,
        name: 'Капуста молода',
        category: "vegetables",
        minOrder: '1 шт',
        available: true
    },
    {
        id: 18,
        name: 'Капуста пекінська',
        category: "vegetables",
        minOrder: '1 шт',
        available: true
    },
    {
        id: 19,
        name: 'Капуста цвітна',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 20,
        name: 'Капуста червоноголова',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 21,
        name: 'Картопля біла',
        category: "vegetables",
        minOrder: '1 кг',
        available: true
    },
    {
        id: 22,
        name: 'Картопля Гранада',
        category: "vegetables",
        minOrder: '1 кг',
        available: true
    },
    {
        id: 23,
        name: 'Картопля червона',
        category: "vegetables",
        minOrder: '1 кг',
        available: true
    },
    {
        id: 24,
        name: 'Корінь імбиру',
        category: "vegetables",
        minOrder: '1 шт',
        available: true
    },
    {
        id: 25,
        name: 'Корінь пастернаку',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 26,
        name: 'Корінь петрушки',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 27,
        name: 'Корінь селери',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 28,
        name: 'Лемонграс',
        category: "vegetables",
        minOrder: '100 г',
        available: false
    },
    {
        id: 29,
        name: 'Морква',
        category: "vegetables",
        minOrder: '0.5 кг',
        available: true
    },
    {
        id: 30,
        name: 'Набір для приготування гуакамоле',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 31,
        name: 'Огірок гладкий',
        category: "vegetables",
        minOrder: '0.5 кг',
        available: true
    },
    {
        id: 32,
        name: 'Огірок колючий',
        category: "vegetables",
        minOrder: '0.5 кг',
        available: true
    },
    {
        id: 33,
        name: 'Перець Білозірка',
        category: "vegetables",
        minOrder: '100 г',
        available: false
    },
    {
        id: 34,
        name: 'Перець гіркий Падрон',
        category: "vegetables",
        minOrder: '100 г',
        available: false
    },
    {
        id: 35,
        name: 'Перець жовтий',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 36,
        name: 'Перець зелений',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 37,
        name: 'Перець Капія',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 38,
        name: 'Перець червоний',
        category: "vegetables",
        minOrder: '1 шт',
        available: true
    },
    {
        id: 39,
        name: 'Перець чилі зелений 100г',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 40,
        name: 'Перець чилі червоний 100г',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 41,
        name: 'Помідор жовтий',
        category: "vegetables",
        minOrder: '0.5 кг',
        available: false
    },
    {
        id: 42,
        name: 'Помідор коктейльний',
        category: "vegetables",
        minOrder: '0.5 кг',
        available: true
    },
    {
        id: 43,
        name: 'Помідор Куматі',
        category: "vegetables",
        minOrder: '0.5 кг',
        available: false
    },
    {
        id: 44,
        name: 'Помідор рожевий',
        category: "vegetables",
        minOrder: '0.5 кг',
        available: true
    },
    {
        id: 45,
        name: 'Помідор червоний',
        category: "vegetables",
        minOrder: '0.5 кг',
        available: true
    },
    {
        id: 46,
        name: 'Помідор чері Алегро 500г',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 47,
        name: 'Помідор чері Імпорт',
        category: "vegetables",
        minOrder: '0.5 кг',
        available: false
    },
    {
        id: 48,
        name: 'Редис ваговий',
        category: "vegetables",
        minOrder: '0.5 кг',
        available: false
    },
    {
        id: 49,
        name: 'Редис Дайкон',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 50,
        name: 'Редис Око Дракона',
        category: "vegetables",
        minOrder: '0.5 кг',
        available: false
    },
    {
        id: 51,
        name: 'Редис пучок',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 52,
        name: 'Спаржа зелена Імпорт 450г',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 53,
        name: 'Спаржева квасоля',
        category: "vegetables",
        minOrder: '0.5 кг',
        available: false
    },
    {
        id: 54,
        name: 'Фенхель',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 55,
        name: 'Цибуля Марс',
        category: "vegetables",
        minOrder: '1 кг',
        available: true
    },
    {
        id: 56,
        name: 'Цибуля ріпчаста',
        category: "vegetables",
        minOrder: '1 кг',
        available: true
    },
    {
        id: 57,
        name: 'Цибуля Стерлінг',
        category: "vegetables",
        minOrder: '0.5 кг',
        available: false
    },
    {
        id: 58,
        name: 'Цибуля шалот 250г',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 59,
        name: 'Цукіні',
        category: "vegetables",
        minOrder: '1 шт',
        available: false
    },
    {
        id: 60,
        name: 'Часник',
        category: "vegetables",
        minOrder: '100 г',
        available: true
    },
];