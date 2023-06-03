import React from 'react'
import { Header } from '../Header/Header'
import { Line } from '../Line/Line'
import { InfoBox } from "../WeatherBox/InfoBox";

export const DailyWeather = () => {
  return (
    <div className="">
            <Header
              text="Heavy Rain"
              classStyle="text-[100px] text-right bg-clip-text text-bg "
            />
            <Line />
            <div className="flex gap-4 justify-center p-10 ">
              <InfoBox />
              <InfoBox />
              <InfoBox />
              <InfoBox />
              <InfoBox />
              <InfoBox />
              <InfoBox />
              <InfoBox />
              <InfoBox />
              <InfoBox />
            </div>
          </div>
  )
}
