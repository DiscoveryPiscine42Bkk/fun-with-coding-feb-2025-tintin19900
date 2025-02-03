#!/bin/bash

# Count regular files and directories (excluding hidden ones)
count=$(find . -maxdepth 1 -type f -o -type d ! -name '.' | wc -l)

# Display the count only, no $ at the end
echo "$count"

