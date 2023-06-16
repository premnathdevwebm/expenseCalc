import styles from "./Card.module.css"
export const Card = ({className, children}) => {
  return (
    <div className={`${styles.card} ${className}`}>{children}</div>
  )
}