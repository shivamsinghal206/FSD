import java.io.IOException;
//import java.net.InetAddress;
import java.net.*;
import java.util.Arrays;

public class InetAddressDemo {
    public static void main(String[] args) {
        try {
            System.out.println("--- 1. Getting InetAddress Instances ---");
            // Factory method to get the local machine details
            InetAddress localHost = InetAddress.getLocalHost();
            
            // Factory method to get details of a remote website
            InetAddress remoteHost = InetAddress.getByName("www.google.com");

            System.out.println("Local Host instance created.");
            System.out.println("Remote Host instance created.\n");

            System.out.println("--- 2. Utilizing Instance Methods ---");
            
            // Methods on Local Host
            System.out.println("[Local Machine Properties]");
            System.out.println("Host Name:            " + localHost.getHostName());
            System.out.println("Canonical Host Name:  " + localHost.getCanonicalHostName());
            System.out.println("IP Address String:    " + localHost.getHostAddress());
            System.out.println("Raw IP Bytes (Array): " + Arrays.toString(localHost.getAddress()));
            System.out.println("Is Loopback Address?  " + localHost.isLoopbackAddress());
            System.out.println();

            // Methods on Remote Host
            System.out.println("[Remote Machine Properties - Google]");
            System.out.println("Host Name:            " + remoteHost.getHostName());
            System.out.println("Canonical Host Name:  " + remoteHost.getCanonicalHostName());
            System.out.println("IP Address String:    " + remoteHost.getHostAddress());
            
            // Testing reachability (checks if the host can be pinged within 3000ms)
            System.out.print("Checking reachability (Timeout 3s)... ");
            if (remoteHost.isReachable(3000)) {
                System.out.println("Host is Reachable!");
            } else {
                System.out.println("Host is Unreachable (or ping requests are blocked).");
            }
            
            //System.out.println("Is Multicast Address? " + remoteHost.isMcastAddress());

        } catch (UnknownHostException e) {
            // Thrown if the IP address of a host could not be determined
            System.err.println("Host could not be resolved: " + e.getMessage());
        } catch (IOException e) {
            // Thrown if a network error occurs during the reachability check
            System.err.println("Network error during reachability test: " + e.getMessage());
        }
    }
}