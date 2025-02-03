#!/bin/bash

# Check if no arguments are supplied
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

# Create directories with "ex" prefix
for arg in "$@"; do
    mkdir "ex$arg"
done
