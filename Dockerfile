FROM openjdk:17.0.1-jdk-slim

ADD /build/libs/test-0.0.1-SNAPSHOT.jar test.jar

ENTRYPOINT ["java","-jar","-Dspring.profiles.active=local", "/test.jar"]