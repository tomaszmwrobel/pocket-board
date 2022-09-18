FROM maven:3.6.3-openjdk-11-slim AS builder

WORKDIR /app

COPY ./ ./
RUN mvn clean package


FROM openjdk:11.0.16-jre-slim

COPY --from=builder /app/target/pocket-board-api-0.0.1-SNAPSHOT.jar /app.jar
CMD ["java", "-jar", "/app.jar"]