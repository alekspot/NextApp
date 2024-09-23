FROM gradle:7.6.0-jdk19

# обязательно указываем свою собсвтенную папку, т.к. Volume папка по-умолчанию /home/gradle/.gradle может удаляться автоматически
ENV GRADLE_USER_HOME /home/gradle/cache

# установка корневого сертификат в JVM (все дочерние образы будут автоматичкески иметь этот сертификат "внутри" JVM)
WORKDIR /app/certs

# установка сертификата в java в качестве доверенного
COPY ./mount/ssl/ca.cer ./

# чтобы скрипт keytool был доступен для вызова напрямую без указания абсолютного пути
RUN export PATH="$PATH:$JAVA_HOME/conf/security" 
RUN keytool -cacerts -storepass changeit -noprompt -trustcacerts -importcert -v -alias ca-localhost -file /app/certs/ca.cer

WORKDIR /app/deps
# в этот файл build.gradle нужно добавить dependencies из всех проектов (т.е. собираем все зависимости "в одну кучу")
COPY deps/build.gradle ./
COPY deps/settings.gradle ./
COPY deps/src ./src
RUN gradle bootJar -i --stacktrace

# Можно запускать контейнер образа, чтобы проверять наличие нужных файлов (для удобства - вкладка files в docker desktop)
# Но для работы дочерних образов runtime контейнер не нужен, он только для проверки
CMD ["tail", "-f"]
# когда все проверите и заработает - можно закомментировать строку, чтобы контейнер просто так не "висел" (подробнее - см. самый первый комментарий вверху)

