#!/bin/bash
# Simple Interest Calculator
read -p "Enter principal amount: " principal
read -p "Enter rate of interest: " rate
read -p "Enter time (in years): " time
interest=$(echo "scale=2; $principal * $rate * $time / 100" | bc)
echo "Simple Interest is: $interest"
