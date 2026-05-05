import styles from './Certifications.module.css'

const certGroups = [
  {
    title: 'UiPath Academy',
    items: [
      { name: 'Automation Explorer' },
      { name: 'Automation Developer Associate' },
      { name: 'Automation Developer Professional', inProgress: true },
    ],
  },
  {
    title: 'Udemy',
    items: [
      { name: 'The Complete Web Development Bootcamp' },
      { name: 'Complete Modern PHP Developer Course 2023' },
    ],
  },
  {
    title: 'freeCodeCamp',
    items: [
      { name: 'Responsive Web Design' },
      { name: 'JavaScript Algorithms & Data Structures' },
    ],
  },
  {
    title: 'Education',
    items: [
      { name: 'BS Computer Engineering' },
      { name: 'Polytechnic University of the Philippines' },
      { name: 'Magna Cum Laude (GPA 1.232)' },
      { name: 'Thesis: Arduino-based Diabetes Detection' },
    ],
  },
]

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
