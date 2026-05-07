export const productConfig = {
  "product": {
    "rank": 5,
    "tier": "P0",
    "score": 70,
    "domain": "WindowsApp",
    "ideaNo": 17,
    "ideaName": "カラー・LUT比較ビュー",
    "repository": "color-lut-compare-viewer",
    "publish": "GitHub Release / BOOTH",
    "priorityReason": "代表フレーム比較と採用理由の記録に絞れば、動画制作支援として販売価値がある。",
    "surface": "Windows ローカル運用向け CLI と静的 HTML ダッシュボード",
    "integration": "",
    "overview": "連携ツール: DaVinci Resolve / Premiere Pro。LUT、露出、肌色、黒つぶれ、白飛び、ショット間差を比較する。",
    "problem": "ショット間の色差やLUT適用ミスは、並べて見ないと判断しづらい。",
    "differentiation": "代表フレームを抽出し、差分と採用理由をレビュー用に残す。",
    "adobeHost": null,
    "adobeHostReason": null
  },
  "validation": {
    "requiredFields": [
      "id",
      "title",
      "owner",
      "source",
      "status",
      "decision"
    ],
    "recommendedFields": [
      "evidence",
      "notes",
      "tags"
    ],
    "warningStatuses": [
      "pending",
      "needs-review",
      "blocked"
    ],
    "acceptedDecisions": [
      "approved",
      "needs-fix",
      "pending",
      "rejected",
      "cataloged",
      "synced"
    ]
  },
  "qcds": {
    "scale": [
      "S+",
      "S-",
      "A+",
      "A-",
      "B+",
      "B-",
      "C+",
      "C-",
      "D+",
      "D-"
    ],
    "manualTestStatus": "手動テスト未実施",
    "manualTestUpperBound": "S-",
    "ratings": {
      "Quality": "S-",
      "Cost": "S-",
      "Delivery": "S-",
      "Satisfaction": "S-"
    }
  }
};
