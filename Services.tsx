import React from 'react';
import { Check } from 'lucide-react';
import Button from '../components/Button';

const Services: React.FC = () => {
  const tiers = [
    {
      name: "Starter",
      price: "$2,500",
      description: "Best for small businesses testing outbound for the first time or needing consistent new conversations without hiring a full-time salesperson.",
      features: [
        "Up to 75 focused accounts",
        "4–6 qualified customer conversations/mo",
        "Prove traction",
        "Establish motion",
        "Create first visible pipeline"
      ]
    },
    {
      name: "Growth",
      price: "$4,000",
      description: "Best for businesses ready for steady pipeline development and predictable customer acquisition beyond referrals or sporadic outreach.",
      features: [
        "Up to 150 focused accounts",
        "8–12 qualified customer conversations/mo",
        "Build consistency",
        "Increase opportunity flow",
        "Strengthen revenue visibility"
      ],
      isPopular: true
    },
    {
      name: "Focused",
      price: "$6,000",
      description: "Best for companies that want accelerated momentum and near-exclusive outbound execution without the cost or risk of a senior sales hire.",
      features: [
        "Up to 250 focused accounts",
        "12–20 qualified customer conversations/mo",
        "Drive speed",
        "Deepen engagement",
        "Create meaningful revenue movement"
      ]
    }
  ];

  return (
    <div className="w-full bg-background min-h-screen">
      <div className="bg-primary py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display font-bold text-4xl text-white mb-4">Contracted Sales Execution</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transparent pricing. Disciplined execution. No hidden fees.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-lg shadow-sm border ${
                tier.isPopular ? 'border-accent ring-1 ring-accent' : 'border-gray-200'
              } flex flex-col p-8 transition-transform hover:-translate-y-1 duration-300`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
              )}
              <h3 className="font-display font-bold text-2xl text-primary mb-2">{tier.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold text-primary">{tier.price}</span>
                <span className="text-gray-500 ml-2">/ month</span>
              </div>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed flex-grow">
                {tier.description}
              </p>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="text-accent flex-shrink-0 mr-3" size={18} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button to="/contact" variant={tier.isPopular ? 'primary' : 'outline'} fullWidth>
                Book a Call
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto text-center">
          <h3 className="font-display font-bold text-2xl text-primary mb-4">Capacity Limits</h3>
          <p className="text-gray-600 leading-relaxed">
            Runbook limits the number of active clients to protect execution quality, focus, and real outcomes. 
            This is disciplined capacity—not volume service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;