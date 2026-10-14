import java.io.DataInputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class MyServer {
    public static void main(String[] args)
    {

        try (ServerSocket serverSocket = new ServerSocket(6666)) {

            System.out.println(
                "Server started. Listening on port 6666...");

            try (Socket socket = serverSocket.accept();
                 DataInputStream input
                 = new DataInputStream(
                     socket.getInputStream())) {

                System.out.println("Client connected!");

                String message = input.readUTF();
                System.out.println("Message: " + message);
            }
        }
        catch (Exception e) {
            System.out.println("Server Error: " + e);
        }
    }
}