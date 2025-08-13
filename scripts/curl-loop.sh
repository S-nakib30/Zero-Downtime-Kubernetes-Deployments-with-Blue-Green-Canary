#!/usr/bin/env bash
# Continuously curl the service to visualize zero downtime
while true; do
  date "+%H:%M:%S" | tr -d '\n'; echo -n "  ->  " ; curl -s http://localhost:8080/
  sleep 0.5
done
