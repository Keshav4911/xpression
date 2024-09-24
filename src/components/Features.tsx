'use client';
import { motion } from 'framer-motion';
import { LightBulbIcon, ClockIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Innovative Solutions',
    description: 'Our cutting-edge technology provides innovative solutions to complex problems.',
    icon: LightBulbIcon,
  },
  {
    name: 'Time-Saving',
    description: 'Streamline your workflow and save precious time with our efficient tools.',
    icon: ClockIcon,
  },
  {
    name: 'Data-Driven',
    description: 'Make informed decisions with our advanced analytics and reporting features.',
    icon: ChartBarIcon,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-600">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-purple-600">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;