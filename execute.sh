#!/usr/bin/env bash
echo -d multi -h 0.0.0.0
echo script: $1
psql -U postgres -f $1 -d multi -h 0.0.0.0
