// =============================================
// ✏️ EDIT YOUR PROJECTS HERE
// Add as many as you want! Copy a block and fill in your info.
// =============================================
const projects = [
  {
    title: "Sales Forecasting Dashboard",
    category: "Machine Learning",
    date: "Jan 2025",
    emoji: "📈",
    color: "#e8f4f8",
    short: "Time-series model predicting monthly sales with 94% accuracy, deployed as an interactive Streamlit app.",
    description: "Built an end-to-end forecasting pipeline using Facebook Prophet and XGBoost. Cleaned 3 years of messy retail data, engineered seasonal features, and deployed the model as an interactive Streamlit dashboard with live filters.",
    stack: ["Python", "Prophet", "XGBoost", "Streamlit", "Pandas", "Plotly"],
    highlights: [
      "94% accuracy on 30-day rolling forecast",
      "Reduced manual reporting time by 6 hours/week",
      "Handles seasonality, holidays, and trend breaks"
    ],
    demo: "#",
    code: "#"
  },
  {
    title: "NLP Sentiment Pipeline",
    category: "NLP",
    date: "Mar 2025",
    emoji: "🧠",
    color: "#f0e8f8",
    short: "Fine-tuned BERT model for customer review sentiment across 5 languages.",
    description: "Fine-tuned a multilingual BERT model on 50k+ customer reviews. Built a preprocessing pipeline for 5 languages and packaged the model as a REST API. Integrated with a Power BI dashboard for real-time sentiment monitoring.",
    stack: ["Python", "HuggingFace", "FastAPI", "Docker", "Power BI"],
    highlights: [
      "91% F1-score on held-out test set",
      "Supports EN, ES, FR, DE, PT",
      "REST API with <200ms response time"
    ],
    demo: "#",
    code: "#"
  },
  {
    title: "Customer Churn Predictor",
    category: "Machine Learning",
    date: "Nov 2024",
    emoji: "🎯",
    color: "#fef3e2",
    short: "Logistic + ensemble model identifying at-risk customers 30 days in advance.",
    description: "Designed a churn prediction system for a telecom dataset. Compared logistic regression, random forest, and gradient boosting. Implemented SHAP explainability to help business teams understand which factors drive churn.",
    stack: ["Python", "Scikit-learn", "SHAP", "Matplotlib", "Seaborn"],
    highlights: [
      "84% recall on churn class",
      "SHAP values for full explainability",
      "Automated weekly scoring pipeline"
    ],
    demo: "#",
    code: "#"
  },
  {
    title: "COVID-19 Data Explorer",
    category: "Data Visualization",
    date: "Sep 2024",
    emoji: "🗺️",
    color: "#e8f8ee",
    short: "Interactive global map and timeline built with D3.js and public WHO data.",
    description: "Created an interactive data visualization tool using D3.js that maps COVID-19 case trends globally. Users can filter by country, date range, and metric. Data is fetched live from the WHO API and cached.",
    stack: ["JavaScript", "D3.js", "HTML/CSS", "WHO API", "Node.js"],
    highlights: [
      "Choropleth map with 190+ countries",
      "Animated timeline playback",
      "Mobile-responsive layout"
    ],
    demo: "#",
    code: "#"
  },
  {
    title: "Automated ETL Pipeline",
    category: "Data Engineering",
    date: "Jul 2024",
    emoji: "⚙️",
    color: "#fce8e8",
    short: "Airflow DAG pipeline that ingests, validates, and loads 2M+ rows daily.",
    description: "Built a production-grade ETL pipeline with Apache Airflow that extracts data from 5 APIs, validates schemas with Great Expectations, and loads clean data into Snowflake. Includes alerting and auto-retry logic.",
    stack: ["Apache Airflow", "Python", "Snowflake", "Great Expectations", "Docker"],
    highlights: [
      "2M+ rows processed daily",
      "Automated data quality checks",
      "Slack alerting on failures"
    ],
    demo: "#",
    code: "#"
  },
  {
    title: "Recommender System",
    category: "Machine Learning",
    date: "May 2024",
    emoji: "🎬",
    color: "#e8eef8",
    short: "Collaborative filtering + content-based hybrid recommender for a movie dataset.",
    description: "Implemented a hybrid recommender system combining matrix factorization (SVD) with content-based filtering using TF-IDF on movie genres and descriptions. Evaluated with Precision@K and NDCG metrics.",
    stack: ["Python", "Surprise", "Scikit-learn", "NumPy", "Flask"],
    highlights: [
      "Precision@10 of 0.78",
      "Cold-start handled with content fallback",
      "Flask API with simple front-end demo"
    ],
    demo: "#",
    code: "#"
  }
];

// =============================================
// RENDERING LOGIC (no need to edit below)
// =============================================
const colors = ["#e8f4f8","#f0e8f8","#fef3e2","#e8f8ee","#fce8e8","#e8eef8","#f8f0e8"];

function buildFilters() {
  const cats = ["all", ...new Set(projects.map(p => p.category))];
  const f = document.getElementById("filters");
  f.innerHTML = cats.map(c =>
    `<button class="filter-btn ${c==='all'?'active':''}" data-cat="${c}">${c==='all'?'All':c}</button>`
  ).join('');
  f.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      f.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGrid(btn.dataset.cat);
    });
  });
}

function renderGrid(cat) {
  const filtered = cat === 'all' ? projects : projects.filter(p => p.category === cat);
  document.getElementById('proj-count').textContent = projects.length;
  document.getElementById('grid').innerHTML = filtered.map((p, i) => `
    <div class="project-card" onclick="openModal(${projects.indexOf(p)})">
      <div class="card-thumb" style="background:${p.color||colors[i%colors.length]}">${p.emoji}</div>
      <div class="card-body">
        <div class="card-tags"><span class="tag">${p.category}</span></div>
        <div class="card-title">${p.title}</div>
        <div class="card-desc">${p.short}</div>
      </div>
      <div class="card-footer">
        <span class="card-date">${p.date}</span>
        <span class="card-link">View details →</span>
      </div>
    </div>
  `).join('');
}

function openModal(i) {
  const p = projects[i];
  document.getElementById('modal-thumb').style.background = p.color || colors[i % colors.length];
  document.getElementById('modal-thumb').textContent = p.emoji;
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-desc').textContent = p.description;
  document.getElementById('modal-tags').innerHTML = `<span class="tag">${p.category}</span><span style="font-size:0.8rem;color:var(--muted)">${p.date}</span>`;
  document.getElementById('modal-stack').innerHTML = p.stack.map(s => `<span class="tech-pill">${s}</span>`).join('');
  document.getElementById('modal-highlights').innerHTML = p.highlights.map(h => `<li>${h}</li>`).join('');
  document.getElementById('modal-links').innerHTML = `
    ${p.demo && p.demo !== '#' ? `<a href="${p.demo}" target="_blank" class="btn-primary">Live Demo ↗</a>` : ''}
    ${p.code && p.code !== '#' ? `<a href="${p.code}" target="_blank" class="btn-outline">View Code ↗</a>` : ''}
  `;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (!e || e.target === document.getElementById('modal-overlay') || !e.target.closest) {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

buildFilters();
renderGrid('all');