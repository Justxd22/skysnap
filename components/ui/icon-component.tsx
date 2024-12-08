import { weatherIconMappings } from "@/lib/iconMap"
import Image from "next/image"

interface IconComponentProps {
  weatherCode: any
  x?: any
  className?: string
}

export default function IconComponent({
  weatherCode,
}: IconComponentProps) {

  return (
    <div className={`relative invert-0 dark:invert h-9 w-9`}>
      <Image
        fill
        alt={weatherCode}
        src={`/icons/wi-${weatherCode}.svg`}
        className="select-none"
      />
    </div>
  )
}
