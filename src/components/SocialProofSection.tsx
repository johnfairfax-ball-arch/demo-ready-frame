import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Timebook finally gave us a home for our product work. No more scattered documents and lost context.",
    author: "Sarah Chen",
    role: "Senior PM",
    company: "TechCorp",
  },
  {
    quote: "The AI insights alone are worth it. It's like having a product analyst working alongside me 24/7.",
    author: "Marcus Rodriguez", 
    role: "Head of Product",
    company: "StartupXYZ",
  },
  {
    quote: "We went from insights to roadmap in days instead of weeks. The 'home' analogy is perfect.",
    author: "Emily Watson",
    role: "Product Manager",
    company: "Innovation Labs",
  },
];

const companies = [
  "TechCorp",
  "StartupXYZ", 
  "Innovation Labs",
  "DigitalFirst",
  "CloudBase",
  "DataFlow"
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SocialProofSection = () => (
  <section className="py-24 md:py-32 bg-gradient-subtle">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Product managers have found{" "}
          <span className="text-gradient-coral">their home</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Join hundreds of PMs who've stopped being nomads and built their product home with Timebook.
        </p>
      </motion.div>

      {/* Company logos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto max-w-4xl mb-16"
      >
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {companies.map((company) => (
            <div key={company} className="text-sm font-medium text-muted-foreground">
              {company}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-5xl grid gap-8 md:grid-cols-3"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.quote}
            variants={item}
            className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur p-8"
          >
            <p className="text-base text-foreground/90 italic leading-relaxed mb-6">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-coral flex items-center justify-center text-foreground font-semibold">
                {testimonial.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SocialProofSection;
