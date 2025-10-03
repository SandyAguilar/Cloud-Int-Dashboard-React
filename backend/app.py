from flask import Flask, jsonify
from services import gcp_connector

app = Flask(__name__)

# --- Health check ---
@app.route("/api/health")
def health():
    return jsonify({"ok": True, "service": "flask"})

# --- GCP: Month-to-date costs by project+service ---
@app.route("/api/gcp/mtd")
def gcp_mtd():
    try:
        data = gcp_connector.get_mtd_costs_by_project_service()
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# --- Daily costs trend (dummy data for now) ---
@app.route("/api/costs/daily")
def daily_costs():
    # Replace this later with a BigQuery query 
    sample_data = [
        {"date": "2025-09-01", "cost": 41.2},
        {"date": "2025-09-02", "cost": 45.9},
        {"date": "2025-09-03", "cost": 38.5},
        {"date": "2025-09-04", "cost": 50.1},
        {"date": "2025-09-05", "cost": 47.0},
        {"date": "2025-09-06", "cost": 52.6},
        {"date": "2025-09-07", "cost": 49.3},
    ]
    return jsonify(sample_data)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
