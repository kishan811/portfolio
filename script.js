/**
 * KISHANFLIX INTERACTIVE ENGINE
 * Author: Kishan Shankar Singhal — Senior Data Engineer & AI Platform Architect
 * Education: IIIT Hyderabad (M.Tech CSE • Dean's Merit List • Tier 1)
 * 
 * Features:
 * - Enterprise Data Engineering: End-to-End ETL/ELT, TB-Scale Telematics, BigQuery, Dataflow, Secret Manager
 * - In-House Looker Studio-Equivalent BI Engine & Live Client DW Connectors (Zero Migration)
 * - Dedicated Education Section Highlighting Tier-1 IIIT Hyderabad & Academic Excellence
 * - Interactive Avatar with Typewriter Q&A Field: Answers EVERYTHING from resume with smart fallback & suggestions
 * - Dynamic Hero Spotlight Switcher (Work Experience & High-Impact ROI)
 * - Academic / College Projects Archived in Dedicated Section Below
 * - Personal Passions & Hobbies (Cricket, Stock Market, Smart Automation, AI Articles, Travel)
 * - The AI Studio Interactive Simulator (Vertex AI / Gemini 12-Column Grid Engine)
 * - Netflix-Style Detail Modal with Interactive Architecture Diagrams & Code
 * - "My List" LocalStorage Persistence & Real-Time Search
 * - Web Audio API Synthesizer (Ta-Dum + 8-bit Retro Game Speech Blips)
 */

