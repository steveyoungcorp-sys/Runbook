import React from 'react';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="w-full bg-background">
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-display font-bold text-4xl text-white mb-6">About Runbook</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Runbook was created to solve a specific problem: sales readiness.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3 prose prose-lg text-gray-600">
              <h2 className="font-display font-bold text-3xl text-primary mb-6">Founder Story</h2>
              <p>
                Runbook was shaped by more than two decades inside real businesses—sales roles, marketing responsibility, and hands-on operational leadership where revenue outcomes mattered.
              </p>
              <p>
                Across those environments, one pattern repeated: companies tried to grow by hiring a salesperson before the foundation for sales actually existed.
              </p>
              <p className="font-medium text-primary">
                No clear targets. No consistent outreach. No supporting process.
              </p>
              <p>
                When results didn’t appear, the hire was blamed and replaced—but the underlying problem never changed.
              </p>
              <p>
                That repeated experience led to a simple realization: <strong>most sales failures aren’t talent failures. They’re readiness failures.</strong>
              </p>
              <p>
                Runbook was created to solve that problem directly.
              </p>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="font-display font-bold text-2xl text-primary mb-4">Why Runbook Exists</h2>
                <p>
                  Runbook exists to bring structure, focus, and disciplined execution to customer acquisition—so businesses can create predictable revenue without guessing, over-hiring, or relying on luck.
                </p>
                <p>
                  Instead of theory, training, or lead volume, Runbook delivers hands-on outbound execution that produces real conversations and visible pipeline inside the client’s own systems.
                </p>
                <p>
                  Because when the system is right, growth becomes controlled instead of uncertain.
                </p>
              </div>

              <div className="mt-8 bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="font-display font-bold text-lg text-primary mb-2">Core Philosophy</h3>
                <p className="italic text-gray-700">
                  Sales works when the structure to support it exists—and disciplined execution follows.
                </p>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-24">
                <div className="w-full h-64 bg-gray-200 rounded-md mb-6 flex items-center justify-center overflow-hidden">
                    <div className="bg-primary w-full h-full flex flex-col items-center justify-center text-white p-8 text-center">
                        <span className="font-display font-bold text-5xl opacity-20">SY</span>
                    </div>
                </div>
                <h3 className="font-display font-bold text-xl text-primary">Steve Young</h3>
                <p className="text-accent font-medium mb-4">Founder / Sales Executive</p>
                <p className="text-sm text-gray-600 mb-6">
                  25+ years experience building qualified pipelines and executing outbound strategies in founder-led businesses.
                </p>
                <Button to="/contact" variant="outline" fullWidth>
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;