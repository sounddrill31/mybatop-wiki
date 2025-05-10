---
title: Generate Reports
#order: TODO
order: 4
---

# Generate Reports

Reports are generated with classes as follows:

- Laptop Details
- Battery Details
- Recent Usage
- Technical Specification
- Average Capacity
- Battery Capacity History
- Battery Cycle Count
- Battery Health over Time
- Battery Usage Activity

Reports are generated in various file formats

- HTML
- JSON
- CSV
- XML


## Generate Full Reports

### 1. HTML

```bash
mybatop report --html
```

### 2. JSON

```bash
mybatop report --json
```

### 3. CSV

```bash
mybatop report --csv
```

### 4. XML

```bash
mybatop report --xml
```

## Generate report with classes

Report with classes will be generated based on below class types.

- recent-usage
- tech-spec (OR) tech-Specification
- batcaphis (OR) battery-capacity-history
- batuseact (OR) battery-usage-activity
- avgcap (OR) average-capacity
- bathealth (OR) battery-health

### 1. HTML

```bash
mybatop report -C recent-usage --html
```

(OR)

```bash
mybatop report --class recent-usage --html
```

### 2. JSON

```bash
mybatop report -C recent-usage --json
``` 

(OR)

```bash
mybatop report --class recent-usage --json
```

### 3. CSV

```bash
mybatop report -C recent-usage --csv
```

(OR)

```bash
mybatop report --class recent-usage --csv
```

### 4. XML

```bash
mybatop report -C recent-usage --xml
```

(OR)

```bash
mybatop report --class recent-usage --xml
```