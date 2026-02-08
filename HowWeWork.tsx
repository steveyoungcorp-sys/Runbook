import React from 'react';
import Button from '../components/Button';

const HowWeWork: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "We Work Inside Your Systems",
      content: (
        <>
          <p className="mb-4 text-gray-600">Runbook works directly inside your HubSpot CRM. All prospects, outreach, conversations, notes, meetings, and pipeline activity live in your account, not ours.</p>
          <p className="font-medium text-primary mb-2">You own:</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>All contact and account data</li>
            <li>Email templates and sequences</li>
            <li>Conversation history and notes</li>
            <li>Pipeline stages and reporting</li>
          </ul>
          <p className="mt-4 text-sm italic text-gray-500">If we ever step away, everything remains live and usable - easy to takeover immediately.</p>
        </>
      )
    },
    {
      number: "02",
      title: "Clear Setup Before Outreach",
      content: (
        <>
          <p className="mb-4 text-gray-600">We align upfront on:</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1 mb-4">
            <li>Who we’re targeting (and who we’re not) by creating an ICP</li>
            <li>Messaging and positioning</li>
            <li>Deal size, margins, and boundaries</li>
            <li>Brand tone and expectations</li>
          </ul>
          <p className="text-sm text-gray-600">This ensures outreach is focused, professional, and brand-safe from day one.</p>
        </>
      )
    },
    {
      number: "03",
      title: "Hands-On Sales Execution",
      content: (
        <>
          <p className="mb-4 text-gray-600">We do the work:</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1 mb-4">
            <li>Targeted outbound outreach</li>
            <li>Structured follow-ups</li>
            <li>Response handling and qualification</li>
            <li>Calendar-ready meetings</li>
            <li>Clean handoff to you or your team</li>
          </ul>
          <p className="font-medium text-primary">No mass blasting. No pushy selling.</p>
        </>
      )
    },
    {
      number: "04",
      title: "No Secrets. You See Everything.",
      content: (
        <>
          <p className="mb-4 text-gray-600">You can log into HubSpot at any time to see:</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1 mb-4">
            <li>Who’s been contacted</li>
            <li>What’s been sent</li>
            <li>Responses and notes</li>
            <li>Meetings booked and pipeline movement</li>
          </ul>
          <p className="font-medium text-primary">Transparency is built in.</p>
        </>
      )
    },
    {
      number: "05",
      title: "Weekly Working Sessions",
      content: (
        <>
          <p className="mb-4 text-gray-600">We meet weekly to review:</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1 mb-4">
            <li>Outreach and response trends</li>
            <li>Qualified conversations</li>
            <li>Objections and market feedback</li>
            <li>What’s working and what we adjust next</li>
          </ul>
          <p className="font-medium text-primary">These are practical working sessions — not presentations.</p>
        </>
      )
    },
    {
      number: "06",
      title: "Clean Systems & Boundaries",
      content: (
        <>
          <p className="mb-4 text-gray-600">We agree on a few simple CRM basics:</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1 mb-4">
            <li>Who owns what and who can access it</li>
            <li>Clear deal stages</li>
            <li>Keeping the data clean and organized</li>
          </ul>
          <p className="text-sm text-gray-600">This keeps reporting accurate and the system usable.</p>
        </>
      )
    }
  ];

  return (
    <div className="w-full bg-background">
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-display font-bold text-4xl text-white mb-6">How We Work</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Runbook provides contracted sales execution, operating as an extension of your business — not an agency and nothing hidden, complete transparency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <span className="text-4xl font-bold text-gray-200 mr-4 font-display">{step.number}</span>
                  <h3 className="text-2xl font-display font-bold text-primary">{step.title}</h3>
                </div>
                <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm flex-grow">
                  {step.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-primary mb-6">What This Gets You</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Pipeline without hiring", "Predictable cost", "Immediate execution", "Full visibility", "Clean handoff"].map((benefit, i) => (
                <span key={i} className="bg-gray-100 text-primary font-medium px-4 py-2 rounded-full text-sm">
                  {benefit}
                </span>
              ))}
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Runbook is built for founders who want sales done properly—without adding headcount. 
              Whether you’re starting from scratch or already have an inside team, the missing piece is often proactive outreach. 
              Runbook stimulates the top of your pipeline by engaging new customers, starting real conversations, and developing meaningful dialogue that can naturally turn into opportunities.
            </p>
            <Button to="/contact" variant="primary">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;