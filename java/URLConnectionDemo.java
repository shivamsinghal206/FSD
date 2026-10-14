import java.net.*;
import java.io.*;

public class URLConnectionDemo {
    public static void main(String[] args) {
        try {
            // Create a URL object
            URL url = new URL("https://www.example.com");

            // Open connection to the URL
            URLConnection con = url.openConnection();

            // Read data from the URL
            BufferedReader br = new BufferedReader(
                new InputStreamReader(con.getInputStream())
            );

            String line;

            // Display the data
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }

            // Close the reader
            br.close();
        }
        catch (Exception e) {
            System.out.println(e);
        }
    }
}