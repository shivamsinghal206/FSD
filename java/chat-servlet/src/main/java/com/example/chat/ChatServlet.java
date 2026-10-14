package com.example.chat;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/chat")
public class ChatServlet extends HttpServlet {
    private static final int MAX_MESSAGES = 200;
    private static final int MAX_USERNAME_LENGTH = 40;
    private static final int MAX_MESSAGE_LENGTH = 1000;

    private final Object messageLock = new Object();
    private final ArrayDeque<ChatMessage> messages = new ArrayDeque<>();
    private long nextMessageId = 1;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        long after;
        try {
            String afterParameter = request.getParameter("after");
            after = afterParameter == null ? 0 : Long.parseLong(afterParameter);
            if (after < 0) {
                writeError(response, HttpServletResponse.SC_BAD_REQUEST, "after must be non-negative");
                return;
            }
        } catch (NumberFormatException exception) {
            writeError(response, HttpServletResponse.SC_BAD_REQUEST, "after must be a number");
            return;
        }

        List<ChatMessage> newMessages = new ArrayList<>();
        synchronized (messageLock) {
            for (ChatMessage message : messages) {
                if (message.id > after) {
                    newMessages.add(message);
                }
            }
        }

        StringBuilder json = new StringBuilder("{\"messages\":[");
        for (int i = 0; i < newMessages.size(); i++) {
            if (i > 0) {
                json.append(',');
            }
            ChatMessage message = newMessages.get(i);
            json.append("{\"id\":").append(message.id)
                    .append(",\"user\":").append(jsonString(message.username))
                    .append(",\"text\":").append(jsonString(message.text))
                    .append('}');
        }
        response.getWriter().write(json.append("]}").toString());
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        String username = trimToEmpty(request.getParameter("username"));
        String text = trimToEmpty(request.getParameter("message"));
        if (username.isEmpty() || username.length() > MAX_USERNAME_LENGTH) {
            writeError(response, HttpServletResponse.SC_BAD_REQUEST,
                    "username must contain 1 to 40 characters");
            return;
        }
        if (text.isEmpty() || text.length() > MAX_MESSAGE_LENGTH) {
            writeError(response, HttpServletResponse.SC_BAD_REQUEST,
                    "message must contain 1 to 1000 characters");
            return;
        }

        long messageId;
        synchronized (messageLock) {
            messageId = nextMessageId++;
            messages.addLast(new ChatMessage(messageId, username, text));
            while (messages.size() > MAX_MESSAGES) {
                messages.removeFirst();
            }
        }

        response.setStatus(HttpServletResponse.SC_CREATED);
        response.getWriter().write("{\"id\":" + messageId + "}");
    }

    private static String trimToEmpty(String value) {
        return value == null ? "" : value.trim();
    }

    private static void writeError(HttpServletResponse response, int status, String message)
            throws IOException {
        response.setStatus(status);
        response.getWriter().write("{\"error\":" + jsonString(message) + "}");
    }

    private static String jsonString(String value) {
        StringBuilder json = new StringBuilder("\"");
        for (int i = 0; i < value.length(); i++) {
            char character = value.charAt(i);
            switch (character) {
                case '"':
                    json.append("\\\"");
                    break;
                case '\\':
                    json.append("\\\\");
                    break;
                case '\b':
                    json.append("\\b");
                    break;
                case '\f':
                    json.append("\\f");
                    break;
                case '\n':
                    json.append("\\n");
                    break;
                case '\r':
                    json.append("\\r");
                    break;
                case '\t':
                    json.append("\\t");
                    break;
                default:
                    if (character < 0x20) {
                        json.append(String.format("\\u%04x", (int) character));
                    } else {
                        json.append(character);
                    }
            }
        }
        return json.append('"').toString();
    }

    private static final class ChatMessage {
        private final long id;
        private final String username;
        private final String text;

        private ChatMessage(long id, String username, String text) {
            this.id = id;
            this.username = username;
            this.text = text;
        }
    }
}
