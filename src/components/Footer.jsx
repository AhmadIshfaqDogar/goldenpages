import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Mail,
  MapPin,
  Phone,
  
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ["Features", "Pricing", "Testimonials", "FAQ"],
    Company: ["About", "Blog", "Careers", "Press"],
    Support: ["Help Center", "Contact", "Privacy", "Terms"],
    Resources: ["Ebooks", "Tutorials", "Webinars", "Community"],
  };

  return (
    <footer className="bg-dark-secondary border-t border-gold-primary/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-gold-primary font-display text-2xl font-bold mb-6">
              <BookOpen className="w-6 h-6" />
              <span>GoldenPages</span>
            </div>
            <p className="text-text-gray mb-6 leading-relaxed">
              Empowering professionals with cutting-edge digital knowledge and
              strategies for unprecedented success.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-text-gray">
                <Mail className="w-4 h-4 text-gold-primary" />
                <span>ahmadishfaqdogar@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-text-gray">
                <Phone className="w-4 h-4 text-gold-primary" />
                <span>+92 (329) 476 3078</span>
              </div>
              <div className="flex items-center gap-3 text-text-gray">
                <MapPin className="w-4 h-4 text-gold-primary" />
                <span>Pakistan</span>
              </div>
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], columnIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: columnIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-text-light mb-6">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li key={link}>
                    <a
                      href="#"
                      className="text-text-gray hover:text-gold-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          className="mt-12 pt-12 border-t border-gold-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">
                Stay Updated
              </h3>
              <p className="text-text-gray">
                Get the latest insights, tips, and exclusive offers delivered to
                your inbox.
              </p>
            </div>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 w-full bg-dark-primary border border-gold-primary/20 rounded-lg px-4 py-3 text-text-light placeholder-text-gray focus:outline-none focus:border-gold-primary transition-colors duration-300"
                />
                <motion.button
                  className="w-full sm:w-auto bg-gold-primary text-dark-primary px-6 py-3 rounded-lg font-semibold hover:bg-gold-accent transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gold-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.p
              className="text-text-gray text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © {currentYear} GoldenPages. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Facebook, href: "https://www.facebook.com/share/1A5NgScfKP/" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ahmad-ishfaq-500517308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                { icon: Instagram, href: "https://www.facebook.com/share/1A5NgScfKP/" },
              ].map((social, index) => (
                <motion.a
                  key={social.icon.name}
                  href={social.href}
                  className="w-10 h-10 bg-dark-primary border border-gold-primary/20 rounded-lg flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-dark-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              className="flex gap-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="#"
                className="text-text-gray hover:text-gold-primary transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-text-gray hover:text-gold-primary transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-text-gray hover:text-gold-primary transition-colors duration-300"
              >
                Cookies
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
