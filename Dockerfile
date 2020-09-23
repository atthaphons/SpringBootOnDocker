FROM openjdk:8-jdk-alpine
WORKDIR /usr/lib/
COPY ./build/libs/ExamSpringBootDemo-0.0.1-SNAPSHOT.jar .
ENTRYPOINT ["java","-jar","/usr/lib/ExamSpringBootDemo-0.0.1-SNAPSHOT.jar"]

