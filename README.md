# 🍲 CookBook – Salesforce Digital Experience

[![Salesforce](https://img.shields.io/badge/Salesforce-Active-00A1E0?style=flat&logo=salesforce&logoColor=white)](https://orgfarm-e9c6032c36-dev-ed.develop.my.site.com/CookBook)



CookBook is a Salesforce **Digital Experience (Experience Cloud Site)** built using **Lightning Web Components (LWC)** and Salesforce APIs.  
It allows users to browse meals, view recipes, and explore step-by-step cooking instructions inside a sleek Salesforce-powered UI.  

**Site link:** [Visit CookBook Experience](https://orgfarm-e9c6032c36-dev-ed.develop.my.site.com/CookBook)
---

## 🚀 Features
- 🌐 Built as a **Salesforce Experience Site** for external users.  
- ⚡ Lightning Web Components (LWC) for dynamic and responsive UI.  
- 📡 API integration to fetch and display meal/recipe data.  
- 📱 Mobile-friendly modal UI for viewing recipe instructions.  
- 🎨 Styled with **SLDS + custom CSS** for a clean modern look.  

---

## 🛠️ Tech Stack
- **Salesforce DX** (SFDX project structure)  
- **Apex** (for backend logic & API integration)  
- **Lightning Web Components (LWC)**  
- **Experience Cloud (Digital Experience)**  

---

## 📂 Project Structure
```plaintext
CookBook/
├── .husky/ # Git hooks (pre-commit, etc.)
├── .vscode/ # VSCode settings
├── config/ # Project / CI configs
├── force-app/
│ └── main/
│ └── default/
│ └── lwc/ # Your LWC components live here
├── manifest/ # Salesforce metadata manifest files
├── scripts/ # Any scripts (e.g. automation, build)
├── .forceignore # Files to ignore for Salesforce deployments
├── .gitignore # Files/folders Git should ignore
├── package.json # NPM dependencies and scripts
├── sfdx-project.json # Salesforce DX project config
├── README.md # This file
└── other config files (.prettier, jest, eslint, etc.)



```bash
# Clone the repo
git clone https://github.com/Utkarsh91362/Cookbook.git
cd Cookbook

# Authenticate to your org
sfdx auth:web:login -a cookbook-dev

# Push source metadata to your dev org
sfdx force:source:push -u cookbook-dev

# Open your org in browser
sfdx force:org:open -u cookbook-dev