document.addEventListener('DOMContentLoaded', () => {

  // Shared "My List" (Bookmarks) state initialized early
  let myList = [];
  try {
    const saved = localStorage.getItem('dataflix_my_list') || localStorage.getItem('kishanflix_my_list');
    if (saved) myList = JSON.parse(saved);
  } catch (e) {
    myList = [];
  }

  // =========================================================================
  // 1. DATA REPOSITORY: PRODUCTION ENTERPRISE & ARCHITECTURE SPECS
  // =========================================================================
  const PROJECT_DATA = {
    'data-studio': {
      title: 'Data Studio — Looker Studio Equivalent BI & Live Client DW Connectors',
      category: 'FLAGSHIP ENTERPRISE PLATFORM • ILITY',
      hasLiveDemo: true,
      demoLabel: 'Try AI Studio Simulator',
      demoPreset: 'tenant-churn',
      match: '99.8% Match',
      year: '2026',
      badge: 'PROD READY',
      tech: 'GCP Cloud Run • BigQuery • GCP Secret Manager • Vertex AI / Gemini • Angular • Python/Flask',
      desc: 'An in-house business intelligence platform (Looker Studio equivalent) enabling property management clients to connect live data sources directly on the client side. Credentials are stored securely in GCP Secret Manager, querying their data warehouses directly with zero data migration required onto our servers. Consolidates 7 fragmented Cloud Run functions into one BigQuery-configured AI engine with a 12-column responsive drag-and-drop report builder.',
      highlights: [
        { title: 'Zero-Migration Client DW Connectors', desc: 'Securely connects to client-side data warehouses (Snowflake, BigQuery, Postgres). Credentials stored in GCP Secret Manager with per-tenant encryption.' },
        { title: 'In-House Looker Studio Equivalent', desc: 'Custom 12-column responsive drag-and-drop report builder with stepped-width controls, scorecards, metric tiles, and tables.' },
        { title: '7-to-1 Cloud Run Consolidation', desc: 'Eliminated microservice sprawl by re-architecting 7 single-purpose functions into one unified Flask service.' },
        { title: 'BigQuery-Driven Dynamic Config', desc: 'SQL queries, prompts, and schemas managed in BigQuery tables. Zero deployments required for new insight modules.' },
        { title: 'Schneider BDP Ingestion Connector', desc: 'OAuth2 client-credential authentication verified end-to-end against live UAT API.' }
      ],
      metrics: [
        { val: 'Zero Migration', label: 'Direct Client DW Access' },
        { val: 'Secret Manager', label: 'Encrypted Credential Store' },
        { val: '-85%', label: 'Microservice Sprawl (7 to 1)' },
        { val: '5x', label: 'Faster Report Generation' }
      ],
      archDiagram: `
        <div class="arch-flow-diagram">
          <div class="arch-node-box">
            <strong>Client Browser: Angular 12-Column Report Builder</strong>
            <span>Looker Studio Equivalent (Metric Tiles, Scorecards, Custom Charts)</span>
          </div>
          <div class="arch-connector">&darr; Secure REST API (OAuth2 / Per-Portfolio Key)</div>
          <div class="arch-node-box highlight">
            <strong>Unified Flask Microservice on GCP Cloud Run</strong>
            <span>Fetches Client DW Credentials from GCP Secret Manager</span>
          </div>
          <div class="arch-connector">&darr; Direct Push-Down Query Execution (Zero Migration to our DB)</div>
          <div class="arch-node-box">
            <strong>Client-Side Data Warehouse (Snowflake / BigQuery / Postgres)</strong>
            <span>Direct Live Analytical Reads &bull; Data stays completely within client perimeter</span>
          </div>
          <div class="arch-connector">&darr; Dynamic Prompts & Historical Caching</div>
          <div class="arch-node-box highlight">
            <strong>BigQuery Dynamic Metadata & Vertex AI Gemini Layer</strong>
            <span>insights_prompts &bull; Schema validation &bull; Historical results partition table</span>
          </div>
        </div>
      `,
      code: `# Live Client DW Connector via GCP Secret Manager
def query_client_warehouse(portfolio_id: str, query: str):
    """
    Connects to client data warehouse directly using credentials
    stored in GCP Secret Manager. Zero data migration required.
    """
    secret_client = secretmanager.SecretManagerServiceClient()
    secret_name = f"projects/ility-prod/secrets/dw_creds_{portfolio_id}/versions/latest"
    payload = secret_client.access_secret_version(request={"name": secret_name}).payload.data.decode("UTF-8")
    creds = json.loads(payload)
    
    # Establish direct connection to client DW (e.g. BigQuery / Snowflake)
    client_dw = get_warehouse_client(creds)
    return client_dw.execute_query(query)`
    },

    'xpo-telematics': {
      title: 'TB-Scale GPS Telematics & Vehicle Stream to Google BigQuery',
      category: 'STREAMING & BATCH BIG DATA • XPO',
      match: '99% Match',
      year: '2024 – 2026',
      badge: 'TB-SCALE DATA',
      tech: 'GCP Dataflow • Scala • Apache Beam • Google BigQuery • Pub/Sub • REST APIs',
      desc: 'Architected end-to-end streaming and batch pipelines harvesting real-time GPS and vehicle telematics data from REST APIs into Google BigQuery (GBQ). Handled Terabyte (TB)-scale data across 10,000+ commercial vehicles and drivers, delivering a 40% ingestion efficiency boost with automated alerting for route deviations and platform monitoring.',
      highlights: [
        { title: 'TB-Scale High-Throughput Processing', desc: 'Designed high-volume batch and sub-second streaming pipelines handling millions of telematics records daily.' },
        { title: 'GCP Dataflow & Scala Architecture', desc: 'Constructed custom Apache Beam pipelines in Scala with sliding window aggregations and dead-letter queues.' },
        { title: 'BigQuery Partitioning & Clustering', desc: 'Partitioned by event date and clustered by carrier ID and vehicle state, drastically reducing query scan costs.' }
      ],
      metrics: [
        { val: 'TB-Scale', label: 'Data Ingestion Daily' },
        { val: '10,000+', label: 'Commercial Vehicles Live' },
        { val: '+40%', label: 'Data Ingestion Speed' },
        { val: 'Sub-Second', label: 'Streaming Latency' }
      ],
      archDiagram: `
        <div class="arch-flow-diagram">
          <div class="arch-node-box"><strong>Vehicle Telematics REST APIs & IoT Sensors</strong> &rarr; 10,000+ Active Vehicles</div>
          <div class="arch-connector">&darr; HTTP Webhooks / Polling</div>
          <div class="arch-node-box highlight"><strong>Google Cloud Pub/Sub Telemetry Topics</strong> &rarr; Decoupled Message Buffer</div>
          <div class="arch-connector">&darr; Real-Time & Batch Streaming</div>
          <div class="arch-node-box highlight"><strong>GCP Dataflow (Apache Beam in Scala)</strong> &rarr; Sliding Windowing & Metric Enrichment</div>
          <div class="arch-connector">&darr; Partitioned & Clustered Table Ingestion</div>
          <div class="arch-node-box"><strong>Google BigQuery (GBQ) Enterprise Warehouse</strong> &rarr; TB-Scale Real-Time Driver Analytics</div>
        </div>
      `,
      code: `// Scala Apache Beam / Dataflow Streaming Pipeline for GPS Telemetry
val pipeline = Pipeline.create(options)
val rawTelemetry = pipeline
  .apply("ReadFromPubSub", PubsubIO.readMessagesWithAttributes().fromSubscription(telemetrySub))
  .apply("ExtractGPSPayload", ParDo.of(new ParseTelemetryFn()))
  .apply("WindowInto1Minute", Window.into(SlidingWindows.of(Duration.standardMinutes(5)).every(Duration.standardMinutes(1))))
  .apply("WriteToGBQ", BigQueryIO.writeTableRows()
    .to(bqTableRef)
    .withCreateDisposition(CreateDisposition.CREATE_IF_NEEDED)
    .withWriteDisposition(WriteDisposition.WRITE_APPEND))`
    },

    'bigquery-cost': {
      title: 'BigQuery Slot Autoscaling & Cloud Cost Optimization ($90K Saved)',
      category: 'CLOUD COST GOVERNANCE • XPO',
      match: '99% Match',
      year: '2023 – 2026',
      badge: '$80K–$90K SAVED',
      tech: 'Google BigQuery • Slot Reservations • Slot Autoscaling • SQL Optimization',
      desc: 'Analyzed enterprise BigQuery slot consumption curves during peak and off-peak periods to identify overcapacity waste. Optimized GCP platform stability through dynamic slot autoscaling reservations, rewritten analytical queries, and partition clustering, resulting in $80,000–$90,000 in annual recurring savings.',
      highlights: [
        { title: '$80K–$90K Annual Recurring Savings', desc: 'Identified over-provisioned fixed slots and implemented flex slot autoscaling commitments.' },
        { title: '-60% Query Latency', desc: 'Rewrote complex joins, nested aggregations, and partition filters across enterprise warehouses.' },
        { title: '-30% DW Compute Cost', desc: 'Reduced scanned bytes through partition pruning and intelligent table clustering strategies.' }
      ],
      metrics: [
        { val: '$80K–$90K', label: 'Annual Cost Savings' },
        { val: '-60%', label: 'Query Latency Reduction' },
        { val: '-30%', label: 'Compute Cost Reduction' },
        { val: '100+ Users', label: 'Supported Seamlessly' }
      ],
      archDiagram: `<div class="arch-node-box">Slot Usage Analysis &rarr; Flex Reservations & Autoscaling Policy &rarr; Dynamic Partition Pruning & Query Optimization</div>`,
      code: `-- Partition Pruning & Clustered Query Optimization
SELECT 
    carrier_id, 
    vehicle_id, 
    COUNT(event_id) as total_trips,
    SUM(distance_miles) as total_miles
FROM \`xpo_dw.vehicle_telematics\`
WHERE _PARTITIONDATE >= DATE_SUB(CURRENT_DATE(), INTERVAL 7 DAY)
  AND carrier_id IN UNNEST(@active_carriers)
GROUP BY 1, 2;`
    },

    'nl2sql-engine': {
      title: 'NL2SQL — Enterprise Natural Language to SQL BigQuery Engine',
      category: 'AI & DATA QUERYING • ILITY',
      hasLiveDemo: true,
      demoLabel: 'Try NL2SQL Simulator',
      demoPreset: 'nl2sql',
      match: '99% Match',
      year: '2026',
      badge: '85%+ ACCURACY',
      tech: 'LLMs • BigQuery • Prompt Engineering • Python • AST Parsers',
      desc: 'Designed and developed an AI-powered NL2SQL engine using Large Language Models, enabling non-technical property and asset managers to query enterprise data in plain natural language. Achieved 85%+ SQL generation accuracy while enforcing BigQuery partition pruning and cost safety limits.',
      highlights: [
        { title: 'Schema Injection & Safety', desc: 'Automatically pulls BigQuery column descriptions and data constraints into prompt context.' },
        { title: 'Cost & Partition Guardrails', desc: 'Validates SQL queries before execution to avoid full table scans and runaway slot costs.' }
      ],
      metrics: [
        { val: '85%+', label: 'SQL Generation Accuracy' },
        { val: '-60%', label: 'Query Latency Reduction' },
        { val: '-30%', label: 'BigQuery Compute Cost' }
      ],
      archDiagram: `<div class="arch-node-box">User Query (English) &rarr; LLM NL2SQL Synthesizer &rarr; AST SQL Validator & Cost Limiter &rarr; Google BigQuery &rarr; Visual Table/Card</div>`,
      code: `SELECT 
    tenant_name, 
    lease_end_date, 
    SUM(monthly_rent) as total_arr, 
    churn_probability_score 
FROM \`property_warehouse.tenant_analytics\` 
WHERE DATE(lease_end_date) BETWEEN CURRENT_DATE() AND DATE_ADD(CURRENT_DATE(), INTERVAL 90 DAY) 
GROUP BY 1, 2, 4 
ORDER BY churn_probability_score DESC;`
    },

    'etl-pipelines': {
      title: '100+ Enterprise ETL/ELT Production Pipelines',
      category: 'PIPELINE ARCHITECTURE • XPO',
      match: '99% Match',
      year: '2022 – 2026',
      badge: '100+ PIPELINES',
      tech: 'Apache Airflow • PySpark • Python • Informatica • IICS • GCP',
      desc: 'Designed and implemented 100+ low-latency, fault-tolerant ETL/ELT pipelines integrating multiple business modules using REST APIs, Python, Informatica, IICS, Airflow, PySpark, and GCP. Reduced data processing time by 50% while building and maintaining Staging, Data Lake, and Data Warehouse solutions with automated alerting.',
      highlights: [
        { title: '-50% Data Processing Time', desc: 'Optimized pipeline stages, distributed PySpark shuffles, and parallel Airflow tasks.' },
        { title: 'Enterprise Data Lake & Staging', desc: 'Constructed robust medallion architecture (Bronze Staging, Silver Lake, Gold Warehouse).' }
      ],
      metrics: [
        { val: '100+', label: 'Production ETL Pipelines' },
        { val: '-50%', label: 'Data Processing Time' },
        { val: '99.9%', label: 'Pipeline Reliability SLA' }
      ],
      archDiagram: `<div class="arch-node-box">REST APIs / Sources &rarr; PySpark Distributed Transformation &rarr; Airflow DAG Orchestration &rarr; BigQuery DW</div>`,
      code: `# Airflow DAG Definition snippet
with DAG('telematics_hourly_aggregation', default_args=default_args, schedule_interval='@hourly') as dag:
    extract_task = PythonOperator(task_id='extract_telemetry', python_callable=extract_api_records)
    transform_spark = SparkSubmitOperator(task_id='pyspark_aggregate', application='agg_telemetry.py')
    load_gbq = GCSToBigQueryOperator(task_id='gcs_to_gbq', destination_project_dataset_table='dw.hourly_stats')
    extract_task >> transform_spark >> load_gbq`
    },

    'netezza-migration': {
      title: 'Netezza to Google BigQuery Cloud Warehouse Migration',
      category: 'CLOUD MIGRATION • XPO',
      match: '98% Match',
      year: '2020 – 2022',
      badge: '-45% COSTS',
      tech: 'Google BigQuery • Netezza • Oracle • SQL Server • Informatica',
      desc: 'Led the migration of an on-premise Netezza database to Google BigQuery (GBQ), reducing maintenance costs by 45% and enhancing data accessibility. Designed, developed, tested, and productionalized ETL mappings for 200+ tables. Reduced Informatica server resource consumption by 60% through table usage and workflow grouping optimization.',
      highlights: [
        { title: '200+ Tables Migrated', desc: 'Productionalized mappings for SQL Server, Oracle, APIs, PRDA, and LPROD sources.' },
        { title: '-60% Server Resource Consumption', desc: 'Prevented over-scheduling by analyzing BigQuery update frequency against Informatica workflows.' }
      ],
      metrics: [
        { val: '-45%', label: 'Maintenance Cost Reduction' },
        { val: '200+', label: 'Tables Migrated to Cloud' },
        { val: '-60%', label: 'Informatica Server Load' }
      ],
      archDiagram: `<div class="arch-node-box">On-Prem Netezza DW &rarr; Informatica ETL Mappings &rarr; Google BigQuery (Cloud Modernization)</div>`,
      code: `CREATE OR REPLACE TABLE \`xpo_dw.shipment_events\` PARTITION BY DATE(event_timestamp) CLUSTER BY carrier_id, facility_zip AS SELECT * FROM \`xpo_staging.stg_netezza_events\`;`
    },

    'arch-client-connectors': {
      title: 'Client Live DW Connectors & Secret Manager Auth',
      category: 'ZERO-MIGRATION ARCHITECTURE',
      match: '99% Match',
      year: '2026',
      badge: 'SECURITY & INTEGRATION',
      tech: 'GCP Secret Manager • Direct DW Pushdown • Multi-Tenant Auth',
      desc: 'Designed the zero-migration client data integration framework. Property management clients configure connection parameters for their existing data warehouses. Credentials reside in encrypted GCP Secret Manager slots, allowing our in-house BI engine to execute pushdown queries directly into their warehouse with no data duplicated onto our storage.',
      highlights: [
        { title: 'Zero Data Duplication', desc: 'Data remains safely in the client warehouse perimeter, respecting enterprise data compliance.' },
        { title: 'GCP Secret Manager Isolation', desc: 'Each portfolio possesses independent cryptographic secrets and strict IAM access control.' }
      ],
      metrics: [
        { val: '100%', label: 'Perimeter Compliance' },
        { val: '0 MB', label: 'Data Replicated to Us' }
      ],
      archDiagram: `<div class="arch-node-box">Client UI Config &rarr; GCP Secret Manager Encrypted Creds &rarr; Direct Pushdown Query Execution &rarr; Client DW</div>`,
      code: `secret = secretmanager_v1.AccessSecretVersionRequest(name=f"projects/ility-data/secrets/client_dw_{portfolio_id}/versions/latest")`
    },

    'arch-consolidation': {
      title: '7-to-1 Cloud Run Microservices Consolidation',
      category: 'ARCHITECTURE BLOCKBUSTER',
      match: '99% Match',
      year: '2026',
      badge: 'SYSTEM DESIGN',
      tech: 'GCP Cloud Run • Flask • BigQuery Dynamic Schema',
      desc: 'Consolidated seven separate legacy Cloud Run services into a single modular Flask microservice. Enabled dynamic loading of SQL queries and LLM prompts directly from BigQuery metadata, eliminating microservice deployment bottlenecks.',
      highlights: [
        { title: 'Microservice Sprawl Solved', desc: 'Single container lifecycle, centralized monitoring, and unified error handling.' },
        { title: 'Dynamic BigQuery Schemas', desc: 'Prompt templates and output schemas stored as data records.' }
      ],
      metrics: [
        { val: '7 &rarr; 1', label: 'Services Consolidated' },
        { val: '0', label: 'Downtime During Migration' }
      ],
      archDiagram: `<div class="arch-node-box">7 Disparate Functions &rarr; Single Unified Dockerized Container on GCP Cloud Run</div>`,
      code: `def get_insight_config(module_name: str) -> dict:\n    query = "SELECT prompt_template, response_schema, base_sql FROM \`insights_metadata.insights_modules\` WHERE module_name = @module"\n    return bq_client.query(query, params=[module_name]).to_dataframe().to_dict('records')[0]`
    },

    'bdp-connector': {
      title: 'BDP Smart Building IoT Ingestion Connector',
      category: 'DATA INGESTION',
      match: '97% Match',
      year: '2026',
      badge: 'OAUTH2 VERIFIED',
      tech: 'Python • REST APIs • OAuth2 • Schneider Electric EcoStruxure',
      desc: 'Built a pluggable enterprise connector for Schneider Electric EcoStruxure Building Platform (BDP). Implemented OAuth2 client-credential authentication, live UAT API validation, connector browser UI, and JSON-aware cell formatting.',
      highlights: [
        { title: 'Pluggable Framework', desc: 'Extensible data_ingest/connectors interface allowing rapid onboarding of third-party APIs.' }
      ],
      metrics: [
        { val: 'Live UAT', label: 'End-to-End Verified' },
        { val: '100%', label: 'OAuth2 Automated Auth' }
      ],
      archDiagram: `<div class="arch-node-box">Schneider Electric API &rarr; OAuth2 Client Credential Exchange &rarr; BDP Connector Ingest Engine &rarr; BigQuery Raw Staging</div>`,
      code: `class BDPConnector(BaseDataConnector):\n    def authenticate(self):\n        resp = requests.post(f"{self.base_url}/oauth/token", data={"grant_type": "client_credentials", "client_id": self.client_id, "client_secret": self.client_secret})\n        self.token = resp.json()["access_token"]`
    },

    'arch-metadata-automation': {
      title: 'Python DDL & Metadata Automation Framework',
      category: 'DEVELOPER PRODUCTIVITY',
      match: '97% Match',
      year: '2023',
      badge: '40+ HRS/MO SAVED',
      tech: 'Python • BigQuery API • Schema Migration',
      desc: 'Developed reusable automation scripts for metadata extraction, datatype mapping, and BigQuery DDL generation adopted across 70+ projects with 350+ column objects, saving over 40 engineering hours every month.',
      highlights: [
        { title: 'Standardized DDL Generation', desc: 'Auto-converted legacy source schemas into BigQuery optimized table definitions.' }
      ],
      metrics: [
        { val: '70+', label: 'Projects Adopted' },
        { val: '350+', label: 'Column Objects Automated' },
        { val: '40+ hrs', label: 'Saved Per Month' }
      ],
      archDiagram: `<div class="arch-node-box">Source Metadata &rarr; Python AST Mapper & Validator &rarr; BigQuery DDL Execution & Data Catalog Sync</div>`,
      code: `def generate_bigquery_ddl(source_schema: list) -> str:\n    return f"CREATE TABLE \`project.dataset.table\` (...) PARTITION BY DATE(created_at);"`
    },

    'exp-ility': {
      title: 'Senior Data Engineer — Ility',
      category: 'EXPERIENCE • SEASON 3',
      match: '99.9% Match',
      year: 'June 2026 – Present',
      badge: 'PUNE, INDIA',
      tech: 'GCP • BigQuery • Kubernetes • Docker • LLMs • Angular • Flask • Secret Manager',
      desc: 'Senior Data Engineer building the next-generation enterprise BI & analytics platform. Spearheaded the consolidation of AI services, engineered the 12-column Report Builder, built NL2SQL engines, and deployed scalable Kubernetes microservices.',
      highlights: [
        { title: 'Looker Studio Equivalent BI Engine', desc: 'Built in-house self-service reporting platform, reducing manual BI requests by 70%+ and accelerating report creation by 5x.' },
        { title: 'Live Client DW Connectors', desc: 'Integrated client databases directly using credentials in GCP Secret Manager with zero data migration required.' },
        { title: 'BigQuery Cost & Latency', desc: 'Optimized complex SQL queries by 60%+ latency reduction and 30%+ compute cost drop.' }
      ],
      metrics: [
        { val: '-70%', label: 'Manual BI Requests' },
        { val: '5x', label: 'Report Creation Speed' },
        { val: '99.9%', label: 'Pipeline Reliability' },
        { val: '-40%', label: 'Infra Management Overhead' }
      ],
      archDiagram: `<div class="arch-node-box">Enterprise Data Sources &rarr; Kubernetes Containerized Ingestion &rarr; Google BigQuery Warehouse &rarr; AI Insights Engine &rarr; Angular Self-Service BI</div>`,
      code: `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: data-studio-ai-service`
    },

    'exp-xpo-2': {
      title: 'Data Engineer 2 — XPO Logistics',
      category: 'EXPERIENCE • SEASON 2',
      match: '99% Match',
      year: 'July 2022 – June 2026',
      badge: 'PUNE, INDIA',
      tech: 'GCP BigQuery • Airflow • PySpark • Scala • Dataflow • Java • Informatica',
      desc: 'Led data platform optimizations resulting in $80K–$90K annual savings in BigQuery slot autoscaling. Architected 100+ low-latency ETL pipelines across REST APIs, PySpark, and Airflow. Built real-time Dataflow streaming pipelines with Scala processing 10,000+ driver & vehicle records.',
      highlights: [
        { title: 'TB-Scale GPS Telematics to GBQ', desc: 'Ingested vehicle telemetry from REST APIs into BigQuery using Dataflow and Scala.' },
        { title: '$80K–$90K Annual Savings', desc: 'Analyzed BigQuery slot consumption curves and optimized autoscaling reservations.' },
        { title: '100+ Fault-Tolerant Pipelines', desc: 'Cut data processing time by 50% across staging, data lake, and warehouse layers.' }
      ],
      metrics: [
        { val: '$80K-$90K', label: 'Annual BigQuery Savings' },
        { val: '100+', label: 'ETL Pipelines Deployed' },
        { val: '10,000+', label: 'Live Vehicles Ingested' },
        { val: '40+ hrs/mo', label: 'Saved via Automation' }
      ],
      archDiagram: `<div class="arch-node-box">Telematics IoT / REST APIs &rarr; GCP Dataflow & Scala Streaming &rarr; Google BigQuery Slot Autoscaling &rarr; Airflow Automated Alerting</div>`,
      code: `// Scala Apache Beam Streaming Ingestion\nval pipeline = Pipeline.create(options)`
    },

    'exp-xpo-1': {
      title: 'Associate Data Engineer — XPO Logistics',
      category: 'EXPERIENCE • SEASON 1',
      match: '98% Match',
      year: 'June 2020 – June 2022',
      badge: 'PUNE, INDIA',
      tech: 'Google BigQuery • Netezza • SQL Server • Oracle • Informatica',
      desc: 'Led the migration of on-premise Netezza data warehouse to Google BigQuery, reducing maintenance costs by 45%. Designed and productionalized ETL mappings for 200+ tables. Reduced Informatica server resource consumption by 60% through table usage and workflow grouping optimization.',
      highlights: [
        { title: 'Netezza to BigQuery Migration', desc: 'Modernized legacy legacy infrastructure and reduced costs by 45%.' },
        { title: '200+ Production Tables', desc: 'Migrated Oracle, SQL Server, APIs, and PRDA sources with zero data loss.' }
      ],
      metrics: [
        { val: '-45%', label: 'Maintenance Cost Reduction' },
        { val: '200+', label: 'Tables Migrated to Cloud' },
        { val: '-60%', label: 'Informatica Server Load' }
      ],
      archDiagram: `<div class="arch-node-box">On-Prem Netezza DW &rarr; Informatica ETL Mappings &rarr; Google BigQuery (Cloud Migration)</div>`,
      code: `CREATE OR REPLACE TABLE \`xpo_dw.shipment_events\` PARTITION BY DATE(event_timestamp);`
    },

    // ACADEMIC & COLLEGE PROJECTS
    'goldfinch': {
      title: 'GoldFinch Project — LLM Fine-Tuning & RLHF',
      category: 'RESEARCH & ACADEMIC PROJECT',
      match: '96% Match',
      year: '2024 (Research)',
      badge: 'RLHF TRAINING',
      tech: 'SQL • Python • RLHF • Prompt Engineering',
      desc: 'Developed complex SQL queries to analyze problem statements and train state-of-the-art LLM models for AI-driven user request processing. Acted as a domain expert, facilitating reinforcement learning via human feedback (RLHF) to fine-tune AI reasoning capabilities.',
      highlights: [
        { title: 'RLHF Optimization', desc: 'Crafted multi-turn evaluation datasets and reward model rubrics for fine-tuning.' },
        { title: 'Analytical Query Generation', desc: 'Benchmarked model-generated queries against enterprise ground-truth databases.' }
      ],
      metrics: [
        { val: '1000s', label: 'Evaluation Prompts Authored' },
        { val: 'RLHF', label: 'Human-in-the-Loop Alignment' }
      ],
      archDiagram: `<div class="arch-node-box">Raw User Request &rarr; LLM Inference Candidate &rarr; RLHF Reward Scoring & Domain Validation &rarr; Weights Fine-Tuning</div>`,
      code: `# RLHF Feedback Scoring\ndef evaluate_query_accuracy(candidate_sql, ground_truth_sql, execution_results):\n    return calculate_reward_score(schema_match, result_match)`
    },

    'metro-safe': {
      title: 'MetroSafe Tweet Tracker — Real-Time NLP Hotspot Mapping',
      category: 'ACADEMIC / COLLEGE PROJECT',
      match: '97% Match',
      year: '2023 (College)',
      badge: 'NLP & FLASK',
      tech: 'Python • Tweepy • Flask • NLP • Geotagging',
      desc: 'Developed a real-time social media analytics system to identify riot-prone and vulnerable regions in metropolitan cities by analyzing live geotagged Twitter feeds using NLP sentiment analysis and hazard classification. Built a Flask-based web application to visualize high-risk urban areas, enabling faster situational awareness and data-driven decision-making.',
      highlights: [
        { title: 'Geotagged NLP Pipeline', desc: 'Processed incoming Twitter stream via Tweepy, filtering geo-coordinates and applying NLP intent/threat classification.' },
        { title: 'Interactive Flask Dashboard', desc: 'Rendered real-time heatmaps and risk scores for law enforcement and emergency response coordinators.' }
      ],
      metrics: [
        { val: 'Real-Time', label: 'Social Media Stream' },
        { val: 'NLP', label: 'Sentiment & Threat Classifier' },
        { val: 'Flask', label: 'Interactive Geo-Map' }
      ],
      archDiagram: `<div class="arch-node-box">Live Twitter Stream (Tweepy API) &rarr; Python NLP Threat Tokenizer & Scorer &rarr; Geotag Cluster Aggregator &rarr; Flask Real-Time Map UI</div>`,
      code: `# MetroSafe Stream Handler\nclass MetroTweetListener(tweepy.StreamListener):\n    def on_status(self, status):\n        if status.coordinates: emit_alert_to_map(status.coordinates)`
    },

    'terminal-explorer': {
      title: 'Terminal File Explorer — High-Performance C++ CLI Tool',
      category: 'ACADEMIC / SYSTEMS PROJECT',
      match: '95% Match',
      year: '2022 (College)',
      badge: 'C++ POSIX',
      tech: 'C++ • POSIX System Calls • Linux/Unix • Terminal UI',
      desc: 'Developed a terminal-based POSIX file explorer in C++ supporting comprehensive directory navigation, recursive file searching, file copying, moving, deletion, and permission management in both normal browsing and interactive command execution modes.',
      highlights: [
        { title: 'Dual Navigation Modes', desc: 'Vim-inspired navigation in Normal Mode (arrow/vi keys) and full shell-command capability in Command Mode.' },
        { title: 'Low Latency I/O', desc: 'Optimized directory traversal using direct POSIX system calls with minimal memory overhead.' }
      ],
      metrics: [
        { val: 'C++', label: 'Native Binary' },
        { val: '2 Modes', label: 'Normal & Command Modes' },
        { val: 'POSIX', label: 'Zero Dependency' }
      ],
      archDiagram: `<div class="arch-node-box">Terminal Input &rarr; Raw Mode Keypress Parser &rarr; Mode Switcher (Normal/Command) &rarr; POSIX File Ops System Calls</div>`,
      code: `void listDirectory(const string& path) {\n    DIR* dir = opendir(path.c_str());\n    struct dirent* entry;\n    while ((entry = readdir(dir)) != nullptr) { ... }\n}`
    },

    'dig-in': {
      title: 'Dig In! — Responsive Food Ordering Web Application',
      category: 'ACADEMIC / WEB PROJECT',
      match: '94% Match',
      year: '2021 (College)',
      badge: 'FLASK & SQLITE3',
      tech: 'Flask • HTML5 • CSS3 • Bootstrap • JavaScript • SQLite3',
      desc: 'Developed a responsive food ordering web application with an intuitive user interface, interactive cart state, and SQLite3-backed transactional data management for orders, restaurants, and menu catalog items.',
      highlights: [
        { title: 'Responsive Ordering Flow', desc: 'Designed modern UI with responsive Bootstrap components and asynchronous cart manipulation.' }
      ],
      metrics: [
        { val: 'Full-Stack', label: 'Web Application' },
        { val: 'SQLite3', label: 'Relational Database' },
        { val: 'Flask', label: 'Backend Micro-framework' }
      ],
      archDiagram: `<div class="arch-node-box">Responsive Frontend (Bootstrap/JS) &rarr; Flask REST Routes &rarr; SQLite3 Transactional Database</div>`,
      code: `@app.route('/order/checkout', methods=['POST'])\ndef checkout():\n    order_id = db.execute("INSERT INTO orders ...")\n    return jsonify({"order_id": order_id})`
    },

    // EDUCATION
  'edu-iiit': {
  title: 'IIIT Hyderabad — M.Tech in Computer Science & Engineering',
  category: 'TIER-1 PREMIER INSTITUTE • ACADEMIC PEDIGREE',
  match: '100% Match',
  year: 'July 2018 – May 2020',
  badge: 'DEAN\x27S MERIT LIST',
  tech: 'Algorithms • AI • Distributed Systems • Advanced DBMS • Operating Systems',
  desc: 'Graduated from International Institute of Information Technology (IIIT) Hyderabad. Earned an M.Tech in Computer Science & Engineering with a CGPA of 8.09/10. Selected in the prestigious Dean\x27s Merit List for academic excellence (2018–2019) and served as a Teaching Assistant for Discrete Mathematics & Algorithms and Neural Cognitive Science.',
  highlights: [
    { title: 'Teaching Assistant (TA) Appointments', desc: 'Appointed Teaching Assistant for two core courses: "Discrete Mathematics & Algorithms" and "Neural Cognitive Science", mentoring cohorts and evaluating algorithmic assessments.' },
    { title: 'Dean\x27s Merit List Honor', desc: 'Awarded for exceptional academic rank and subject mastery across foundational and applied computing.' },
    { title: 'Relevant Coursework', desc: 'Statistical Methods in AI, Data Structures & Algorithms, Advanced DBMS, Operating Systems, Computer Architecture.' }
  ],
  metrics: [
    { val: '8.09 / 10', label: 'CGPA' },
    { val: 'Dean\x27s List', label: 'Academic Standing' },
    { val: 'Teaching Asst.', label: 'Discrete Maths & CogSci' }
  ],
  archDiagram: `<div class="arch-node-box">IIIT Hyderabad — Premier Tier-1 Institute for Computer Science & Engineering Research</div>`,
  code: `Degree: Master of Technology (M.Tech) in Computer Science & Engineering\nInstitute: IIIT Hyderabad, India\nHonor: Dean\x27s Merit List (2018-2019)\nTeaching Assistant: Discrete Mathematics & Algorithms, Neural Cognitive Science\nCGPA: 8.09 / 10`
},

    'edu-mits': {
      title: 'MITS Gwalior — B.E in Information Technology',
      category: 'FOUNDATIONAL DEGREE',
      match: '98% Match',
      year: 'July 2014 – May 2018',
      badge: 'CGPA 8.62 / 10',
      tech: 'Information Technology • C++ • Java • Database Design',
      desc: 'Earned Bachelor of Engineering (B.E) in Information Technology with high honors (CGPA 8.62/10), building software engineering principles and computational foundations.',
      highlights: [
        { title: 'Leadership', desc: 'Led student technical bodies and coordinated regional coding symposia.' }
      ],
      metrics: [
        { val: '8.62 / 10', label: 'CGPA' }
      ],
      archDiagram: `<div class="arch-node-box">MITS Gwalior — Bachelor of Engineering in Information Technology</div>`,
      code: `Degree: Bachelor of Engineering (B.E) in Information Technology\nInstitute: MITS Gwalior (CGPA 8.62 / 10)`
    },

    'award-google-de': {
      title: 'Google Professional Data Engineer Certification',
      category: 'OFFICIAL CERTIFICATION',
      match: '100% Match',
      year: 'Certified',
      badge: 'GCP CERTIFIED',
      tech: 'Google Cloud Platform • BigQuery • Dataflow • Dataproc • IAM',
      desc: 'Earned premier industry certification from Google Cloud, demonstrating deep proficiency in designing, building, operationalizing, securing, and monitoring data processing systems.',
      highlights: [
        { title: 'GCP Cloud Engineer Certified', desc: 'Also holds Google Cloud Engineer credentials for foundational cloud infrastructure.' }
      ],
      metrics: [
        { val: 'Certified', label: 'Google Professional' },
        { val: 'GCP', label: 'Cloud Architecture' }
      ],
      archDiagram: `<div class="arch-node-box">Validated Google Cloud Architecture Standards & Best Practices</div>`,
      code: `Credential: Google Professional Data Engineer\nFocus: BigQuery, Dataflow, Cloud Storage, Vertex AI, IAM Governance, Pipeline Design`
    },

    'award-pm': {
      title: 'Appreciation from Prime Minister & HRD Minister of India',
      category: 'NATIONAL MERIT AWARD',
      match: '100% Match',
      year: 'National Honor',
      badge: 'TOP 0.1% NATIONWIDE',
      tech: 'Academic Excellence • Mathematics & Computer Science',
      desc: 'Received Certificate of Merit (Top 0.1% Merit List) by CBSE and personal letter of appreciation from the HRD Minister and the Prime Minister of India for exemplary academic performance in Class 10th (10/10 CGPA) and Class 12th (95.4%).',
      highlights: [
        { title: 'Top 0.1% Nationally', desc: 'Ranked in the top 0.1% of hundreds of thousands of students across India.' }
      ],
      metrics: [
        { val: 'Top 0.1%', label: 'CBSE Merit List' },
        { val: '10 / 10', label: 'Class 10th CGPA' },
        { val: '95.4%', label: 'Class 12th Board' }
      ],
      archDiagram: `<div class="arch-node-box">Official Certificate of Merit & Commendation by Prime Minister of India</div>`,
      code: `CBSE National Merit: Top 0.1% Rank Holder\nLetter of Commendation: Signed by Prime Minister & HRD Minister of India`
    },

    'award-xpo': {
      title: 'XPO Super-Star & Value Champion Award',
      category: 'ENTERPRISE EXCELLENCE AWARD',
      match: '99% Match',
      year: 'Multi-Year Winner',
      badge: 'LEADERSHIP & IMPACT',
      tech: 'Cloud Cost Optimization • Reliability • Innovation',
      desc: 'Honored with the XPO Super-Star and XPO Value Champion awards for exceptional performance in cloud infrastructure cost reduction ($80K–$90K/year saved) and mission-critical ETL stability.',
      highlights: [
        { title: 'High-Impact Delivery', desc: 'Recognized by executive leadership for outstanding innovation and operational impact.' }
      ],
      metrics: [
        { val: 'Super-Star', label: 'Award of Excellence' },
        { val: 'Champion', label: 'Value Driver' }
      ],
      archDiagram: `<div class="arch-node-box">Awarded by XPO Logistics Leadership for Engineering Excellence</div>`,
      code: `Awarded to Kishan Shankar Singhal for exemplary engineering ownership,\nBigQuery platform stability, and delivering $90K in annual cloud savings.`
    }
  };

  // =========================================================================
  // 2. HERO SPOTLIGHT CONFIGURATION
  // =========================================================================
const SPOTLIGHT_DATA = {
    "data-studio": {
      title: "DATA STUDIO",
      subtitle: "In-House Looker Studio Equivalent with Live Client DW Connectors via Secret Manager (Zero Migration)",
      meta: `<span class="meta-match">99.8% Match</span><span class="meta-rating">PRODUCTION</span><span class="meta-duration">GCP Cloud Run + BigQuery</span><span class="meta-quality">LOOKER STUDIO EQUIVALENT</span><span class="meta-tag">Live Client DW Connectors</span>`,
      desc: "Architected an enterprise Looker Studio-equivalent BI engine enabling clients to connect live data sources directly on the client side. Credentials are stored securely in GCP Secret Manager, querying their data warehouses directly with zero data migration required onto our servers. Unified 7 fragmented Cloud Run functions into 1 BigQuery-configured AI engine with a 12-column drag-and-drop report builder.",
      highlights: `<div class="highlight-chip">🔒 <strong>Zero Migration</strong> Direct Client DW Connection via Secret Manager</div><div class="highlight-chip">📊 <strong>In-House BI</strong> Looker Studio Equivalent with 12-Col Grid</div><div class="highlight-chip">⚡ <strong>-85%</strong> Microservice Sprawl (7 &rarr; 1 Cloud Run)</div><div class="highlight-chip">📉 <strong>-70%</strong> Manual BI Requests</div>`,
      modalTarget: "data-studio",
      playLabel: "Try AI Studio Live",
      playAction: () => {
        document.getElementById("ai-lab").scrollIntoView({ behavior: "smooth" });
        renderSimulation("tenant-churn");
      },
      showcaseHtml: `
        <div class="showcase-card">
          <div class="showcase-header">
            <div class="showcase-live-badge"><span class="pulse-green-dot"></span> LIVE ARCHITECTURE STREAM</div>
            <div class="showcase-tech-tag">GCP CLOUD RUN • BIGQUERY</div>
          </div>
          <div class="showcase-body">
            <div class="hud-flow">
              <div class="hud-box">
                <span class="hud-title">CLIENT DATA WAREHOUSE (PUSH-DOWN)</span>
                <span class="hud-sub">Snowflake • BigQuery • Postgres (Zero Migration)</span>
              </div>
              <div class="hud-arrow">&harr; <span class="hud-arrow-label">GCP Secret Manager Encrypted Auth</span> &harr;</div>
              <div class="hud-box active-glow">
                <span class="hud-title">UNIFIED INSIGHTS ENGINE (CLOUD RUN)</span>
                <span class="hud-sub">Config-driven: SQL queries & Gemini prompts managed in BigQuery</span>
              </div>
              <div class="hud-arrow">&darr; <span class="hud-arrow-label">12-Column Responsive CSS Grid</span> &darr;</div>
              <div class="hud-box">
                <span class="hud-title">IN-HOUSE REPORT BUILDER</span>
                <span class="hud-sub">Looker Studio Equivalent • Scorecards, Tables & Metric Tiles</span>
              </div>
            </div>
            <div class="hud-stats-grid">
              <div class="hud-stat-item">
                <div class="hud-stat-val">0 MB</div>
                <div class="hud-stat-lbl">Data Migration</div>
              </div>
              <div class="hud-stat-item">
                <div class="hud-stat-val">100%</div>
                <div class="hud-stat-lbl">Push-Down Query</div>
              </div>
              <div class="hud-stat-item">
                <div class="hud-stat-val">-85%</div>
                <div class="hud-stat-lbl">Microservice Sprawl</div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    "xpo-telematics": {
      title: "TB-SCALE TELEMATICS",
      subtitle: "Streaming & Batch GPS Pipeline from REST APIs to Google BigQuery (10,000+ Vehicles)",
      meta: `<span class="meta-match">99% Match</span><span class="meta-rating">TB-SCALE</span><span class="meta-duration">GCP Dataflow + Scala</span><span class="meta-quality">BATCH & REAL-TIME STREAMING</span><span class="meta-tag">IoT / Fleet</span>`,
      desc: "Engineered high-throughput streaming and batch pipelines harvesting GPS telemetry from REST APIs directly into Google BigQuery (GBQ). Handled terabytes of live telematics from 10,000+ commercial vehicles, boosting ingestion efficiency by 40% with automated route and sensor alerting.",
      highlights: `<div class="highlight-chip">🚛 <strong>10,000+ Vehicles</strong> Real-Time Telematics</div><div class="highlight-chip">⚡ <strong>GCP Dataflow</strong> & Scala Stream Processing</div><div class="highlight-chip">📦 <strong>TB-Scale Data</strong> Ingestion into GBQ</div><div class="highlight-chip">🚀 <strong>+40%</strong> Ingestion Efficiency Boost</div>`,
      modalTarget: "xpo-telematics",
      playLabel: "View Telematics Specs",
      playAction: () => openDetailModal("xpo-telematics"),
      showcaseHtml: `
        <div class="showcase-card">
          <div class="showcase-header">
            <div class="showcase-live-badge"><span class="pulse-green-dot"></span> REAL-TIME TELEMETRY STREAM</div>
            <div class="showcase-tech-tag">APACHE BEAM • SCALA • DATAFLOW</div>
          </div>
          <div class="showcase-body">
            <div class="hud-flow">
              <div class="hud-box">
                <span class="hud-title">10,000+ COMMERCIAL VEHICLES</span>
                <span class="hud-sub">REST APIs • High-Frequency GPS Telemetry</span>
              </div>
              <div class="hud-arrow">&darr; <span class="hud-arrow-label">Cloud Pub/Sub Asynchronous Messaging</span> &darr;</div>
              <div class="hud-box active-glow">
                <span class="hud-title">GCP DATAFLOW STREAM ENGINE</span>
                <span class="hud-sub">Apache Beam in Scala • Windowed deduplication & sensor alerts</span>
              </div>
              <div class="hud-arrow">&darr; <span class="hud-arrow-label">Sub-Second Streaming Ingestion</span> &darr;</div>
              <div class="hud-box">
                <span class="hud-title">GOOGLE BIGQUERY PARTITIONED DW</span>
                <span class="hud-sub">Terabyte-scale hourly & daily partitioning by timestamp</span>
              </div>
            </div>
            <div class="hud-stats-grid">
              <div class="hud-stat-item">
                <div class="hud-stat-val">10,000+</div>
                <div class="hud-stat-lbl">Active Vehicles</div>
              </div>
              <div class="hud-stat-item">
                <div class="hud-stat-val">TB/Day</div>
                <div class="hud-stat-lbl">Streaming Scale</div>
              </div>
              <div class="hud-stat-item">
                <div class="hud-stat-val">&lt; 1s</div>
                <div class="hud-stat-lbl">Pipeline Latency</div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    "bigquery-cost": {
      title: "BIGQUERY $90K ROI",
      subtitle: "Cloud Cost Governance, Dynamic Slot Autoscaling & DDL Automation",
      meta: `<span class="meta-match">99% Match</span><span class="meta-rating">$90K SAVINGS</span><span class="meta-duration">Google BigQuery</span><span class="meta-quality">SLOT AUTOSCALING</span><span class="meta-tag">Cost Governance</span>`,
      desc: "Analyzed slot consumption patterns across multi-terabyte data warehouses to eliminate overcapacity waste. Implemented autoscaling slot reservations and query partition pruning, producing $80,000–$90,000 in annual recurring cloud savings at XPO Logistics.",
      highlights: `<div class="highlight-chip">💰 <strong>$80K–$90K</strong> Saved Annually</div><div class="highlight-chip">📉 <strong>-60%</strong> Server Resource Usage</div><div class="highlight-chip">⚡ <strong>70+ Projects</strong> DDL Automation</div><div class="highlight-chip">⏱️ <strong>40+ hrs/mo</strong> Engineering Time Saved</div>`,
      modalTarget: "bigquery-cost",
      playLabel: "View Cost Architecture",
      playAction: () => openDetailModal("bigquery-cost"),
      showcaseHtml: `
        <div class="showcase-card">
          <div class="showcase-header">
            <div class="showcase-live-badge"><span class="pulse-green-dot"></span> COST GOVERNANCE & ROI</div>
            <div class="showcase-tech-tag">BIGQUERY • DDL AUTOMATION</div>
          </div>
          <div class="showcase-body">
            <div class="hud-flow">
              <div class="hud-box">
                <span class="hud-title">PEAK SLOT CONSUMPTION PROFILING</span>
                <span class="hud-sub">Hourly workload curve analysis across 70+ projects</span>
              </div>
              <div class="hud-arrow">&darr; <span class="hud-arrow-label">Dynamic Slot Autoscaling Reservations</span> &darr;</div>
              <div class="hud-box active-glow">
                <span class="hud-title">QUERY & PARTITION OPTIMIZER</span>
                <span class="hud-sub">Automated DDL generation: column mappings & cluster pruning</span>
              </div>
              <div class="hud-arrow">&darr; <span class="hud-arrow-label">60%+ Latency Reduction</span> &darr;</div>
              <div class="hud-box">
                <span class="hud-title">RECURRING CLOUD ROI</span>
                <span class="hud-sub">Sustained $80K–$90K annual savings without performance degradation</span>
              </div>
            </div>
            <div class="hud-stats-grid">
              <div class="hud-stat-item">
                <div class="hud-stat-val">$90,000</div>
                <div class="hud-stat-lbl">Annual Savings</div>
              </div>
              <div class="hud-stat-item">
                <div class="hud-stat-val">-60%</div>
                <div class="hud-stat-lbl">Query Latency</div>
              </div>
              <div class="hud-stat-item">
                <div class="hud-stat-val">70+</div>
                <div class="hud-stat-lbl">Projects Governed</div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    "nl2sql-engine": {
      title: "NL2SQL ENGINE",
      subtitle: "Enterprise Natural Language to SQL Query Engine for BigQuery",
      meta: `<span class="meta-match">99% Match</span><span class="meta-rating">AI ENGINE</span><span class="meta-duration">LLM + BigQuery</span><span class="meta-quality">85%+ ACCURACY</span><span class="meta-tag">Natural Language</span>`,
      desc: "Designed and deployed an AI-powered NL2SQL translation layer allowing non-technical property and asset managers to query enterprise datasets using conversational English. Enforced schema context injection, partition pruning, and cost guardrails, reducing query latency by 60%+ and DW compute costs by 30%+.",
      highlights: `<div class="highlight-chip">🎯 <strong>85%+</strong> SQL Generation Accuracy</div><div class="highlight-chip">⚡ <strong>-60%</strong> Query Latency</div><div class="highlight-chip">💰 <strong>-30%</strong> BigQuery Compute Cost</div><div class="highlight-chip">🛡️ <strong>Partition</strong> Pruning Guardrails</div>`,
      modalTarget: "nl2sql-engine",
      playLabel: "Test NL2SQL in AI Studio",
      playAction: () => {
        document.getElementById("ai-lab").scrollIntoView({ behavior: "smooth" });
        renderSimulation("nl2sql");
      },
      showcaseHtml: `
        <div class="showcase-card">
          <div class="showcase-header">
            <div class="showcase-live-badge"><span class="pulse-green-dot"></span> ENTERPRISE NL2SQL ENGINE</div>
            <div class="showcase-tech-tag">VERTEX AI • GEMINI • AST VALIDATION</div>
          </div>
          <div class="showcase-body">
            <div class="hud-flow">
              <div class="hud-box">
                <span class="hud-title">CONVERSATIONAL BUSINESS QUERY</span>
                <span class="hud-sub">"Show top 10 renewing tenants in Q4 by monthly revenue"</span>
              </div>
              <div class="hud-arrow">&darr; <span class="hud-arrow-label">Schema Injection & AST Syntax Validator</span> &darr;</div>
              <div class="hud-box active-glow">
                <span class="hud-title">LLM REASONING & OPTIMIZER</span>
                <span class="hud-sub">Injects partition filters, column aliases & byte limit guardrails</span>
              </div>
              <div class="hud-arrow">&darr; <span class="hud-arrow-label">Validated SQL Execution</span> &darr;</div>
              <div class="hud-box">
                <span class="hud-title">GOOGLE BIGQUERY RESULT SET</span>
                <span class="hud-sub">Formatted directly into report cards and interactive tables</span>
              </div>
            </div>
            <div class="hud-stats-grid">
              <div class="hud-stat-item">
                <div class="hud-stat-val">85%+</div>
                <div class="hud-stat-lbl">SQL Accuracy</div>
              </div>
              <div class="hud-stat-item">
                <div class="hud-stat-val">-30%</div>
                <div class="hud-stat-lbl">Compute Cost</div>
              </div>
              <div class="hud-stat-item">
                <div class="hud-stat-val">100%</div>
                <div class="hud-stat-lbl">Safe Partitioning</div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    "etl-pipelines": {
      title: "100+ ETL/ELT PIPELINES",
      subtitle: "Low-Latency, Fault-Tolerant Pipelines with Python, Airflow, PySpark & GCP",
      meta: `<span class="meta-match">99% Match</span><span class="meta-rating">ENTERPRISE</span><span class="meta-duration">Airflow + PySpark + GCP</span><span class="meta-quality">99.9% RELIABILITY</span><span class="meta-tag">Data Engineering</span>`,
      desc: "Designed and deployed 100+ low-latency, fault-tolerant ETL/ELT pipelines integrating multiple business modules across REST APIs, PySpark, Airflow, and BigQuery. Reduced data processing time by 50% across Staging, Data Lake, and DW environments.",
      highlights: `<div class="highlight-chip">⚡ <strong>100+ Pipelines</strong> Deployed & Governed</div><div class="highlight-chip">⏱️ <strong>-50%</strong> Processing Time Cut</div><div class="highlight-chip">🛡️ <strong>99.9% SLA</strong> Reliability</div><div class="highlight-chip">☁️ <strong>PySpark & Airflow</strong> Distributed Processing</div>`,
      modalTarget: "etl-pipelines",
      playLabel: "View Pipeline Specs",
      playAction: () => openDetailModal("etl-pipelines"),
      showcaseHtml: `
        <div class="showcase-card">
          <div class="showcase-header">
            <div class="showcase-live-badge"><span class="pulse-green-dot"></span> MEDALLION LAKE ARCHITECTURE</div>
            <div class="showcase-tech-tag">PYSPARK • AIRFLOW • BIGQUERY</div>
          </div>
          <div class="showcase-body">
            <div class="hud-flow">
              <div class="hud-box">
                <span class="hud-title">BRONZE LAYER: MULTI-SOURCE INGESTION</span>
                <span class="hud-sub">REST APIs, Cloud Datastreams, CDC & external data feeds</span>
              </div>
              <div class="hud-arrow">&darr; <span class="hud-arrow-label">Apache Airflow DAGs & Distributed PySpark</span> &darr;</div>
              <div class="hud-box active-glow">
                <span class="hud-title">SILVER LAYER: ENRICHED TRANSFORMS</span>
                <span class="hud-sub">Schema validation, deduplication, cleansing & normalization</span>
              </div>
              <div class="hud-arrow">&darr; <span class="hud-arrow-label">Partitioned Medallion Aggregations</span> &darr;</div>
              <div class="hud-box">
                <span class="hud-title">GOLD LAYER: ENTERPRISE DATA WAREHOUSE</span>
                <span class="hud-sub">Production BigQuery tables powering real-time executive dashboards</span>
              </div>
            </div>
            <div class="hud-stats-grid">
              <div class="hud-stat-item">
                <div class="hud-stat-val">100+</div>
                <div class="hud-stat-lbl">Pipelines Deployed</div>
              </div>
              <div class="hud-stat-item">
                <div class="hud-stat-val">-50%</div>
                <div class="hud-stat-lbl">Processing Time</div>
              </div>
              <div class="hud-stat-item">
                <div class="hud-stat-val">99.9%</div>
                <div class="hud-stat-lbl">Reliability SLA</div>
              </div>
            </div>
          </div>
        </div>
      `
    }
  };

  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const heroMeta = document.getElementById('hero-meta');
  const heroDescription = document.getElementById('hero-description');
  const heroHighlights = document.getElementById('hero-highlights');
  const btnHeroPrimary = document.getElementById('btn-hero-primary-action');
  const heroPlayLabel = document.getElementById('hero-play-label');
  const btnHeroInfo = document.getElementById('btn-hero-info');
  const spotlightTabs = document.querySelectorAll('.spotlight-tab');
  const heroShowcasePanel = document.getElementById('hero-showcase-panel');

  let currentSpotlightKey = 'data-studio';

  function updateHeroListBtn(spotlightKey) {
    const btnHeroList = document.getElementById('btn-hero-list');
    const heroListIcon = document.getElementById('hero-list-icon');
    const heroListLabel = document.getElementById('hero-list-label');
    if (!btnHeroList) return;
    const isSaved = Array.isArray(myList) && myList.includes(spotlightKey);
    if (heroListIcon) {
      if (isSaved) {
        heroListIcon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#46d369" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
      } else {
        heroListIcon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
      }
    }
    if (heroListLabel) {
      heroListLabel.textContent = isSaved ? 'In My List' : 'My List';
    }
    if (isSaved) {
      btnHeroList.classList.add('in-list');
      btnHeroList.setAttribute('title', 'Remove from My List');
    } else {
      btnHeroList.classList.remove('in-list');
      btnHeroList.setAttribute('title', 'Add to My List');
    }
  }

  function updateHeroSpotlight(spotlightKey, isSilent = false) {
    const data = SPOTLIGHT_DATA[spotlightKey];
    if (!data) return;

    currentSpotlightKey = spotlightKey;
    if (heroTitle) heroTitle.textContent = data.title;
    if (heroSubtitle) heroSubtitle.textContent = data.subtitle;
    if (heroMeta) heroMeta.innerHTML = data.meta;
    if (heroDescription) heroDescription.innerHTML = data.desc;
    if (heroHighlights) heroHighlights.innerHTML = data.highlights;
    if (heroPlayLabel) heroPlayLabel.textContent = data.playLabel;
    if (heroShowcasePanel && data.showcaseHtml) {
      heroShowcasePanel.innerHTML = data.showcaseHtml;
    }

    spotlightTabs.forEach(tab => {
      if (tab.getAttribute('data-spotlight') === spotlightKey) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    updateHeroListBtn(spotlightKey);
    if (!isSilent) {
      triggerAvatarSpeech(`Switched featured spotlight to "${data.title}"! Click "Architecture & Deep Dive" or any movie card below to inspect.`);
    }
  }

  spotlightTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-spotlight');
      updateHeroSpotlight(target);
    });
  });

  btnHeroPrimary.addEventListener('click', () => {
    const data = SPOTLIGHT_DATA[currentSpotlightKey];
    if (data && data.playAction) data.playAction();
  });

  btnHeroInfo.addEventListener('click', () => {
    const data = SPOTLIGHT_DATA[currentSpotlightKey];
    if (data && data.modalTarget) openDetailModal(data.modalTarget);
  });

  // =========================================================================
  // NAVIGATION DRAWER (3-LINE HAMBURGER MENU)
  // =========================================================================
  const btnMenuToggle = document.getElementById("btn-menu-toggle");
  const navDrawer = document.getElementById("nav-drawer");
  const navDrawerBackdrop = document.getElementById("nav-drawer-backdrop");
  const btnDrawerClose = document.getElementById("btn-drawer-close");

  function openNavDrawer() {
    if (navDrawer && navDrawerBackdrop) {
      navDrawer.classList.add("active");
      navDrawerBackdrop.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function closeNavDrawer() {
    if (navDrawer && navDrawerBackdrop) {
      navDrawer.classList.remove("active");
      navDrawerBackdrop.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  if (btnMenuToggle) btnMenuToggle.addEventListener("click", openNavDrawer);
  if (btnDrawerClose) btnDrawerClose.addEventListener("click", closeNavDrawer);
  if (navDrawerBackdrop) navDrawerBackdrop.addEventListener("click", closeNavDrawer);

  document.querySelectorAll(".drawer-link").forEach(link => {
    link.addEventListener("click", () => {
      closeNavDrawer();
    });
  });

  // =========================================================================
  // 3. WEB AUDIO SYNTHESIZER
  // =========================================================================
  let audioContext = null;
  let isAudioMuted = true;

  function initAudioContext() {
    if (!audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) audioContext = new AudioCtx();
    }
    if (audioContext && audioContext.state === 'suspended') {
      audioContext.resume();
    }
  }

  function playNetflixTaDum() {
    if (isAudioMuted) return;
    try {
      initAudioContext();
      if (!audioContext) return;
      const now = audioContext.currentTime;

      const osc1 = audioContext.createOscillator();
      const gain1 = audioContext.createGain();
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(65, now);
      osc1.frequency.exponentialRampToValueAtTime(35, now + 1.2);
      gain1.gain.setValueAtTime(0.5, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
      osc1.connect(gain1);
      gain1.connect(audioContext.destination);
      osc1.start(now);
      osc1.stop(now + 1.2);

      const osc2 = audioContext.createOscillator();
      const gain2 = audioContext.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(98, now + 0.15);
      osc2.frequency.exponentialRampToValueAtTime(196, now + 0.6);
      gain2.gain.setValueAtTime(0.001, now);
      gain2.gain.linearRampToValueAtTime(0.35, now + 0.35);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.5);
      osc2.connect(gain2);
      gain2.connect(audioContext.destination);
      osc2.start(now + 0.15);
      osc2.stop(now + 1.5);
    } catch (e) {}
  }

  function playSpeechBlip() {
    if (isAudioMuted) return;
    try {
      initAudioContext();
      if (!audioContext) return;
      const now = audioContext.currentTime;
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440 + Math.random() * 80, now);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.connect(gain);
      gain.connect(audioContext.destination);
      osc.start(now);
      osc.stop(now + 0.04);
    } catch (e) {}
  }

  const btnAudioToggle = document.getElementById('btn-audio-toggle');
  const iconMuted = document.getElementById('audio-icon-muted');
  const iconUnmuted = document.getElementById('audio-icon-unmuted');

  if (btnAudioToggle) btnAudioToggle.addEventListener('click', () => {
    isAudioMuted = !isAudioMuted;
    if (!isAudioMuted) {
      initAudioContext();
      iconMuted.classList.add('hidden');
      iconUnmuted.classList.remove('hidden');
      btnAudioToggle.setAttribute('title', 'Mute Netflix & Game Audio');
      playNetflixTaDum();
    } else {
      iconMuted.classList.remove('hidden');
      iconUnmuted.classList.add('hidden');
      btnAudioToggle.setAttribute('title', 'Unmute Netflix & Game Audio');
    }
  });

  // =========================================================================
  // 4. INTERACTIVE AVATAR WITH LIVE Q&A SYSTEM + INTELLIGENT MATCHING
  // =========================================================================
  const speechCloud = document.getElementById('game-speech-cloud');
  const speechTextElem = document.getElementById('avatar-dialogue-text');
  const btnCloudMinimize = document.getElementById('btn-cloud-minimize');
  const avatarBtn = document.getElementById('avatar-companion-btn');
  const avatarQaForm = document.getElementById('avatar-qa-form');
  const avatarUserInput = document.getElementById('avatar-user-input');
  const suggestedChips = document.querySelectorAll('.suggestion-chip');
  const suggestedWrapper = document.getElementById('avatar-suggested-chips');

  let typewriterTimeout = null;

  function typewriteMessage(message) {
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    speechTextElem.textContent = '';
    speechCloud.classList.remove('minimized');

    let i = 0;
    const speed = 16;

    function typeChar() {
      if (i < message.length) {
        speechTextElem.textContent += message.charAt(i);
        if (i % 3 === 0) playSpeechBlip();
        i++;
        typewriterTimeout = setTimeout(typeChar, speed);
      }
    }
    typeChar();
  }

  function triggerAvatarSpeech(text, forceOpen = false) {
    if (speechCloud.classList.contains('minimized') && !forceOpen) {
      if (speechTextElem) speechTextElem.textContent = text;
      return;
    }
    typewriteMessage(text);
  }

  btnCloudMinimize.addEventListener('click', (e) => {
    e.stopPropagation();
    speechCloud.classList.add('minimized');
  });

  avatarBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (speechCloud.classList.contains('minimized')) {
      speechCloud.classList.remove('minimized');
      const welcomeLine = "Hey there! I'm Kishan Shankar Singhal — Senior Data Engineer & AI Platform Architect (6.6+ Years Work Experience • IIIT Hyderabad M.Tech CSE Dean's List). Ask me anything from my resume below or click any suggested question!";
      typewriteMessage(welcomeLine);
      setTimeout(() => {
        if (avatarUserInput) avatarUserInput.focus();
      }, 300);
    } else {
      speechCloud.classList.add('minimized');
    }
  });

  // Comprehensive Knowledge Base & Q&A Matching Logic
  function answerUserQuestion(questionRaw) {
    const q = questionRaw.toLowerCase().trim();
    if (!q) return;

// 1. IIIT Hyderabad / Education / Teaching Assistant
if (q.includes('ta') || q.includes('teaching assistant') || q.includes('discrete') || q.includes('neural') || q.includes('cognitive') || q.includes('iiit') || q.includes('hyderabad') || q.includes('college') || q.includes('education') || q.includes('degree') || q.includes('mtech') || q.includes('dean') || q.includes('cgpa')) {
  if (q.includes('ta') || q.includes('teaching') || q.includes('assistant') || q.includes('discrete') || q.includes('cognitive')) {
    triggerAvatarSpeech(
      "At IIIT Hyderabad, I served as a Teaching Assistant (TA) for two core courses: 1) \"Discrete Mathematics & Algorithms\" and 2) \"Neural Cognitive Science\" ! I conducted problem-solving tutorial sessions, mentored postgraduate and undergraduate students in algorithm analysis & computational complexity, and evaluated assignments & exams."
    );
    return;
  }
  triggerAvatarSpeech(
    "I graduated with an M.Tech in Computer Science & Engineering from IIIT Hyderabad (CGPA 8.09/10), earning a place on the prestigious Dean\x27s Merit List (2018–2019)! I also served as a Teaching Assistant for Discrete Maths & Algorithms and Neural Cognitive Science. Coursework includes Statistical Methods in AI, Advanced Data Structures & Algorithms, and Advanced DBMS. I also hold a B.E in IT from MITS Gwalior (CGPA 8.62)!"
  );
  return;
}

    // 2. Data Studio, Secret Manager, Live Client DW, Zero Migration, Looker Studio
    if (q.includes('data studio') || q.includes('looker') || q.includes('secret manager') || q.includes('live data') || q.includes('client dw') || q.includes('zero migration') || q.includes('bi engine')) {
      triggerAvatarSpeech(
        "Data Studio is our in-house Looker Studio equivalent! Clients connect their live data sources on their end — credentials are encrypted in GCP Secret Manager, and queries execute push-down directly against their warehouse with zero data migration required on our servers. I also consolidated 7 legacy Cloud Run functions into 1 unified BigQuery-configured AI engine with a 12-column drag-and-drop report builder!"
      );
      return;
    }

    // 3. XPO Telematics, GPS, Dataflow, Scala, Streaming, TB-Scale
    if (q.includes('gps') || q.includes('telematics') || q.includes('dataflow') || q.includes('scala') || q.includes('tb') || q.includes('vehicle') || q.includes('truck') || q.includes('streaming') || q.includes('pubsub') || q.includes('pub/sub')) {
      triggerAvatarSpeech(
        "At XPO, I engineered end-to-end streaming and batch pipelines bringing real-time GPS telemetry from REST APIs directly into Google BigQuery using GCP Dataflow (Apache Beam in Scala) and Cloud Pub/Sub. We processed Terabyte (TB)-scale data daily across 10,000+ commercial vehicles, boosting ingestion efficiency by 40% with sub-second latency and automated alerting!"
      );
      return;
    }

    // 4. BigQuery Slot Autoscaling, Cost Optimization, $90K Savings
    if (q.includes('bigquery') || q.includes('cost') || q.includes('savings') || q.includes('saving') || q.includes('slot') || q.includes('autoscaling') || q.includes('90k') || q.includes('80k') || q.includes('roi')) {
      triggerAvatarSpeech(
        "At XPO Logistics, I analyzed slot consumption curves during peak hours to eliminate overcapacity. By implementing dynamic slot autoscaling reservations, rewriting analytical queries, and optimizing table partition/clustering, we generated $80,000 to $90,000 in annual recurring savings while cutting query latency by 60%+!"
      );
      return;
    }

    // 5. End-to-End ETL/ELT, Airflow, PySpark, Python, SQL, Datastreams
    if (q.includes('etl') || q.includes('elt') || q.includes('pipeline') || q.includes('airflow') || q.includes('pyspark') || q.includes('python') || q.includes('sql') || q.includes('datastream') || q.includes('informatica')) {
      triggerAvatarSpeech(
        "I have architected 100+ low-latency, fault-tolerant ETL/ELT pipelines integrating multi-source data across REST APIs, PySpark, Apache Airflow, and BigQuery. I'm well-versed with Python, complex analytical SQL, Google Cloud Dataflow, and Datastreams, cutting processing time by 50% while maintaining 99.9% reliability SLAs!"
      );
      return;
    }

    // 6. NL2SQL Engine
    if (q.includes('nl2sql') || q.includes('natural language') || q.includes('sql generation')) {
      triggerAvatarSpeech(
        "I designed and deployed an enterprise NL2SQL engine using LLMs with 85%+ generation accuracy! It translates conversational English into optimized BigQuery SQL with schema injection, partition safety, and cost guardrails so non-technical users can query enterprise data safely."
      );
      return;
    }

    // 7. Academic Projects: GoldFinch, MetroSafe, Terminal Explorer, Dig In
    if (q.includes('goldfinch') || q.includes('rlhf')) {
      triggerAvatarSpeech(
        "In GoldFinch, I authored complex analytical SQL queries and acted as a domain expert for RLHF (Reinforcement Learning via Human Feedback) to fine-tune state-of-the-art LLMs for enterprise request processing."
      );
      return;
    }
    if (q.includes('metro') || q.includes('safe') || q.includes('twitter') || q.includes('tweet') || q.includes('nlp')) {
      triggerAvatarSpeech(
        "MetroSafe Tweet Tracker is a real-time social media analytics system! It streams live geotagged tweets via Tweepy, runs NLP sentiment and threat classification, and plots riot-prone urban hotspots on a Flask dashboard for rapid situational awareness."
      );
      return;
    }
    if (q.includes('terminal') || q.includes('c++') || q.includes('posix') || q.includes('explorer')) {
      triggerAvatarSpeech(
        "Terminal File Explorer is a high-performance C++ CLI file manager I wrote using direct POSIX system calls. It features dual navigation modes (Normal & Command) with recursive search, copy, move, and batch delete."
      );
      return;
    }
    if (q.includes('dig in') || q.includes('food') || q.includes('sqlite')) {
      triggerAvatarSpeech(
        "Dig In! is a responsive food ordering web app built with Flask, Bootstrap, JavaScript, and an SQLite3 relational database supporting shopping carts, menus, and order transactions."
      );
      return;
    }
    if (q.includes('academic') || q.includes('college project')) {
      triggerAvatarSpeech(
        "My college and academic projects are archived in the lower section! They include GoldFinch (RLHF for LLMs), MetroSafe (real-time Twitter NLP threat mapping), Terminal File Explorer (C++), and Dig In! (Flask/SQLite3)."
      );
      return;
    }

    // 8. Hobbies & Personal Passions
    if (q.includes('hobby') || q.includes('hobbies') || q.includes('cricket') || q.includes('stock') || q.includes('invest') || q.includes('travel') || q.includes('automation') || q.includes('reading') || q.includes('passion') || q.includes('free time')) {
      triggerAvatarSpeech(
        "Outside the terminal, I enjoy playing tactical cricket, analyzing the stock market & value investments, reading tech & AI advancement papers, and travelling across scenic destinations!"
      );
      return;
    }

    // 9. Certifications & National Honors
    if (q.includes('certif') || q.includes('gcp certified') || q.includes('pde') || q.includes('prime minister') || q.includes('award') || q.includes('merit')) {
      triggerAvatarSpeech(
        "I am a Google Certified Professional Data Engineer and Google Cloud Engineer. I also received a Certificate of Merit (Top 0.1% National Merit CBSE) with a personal letter of appreciation from the Prime Minister and HRD Minister of India, as well as the XPO Super-Star and Value Champion awards!"
      );
      return;
    }

    // 10. Contact / Resume
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('linkedin') || q.includes('github') || q.includes('hire')) {
      triggerAvatarSpeech(
        "You can reach me at singhal.kishan.11@gmail.com or (+91) 8871207064! My LinkedIn is linkedin.com/in/kishan-shankar-singhal and GitHub is github.com/kishan811. Looking forward to connecting!"
      );
      return;
    }
    if (q.includes('resume') || q.includes('cv') || q.includes('pdf') || q.includes('download')) {
      window.open('Kishan_Singhal_DE.pdf', '_blank');
      triggerAvatarSpeech("Opening my official resume PDF now! You can also click the Resume button in the navigation bar anytime.");
      return;
    }

    // 11. Meaningful Fallback with Suggested Questions
    triggerAvatarSpeech(
      `That's an interesting question! While that specific detail isn't on my resume, I'd love to chat with you directly. Reach me at singhal.kishan.11@gmail.com or (+91) 8871207064. Meanwhile, try clicking one of the suggested questions below:`
    );

    updateSuggestedChips([
      "Tell me about IIIT Hyderabad",
      "How does Data Studio connect live client DWs?",
      "How did you save $90K on BigQuery?",
      "Explain your TB-scale GPS telematics pipeline",
      "What tech stack do you use for ETL/ELT?",
      "What are your hobbies outside tech?"
    ]);
  }

  function updateSuggestedChips(questions) {
    if (!suggestedWrapper) return;
    suggestedWrapper.innerHTML = '';
    questions.forEach(text => {
      const btn = document.createElement('button');
      btn.className = 'suggestion-chip';
      btn.setAttribute('data-q', text);
      btn.textContent = text;
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        avatarUserInput.value = text;
        answerUserQuestion(text);
      });
      suggestedWrapper.appendChild(btn);
    });
  }

  // Handle Form Submission
  avatarQaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = avatarUserInput.value;
    if (query.trim()) {
      speechCloud.classList.remove('minimized');
      answerUserQuestion(query);
      avatarUserInput.value = '';
    }
  });

  // Attach click listener to initial chips
  suggestedChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const question = chip.getAttribute('data-q');
      speechCloud.classList.remove('minimized');
      avatarUserInput.value = question;
      answerUserQuestion(question);
    });
  });

  // =========================================================================
  // 5. INTERACTIVE AI STUDIO SIMULATOR
  // =========================================================================
  const presetButtons = document.querySelectorAll('.preset-btn');
  const btnRunSimulation = document.getElementById('btn-run-simulation');
  const renderedCardsContainer = document.getElementById('rendered-cards');
  const gridLoader = document.getElementById('grid-loader');
  const codeJsonOutput = document.getElementById('code-json-output');
  const workspaceTabs = document.querySelectorAll('.workspace-tabs .tab-btn');
  const workspacePanes = document.querySelectorAll('.workspace-tab-content');

  let currentPreset = 'tenant-churn';

  const SIMULATION_DATA = {
    'tenant-churn': {
      json: {
        status: "success",
        module: "tenant_renewal_scoring",
        model: "gemini-1.5-pro",
        execution_time_ms: 382,
        insights: [
          { metric: "Predicted Renewal Rate", value: "84.2%", badge: "good", subtext: "+6.4% vs previous quarter", span: 4 },
          { metric: "High Risk Leases (90d)", value: "14 Units", badge: "risk", subtext: "Total ARR exposure: $420,000", span: 4 },
          { metric: "Expansion Pipeline", value: "8 Accounts", badge: "info", subtext: "Potential uplift: +$180,000 ARR", span: 4 },
          {
            metric: "AI Recommendation & Strategy",
            value: "Proactive Engagement Recommended",
            badge: "info",
            subtext: "Gemini synthesized 3 key interventions for at-risk industrial units.",
            recommendation: "Flagged Tenant Acropharma (Lease #9021): Space utilization dropped 45% in Q3. AI suggests offering flexible 12-month extension with adjusted square footage to prevent churn.",
            span: 12
          }
        ]
      }
    },
    'rfm-revenue': {
      json: {
        status: "success",
        module: "rfm_revenue_segmentation",
        model: "gemini-1.5-pro",
        execution_time_ms: 410,
        insights: [
          { metric: "Total Monitored ARR", value: "$14.8M", badge: "good", subtext: "Across 42 property portfolios", span: 4 },
          { metric: "Anomaly Alerts", value: "3 Flagged", badge: "risk", subtext: "Unusual payment variance detected", span: 4 },
          { metric: "Top Decile Performers", value: "28 Clients", badge: "info", subtext: "Contributing 64% of net margin", span: 4 },
          {
            metric: "Revenue Anomaly Synthesis",
            value: "Payment Delay in Logistics Cluster",
            badge: "risk",
            subtext: "Anomaly detected in Northeast fulfillment centers.",
            recommendation: "Recency scoring dropped below threshold for 3 logistics tenants due to localized freight volume adjustments. Cash-flow recovery risk estimated at low-to-medium.",
            span: 12
          }
        ]
      }
    },
    'nl2sql': {
      json: {
        status: "success",
        module: "nl2sql_engine",
        model: "gemini-1.5-pro",
        execution_time_ms: 295,
        sql_generated: `SELECT \n  building_name, \n  occupancy_rate, \n  energy_star_score \nFROM \`property_warehouse.buildings\` \nWHERE occupancy_rate > 0.90 \nORDER BY energy_star_score DESC \nLIMIT 5;`,
        insights: [
          { metric: "NL2SQL Accuracy", value: "96.4%", badge: "good", subtext: "Validated against BigQuery Information Schema", span: 4 },
          { metric: "Estimated Query Cost", value: "$0.0012", badge: "good", subtext: "Partition pruning active (scanned 14 MB)", span: 4 },
          { metric: "Query Latency", value: "420 ms", badge: "good", subtext: "BigQuery BI Engine cache hit", span: 4 },
          {
            metric: "Generated SQL Execution Result",
            value: "Top 5 High-Occupancy Green Buildings",
            badge: "info",
            subtext: "Query synthesized successfully from natural language.",
            recommendation: "1. Metro Tower (98% Occ, 94 EnergyScore) | 2. Horizon Plaza (95% Occ, 91 EnergyScore) | 3. Silicon Hub (94% Occ, 89 EnergyScore). Query generated with zero syntax errors.",
            span: 12
          }
        ]
      }
    },
    'bdp-iot': {
      json: {
        status: "success",
        module: "bdp_iot_anomaly_detector",
        model: "gemini-1.5-pro",
        execution_time_ms: 360,
        insights: [
          { metric: "Connected BDP Devices", value: "1,240 Nodes", badge: "good", subtext: "Schneider Electric EcoStruxure UAT live", span: 4 },
          { metric: "HVAC Energy Outliers", value: "2 Chiller Units", badge: "risk", subtext: "+32% kWh variance above baseline", span: 4 },
          { metric: "OAuth2 Sync Status", value: "Healthy", badge: "good", subtext: "Token auto-refreshed every 3600s", span: 4 },
          {
            metric: "IoT Diagnostic Alert",
            value: "Compressor Cycle Fluctuation",
            badge: "risk",
            subtext: "BDP Building Platform telematics analysis.",
            recommendation: "Chiller #4 in West Facility cycling every 90 seconds. AI diagnostic suggests sensor recalibration or coolant pressure review to avoid premature motor fatigue.",
            span: 12
          }
        ]
      }
    }
  };

  function renderSimulation(presetKey) {
    const data = SIMULATION_DATA[presetKey];
    if (!data) return;

    gridLoader.classList.remove('hidden');
    renderedCardsContainer.innerHTML = '';
    codeJsonOutput.textContent = '// Querying BigQuery metadata & executing call_llm()...';

    setTimeout(() => {
      gridLoader.classList.add('hidden');
      codeJsonOutput.textContent = JSON.stringify(data.json, null, 2);

      let html = '';
      data.json.insights.forEach(item => {
        const badgeClass = item.badge === 'risk' ? 'badge-risk' : (item.badge === 'good' ? 'badge-good' : 'badge-info');
        const badgeText = item.badge === 'risk' ? '⚠️ RISK' : (item.badge === 'good' ? '✓ OPTIMAL' : 'ℹ INFO');

        html += `
          <div class="grid-widget span-${item.span}">
            <div class="widget-header">
              <span class="widget-title">${item.metric}</span>
              <span class="widget-badge ${badgeClass}">${badgeText}</span>
            </div>
            <div class="widget-metric-val">${item.value}</div>
            <div class="widget-metric-sub">${item.subtext}</div>
            ${item.recommendation ? `
              <div class="ai-recommendation-box">
                <strong>🤖 AI Actionable Insight:</strong>
                ${item.recommendation}
              </div>
            ` : ''}
          </div>
        `;
      });

      renderedCardsContainer.innerHTML = html;
      triggerAvatarSpeech(`Rendered AI simulation for ${presetKey.replace('-', ' ').toUpperCase()}! The 12-column responsive grid formatted the output dynamically.`);
    }, 450);
  }

  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      presetButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPreset = btn.getAttribute('data-preset');
      renderSimulation(currentPreset);
    });
  });

  btnRunSimulation.addEventListener('click', () => {
    renderSimulation(currentPreset);
  });

  workspaceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      workspaceTabs.forEach(t => t.classList.remove('active'));
      workspacePanes.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const targetId = `tab-${tab.getAttribute('data-tab')}`;
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  renderSimulation('tenant-churn');

  // =========================================================================
  // 6. NETFLIX HORIZONTAL CAROUSEL CONTROLS
  // =========================================================================
  const carouselControls = document.querySelectorAll('.carousel-control');

  carouselControls.forEach(ctrl => {
    ctrl.addEventListener('click', () => {
      const carouselId = ctrl.getAttribute('data-carousel');
      const carousel = document.getElementById(carouselId);
      if (!carousel) return;

      const scrollAmount = carousel.offsetWidth * 0.75;
      if (ctrl.classList.contains('prev')) {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    });
  });

  // =========================================================================
  // 7. NETFLIX DETAIL MODAL (Expanded View)
  // =========================================================================
  const modalBackdrop = document.getElementById('detail-modal-backdrop');
  const btnModalClose = document.getElementById('btn-modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalMeta = document.getElementById('modal-meta');
  const modalDesc = document.getElementById('modal-desc');
  const modalHighlights = document.getElementById('modal-highlights');
  const modalMetricsGrid = document.getElementById('modal-metrics-grid');
  const modalArchDiagram = document.getElementById('modal-arch-diagram');
  const modalCodeSnippet = document.getElementById('modal-code-snippet');
  const btnModalPrimaryAction = document.getElementById('btn-modal-primary-action');
  const btnModalBookmark = document.getElementById('btn-modal-bookmark');

  const modalTabs = document.querySelectorAll('.modal-tab');
  const modalPanes = document.querySelectorAll('.modal-tab-pane');

  let activeModalItemId = null;

  function openDetailModal(itemId) {
    const data = PROJECT_DATA[itemId];
    if (!data) return;

    activeModalItemId = itemId;
    if (modalTitle) modalTitle.textContent = data.title;

    if (modalMeta) {
      modalMeta.innerHTML = `
        <span class="meta-match">${data.match || '99% Match'}</span>
        <span class="meta-rating">${data.badge || 'PROD'}</span>
        <span class="meta-duration">${data.year || '2024'}</span>
        <span class="meta-tag">${data.category || ''}</span>
      `;
    }

    if (modalDesc) modalDesc.innerHTML = data.desc || '';

    if (modalHighlights) {
      let hlHtml = '';
      if (data.highlights && data.highlights.length) {
        data.highlights.forEach(h => {
          hlHtml += `
            <div class="modal-highlight-item">
              <h5>${h.title}</h5>
              <p>${h.desc}</p>
            </div>
          `;
        });
      }
      modalHighlights.innerHTML = hlHtml;
    }

    if (modalMetricsGrid) {
      let mHtml = '';
      if (data.metrics && data.metrics.length) {
        data.metrics.forEach(m => {
          mHtml += `
            <div class="metric-stat-card">
              <div class="metric-big-number">${m.val}</div>
              <div class="metric-stat-label">${m.label}</div>
            </div>
          `;
        });
      }
      modalMetricsGrid.innerHTML = mHtml;
    }

    if (modalArchDiagram) {
      modalArchDiagram.innerHTML = data.archDiagram || '<p>Architecture diagram details</p>';
    }
    if (modalCodeSnippet) {
      modalCodeSnippet.textContent = data.code || '// Production code snippet';
    }

    // Show live demo action ONLY for tiles where a live demo is genuinely possible
    if (btnModalPrimaryAction) {
      if (data.hasLiveDemo) {
        btnModalPrimaryAction.style.display = 'inline-flex';
        btnModalPrimaryAction.classList.remove('hidden');
        const labelSpan = btnModalPrimaryAction.querySelector('span');
        if (labelSpan) labelSpan.textContent = data.demoLabel || 'Try Live Demo';
      } else {
        btnModalPrimaryAction.style.display = 'none';
        btnModalPrimaryAction.classList.add('hidden');
      }
    }

    updateModalBookmarkBtn(itemId);
    updateHeroListBtn(currentSpotlightKey);

    modalTabs.forEach(t => t.classList.remove('active'));
    modalPanes.forEach(p => p.classList.remove('active'));
    if (modalTabs.length > 0) modalTabs[0].classList.add('active');
    const overviewPane = document.getElementById('pane-overview');
    if (overviewPane) overviewPane.classList.add('active');

    if (modalBackdrop) modalBackdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    triggerAvatarSpeech(`Opened deep dive for "${data.title}". Check out the Architecture and Metrics tabs!`);
  }

  function closeDetailModal() {
    if (modalBackdrop) modalBackdrop.classList.add('hidden');
    document.body.style.overflow = '';
    activeModalItemId = null;
  }

  btnModalClose.addEventListener('click', closeDetailModal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeDetailModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modalBackdrop.classList.contains('hidden')) {
      closeDetailModal();
    }
  });

  modalTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      modalTabs.forEach(t => t.classList.remove('active'));
      modalPanes.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const paneId = `pane-${tab.getAttribute('data-modaltab')}`;
      const pane = document.getElementById(paneId);
      if (pane) pane.classList.add('active');
    });
  });

  btnModalPrimaryAction.addEventListener('click', () => {
    if (!activeModalItemId) return;
    const data = PROJECT_DATA[activeModalItemId];
    if (data && data.hasLiveDemo) {
      closeDetailModal();
      const lab = document.getElementById('ai-lab');
      if (lab) lab.scrollIntoView({ behavior: 'smooth' });
      if (typeof renderSimulation === 'function') {
        renderSimulation(data.demoPreset || 'tenant-churn');
      }
    }
  });

  document.querySelectorAll('.movie-card, .edu-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-round-add') || e.target.closest('.btn-round-like')) {
        return;
      }
      const modalId = card.getAttribute('data-modal');
      if (modalId) openDetailModal(modalId);
    });
  });

  // =========================================================================
  // 8. "MY LIST" (BOOKMARKS & LOCALSTORAGE)
  // =========================================================================
  const myListCountBadge = document.getElementById('my-list-count');
  const myListContainer = document.getElementById('my-list-items-container');
  const emptyListNotice = document.getElementById('empty-list-notice');

  function saveMyList() {
    try {
      localStorage.setItem('dataflix_my_list', JSON.stringify(myList));
      localStorage.setItem('kishanflix_my_list', JSON.stringify(myList));
    } catch (e) {}
    renderMyList();
    updateHeroSpotlight(currentSpotlightKey, true);
    updateHeroListBtn(currentSpotlightKey);
  }

  function toggleMyListItem(itemId) {
    if (!itemId) return;
    const index = myList.indexOf(itemId);
    if (index === -1) {
      myList.push(itemId);
      triggerAvatarSpeech(`Added "${PROJECT_DATA[itemId]?.title || itemId}" to your list!`);
    } else {
      myList.splice(index, 1);
      triggerAvatarSpeech(`Removed item from your list.`);
    }
    saveMyList();
    updateModalBookmarkBtn(itemId);
  }

  function updateModalBookmarkBtn(itemId) {
    if (!btnModalBookmark) return;
    if (myList.includes(itemId)) {
      btnModalBookmark.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#46d369" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
      btnModalBookmark.setAttribute('title', 'Remove from My List');
    } else {
      btnModalBookmark.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
      btnModalBookmark.setAttribute('title', 'Add to My List');
    }
  }

  btnModalBookmark.addEventListener('click', () => {
    if (activeModalItemId) toggleMyListItem(activeModalItemId);
  });

  document.getElementById('btn-hero-list').addEventListener('click', () => {
    toggleMyListItem(currentSpotlightKey);
  });

  document.querySelectorAll('.btn-round-add').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const itemId = btn.getAttribute('data-item-id');
      if (itemId) toggleMyListItem(itemId);
    });
  });

  function renderMyList() {
    myListCountBadge.textContent = myList.length;
    myListContainer.innerHTML = '';

    if (myList.length === 0) {
      myListContainer.appendChild(emptyListNotice);
      return;
    }

    myList.forEach(id => {
      const data = PROJECT_DATA[id];
      if (!data) return;

      const card = document.createElement('div');
      card.className = 'movie-card';
      card.innerHTML = `
        <div class="card-media">
          <div class="card-bg-gradient gradient-ai"></div>
          <div class="card-art-content">
            <span class="card-category-tag">${data.category}</span>
            <h3 class="card-title">${data.title}</h3>
            <p class="card-preview-text">${data.desc}</p>
          </div>
        </div>
      `;
      card.addEventListener('click', () => openDetailModal(id));
      myListContainer.appendChild(card);
    });
  }

  renderMyList();

  // =========================================================================
  // 9. NAVBAR SCROLL EFFECT & REAL-TIME SEARCH
  // =========================================================================
  const mainNav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
  });

  const searchContainer = document.getElementById('nav-search-container');
  const btnSearchToggle = document.getElementById('btn-search-toggle');
  const searchInput = document.getElementById('site-search-input');

  btnSearchToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
      searchInput.focus();
    }
  });

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const allCards = document.querySelectorAll('.movie-card, .edu-card');

    allCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const tags = (card.getAttribute('data-tags') || '').toLowerCase();
      if (!query || text.includes(query) || tags.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

    if (query.length > 2) {
      triggerAvatarSpeech(`Filtering projects matching "${query}"...`);
    }
  });

  document.addEventListener('click', (e) => {
    if (!searchContainer.contains(e.target) && searchInput.value === '') {
      searchContainer.classList.remove('active');
    }
  });

  // Initialize featured hero spotlight & My List on initial page load
  updateHeroSpotlight('data-studio', true);
  renderMyList();

});
