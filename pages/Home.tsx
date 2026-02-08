import React from 'react';
import { ArrowRight, CheckCircle, Target, MessageSquare, TrendingUp, BarChart } from 'lucide-react';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary pt-16 pb-24 lg:pt-24 lg:pb-32 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 opacity-10">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 L100 0 L100 100 Z" fill="#2BB3A3" />
             <path d="M0 0 L50 100 L100 0 Z" fill="none" stroke="#2BB3A3" strokeWidth="0.5" />
           </svg>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Know where your next customer is coming from.
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              We design and run the outbound system that produces qualified conversations, real opportunities, and visible future revenue — without another risky sales hire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="secondary" className="px-8 py-4 text-base">
                Book a Call
              </Button>
              <Button to="/services" variant="outline" className="text-white border-white hover:bg-white hover:text-primary px-8 py-4 text-base">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="text-accent font-semibold tracking-wide uppercase text-sm mb-2 block">The Core Problem</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-8 leading-tight">
              Sales isn’t failing because of effort.<br />
              It’s failing because the system isn’t ready.
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                Many businesses try to grow by hiring a salesperson before the foundation exists. No clear process. No focused target market. No consistent outreach. No structure to support execution.
              </p>
              <p>
                So the hire struggles, momentum stalls, and leadership assumes sales doesn’t work—when the reality is the business was never prepared to run sales in the first place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">
                Build the system before you hire the salesperson.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Runbook installs the structure, focus, and disciplined execution required to consistently create new customers.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Instead of another risky hire or scattered sales activity, we build a clear outbound motion—defined targets, consistent outreach, real conversations, and visible pipeline—so revenue growth becomes controlled and repeatable.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-accent">
                <p className="text-primary font-medium italic">
                  "This isn’t theory or training. It’s hands-on customer acquisition execution inside your business."
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Target className="text-accent" size={32} />,
                  title: "Define Target Customers",
                  desc: "Focused account selection based on real buying potential—not scraped lists or guesswork."
                },
                {
                  icon: <MessageSquare className="text-accent" size={32} />,
                  title: "Build Clear Messaging",
                  desc: "Simple, direct communication that earns responses and starts real sales conversations."
                },
                {
                  icon: <TrendingUp className="text-accent" size={32} />,
                  title: "Disciplined Execution",
                  desc: "Consistent prospecting, follow-up, and engagement that creates qualified opportunities every month."
                },
                {
                  icon: <BarChart className="text-accent" size={32} />,
                  title: "Visible Pipeline",
                  desc: "Every conversation and opportunity lives inside your CRM—ready for leadership to close."
                }
              ].map((item, index) => (
                <div key={index} className="bg-background p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="font-display font-bold text-lg text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Banner */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300 text-lg mb-4 font-light">
            Not more activity. Not more tools. Not another failed hire.
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white max-w-3xl mx-auto leading-normal">
            A functioning sales engine that produces real opportunities and future revenue.
          </h2>
        </div>
      </section>

      {/* Credibility / Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="col-span-1 lg:col-span-2">
              <h3 className="font-display font-bold text-2xl text-primary mb-6">Experience & Insight</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="ml-4 text-gray-700">25+ years in direct sales execution and pipeline creation.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="ml-4 text-gray-700">Built qualified pipelines from zero in unstructured, early-stage environments.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="ml-4 text-gray-700">Generated real customer conversations where no outbound system previously existed.</p>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-display font-bold text-lg text-primary mb-3">Notable Insight</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Across multiple companies with no prior outbound motion, building pipeline and customer dialogue consistently revealed the same truth: the real barrier to growth wasn’t sales talent—it was sales readiness.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-display font-bold text-xl text-primary mb-4">Our Philosophy</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Sales isn’t magic. It’s structure, focus, and disciplined execution. Markets reward clarity and consistency—not effort alone.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Runbook replaces guessing, premature hiring, and luck-driven growth with a clear outbound system that produces real conversations.
              </p>
              <div className="font-medium text-primary">No hype. No theatre. Just controlled customer acquisition.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">
            Ready to build your sales engine?
          </h2>
          <div className="flex justify-center gap-4">
             <Button to="/contact" variant="primary" className="px-10 py-4 text-base shadow-md">
               Book a Call
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;