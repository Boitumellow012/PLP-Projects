import os

def read_file(file_path):
    try:
        with open(file_path, 'r') as file:
            content = file.read()
        print("\nFile content:\n")
        print(content)
    except IOError:
        print(f"Error: Could not read the file '{file_path}'.")

def write_file(file_path):
    try:
        with open(file_path, 'r') as file:
            existing_content = file.read()
        
        print("\nExisting file content:\n")
        print(existing_content)
        
        new_content = input("\nEnter new text to add (press Enter to finish):\n")
        
        modified_content = existing_content + "\n" + new_content
        
        with open(file_path, 'w') as file:
            file.write(modified_content)
        
        print("\nFile has been updated successfully!")
    except IOError:
        print(f"Error: Could not write to the file '{file_path}'.")

def main():
    file_path = input("Enter the file path (e.g. PLP-Projects/python/myfile.txt): ")

    if not os.path.exists(file_path):
        print(f"Error: The file '{file_path}' does not exist.")
        return

    while True:
        choice = input("\nDo you want to (1) read or (2) write to the file? Enter 1 or 2: ").strip()
        if choice == '1':
            read_file(file_path)
            break
        elif choice == '2':
            write_file(file_path)
            break
        else:
            print("Invalid choice. Please enter 1 or 2.")

if __name__ == "__main__":
    main()