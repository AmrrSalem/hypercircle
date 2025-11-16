import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  BarChart3,
  Code2,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description:
        'Cutting-edge AI solutions including Machine Learning, Deep Learning, NLP, and Computer Vision to automate and optimize your business processes.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: BarChart3,
      title: 'Data Science & Analytics',
      description:
        'Transform raw data into actionable insights with advanced analytics, predictive modeling, and comprehensive business intelligence solutions.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code2,
      title: 'Software Engineering',
      description:
        'Custom software development, cloud solutions, API integration, and legacy system modernization tailored to your business needs.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Quick turnaround times without compromising quality',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance standards',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Grow seamlessly from startup to enterprise',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Seasoned professionals with proven track records',
    },
  ];

  const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '24/7', label: 'Support Available' },
  ];

  const testimonials = [
    {
      quote:
        'hyperCircle transformed our data infrastructure and delivered AI solutions that increased our efficiency by 300%. Outstanding team!',
      author: 'Sarah Johnson',
      role: 'CTO, TechCorp Inc.',
    },
    {
      quote:
        'From initial consultation to deployment, the professionalism and expertise were exceptional. Highly recommend for enterprise solutions.',
      author: 'Michael Chen',
      role: 'Director of Engineering, DataFlow',
    },
    {
      quote:
        'As a small business, we needed scalable solutions. hyperCircle delivered exactly that with incredible support and guidance.',
      author: 'Emily Rodriguez',
      role: 'CEO, StartupHub',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
              <span className="gradient-text">Empowering Your Business</span>
              <br />
              <span className="text-gray-900">
                with AI & Data Science
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Complete SMB and Enterprise Solutions from Strategy to Deployment.
              Transform your business with intelligent, scalable technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg">
                Get Started
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </Link>
              <Link to="/services" className="btn-secondary text-lg">
                View Services
              </Link>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card group cursor-pointer"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center mt-6 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Choose hyperCircle</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We combine technical excellence with business acumen to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold font-heading mb-6">
                  Built for SMBs & Enterprises
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-accent-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Flexible pricing models that scale with your business
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-accent-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Industry-specific solutions backed by domain expertise
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-accent-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      End-to-end support from consultation to maintenance
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-3xl font-bold font-heading mb-6">
                  Cutting-Edge Technology
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-accent-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Latest AI/ML frameworks and cloud-native architecture
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-accent-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Continuous innovation and technology upgrades
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-accent-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Best practices in security, performance, and reliability
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Client Success Stories</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="mb-4">
                  <Award className="h-8 w-8 text-accent-500" />
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
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
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our AI, Data Science, and Software Engineering solutions
            can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/portfolio"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-500 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
