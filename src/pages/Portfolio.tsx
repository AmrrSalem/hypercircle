import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  ShoppingCart,
  Activity,
  Building2,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const Portfolio = () => {
  const caseStudies = [
    {
      icon: ShoppingCart,
      title: 'E-Commerce Revenue Optimization',
      industry: 'Retail & E-Commerce',
      client: 'Major Online Retailer',
      challenge:
        'A leading e-commerce platform was experiencing declining conversion rates and struggling with personalized product recommendations at scale.',
      solution:
        'We implemented a sophisticated AI-powered recommendation engine using collaborative filtering and deep learning models, integrated with their existing infrastructure. The system processes millions of user interactions in real-time to deliver personalized product suggestions.',
      results: [
        '47% increase in conversion rates',
        '3.2x improvement in average order value',
        '89% customer satisfaction with recommendations',
        '$12M additional annual revenue generated',
      ],
      technologies: [
        'Python',
        'TensorFlow',
        'AWS SageMaker',
        'Redis',
        'PostgreSQL',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Activity,
      title: 'Healthcare Predictive Analytics Platform',
      industry: 'Healthcare & Life Sciences',
      client: 'Regional Hospital Network',
      challenge:
        'A network of 15 hospitals needed to predict patient readmission risks and optimize resource allocation while maintaining HIPAA compliance.',
      solution:
        'We developed a comprehensive predictive analytics platform that analyzes patient data, treatment history, and demographic information to identify high-risk patients. The system provides real-time alerts and actionable recommendations to healthcare providers.',
      results: [
        '34% reduction in patient readmissions',
        '$8M annual cost savings',
        '25% improvement in resource utilization',
        '100% HIPAA compliance maintained',
      ],
      technologies: [
        'Python',
        'Scikit-learn',
        'Azure ML',
        'Power BI',
        'FHIR API',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: TrendingUp,
      title: 'Financial Fraud Detection System',
      industry: 'Financial Services',
      client: 'FinTech Payment Platform',
      challenge:
        'A rapidly growing payment platform was losing millions to fraudulent transactions and needed a real-time fraud detection system that wouldn\'t impact legitimate transactions.',
      solution:
        'We built an advanced machine learning fraud detection system using ensemble methods and anomaly detection algorithms. The system analyzes transaction patterns, user behavior, and network data in real-time to flag suspicious activities.',
      results: [
        '93% accuracy in fraud detection',
        '78% reduction in false positives',
        '<100ms transaction processing time',
        '$15M+ in prevented fraudulent transactions',
      ],
      technologies: [
        'Python',
        'XGBoost',
        'Apache Kafka',
        'Elasticsearch',
        'Docker',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Building2,
      title: 'Enterprise Data Warehouse Migration',
      industry: 'Manufacturing',
      client: 'Global Manufacturing Corporation',
      challenge:
        'A Fortune 500 manufacturer needed to migrate their legacy on-premise data warehouse to the cloud while maintaining business continuity and improving analytics capabilities.',
      solution:
        'We executed a phased migration strategy, moving their 50TB+ data warehouse to a modern cloud-native architecture. We implemented automated ETL pipelines, real-time dashboards, and self-service analytics tools for their global teams.',
      results: [
        '60% reduction in infrastructure costs',
        '10x faster query performance',
        '100% data integrity maintained',
        'Zero downtime during migration',
      ],
      technologies: [
        'Snowflake',
        'Apache Airflow',
        'dbt',
        'Tableau',
        'AWS',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const additionalProjects = [
    'AI-Powered Customer Service Chatbot - SaaS Company',
    'Supply Chain Optimization Platform - Logistics Provider',
    'Real-Time IoT Analytics Dashboard - Smart Manufacturing',
    'Automated Document Processing - Legal Firm',
    'Predictive Maintenance System - Energy Sector',
    'Personalization Engine - Media & Entertainment',
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
              <span className="text-gray-900">Success Stories &</span>
              <br />
              <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world projects where we've helped businesses transform through
              AI, Data Science, and innovative software solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`${index % 2 === 1 ? 'bg-gray-50' : ''} rounded-2xl p-8 md:p-12`}
            >
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left Column */}
                <div>
                  <div
                    className={`inline-block p-3 rounded-lg bg-gradient-to-br ${study.gradient} mb-6`}
                  >
                    <study.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-primary-500 mb-2">
                    {study.industry}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                    {study.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    <span className="font-semibold">Client:</span> {study.client}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-3 flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      The Challenge
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center">
                      <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                      Our Solution
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Results */}
                  <div className="card bg-white">
                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                      <TrendingUp className="h-6 w-6 text-accent-500 mr-3" />
                      Key Results
                    </h3>
                    <ul className="space-y-4">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-6 w-6 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-gray-900">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">More Projects</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A selection of additional successful projects across various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card group hover:border-primary-200 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <p className="text-gray-900 font-semibold group-hover:text-primary-500 transition-colors">
                    {project}
                  </p>
                  <ArrowRight className="h-5 w-5 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Track Record</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">$100M+</div>
              <div className="text-gray-600">Client Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
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
            Let's Create Your Success Story
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ready to achieve similar results for your business? Get in touch with our team today
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg inline-block"
          >
            Start Your Project
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Portfolio;
