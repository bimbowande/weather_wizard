export interface ICountry {
  name: string;
  capital: string;
}

export interface ISelect {
  initValue?: string;
  label?: string;
  value: any;
  inputName: any;
  // eslint-disable-next-line no-unused-vars
  onchange?: (e: any) => void;
  optionValue?: string[];
  onFocus?: (e: any) => void;
  className?: string;
  data: ICountry[];
}

/**
 * Weather Data
 */

export interface IDaily{
    temp: any;
    summary: string;
    dt: number;
    weather: [{ icon: string; description: string }];
}
export interface IData {
  current: { temp: number; weather: [{ icon: string; description: string }] };
  timezone: string;
  daily: [IDaily];
}

export interface SideComp {
  data: IData;
  status: string;
  city: any;
  countries: any;
  tempCity: any;
  updateCity: (e: any) => void;
}

export interface DayF {
    temp: any;
    summary: string;
    dt: number;
    weather: [{ icon: string; description: string }];
}

export interface IDayF{
    data: DayF
}