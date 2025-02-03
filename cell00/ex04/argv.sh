#!/bin/bash

# Check if no arguments are supplied
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 0
fi

# Print up to the first 3 arguments
for i in {1..3}; do
    if [ -n "${!i}" ]; then
        echo "${!i}"
    fi
done
