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

  const getNextAvailableIndex = () => {
    for (let i = 0; i < times.length; i++) {
      const [departureHours, departureMinutes] = times[i].departureTime.split(":").map(Number)
      const [returnHours, returnMinutes] = times[i].returnTime.split(":").map(Number)
      const departureDate = new Date(currentTime)
      departureDate.setHours(departureHours, departureMinutes, 0, 0)
      const returnDate = new Date(currentTime)
      returnDate.setHours(returnHours, returnMinutes, 0, 0)

      if (currentTime < returnDate) {
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
            currentTime={currentTime}
            isNextAvailable={index === nextAvailableIndex}
          />
        ))}
      </ul>
    </div>
  )
}

export default BusSchedule

