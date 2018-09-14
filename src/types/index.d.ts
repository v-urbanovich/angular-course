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

interface ILoginData {
    email: string;
    password: string;
}

interface ISignupFormValue extends ILoginData {
    firstName: string;
    lastName: string;
}

interface IGitHubRepo {
    id: number;
    name: string;
    owner: IRepoOwner;
    html_url: string;
    url: string;
    score: number;
}

interface IRepoOwner {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

interface IDefaultReposList {

}