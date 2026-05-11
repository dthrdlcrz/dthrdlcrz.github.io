import { certGroups } from '../configs/portfolioData'
import styles from './Certifications.module.css'

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <div className="section-label">Certifications</div>
        <h2 className="section-title">What I've earned</h2>
        <div className={styles.grid}>
          {certGroups.map(group => (
            <div key={group.title} className={styles.group}>
              <div className={styles.groupTitle}>{group.title}</div>
              <div className={styles.list}>
                {group.items.map(item => (
                  <span key={item.name} className={styles.item}>
                    {item.name}
                    {item.inProgress && (
                      <span className={styles.badge}>in progress</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
