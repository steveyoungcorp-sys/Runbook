import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="font-display font-bold text-2xl tracking-tight text-white mb-6 block">
              Runbook
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Real pipeline, without adding headcount. Contracted sales execution for founder-led businesses.
            </p>
            <div className="flex space-x-4">
              <span className="text-gray-400 hover:text-accent transition-colors cursor-pointer">
                <Linkedin size={20} />
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/how-we-work" className="hover:text-accent transition-colors">How We Work</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/contact" className="hover:text-accent transition-colors">Book a Call</Link></li>
              <li><a href="mailto:contact@runbooksales.com" className="hover:text-accent transition-colors">contact@runbooksales.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Location</h4>
            <p className="text-sm text-gray-300">
              Vancouver, BC<br />
              Canada
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {currentYear} Runbook Sales. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span className="cursor-default">Privacy Policy</span>
            <span className="cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;