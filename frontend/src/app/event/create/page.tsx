import { Button, Input, Select, Text, Textarea } from '@chakra-ui/react';
import styles from './page.module.scss';
import cn from 'classnames';
import { DatePicker } from 'antd';

import ru from 'antd/es/date-picker/locale/ru_RU';

const buddhistLocale: typeof ru = {
  ...ru,
  lang: {
    ...ru.lang,
    fieldDateFormat: 'BBBB-MM-DD',
    // fieldDateTimeFormat: 'BBBB-MM-DD HH:mm:ss',
    // yearFormat: 'BBBB',
    // cellYearFormat: 'BBBB',
  },
};

export default function CreatePage() {
  return (
    <div className={styles.page}>
      <p className={styles.title}>Моё событие</p>
      <div className={styles.el}>
        <Text mb="0px" fontSize="16px" paddingLeft="20px">
          Название мероприятия
        </Text>
        <Input placeholder="Придумай название" size="md" className={styles.input} />
      </div>
      <div className={styles.el}>
        <p className={styles.text}>Выбери категорию</p>
        <Select placeholder="" className={styles.input}>
          <option value="option1">Искусство</option>
          <option value="option2">Развлечения</option>
          <option value="option3">Концерты</option>
          <option value="option4">Бары</option>
          <option value="option5">Обучение</option>
        </Select>
      </div>
      <div className={cn(styles.el, styles.place)}>
        <div className={styles.item}>
          <Text mb="0px" fontSize="16px" paddingLeft="20px">
            Где состоиться? {}
          </Text>
          <Input
            placeholder="Адрес"
            size="md"
            background="white"
            className={styles.inputPlace}
          />
        </div>
        <div className={styles.item}>
          <Button colorScheme="orange" borderRadius="0px 20px 20px 0px">
            Указать на карте
          </Button>
        </div>
      </div>
      <div className={cn(styles.el, styles.date, styles.text)}>
        <p>Когда?</p>
        <DatePicker showTime locale={buddhistLocale} />
      </div>
      <div className={styles.el}>
        <p className={styles.text}>Описание</p>
        <Textarea
          placeholder="Расскажи о событии"
          background="white"
          height="100%"
          className={styles.input}
        />
      </div>
      <div className={cn(styles.el, styles.btnCreate)}>
        <Button colorScheme="orange">Создать!</Button>
      </div>
    </div>
  );
}
