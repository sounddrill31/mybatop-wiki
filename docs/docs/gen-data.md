---
title: Get Data
#order: TODO
order: 3
---

# Getting data in various formats

You can get Raw data for your analysis in various formats.

### What is Raw Data (in the context of `mybatop`)?

Raw data is the data, which we store for generating reports.

It has the following column, which are given below.

- DATE
- TIME
- STATE
- DEVTYPE
- NAME
- SOURCE
- STATUS
- PRESENT
- TECHNOLOGY
- CYCLE_COUNT
- VOLTAGE_MIN_DESIGN
- VOLTAGE_NOW
- CURRENT_NOW
- CHARGE_FULL_DESIGN
- CHARGE_FULL
- CHARGE_NOW
- CAPACITY
- CAPACITY_LEVEL
- MODEL_NAME
- MANUFACTURER
- SERIAL_NUMBER

## How to get Raw Data in Various formats?

### 1. CSV

```bash
mybatop data --csv
```

### 2. JSON

```bash
mybatop data --json
```

### 3. XML

```bash
mybatop data --xml
```