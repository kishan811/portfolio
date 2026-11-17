# 🎬 KishanFlix | Kishan Shankar Singhal Portfolio

> **Cinematic Netflix-Inspired Portfolio & Interactive AI Showcase**  
> Built for **Senior Data Engineer & AI Platform Architect** — **Kishan Shankar Singhal**  
> Direct site launch (zero gate screens), ready for **GitHub Pages** with zero build steps.

---

## 🌟 Architecture & Highlights

### 1. Enterprise Production Work (Top Section)
The top section highlights real-world enterprise engineering:
- **Data Studio (In-House BI Engine & Live Client DW Connectors)**:
  - Equivalent to Looker Studio.
  - Connects to client data sources sitting on the client side with credentials encrypted in **GCP Secret Manager**.
  - Direct push-down query execution with **zero data migration required onto our servers**!
  - 12-column responsive drag-and-drop report builder with metric scorecards, tables, and charts.
  - Replaced 7 fragmented Cloud Run functions with 1 unified BigQuery-configured AI engine.
- **TB-Scale Telematics & GPS Stream to Google BigQuery (XPO)**:
  - Ingested live GPS telemetry from REST APIs directly into Google BigQuery (GBQ).
  - Handles Terabyte (TB)-scale data across 10,000+ commercial vehicles.
  - Supports both high-throughput batch and low-latency real-time streaming via **GCP Dataflow (Apache Beam)** in Scala and Pub/Sub.
- **BigQuery Slot Autoscaling ($90K Annual Savings)**:
  - Analyzed slot consumption curves to cut overcapacity and establish slot autoscaling.
  - Reduced DW compute costs by 30% and query latency by 60%+.
- **Enterprise NL2SQL BigQuery Engine**:
  - 85%+ accuracy translating natural language to BigQuery SQL with schema injection and partition safety.
- **100+ End-to-End Fault-Tolerant ETL/ELT Pipelines**:
  - Python, SQL, Apache Airflow, PySpark, Informatica, IICS, and GCP.
  - Cut data processing times by 50% across Staging, Data Lake, and Warehouse layers.
- **Netezza to Google BigQuery Migration**:
  - Modernized 200+ tables to cloud DW, reducing maintenance costs by 45%.

---

### 2. Foundational & Academic Projects Archive (Lower Section)
College and early research projects are neatly archived in a dedicated shelf row:
- 🧠 **GoldFinch Project**: SQL benchmarking and RLHF (Reinforcement Learning via Human Feedback) for LLM fine-tuning.
- 🛡️ **MetroSafe Tweet Tracker**: Real-time social media analytics & urban threat hotspot mapping via Tweepy, Flask & NLP.
- 💻 **Terminal File Explorer**: High-performance C++ POSIX CLI tool with dual normal/command navigation modes.
- 🍔 **Dig In!**: Full-stack food ordering web application with Flask, Bootstrap, JavaScript, and SQLite3.

---

### 3. Beyond the Terminal: Hobbies & Passions
- 📖 **Reading Tech & AI Advancements**: Deep dives into arXiv preprints, LLM papers, and distributed systems.
- 🤖 **Building Smart Automations**: Python scripts, cron bots, and AI agents to eliminate daily manual workflows.
- 🏏 **Cricket Enthusiast**: Playing and analyzing high-stakes tactical cricket matches.
- 📈 **Stock Market & Investments**: Fundamental analysis, market trends, and long-term quantitative portfolios.
- ✈️ **Travelling & Wandering**: Exploring new cities, road trips, and hiking trails across India and beyond.

---

### 4. Interactive Avatar Companion
- Vector character of Kishan with blinking eyes, hoodie, and glowing AI badge.
- Game-style speech cloud with typewriter effect and interactive dialogue trees covering enterprise projects, TB-scale telematics, hobbies, and resume downloads.

---

## 💻 How to Run Locally on Mac

### Method 1: Instant Direct Launch
```bash
open index.html
```

### Method 2: macOS Native Web Server
```bash
ruby -run -ehttpd . -p8000
```
Then visit: `http://localhost:8000`

---

## 🚀 How to Deploy on GitHub Pages

1. **Create a GitHub repository** (`kishan811.github.io` or `portfolio`).
2. **Push your code from terminal**:
   ```bash
   cd /Users/kishansinghal/Downloads/resume
   git init
   git add .
   git commit -m "Launch KishanFlix Portfolio"
   git branch -M main
   git remote add origin https://github.com/kishan811/kishan811.github.io.git
   git push -u origin main
   ```
3. **Turn on Pages**: In GitHub repo **Settings** &rarr; **Pages**, set source to `main` branch `/ (root)` folder and save.

---

## 📬 Contact

- **Phone**: (+91) 8871207064
- **Email**: [singhal.kishan.11@gmail.com](mailto:singhal.kishan.11@gmail.com)
- **LinkedIn**: [linkedin.com/in/kishan-shankar-singhal](https://linkedin.com/in/kishan-shankar-singhal)
- **GitHub**: [github.com/kishan811](https://github.com/kishan811)
