import { motion } from "framer-motion";

const solutions = [
  {
    title: "One Home for Everything",
    description: "No more context switching between tools. All your product work lives in one place, connected and searchable.",
    icon: "🏠",
  },
  {
    title: "AI That Actually Helps",
    description: "Our AI doesn't just generate content—it understands your product context and accelerates real decision-making.",
    icon: "🤖",
  },
  {
    title: "From Insights to Delivery",
    description: "Connect customer conversations to opportunities, goals, and features in one seamless workflow.",
    icon: "🔗",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SolutionSection = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Finally, a place where{" "}
          <span className="text-gradient-coral">product work belongs</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Timebook is built as the permanent home for product management—where every insight, decision, and delivery has its place.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-4xl grid gap-8 md:grid-cols-3"
      >
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.title}
            variants={item}
            className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur p-8 text-center"
          >
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {solution.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {solution.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SolutionSection;
