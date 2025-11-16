import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  BarChart3,
  Code2,
  Cpu,
  Database,
  Cloud,
  Sparkles,
  LineChart,
  Boxes,
  GitBranch,
  Network,
  Server,
  Building2,
  Store,
  ArrowRight,
} from 'lucide-react';

const Services = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Custom ML models for prediction, classification, and optimization tailored to your business needs.',
    },
    {
      icon: Sparkles,
      title: 'Deep Learning',
      description: 'Advanced neural networks for complex pattern recognition and autonomous decision-making.',
    },
    {
      icon: Network,
      title: 'Natural Language Processing',
      description: 'Intelligent text analysis, chatbots, sentiment analysis, and language understanding solutions.',
    },
    {
      icon: Cpu,
      title: 'Computer Vision',
      description: 'Image recognition, object detection, facial recognition, and visual quality control systems.',
    },
  ];

  const dataServices = [
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Interactive dashboards, reporting systems, and data visualization for informed decision-making.',
    },
    {
      icon: LineChart,
      title: 'Predictive Analytics',
      description: 'Forecast trends, customer behavior, and market dynamics with advanced statistical modeling.',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Build robust data pipelines, ETL processes, and data warehousing solutions at scale.',
    },
    {
      icon: Boxes,
      title: 'Big Data Solutions',
      description: 'Handle massive datasets with distributed computing and real-time processing capabilities.',
    },
  ];

  const softwareServices = [
    {
      icon: Code2,
      title: 'Custom Development',
      description: 'Bespoke software applications designed and built specifically for your business requirements.',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Cloud-native architecture, migration services, and infrastructure optimization on AWS, Azure, GCP.',
    },
    {
      icon: GitBranch,
      title: 'API Integration',
      description: 'Seamless integration with third-party services, RESTful APIs, and microservices architecture.',
    },
    {
      icon: Server,
      title: 'Legacy Modernization',
      description: 'Transform outdated systems into modern, scalable applications with minimal disruption.',
    },
  ];

  const packages = [
    {
      icon: Store,
      title: 'SMB Solutions',
      description: 'Scalable packages designed for small to medium-sized businesses',
      features: [
        'Affordable pricing models',
        'Quick deployment (2-4 weeks)',
        'Essential AI & automation tools',
        'Cloud-based infrastructure',
        'Ongoing support & training',
        'Scalable as you grow',
      ],
      cta: 'Start Small, Scale Fast',
    },
    {
      icon: Building2,
      title: 'Enterprise Solutions',
      description: 'Comprehensive implementations for large-scale organizations',
      features: [
        'Custom architecture design',
        'Multi-team collaboration',
        'Advanced security & compliance',
        'Dedicated support team',
        'Integration with existing systems',
        'Long-term strategic partnership',
      ],
      cta: 'Enterprise Excellence',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Consultation',
      description: 'We analyze your business needs, challenges, and goals to design the perfect solution.',
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Detailed project roadmap with timelines, milestones, and resource allocation.',
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'Agile development process with regular updates and iterative improvements.',
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing to ensure reliability, performance, and security standards.',
    },
    {
      step: '05',
      title: 'Deployment & Training',
      description: 'Smooth rollout with comprehensive training and documentation for your team.',
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and optimization to ensure continued success.',
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
              <span className="gradient-text">Comprehensive Technology</span>
              <br />
              <span className="text-gray-900">Solutions for Every Need</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI-powered automation to enterprise software development - we deliver
              cutting-edge solutions that drive real business results
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section id="ai" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block p-3 bg-purple-100 rounded-lg mb-4">
              <Brain className="h-10 w-10 text-purple-600" />
            </div>
            <h2 className="section-title">Artificial Intelligence Solutions</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Harness the power of AI to automate processes, gain insights, and make smarter decisions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group hover:border-purple-200"
              >
                <service.icon className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Science Section */}
      <section id="data-science" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block p-3 bg-blue-100 rounded-lg mb-4">
              <BarChart3 className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="section-title">Data Science & Analytics</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Transform raw data into actionable insights that drive strategic business decisions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group hover:border-blue-200"
              >
                <service.icon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Engineering Section */}
      <section id="software" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block p-3 bg-green-100 rounded-lg mb-4">
              <Code2 className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="section-title">Software Engineering</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Custom-built, scalable software solutions engineered for performance and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {softwareServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group hover:border-green-200"
              >
                <service.icon className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SMB & Enterprise Packages */}
      <section id="enterprise" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Solutions for Every Business Size</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Whether you're a startup or a Fortune 500 company, we have the right solution for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                    <pkg.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold font-heading">{pkg.title}</h3>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="btn-primary w-full text-center block"
                >
                  {pkg.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Development Process</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A proven methodology that ensures quality, transparency, and timely delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="card">
                  <div className="text-5xl font-bold text-primary-100 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free consultation and discover how our services can transform your business
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg inline-block"
          >
            Schedule Free Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
