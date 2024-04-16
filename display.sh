# 🔥 NOTE: this sends your information to a 3rd party so it's very likely it may be logged! 👎
qrcode () {
    local input="$*" 
    [ -z "$input" ] && _qrcode_show_message && local input="@/dev/stdin" 
    curl -d "$input" https://qrcode.show
}

# Check if the file exists
if [ ! -f "codes.txt" ]; then
    echo "File codes.txt not found!"
    exit 1
fi

# Read each line in codes.txt
while IFS= read -r line; do
    # Use the qrcode command with the content of the current line
    echo ">> $line"
    qrcode "$line"
    
    # Wait for the user to press Enter
    echo "Press Enter to continue to the next code..."
    read line < /dev/tty
done < "codes.txt"