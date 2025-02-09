"use client"

import { useState } from "react"
import BusSchedule from "../components/BusSchedule"
import BusLineTabs from "../components/BusLineTabs"

const busData = {
  "16号线周浦东": {
    color: "#A6D2C3",
    times: [
      {
        departureTime: "06:30",
        returnTime: "06:45",
        isReturnTimeAccurate: true,
        driverName: "姚师傅",
        vehiclePlate: "沪DG4796",
        busColor: "#ADD8E6",
      },
      {
        departureTime: "07:30",
        returnTime: "07:45",
        isReturnTimeAccurate: true,
        driverName: "姚师傅",
        vehiclePlate: "沪DG4796",
        busColor: "#ADD8E6",
      },
      {
        departureTime: "08:30",
        returnTime: "08:45",
        isReturnTimeAccurate: true,
        driverName: "姚师傅",
        vehiclePlate: "沪DG4796",
        busColor: "#ADD8E6",
      },
      {
        departureTime: "09:30",
        returnTime: "09:45",
        isReturnTimeAccurate: true,
        driverName: "姚师傅",
        vehiclePlate: "沪DG4796",
        busColor: "#ADD8E6",
      },
      {
        departureTime: "10:30",
        returnTime: "10:45",
        isReturnTimeAccurate: true,
        driverName: "姚师傅",
        vehiclePlate: "沪DG4796",
        busColor: "#ADD8E6",
      },
      {
        departureTime: "14:30",
        returnTime: "14:45",
        isReturnTimeAccurate: true,
        driverName: "姚师傅",
        vehiclePlate: "沪DG4796",
        busColor: "#ADD8E6",
      },
      {
        departureTime: "17:00",
        returnTime: "17:15",
        isReturnTimeAccurate: true,
        driverName: "姚师傅",
        vehiclePlate: "沪DG4796",
        busColor: "#ADD8E6",
      },
      {
        departureTime: "17:30",
        returnTime: "17:45",
        isReturnTimeAccurate: true,
        driverName: "姚师傅",
        vehiclePlate: "沪DG4796",
        busColor: "#ADD8E6",
      },
      {
        departureTime: "18:00",
        returnTime: "18:15",
        isReturnTimeAccurate: true,
        driverName: "姚师傅",
        vehiclePlate: "沪DG4796",
        busColor: "#ADD8E6",
      },
      {
        departureTime: "18:30",
        returnTime: "18:45",
        isReturnTimeAccurate: true,
        driverName: "姚师傅",
        vehiclePlate: "沪DG4796",
        busColor: "#ADD8E6",
      },
    ],
  },
  "11号线康新公路": {
    color: "#6F2931",
    times: [
      {
        departureTime: "07:00",
        returnTime: "07:15",
        isReturnTimeAccurate: false,
        driverName: "姚师傅",
        vehiclePlate: "沪DG4796",
        busColor: "#ADD8E6",
      },
      {
        departureTime: "08:00",
        returnTime: "08:15",
        isReturnTimeAccurate: false,
        driverName: "姚师傅",
        vehiclePlate: "沪DG4796",
        busColor: "#ADD8E6",
      },
      {
        departureTime: "08:00",
        returnTime: "08:15",
        isReturnTimeAccurate: false,
        driverName: "唐师傅",
        vehiclePlate: "沪CB6185",
        busColor: "#ADD8E6",
      },
      {
        departureTime: "09:00",
        returnTime: "09:15",
        isReturnTimeAccurate: false,
        driverName: "蒙师傅",
        vehiclePlate: "沪CE2630",
        busColor: "#FFD700",
      },
      {
        departureTime: "10:00",
        returnTime: "10:15",
        isReturnTimeAccurate: false,
        driverName: "蒙师傅",
        vehiclePlate: "沪CE2630",
        busColor: "#FFD700",
      },
      {
        departureTime: "14:00",
        returnTime: "14:10",
        isReturnTimeAccurate: false,
        driverName: "蒙师傅",
        vehiclePlate: "沪CE2630",
        busColor: "#FFD700",
      },
      {
        departureTime: "14:40",
        returnTime: "14:50",
        isReturnTimeAccurate: false,
        driverName: "蒙师傅",
        vehiclePlate: "沪CE2630",
        busColor: "#FFD700",
      },
      {
        departureTime: "16:40",
        returnTime: "16:50",
        isReturnTimeAccurate: false,
        driverName: "蒙师傅",
        vehiclePlate: "沪CE2630",
        busColor: "#FFD700",
      },
    ],
  },
  "康弘幼儿园": {
    color: "#FFA500",
    times: [
      {
        departureTime: "07:45",
        returnTime: "08:00",
        isReturnTimeAccurate: false,
        driverName: "蒙师傅",
        vehiclePlate: "沪CE2630",
        busColor: "#FFA500",
      },
      {
        departureTime: "07:45",
        returnTime: "08:00",
        isReturnTimeAccurate: false,
        driverName: "唐师傅",
        vehiclePlate: "沪CB6186",
        busColor: "#ADD8E6",
      },
      {
        departureTime: "08:15",
        returnTime: "08:30",
        isReturnTimeAccurate: false,
        driverName: "蒙师傅",
        vehiclePlate: "沪CE2630",
        busColor: "#FFD700",
      },
      {
        departureTime: "08:15",
        returnTime: "08:30",
        isReturnTimeAccurate: false,
        driverName: "唐师傅",
        vehiclePlate: "沪CB6186",
        busColor: "#ADD8E6",
      },
      {
        departureTime: "15:55",
        returnTime: "16:05",
        isReturnTimeAccurate: false,
        driverName: "蒙师傅",
        vehiclePlate: "沪CE2630",
        busColor: "#FFD700",
      },
      {
        departureTime: "16:00",
        returnTime: "16:15",
        isReturnTimeAccurate: false,
        driverName: "姚师傅",
        vehiclePlate: "沪DG4796",
        busColor: "#ADD8E6",
      },
      {
        departureTime: "16:15",
        returnTime: "16:25",
        isReturnTimeAccurate: false,
        driverName: "蒙师傅",
        vehiclePlate: "沪CE2630",
        busColor: "#FFD700",
      },
    ],
  },
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("16号线周浦东")

  const { color, times } = busData[activeTab as keyof typeof busData]

  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">保利艾庐班车</h1>
        <BusLineTabs activeTab={activeTab} onTabChange={setActiveTab} busLines={Object.keys(busData)} />
        <BusSchedule color={color} times={times} />
      </div>
    </main>
  )
}

