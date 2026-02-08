import React, { useState } from 'react';
import { Mail, Calendar } from 'lucide-react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    role: '',
    revenue: '',
    needs: '',
    idealCustomer: '',
    notes: '',
    consent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Full name is required";
    if (!formData.businessName) newErrors.businessName = "Business name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.role) newErrors.role = "Please select your role";
    if (!formData.needs) newErrors.needs = "Please select where you need help";
    if (!formData.idealCustomer) newErrors.idealCustomer = "Please describe your ideal customer";
    if (!formData.consent) newErrors.consent = "You must agree to proceed";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API call
      setTimeout(() => {
        setSubmitted(true);
        window.scrollTo(0, 0);
      }, 500);
    }
  };

  if (submitted) {
    return (
      <div className="w-full bg-background min-h-screen pt-20">
        <div className="container mx-auto px-4 max-w-2xl py-20 text-center">
          <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-100">
            <h2 className="font-display font-bold text-3xl text-primary mb-4">Message Received</h2>
            <p className="text-gray-600 text-lg mb-8">Thanks — received. I’ll reply within 1 business day.</p>
            <p className="text-gray-500 mb-8">In the meantime, feel free to browse our services or return home.</p>
            <Button to="/" variant="primary">Return Home</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-background">
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-4xl text-white mb-2">Book a Call</h1>
          <p className="text-gray-300">Start the conversation about your sales execution.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Context */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <h2 className="font-display font-bold text-2xl text-primary mb-4">Tell me a bit about your business.</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  If it’s a fit, we’ll book a quick intro call.
                </p>
                <div className="text-sm font-medium text-accent bg-accent/10 p-3 rounded-md inline-block">
                  Simple form. No spam. If I can’t help, I’ll tell you.
                </div>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-4">What happens next</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-white p-1 rounded border border-gray-200 mr-3 mt-1 text-primary text-xs font-bold">01</div>
                    <span className="text-gray-600">I’ll reply within 1 business day.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white p-1 rounded border border-gray-200 mr-3 mt-1 text-primary text-xs font-bold">02</div>
                    <span className="text-gray-600">If it’s a fit, we’ll book a 15–20 minute call.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white p-1 rounded border border-gray-200 mr-3 mt-1 text-primary text-xs font-bold">03</div>
                    <span className="text-gray-600">If not, I’ll point you in the right direction.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Prefer email?</p>
                <a href="mailto:contact@runbooksales.com" className="flex items-center text-primary font-medium hover:text-accent transition-colors">
                  <Mail size={18} className="mr-2" />
                  contact@runbooksales.com
                </a>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-8">
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-accent focus:border-accent outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Business Name *</label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-accent focus:border-accent outline-none transition-colors ${errors.businessName ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-accent focus:border-accent outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                        <input
                          type="text"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="e.g. runbooksales.com"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">What best describes you? *</label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring-accent focus:border-accent outline-none transition-colors bg-white ${errors.role ? 'border-red-500' : 'border-gray-300'}`}
                        >
                          <option value="">Select...</option>
                          <option value="Founder / Owner">Founder / Owner</option>
                          <option value="Operator / GM">Operator / GM</option>
                          <option value="Sales leader">Sales leader</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
                      </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Revenue Range</label>
                      <select
                        name="revenue"
                        value={formData.revenue}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent outline-none transition-colors bg-white"
                      >
                        <option value="">Select...</option>
                        <option value="Pre-revenue">Pre-revenue</option>
                        <option value="<$25k/mo">&lt;$25k/mo</option>
                        <option value="$25k–$100k/mo">$25k–$100k/mo</option>
                        <option value="$100k–$300k/mo">$100k–$300k/mo</option>
                        <option value="$300k+/mo">$300k+/mo</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Where do you need help most? *</label>
                      <select
                        name="needs"
                        value={formData.needs}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-accent focus:border-accent outline-none transition-colors bg-white ${errors.needs ? 'border-red-500' : 'border-gray-300'}`}
                      >
                         <option value="">Select...</option>
                         <option value="Outbound + prospecting">Outbound + prospecting</option>
                         <option value="CRM + pipeline setup">CRM + pipeline setup</option>
                         <option value="Consistent booked meetings">Consistent booked meetings</option>
                         <option value="Fixing a stalled pipeline">Fixing a stalled pipeline</option>
                         <option value="Other">Other</option>
                      </select>
                      {errors.needs && <p className="text-red-500 text-xs mt-1">{errors.needs}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Ideal Customer *</label>
                    <textarea
                      name="idealCustomer"
                      value={formData.idealCustomer}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Who do you sell to? Industry, company size, location, typical buyer title."
                      className={`w-full px-4 py-2 border rounded-md focus:ring-accent focus:border-accent outline-none transition-colors ${errors.idealCustomer ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.idealCustomer && <p className="text-red-500 text-xs mt-1">{errors.idealCustomer}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Notes (Optional)</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Anything else I should know? Timing, goals, current process."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent outline-none transition-colors"
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      name="consent"
                      id="consent"
                      checked={formData.consent}
                      onChange={handleCheckboxChange}
                      className="mt-1 h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent"
                    />
                    <label htmlFor="consent" className="ml-2 block text-xs text-gray-600">
                      I understand Runbook is a contracted sales execution service and results depend on market + offer + follow-through. *
                    </label>
                  </div>
                  {errors.consent && <p className="text-red-500 text-xs">{errors.consent}</p>}

                  <Button type="submit" variant="primary" fullWidth className="py-4 text-base">
                    Send & Request a Call
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                   <p className="text-sm text-gray-500 mb-4">Or book directly if you're ready:</p>
                   <a 
                     href="https://calendly.com/steve-runbooksales/30min" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center justify-center text-primary font-medium border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-md transition-colors w-full sm:w-auto"
                   >
                     <Calendar size={18} className="mr-2 text-accent" />
                     Schedule via Calendly
                   </a>
                </div>
              </div>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                If it makes sense, we’ll move forward. If not, you’ll leave with clarity.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;