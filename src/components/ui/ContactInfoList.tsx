import { Smartphone, Mail, MapPin } from 'lucide-react'

interface ContactInfoListProps {
  phone: string
  email: string
  location: string
  variant: 'desktop' | 'mobile'
}

export default function ContactInfoList({ phone, email, location, variant }: ContactInfoListProps) {
  const items = [
    { icon: Smartphone, text: phone },
    { icon: Mail, text: email },
    { icon: MapPin, text: location },
  ]

  const isDesktop = variant === 'desktop'

  return (
    <div className={isDesktop ? 'space-y-5' : 'space-y-4'}>
      {items.map(({ icon: Icon, text }) => (
        <div key={text} className={`flex items-center ${isDesktop ? 'gap-4' : 'gap-3'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${isDesktop ? 'bg-primary/10' : 'bg-brand-four'}`}>
            <Icon className="w-5 h-5 text-brand-one" />
          </div>
          <span className={`text-sm ${isDesktop ? 'text-gray-700' : 'text-brand-three'}`}>{text}</span>
        </div>
      ))}
    </div>
  )
}
