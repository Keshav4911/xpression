'use client';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: 'Basic',
    price: '$9.99',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  },
  {
    name: 'Pro',
    price: '$19.99',
    features: ['All Basic features', 'Feature 4', 'Feature 5', 'Feature 6'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['All Pro features', 'Feature 7', 'Feature 8', 'Custom support'],
  },
];

const Pricing = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-600">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6 text-purple-600">{plan.price}</p>
              <ul className="mb-8 text-gray-700">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="mb-2">
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;