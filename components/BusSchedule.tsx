"use client"

import type React from "react"
import { useState, useEffect } from "react"
import TimeEntry from "./TimeEntry"

interface TimeInfo {
  departureTime: string
  returnTime: string
  isReturnTimeAccurate: boolean
  driverName: string
  vehiclePlate: string
  busColor: string
}

interface BusScheduleProps {
  color: string
  times: TimeInfo[]
}

const BusSchedule: React.FC<BusScheduleProps> = ({ color, times }) => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  const getUTC8Time = (date: Date) => {
    const utc8Offset = 8 * 60 * 60 * 1000 // 8 hours in milliseconds
    return new Date(date.getTime() + utc8Offset + date.getTimezoneOffset() * 60 * 1000)
  }

  const getNextAvailableIndex = () => {
    const utc8Now = getUTC8Time(currentTime)
    for (let i = 0; i < times.length; i++) {
      const [departureHours, departureMinutes] = times[i].departureTime.split(":").map(Number)
      const departureDate = new Date(utc8Now)
      departureDate.setHours(departureHours, departureMinutes, 0, 0)

      if (utc8Now <= departureDate) {
        return i
      }
    }
    return -1 // No available buses
  }

  const nextAvailableIndex = getNextAvailableIndex()

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg w-full">
      <ul className="divide-y divide-gray-200">
        {times.map((timeInfo, index) => (
          <TimeEntry
            key={index}
            {...timeInfo}
            color={color}
            currentTime={getUTC8Time(currentTime)}
            isNextAvailable={index === nextAvailableIndex}
          />
        ))}
      </ul>
    </div>
  )
}

export default BusSchedule

