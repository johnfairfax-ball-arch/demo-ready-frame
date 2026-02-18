import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Move In",
    description: "Bring your existing work into Timebook. Import from Miro, Notion, or start fresh. Your new home is ready.",
    icon: "🏠",
  },
  {
    step: "02", 
    title: "Settle In",
    description: "Connect customer conversations to opportunities. Let AI help you organize and find patterns in your research.",
    icon: "🔍",
  },
  {
    step: "03",
    title: "Make It Home",
    description: "Build your roadmap, track delivery, and watch everything stay connected. No more context switching.",
    icon: "🚀",
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

const HowItWorksSection = () => (
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
          Getting started is{" "}
          <span className="text-gradient-coral">as easy as moving in</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          From scattered tools to organized product home in three simple steps.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={item}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border/30 -translate-x-1/2" />
              )}
              <div className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur p-8 text-center relative">
                <div className="text-3xl font-bold text-primary mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HowItWorksSection;
