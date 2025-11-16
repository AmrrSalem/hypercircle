import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  Zap,
  Shield,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new solutions to solve complex problems.',
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Your success is our success. We build long-term partnerships focused on delivering measurable results.',
    },
    {
      icon: Shield,
      title: 'Quality & Security',
      description: 'We never compromise on code quality, security standards, or best practices in everything we deliver.',
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'We work as an extension of your team, ensuring transparent communication and shared ownership.',
    },
    {
      icon: Zap,
      title: 'Agility & Speed',
      description: 'Rapid iterations, quick deployments, and responsive support to keep your business moving forward.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'We believe in constant learning and improvement, both for ourselves and our clients.',
    },
  ];

  const expertise = [
    {
      category: 'AI & Machine Learning',
      technologies: [
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'Keras',
        'OpenAI GPT',
        'Hugging Face',
      ],
    },
    {
      category: 'Data Engineering',
      technologies: [
        'Apache Spark',
        'Apache Kafka',
        'Airflow',
        'dbt',
        'Snowflake',
        'BigQuery',
      ],
    },
    {
      category: 'Cloud Platforms',
      technologies: [
        'AWS',
        'Google Cloud',
        'Microsoft Azure',
        'Kubernetes',
        'Docker',
        'Terraform',
      ],
    },
    {
      category: 'Development',
      technologies: [
        'Python',
        'JavaScript/TypeScript',
        'React',
        'Node.js',
        'Go',
        'Java',
      ],
    },
  ];

  const achievements = [
    {
      icon: Award,
      metric: '500+',
      label: 'Projects Delivered',
      description: 'Successfully completed projects across various industries',
    },
    {
      icon: Users,
      metric: '200+',
      label: 'Happy Clients',
      description: 'From startups to Fortune 500 companies',
    },
    {
      icon: Globe,
      metric: '30+',
      label: 'Countries Served',
      description: 'Global reach with local understanding',
    },
    {
      icon: TrendingUp,
      metric: '98%',
      label: 'Client Retention',
      description: 'Long-term partnerships built on trust',
    },
  ];

  const industries = [
    'Healthcare & Life Sciences',
    'Financial Services',
    'E-commerce & Retail',
    'Manufacturing & IoT',
    'Education & EdTech',
    'Media & Entertainment',
    'Logistics & Supply Chain',
    'Real Estate & PropTech',
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
              <span className="text-gray-900">Transforming Businesses</span>
              <br />
              <span className="gradient-text">Through Technology Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a team of passionate technologists, data scientists, and engineers
              dedicated to building solutions that make a real difference
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold font-heading mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To democratize access to cutting-edge AI, Data Science, and Software Engineering
                solutions, making them accessible and affordable for businesses of all sizes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe that every organization, from small startups to large enterprises,
                deserves access to world-class technology solutions that drive growth and innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-secondary-500 to-accent-500 flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold font-heading mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To be the global leader in AI-powered business transformation, recognized for
                our innovation, integrity, and the tangible impact we create for our clients.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We envision a future where intelligent technology seamlessly integrates with
                business operations, enabling organizations to achieve their full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
                  <value.icon className="h-6 w-6 text-primary-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Impact in Numbers</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Measurable results that demonstrate our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {achievement.metric}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  {achievement.label}
                </div>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Technology Expertise</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We work with the latest and most powerful tools in the industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {area.category}
                </h3>
                <ul className="space-y-2">
                  {area.technologies.map((tech, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-accent-500 mr-2 flex-shrink-0" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Deep domain expertise across a wide range of industries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <p className="font-semibold text-gray-900">{industry}</p>
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
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help transform your business with cutting-edge technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Get in Touch
            </a>
            <a
              href="/portfolio"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-500 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
