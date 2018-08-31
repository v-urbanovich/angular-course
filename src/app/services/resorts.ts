const resorts: IResortItem[] = [
    {
        id: 1,
        img: 'assets/images/1.jpg',
        address: 'Virginia, 1768  Perine Street',
        phone: 1285968685,   // дополнительно задание pipe для форматирования
        weather: {
            title: 'Weather today in Virginia',
            icon: 'cloud',
            water: 234,
            temperature: 13
        },
        social_info: {
            title: 'Hello from Virginia',
            img: 'assets/images/b1.jpg',
            followers: 234,
            following: 123534
        },
        type: 'hotel',
    }, {
        id: 2,
        img: 'assets/mumbai.jpg',
        address: ' Maharashtra,  Mumbai 1312 , Raheja Centre, Free Press Journal Rd, Nariman Point',
        phone: 2222842978,   // дополнительно задание pipe для форматирования
        weather: {
            title: 'Weather today in Mumbai',
            icon: 'sun',
            water: 42,
            temperature: 34
        },
        social_info: {
            title: 'Hello from Mumbai',
            img: 'assets/images/b1.jpg',
            followers: 6543,
            following: 2345
        },
        type: 'tours',
    }, {
        id: 3,
        img: 'assets/Panama.jpg',
        address: ' Panamá, Calle Uruguay (American Chamber of Comm. Building), Marbella',
        phone: 5072698440,   // дополнительно задание pipe для форматирования
        weather: {
            title: 'Weather today in Panamá',
            icon: 'rain',
            water: 523,
            temperature: 66
        },
        social_info: {
            title: 'Hello from Panamá',
            img: 'assets/images/b1.jpg',
            followers: 23,
            following: 1
        },
        type: 'fishing',
    }, {
        id: 4,
        img: 'assets/Egercsehi.jpg',
        address: ' Hungary, Egercsehi Erzsébet tér 45.',
        phone: 36855119,   // дополнительно задание pipe для форматирования
        weather: {
            title: 'Weather today in Egercsehi',
            icon: 'rain',
            water: 53,
            temperature: 23
        },
        social_info: {
            title: 'Hello from Egercsehi',
            img: 'assets/images/b1.jpg',
            followers: 5235,
            following: 453
        },
        type: 'weather',
    }, {
        id: 5,
        img: 'assets/Alexandria.jpg',
        address: ' Egypt, Alexandria 14 Fahmy Wissa, P.O. Box: 2211',
        phone: 36855119,   // дополнительно задание pipe для форматирования
        weather: {
            title: 'Weather today in Alexandria',
            icon: 'rain',
            water: 24,
            temperature: 231
        },
        social_info: {
            title: 'Hello from Alexandria',
            img: 'assets/images/b1.jpg',
            followers: 334,
            following: 2
        },
        type: 'tours',
    }
];

export { resorts };