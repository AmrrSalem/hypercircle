import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Clock,
  Globe,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      // EmailJS configuration
      // NOTE: Replace these with your actual EmailJS credentials
      // Get your credentials from https://www.emailjs.com/
      const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
      const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        publicKey
      );

      setStatus({
        type: 'success',
        message:
          'Thank you for reaching out! We\'ll get back to you within 24 hours.',
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        type: 'error',
        message:
          'Sorry, there was an error sending your message. Please try again or contact us directly at contact@hypercircle.com',
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@hypercircle.com',
      link: 'mailto:contact@hypercircle.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (234) 567-890',
      link: 'tel:+1234567890',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Global Remote Services',
      link: null,
    },
  ];

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer:
        'Project timelines vary based on scope and complexity. Small projects typically take 2-4 weeks, while enterprise solutions may take 3-6 months. We provide detailed timelines during our initial consultation.',
    },
    {
      question: 'Do you work with startups and small businesses?',
      answer:
        'Absolutely! We offer flexible packages designed specifically for SMBs with scalable pricing and quick deployment options. We believe great technology should be accessible to businesses of all sizes.',
    },
    {
      question: 'What is your pricing model?',
      answer:
        'We offer flexible pricing including fixed-price projects, time & materials, and retainer-based engagements. Pricing depends on project scope, complexity, and timeline. Contact us for a customized quote.',
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer:
        'Yes! We offer comprehensive support packages including 24/7 monitoring, regular updates, performance optimization, and dedicated technical support to ensure your solution continues to deliver value.',
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer:
        'Definitely. We specialize in integrating new solutions with existing infrastructure, whether it\'s legacy systems, cloud platforms, or third-party services. We ensure seamless data flow and compatibility.',
    },
    {
      question: 'What industries do you specialize in?',
      answer:
        'We have deep expertise across healthcare, finance, e-commerce, manufacturing, education, and more. Our team includes domain experts who understand industry-specific challenges and regulations.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              <span className="text-gray-900">Let's Build Something</span>
              <br />
              <span className="gradient-text">Amazing Together</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a project in mind? We'd love to hear about it. Get in touch and
              let's discuss how we can help transform your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-primary-500 transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h2 className="text-3xl font-bold font-heading mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors outline-none"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors outline-none"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors outline-none"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="ai">AI Solutions</option>
                    <option value="data-science">Data Science & Analytics</option>
                    <option value="software">Software Engineering</option>
                    <option value="smb">SMB Solutions</option>
                    <option value="enterprise">Enterprise Solutions</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status.type && (
                  <div
                    className={`p-4 rounded-lg flex items-start ${
                      status.type === 'success'
                        ? 'bg-green-50 text-green-800'
                        : 'bg-red-50 text-red-800'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    )}
                    <p>{status.message}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="card">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Let's Discuss Your Project
                    </h3>
                    <p className="text-gray-600">
                      Schedule a free consultation to discuss your requirements and
                      explore how we can help achieve your goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-secondary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quick Response Time</h3>
                    <p className="text-gray-600">
                      We typically respond to all inquiries within 24 hours during
                      business days. Urgent requests are prioritized.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Globe className="h-6 w-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Global Availability</h3>
                    <p className="text-gray-600">
                      We work with clients worldwide and offer flexible meeting times
                      to accommodate different time zones.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
