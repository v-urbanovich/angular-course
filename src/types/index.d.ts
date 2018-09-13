interface IResortItem {
    id: number;
    img: string;
    address: string;
    country: string;
    phone:  number;   // дополнительно задание pipe для форматирования
    weather: IWeather;
    social_info: ISocial;
    type: string;
}

interface IWeather {
    title: string;
    icon: string;
    water: number;
    temperature: number;
}

interface ISocial {
    title: string;
    img: string;
    followers: number;
    following: number;
}

type FilterType = {
    title: string;
    filterBy: string
};

type PhoneFormatOptions = {
    phoneLength?: number;
    codeLength?: number
};

type PFMap = {[key: string]: PhoneFormatOptions};

type RouteLink = {
    title: string;
    route: string;
};

interface IFormError {

}