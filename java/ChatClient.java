import java.io.*;
import java.net.*;

public class ChatClient {

    public static void main(String[] args) {

        try {
            // Connect to server
            Socket socket = new Socket("localhost", 5001);

            System.out.println("Connected to server!");

            // Input from server
            BufferedReader in = new BufferedReader(
                    new InputStreamReader(socket.getInputStream()));

            // Output to server
            PrintWriter out = new PrintWriter(
                    socket.getOutputStream(), true);

            // Keyboard input
            BufferedReader keyboard = new BufferedReader(
                    new InputStreamReader(System.in));

            String clientMessage;
            String serverMessage;

            while (true) {

                // Send message to server
                System.out.print("Client: ");
                clientMessage = keyboard.readLine();

                out.println(clientMessage);

                if (clientMessage.equalsIgnoreCase("exit")) {
                    break;
                }

                // Receive message from server
                serverMessage = in.readLine();

                if (serverMessage == null ||
                    serverMessage.equalsIgnoreCase("exit")) {
                    System.out.println("Server disconnected.");
                    break;
                }

                System.out.println("Server: " + serverMessage);
            }

            socket.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}