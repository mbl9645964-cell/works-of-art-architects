import { motion } from 'framer-motion'
import { team } from '../data/content'
import { Reveal, EASE } from './primitives'

export default function Team() {
  return (
    <section id="team" className="bg-canvas py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-6 pb-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <p className="eyebrow mb-5">( The people )</p>
            <h2 className="display text-charcoal text-[10vw] leading-none sm:text-6xl lg:text-7xl">
              Our Team
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-3 lg:col-start-10 lg:self-end" delay={0.1}>
            <p className="text-sm leading-relaxed text-cocoa">
              A practice built on decades of architectural and engineering experience — brought
              together under one roof.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-charcoal/12">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.7, ease: EASE, delay: (i % 4) * 0.05 }}
              className="grid grid-cols-12 items-baseline gap-4 border-b border-charcoal/12 py-8 sm:py-9"
            >
              <span className="col-span-2 font-serif text-lg text-clay sm:text-xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="col-span-10 font-serif text-2xl font-light leading-tight text-charcoal sm:col-span-5 sm:text-3xl">
                {m.name}
              </h3>
              <p className="col-span-7 mt-1 text-sm text-cocoa sm:col-span-3 sm:col-start-8 sm:mt-0">
                {m.role}
              </p>
              <p className="col-span-5 mt-1 justify-self-end text-[11px] uppercase tracking-label text-umber sm:col-span-2 sm:mt-0 sm:text-right">
                {m.exp}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
