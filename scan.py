import socket

def scan_port_80(url):
    """
    This function takes a URL as input and checks if port 80 is open.
    
    :param url: The URL to be scanned (str)
    """
    try:
        # Parse the URL to extract the hostname
        hostname = url.split('//')[1].split('/')[0]
        
        # Create a socket object
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(5)  # Set a timeout for the connection attempt
        
        # Attempt to connect to port 80 of the extracted hostname
        result = sock.connect_ex((hostname, 80))
        
        if result == 0:
            print(f"Port 80 is open on {hostname}")
        else:
            print(f"Port 80 is closed or not reachable on {hostname}")
    
    except Exception as e:
        # Handle any exceptions that occur during the process
        print(f"An error occurred: {e}")
    
    finally:
        # Close the socket to free up resources
        sock.close()

if __name__ == '__main__':
    import sys
    if len(sys.argv) > 1:
        scan_port_80(sys.argv[1])
    else:
        print("Please provide a URL as an argument.")
