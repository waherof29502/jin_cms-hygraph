import Link from 'next/link';
import styles from '../styles/BlogCard.module.css';

export default function BlogCard({
  title,
  author,
  coverPhoto,
  datePublish,
  slug,
}) {
  return (
    <div className={styles.card}>
      <Link href={'/posts/' + slug}>
        <div className={styles.imgContainer}>
          <img src={coverPhoto.url} alt="dfdf" />
        </div>
      </Link>
      <div className={styles.text}>
        <h2>{title}</h2>
        <div className={styles.details}>
          <div className={styles.author}>
            <h2>{author.name}</h2>
            <h3>{datePublish}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
