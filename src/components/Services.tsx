import { Heart, Briefcase, PartyPopper, Users, Camera, Utensils } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Wedding Planning',
    description: 'Complete wedding planning and coordination from engagement to reception, creating your dream celebration.',
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    description: 'Professional corporate event management including conferences, seminars, and team building activities.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: PartyPopper,
    title: 'Birthday Parties',
    description: 'Memorable birthday celebrations with creative themes, entertainment, and personalized decoration.',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: Users,
    title: 'Social Gatherings',
    description: 'Elegant arrangements for anniversaries, reunions, and special family celebrations.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Camera,
    title: 'Photography & Videography',
    description: 'Professional photography and videography services to capture every precious moment beautifully.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Utensils,
    title: 'Catering Services',
    description: 'Exquisite catering with diverse menu options and professional presentation for all events.',
    color: 'from-red-500 to-orange-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive event management solutions tailored to make your celebration perfect
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
