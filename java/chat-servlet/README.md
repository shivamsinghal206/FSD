# Servlet Chat

This is a separate Jakarta Servlet 6.0 web application for Tomcat 10.1 or later. It does not replace the standalone socket examples in the parent `java` directory.

## Build and deploy

From this directory, build the WAR with:

```text
mvn package
```

Copy `target/chat-servlet.war` to the Tomcat `webapps` directory and start Tomcat. Open `http://localhost:8080/chat-servlet/` in a browser.

The `/chat` endpoint accepts form-encoded `username` and `message` values with `POST`, and returns messages newer than the `after` query parameter with `GET`. Messages are kept in memory, shared only by this application instance, and limited to the latest 200; they are lost when the application restarts.
