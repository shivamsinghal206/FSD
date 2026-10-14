import java.io.*;
import java.net.*;

public class ChatServer {

    public static void main(String[] args) {

        try {
            // Create server socket on port 5000
            ServerSocket serverSocket = new ServerSocket(5001);

            System.out.println("Server started...");
            System.out.println("Waiting for client...");

            // Accept client connection
            Socket socket = serverSocket.accept();

            System.out.println("Client connected!");

            // Input from client
            BufferedReader in = new BufferedReader(
                    new InputStreamReader(socket.getInputStream()));

            // Output to client
            PrintWriter out = new PrintWriter(
                    socket.getOutputStream(), true);

            // Keyboard input
            BufferedReader keyboard = new BufferedReader(
                    new InputStreamReader(System.in));

            String clientMessage;
            String serverMessage;

            while (true) {

                // Receive message from client
                clientMessage = in.readLine();

                if (clientMessage == null ||
                    clientMessage.equalsIgnoreCase("exit")) {
                    System.out.println("Client disconnected.");
                    break;
                }

                System.out.println("Client: " + clientMessage);

                // Send message to client
                System.out.print("Server: ");
                serverMessage = keyboard.readLine();

                out.println(serverMessage);

                if (serverMessage.equalsIgnoreCase("exit")) {
                    break;
                }
            }

            socket.close();
            serverSocket.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}