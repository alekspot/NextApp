import { FC } from 'react';
import styles from './Profile.module.scss';
import { useQuery } from '@tanstack/react-query';
import { authApi } from '../../api/auth';

type Props = {
  title?: string;
};

export const Profile: FC<Props> = ({ title }) => {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: authApi.profile,
    enabled: false,
  });

  return <div className={styles.wrap}>{title || user?.username}</div>;
};
