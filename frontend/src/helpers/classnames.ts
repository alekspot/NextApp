type ClassItem = string | { [key: string]: boolean } | undefined;

export const cn = (...args: ClassItem[]): string => {
  const classArray = args;

  let classStr = '';

  classArray.forEach((classItem) => {
    if (typeof classItem === 'string') {
      classStr += classItem + ' ';
    }

    if (typeof classItem === 'object') {
      const classObj = classItem;

      Object.keys(classObj).forEach((key) => {
        if (classObj[key]) {
          classStr += key + ' ';
        }
      });
    }
  });

  return classStr.trim();
};
