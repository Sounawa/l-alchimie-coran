#!/bin/bash
cd /home/z/my-project
while true; do
    bun .next/standalone/server.js
    echo "Server crashed, restarting in 2 seconds..."
    sleep 2
done
