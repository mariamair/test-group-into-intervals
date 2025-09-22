# Test results
**Latest run:** Mon Sep 22 2025 09:20

## Group input data into intervals with colors

| Test | Status |
 |---|---|
| should return correct intervals with colors | ✅ |
| should return correct intervals with colors for sparse array with uneven number of intervals | ✅ |
| should use correct color scheme for intervals | ✅ |


## Validate input array

| Test | Status |
 |---|---|
| should be array | ✅ |
| should not be mixed array | ✅ |
| should be array of numbers | ✅ |


## Group input data into intervals

| Test | Status |
 |---|---|
| should return correct intervals | ✅ |
| should return correct intervals for sparse array | ✅ |
| interval width is adjusted to range | ✅ |


## Sort input array

| Test | Status |
 |---|---|
| sort short array ascending when ascending true | ✅ |
| sort sparse array ascending and remove empty slots when ascending true | ✅ |
| sort short array descending when ascending false | ✅ |
| sort sparse array descending and remove empty slots when ascending false | ✅ |


## Calculate interval metadata

| Test | Status |
 |---|---|
| calculate minimum value for ascending array | ✅ |
| calculate maximum value for ascending array | ✅ |
| calculate minimum value for descending array | ✅ |
| calculate maximum value for descending array | ✅ |
| calculate range | ✅ |
| number of intervals corresponds to number of data points | ✅ |
| interval width corresponds to range and number of intervals | ✅ |


## Create colors for intervals

| Test | Status |
 |---|---|
| calculate middle RGB value | ✅ |
| number of colors matches number of intervals | ✅ |
| create more colors to match number of intervals | ✅ |
