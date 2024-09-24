import { Image } from '@chakra-ui/react';
import styles from './page.module.scss';

export default function ProfilePage() {
  const imagesName = [1, 2, 3, 4, 5, 6].map((item) => '/images/' + item + '.jpg');
  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.title}>Профиль</div>
        <div className={styles.images}>
          {imagesName.map((item) => (
            <Image
              className={styles.img}
              src={item}
              alt="Описание изображения"
              width={300}
              height={300}
              objectFit={'cover'}
              key={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
