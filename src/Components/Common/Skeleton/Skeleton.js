import styles from './Skeleton.module.css'

const Skeleton = ({loaderStyles}) => {
  return (
    <div className={styles.skeleton} style={loaderStyles}>
      <div className={styles['skeleton-right']}>
        <div className={styles.square} ></div>
      </div>
    </div>
  );
};

export default Skeleton